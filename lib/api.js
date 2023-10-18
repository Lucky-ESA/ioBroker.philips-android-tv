const EventEmitter = require("events");
const axios = require("axios").default;
const exec = require("node-exec-promise").exec;
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
        this.http = api.http;
        this.https = api.https;
        this.user = api.username;
        this.pw = api.password;
        this.req = null;
        this.req_id = null;
        this.struct = null;
        this.dp = api.dp;
        this.update_dp = {};
        this.notifyInterval = null;
        this.infoInterval = null;
        this.requestClient = axios.create({
            withCredentials: true,
            timeout: 900,
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
                this.setState(data);
                if (this.api.mon_vol) {
                    const vol = await this.requests(`${this.https}/audio/volume`, null, this.pw, this.user, "GET");
                    this.setStateVolume(vol);
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

    setStateVolume(vol) {
        this.adapter.log.debug(`VOL: ${JSON.stringify(vol)}`);
        this.adapter.log.debug(`VOL: ${vol.current}`);
        if (vol != null && vol.muted != null) {
            this.adapter.setState(`${this.dp}.remote.settings.mute`, vol.muted, true);
            this.volume = vol;
        }
        if (vol != null && vol.current != null) {
            this.adapter.setState(`${this.dp}.remote.settings.volume`, vol.current, true);
        }
    }

    async sendRequest(state, set) {
        let send = null;
        let html;
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
        }
        if (send != null) {
            this.adapter.log.debug(`SEND: ${JSON.stringify(send)}`);
            await this.requests(`${this.https}${html}`, JSON.stringify(send), this.pw, this.user, "POST");
        }
    }
    startNotifychange() {
        const headers = {
            "Content-Type": "application/json;charset=utf-8",
            "Accept-Encoding": "identity",
            "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 5.0.2; Xperia Z Build/LRX22G)",
            Connection: "Keep-Alive",
        };
        const data = {
            notification: {
                context: {
                    level1: "",
                    level2: "",
                    level3: "",
                    data: "",
                },
                "network/devices": [
                    {
                        id: "wifi0",
                        mac: "NA",
                        type: "Wifi",
                        "wake-on-lan": "Disabled",
                    },
                    {
                        id: "eth0",
                        mac: "NA",
                        type: "Ethernet",
                        ip: "NA",
                        "wake-on-lan": "Enabled",
                    },
                ],
                "input/textentry": {
                    textentry: "not requested",
                    initialstring: "",
                },
                "system/epgsource": {
                    epgsource: "broadcast",
                },
                "activities/tv": {
                    channel: {},
                },
                "channeldb/tv": {
                    channelLists: [
                        {
                            id: "allanalog",
                            version: "0_0_0",
                        },
                        {
                            id: "all",
                            version: "0_0_0",
                        },
                    ],
                    favoriteLists: [
                        {
                            id: "1",
                            version: "0",
                        },
                        {
                            id: "2",
                            version: "0",
                        },
                        {
                            id: "3",
                            version: "0",
                        },
                        {
                            id: "4",
                            version: "0",
                        },
                        {
                            id: "5",
                            version: "0",
                        },
                        {
                            id: "6",
                            version: "0",
                        },
                        {
                            id: "7",
                            version: "0",
                        },
                        {
                            id: "8",
                            version: "0",
                        },
                    ],
                },
                "menuitems/settings/version": {
                    version: "",
                    nodes: this.req_id,
                },
                "system/nettvversion": "8.0.2",
                powerstate: {
                    powerstate: "NA",
                },
                "applications/version": "8",
                "activities/current": {
                    component: {
                        packageName: "NA",
                        className: "NA",
                    },
                },
                "recordings/list": {
                    version: "",
                },
                "input/pointer": {
                    status: "",
                },
                companionlauncher: {
                    device_id: "",
                    msg_id: "",
                },
                "aurora/settings/value": {
                    version: "-1",
                },
                "aurora/settings/gallery_upgrade": {
                    version: "-1",
                },
            },
        };
        //nodes: [
        //    2130968784, 2130968788, 2130968648, 2130968780, 2130968640, 2130968783, 2130968786, 2130968816,
        //    2130968785, 2130968787, 2130968782, 2130968789,
        //],
        this.notifyInterval = this.adapter.setInterval(() => {
            this.requestClient
                .post(`${this.http}/notifychange`, JSON.stringify(data), { headers })
                .then((res) => {
                    this.count = 0;
                    this.checkState(res.data);
                })
                .catch((err) => {
                    ++this.count;
                    if (!err.response) {
                        this.adapter.log.debug(err);
                    }
                    if (this.count > 5) {
                        this.adapter.clearInterval(this.notifyInterval);
                        this.notifyInterval = null;
                        this.adapter.log.debug(`Device ${this.ip} is offline!`);
                        this.adapter.log.debug(`Counter ${this.count}!`);
                        this.checkState(false);
                        this.checkInterval(false);
                    }
                });
        }, 1000);
    }

    checkState(res) {
        if (res != null) {
            this.adapter.log.debug("checkState: " + JSON.stringify(res));
            this.emit("data", this.dp, res, "update");
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
        return await exec(
            `curl -X ${methode} ${dig}` + `--insecure --connect-timeout 5 ` + `${pw}` + `${data}` + `${request}`,
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
