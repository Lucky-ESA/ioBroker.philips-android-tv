const constants = require("./constants");
module.exports = {
    async createAurora(id, fs) {
        const auro = [];
        const states = {};
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
        await this.createDataPoint(`${id.dp}.remote.aurora`, common, "folder");
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
                    value.context = value.context.toLowerCase();
                    states[value.context] = {};
                    for (const enums of value.data.enums) {
                        const string_id = { string_id: enums.string_id };
                        auro.push(string_id);
                        states[value.context][enums.enum_id] = enums.string_id;
                    }
                }
                const trans = await this.getRequest(
                    `${id.https}/strings`,
                    { strings: auro },
                    id.password,
                    id.username,
                    "POST",
                );
                for (const dp in states) {
                    let def = 0;
                    for (const state in states[dp]) {
                        const isfind = trans.translations.find((mes) => mes.string_id === states[dp][state]);
                        states[dp][state] = isfind != null ? isfind.string_translation : states[dp][state];
                        def = typeof state == "number" ? state : 0;
                    }
                    common = {
                        name: dp,
                        type: "number",
                        role: "value",
                        read: true,
                        write: true,
                        desc: "Create by Adapter",
                        def: def,
                        states: states[dp],
                    };
                    await this.createDataPoint(`${id.dp}.remote.aurora.${dp}`, common, "state");
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
            await this.createDataPoint(`${id.dp}.remote.settings.mute`, common, "state");
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
            await this.createDataPoint(`${id.dp}.remote.settings.volume`, common, "state");
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
                for (const ccid of channel_all.Channel) {
                    channellist[ccid.ccid] = ccid.name;
                }
                common = {
                    type: "string",
                    role: "state",
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
                    def: "",
                    states: channellist,
                };
                await this.createDataPoint(`${id.dp}.remote.settings.channel`, common, "state");
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
                                const isfind = channel_all.Channel.find((mes) => mes.ccid === fav.ccid);
                                favoritelist[fav.ccid] = isfind.name;
                                id.fav[`favorite_${count}`].push(fav.ccid);
                            }
                            common = {
                                type: "string",
                                role: "state",
                                name: {
                                    en: "Favorite list " + count,
                                    de: "Lieblingsliste " + count,
                                    ru: "Любимый список " + count,
                                    pt: "Lista de favoritos " + count,
                                    nl: "Favoriete " + count,
                                    fr: "Liste des favoris " + count,
                                    it: "Elenco preferito " + count,
                                    es: "Lista favorita " + count,
                                    pl: "Lista ulubionych " + count,
                                    uk: "Вибраний список " + count,
                                    "zh-cn": "印 录 " + count,
                                },
                                read: true,
                                write: true,
                                desc: "Create by Adapter",
                                def: "",
                                states: favoritelist,
                            };
                            await this.createDataPoint(`${id.dp}.remote.settings.favorite_${count}`, common, "state");
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
                read: true,
                write: true,
                desc: "Create by Adapter",
                def: false,
            };
            await this.createDataPoint(`${id.dp}.remote.settings.favorite_refresh`, common, "state");
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
            await this.createDataPoint(`${id.dp}.remote.settings.favorite_select`, common, "state");
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
            await this.createDataPoint(`${id.dp}.remote.settings.favorite_add`, common, "state");
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
            await this.createDataPoint(`${id.dp}.remote.settings.favorite_channel_delete`, common, "state");
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
            await this.createDataPoint(`${id.dp}.remote.settings.favorite_sort`, common, "state");
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
            await this.createDataPoint(`${id.dp}.remote.settings.favorite_name`, common, "state");
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
                read: true,
                write: true,
                desc: "Create by Adapter",
                def: false,
            };
            await this.createDataPoint(`${id.dp}.remote.settings.favorite_delete`, common, "state");
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
            await this.createDataPoint(`${id.dp}.remote.settings.favorite_create_channel`, common, "state");
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
            await this.createDataPoint(`${id.dp}.remote.settings.favorite_create_name`, common, "state");
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
                read: true,
                write: true,
                desc: "Create by Adapter",
                def: false,
            };
            await this.createDataPoint(`${id.dp}.remote.settings.favorite_create`, common, "state");
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
        await this.createDataPoint(`${id.dp}.remote.own_request`, common, "folder");
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
        await this.createDataPoint(`${id.dp}.remote.own_request.path`, common, "state");
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
        await this.createDataPoint(`${id.dp}.remote.own_request.methode`, common, "state");
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
        await this.createDataPoint(`${id.dp}.remote.own_request.address`, common, "state");
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
        await this.createDataPoint(`${id.dp}.remote.own_request.json`, common, "state");
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
        await this.createDataPoint(`${id.dp}.remote.own_request.result`, common, "state");
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
            read: true,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.own_request.sent_request`, common, "state");
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
            read: true,
            write: true,
            desc: "Create by Adapter",
            def: false,
        };
        await this.createDataPoint(`${id.dp}.remote.keys.wol`, common, "state");
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
        await this.createDataPoint(`${id.dp}.status.network`, common, "state");
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
        await this.createDataPoint(`${id.dp}.remote.settings.launchAPP`, common, "state");
    },
    async createSettings(id, struct, topology) {
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
        await this.createDataPoint(`${id.dp}.remote.settings`, common, "folder");
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
            await this.createDataPoint(`${id.dp}.remote.settings.ambilight_rgb_left`, common, "state");
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
            await this.createDataPoint(`${id.dp}.remote.settings.ambilight_rgb_top`, common, "state");
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
            await this.createDataPoint(`${id.dp}.remote.settings.ambilight_rgb_bottom`, common, "state");
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
            await this.createDataPoint(`${id.dp}.remote.settings.ambilight_rgb_right`, common, "state");
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
        await this.createDataPoint(`${id.dp}.remote.settings.launch_search`, common, "state");
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
        await this.createDataPoint(`${id.dp}.remote.settings.ambilight_hex`, common, "state");
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
        await this.createDataPoint(`${id.dp}.remote.settings.ambilight_On_Off`, common, "state");
        common = {
            role: "number",
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
            type: "value",
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
        await this.createDataPoint(`${id.dp}.remote.settings.hdmiInput`, common, "state");
        //const ambilight = struct.node.data.nodes.find((node) => node.context === "ambilight");
        id["request"] = [];
        id["request_id"] = [];
        id["node_id"] = {};
        id["ambilight_off"] = 2130968789;
        id["ambilight_style"] = 2130968783;
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
                        this.log.debug("AMBI: " + JSON.stringify(ambi));
                        if (ambi.data.colors) {
                            this.log.debug("COLORS: " + JSON.stringify(ambi.data.colors));
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
                                        states[enums.enum_id] = enums.string_id.split(".").pop();
                                    }
                                    com.type = "number";
                                    com.role = "state";
                                    com.name = data.context;
                                    com.states = states;
                                    com.def = 0;
                                    data.send = "selected_item";
                                    native = data;
                                } else if (data.data.colors) {
                                    com.type = "string";
                                    com.role = "json";
                                    com.name = data.context;
                                    com.def = "[]";
                                    data.send = "value";
                                    native = data;
                                } else if (data.data.slider_data) {
                                    com.type = "number";
                                    com.role = "value";
                                    com.name = data.context;
                                    com.min = data.data.slider_data.min;
                                    com.max = data.data.slider_data.max;
                                    com.step = data.data.slider_data.step_size;
                                    com.def = 0;
                                    data.send = "value";
                                    native = data;
                                }
                                if (com.name != "") {
                                    if (data.node_id) {
                                        id["request"].push({ nodeid: data.node_id });
                                        id["request_id"].push(data.node_id);
                                        id["node_id"][data.node_id] = `${id.dp}.remote.settings.${com.name}`;
                                    }
                                    await this.createDataPoint(
                                        `${id.dp}.remote.settings.${com.name}`,
                                        com,
                                        "state",
                                        native,
                                    );
                                }
                            }
                        }
                    }
                }
            } else {
                this.log.debug("STRUCT: " + JSON.stringify(struct.node.data.nodes[node_json]));
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
        await this.createDataPoint(id.dp, common, "device");
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
        await this.createDataPoint(`${id.dp}.status`, common, "folder");
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
        await this.createDataPoint(`${id.dp}.status.online`, common, "state");
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
        await this.createDataPoint(`${id.dp}.status.input`, common, "state");
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
        await this.createDataPoint(`${id.dp}.status.online_text`, common, "state");
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
        await this.createDataPoint(`${id.dp}.status.notify`, common, "state");
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
        await this.createDataPoint(`${id.dp}.remote`, common, "folder");
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
        await this.createDataPoint(`${id.dp}.remote.keys`, common, "folder");
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
        await this.createDataPoint(`${id.dp}.remote.keys.rewind`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.rewind`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.fastForward`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.fastForward`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.next`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.next`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.previous`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.previous`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.cursorUp`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.cursorUp`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.cursorLeft`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.cursorLeft`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.cursorRight`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.cursorRight`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.cursorDown`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.cursorDown`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.confirm`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.confirm`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.back`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.back`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.exit`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.exit`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.playPause`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.playPause`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.home`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.home`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.volumeUp`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.volumeUp`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.volumeDown`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.volumeDown`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.philipsMenu`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.philipsMenu`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.source`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.source`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.tvGuide`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.tvGuide`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.record`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.record`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.redColour`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.redColour`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.greenColour`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.greenColour`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.yellowColour`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.yellowColour`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.blueColour`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.blueColour`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.teletext`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.teletext`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.options`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.options`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.mute`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.mute`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.digit0`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.digit0`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.digit1`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.digit1`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.digit2`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.digit2`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.digit3`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.digit3`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.digit4`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.digit4`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.digit5`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.digit5`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.digit6`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.digit6`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.digit7`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.digit7`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.digit8`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.digit8`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.digit9`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.digit9`, { val: false });
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
            await this.createDataPoint(`${id.dp}.remote.keys.ambilightOnOff`, common, "state");
            this.setAckFlag(`${id.dp}.remote.keys.ambilightOnOff`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.adjust`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.adjust`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.channelStepDown`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.channelStepDown`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.channelStepUp`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.channelStepUp`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.dot`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.dot`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.info`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.info`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.online`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.online`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.standby`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.standby`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.stop`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.stop`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.subtitle`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.subtitle`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.viewmode`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.viewmode`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.watchTV`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.watchTV`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.powerOff`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.powerOff`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.powerOn`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.powerOn`, { val: false });
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
        await this.createDataPoint(`${id.dp}.remote.keys.find`, common, "state");
        this.setAckFlag(`${id.dp}.remote.keys.find`, { val: false });
    },
    /**
     * @param {string} ident
     * @param {object} common
     * @param {string} types
     * @param {object|null|undefined} [native=null]
     */
    async createDataPoint(ident, common, types, native) {
        try {
            const nativvalue = !native ? { native: {} } : { native: native };
            const obj = await this.getObjectAsync(ident);
            if (!obj) {
                await this.setObjectNotExistsAsync(ident, {
                    type: types,
                    common: common,
                    ...nativvalue,
                }).catch((error) => {
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
        } catch (error) {
            this.log.warn(`createDataPoint e: ${error}`);
        }
    },
};
