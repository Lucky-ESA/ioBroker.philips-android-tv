const EventEmitter = require("events");
const axios = require("axios").default;
const util = require("util");
const exec = util.promisify(require("child_process").exec);
const fs = require("fs");

/**
 *
 * @extends EventEmitter
 */
class Philips extends EventEmitter {
    constructor(api, adapter) {
        super();
        this.adapter = adapter;
        this.mdns = null;
        this.api = api;
        this.volume = {};
        this.ip = api.ip;
        this.ambilight_off = 2130968789;
        this.ambilight_style = 2130968783;
        this.ambilight_follow_app = 2130968784;
        this.ambilight_follow_flag = 2130968787;
        this.http = api.http;
        this.https = api.https;
        this.user = api.username;
        this.pw = api.password;
        this.req = null;
        this.color = {};
        this.req_id = null;
        this.struct = null;
        this.aurora_data = null;
        this.aurora = false;
        this.notify = {};
        this.last_notify = {};
        this.dp = api.dp;
        this.update_dp = {};
        this.power = "";
        this.notifyInterval = null;
        this.infoInterval = null;
        this.requestClient = axios.create({
            withCredentials: true,
            timeout: 1000,
        });
        this.count = 0;
    }

    setNewAPI(api, struct) {
        this.req = api.request;
        this.req_id = api.request_id;
        this.update_dp = api.node_id;
        this.struct = struct;
        this.ambilight_off = api.ambilight_off;
        this.ambilight_style = api.ambilight_style;
        this.ambilight_follow_app = api.ambilight_follow_app;
        this.ambilight_follow_flag = api.ambilight_follow_flag;
    }

    startMulticast() {
        this.adapter.log.debug(`Start Multicast`);
        if (!this.mdns) {
            this.adapter.log.debug(`Load Multicast`);
            this.mdns = require("multicast-dns")();
        }
        this.mdns.on("response", (response) => {
            if (
                response.answers &&
                response.answers[0] &&
                response.answers[0].data &&
                response.answers[0].data === this.ip
            ) {
                this.adapter.log.info(`Device ${this.ip} is online`);
                this.updateData();
                this.checkInterval(true);
            }
        });
    }

    async updateData() {
        const app = await this.requests(`${this.https}/applications`, null, this.pw, this.user, "GET");
        if (app && app.applications) {
            this.adapter.log.debug(`Update application for device ${this.ip}`);
            this.emit("data", this.dp, app, "app");
        }
        const net = await this.requests(`${this.https}/network/devices`, null, this.pw, this.user, "GET");
        if (net) {
            this.adapter.log.debug(`Update network for device ${this.ip}`);
            this.emit("data", this.dp, net, "net");
        }
    }

    async checkInterval(state) {
        this.adapter.log.debug(`checkInterval: ${state}`);
        if (state) {
            await this.destroy();
            this.startNotifychange();
            this.startInterval();
        } else {
            await this.destroy();
            this.startMulticast();
        }
        this.setStatus(state);
    }

    setStatus(val) {
        this.adapter.setStateChanged(`${this.dp}.status.online`, val, true);
        this.emit("offline", this.dp, val);
    }

    async own_request(json_parse, methode, address, path, auth) {
        const req = typeof json_parse == "object" ? json_parse : null;
        let pw = null;
        let user = null;
        if (auth) {
            pw = this.pw;
            user = this.user;
        }
        return await this.requests(`${address}${path}`, JSON.stringify(req), pw, user, methode);
    }

    async startInterval() {
        const req = { nodes: this.req };
        if (this.req) {
            this.infoInterval = this.adapter.setInterval(async () => {
                const data = await this.requests(
                    `${this.https}/menuitems/settings/current`,
                    JSON.stringify(req),
                    this.pw,
                    this.user,
                    "POST",
                );
                const cached = await this.requests(`${this.https}/ambilight/cached`, null, this.pw, this.user, "GET");
                this.setStateCached(cached);
                this.setState(data);
                if (this.api.mon_vol) {
                    const vol = await this.requests(`${this.https}/audio/volume`, null, this.pw, this.user, "GET");
                    this.setStateVolume(vol);
                }
                if (this.aurora) {
                    const auro = await this.requests(
                        `${this.https}/aurora/settings/current`,
                        null,
                        this.pw,
                        this.user,
                        "GET",
                    );
                    this.adapter.log.debug(`ANSWER AURO: ${JSON.stringify(auro)}`);
                    if (!this.aurora_data) {
                        try {
                            if (fs.existsSync(`${this.adapter.adapterDir}/lib/data/${this.dp}_aurora`)) {
                                const struct = fs.readFileSync(
                                    `${this.adapter.adapterDir}/lib/data/${this.dp}_aurora`,
                                    "utf-8",
                                );
                                this.aurora_data = JSON.parse(struct);
                            }
                        } catch (err) {
                            this.aurora_data = null;
                        }
                    }
                    if (this.aurora_data && auro && auro.values[0] && auro.values[0].value) {
                        const find_dp = this.aurora_data.node.data.nodes.find(
                            (mes) => mes.context === auro.values[0].value.node_id,
                        );
                        if (find_dp) {
                            this.adapter.setState(
                                `${this.dp}.remote.settings.aurora.${find_dp.context}`,
                                auro.values[0].value.data.selected_item,
                                true,
                            );
                        }
                    }
                }
            }, this.adapter.config.interval * 1000);
        } else {
            let struct;
            if (this.struct) {
                struct = this.struct;
            } else {
                struct = await this.requests(
                    `${this.https}/menuitems/settings/structure`,
                    null,
                    this.pw,
                    this.user,
                    "GET",
                );
            }
            this.adapter.log.debug("API: " + JSON.stringify(struct));
            if (!struct) {
                try {
                    if (fs.existsSync(`${this.adapter.adapterDir}/lib/data/${this.dp}_struct`)) {
                        struct = fs.readFileSync(`${this.adapter.adapterDir}/lib/data/${this.dp}_struct`, "utf-8");
                        struct = JSON.parse(struct);
                        this.struct = struct;
                    }
                } catch (err) {
                    struct = null;
                }
            }
            if (struct && struct.node) {
                this.req = [];
                this.req_id = [];
                for (const node_json in struct.node.data.nodes) {
                    if (struct.node.data.nodes[node_json].context != "ambilight") {
                        continue;
                    }
                    if (struct.node.data.nodes[node_json].data.nodes) {
                        for (const ambi of struct.node.data.nodes[node_json].data.nodes) {
                            this.req.push({ nodeid: ambi.node_id });
                            this.req_id.push(ambi.node_id);
                            if (ambi.context) {
                                if (ambi.data.nodes) {
                                    if (ambi.context === "ambilight_style") {
                                        this.ambilight_style = ambi.node_id;
                                    }
                                    for (const data of ambi.data.nodes) {
                                        if (data.contxet === "ambilight_off") {
                                            this.ambilight_off = data.node_id;
                                        }
                                        if (data.contxet === "ambilight_follow_app") {
                                            this.ambilight_follow_app = data.node_id;
                                        }
                                        if (data.contxet === "ambilight_follow_flag") {
                                            this.ambilight_follow_flag = data.node_id;
                                        }
                                        this.adapter.log.debug(`{"nodes":[{"nodeid":${data.node_id}}]}`);
                                        if (data.data.enums || data.data.colors || data.data.slider_data) {
                                            if (data.context != "") {
                                                if (data.node_id) {
                                                    this.req.push({ nodeid: data.node_id });
                                                    this.req_id.push(data.node_id);
                                                    this.update_dp[
                                                        data.node_id
                                                    ] = `${this.api.dp}.remote.settings.${data.context}`;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    } else {
                        this.adapter.log.debug("EMIT NODE: " + JSON.stringify(struct.node.data.nodes[node_json]));
                    }
                }
                this.checkInterval(true);
            } else {
                this.adapter.log.warn(`Cannot read struct from ${this.api.ip} in api!`);
            }
        }
    }

    setStateCached(cached) {
        if (cached != null && cached.layer1 != null) {
            this.adapter.setStateChanged(`${this.dp}.remote.settings.ambilight_hex`, JSON.stringify(cached), true);
            this.color = cached;
        }
    }

    setStateVolume(vol) {
        this.adapter.log.debug(`VOL: ${JSON.stringify(vol)}`);
        if (vol != null && vol.muted != null) {
            this.adapter.setState(`${this.dp}.remote.settings.mute`, vol.muted, true);
            this.volume = vol;
        }
        if (vol != null && vol.current != null) {
            this.adapter.setState(`${this.dp}.remote.settings.volume`, vol.current, true);
        }
    }

    async sendRequest(state, set, fav = null) {
        let send = null;
        let html;
        let methode = "POST";
        if (set === "vol" && this.volume && this.volume.muted != null) {
            this.volume.current = state;
            send = this.volume;
            html = "/audio/volume";
        } else if (set === "muted" && this.volume && this.volume.muted != null) {
            this.volume.muted = state;
            send = this.volume;
            html = "/audio/volume";
        } else if (set === "channel") {
            send = state;
            html = "/activities/tv";
        } else if (set === "search") {
            send = state;
            html = "/activities/launch";
        } else if (set === "fav") {
            send = state;
            html = `/channeldb/tv/modifyfavourite/${fav}`;
        } else if (set === "sort") {
            methode = "PUT";
            send = state;
            html = `/channeldb/tv/modifyfavourite/${fav}`;
        }
        if (send != null) {
            this.adapter.log.debug(`SEND: ${JSON.stringify(send)}`);
            return await this.requests(`${this.https}${html}`, JSON.stringify(send), this.pw, this.user, methode);
        }
    }

    sendColor(hex, set, site) {
        let send = null;
        if (set === "hex") {
            const layer = site.split("_").pop();
            this.adapter.log.debug(`SITE: ${layer}`);
            if (this.color != null) {
                for (const layer in this.color) {
                    if (layer && this.color[layer]) {
                        for (const site in this.color[layer]) {
                            if (site && this.color[layer][site]) {
                                for (const led in this.color[layer][site]) {
                                    if (led != null && this.color[layer][site][led] != null) {
                                        for (const rgb in this.color[layer][site][led]) {
                                            if (
                                                rgb != null &&
                                                this.color[layer][site][led][rgb] != null &&
                                                hex[rgb] != null
                                            ) {
                                                this.color[layer][site][led][rgb] = hex[rgb];
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (layer && this.color.layer1 && this.color.layer1[layer]) {
                send = {};
                this.adapter.log.debug(`LAYER: ${JSON.stringify(this.color.layer1[layer])}`);
                send["layer1"] = {};
                send["layer1"][layer] = this.color.layer1[layer];
            } else {
                send = this.color;
            }
        } else if (set === "rgb") {
            send = hex;
        }
        this.adapter.log.debug(`RGB: ${JSON.stringify(send)}`);
        if (send != null) {
            this.adapter.log.debug(`SEND: ${JSON.stringify(send)}`);
            this.requests(`${this.https}/ambilight/cached`, JSON.stringify(send), this.pw, this.user, "POST");
        }
    }

    async startNotifychange() {
        const headers = {
            "Content-Type": "application/json;charset=utf-8",
            "Accept-Encoding": "identity",
            "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 5.0.2; Xperia Z Build/LRX22G)",
            Connection: "Keep-Alive",
        };
        const channeldb = await this.requests(`${this.https}/channeldb/tv`, null, this.pw, this.user, "POST");
        const epgsource = await this.requests(`${this.https}/system/epgsource`, null, this.pw, this.user, "GET");
        //const time_now = Date.now().toString();
        //nodes: [
        //    2130968784, 2130968788, 2130968648, 2130968780, 2130968640, 2130968783, 2130968786, 2130968816,
        //    2130968785, 2130968787, 2130968782, 2130968789,
        //]
        this.notify = {
            notification: {
                context: {
                    level1: "",
                    level2: "",
                    level3: "",
                    data: "",
                },
                "network/devices": [],
                "input/textentry": { textentry: "not requested", initialstring: "" },
                "system/epgsource": epgsource,
                "activities/tv": { channel: {} },
                "channeldb/tv": channeldb,
                "menuitems/settings/version": {
                    version: "",
                    nodes: this.req_id,
                },
                "system/nettvversion": "",
                powerstate: { powerstate: "" },
                "applications/version": "",
                "activities/current": {},
                "recordings/list": { version: "" },
                "input/pointer": { status: "" },
                companionlauncher: { device_id: "2583fd132a09b3c8", msg_id: "" },
                "aurora/settings/value": {
                    version: "-1",
                },
                "aurora/settings/isOpen": false,
                "aurora/settings/gallery_upgrade": {
                    version: "-1",
                },
            },
        };
        this.last_notify = this.notify;
        this.notifyInterval = this.adapter.setInterval(() => {
            this.adapter.log.debug(`NOTIFY: ${JSON.stringify(this.notify)}`);
            this.adapter.log.debug(`NOTIFY: ${JSON.stringify(this.notify.notification.context)}`);
            this.adapter.log.debug(`NOTIFY1: ${JSON.stringify(this.notify.notification["activities/tv"])}`);
            this.requestClient
                .post(`${this.http}/notifychange`, JSON.stringify(this.notify), { headers })
                .then((res) => {
                    this.count = 0;
                    if (typeof res.data === "object") {
                        if (res.data && !res.data["context"]) {
                            if (
                                this.notify.notification["context"].level1 == "" &&
                                this.notify.notification["context"].level2 == "" &&
                                this.notify.notification["context"].level3 == "" &&
                                this.notify.notification["context"].data == ""
                            ) {
                                res.data["context"] = {
                                    level1: "NA",
                                    level2: "NA",
                                    level3: "NA",
                                    data: "NA",
                                };
                            }
                        }
                        this.checkState(res.data);
                        for (const key in res.data) {
                            if (this.notify.notification && this.notify.notification[key] != null) {
                                if (key == "aurora/settings/value") {
                                    if (res.data[key].version) {
                                        this.notify.notification[key].version = res.data[key].version;
                                    } else {
                                        this.notify.notification[key].version = res.data[key];
                                    }
                                } else if (key == "aurora/settings/gallery_upgrade") {
                                    if (res.data[key].version) {
                                        this.notify.notification[key].version = res.data[key].version;
                                    } else {
                                        this.notify.notification[key].version = res.data[key];
                                    }
                                } else if (key == "context") {
                                    this.notify.notification[key] = {
                                        level1: "",
                                        level2: "",
                                        level3: "",
                                        data: "",
                                    };
                                } else if (key == "powerstate") {
                                    this.power = res.data[key].powerstate;
                                    this.notify.notification[key] = res.data[key];
                                } else if (key == "activities/tv") {
                                    this.notify.notification[key].channel = {};
                                } else if (key == "menuitems/settings/version" && res.data[key].version != null) {
                                    this.notify.notification[key].version = res.data[key].version;
                                } else if (key == "recordings/list" || res.data[key].version) {
                                    if (res.data[key].version) {
                                        this.notify.notification[key].version = res.data[key].version;
                                    } else {
                                        this.notify.notification[key].version = res.data[key];
                                    }
                                } else {
                                    this.notify.notification[key] = res.data[key];
                                }
                            }
                        }
                    } else {
                        this.notify.notification["activities/tv"].channel = {};
                    }
                    this.adapter.log.debug(`NOTIFY ANSWER: ${JSON.stringify(res.data)}`);
                })
                .catch((err) => {
                    ++this.count;
                    this.notify.notification["activities/tv"].channel = {};
                    if (!err.response) {
                        this.adapter.log.debug(`Notify Error: ${err}`);
                        if (this.power == "Standby") {
                            this.notify.notification["powerstate"] = { powerstate: "" };
                        }
                    }
                    if (this.count === 5) {
                        this.onlineCheck();
                    }
                });
        }, 1500);
    }

    async onlineCheck() {
        const online = await this.requests(`${this.https}/powerstate`, null, this.pw, this.user, "GET");
        if (online && online.powerstate) {
            this.checkState({ powerstate: { powerstate: online.powerstate } });
            this.notify.notification["powerstate"] = { powerstate: "" };
            this.count = 0;
        } else {
            this.checkState({ powerstate: { powerstate: "Off" } });
            await this.adapter.clearInterval(this.notifyInterval);
            this.notifyInterval = null;
            this.checkState(false);
            this.checkInterval(false);
            this.adapter.log.debug(`Device ${this.ip} is offline!`);
        }
    }

    checkState(res) {
        if (res != null) {
            this.adapter.log.debug("checkState: " + JSON.stringify(res));
            this.emit("data", this.dp, res, "update");
            if (res && res["aurora/settings/isOpen"] != null && res["aurora/settings/isOpen"]) {
                this.aurora = true;
                this.adapter.log.debug("Aurora On");
            } else {
                this.aurora = false;
                this.adapter.log.debug("Aurora Off");
            }
        }
    }

    setState(res) {
        if (res && res.values) {
            for (const json of res.values) {
                if (json.value.data.selected_item != null) {
                    if (this.update_dp && json.value.Nodeid && this.update_dp[json.value.Nodeid.toString()]) {
                        this.setValue(this.update_dp[json.value.Nodeid.toString()], json.value.data.selected_item);
                    }
                } else if (json.value.data.value != null) {
                    if (this.update_dp && json.value.Nodeid && this.update_dp[json.value.Nodeid.toString()]) {
                        this.setValue(this.update_dp[json.value.Nodeid.toString()], json.value.data.value);
                    }
                } else if (json.value.data.activenode_id != null) {
                    if (
                        json.value.Nodeid == this.ambilight_style &&
                        json.value.data.activenode_id == this.ambilight_off
                    ) {
                        this.setValue(`${this.dp}.remote.settings.ambilight_On_Off`, false);
                    } else if (json.value.Nodeid == this.ambilight_style) {
                        this.setValue(`${this.dp}.remote.settings.ambilight_On_Off`, true);
                    }
                }
                this.adapter.log.debug("JSON: " + JSON.stringify(json));
            }
        }
    }

    setValue(dp, value) {
        this.adapter.setState(dp, value, true);
    }

    destroy() {
        this.notifyInterval && this.adapter.clearInterval(this.notifyInterval);
        this.notifyInterval = null;
        this.infoInterval && this.adapter.clearInterval(this.infoInterval);
        this.infoInterval = null;
        if (this.mdns) this.mdns.destroy();
        this.mdns = null;
    }

    async getSystem(request, header) {
        let headers = {
            Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
            "Accept-Encoding": "gzip, deflate, br",
        };
        if (header != null) headers = header;
        return axios
            .get(request, { headers })
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                return err;
            });
    }

    async requests(request, data, pw, user, methode) {
        let dig = "";
        if (pw && user) {
            pw = `-u ${user}:${pw} `;
            dig = `--digest `;
        } else {
            pw = "";
            dig = "";
        }
        if (data) {
            data = `-d '${data}' `;
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
                this.adapter.log.debug("OUT: " + out.stdout + " - " + out.stderr);
                try {
                    if (out.stdout) {
                        return JSON.parse(out.stdout);
                    } else {
                        //<p style="font-size: 1.2em;font-weight: bold;margin: 1em 0px;">Unauthorized</p>
                        if (out.stdout.toString().indexOf("Unauthorized") !== -1) {
                            return { error: "Unauthorized" };
                        }
                        return out.stdout;
                    }
                } catch (e) {
                    this.adapter.log.debug(`catch exec: ${JSON.stringify(e)}`);
                    return false;
                }
            },
            (err) => {
                this.adapter.log.debug(`requests: ${JSON.stringify(err)}`);
                return false;
            },
        );
    }
}

module.exports = Philips;
