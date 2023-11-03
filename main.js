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
const util = require("util");
const exec = util.promisify(require("child_process").exec);
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
        this.createAurora = helper.createAurora;
        this.double_call = {};
        this.sleepTimer = {};
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
            //const check = await this.getRequest(
            //    `${dev.https}/system`,
            //    { userid: dev.username },
            //    dev.password,
            //    dev.username,
            //    "POST",
            //);
            this.log.debug(`SYSTEM: ${JSON.stringify(check)}`);
            this.log.info(`Create device ${dev.ip}`);
            await this.createTV(dev, check);
            let struct;
            let channel;
            if (check != null && check.notifyChange != null) {
                this.tv[dev.dp] = true;
                this.log.info(`Found device - ${dev.ip}`);
                this.isOnline[dev.dp] = true;
                this.setStateChanged(`info.connection`, true, true);
                for (const key in check) {
                    if (key.endsWith("_encrypted")) {
                        check[key] = await this.encrypted(check[key]);
                    }
                }
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
                const topology = await this.getRequest(
                    `${dev.https}/ambilight/topology`,
                    null,
                    dev.password,
                    dev.username,
                    "GET",
                );
                if (struct && struct.node) {
                    this.log.info(`Create settings for device ${dev.ip}`);
                    await this.createSettings(dev, struct, topology, fs);
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
                if (check.featuring.jsonfeatures.aurora.includes("available")) {
                    await this.createAurora(dev, fs);
                }
                dev.apiTV.checkInterval(true);
            } else {
                try {
                    if (fs.existsSync(`${this.adapterDir}/lib/data/${dev.dp}_aurora`)) {
                        const aurora = fs.readFileSync(`${this.adapterDir}/lib/data/${dev.dp}_aurora`, "utf-8");
                        dev.aurora = JSON.parse(aurora);
                    }
                } catch (err) {
                    dev.aurora = null;
                }
                this.log.info(`Device ${dev.ip} is Offline! Monitoring is started.`);
                this.log.debug(`CHECK: ${check}`);
                dev.apiTV.checkInterval(false);
            }
            this.log.debug(`REQUEST: ${JSON.stringify(dev.request)}`);
            this.log.debug(`REQUEST_ID: ${dev.request_id}`);
            await this.createRequest(dev);
            this.clients[dev.dp] = Object.assign({}, dev);
            await this.setChannel(dev.dp, channel);
            await this.setFavorite(dev);
            this.clientsIDdelete.push(dev);
        }
        this.checkDeviceFolder();
    }

    async encrypted(value) {
        const key = Buffer.from(constants.decrypt_key, "base64");
        const ivCiphertext = Buffer.from(value, "base64");
        const iv = ivCiphertext.slice(0, 16);
        const ciphertext = ivCiphertext.slice(16);
        try {
            const decipher = crypto_1.createDecipheriv("AES-128-CBC", key, iv);
            // @ts-ignore
            return decipher.update(ciphertext, "", "utf8") + decipher.final("utf8");
        } catch (err) {
            this.log.warn(`encrypted: ${err}`);
            return value;
        }
    }

    async setFavorite(id) {
        let fav_new;
        if (id.fav && Object.keys(id.fav).length > 0) {
            fs.writeFileSync(`${this.adapterDir}/lib/data/${id.dp}_favorite`, JSON.stringify(id.fav), "utf-8");
        } else {
            try {
                if (fs.existsSync(`${this.adapterDir}/lib/data/${id.dp}_favorite`)) {
                    fav_new = fs.readFileSync(`${this.adapterDir}/lib/data/${id.dp}_favorite`, "utf-8");
                    this.clients[id].fav = JSON.parse(fav_new);
                }
            } catch (err) {
                this.clients[id].fav = null;
            }
        }
    }

    async setChannel(id, channel) {
        let channel_new;
        if (channel && channel.Channel) {
            fs.writeFileSync(`${this.adapterDir}/lib/data/${id}_channel`, JSON.stringify(channel), "utf-8");
        } else {
            try {
                if (fs.existsSync(`${this.adapterDir}/lib/data/${id}_channel`)) {
                    channel_new = fs.readFileSync(`${this.adapterDir}/lib/data/${id}_channel`, "utf-8");
                    this.clients[id].channel = JSON.parse(channel_new);
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
                    if (fs.existsSync(`${this.adapterDir}/lib/data/${id}_pw`)) {
                        fs.rmSync(`${this.adapterDir}/lib/data/${id}_pw`);
                    }
                } else {
                    this.log.info(`Delete data point ${element["_id"]}`);
                    await this.delObjectAsync(`${id}`, { recursive: true });
                    if (fs.existsSync(`${this.adapterDir}/lib/data/${id}_struct`)) {
                        fs.rmSync(`${this.adapterDir}/lib/data/${id}_struct`);
                    }
                    if (fs.existsSync(`${this.adapterDir}/lib/data/${id}_channel`)) {
                        fs.rmSync(`${this.adapterDir}/lib/data/${id}_channel`);
                    }
                    if (fs.existsSync(`${this.adapterDir}/lib/data/${id}_favorite`)) {
                        fs.rmSync(`${this.adapterDir}/lib/data/${id}_favorite`);
                    }
                    if (fs.existsSync(`${this.adapterDir}/lib/data/${id}_aurora`)) {
                        fs.rmSync(`${this.adapterDir}/lib/data/${id}_aurora`);
                    }
                    if (fs.existsSync(`${this.adapterDir}/lib/data/${id}_lang`)) {
                        fs.rmSync(`${this.adapterDir}/lib/data/${id}_lang`);
                    }
                    if (fs.existsSync(`${this.adapterDir}/lib/data/${id}_pw`)) {
                        fs.rmSync(`${this.adapterDir}/lib/data/${id}_pw`);
                    }
                }
            }
        } catch (e) {
            this.log.error(`checkDeviceFolder: ${e}`);
        }
    }

    offline_TV(ip, state) {
        this.tv[ip] = state;
        let on = false;
        for (const id in this.tv) {
            if (this.tv[id]) {
                on = true;
            }
        }
        this.setStateChanged(`info.connection`, on, true);
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
                if (
                    data &&
                    data["activities/tv"] &&
                    data["activities/tv"].channel &&
                    data["activities/tv"].channel.ccid
                ) {
                    if (this.clients[ip] && this.clients[ip].mon_channel) {
                        this.setStateChanged(`${ip}.remote.settings.channel`, data["activities/tv"].channel.ccid, true);
                    }
                    if (
                        this.clients[ip] &&
                        this.clients[ip].fav &&
                        Object.keys(this.clients[ip].fav).length > 0 &&
                        this.clients[ip].mon_fav
                    ) {
                        for (const fav in this.clients[ip].fav) {
                            if (
                                this.clients[ip].fav[fav] != null &&
                                this.clients[ip].fav[fav].includes(data["activities/tv"].channel.ccid)
                            ) {
                                this.setStateChanged(
                                    `${ip}.remote.settings.${fav}`,
                                    data["activities/tv"].channel.ccid,
                                    true,
                                );
                            }
                        }
                    }
                }
                if (data && data.powerstate && data.powerstate.powerstate == "Standby") {
                    this.log.debug(`TV ${ip} is in Standby`);
                    this.setStateChanged(`${ip}.status.online_text`, "Standby", true);
                    this.setStateChanged(`${ip}.status.online`, false, true);
                } else if (data && data.powerstate && data.powerstate.powerstate == "On") {
                    if (!this.tv[ip]) {
                        this.log.debug(`TV ${ip} is Online`);
                        this.tv[ip] = true;
                    }
                    this.setStateChanged(`${ip}.status.online`, true, true);
                    this.setStateChanged(`${ip}.status.online_text`, "On", true);
                } else if (data && data.powerstate && data.powerstate.powerstate == "Off") {
                    this.log.debug(`TV ${ip} is offline`);
                    this.setStateChanged(`${ip}.status.online`, false, true);
                    this.setStateChanged(`${ip}.status.online_text`, "Off", true);
                }
                if (data && data.context) {
                    if (data.context.level1 == "WatchExtension") {
                        if (data.context.level2 == "Playstate") {
                            this.setStateChanged(`${ip}.status.input`, "HDMI", true);
                        } else if (data.context.level2 == "Options") {
                            this.setStateChanged(`${ip}.status.input`, "HDMI OPTIONS", true);
                        } else {
                            this.log.info(`Unknown context - ${JSON.stringify(data.context)}`);
                        }
                    } else if (data.context.level2 == "Setup_Menu") {
                        if (data.context.level3 == "aurora_options") {
                            this.setStateChanged(`${ip}.status.input`, "AURORA", true);
                        } else if (data.context.level3 == "sunrise_alarm") {
                            this.setStateChanged(`${ip}.status.input`, "SUNRISE ALARM", true);
                        } else {
                            this.log.info(`Unknown context - ${JSON.stringify(data.context)}`);
                        }
                    } else if (data.context.level2 == "Home") {
                        if (data.context.level3 == "source_section") {
                            this.setStateChanged(`${ip}.status.input`, "Settings", true);
                        } else {
                            this.log.info(`Unknown context - ${JSON.stringify(data.context)}`);
                        }
                    } else if (data.context.level1 == "WatchTv") {
                        if (data.context.level2 == "Playstate") {
                            this.setStateChanged(`${ip}.status.input`, "TV", true);
                        } else if (data.context.level2 == "Options" && data.context.level3 == "channel_info") {
                            this.setStateChanged(`${ip}.status.input`, "TV CHANNEL INFO", true);
                        } else if (data.context.level2 == "Options") {
                            this.setStateChanged(`${ip}.status.input`, "TV CHANNEL OPTIONS", true);
                        } else {
                            this.log.info(`Unknown context - ${JSON.stringify(data.context)}`);
                        }
                    } else if (data.context.level1 == "WatchSatellite" && data.context.level2 == "Playstate") {
                        if (data.context.level2 == "Playstate") {
                            this.setStateChanged(`${ip}.status.input`, "SATELLITE", true);
                        } else if (data.context.level2 == "Options" && data.context.level3 == "channel_info") {
                            this.setStateChanged(`${ip}.status.input`, "SAT CHANNEL INFO", true);
                        } else {
                            this.log.info(`Unknown context - ${JSON.stringify(data.context)}`);
                        }
                    } else if (data.context.level1 == "EPG") {
                        this.setStateChanged(`${ip}.status.input`, "EPG", true);
                        if (data.context.level2 != "NA" || data.context.level3 != "NA" || data.context.data != "NA") {
                            this.log.info(`Unknown context - ${JSON.stringify(data.context)}`);
                        }
                    } else if (data.context.level1 == "BrowseDlna") {
                        if (data.context.level2 == "Playstate" && data.context["data"] == "DMR Playing") {
                            this.setStateChanged(`${ip}.status.input`, "NETWORK PLAYING", true);
                        } else if (data.context.level2 == "Playstate" && data.context.data == "DMR Loading") {
                            this.setStateChanged(`${ip}.status.input`, "NETWORK LOADING", true);
                        } else if (data.context.level2 == "Playstate") {
                            this.setStateChanged(`${ip}.status.input`, "NETWORK", true);
                        } else if (data.context.level2 == "Browsestate") {
                            this.setStateChanged(`${ip}.status.input`, "NETWORK BROWSE", true);
                        } else {
                            this.log.info(`Unknown context - ${JSON.stringify(data.context)}`);
                        }
                    } else if (data.context.level1 == "BrowseUsb") {
                        if (data.context.level2 == "Favourites") {
                            this.setStateChanged(`${ip}.status.input`, "USB FAVORITE", true);
                        } else if (data.context.level2 == "Browsestate") {
                            this.setStateChanged(`${ip}.status.input`, "USB", true);
                        } else if (data.context.level2 == "last_played") {
                            this.setStateChanged(`${ip}.status.input`, "USB LAST PLAYED", true);
                        } else if (data.context.level2 == "most_popular") {
                            this.setStateChanged(`${ip}.status.input`, "USB MOST POPULAR", true);
                        } else {
                            this.log.info(`Unknown context - ${JSON.stringify(data.context)}`);
                        }
                    } else if (
                        data.context.level1 == "NA" &&
                        data.context.level2 == "NA" &&
                        data.context.level3 == "NA" &&
                        data.context.data == "NA"
                    ) {
                        this.setStateChanged(`${ip}.status.input`, "LAUNCH APP", true);
                    } else {
                        this.log.info(`Unknown context - ${JSON.stringify(data.context)}`);
                    }
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
                this.sleepTimer[id] && this.clearTimeout(this.sleepTimer[id]);
                this.resetFavorite(this.clients[id].dp);
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
            this.log.debug(`COMMOND: ${command} - CHANNEL: ${channel} - ID: ${deviceId} - STATE: ${state.val}`);
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
            if (channel === "own_request" && command === "sent_request" && state.val) {
                this.sentRequest(deviceId, id);
                return;
            }
            if (channel === "settings") {
                this.log.debug(`SETS: ${command}`);
                this.setSettings(state, deviceId, id, command);
                return;
            }
            if (channel === "aurora") {
                this.log.debug(`SETS: ${command}`);
                this.setAurora(state, deviceId, id, command);
                return;
            }
            if (channel === "own_request" && command === "save_pw" && state.val) {
                const pw = {
                    pw: this.clients[deviceId].password,
                    user: this.clients[deviceId].username,
                };
                fs.writeFileSync(
                    `${this.adapterDir}/lib/data/${this.clients[deviceId].dp}_pw`,
                    JSON.stringify(pw),
                    "utf-8",
                );
                this.log.info(
                    `Your data has been saved under ${this.adapterDir}/lib/data/${this.clients[deviceId].dp}_pw - This file will be automatically deleted after 5 minutes!`,
                );
                this.deletePW(deviceId);
                this.setAckFlag(id, { val: false });
                return;
            }
        }
    }

    deletePW(deviceId) {
        this.sleepTimer[deviceId] = this.setTimeout(
            () => {
                if (fs.existsSync(`${this.adapterDir}/lib/data/${this.clients[deviceId].dp}_pw`)) {
                    fs.rmSync(`${this.adapterDir}/lib/data/${this.clients[deviceId].dp}_pw`);
                }
            },
            60 * 1000 * 5,
        );
    }
    async setAurora(state, deviceId, id, command) {
        this.log.debug(`AURORA: ${JSON.stringify(this.clients[deviceId].aurora)}`);
        if (
            !this.clients[deviceId] ||
            !this.clients[deviceId].aurora ||
            !this.clients[deviceId].aurora.node ||
            !this.clients[deviceId].aurora.node.data ||
            !this.clients[deviceId].aurora.node.data.nodes
        ) {
            this.log.error(`Cannot sent aurora request!`);
            return;
        }
        const name = command.charAt(0).toUpperCase() + command.substring(1);
        this.log.debug(`name: ${name}`);
        const find_dp = this.clients[deviceId].aurora.node.data.nodes.find((mes) => mes.context === command);
        if (find_dp) {
            this.log.debug(`find_dp: ${JSON.stringify(find_dp)}`);
            const find_id = find_dp.data.enums.find((mes) => mes.enum_id === state.val);
            if (find_id) {
                this.log.debug(`find_id: ${JSON.stringify(find_id)}`);
                const req = {
                    values: [{ value: { node_id: find_dp.node_id, data: { selected_item: find_id.enum_id } } }],
                };
                const expert = { current: "expert" };
                const answer_mode = await this.clients[deviceId].apiTV.requests(
                    `${this.clients[deviceId].https}/ambilight/mode`,
                    JSON.stringify(expert),
                    this.clients[deviceId].password,
                    this.clients[deviceId].username,
                    "POST",
                );
                this.log.debug(`ModeAurora: ${answer_mode}`);
                const answer_key = await this.clients[deviceId].apiTV.requests(
                    `${this.clients[deviceId].https}/aurora/settings/update`,
                    JSON.stringify(req),
                    this.clients[deviceId].password,
                    this.clients[deviceId].username,
                    "POST",
                );
                this.log.debug(`AnswerAurora: ${answer_key}`);
                this.setAckFlag(id);
            } else {
                this.log.warn(`Cannot find value ${state.val} in Aurora!`);
            }
        } else {
            this.log.warn(`Cannot find ${command} in Aurora!`);
        }
    }

    async sentRequest(deviceId, id) {
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
        this.setAckFlag(id, { val: false });
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
            if (!this.clients[deviceId] || !this.clients[deviceId].app || !this.clients[deviceId].app.applications) {
                this.log.error(`No apps cached, cannot launch "${appName}"`);
                return;
            }
            this.log.info(JSON.stringify(this.clients[deviceId].app));
            data = this.clients[deviceId].app.applications.find((entry) => entry.label === appName);
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

    resetFavorite(dp) {
        this.setState(`${dp}.remote.settings.favorite_refresh`, false, true);
        this.setState(`${dp}.remote.settings.favorite_select`, 0, true);
        this.setState(`${dp}.remote.settings.favorite_add`, JSON.stringify([]), true);
        this.setState(`${dp}.remote.settings.favorite_channel_delete`, JSON.stringify([]), true);
        this.setState(`${dp}.remote.settings.favorite_sort`, JSON.stringify([]), true);
        this.setState(`${dp}.remote.settings.favorite_name`, "", true);
        this.setState(`${dp}.remote.settings.favorite_delete`, false, true);
        this.setState(`${dp}.remote.settings.favorite_create_channel`, JSON.stringify([]), true);
        this.setState(`${dp}.remote.settings.favorite_create_name`, "", true);
        this.setState(`${dp}.remote.settings.favorite_create`, false, true);
    }

    async favorite_id(dp) {
        return await this.getStateAsync(`${dp}.remote.settings.favorite_select`);
    }

    async checkFavorite(id, channel, fav_id, methode) {
        if (fav_id == null || fav_id.val === 0 || !this.clients[id].channel) {
            this.log.debug(`Favorite id 0 is not allowed - ${JSON.stringify(channel)}`);
            return false;
        }
        try {
            channel = JSON.parse(channel);
        } catch (e) {
            this.log.debug(`checkFavorite: ${e}`);
            return false;
        }
        const new_channel = [];
        if (channel && Object.keys(channel).length > 0) {
            const fav = await this.valueFavorite(id, fav_id.val);
            for (const ccid of channel) {
                const ccid_channel = this.clients[id].channel.Channel.find((entry) => entry.ccid == ccid);
                const ccid_fav = fav.channels.find((entry) => entry.ccid == ccid);
                if (!ccid_channel) {
                    this.log.debug(`Cannot find ${ccid} in the channellist!`);
                } else if (ccid_fav && methode === 1) {
                    this.log.debug(`Channel ID ${ccid} already exists!`);
                } else if (!ccid_fav && methode === 2) {
                    this.log.debug(`Channel ID ${ccid} cannot delete!`);
                } else if (methode === 3) {
                    new_channel.push(ccid);
                } else {
                    new_channel.push(ccid);
                }
            }
            if (new_channel && Object.keys(new_channel).length > 0) {
                return new_channel;
            } else {
                return false;
            }
        } else {
            this.log.info("E2: " + JSON.stringify(channel));
            return false;
        }
    }

    diffArray(arr1, arr2) {
        try {
            arr1 = typeof arr1 !== "object" ? JSON.parse(arr1) : arr1;
            arr2 = typeof arr2 !== "object" ? JSON.parse(arr2) : arr2;
            const diff = (a, b) => a.filter((item) => b.indexOf(item) === -1);
            const diff1 = diff(arr1, arr2);
            const diff2 = diff(arr2, arr1);
            return [].concat(diff1, diff2);
        } catch (e) {
            return null;
        }
    }

    async valueFavorite(deviceId, id) {
        return await this.getRequest(
            `${this.clients[deviceId].https}/channeldb/tv/favoriteLists/${id}`,
            null,
            this.clients[deviceId].password,
            this.clients[deviceId].username,
            "GET",
        );
    }

    async updateChannel(deviceId) {
        const channel = await this.getRequest(
            `${this.clients[deviceId].https}/channeldb/tv`,
            null,
            this.clients[deviceId].password,
            this.clients[deviceId].username,
            "GET",
        );
        await this.createChannel(this.clients[deviceId], channel);
        this.resetFavorite(this.clients[deviceId].dp);
    }

    checkWachTV(deviceId) {
        return new Promise((resolve) => {
            const context = this.getRequest(
                `${this.clients[deviceId].https}/context`,
                null,
                this.clients[deviceId].password,
                this.clients[deviceId].username,
                "GET",
            );
            if (context && context["level1"] == "WatchTv") {
                resolve(true);
            } else {
                this.log.warn(`Please switch to TV.`);
                resolve(false);
            }
        });
    }
    async setSettings(state, deviceId, id, set) {
        const aktiveTV = await this.checkWachTV(deviceId);
        if (set === "favorite_refresh") {
            this.updateChannel(deviceId);
            this.setAckFlag(id, { val: false });
        } else if (set === "favorite_select" && aktiveTV) {
            if (state.val == 0) {
                this.resetFavorite(this.clients[deviceId].dp);
            } else {
                const fav = await this.valueFavorite(deviceId, state.val);
                const all_channel = [];
                if (fav && fav.channels && Object.keys(fav.channels).length > 0) {
                    for (const fav_id of fav.channels) {
                        all_channel.push(fav_id.ccid);
                    }
                }
                if (all_channel && Array.isArray(all_channel) && Object.keys(all_channel).length > 0) {
                    if (fav && fav.name) {
                        this.setState(`${this.clients[deviceId].dp}.remote.settings.favorite_name`, fav.name, true);
                    }
                    this.setState(
                        `${this.clients[deviceId].dp}.remote.settings.favorite_sort`,
                        JSON.stringify(all_channel),
                        true,
                    );
                } else {
                    this.log.info(`The favourite ${fav.name} is empty`);
                }
            }
            this.setAckFlag(id);
        } else if (set === "favorite_name" && aktiveTV) {
            const fav_id = await this.favorite_id(this.clients[deviceId].dp);
            if (
                state &&
                state.val != null &&
                state.val != "" &&
                fav_id != null &&
                fav_id.val != null &&
                typeof fav_id.val == "number" &&
                fav_id.val > 0
            ) {
                const name = { name: state.val };
                const answer_name = await this.clients[deviceId].apiTV.sendRequest(name, "fav", fav_id.val);
                this.log.debug(`ANSWER NAME: ${JSON.stringify(answer_name)}`);
                this.updateChannel(deviceId);
                this.setAckFlag(id, { val: "" });
            }
        } else if (set === "favorite_add" && aktiveTV) {
            const fav_id = await this.favorite_id(this.clients[deviceId].dp);
            const check_fav = await this.checkFavorite(deviceId, state.val, fav_id, 1);
            if (check_fav && fav_id != null) {
                const fav_add = { add: { channels: check_fav }, remove: { channels: [] } };
                const answer_add = await this.clients[deviceId].apiTV.sendRequest(fav_add, "fav", fav_id.val);
                this.log.debug(`ANSWER ADD: ${JSON.stringify(answer_add)}`);
                this.updateChannel(deviceId);
                this.setAckFlag(id, { val: JSON.stringify([]) });
            }
        } else if (set === "favorite_delete" && aktiveTV) {
            const fav_id = await this.favorite_id(this.clients[deviceId].dp);
            if (fav_id == null) {
                this.log.warn(`Cannot found favorite id!`);
                return;
            }
            const fav = await this.valueFavorite(deviceId, fav_id.val);
            const del_fav = [];
            if (fav && fav.channels) {
                for (const ccid of fav.channels) {
                    del_fav.push(ccid);
                }
            }
            if (fav && fav.channels && Object.keys(fav.channels).length > 0 && fav_id != null) {
                const fav_del = { add: { channels: [] }, remove: { channels: del_fav } };
                await this.clients[deviceId].apiTV.sendRequest(fav_del, "fav", fav_id.val);
                //const name = { name: set.split("_").pop() };
                //await this.clients[deviceId].apiTV.sendRequest(name, "fav", fav_id.val);
                this.updateChannel(deviceId);
                this.setAckFlag(id, { val: false });
            }
        } else if (set === "favorite_channel_delete" && aktiveTV) {
            const fav_id = await this.favorite_id(this.clients[deviceId].dp);
            const check_fav = await this.checkFavorite(deviceId, state.val, fav_id, 2);
            if (check_fav && fav_id != null) {
                const fav_del = { add: { channels: [] }, remove: { channels: check_fav } };
                const answer_add = await this.clients[deviceId].apiTV.sendRequest(fav_del, "fav", fav_id.val);
                this.log.debug(`ANSWER ADD: ${JSON.stringify(answer_add)}`);
                this.updateChannel(deviceId);
                this.setAckFlag(id, { val: JSON.stringify([]) });
            }
        } else if (set === "favorite_sort" && aktiveTV) {
            const fav_id = await this.favorite_id(this.clients[deviceId].dp);
            if (fav_id == null) {
                this.log.warn(`Cannot found favorite id!`);
                return;
            }
            const fav = await this.valueFavorite(deviceId, fav_id.val);
            const sort_fav = [];
            if (fav && fav.channels) {
                for (const ccid of fav.channels) {
                    sort_fav.push(ccid);
                }
            }
            const check_diff = this.diffArray(state.val, sort_fav);
            if (check_diff != null && typeof check_diff == "object" && Object.keys(check_diff).length == 0) {
                const fav_sort = { channels: state.val };
                await this.clients[deviceId].apiTV.sendRequest(fav_sort, "sort", fav_id.val);
                this.updateChannel(deviceId);
                this.setAckFlag(id);
            }
        } else if (set === "favorite_create_channel" && aktiveTV) {
            this.clients[deviceId].create_channel = state.val;
            this.setAckFlag(id);
        } else if (set === "favorite_create_name" && aktiveTV) {
            this.clients[deviceId].create_name = state.val;
            this.setAckFlag(id);
        } else if (set === "favorite_create" && aktiveTV) {
            let arr_fav = null;
            try {
                arr_fav = JSON.parse(this.clients[deviceId].create_channel);
            } catch (e) {
                this.log.warn(`Create Fav: ${e}`);
                return;
            }
            await this.setFavorite(this.clients[deviceId]);
            if (arr_fav && this.clients[deviceId].create_name != "" && this.clients[deviceId].fav) {
                let id_fav = Object.keys(this.clients[deviceId].fav).length;
                ++id_fav;
                const fav = await this.valueFavorite(deviceId, id_fav);
                if (fav && fav.channels && Object.keys(this.clients[deviceId].fav).length == 0) {
                    const check_fav = await this.checkFavorite(deviceId, arr_fav, id_fav, 3);
                    if (check_fav) {
                        const fav_add = { add: { channels: arr_fav }, remove: { channels: [] } };
                        await this.clients[deviceId].apiTV.sendRequest(fav_add, "fav", id_fav);
                        const name = { name: this.clients[deviceId].create_name };
                        await this.clients[deviceId].apiTV.sendRequest(name, "fav", id_fav);
                        this.updateChannel(deviceId);
                        this.setAckFlag(id, { val: false });
                    }
                }
            }
        } else if (set === "channel" || (set && set.toString().indexOf("favorite_") !== -1)) {
            this.log.debug(`CHANNEL: ${JSON.stringify(this.clients[deviceId].channel)}`);
            if (this.clients[deviceId].channel) {
                const ccid = this.clients[deviceId].channel.Channel.find((entry) => entry.ccid == state.val);
                this.log.debug(`CCID: ${JSON.stringify(ccid)}`);
                if (ccid) {
                    const channel = {
                        channelList: {
                            id:
                                set.toString().indexOf("favorite_") !== -1
                                    ? set.split("_").pop()
                                    : this.clients[deviceId].channel.id,
                        },
                        channel: {
                            ccid: state.val,
                        },
                    };
                    this.setAckFlag(id);
                    this.clients[deviceId].apiTV.sendRequest(channel, "channel");
                }
            }
            return;
        } else if (set === "launch_search") {
            if (state && state.val != null && state.val != "") {
                const search = {
                    intent: { action: "android.search.action.GLOBAL_SEARCH", extras: { query: state.val } },
                };
                this.clients[deviceId].apiTV.sendRequest(search, "search");
                this.setAckFlag(id);
            }
        } else if (
            set === "ambilight_rgb_left" ||
            set === "ambilight_rgb_right" ||
            set === "ambilight_rgb_top" ||
            set === "ambilight_rgb_bottom"
        ) {
            try {
                const fullHex = (hex) => {
                    let r = hex.slice(1, 2);
                    let g = hex.slice(2, 3);
                    let b = hex.slice(3, 4);
                    r = parseInt(r + r, 16);
                    g = parseInt(g + g, 16);
                    b = parseInt(b + b, 16);
                    return { r, g, b };
                };
                const hex2rgb = (hex) => {
                    if (hex.length === 4) {
                        return fullHex(hex);
                    }
                    const r = parseInt(hex.slice(1, 3), 16);
                    const g = parseInt(hex.slice(3, 5), 16);
                    const b = parseInt(hex.slice(5, 7), 16);
                    return { r, g, b };
                };
                state.val = `#${state.val.replace("#", "")}`;
                if (state.val != null && (state.val.length === 4 || state.val.length === 7)) {
                    const hex = hex2rgb(state.val);
                    if (hex != null && hex.r != null && hex.g != null && hex.b != null) {
                        this.clients[deviceId].apiTV.sendColor(hex, "hex", set);
                        this.setAckFlag(id);
                        return;
                    }
                }
            } catch (e) {
                this.log.info(`HEX Error: ${JSON.stringify(e)}`);
            }
        } else if (set === "ambilight_hex") {
            try {
                const rgb = JSON.parse(state.val);
                this.clients[deviceId].apiTV.sendColor(rgb, "rgb");
                this.setAckFlag(id);
                return;
            } catch (e) {
                this.log.info(`RGB Error: ${JSON.stringify(e)}`);
            }
            return;
        } else if (set === "mute") {
            this.clients[deviceId].apiTV.sendRequest(state.val, "muted");
            this.setAckFlag(id);
            return;
        } else if (set === "volume") {
            this.clients[deviceId].apiTV.sendRequest(state.val, "vol");
            this.setAckFlag(id);
            return;
        } else {
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
        const header = `-H "Accept: application/json" -H "Content-Type: application/json; charset=UTF-8"`;
        return await exec(
            `curl ${header} -X ${methode} ${dig}` +
                `--insecure --connect-timeout 5 ` +
                `${pw}` +
                `${data} ` +
                `${request}`,
        ).then(
            (out) => {
                this.log.debug("OUT: " + out.stdout + " - " + out.stderr);
                this.log.debug("OUT DEBUG: " + JSON.stringify(out) + " - " + out.stderr);
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
