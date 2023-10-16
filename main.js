"use strict";

/*
 * Created with @iobroker/create-adapter v2.5.0
 */

const utils = require("@iobroker/adapter-core");
const Json2iob = require("json2iob");
const apiTV = require("./lib/api");
const wol = require("wake_on_lan");
const helper = require("./lib/helper");
const constants = require("./lib/constants");
const axios = require("axios").default;
const crypto_1 = require("crypto");
const exec = require("node-exec-promise").exec;
const fs = require("fs");
class PhilipsAndroidTv extends utils.Adapter {
    /**
     * @param {Partial<utils.AdapterOptions>} [options={}]
     */
    constructor(options) {
        super({
            ...options,
            name: "philips-android-tv",
        });
        this.on("ready", this.onReady.bind(this));
        this.on("stateChange", this.onStateChange.bind(this));
        // this.on("objectChange", this.onObjectChange.bind(this));
        this.on("message", this.onMessage.bind(this));
        this.on("unload", this.onUnload.bind(this));
        this.json2iob = new Json2iob(this);
        this.createDataPoint = helper.createDataPoint;
        this.createSettings = helper.createSettings;
        this.createApplication = helper.createApplication;
        this.createNetwork = helper.createNetwork;
        this.createTV = helper.createTV;
        this.createRequest = helper.createRequest;
        this.createVolume = helper.createVolume;
        this.createChannel = helper.createChannel;
        this.double_call = {};
        this.clients = {};
        this.pairing = {};
        this.isOnline = {};
        this.tv = {};
        this.clientsIDdelete = [];
        this.lang = "de";
        this.requestClient = axios.create({
            withCredentials: true,
        });
    }

    /**
     * Is called when databases are connected and adapter received configuration.
     */
    async onReady() {
        // Initialize your adapter here
        if (!fs.existsSync(`${this.adapterDir}/lib/data`)) {
            fs.mkdirSync(`${this.adapterDir}/lib/data`);
        }
        this.setState("info.connection", false, true);
        await this.setUserdata();
        const obj = await this.getForeignObjectAsync("system.config");
        if (obj && obj.common && obj.common.language) {
            try {
                this.lang = obj.common.language === this.lang ? this.lang : obj.common.language;
            } catch (e) {
                this.lang = "de";
            }
        }
        let check_name = {};
        const config_array = this.config.icons;
        if (Object.keys(config_array).length > 0) {
            for (const jsons of config_array) {
                if (check_name[jsons.iconname]) {
                    this.log.error(`Duplicate icon name - ${jsons.iconname}!!!`);
                }
                check_name[jsons.iconname] = jsons.iconname;
            }
        }
        if (this.config.interval < 5) {
            this.log.info("Set interval to minimum 5 seconds!");
            this.config.interval = 5;
        }
        check_name = {};
        let devices = [];
        try {
            devices = typeof this.config.tv === "object" ? JSON.parse(JSON.stringify(this.config.tv)) : [];
        } catch (e) {
            devices = [];
        }
        for (const dev of devices) {
            if (dev.activ != null && !dev.activ) {
                this.log.info(`TV ${dev.ip} is disabled!`);
                continue;
            }
            if (dev.ip == "") {
                this.log.warn(`Missing TV IP!`);
                continue;
            }
            if (dev.api == "") {
                this.log.warn(`Missing TV API!`);
                continue;
            }
            if (dev.type == "") {
                this.log.warn(`Missing TV Type!`);
                continue;
            }
            if (check_name[dev.ip]) {
                this.log.error(`Duplicate IP ${dev.ip} is not allowed!!!`);
                continue;
            }
            check_name[dev.ip] = dev.ip;
            if (dev.type === "Jointspace") {
                if (dev.api === 1 || dev.api === 5) {
                    dev.http = `http://${dev.ip}:1925/${dev.api}`;
                    dev.https = `http://${dev.ip}:1925/${dev.api}`;
                } else {
                    this.log.warn(`Type ${dev.type} is not allowed without Type V6!!!`);
                    continue;
                }
            } else if (dev.type === "Android") {
                if (dev.api === 6) {
                    if (dev.username == "" || dev.password == "") {
                        this.log.warn(`The TV ${dev.ip} is not paired!!!`);
                        continue;
                    }
                    dev.http = `http://${dev.ip}:1925/${dev.api}`;
                    dev.https = `https://${dev.ip}:1926/${dev.api}`;
                    dev.password = this.decrypt(dev.password);
                } else if (dev.api === 5) {
                    dev.http = `http://${dev.ip}:1925/${dev.api}`;
                    dev.https = `https://${dev.ip}:1926/${dev.api}`;
                } else {
                    this.log.warn(`Type ${dev.type}is not allowed without Type V1!!!`);
                    continue;
                }
            } else {
                this.log.error(`Unknown type - ${dev.ip}`);
                continue;
            }
            dev.dp = this.forbidden_ip(dev.ip);
            this.tv[dev.dp] = false;
            this.subscribeStates(`${dev.dp}.remote.*`);
            dev.apiTV = new apiTV(dev, this);
            dev.apiTV.on("offline", this.offline_TV.bind(this));
            dev.apiTV.on("data", this.data_TV.bind(this));
            const check = await dev.apiTV.getSystem(`${dev.http}/system`, null);
            this.log.info(`Create device ${dev.ip}`);
            await this.createTV(dev, check);
            let struct;
            let channel;
            if (check != null && check.notifyChange != null) {
                this.tv[dev.dp] = true;
                this.log.info(`Found device - ${dev.ip}`);
                this.isOnline[dev.dp] = true;
                this.setStateChanged(`info.connection`, true, true);
                await this.json2iob.parse(`${dev.dp}.system`, check, {
                    forceIndex: true,
                    preferedArrayName: null,
                    dontSaveCreatedObjects: true,
                    channelName: check.name,
                    autoCast: false,
                });
                struct = await this.getRequest(
                    `${dev.https}/menuitems/settings/structure`,
                    null,
                    dev.password,
                    dev.username,
                    "GET",
                );
                if (struct && struct.node) {
                    this.log.info(`Create settings for device ${dev.ip}`);
                    await this.createSettings(dev, struct);
                    dev.apiTV.setNewAPI(dev, struct);
                    fs.writeFileSync(`${this.adapterDir}/lib/data/${dev.dp}_struct`, JSON.stringify(struct), "utf-8");
                } else {
                    this.log.warn(`Create settings for device ${dev.ip} is not possible!`);
                    try {
                        if (fs.existsSync(`${this.adapterDir}/lib/data/${dev.dp}_struct`)) {
                            struct = fs.readFileSync(`${this.adapterDir}/lib/data/${dev.dp}_struct`, "utf-8");
                            dev.struct = JSON.parse(struct);
                        }
                    } catch (err) {
                        dev.struct = null;
                    }
                }
                const app = await this.getRequest(`${dev.https}/applications`, null, dev.password, dev.username, "GET");
                if (app && app.applications) {
                    this.log.info(`Create application for device ${dev.ip}`);
                    await this.createApplication(dev, app);
                    dev.app = app;
                } else {
                    this.log.warn(`Create application for device ${dev.ip} is not possible!`);
                }
                const net = await this.getRequest(
                    `${dev.https}/network/devices`,
                    null,
                    dev.password,
                    dev.username,
                    "GET",
                );
                if (net) {
                    this.log.info(`Found network for device ${dev.ip}`);
                    await this.createNetwork(dev, net);
                    dev.net = net;
                }
                if (dev.mon_vol) {
                    await this.createVolume(dev, true);
                } else {
                    await this.createVolume(dev, false);
                }
                channel = await this.getRequest(`${dev.https}/channeldb/tv`, null, dev.password, dev.username, "GET");
                await this.createChannel(dev, channel);
                dev.apiTV.checkInterval(true);
            } else {
                try {
                    if (fs.existsSync(`${this.adapterDir}/lib/data/${dev.dp}_channel`)) {
                        channel = fs.readFileSync(`${this.adapterDir}/lib/data/${dev.dp}_channel`, "utf-8");
                        dev.channel = JSON.parse(channel);
                    }
                } catch (err) {
                    dev.channel = null;
                }
                this.log.info(`Device ${dev.ip} is Offline! Monitoring is started.`);
                this.log.debug(`CHECK: ${check}`);
                dev.apiTV.checkInterval(false);
            }
            this.log.debug(`REQUEST: ${JSON.stringify(dev.request)}`);
            this.log.debug(`REQUEST_ID: ${dev.request_id}`);
            await this.createRequest(dev);
            this.clients[dev.dp] = Object.assign({}, dev);
            if (!dev.channel) {
                await this.setChannel(dev.dp, channel);
            }
            this.clientsIDdelete.push(dev);
        }
        this.checkDeviceFolder();
    }

    async setChannel(id, channel) {
        if (channel && channel.Channel) {
            fs.writeFileSync(`${this.adapterDir}/lib/data/${id}_channel`, JSON.stringify(channel), "utf-8");
            if (this.clients[id]) {
                this.clients[id].channel = channel;
            }
        } else {
            try {
                if (fs.existsSync(`${this.adapterDir}/lib/data/${id}_channel`)) {
                    channel = fs.readFileSync(`${this.adapterDir}/lib/data/${id}_channel`, "utf-8");
                    this.clients[id].channel = JSON.parse(channel);
                }
            } catch (err) {
                this.clients[id].channel = null;
            }
        }
    }

    async setUserdata() {
        const data = this.adapterConfig != null ? this.adapterConfig["native"] : "";
        let save_conf = false;
        if (data != null) {
            this.log.debug(JSON.stringify(data));
            if (data["selectTV"] != null && data["selectTV"] != "") {
                data["selectTV"] = "";
                save_conf = true;
            }
            if (data["pinCode"] != null && data["pinCode"] != "") {
                data["pinCode"] = "";
                save_conf = true;
            }
            if (data["tv"] != null) {
                for (const dev of data["tv"]) {
                    if (dev.username == "" && data["data_secret"] && data["data_secret"][dev.ip]) {
                        save_conf = true;
                        dev.username = data["data_secret"][dev.ip].username;
                        dev.password = data["data_secret"][dev.ip].password;
                        dev.pin = data["data_secret"][dev.ip].pin;
                    }
                }
                if (save_conf) {
                    this.log.info("Cleanup native...restart now...");
                    await this.extendForeignObjectAsync(`system.adapter.${this.namespace}`, {
                        native: data,
                    });
                }
            }
        }
    }

    /**
     *
     */
    async checkDeviceFolder() {
        try {
            const devices = await this.getDevicesAsync();
            for (const element of devices) {
                const id = element["_id"].split(".").pop();
                const isfind = this.clientsIDdelete.find((mes) => mes.dp === id);
                if (isfind) {
                    this.log.debug(`Found data point ${element["_id"]}`);
                } else {
                    this.log.info(`Delete data point ${element["_id"]}`);
                    await this.delObjectAsync(`${id}`, { recursive: true });
                    fs.rmSync(`${this.adapterDir}/lib/data/${id}_struct`);
                    fs.rmSync(`${this.adapterDir}/lib/data/${id}_channel`);
                }
            }
        } catch (e) {
            this.log.error(`checkDeviceFolder: ${e}`);
        }
    }

    offline_TV(ip, state) {
        this.tv[ip] = state;
        let on = 0;
        for (const id in this.tv) {
            if (this.tv[id]) {
                ++on;
            }
        }
        if (on != 0) {
            this.setStateChanged(`info.connection`, true, true);
        } else {
            this.setStateChanged(`info.connection`, false, true);
        }
    }

    data_TV(ip, data, setData) {
        switch (setData) {
            case "app":
                this.clients[ip].app = data;
                break;
            case "net":
                this.clients[ip].net = data;
                this.setStateChanged(`${ip}.status.network`, JSON.stringify(data), true);
                break;
            case "update":
                if (data && data.powerstate && data.powerstate.powerstate == "Standby") {
                    this.log.debug(`TV ${ip} is in Standby`);
                    this.setStateChanged(`${ip}.status.online_text`, "Standby", true);
                    this.setStateChanged(`${ip}.status.online`, false, true);
                } else if (data && data.powerstate && data.powerstate.powerstate == "On") {
                    this.log.debug(`TV ${ip} is Online`);
                    this.setStateChanged(`${ip}.status.online`, true, true);
                    this.setStateChanged(`${ip}.status.online_text`, "On", true);
                } else if (!data || !data.powerstate || data.powerstate.powerstate != "On") {
                    this.log.debug(`TV ${ip} is offline`);
                    this.setStateChanged(`${ip}.status.online`, false, true);
                    this.setStateChanged(`${ip}.status.online_text`, "Off", true);
                    return;
                }
                this.setStateChanged(`${ip}.status.notify`, JSON.stringify(data), true);
                break;
            default:
                this.log.warn(`No command implemented for data_TV of ${setData}`);
        }
    }

    forbidden_ip(ip) {
        return ip.replace(/[.]/gu, "_").replace(this.FORBIDDEN_CHARS, "_");
    }

    /**
     * Is called when adapter shuts down - callback has to be called under any circumstances!
     * @param {() => void} callback
     */
    onUnload(callback) {
        try {
            for (const id in this.clients) {
                this.clients[id].apiTV.destroy();
            }
            callback();
        } catch (e) {
            callback();
        }
    }

    // If you need to react to object changes, uncomment the following block and the corresponding line in the constructor.
    // You also need to subscribe to the objects with `this.subscribeObjects`, similar to `this.subscribeStates`.
    // /**
    //  * Is called if a subscribed object changes
    //  * @param {string} id
    //  * @param {ioBroker.Object | null | undefined} obj
    //  */
    // onObjectChange(id, obj) {
    //     if (obj) {
    //         // The object was changed
    //         this.log.info(`object ${id} changed: ${JSON.stringify(obj)}`);
    //     } else {
    //         // The object was deleted
    //         this.log.info(`object ${id} deleted`);
    //     }
    // }

    /**
     * Is called if a subscribed state changes
     * @param {string} id
     * @param {ioBroker.State | null | undefined} state
     */
    onStateChange(id, state) {
        if (state && !state.ack) {
            const idParts = id.split(".");
            const command = idParts.pop();
            const channel = idParts.pop();
            const deviceId = id.split(".")[2];
            this.log.info(`COMMOND: ${command} - CHANNEL: ${channel} - ID: ${deviceId} - STATE: ${state.val}`);
            if (command === "json" || command === "address" || command === "methode" || command === "path") {
                this.setAckFlag(id);
                return;
            }
            if (command === "wol") {
                this.setCommand(command, deviceId, id, state);
                return;
            }
            if (!this.tv[deviceId] || command == null) {
                this.log.warn(`Ignoring state change of "${id}", because TV is not ready`);
                return;
            }
            if (command === "ambilight_On_Off" || command === "launchAPP" || command === "hdmiInput") {
                this.setCommand(command, deviceId, id, state);
                return;
            }
            if (channel === "keys") {
                const keyName = command.charAt(0).toUpperCase() + command.substring(1);
                this.log.debug(`Sending key "${keyName}"`);
                this.setKey(keyName, deviceId, id);
                return;
            }
            if (channel === "settings") {
                this.setSettings(state, deviceId, id);
                return;
            }
            if (channel === "own_request" && command === "sent_request" && state.val) {
                this.sentRequest(deviceId);
                return;
            }
        }
    }

    async sentRequest(deviceId) {
        if (!this.clients[deviceId]) {
            this.log.error(`Cannot sent request!`);
            return;
        }
        const methode = await this.getStateAsync(`${deviceId}.remote.own_request.methode`);
        const json = await this.getStateAsync(`${deviceId}.remote.own_request.json`);
        const address = await this.getStateAsync(`${deviceId}.remote.own_request.address`);
        const path = await this.getStateAsync(`${deviceId}.remote.own_request.path`);
        let json_parse;
        let auth = true;
        if (methode == null || (methode.val != "GET" && methode.val != "POST")) {
            this.log.warn(`Only GET or POST are allowed!`);
            return;
        }
        if (address == null || address.val == null || address.val == "") {
            this.log.warn(`Datapoint ADDRESS is empty!`);
            return;
        }
        if (path == null || path.val == null || path.val == "") {
            this.log.warn(`Datapoint PATH is empty!`);
            return;
        }
        if (json == null) {
            this.log.warn(`Datapoint JSON is empty!`);
            return;
        }
        try {
            if (json.val == null || json.val == "") {
                json_parse = null;
            } else {
                json_parse = JSON.parse(json.val.toString());
            }
        } catch (e) {
            this.log.warn(`JSON cannot parse: ${JSON.stringify(e)}`);
            return;
        }
        if (address.val.toString().indexOf("https") !== -1 && path.val == "/system") {
            auth = false;
        }
        const res = await this.clients[deviceId].apiTV.own_request(
            json_parse,
            methode.val,
            address.val,
            path.val,
            auth,
        );
        this.setState(`${deviceId}.remote.own_request.result`, JSON.stringify(res), true);
    }

    async setCommand(command, deviceId, id, state) {
        let data = null;
        let path = null;
        if (command === "ambilight_On_Off") {
            if (state.val) {
                data = { power: "On" };
            } else {
                data = { power: "Off" };
            }
            path = "ambilight/power";
        } else if (command === "hdmiInput") {
            if (state.val > 0 && state.val < 5) {
                data = { query: `HDMI ${state.val}` };
                path = "activities/launch";
            }
        } else if (command === "launchAPP") {
            const appName = state.val;
            if (!this.clients[deviceId] || !this.clients[deviceId].app) {
                this.log.error(`No apps cached, cannot launch "${appName}"`);
                return;
            }
            data = this.clients[deviceId].app.find((entry) => entry.label === appName);
            if (!data) {
                this.log.error(`Application "${appName}" not found`);
                return;
            }
            path = "activities/launch";
        } else if (command === "wol") {
            let isOK = 1;
            if (!this.clients[deviceId]) {
                this.log.error(`Cannot found mac!`);
                return;
            }
            if (!this.clients[deviceId].net) {
                const lan = await this.getStateAsync(`${deviceId}.status.network`);
                if (lan == null || lan.val == null) {
                    this.log.error(`Cannot load mac!`);
                    return;
                } else {
                    try {
                        this.clients[deviceId].net = JSON.parse(lan.val.toString());
                    } catch (e) {
                        this.log.error(`Error mac: ${JSON.stringify(e)}`);
                        return;
                    }
                }
            }
            if (!this.clients[deviceId].net[0] || !this.clients[deviceId].net[1]) {
                this.log.error(`Cannot read mac!`);
                return;
            }
            let mac = "";
            if (this.clients[deviceId].net[0]["wake-on-lan"] === "Enabled") {
                mac = this.clients[deviceId].net[0]["mac"];
            } else if (this.clients[deviceId].net[1]["wake-on-lan"] === "Enabled") {
                mac = this.clients[deviceId].net[1]["mac"];
            } else {
                this.log.error(`Cannot found mac in JSON!`);
                return;
            }
            for (let i = 0; i < 5; i++) {
                wol.wake(mac, { address: "255.255.255.255" }, (error) => {
                    if (error) {
                        this.log.info(`Error sending wol: ${JSON.stringify(error)}`);
                    } else {
                        if (isOK === 1) {
                            this.log.info(`Packets sending to ${mac} successfully.`);
                            this.setAckFlag(id, { val: false });
                        }
                        ++isOK;
                    }
                });
            }
            return;
        }
        const answer_key = await this.clients[deviceId].apiTV.requests(
            `${this.clients[deviceId].https}/${path}`,
            JSON.stringify(data),
            this.clients[deviceId].password,
            this.clients[deviceId].username,
            "POST",
        );
        this.setAckFlag(id);
        if (answer_key) {
            this.log.info(`Command ${id} sent successfully.`);
        } else {
            this.log.info(`Command ${id} sent not successfully.`);
        }
    }

    async setSettings(state, deviceId, id) {
        const obj = await this.getObjectAsync(id);
        if (obj && obj.native && obj.native.node_id && obj.native.send) {
            const data = {
                values: [{ value: { Nodeid: 0, Controllable: true, Available: true, data: {} } }],
            };
            data.values[0].value.Nodeid = obj.native.node_id;
            data.values[0].value.data[obj.native.send] = state.val;
            this.log.debug(JSON.stringify(data));
            const answer_key = await this.clients[deviceId].apiTV.requests(
                `${this.clients[deviceId].https}/menuitems/settings/update`,
                JSON.stringify(data),
                this.clients[deviceId].password,
                this.clients[deviceId].username,
                "POST",
            );
            this.setAckFlag(id);
            if (answer_key) {
                this.log.info(`Command ${id} sent successfully.`);
            }
        } else {
            this.log.info(`Command ${id} sent not successfully.`);
        }
    }

    async setKey(keyName, deviceId, id) {
        const answer_key = await this.clients[deviceId].apiTV.requests(
            `${this.clients[deviceId].https}/input/key`,
            JSON.stringify({ key: keyName }),
            this.clients[deviceId].password,
            this.clients[deviceId].username,
            "POST",
        );
        this.setAckFlag(id, { val: false });
        if (answer_key) {
            this.log.info(`Command ${keyName} sent successfully.`);
        }
    }

    async setAckFlag(id, value) {
        try {
            if (id) {
                this.setState(id, {
                    ack: true,
                    ...value,
                });
            }
        } catch (e) {
            this.log.info(`setAckFlag: ${e}`);
        }
    }

    // If you need to accept messages in your adapter, uncomment the following block and the corresponding line in the constructor.
    /**
     * Some message was sent to this instance over message box. Used by email, pushover, text2speech, ...
     * Using this method requires "common.messagebox" property to be set to true in io-package.json
     * @param {ioBroker.Message} obj
     */
    async onMessage(obj) {
        if (this.double_call[obj._id] != null) {
            return;
        }
        this.double_call[obj._id] = true;
        let adapterconfigs = {};
        try {
            // @ts-ignore
            adapterconfigs = this.adapterConfig;
        } catch (error) {
            this.sendTo(obj.from, obj.command, [], obj.callback);
            delete this.double_call[obj._id];
            return;
        }
        if (typeof obj === "object" && obj.message) {
            if (obj.command === "getPW") {
                if (obj && obj.message && obj.message != "" && obj.message.user != "" && obj.message.user.word != "") {
                    const ip = this.forbidden_ip(obj.message.user.word);
                    this.setPairingData(ip, "pass");
                    this.pairing[ip].pass = obj;
                }
                delete this.double_call[obj._id];
                return;
            } else if (obj.command === "getUN") {
                if (obj && obj.message && obj.message != "" && obj.message.user != "" && obj.message.user.name != "") {
                    const ip = this.forbidden_ip(obj.message.user.name);
                    this.setPairingData(ip, "user");
                    this.pairing[ip].user = obj;
                }
                delete this.double_call[obj._id];
                return;
            } else if (obj.command === "getPin") {
                if (obj && obj.message && obj.message != "" && obj.message.user != "" && obj.message.user.pin != "") {
                    const ip = this.forbidden_ip(obj.message.user.pin);
                    this.setPairingData(ip, "pin");
                    this.pairing[ip].pin = obj;
                }
                delete this.double_call[obj._id];
                return;
            } else if (obj.command === "getTEXT" && obj.message === "undefined") {
                if (!this.pairing["text"]) {
                    this.pairing["text"] = constants.pairingText.no_found_device[this.lang];
                }
                this.sendTo(obj.from, obj.command, [this.pairing["text"]], obj.callback);
                delete this.double_call[obj._id];
                return;
            } else if (obj.command === "getTEXT" && this.pairing["text"] && obj.message !== "undefined") {
                this.pairing["text"] = constants.pairingText.button_pair[this.lang];
                this.sendTo(obj.from, obj.command, [this.pairing["text"]], obj.callback);
                delete this.double_call[obj._id];
                return;
            } else if (obj.command === "pairing") {
                this.log.debug(JSON.stringify(obj));
                if (obj && obj.message && obj.message != "") {
                    const ip = this.forbidden_ip(obj.message);
                    if (this.clients[ip] == null) {
                        //const check = await this.onlineCheck(`http://${obj.message}:1925/6/system`);
                        const check = { notifyChange: "http" };
                        if (check != null && check.notifyChange != null) {
                            this.pairing["text"] = constants.pairingText.button_pin[this.lang];
                            this.log.info(`Start pairing - ${JSON.stringify(check)}`);
                            const device_id = await this.makeRandomString(16);
                            this.setPairingData(ip, "device_id");
                            this.pairing[ip].device_id = { id: device_id };
                            const data = constants.getPair;
                            data.device.id = device_id;
                            const pair = await this.getRequest(
                                `https://${obj.message}:1926/6/pair/request`,
                                data,
                                null,
                                null,
                                "POST",
                            );
                            //const pair = { error_id: "SUCCESS", auth_key: "OK" };
                            this.log.info(`Response request - ${JSON.stringify(pair)}`);
                            this.log.debug(`Response request - ${JSON.stringify(pair.error_id)}`);
                            if (pair && pair.error_id && pair.error_id == "SUCCESS" && pair.auth_key != "") {
                                pair.auth_key = this.encrypt(pair.auth_key);
                                pair.pw = pair.auth_key;
                                this.setPairingData(ip, "auth");
                                this.pairing[ip].auth = pair;
                                this.sendTo(
                                    obj.from,
                                    obj.command,
                                    { result: constants.pairingText.button_pin[this.lang] },
                                    obj.callback,
                                );
                            } else if (pair && pair.error_id && pair.error_id == "CONCURRENT_PAIRING") {
                                this.sendTo(
                                    obj.from,
                                    obj.command,
                                    { error: constants.pairingText.pair_active[this.lang] },
                                    obj.callback,
                                );
                            } else {
                                this.sendTo(obj.from, obj.command, { result: JSON.stringify(pair) }, obj.callback);
                            }
                        } else {
                            this.log.warn(`Device ${obj.message} cannot be reached`);
                            let e_message;
                            if (check && check.message) {
                                e_message = constants.pairingText.error_pair[this.lang].replace(
                                    /<Lucky-ESA>/g,
                                    check.message,
                                );
                            } else {
                                e_message = JSON.stringify(check);
                            }
                            this.sendTo(obj.from, obj.command, { error: e_message }, obj.callback);
                        }
                    } else {
                        this.log.warn(`Missing IP!`);
                        this.sendTo(
                            obj.from,
                            obj.command,
                            { error: constants.pairingText.missing_ip[this.lang] },
                            obj.callback,
                        );
                    }
                } else {
                    this.log.warn(`Cannot pairing - ${JSON.stringify(obj)}`);
                    this.sendTo(
                        obj.from,
                        obj.command,
                        { error: `Cannot pairing - ${JSON.stringify(obj)}` },
                        obj.callback,
                    );
                }
                return;
            } else if (obj.command === "submitPin") {
                this.log.debug(JSON.stringify(obj));
                if (obj && obj.message && obj.message.pair && obj.message.pair.tv != "" && obj.message.pair.pin != "") {
                    const ip = this.forbidden_ip(obj.message.pair.tv);
                    if (!this.pairing[ip]) {
                        this.sendTo(
                            obj.from,
                            obj.command,
                            { error: constants.pairingText.missing_ip[this.lang] },
                            obj.callback,
                        );
                        return;
                    }
                    if (!this.pairing[ip].auth) {
                        this.sendTo(
                            obj.from,
                            obj.command,
                            { error: constants.pairingText.no_auth[this.lang] },
                            obj.callback,
                        );
                        return;
                    }
                    if (!this.pairing[ip].device_id || !this.pairing[ip].device_id.id) {
                        this.sendTo(
                            obj.from,
                            obj.command,
                            { error: constants.pairingText.no_username[this.lang] },
                            obj.callback,
                        );
                        return;
                    }
                    if (!this.pairing[ip].pass) {
                        this.sendTo(
                            obj.from,
                            obj.command,
                            { error: constants.pairingText.pw_assigned[this.lang] },
                            obj.callback,
                        );
                        return;
                    }
                    if (!this.pairing[ip].user) {
                        this.sendTo(
                            obj.from,
                            obj.command,
                            { error: constants.pairingText.un_assigned[this.lang] },
                            obj.callback,
                        );
                        return;
                    }
                    const timestamp = this.pairing[ip].auth.timestamp;
                    const pin = obj.message.pair.pin;
                    const auth_timestamp = `${timestamp}${pin}`;
                    const hash = crypto_1
                        .createHmac("sha1", Buffer.from(constants.secret_key, "base64").toString())
                        .update(auth_timestamp)
                        .digest("hex");
                    const data = constants.getGrant;
                    data.auth.pin = pin;
                    data.auth.auth_timestamp = timestamp;
                    data.auth.auth_signature = hash;
                    data.device.id = this.pairing[ip].device_id.id;
                    this.log.debug(JSON.stringify(data));
                    const grant = await this.getRequest(
                        `https://${obj.message.pair.tv}:1926/6/pair/grant`,
                        data,
                        this.pairing[ip].auth.pw,
                        data.device.id,
                        "POST",
                    );
                    //const grant = {
                    //    error_id: "SUCCESS",
                    //    error_text: "Pairing completed",
                    //};
                    this.log.debug(JSON.stringify(grant));
                    if (grant && grant.error_id === "SUCCESS") {
                        this.log.info(`Pairing was successful!`);
                        this.sendTo(
                            this.pairing[ip].pass.from,
                            this.pairing[ip].pass.command,
                            [this.pairing[ip].auth.auth_key],
                            this.pairing[ip].pass.callback,
                        );
                        this.sendTo(
                            this.pairing[ip].user.from,
                            this.pairing[ip].user.command,
                            [this.pairing[ip].device_id.id],
                            this.pairing[ip].user.callback,
                        );
                        this.sendTo(
                            this.pairing[ip].pin.from,
                            this.pairing[ip].pin.command,
                            [data.auth.pin],
                            this.pairing[ip].pin.callback,
                        );
                        const data_secret = {};
                        data_secret[obj.message.pair.tv] = {
                            username: this.pairing[ip].device_id.id,
                            password: this.pairing[ip].auth.auth_key,
                            pin: data.auth.pin,
                        };
                        await this.extendForeignObjectAsync(`system.adapter.${this.namespace}`, {
                            native: { data_secret },
                        });
                        this.sendTo(
                            obj.from,
                            obj.command,
                            {
                                result: constants.pairingText.pair_done[this.lang].replace(
                                    /<Lucky-ESA>/g,
                                    obj.message.pair.tv,
                                ),
                            },
                            obj.callback,
                        );
                    } else {
                        this.log.info(`Pairing was not successful!`);
                        this.sendTo(
                            obj.from,
                            obj.command,
                            { error: constants.pairingText.unknwon_pair[this.lang] },
                            obj.callback,
                        );
                    }
                } else {
                    this.sendTo(
                        obj.from,
                        obj.command,
                        { error: constants.pairingText.missing_ip_pin[this.lang] },
                        obj.callback,
                    );
                }
                return;
            } else if (obj.command === "getTV") {
                this.pairing["text"] = constants.pairingText.no_found_device[this.lang];
                if (obj && obj.message && obj.message.tv && obj.message.tv.tvs) {
                    if (Object.keys(obj.message.tv.tvs).length > 0) {
                        const tvs = [];
                        for (const tv of obj.message.tv.tvs) {
                            if (
                                tv &&
                                tv.ip != "" &&
                                tv.api === 6 &&
                                tv.type === "Android" &&
                                tv.password == "" &&
                                tv.username == ""
                            ) {
                                const label = tv.ip;
                                tvs.push({ label: label, value: tv.ip });
                                this.pairing["text"] = constants.pairingText.found_device[this.lang];
                            }
                        }
                        tvs.sort((a, b) => (a.label > b.label ? 1 : b.label > a.label ? -1 : 0));
                        this.sendTo(obj.from, obj.command, tvs, obj.callback);
                    }
                } else {
                    this.sendTo(obj.from, obj.command, [], obj.callback);
                }
                return;
            } else if (obj.command === "getIconList") {
                try {
                    let icon_array = [];
                    const icons = [];
                    if (obj && obj.message && obj.message.icon && obj.message.icon.icons) {
                        icon_array = obj.message.icon.icons;
                    } else if (adapterconfigs && adapterconfigs.native && adapterconfigs.native.icons) {
                        icon_array = adapterconfigs.native.icons;
                    }
                    if (icon_array && Object.keys(icon_array).length > 0) {
                        for (const icon of icon_array) {
                            const label = icon.iconname;
                            icons.push({ label: label, value: icon.picture });
                        }
                        icons.sort((a, b) => (a.label > b.label ? 1 : b.label > a.label ? -1 : 0));
                        this.sendTo(obj.from, obj.command, icons, obj.callback);
                    } else {
                        this.sendTo(obj.from, obj.command, [], obj.callback);
                    }
                } catch (error) {
                    delete this.double_call[obj._id];
                    this.sendTo(obj.from, obj.command, [], obj.callback);
                }
                delete this.double_call[obj._id];
                return;
            }
            this.log.debug("hm " + JSON.stringify(obj));
        }
    }

    setPairingData(ip, data) {
        if (!this.pairing[ip]) this.pairing[ip] = {};
        if (this.pairing[ip] && data != null && !this.pairing[ip][data]) this.pairing[ip][data] = {};
    }

    async getRequest(request, data, pw, user, methode) {
        let dig = "";
        if (pw && user) {
            pw = `-u ${user}:${pw} `;
            dig = `--digest `;
        } else {
            pw = "";
            dig = "";
        }
        if (data) {
            data = `-d '${JSON.stringify(data)}' `;
        } else {
            data = "";
        }
        return await exec(
            `curl -X ${methode} ${dig}` + `--insecure --connect-timeout 5 ` + `${pw}` + `${data}` + `${request}`,
        ).then(
            (out) => {
                this.log.debug("OUT: " + out.stdout + " - " + out.stderr);
                try {
                    return JSON.parse(out.stdout);
                } catch (e) {
                    this.log.debug(`paring catch: ${JSON.stringify(e)}`);
                    if (out.stdout.toString().indexOf("Unauthorized") !== -1) {
                        return { error: "Unauthorized" };
                    }
                    return false;
                }
            },
            (err) => {
                this.log.debug(`paring: ${JSON.stringify(err)}`);
                return false;
            },
        );
    }

    async onlineCheck(request) {
        return await this.requestClient({
            method: "post",
            maxBodyLength: Infinity,
            url: request,
            headers: {
                Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                "User-Agent":
                    "Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1",
                "Accept-Language": "de-de",
                "content-type": "application/json; charset=UTF-8",
            },
        })
            .then(async (res) => {
                return res.data;
            })
            .catch((error) => {
                return error;
            });
    }

    async makeRandomString(length) {
        try {
            let result = "";
            const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            const charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        } catch (e) {
            this.log.debug(`try makeRandomString: ${e}`);
            return "gzW5M89UjuhgRf6F";
        }
    }
}

if (require.main !== module) {
    // Export the constructor in compact mode
    /**
     * @param {Partial<utils.AdapterOptions>} [options={}]
     */
    module.exports = (options) => new PhilipsAndroidTv(options);
} else {
    // otherwise start the instance directly
    new PhilipsAndroidTv();
}
