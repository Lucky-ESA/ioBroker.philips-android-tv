const constants = require("./constants");
module.exports = {
    async createNotify(id) {
        if (id.notify === 0) {
            await this.delObjectAsync(`${id.dp}.remote.notify`);
            return;
        }
        let common = {};
        common = {
            name: {
                en: "Notifications",
                de: "Benachrichtigungen",
                ru: "Уведомления",
                pt: "Notificações",
                nl: "Verklaringen",
                fr: "Notifications",
                it: "Notifiche",
                es: "Notificaciones",
                pl: "Uwaga",
                uk: "Повідомлення",
                "zh-cn": "通知",
            },
            desc: "Create by Adapter",
            icon: "img/notify.png",
        };
        await this.createDataPoint(`${id.dp}.remote.notify`, common, "folder", null);
        common = {
            name: {
                en: "Title",
                de: "Titel",
                ru: "Заголовок",
                pt: "Título",
                nl: "Titel",
                fr: "Titre",
                it: "Titolo",
                es: "Título",
                pl: "Title",
                uk: "Головна",
                "zh-cn": "标题",
            },
            type: "string",
            role: "state",
            read: true,
            write: true,
            desc: "Create by Adapter",
            def: "",
        };
        await this.createDataPoint(`${id.dp}.remote.notify.title`, common, "state", "");
        common = {
            name: {
                en: "Message",
                de: "Nachricht",
                ru: "Сообщение",
                pt: "Mensagem",
                nl: "Bericht",
                fr: "Message",
                it: "Messaggio",
                es: "Mensaje",
                pl: "Message",
                uk: "Новини",
                "zh-cn": "导 言",
            },
            type: "string",
            role: "state",
            read: true,
            write: true,
            desc: "Create by Adapter",
            def: "",
        };
        await this.createDataPoint(`${id.dp}.remote.notify.message`, common, "state", "");
        common = {
            name: {
                en: "duration",
                de: "Anzeigedauer",
                ru: "продолжительность",
                pt: "duração",
                nl: "vertaling:",
                fr: "durée",
                it: "durata",
                es: "duración",
                pl: "czas trwania",
                uk: "тривалість",
                "zh-cn": "会期",
            },
            type: "number",
            role: "value",
            read: true,
            write: true,
            desc: "Create by Adapter",
            unit: "sec",
            def: 0,
        };
        await this.createDataPoint(`${id.dp}.remote.notify.duration`, common, "state", 0);
        const commons = {
            name: {
                en: "Position",
                de: "Position",
                ru: "Позиция",
                pt: "Posição",
                nl: "Positie",
                fr: "Position",
                it: "Posizione",
                es: "Posición",
                pl: "Pozycja",
                uk: "Посада",
                "zh-cn": "立场",
            },
            type: "number",
            role: "value",
            read: true,
            write: true,
            desc: "Create by Adapter",
        };
        if (id.notify === 1) {
            commons.def = 2;
            commons.states = { 0: "top-right", 1: "top-left", 2: "bottom-right", 3: "bottom-left", 4: "center" };
        } else {
            commons.def = 0;
            commons.states = { 0: "bottom-right", 1: "bottom-left", 2: "top-right", 3: "top-left", 4: "center" };
        }
        await this.createDataPoint(`${id.dp}.remote.notify.position`, commons, "state", 0);
        if (id.notify === 2) {
            await this.delObjectAsync(`${id.dp}.remote.notify.title_color`);
            await this.delObjectAsync(`${id.dp}.remote.notify.message_color`);
            await this.delObjectAsync(`${id.dp}.remote.notify.title_size`);
            await this.delObjectAsync(`${id.dp}.remote.notify.message_size`);
            await this.delObjectAsync(`${id.dp}.remote.notify.web_height`);
            await this.delObjectAsync(`${id.dp}.remote.notify.web`);
            await this.delObjectAsync(`${id.dp}.remote.notify.video`);
            common = {
                name: {
                    en: "Type",
                    de: "Art",
                    ru: "Тип",
                    pt: "Tipo",
                    nl: "Type",
                    fr: "Type",
                    it: "Tipo",
                    es: "Tipo",
                    pl: "Typ",
                    uk: "Тип",
                    "zh-cn": "类型",
                },
                type: "number",
                role: "value",
                read: true,
                write: true,
                desc: "Create by Adapter",
                def: 0,
                states: { 0: "Default", 1: "Only title", 3: "Only icon" },
            };
            await this.createDataPoint(`${id.dp}.remote.notify.type`, common, "state", 0);
            common = {
                name: {
                    en: "Transparency",
                    de: "Transparenz",
                    ru: "Прозрачность",
                    pt: "Transparência",
                    nl: "Transparency",
                    fr: "Transparence",
                    it: "Trasparenza",
                    es: "Transparencia",
                    pl: "Przejrzystość",
                    uk: "Прозорість",
                    "zh-cn": "透明度",
                },
                type: "number",
                role: "value",
                read: true,
                write: true,
                desc: "Create by Adapter",
                def: 2,
                states: { 0: "0%", 1: "20%", 2: "40%", 3: "60%", 4: "80%", 5: "100%" },
            };
            await this.createDataPoint(`${id.dp}.remote.notify.transparency`, common, "state", 2);
            common = {
                name: {
                    en: "Pixel offset horizontally",
                    de: "Pixel horizontal versetzt",
                    ru: "Pixel компенсация горизонтально",
                    pt: "Pixel offset horizontalmente",
                    nl: "Pixel offset horizontaal",
                    fr: "Pixel offset horizontal",
                    it: "Pixel offset orizzontale",
                    es: "Pixel offset horizontal",
                    pl: "Pixel offset poziomo",
                    uk: "Піксельний зсув горизонтально",
                    "zh-cn": "横向抵消",
                },
                type: "number",
                role: "value",
                read: true,
                write: true,
                desc: "Create by Adapter",
                def: 0,
            };
            await this.createDataPoint(`${id.dp}.remote.notify.offset_X`, common, "state", 0);
            common = {
                name: {
                    en: "Pixel offset vertically",
                    de: "Pixel vertikal versetzt",
                    ru: "Pixel компенсация вертикально",
                    pt: "Pixel offset verticalmente",
                    nl: "Pixel officieus",
                    fr: "Pixel offset verticalement",
                    it: "Pixel offset verticalmente",
                    es: "Pixel offset verticalmente",
                    pl: "Pixel offset pionowo",
                    uk: "Піксельний зсув вертикально",
                    "zh-cn": "九. 纵向抵消",
                },
                type: "number",
                role: "value",
                read: true,
                write: true,
                desc: "Create by Adapter",
                def: 0,
            };
            await this.createDataPoint(`${id.dp}.remote.notify.offset_y`, common, "state", 0);
            common = {
                name: {
                    en: "Small Icon",
                    de: "Kleiner Icon",
                    ru: "Небольшая икона",
                    pt: "Ícone pequeno",
                    nl: "Kleine Icon",
                    fr: "Petit Icône",
                    it: "Piccola icona",
                    es: "Icono pequeño",
                    pl: "Mały Ikon",
                    uk: "Мала ікона",
                    "zh-cn": "小型伊科",
                },
                type: "number",
                role: "value",
                read: true,
                write: true,
                desc: "Create by Adapter",
                def: 6,
                states: { 6: "No Pic", 0: "Info", 1: "Warn", 2: "Exclamation", 3: "Cross", 4: "Question", 5: "Smile" },
            };
            await this.createDataPoint(`${id.dp}.remote.notify.icon`, common, "state", 6);
            common = {
                name: {
                    en: "Icon",
                    de: "Icon",
                    ru: "Икона",
                    pt: "Ícone",
                    nl: "Icon",
                    fr: "Icon",
                    it: "Icona",
                    es: "Icon",
                    pl: "Ikon",
                    uk: "Ікона",
                    "zh-cn": "一. 导言",
                },
                type: "string",
                role: "state",
                read: true,
                write: true,
                desc: "Create by Adapter",
                def: "",
            };
            await this.createDataPoint(`${id.dp}.remote.notify.iconurl`, common, "state", "");
        } else {
            await this.delObjectAsync(`${id.dp}.remote.notify.type`);
            await this.delObjectAsync(`${id.dp}.remote.notify.transparency`);
            await this.delObjectAsync(`${id.dp}.remote.notify.offset_X`);
            await this.delObjectAsync(`${id.dp}.remote.notify.offset_y`);
            await this.delObjectAsync(`${id.dp}.remote.notify.icon`);
            await this.delObjectAsync(`${id.dp}.remote.notify.iconurl`);
            common = {
                name: {
                    en: "Title color",
                    de: "Titelfarbe",
                    ru: "Название цвет",
                    pt: "Cor do título",
                    nl: "Kleine kleur",
                    fr: "Titre couleur",
                    it: "Titolo colore",
                    es: "Título color",
                    pl: "Kolor",
                    uk: "Колір",
                    "zh-cn": "标题",
                },
                type: "string",
                role: "state",
                read: true,
                write: true,
                desc: "Create by Adapter",
                def: "#FFFFFF",
            };
            await this.createDataPoint(`${id.dp}.remote.notify.title_color`, common, "state", common.def);
            common = {
                name: {
                    en: "Message color",
                    de: "Nachricht Farbe",
                    ru: "Цвет сообщения",
                    pt: "Cor da mensagem",
                    nl: "Vertaling:",
                    fr: "Couleur du message",
                    it: "Colore dei messaggi",
                    es: "Color del mensaje",
                    pl: "Kolor",
                    uk: "Колір повідомлення",
                    "zh-cn": "白色",
                },
                type: "string",
                role: "state",
                read: true,
                write: true,
                desc: "Create by Adapter",
                def: "#FFFFFF",
            };
            await this.createDataPoint(`${id.dp}.remote.notify.message_color`, common, "state", common.def);
            common = {
                name: {
                    en: "Title font size",
                    de: "Titel Schriftgröße",
                    ru: "Название размер шрифта",
                    pt: "Título tamanho da fonte",
                    nl: "Title font maat",
                    fr: "Titre font size",
                    it: "Titolo font dimensione",
                    es: "Título tamaño de la fuente",
                    pl: "Rozmiar",
                    uk: "Розмір шрифту",
                    "zh-cn": "标题",
                },
                type: "number",
                role: "value",
                read: true,
                write: true,
                desc: "Create by Adapter",
                unit: "px",
                def: 16,
            };
            await this.createDataPoint(`${id.dp}.remote.notify.title_size`, common, "state", common.def);
            common = {
                name: {
                    en: "Message font size",
                    de: "Schriftgröße der Nachricht",
                    ru: "Размер шрифта сообщения",
                    pt: "Tamanho da fonte da mensagem",
                    nl: "Bericht van grootte",
                    fr: "Taille de la police",
                    it: "Formato del carattere del messaggio",
                    es: "Tamaño fuente de mensaje",
                    pl: "Rozmiar czcionki",
                    uk: "Розмір шрифту повідомлення",
                    "zh-cn": "导 言",
                },
                type: "number",
                role: "value",
                read: true,
                write: true,
                desc: "Create by Adapter",
                unit: "px",
                def: 16,
            };
            await this.createDataPoint(`${id.dp}.remote.notify.message_size`, common, "state", common.def);
            common = {
                name: {
                    en: "height",
                    de: "Höhe",
                    ru: "высота",
                    pt: "altura",
                    nl: "lengte",
                    fr: "hauteur",
                    it: "altezza",
                    es: "altura",
                    pl: "wysokość",
                    uk: "висота",
                    "zh-cn": "高强度",
                },
                type: "number",
                role: "value",
                read: true,
                write: true,
                desc: "Create by Adapter",
                unit: "px",
                def: 0,
            };
            await this.createDataPoint(`${id.dp}.remote.notify.web_height`, common, "state", common.def);
            common = {
                name: {
                    en: "website",
                    de: "webseite",
                    ru: "сайт",
                    pt: "website",
                    nl: "website",
                    fr: "site web",
                    it: "sito web",
                    es: "sitio web",
                    pl: "strona internetowa",
                    uk: "веб-сайт",
                    "zh-cn": "网站",
                },
                type: "string",
                role: "state",
                read: true,
                write: true,
                desc: "Create by Adapter",
                def: "",
            };
            await this.createDataPoint(`${id.dp}.remote.notify.web`, common, "state", common.def);
            common = {
                name: {
                    en: "Video",
                    de: "Video",
                    ru: "Видео",
                    pt: "Vídeo",
                    nl: "Video",
                    fr: "Vidéo",
                    it: "Video",
                    es: "Video",
                    pl: "Video",
                    uk: "Відео",
                    "zh-cn": "录像",
                },
                type: "string",
                role: "state",
                read: true,
                write: true,
                desc: "Create by Adapter",
                def: "",
            };
            await this.createDataPoint(`${id.dp}.remote.notify.video`, common, "state", common.def);
        }
        common = {
            name: {
                en: "Backgroundcolor",
                de: "Hintergrundfarbe",
                ru: "Фонкра",
                pt: "Cor de fundo",
                nl: "Achtergrond",
                fr: "Backgroundcolor",
                it: "Colore di sfondo",
                es: "Antecedentes",
                pl: "Background",
                uk: "Підземний колір",
                "zh-cn": "背景",
            },
            type: "number",
            role: "value",
            read: true,
            write: true,
            desc: "Create by Adapter",
            def: 1,
            states: {
                0: "grey",
                1: "black",
                2: "indigo",
                3: "green",
                4: "red",
                5: "cyan",
                6: "teal",
                7: "amber",
                8: "pink",
            },
        };
        if (id.notify === 1) {
            common = {
                name: {
                    en: "Backgroundcolor",
                    de: "Hintergrundfarbe",
                    ru: "Фонкра",
                    pt: "Cor de fundo",
                    nl: "Achtergrond",
                    fr: "Backgroundcolor",
                    it: "Colore di sfondo",
                    es: "Antecedentes",
                    pl: "Background",
                    uk: "Підземний колір",
                    "zh-cn": "背景",
                },
                type: "string",
                role: "state",
                read: true,
                write: true,
                desc: "Create by Adapter",
                def: "#CC0000",
            };
        }
        await this.createDataPoint(`${id.dp}.remote.notify.color`, common, "state", common.def);
        common = {
            name: {
                en: "Image",
                de: "Bild",
                ru: "Изображение",
                pt: "Imagem",
                nl: "Vertaling:",
                fr: "Image",
                it: "Immagine",
                es: "Imagen",
                pl: "Obraz",
                uk: "Відео",
                "zh-cn": "Image",
            },
            type: "string",
            role: "state",
            read: true,
            write: true,
            desc: "Create by Adapter",
            def: "",
        };
        await this.createDataPoint(`${id.dp}.remote.notify.imageurl`, common, "state", "");
        common = {
            name: {
                en: "width",
                de: "Breite",
                ru: "ширина",
                pt: "largura de largura",
                nl: "width",
                fr: "largeur",
                it: "larghezza",
                es: "ancho",
                pl: "szerokość",
                uk: "ширина",
                "zh-cn": "妻子",
            },
            type: "number",
            role: "value",
            read: true,
            write: true,
            desc: "Create by Adapter",
            def: 0,
            states: { 0: "Default", 1: "very small", 2: "small", 3: "large", 4: "xlarge" },
        };
        if (id.notify === 1) {
            common = {
                name: {
                    en: "width",
                    de: "Breite",
                    ru: "ширина",
                    pt: "largura de largura",
                    nl: "width",
                    fr: "largeur",
                    it: "larghezza",
                    es: "ancho",
                    pl: "szerokość",
                    uk: "ширина",
                    "zh-cn": "妻子",
                },
                type: "number",
                role: "value",
                read: true,
                write: true,
                desc: "Create by Adapter",
                unit: "px",
                def: 0,
            };
        }
        await this.createDataPoint(`${id.dp}.remote.notify.image_width`, common, "state", common.def);
        common = {
            name: {
                en: "send Notification",
                de: "Mitteilung senden",
                ru: "отправить уведомление",
                pt: "notificação de envio",
                nl: "verstuur bericht",
                fr: "envoyer une notification",
                it: "inviare la notifica",
                es: "enviar notificación",
                pl: "nadawanie",
                uk: "надіслати повідомлення",
                "zh-cn": "通知",
            },
            type: "boolean",
            role: "button",
            read: true,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.notify.sendNotification`, common, "state", false);
    },
    async createAurora(id, fs) {
        const auro = [];
        const states = {};
        const string_ids = {};
        let common = {};
        common = {
            name: {
                en: "Aurora",
                de: "Morgenröte",
                ru: "Аврора",
                pt: "Aurora",
                nl: "Aurora",
                fr: "Aurora",
                it: "Aurora",
                es: "Aurora",
                pl: "Aurora",
                uk: "Авiаквитки",
                "zh-cn": "Aurora",
            },
            desc: "Create by Adapter",
            icon: "img/aurora.png",
        };
        await this.createDataPoint(`${id.dp}.remote.aurora`, common, "folder", null);
        const struct = await this.getRequest(
            `${id.https}/aurora/settings/structure`,
            null,
            id.password,
            id.username,
            "GET",
        );
        if (struct && struct.node && struct.node.data && struct.node.data.nodes) {
            const gallery = await this.getRequest(
                `${id.https}/aurora/settings/gallery`,
                null,
                id.password,
                id.username,
                "GET",
            );
            if (
                gallery &&
                gallery.values &&
                gallery.values[0] &&
                gallery.values[0].value &&
                gallery.values[0].value.data
            ) {
                for (const value of struct.node.data.nodes) {
                    if (value.context === "Gallery") {
                        value.data = gallery.values[0].value.data;
                    }
                    auro.push({ string_id: value.string_id });
                    value.context = value.context.toLowerCase();
                    states[value.context] = {};
                    string_ids[value.context] = value.string_id;
                    for (const enums of value.data.enums) {
                        const string_id = { string_id: enums.string_id };
                        auro.push(string_id);
                        states[value.context][enums.enum_id] = enums.string_id;
                    }
                }
                let lang;
                if (this.lang == "de") {
                    lang = {
                        locale: { language: "de", country: "DE" },
                        strings: auro,
                    };
                } else {
                    lang = {
                        locale: { language: "en", country: "en_US" },
                        strings: auro,
                    };
                }
                const trans = await this.getRequest(`${id.https}/strings`, lang, id.password, id.username, "POST");
                for (const dp in states) {
                    let def = 0;
                    for (const state in states[dp]) {
                        const isfind = trans.translations.find(mes => mes.string_id === states[dp][state]);
                        states[dp][state] = isfind != null ? isfind.string_translation : states[dp][state];
                        def = typeof state == "number" ? state : 0;
                    }
                    const isid = trans.translations.find(mes => mes.string_id === string_ids[dp]);
                    common = {
                        name: isid ? isid.string_translation : dp,
                        type: "number",
                        role: "value",
                        read: true,
                        write: true,
                        desc: "Create by Adapter",
                        def: def,
                        states: states[dp],
                    };
                    await this.createDataPoint(`${id.dp}.remote.aurora.${dp}`, common, "state", def);
                    fs.writeFileSync(`${this.adapterDir}/lib/data/${id.dp}_aurora`, JSON.stringify(struct), "utf-8");
                    id.aurora = struct;
                }
            }
        }
    },
    async createVolume(id, state) {
        let common = {};
        if (state && id.mon_vol) {
            common = {
                type: "boolean",
                role: "switch",
                name: {
                    en: "mute",
                    de: "stumm",
                    ru: "милый",
                    pt: "muda",
                    nl: "mute",
                    fr: "mute",
                    it: "mute",
                    es: "mute",
                    pl: "bunt",
                    uk: "мапа",
                    "zh-cn": "穆特",
                },
                read: true,
                write: true,
                desc: "Create by Adapter",
                def: false,
            };
            await this.createDataPoint(`${id.dp}.remote.settings.mute`, common, "state", false);
            common = {
                type: "number",
                role: "value",
                name: {
                    en: "TV Volume",
                    de: "TV Volumen",
                    ru: "Объем ТВ",
                    pt: "Volume de TV",
                    nl: "TV Volum",
                    fr: "Volume TV",
                    it: "Volume TV",
                    es: "Volumen de TV",
                    pl: "Volume TV",
                    uk: "Телевізор",
                    "zh-cn": "电视电影",
                },
                read: true,
                write: true,
                desc: "Create by Adapter",
                min: 0,
                max: 60,
                step: 1,
                def: 0,
            };
            await this.createDataPoint(`${id.dp}.remote.settings.volume`, common, "state", 0);
        } else {
            await this.delObjectAsync(`${id.dp}.remote.settings.mute`);
            await this.delObjectAsync(`${id.dp}.remote.settings.volume`);
        }
    },
    async createChannel(id, channel) {
        let common = {};
        let channel_all;
        const favorite = {};
        favorite["0"] = "no select";
        if (
            channel &&
            channel.channelLists &&
            channel.channelLists[0] &&
            channel.channelLists[0].version != "0_0_0" &&
            id.mon_channel
        ) {
            channel_all = await this.getRequest(
                `${id.https}/channeldb/tv/channelLists/all`,
                null,
                id.password,
                id.username,
                "GET",
            );
            this.log.debug(`CHANNEL_ALL: ${JSON.stringify(channel_all)}`);
            if (channel_all && channel_all.Channel) {
                id.channel = channel_all;
                this.setChannel(id.dp, channel_all);
                const channellist = {};
                channellist["0"] = "no select";
                for (const ccid of channel_all.Channel) {
                    channellist[ccid.ccid] = ccid.name;
                }
                common = {
                    type: "number",
                    role: "value",
                    name: {
                        en: "Channel list",
                        de: "Kanalliste",
                        ru: "Список каналов",
                        pt: "Lista de canais",
                        nl: "Kanaallijst",
                        fr: "Liste des canaux",
                        it: "Elenco dei canali",
                        es: "Lista de canales",
                        pl: "Lista kanałów",
                        uk: "Список каналів",
                        "zh-cn": "名单",
                    },
                    read: true,
                    write: true,
                    desc: "Create by Adapter",
                    def: 0,
                    states: channellist,
                };
                await this.createDataPoint(`${id.dp}.remote.settings.channel`, common, "state", 0);
            }
        } else if (!id.mon_channel) {
            await this.delObjectAsync(`${id.dp}.remote.settings.channel`);
        }
        if (channel && channel.favoriteLists && channel_all && channel_all.Channel) {
            id.fav = {};
            let count = 0;
            for (const version of channel.favoriteLists) {
                this.log.debug(`Fav: ${JSON.stringify(version)}`);
                if (count > 0) {
                    const favoritelist = {};
                    favoritelist["0"] = "no select";
                    if (id.mon_fav) {
                        const fav_all = await this.getRequest(
                            `${id.https}/channeldb/tv/favoriteLists/${count}`,
                            null,
                            id.password,
                            id.username,
                            "GET",
                        );
                        favorite[count] = fav_all.name;
                        if (fav_all && fav_all.channels && Object.keys(fav_all.channels).length > 0) {
                            id.fav[`favorite_${count}`] = [];
                            for (const fav of fav_all.channels) {
                                const isfind = channel_all.Channel.find(mes => mes.ccid === fav.ccid);
                                favoritelist[fav.ccid] = isfind.name;
                                id.fav[`favorite_${count}`].push(fav.ccid);
                            }
                            common = {
                                type: "number",
                                role: "value",
                                name: {
                                    en: `Favorite list ${count}`,
                                    de: `Lieblingsliste ${count}`,
                                    ru: `Любимый список ${count}`,
                                    pt: `Lista de favoritos ${count}`,
                                    nl: `Favoriete ${count}`,
                                    fr: `Liste des favoris ${count}`,
                                    it: `Elenco preferito ${count}`,
                                    es: `Lista favorita ${count}`,
                                    pl: `Lista ulubionych ${count}`,
                                    uk: `Вибраний список ${count}`,
                                    "zh-cn": `印 录 ${count}`,
                                },
                                read: true,
                                write: true,
                                desc: "Create by Adapter",
                                def: 0,
                                states: favoritelist,
                            };
                            await this.createDataPoint(
                                `${id.dp}.remote.settings.favorite_${count}`,
                                common,
                                "state",
                                0,
                            );
                        }
                    } else {
                        await this.delObjectAsync(`${id.dp}.remote.settings.favorite_${count}`);
                    }
                }
                ++count;
            }
        }
        if (id.mon_fav) {
            common = {
                type: "boolean",
                role: "button",
                name: {
                    en: "Update favorites",
                    de: "Favoriten aktualisieren",
                    ru: "Обновление фаворитов",
                    pt: "Atualizar favoritos",
                    nl: "Update favoriet",
                    fr: "Mettre à jour les favoris",
                    it: "Aggiornare i preferiti",
                    es: "Actualizar favoritos",
                    pl: "Ulubiony",
                    uk: "Оновлення вподобань",
                    "zh-cn": "最新优惠",
                },
                read: false,
                write: true,
                desc: "Create by Adapter",
                def: false,
            };
            await this.createDataPoint(`${id.dp}.remote.settings.favorite_refresh`, common, "state", false);
            common = {
                type: "number",
                role: "value",
                name: {
                    en: "Select favourite",
                    de: "Wählen Sie den Favoriten",
                    ru: "Выбрать любимый",
                    pt: "Selecione o favorito",
                    nl: "Select favoriet",
                    fr: "Sélectionner préféré",
                    it: "Seleziona preferito",
                    es: "Seleccionar favorito",
                    pl: "Wybór",
                    uk: "Найкращі",
                    "zh-cn": "赞成",
                },
                read: true,
                write: true,
                desc: "Create by Adapter",
                def: 0,
                states: favorite,
            };
            await this.createDataPoint(`${id.dp}.remote.settings.favorite_select`, common, "state", 0);
            common = {
                type: "string",
                role: "json",
                name: {
                    en: "Add channels",
                    de: "Kanäle hinzufügen",
                    ru: "Добавить каналы",
                    pt: "Adicionar canais",
                    nl: "Add kanalen",
                    fr: "Ajouter des chaînes",
                    it: "Aggiungi canali",
                    es: "Agregar canales",
                    pl: "Kanał",
                    uk: "Додати канали",
                    "zh-cn": "增加渠道",
                },
                read: true,
                write: true,
                desc: "Create by Adapter",
                def: "[]",
            };
            await this.createDataPoint(`${id.dp}.remote.settings.favorite_add`, common, "state", JSON.stringify([]));
            common = {
                type: "string",
                role: "json",
                name: {
                    en: "Delete channels",
                    de: "Löschen von Kanälen",
                    ru: "Удалить каналы",
                    pt: "Excluir canais",
                    nl: "Verwijder kanalen",
                    fr: "Supprimer les canaux",
                    it: "Eliminare i canali",
                    es: "Eliminar los canales",
                    pl: "Kanał Delete",
                    uk: "Видалити канали",
                    "zh-cn": "删除渠道",
                },
                read: true,
                write: true,
                desc: "Create by Adapter",
                def: "[]",
            };
            await this.createDataPoint(
                `${id.dp}.remote.settings.favorite_channel_delete`,
                common,
                "state",
                JSON.stringify([]),
            );
            common = {
                type: "string",
                role: "json",
                name: {
                    en: "Sort channels",
                    de: "Sortieren von Kanälen",
                    ru: "Сортировать каналы",
                    pt: "Classificar canais",
                    nl: "Sort kanalen",
                    fr: "Chaînes de tri",
                    it: "Ordinare i canali",
                    es: "Clasificar canales",
                    pl: "Kanał Sort",
                    uk: "Сортування каналів",
                    "zh-cn": "签证",
                },
                read: true,
                write: true,
                desc: "Create by Adapter",
                def: "[]",
            };
            await this.createDataPoint(`${id.dp}.remote.settings.favorite_sort`, common, "state", JSON.stringify([]));
            common = {
                type: "string",
                role: "state",
                name: {
                    en: "change name",
                    de: "Name ändern",
                    ru: "изменить имя",
                    pt: "nome da mudança",
                    nl: "vertaling:",
                    fr: "nom de changement",
                    it: "cambia nome",
                    es: "cambiar nombre",
                    pl: "zmienna",
                    uk: "ім'я",
                    "zh-cn": "更改名称",
                },
                read: true,
                write: true,
                desc: "Create by Adapter",
                def: "",
            };
            await this.createDataPoint(`${id.dp}.remote.settings.favorite_name`, common, "state", "");
            common = {
                type: "boolean",
                role: "button",
                name: {
                    en: "Delete favorite",
                    de: "Favorite löschen",
                    ru: "Удалить фаворит",
                    pt: "Excluir favorito",
                    nl: "Delete favoriet",
                    fr: "Supprimer favori",
                    it: "Eliminare i preferiti",
                    es: "Eliminar favorito",
                    pl: "Ulubiony",
                    uk: "Видалити улюблений",
                    "zh-cn": "删除赞成",
                },
                read: false,
                write: true,
                desc: "Create by Adapter",
                def: false,
            };
            await this.createDataPoint(`${id.dp}.remote.settings.favorite_delete`, common, "state", false);
            common = {
                type: "string",
                role: "json",
                name: {
                    en: "Channels for the new favorite",
                    de: "Kanäle für den neuen Favoriten",
                    ru: "Каналы для нового любимого",
                    pt: "Canais para o novo favorito",
                    nl: "Kanalen voor de nieuwe favoriete",
                    fr: "Canaux pour les nouveaux favoris",
                    it: "Canali per il nuovo preferito",
                    es: "Canales para el nuevo favorito",
                    pl: "Channels for the new favorite",
                    uk: "Канали для нового улюбленого",
                    "zh-cn": "新的有利点的宾",
                },
                read: true,
                write: true,
                desc: "Create by Adapter",
                def: "[]",
            };
            await this.createDataPoint(
                `${id.dp}.remote.settings.favorite_create_channel`,
                common,
                "state",
                JSON.stringify([]),
            );
            common = {
                type: "string",
                role: "state",
                name: {
                    en: "Name for the new favorite",
                    de: "Name für den neuen Favoriten",
                    ru: "Имя для нового фаворита",
                    pt: "Nome para o novo favorito",
                    nl: "Naam voor de nieuwe favoriete",
                    fr: "Nom pour le nouveau favori",
                    it: "Nome per il nuovo preferito",
                    es: "Nombre para el nuevo favorito",
                    pl: "Nazwa nowego faworyta",
                    uk: "Назва для нового улюбленого",
                    "zh-cn": "新优惠国名",
                },
                read: true,
                write: true,
                desc: "Create by Adapter",
                def: "",
            };
            await this.createDataPoint(`${id.dp}.remote.settings.favorite_create_name`, common, "state", "");
            common = {
                type: "boolean",
                role: "button",
                name: {
                    en: "Create favorites",
                    de: "Favoriten erstellen",
                    ru: "Создать фавориты",
                    pt: "Criar favoritos",
                    nl: "Create favoriet",
                    fr: "Créer des favoris",
                    it: "Creare preferiti",
                    es: "Crear favoritos",
                    pl: "Faworyta",
                    uk: "Створення улюблених",
                    "zh-cn": "创造有利场所",
                },
                read: false,
                write: true,
                desc: "Create by Adapter",
                def: false,
            };
            await this.createDataPoint(`${id.dp}.remote.settings.favorite_create`, common, "state", false);
        } else {
            await this.delObjectAsync(`${id.dp}.remote.settings.favorite_refresh`);
            await this.delObjectAsync(`${id.dp}.remote.settings.favorite_select`);
            await this.delObjectAsync(`${id.dp}.remote.settings.favorite_add`);
            await this.delObjectAsync(`${id.dp}.remote.settings.favorite_channel_delete`);
            await this.delObjectAsync(`${id.dp}.remote.settings.favorite_sort`);
            await this.delObjectAsync(`${id.dp}.remote.settings.favorite_name`);
            await this.delObjectAsync(`${id.dp}.remote.settings.favorite_delete`);
            await this.delObjectAsync(`${id.dp}.remote.settings.favorite_create_channel`);
            await this.delObjectAsync(`${id.dp}.remote.settings.favorite_create_name`);
            await this.delObjectAsync(`${id.dp}.remote.settings.favorite_create`);
        }
    },
    async createRequest(id) {
        let common = {};
        common = {
            name: {
                en: "own request",
                de: "eigene Anfrage",
                ru: "собственный запрос",
                pt: "pedido próprio",
                nl: "een verzoek",
                fr: "propre demande",
                it: "propria richiesta",
                es: "propia solicitud",
                pl: "żądanie",
                uk: "власний запит",
                "zh-cn": "自己的请求",
            },
            desc: "Create by Adapter",
            icon: "img/own_request.png",
        };
        await this.createDataPoint(`${id.dp}.remote.own_request`, common, "folder", null);
        common = {
            type: "boolean",
            role: "button",
            name: {
                en: "Save user data locally",
                de: "Benutzerdaten lokal speichern",
                ru: "Сохранить данные пользователей локально",
                pt: "Salvar dados de usuário localmente",
                nl: "Bewaar gebruikersgegevens",
                fr: "Enregistrer les données utilisateur localement",
                it: "Salvare i dati degli utenti a livello locale",
                es: "Guardar datos de usuario localmente",
                pl: "Dane o użytkownikach lokalnie",
                uk: "Зберегти дані користувачів локально",
                "zh-cn": "当地用户数据",
            },
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.own_request.save_pw`, common, "state", false);
        common = {
            role: "state",
            name: {
                en: "Path",
                de: "Pfad",
                ru: "Путь",
                pt: "Caminho",
                nl: "Path",
                fr: "Sentier",
                it: "Sentiero",
                es: "Camino",
                pl: "Path Path",
                uk: "Патент",
                "zh-cn": "Path",
            },
            type: "string",
            read: true,
            write: true,
            desc: "Create by Adapter",
            def: "/input/key",
            states: constants.path.paths,
        };
        await this.createDataPoint(`${id.dp}.remote.own_request.path`, common, "state", "/input/key");
        common = {
            role: "state",
            name: {
                en: "methode",
                de: "verfahren",
                ru: "метод",
                pt: "método",
                nl: "methode",
                fr: "methode",
                it: "metodo",
                es: "methode",
                pl: "metoda",
                uk: "метод",
                "zh-cn": "方法",
            },
            type: "string",
            read: true,
            write: true,
            desc: "Create by Adapter",
            def: "GET",
            states: ["GET", "POST"],
        };
        await this.createDataPoint(`${id.dp}.remote.own_request.methode`, common, "state", "GET");
        common = {
            role: "state",
            name: {
                en: "HTML Address",
                de: "HTML-Adresse",
                ru: "HTML адрес",
                pt: "Endereço HTML",
                nl: "HTML Addres",
                fr: "Adresse HTML",
                it: "Indirizzo HTML",
                es: "Dirección HTML",
                pl: "HTML Address",
                uk: "Адреса HTML",
                "zh-cn": "HTML地址",
            },
            type: "string",
            read: true,
            write: true,
            desc: "Create by Adapter",
            def: id.https,
            states: [id.http, id.https],
        };
        await this.createDataPoint(`${id.dp}.remote.own_request.address`, common, "state", id.https);
        common = {
            role: "json",
            name: {
                en: "data",
                de: "Daten",
                ru: "данные",
                pt: "dados",
                nl: "data",
                fr: "données",
                it: "dati",
                es: "datos",
                pl: "dane",
                uk: "дані",
                "zh-cn": "数据",
            },
            type: "string",
            read: true,
            write: true,
            desc: "Create by Adapter",
            def: JSON.stringify({ key: "Standby" }),
        };
        await this.createDataPoint(
            `${id.dp}.remote.own_request.json`,
            common,
            "state",
            JSON.stringify({ key: "Standby" }),
        );
        common = {
            role: "json",
            name: {
                en: "Result",
                de: "Ergebnis",
                ru: "Результат",
                pt: "Resultado",
                nl: "Resultaat",
                fr: "Résultat",
                it: "Risultato",
                es: "Resultado",
                pl: "Rezultat",
                uk: "Почати",
                "zh-cn": "报酬",
            },
            type: "string",
            read: true,
            write: false,
            desc: "Create by Adapter",
            def: "{}",
        };
        await this.createDataPoint(`${id.dp}.remote.own_request.result`, common, "state", JSON.stringify({}));
        common = {
            role: "button",
            name: {
                en: "sent request",
                de: "Anfrage senden",
                ru: "отправленный запрос.",
                pt: "pedido enviado.",
                nl: "verzonden verzoek.",
                fr: "envoyé une demande.",
                it: "richiesta inviata.",
                es: "enviado solicitud.",
                pl: "wysłany wniosek.",
                uk: "відправлено запит.",
                "zh-cn": "发出的请求。.",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.own_request.sent_request`, common, "state", false);
    },
    async createNetwork(id, net) {
        let common = {};
        common = {
            role: "button",
            name: {
                en: "Wake on LAN",
                de: "Wake on LAN",
                ru: "Wake on LAN",
                pt: "Wake on LAN",
                nl: "Wake on LAN",
                fr: "Wake on LAN",
                it: "Wake on LAN",
                es: "Wake on LAN",
                pl: "Wake on LAN",
                uk: "Wake on LAN",
                "zh-cn": "Wake on LAN",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.wol`, common, "state", false);
        common = {
            role: "json",
            name: {
                en: "Network",
                de: "Netzwerk",
                ru: "Сеть",
                pt: "Rede",
                nl: "Netwerk",
                fr: "Network",
                it: "Rete di rete",
                es: "Red",
                pl: "Network",
                uk: "Мережа",
                "zh-cn": "网络",
            },
            type: "string",
            read: true,
            write: false,
            desc: "Create by Adapter",
            def: "{}",
        };
        await this.createDataPoint(`${id.dp}.status.network`, common, "state", null);
        await this.setStateAsync(`${id.dp}.status.network`, JSON.stringify(net), true);
    },
    async createApplication(id, apps) {
        let common = {};
        const states = [];
        for (const app of apps.applications) {
            states.push(app.label);
        }
        common = {
            role: "state",
            name: {
                en: "Launch application",
                de: "Programm starten",
                ru: "Запуск приложения",
                pt: "Aplicação de lançamento",
                nl: "Launch aanvraag",
                fr: "Demande de lancement",
                it: "Applicazione del lancio",
                es: "Aplicación de lanzamiento",
                pl: "Launch application",
                uk: "Запуск програми",
                "zh-cn": "发射申请",
            },
            type: "string",
            read: true,
            write: true,
            desc: "Create by Adapter",
            def: apps.applications[0].label,
            states: states,
        };
        await this.createDataPoint(`${id.dp}.remote.settings.launchAPP`, common, "state", apps.applications[0].label);
    },
    async createSettings(id, struct, topology, fs) {
        let common = {};
        common = {
            name: {
                en: "Settings",
                de: "Einstellungen",
                ru: "Настройки",
                pt: "Configurações",
                nl: "Setting",
                fr: "Réglages",
                it: "Impostazioni impostazioni",
                es: "Ajustes",
                pl: "Setting",
                uk: "Налаштування",
                "zh-cn": "确定",
            },
            desc: "Create by Adapter",
            icon: "img/settings.png",
        };
        await this.createDataPoint(`${id.dp}.remote.settings`, common, "folder", null);
        if (topology && topology.left > 0) {
            common = {
                name: {
                    en: "Color selection left",
                    de: "Farbauswahl links",
                    ru: "Выбор цвета влево",
                    pt: "Seleção de cores esquerda",
                    nl: "Kleurselectie links",
                    fr: "Sélection de couleurs gauche",
                    it: "Selezione colore sinistra",
                    es: "Selección de color izquierda",
                    pl: "Wybór powszechny",
                    uk: "Вибір кольору зліва",
                    "zh-cn": "遴选",
                },
                type: "string",
                role: "level.color.rgb",
                read: true,
                write: true,
                desc: "Create by Adapter",
                def: "#000000",
            };
            await this.createDataPoint(`${id.dp}.remote.settings.ambilight_rgb_left`, common, "state", "#000000");
        }
        if (topology && topology.top > 0) {
            common = {
                name: {
                    en: "Color selection top",
                    de: "Farbauswahl oben",
                    ru: "Выбор цвета top",
                    pt: "Topo de seleção de cores",
                    nl: "Kleurselectie top",
                    fr: "Color selection top",
                    it: "Top selezione colore",
                    es: "Top de selección de color",
                    pl: "Color selection top",
                    uk: "Вибір кольору верхнього",
                    "zh-cn": "B. 遴选最高",
                },
                type: "string",
                role: "level.color.rgb",
                read: true,
                write: true,
                desc: "Create by Adapter",
                def: "#000000",
            };
            await this.createDataPoint(`${id.dp}.remote.settings.ambilight_rgb_top`, common, "state", "#000000");
        }
        if (topology && topology.bottom > 0) {
            common = {
                name: {
                    en: "Color selection bottom",
                    de: "Farbauswahl unten",
                    ru: "Выбор цвета дно",
                    pt: "Fundo de seleção de cores",
                    nl: "Kleurselectie onderaan",
                    fr: "Sélection de couleurs bas",
                    it: "Colore selezione inferiore",
                    es: "Fondo de selección de color",
                    pl: "Dola kolońska",
                    uk: "Вибір кольору дна",
                    "zh-cn": "B. 基选",
                },
                type: "string",
                role: "level.color.rgb",
                read: true,
                write: true,
                desc: "Create by Adapter",
                def: "#000000",
            };
            await this.createDataPoint(`${id.dp}.remote.settings.ambilight_rgb_bottom`, common, "state", "#000000");
        }
        if (topology && topology.right > 0) {
            common = {
                name: {
                    en: "Color selection right",
                    de: "Farbauswahl rechts",
                    ru: "Выбор цвета правый",
                    pt: "Seleção de cores direita",
                    nl: "Color selectierecht",
                    fr: "Sélection couleur droite",
                    it: "Selezione colore destra",
                    es: "Selección de color derecho",
                    pl: "Prawo kolektywne",
                    uk: "Вибір кольору правильно",
                    "zh-cn": "甄选权利",
                },
                type: "string",
                role: "level.color.rgb",
                read: true,
                write: true,
                desc: "Create by Adapter",
                def: "#000000",
            };
            await this.createDataPoint(`${id.dp}.remote.settings.ambilight_rgb_right`, common, "state", "#000000");
        }
        common = {
            name: {
                en: "Global search",
                de: "Globale Suche",
                ru: "Глобальный поиск",
                pt: "Pesquisa global",
                nl: "Globale zoektocht",
                fr: "Recherche globale",
                it: "Ricerca globale",
                es: "Búsqueda global",
                pl: "Global search",
                uk: "Глобальний пошук",
                "zh-cn": "全球搜索",
            },
            type: "string",
            role: "text",
            read: true,
            write: true,
            desc: "Create by Adapter",
            def: "netflix",
        };
        await this.createDataPoint(`${id.dp}.remote.settings.launch_search`, common, "state", "netflix");
        common = {
            name: {
                en: "Single color selection",
                de: "Einzelfarbenauswahl",
                ru: "Выбор одного цвета",
                pt: "Seleção de cores única",
                nl: "Single kleurselectie",
                fr: "Choix de couleur unique",
                it: "Selezione colore singolo",
                es: "Selección de color",
                pl: "Dobór kolorów",
                uk: "Вибір кольору",
                "zh-cn": "单一的肤色选择",
            },
            type: "string",
            role: "json",
            read: true,
            write: true,
            desc: "Create by Adapter",
            def: "{}",
        };
        await this.createDataPoint(`${id.dp}.remote.settings.ambilight_hex`, common, "state", JSON.stringify({}));
        common = {
            role: "switch",
            name: {
                en: "Ambilight On/Off",
                de: "Ambilight An/Aus",
                ru: "Ambilight On/Off",
                pt: "Ambilight On/Off",
                nl: "Ambilight On/Off",
                fr: "Ambilight On/Off",
                it: "Ambilight On/Off",
                es: "Ambilight On/Off",
                pl: "Ambilight On/Off",
                uk: "Амбілайт На/Офф",
                "zh-cn": "A. 导 言",
            },
            type: "boolean",
            read: true,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.settings.ambilight_On_Off`, common, "state", false);
        common = {
            role: "value",
            name: {
                en: "HDMI Input",
                de: "HDMI Eingang",
                ru: "HDMI Вход",
                pt: "Entrada HDMI",
                nl: "HDMI Input",
                fr: "Entrée HDMI",
                it: "Ingresso HDMI",
                es: "Entrada HDMI",
                pl: "HDMI Input",
                uk: "HDMI Вхід",
                "zh-cn": "D. 人道主义活动",
            },
            type: "number",
            read: true,
            write: true,
            desc: "Create by Adapter",
            def: 1,
            states: {
                1: "HDMI 1",
                2: "HDMI 2",
                3: "HDMI 3",
                4: "HDMI 4",
            },
        };
        await this.createDataPoint(`${id.dp}.remote.settings.hdmiInput`, common, "state", 1);
        //const ambilight = struct.node.data.nodes.find((node) => node.context === "ambilight");
        id["request"] = [];
        id["request_id"] = [];
        id["node_id"] = {};
        id["ambilight_off"] = 2130968789;
        id["ambilight_style"] = 2130968783;
        let lang;
        if (fs.existsSync(`${this.adapterDir}/lib/data/${id.dp}_lang`)) {
            lang = fs.readFileSync(`${this.adapterDir}/lib/data/${id.dp}_lang`, "utf-8");
        }
        try {
            if (fs.existsSync(`${this.adapterDir}/lib/data/${id.dp}_lang`)) {
                lang = fs.readFileSync(`${this.adapterDir}/lib/data/${id.dp}_lang`, "utf-8");
                lang = JSON.parse(lang);
            }
        } catch {
            lang = null;
        }
        const string_id = [];
        if (!lang) {
            if (struct.node.string_id) {
                string_id.push({ string_id: struct.node.string_id });
            }
            for (const node_json in struct.node.data.nodes) {
                if (struct.node.data.nodes[node_json].string_id) {
                    string_id.push({ string_id: struct.node.data.nodes[node_json].string_id });
                }
                if (struct.node.data.nodes[node_json].context != "ambilight") {
                    continue;
                }
                if (struct.node.data.nodes[node_json].data.nodes) {
                    for (const ambi of struct.node.data.nodes[node_json].data.nodes) {
                        string_id.push({ string_id: ambi.string_id });
                        if (ambi.data.nodes) {
                            for (const data of ambi.data.nodes) {
                                string_id.push({ string_id: data.string_id });
                                if (data.data.enums) {
                                    for (const enums of data.data.enums) {
                                        string_id.push({ string_id: enums.string_id });
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (this.lang == "de") {
                lang = {
                    locale: { language: "de", country: "DE" },
                    strings: string_id,
                };
            } else {
                lang = {
                    locale: { language: "en", country: "en_US" },
                    strings: string_id,
                };
            }
            const trans = await this.getRequest(`${id.https}/strings`, lang, id.password, id.username, "POST");
            fs.writeFileSync(`${this.adapterDir}/lib/data/${id.dp}_lang`, JSON.stringify(trans), "utf-8");
            lang = trans;
        }
        let isfind;
        for (const node_json in struct.node.data.nodes) {
            if (struct.node.data.nodes[node_json].context != "ambilight") {
                continue;
            }
            if (struct.node.data.nodes[node_json].data.nodes) {
                for (const ambi of struct.node.data.nodes[node_json].data.nodes) {
                    id["request"].push({ nodeid: ambi.node_id });
                    id["request_id"].push(ambi.node_id);
                    if (ambi.context) {
                        if (ambi.context === "ambilight_style") {
                            id["ambilight_style"] = ambi.node_id;
                        }
                        this.log.info(`Found ambilight settings ${ambi.context}`);
                        this.log.debug(`AMBI: ${JSON.stringify(ambi)}`);
                        if (ambi.data.colors) {
                            this.log.debug(`COLORS: ${JSON.stringify(ambi.data.colors)}`);
                        } else if (ambi.data.nodes) {
                            for (const data of ambi.data.nodes) {
                                const com = {
                                    type: "",
                                    role: "",
                                    name: "",
                                    desc: "Create by Adapter",
                                    read: true,
                                    write: true,
                                };
                                let native = {};
                                const states = {};
                                this.log.debug(`{"nodes":[{"nodeid":${data.node_id}}]}`);
                                //const valDP = await id.apiTV.requests(
                                //    `${id.https}/menuitems/settings/current`,
                                //    `{"nodes":[{"nodeid":${data.node_id}}]}`,
                                //    id.password,
                                //    id.username,
                                //    "POST",
                                //);
                                //this.log.info("VALUE: " + data.context + " - " + JSON.stringify(valDP));
                                if (data.contxet === "ambilight_off") {
                                    id["ambilight_off"] = data.node_id;
                                }
                                if (data.data.enums) {
                                    for (const enums of data.data.enums) {
                                        isfind = lang.translations.find(mes => mes.string_id === enums.string_id);
                                        states[enums.enum_id] = isfind
                                            ? isfind.string_translation
                                            : enums.string_id.split(".").pop();
                                    }
                                    isfind = lang.translations.find(mes => mes.string_id === data.string_id);
                                    com.type = "number";
                                    com.role = "state";
                                    com.name = isfind ? isfind.string_translation : data.context;
                                    com.states = states;
                                    com.def = 0;
                                    data.send = "selected_item";
                                    native = data;
                                } else if (data.data.colors) {
                                    isfind = lang.translations.find(mes => mes.string_id === data.string_id);
                                    com.type = "string";
                                    com.role = "json";
                                    com.name = isfind ? isfind.string_translation : data.context;
                                    com.def = "[]";
                                    data.send = "value";
                                    native = data;
                                } else if (data.data.slider_data) {
                                    isfind = lang.translations.find(mes => mes.string_id === data.string_id);
                                    com.type = "number";
                                    com.role = "value";
                                    com.name = isfind ? isfind.string_translation : data.context;
                                    com.min = data.data.slider_data.min;
                                    com.max = data.data.slider_data.max;
                                    com.step = data.data.slider_data.step_size;
                                    com.def = data.data.slider_data.min;
                                    data.send = "value";
                                    native = data;
                                }
                                if (com.name != "") {
                                    if (data.node_id) {
                                        id["request"].push({ nodeid: data.node_id });
                                        id["request_id"].push(data.node_id);
                                        id["node_id"][data.node_id] = `${id.dp}.remote.settings.${data.context}`;
                                    }
                                    await this.createDataPoint(
                                        `${id.dp}.remote.settings.${data.context}`,
                                        com,
                                        "state",
                                        com.def,
                                        native,
                                    );
                                }
                            }
                        }
                    }
                }
            } else {
                this.log.debug(`STRUCT: ${JSON.stringify(struct.node.data.nodes[node_json])}`);
            }
        }
    },
    async createTV(id, systemTV) {
        let common = {};
        let icons;
        if (id.picture != null && id.picture != "") {
            icons = { icon: id.picture };
        }
        common = {
            name: id.name,
            desc: id.name,
            statusStates: {
                onlineId: `${this.namespace}.${id.dp}.status.online`,
            },
            ...icons,
        };
        await this.createDataPoint(id.dp, common, "device", null);
        common = {
            name: {
                en: "Status",
                de: "Status",
                ru: "Статус",
                pt: "Estado",
                nl: "Status",
                fr: "État",
                it: "Stato",
                es: "Situación",
                pl: "Status",
                uk: "Статус на сервери",
                "zh-cn": "现状",
            },
            desc: "Create by Adapter",
            icon: "img/status.png",
        };
        await this.createDataPoint(`${id.dp}.status`, common, "folder", null);
        common = {
            type: "boolean",
            role: "info.status",
            name: {
                en: "Status TV",
                de: "Status TV",
                ru: "Статус ТВ",
                pt: "TV de status",
                nl: "Status TV",
                fr: "État TV",
                it: "Stato TV",
                es: "Status TV",
                pl: "Status TV",
                uk: "Статус на сервери",
                "zh-cn": "地位电视",
            },
            desc: "Create by Adapter",
            read: true,
            write: false,
            def: false,
        };
        await this.createDataPoint(`${id.dp}.status.online`, common, "state", false);
        common = {
            type: "string",
            role: "text",
            name: {
                en: "Input",
                de: "Eingang",
                ru: "Вход",
                pt: "Entrada",
                nl: "Input",
                fr: "Entrée",
                it: "Input",
                es: "Input",
                pl: "Input",
                uk: "Вхід",
                "zh-cn": "投入",
            },
            desc: "Create by Adapter",
            read: true,
            write: false,
            def: "",
        };
        await this.createDataPoint(`${id.dp}.status.input`, common, "state", "");
        common = {
            type: "string",
            role: "info.status",
            name: {
                en: "Status text",
                de: "Statustext",
                ru: "Статус текст",
                pt: "Texto de status",
                nl: "Status sms",
                fr: "Texte de situation",
                it: "Testo di stato",
                es: "Texto del Estatuto",
                pl: "Tekst Status",
                uk: "Статус на сервери",
                "zh-cn": "现状案文",
            },
            desc: "Create by Adapter",
            read: true,
            write: false,
            def: "Off",
            States: ["Off", "On", "Standby"],
        };
        await this.createDataPoint(`${id.dp}.status.online_text`, common, "state", "Off");
        common = {
            type: "string",
            role: "json",
            name: {
                en: "notification",
                de: "Benachrichtigung",
                ru: "уведомление",
                pt: "notificação",
                nl: "vertaling:",
                fr: "notification",
                it: "notifica",
                es: "notificación",
                pl: "notyfikacja",
                uk: "повідомлення",
                "zh-cn": "通知",
            },
            desc: "Create by Adapter",
            read: true,
            write: false,
            def: "{}",
        };
        await this.createDataPoint(`${id.dp}.status.notify`, common, "state", JSON.stringify({}));
        common = {
            name: {
                en: "Remote Control",
                de: "Fernsteuerung",
                ru: "Дистанционное управление",
                pt: "Controle remoto",
                nl: "Verwijder controle",
                fr: "Télécommande",
                it: "Controllo remoto",
                es: "Control remoto",
                pl: "Kontrola Pamięci",
                uk: "Пульт дистанційного керування",
                "zh-cn": "遥感",
            },
            desc: "Create by Adapter",
            icon: "img/fernbedienung.png",
        };
        await this.createDataPoint(`${id.dp}.remote`, common, "folder", null);
        common = {
            name: {
                en: "Remote control buttons",
                de: "Fernbedienungstasten",
                ru: "Удаленные кнопки управления",
                pt: "Botões de controle remoto",
                nl: "Verwijder controle knoppen",
                fr: "Boutons de commande à distance",
                it: "Pulsanti di controllo remoto",
                es: "Botones de control remoto",
                pl: "Klucze kontrolne",
                uk: "Кнопки дистанційного керування",
                "zh-cn": "遥控区",
            },
            desc: "Create by Adapter",
            icon: "img/keys.png",
        };
        await this.createDataPoint(`${id.dp}.remote.keys`, common, "folder", null);
        common = {
            role: "button",
            name: {
                en: "Rewinding",
                de: "Zurückspulen",
                ru: "Перемотка",
                pt: "Rebobinamento",
                nl: "Veranderen",
                fr: "Rewinding",
                it: "Riavvolgimento",
                es: "Rebobinado",
                pl: "Odwrotnie",
                uk: "Перемотування",
                "zh-cn": "退税",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.rewind`, common, "state", false);
        common = {
            role: "button.fastforward",
            name: {
                en: "Fast forwarding",
                de: "Schneller Vorlauf",
                ru: "Быстрое экспедирование",
                pt: "Encaminhamento rápido",
                nl: "Snel vooruit",
                fr: "Avance rapide ",
                it: "Avanti veloce",
                es: "¡Un avance rápido",
                pl: "Fast forwarding",
                uk: "Швидка переадресація",
                "zh-cn": "前进",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.fastForward`, common, "state", false);
        common = {
            role: "button.next",
            name: {
                en: "next",
                de: "nächste",
                ru: "следующий",
                pt: "próximo",
                nl: "volgende",
                fr: "suivant",
                it: "prossimo",
                es: "siguiente",
                pl: "następnego dnia",
                uk: "головна",
                "zh-cn": "下表",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.next`, common, "state", false);
        common = {
            role: "button.prev",
            name: {
                en: "Previous",
                de: "Vorherige",
                ru: "Предыдущий",
                pt: "Anterior",
                nl: "Vertaling:",
                fr: "Précédent",
                it: "Precedente",
                es: "Anterior",
                pl: "Previously",
                uk: "Попереднє",
                "zh-cn": "曾任",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.previous`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "Cursor up",
                de: "Cursor nach oben",
                ru: "Курсор вверх",
                pt: "Curso de formação",
                nl: "Cursus",
                fr: "Maudit",
                it: "Cursore su",
                es: "Cursor arriba",
                pl: "Cursor up",
                uk: "Кар'єра",
                "zh-cn": "旅行社",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.cursorUp`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "Cursor left",
                de: "Cursor links",
                ru: "Курсор ушел",
                pt: "Cursor à esquerda",
                nl: "Vertaling:",
                fr: "Curseur gauche",
                it: "Cursor sinistra",
                es: "Cursor izquierdo",
                pl: "Cursor odszedł z zespołu",
                uk: "Курорт зліва",
                "zh-cn": "派员",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.cursorLeft`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "Cursor right",
                de: "Cursor rechts",
                ru: "Курсор право",
                pt: "Cursor direito",
                nl: "Cursor rechts",
                fr: "Cursor right",
                it: "Cursor destra",
                es: "Cursor right",
                pl: "Kursor się przesuwa",
                uk: "Кюрсор право",
                "zh-cn": "旅行权",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.cursorRight`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "Cursor down",
                de: "Cursor unten",
                ru: "Курсор вниз",
                pt: "Curso para baixo",
                nl: "Cursor omlaag",
                fr: "Curseur à terre",
                it: "Cursore verso il basso",
                es: "Cursor abajo",
                pl: "Kursor w dół",
                uk: "Кюрсор вниз",
                "zh-cn": "退款",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.cursorDown`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "confirm",
                de: "bestätigen",
                ru: "подтвердить",
                pt: "confirmar",
                nl: "bevestig het",
                fr: "confirmer",
                it: "conferma",
                es: "confirmar",
                pl: "potwierdzać",
                uk: "зареєструватися",
                "zh-cn": "证明",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.confirm`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "return",
                de: "zurück",
                ru: "вернуться",
                pt: "retorno",
                nl: "terug",
                fr: "retour",
                it: "ritorno",
                es: "retorno",
                pl: "wracać",
                uk: "увійти",
                "zh-cn": "返回",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.back`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "exit",
                de: "Ausgang",
                ru: "выход",
                pt: "saída",
                nl: "vertaling:",
                fr: "sortie",
                it: "uscita",
                es: "salida",
                pl: "wyjście",
                uk: "увійти",
                "zh-cn": "撤离",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.exit`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "Play/Pause",
                de: "Spielen/Pause",
                ru: "Играть/Пауза",
                pt: "Jogar/Pause",
                nl: "Play-Pause",
                fr: "Play/Pause",
                it: "Gioco/Pausa",
                es: "Play/Pause",
                pl: "Play/Pause",
                uk: "Грати/Пауза",
                "zh-cn": "Play/Pause",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.playPause`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "Home",
                de: "Home",
                ru: "Начало",
                pt: "Home",
                nl: "Thuis",
                fr: "Home",
                it: "Home",
                es: "Home",
                pl: "Dom",
                uk: "Головна",
                "zh-cn": "家庭",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.home`, common, "state", false);
        common = {
            role: "button.volume.up",
            name: {
                en: "Volume Up",
                de: "Lautstärke nach oben",
                ru: "Объем Up",
                pt: "Volume para cima",
                nl: "Volume Up",
                fr: "Volume",
                it: "Volume su",
                es: "Volumen Up",
                pl: "Volume Up",
                uk: "Об'єм",
                "zh-cn": "第一卷",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.volumeUp`, common, "state", false);
        common = {
            role: "button.volume.down",
            name: {
                en: "Volume down",
                de: "Lautstärke nach unten",
                ru: "Объем вниз",
                pt: "Volume para baixo",
                nl: "Volume down",
                fr: "Volume vers le bas",
                it: "Volume down",
                es: "Volumen baja",
                pl: "Volumen down",
                uk: "Об'єм",
                "zh-cn": "量刑",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.volumeDown`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "Philips Menu",
                de: "Philips Menü",
                ru: "Филипс меню",
                pt: "Menu Philips",
                nl: "Philips Menu",
                fr: "Philips Menu",
                it: "Menu Philips",
                es: "Philips Menu",
                pl: "Filip",
                uk: "Фірмове меню",
                "zh-cn": "Philips Menu",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.philipsMenu`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "Source",
                de: "Quelle",
                ru: "Источник",
                pt: "Fonte",
                nl: "Zuur",
                fr: "Source",
                it: "Fonte",
                es: "Fuente",
                pl: "Źródło",
                uk: "Джерело",
                "zh-cn": "来源",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.source`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "TV Guide",
                de: "TV Guide",
                ru: "ТВ-гид",
                pt: "Guia de TV",
                nl: "Tv Guide",
                fr: "Guide TV",
                it: "Guida alla TV",
                es: "Guía de TV",
                pl: "Strona internetowa",
                uk: "Телевізор",
                "zh-cn": "电视指南",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.tvGuide`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "Record",
                de: "Aufnahme",
                ru: "Запись",
                pt: "Gravação",
                nl: "Record",
                fr: "Enregistrement",
                it: "Registrazione",
                es: "Record",
                pl: "Record",
                uk: "Запис",
                "zh-cn": "录音",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.record`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "Red button",
                de: "Roter Knopf",
                ru: "Красная кнопка",
                pt: "Botão vermelho",
                nl: "Rode knop",
                fr: "Bouton rouge",
                it: "Pulsante rosso",
                es: "Botón rojo",
                pl: "Przycisk",
                uk: "Червона кнопка",
                "zh-cn": "D. 红十字会和红新月会",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.redColour`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "Green button",
                de: "Grüner Knopf",
                ru: "Зеленая кнопка",
                pt: "Botão verde",
                nl: "Groene knop",
                fr: "Bouton vert",
                it: "Pulsante verde",
                es: "Botón verde",
                pl: "Green's button",
                uk: "Зелена кнопка",
                "zh-cn": "绿色顿",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.greenColour`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "Yellow button",
                de: "Gelber Knopf",
                ru: "Желтая кнопка",
                pt: "Botão amarelo",
                nl: "Gele knop",
                fr: "Bouton jaune",
                it: "Pulsante giallo",
                es: "Botón amarillo",
                pl: "Przycisk",
                uk: "Жовта кнопка",
                "zh-cn": "Yellow但ton",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.yellowColour`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "Blue button",
                de: "Blauer Knopf",
                ru: "Голубая кнопка",
                pt: "Botão azul",
                nl: "Blauwe knop",
                fr: "Bouton bleu",
                it: "Pulsante blu",
                es: "Botón azul",
                pl: "Blue button",
                uk: "Синя кнопка",
                "zh-cn": "蓝图",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.blueColour`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "Teletext",
                de: "Teletext",
                ru: "Телетекст",
                pt: "Teletexto",
                nl: "Teletext",
                fr: "Teletext",
                it: "Telefona",
                es: "Teletext",
                pl: "Teletext",
                uk: "Телетекст",
                "zh-cn": "电信",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.teletext`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "Options",
                de: "Optionen",
                ru: "Варианты",
                pt: "Opções",
                nl: "Opties",
                fr: "Options",
                it: "Opzioni",
                es: "Opciones",
                pl: "Option",
                uk: "Варіанти",
                "zh-cn": "备选案文",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.options`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "mute",
                de: "stumm",
                ru: "милый",
                pt: "muda",
                nl: "mute",
                fr: "mute",
                it: "mute",
                es: "mute",
                pl: "bunt",
                uk: "мапа",
                "zh-cn": "穆特",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.mute`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "Button 0",
                de: "Taste 0",
                ru: "Кнопка 0",
                pt: "Botão 0",
                nl: "Button 0",
                fr: "Button 0",
                it: "Pulsante 0",
                es: "Botón 0",
                pl: "Button 0",
                uk: "Кнопка 0",
                "zh-cn": "布顿",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.digit0`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "Button 1",
                de: "Taste 1",
                ru: "Кнопка 1",
                pt: "Botão 1",
                nl: "Button 1",
                fr: "Button 1",
                it: "Pulsante 1",
                es: "Botón 1",
                pl: "Button 1",
                uk: "Кнопка 1",
                "zh-cn": "布顿1",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.digit1`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "Button 2",
                de: "Taste 2",
                ru: "Кнопка 2",
                pt: "Botão 2",
                nl: "Button 2",
                fr: "Button 2",
                it: "Pulsante 2",
                es: "Botón 2",
                pl: "Button 2",
                uk: "Кнопка 2",
                "zh-cn": "布顿2",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.digit2`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "Button 3",
                de: "Taste 3",
                ru: "Кнопка 3",
                pt: "Botão 3",
                nl: "Button 3",
                fr: "Button 3",
                it: "Pulsante 3",
                es: "Botón 3",
                pl: "Button 3",
                uk: "Кнопка 3",
                "zh-cn": "布顿3",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.digit3`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "Button 4",
                de: "Taste 4",
                ru: "Кнопка 4",
                pt: "Botão 4",
                nl: "Button 4",
                fr: "Button 4",
                it: "Pulsante 4",
                es: "Botón 4",
                pl: "Button 4",
                uk: "Кнопка 4",
                "zh-cn": "布顿4",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.digit4`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "Button 5",
                de: "Taste 5",
                ru: "Кнопка 5",
                pt: "Botão 5",
                nl: "Button 5",
                fr: "Button 5",
                it: "Pulsante 5",
                es: "Button 5",
                pl: "Button 5",
                uk: "Кнопка 5",
                "zh-cn": "布顿5",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.digit5`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "Button 6",
                de: "Taste 6",
                ru: "Кнопка 6",
                pt: "Botão 6",
                nl: "Button 6",
                fr: "Button 6",
                it: "Pulsante 6",
                es: "Botón 6",
                pl: "Button 6",
                uk: "Кнопка 6",
                "zh-cn": "布顿6",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.digit6`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "Button 7",
                de: "Taste 7",
                ru: "Кнопка 7",
                pt: "Botão 7",
                nl: "Button 7",
                fr: "Button 7",
                it: "Pulsante 7",
                es: "Button 7",
                pl: "Button 7",
                uk: "Кнопка 7",
                "zh-cn": "但第7条",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.digit7`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "Button 8",
                de: "Taste 8",
                ru: "Кнопка 8",
                pt: "Botão 8",
                nl: "Button 8",
                fr: "Button 8",
                it: "Pulsante 8",
                es: "Button 8",
                pl: "Button 8",
                uk: "Кнопка 8",
                "zh-cn": "但第8条",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.digit8`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "Button 9",
                de: "Knopf 9",
                ru: "Кнопка 9",
                pt: "Botão 9",
                nl: "Button 9",
                fr: "Button 9",
                it: "Pulsante 9",
                es: "Botón 9",
                pl: "Button 9",
                uk: "Кнопка 9",
                "zh-cn": "布顿9",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.digit9`, common, "state", false);
        if (
            systemTV &&
            systemTV.featuring &&
            systemTV.featuring.ambilight &&
            systemTV.featuring.ambilight.includes("Ambilight")
        ) {
            common = {
                role: "button",
                name: {
                    en: "Ambilight On/Off",
                    de: "Ambilight Auf/Aus",
                    ru: "Ambilight On/Off",
                    pt: "Ambilight On/Off",
                    nl: "Ambilight On/Off",
                    fr: "Ambilight On/Off",
                    it: "Ambilight On/Off",
                    es: "Ambilight On/Off",
                    pl: "Ambilight On/Off",
                    uk: "Амбілайт На/Офф",
                    "zh-cn": "A. 导 言",
                },
                type: "boolean",
                read: false,
                write: true,
                desc: "Create by Adapter",
                def: false,
            };
            await this.createDataPoint(`${id.dp}.remote.keys.ambilightOnOff`, common, "state", false);
        }
        common = {
            role: "button",
            name: {
                en: "Adjust",
                de: "Anpassung",
                ru: "Настройка",
                pt: "Ajustar",
                nl: "Aanpassen",
                fr: "Ajustement",
                it: "Regola",
                es: "Ajuste",
                pl: "Adjust",
                uk: "Налаштування",
                "zh-cn": "评 注",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.adjust`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "Channel Step Down",
                de: "Kanal nach unten",
                ru: "Канал Шаг Вниз",
                pt: "Passo do canal para baixo",
                nl: "Channel Step Down",
                fr: "Channel Step Down",
                it: "Canale passo giù",
                es: "Canales abajo",
                pl: "Channel Step Down",
                uk: "Канал Крок вниз",
                "zh-cn": "Channel Step Down",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.channelStepDown`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "Channel Step Up",
                de: "Kanal nach oben",
                ru: "Канал Step Up",
                pt: "Passo do canal para cima",
                nl: "Kanaal Step Up",
                fr: "Channel Step Up",
                it: "Canale passo su",
                es: "Canales arriba",
                pl: "Channel Step Up",
                uk: "Канал Крок вгору",
                "zh-cn": "海峡步骤",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.channelStepUp`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "Dot",
                de: "Punkt",
                ru: "Дот",
                pt: "Dot",
                nl: "Dot",
                fr: "Dot",
                it: "Do",
                es: "Dot",
                pl: "Dot",
                uk: "До",
                "zh-cn": "Dot",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.dot`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "Info",
                de: "Info",
                ru: "Информация",
                pt: "Info",
                nl: "Info",
                fr: "Info",
                it: "Info",
                es: "Info",
                pl: "Info",
                uk: "Новини",
                "zh-cn": "信息",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.info`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "Online",
                de: "Online",
                ru: "Онлайн",
                pt: "Online",
                nl: "Online",
                fr: "Online",
                it: "Online",
                es: "Online",
                pl: "Online",
                uk: "Інтернет",
                "zh-cn": "在线",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.online`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "Standby",
                de: "Standby",
                ru: "Резерв",
                pt: "Aguarde",
                nl: "Stand-by",
                fr: "Standby",
                it: "Standby",
                es: "Standby",
                pl: "Standby",
                uk: "Панчохи",
                "zh-cn": "A. 待命安排",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.standby`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "Stop",
                de: "Stopp",
                ru: "Стоп",
                pt: "Pára",
                nl: "Stop",
                fr: "Arrête",
                it: "Fermati",
                es: "Para",
                pl: "Stop",
                uk: "Зареєструватися",
                "zh-cn": "禁止",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.stop`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "Subtitle",
                de: "Untertitel",
                ru: "Субтитры",
                pt: "Subtitle",
                nl: "Vertaling:",
                fr: "Sous-titrage",
                it: "Sottotitoli",
                es: "Subtítulo",
                pl: "Subtitle",
                uk: "Субтитри",
                "zh-cn": "权利",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.subtitle`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "Viewmode",
                de: "Ansichtsmodus",
                ru: "Viewmode",
                pt: "Visualização",
                nl: "Viewmo",
                fr: "Viewmode",
                it: "Viewmode",
                es: "Viewmode",
                pl: "Viewmode",
                uk: "Мапа",
                "zh-cn": "白米松",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.viewmode`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "Watch TV",
                de: "Watch TV",
                ru: "Смотреть телевизор",
                pt: "Assista TV",
                nl: "Watch TV",
                fr: "Regarde la télé",
                it: "Guarda la TV",
                es: "Ver TV",
                pl: "Watch TV",
                uk: "Телевізор",
                "zh-cn": "观察电视",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.watchTV`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "Power Off",
                de: "ausschalten",
                ru: "Сила Off",
                pt: "Desligamento de energia",
                nl: "Power Off",
                fr: "Puissance hors tension",
                it: "Potenza",
                es: "Power Off",
                pl: "Łączność",
                uk: "Відключення живлення",
                "zh-cn": "权力",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.powerOff`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "Power On",
                de: "einschlten",
                ru: "Сила на",
                pt: "Poder sobre",
                nl: "Power On",
                fr: "Puissance sur",
                it: "Potenza",
                es: "Power On",
                pl: "Power on Power",
                uk: "Потужність на",
                "zh-cn": "权力",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.powerOn`, common, "state", false);
        common = {
            role: "button",
            name: {
                en: "Find",
                de: "Finden",
                ru: "Найти",
                pt: "Encontrar",
                nl: "Zoek",
                fr: "Trouver",
                it: "Trova",
                es: "Encontrar",
                pl: "Find",
                uk: "Пошук",
                "zh-cn": "法 律",
            },
            type: "boolean",
            read: false,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.find`, common, "state", false);
    },
    /**
     * @param {string} ident
     * @param {object} common
     * @param {string} types
     * @param {string|number|boolean|null|undefined} value
     * @param {object|null|undefined} [native=null]
     */
    async createDataPoint(ident, common, types, value, native) {
        try {
            const nativvalue = !native ? { native: {} } : { native: native };
            const obj = await this.getObjectAsync(ident);
            if (!obj) {
                await this.setObjectNotExistsAsync(ident, {
                    type: types,
                    common: common,
                    ...nativvalue,
                }).catch(error => {
                    this.log.warn(`createDataPoint: ${error}`);
                });
            } else {
                let ischange = false;
                if (Object.keys(obj.common).length == Object.keys(common).length) {
                    for (const key in common) {
                        if (obj.common[key] == null) {
                            ischange = true;
                            break;
                        } else if (JSON.stringify(obj.common[key]) != JSON.stringify(common[key])) {
                            ischange = true;
                            break;
                        }
                    }
                } else {
                    ischange = true;
                }
                if (JSON.stringify(obj.type) != JSON.stringify(types)) {
                    ischange = true;
                }
                if (native) {
                    if (Object.keys(obj.native).length == Object.keys(nativvalue.native).length) {
                        for (const key in obj.native) {
                            if (nativvalue.native[key] == null) {
                                ischange = true;
                                delete obj["native"];
                                obj["native"] = native;
                                break;
                            } else if (JSON.stringify(obj.native[key]) != JSON.stringify(nativvalue.native[key])) {
                                ischange = true;
                                obj.native[key] = nativvalue.native[key];
                                break;
                            }
                        }
                    } else {
                        ischange = true;
                    }
                }
                if (ischange) {
                    this.log.debug(`INFORMATION - Change common: ${this.namespace}.${ident}`);
                    delete obj["common"];
                    obj["common"] = common;
                    obj["type"] = types;
                    await this.setObjectAsync(ident, obj);
                }
            }
            if (value != null) {
                await this.setStateAsync(ident, value, true);
            }
        } catch (error) {
            this.log.warn(`createDataPoint e: ${error}`);
        }
    },
};
