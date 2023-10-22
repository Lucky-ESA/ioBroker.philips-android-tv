exports.secret_key = "JCqdN5AcnAHgJYseUn7ER5k3qgtemfUvMRghQpTfTZq7Cvv8EPQPqfz6dDxPQPSu4gKFPWkJGw32zyASgJkHwCjU";
exports.getPair = {
    scope: ["read", "write", "control"],
    device: {
        device_name: "heliotrope",
        device_os: "IPhone",
        app_name: "iobroker",
        type: "native",
        app_id: "app.id",
        id: "",
    },
};
exports.getGrant = {
    auth: {
        auth_AppId: "1",
        pin: 0,
        auth_timestamp: 0,
        auth_signature: "",
    },
    device: {
        device_name: "heliotrope",
        device_os: "IPhone",
        app_name: "iobroker",
        type: "native",
        app_id: "app.id",
        id: "",
    },
};
exports.path = {
    paths: [
        "/input/key",
        "/powerstate",
        "/applications",
        "/activities/current",
        "/activities/tv",
        "/channeldb/tv/favoriteLists/<id>",
        "/channeldb/tv/channelLists/all",
        "/audio/volume",
        "/activities/launch",
        "/HueLamp/power",
        "/ambilight/currentconfiguration",
        "/ambilight/power",
        "/ambilight/lounge",
        "/ambilight/supportedstyles",
        "/ambilight/mode",
        "/ambilight/cached",
        "/ambilight/topology",
        "/ambilight/measured",
        "/ambilight/processed",
        "/menuitems/settings/update",
        "/menuitems/settings/current",
        "/apps/ChromeCast",
        "/channeldb/tv/favoritelLists/all",
        "/system",
        "/system/epgsource",
        "/system/storage",
        "/system/timestamp",
        "/menuitems/settings/structure",
        "/notifychange",
        "/channeldb/tv",
        "/recordings/list",
        "/aurora/settings/structure",
        "/aurora/settings/strings",
        "/aurora/settings/current",
        "/aurora/settings/gallery",
        "/aurora/settings/update",
    ],
};
exports.auroras = {
    strings: [
        { string_id: "org.droidtv.ui.strings2.R.string.MAIN_PLAY_ALL" },
        { string_id: "org.droidtv.ui.strings2.R.string.MAIN_AURORA_JELLYFISH" },
        { string_id: "org.droidtv.ui.strings2.R.string.MAIN_AURORA_LAVA" },
        { string_id: "org.droidtv.ui.strings2.R.string.MAIN_AURORA_HEARTS" },
        { string_id: "org.droidtv.ui.strings2.R.string.MAIN_AURORA_SPACE_WARP" },
        { string_id: "org.droidtv.ui.strings2.R.string.MAIN_AURORA_CONFETTI" },
        { string_id: "org.droidtv.ui.strings2.R.string.MAIN_PLAY_ALL" },
        { string_id: "org.droidtv.ui.strings2.R.string.MAIN_AURORA_SPRING" },
        { string_id: "org.droidtv.ui.strings2.R.string.MAIN_AURORA_SUMMER" },
        { string_id: "org.droidtv.ui.strings2.R.string.MAIN_AURORA_AUTUMN" },
        { string_id: "org.droidtv.ui.strings2.R.string.MAIN_AURORA_WINTER" },
        { string_id: "org.droidtv.ui.strings2.R.string.MAIN_PLAY_ALL" },
        { string_id: "org.droidtv.ui.strings2.R.string.MAIN_AURORA_DIGITAL" },
        { string_id: "org.droidtv.ui.strings2.R.string.MAIN_AURORA_STARBURST" },
        { string_id: "org.droidtv.ui.strings2.R.string.MAIN_AURORA_BINARY" },
        { string_id: "org.droidtv.ui.strings2.R.string.MAIN_AURORA_FLEXBOX" },
        { string_id: "org.droidtv.ui.strings2.R.string.MAIN_AURORA_TICK" },
        { string_id: "org.droidtv.ui.strings2.R.string.MAIN_AURORA_PASSING_TIME" },
        { string_id: "org.droidtv.ui.strings2.R.string.MAIN_AURORA_REACT_MORPH" },
        { string_id: "org.droidtv.ui.strings2.R.string.MAIN_AURORA_TRIANGULATE" },
        { string_id: "org.droidtv.ui.strings2.R.string.MAIN_AURORA_COLLECTION" },
        { string_id: "org.droidtv.ui.strings2.R.string.MAIN_AURORA_NATURE" },
        { string_id: "org.droidtv.ui.strings2.R.string.MAIN_AURORA_CITY_STREET" },
        { string_id: "org.droidtv.ui.strings2.R.string.MAIN_AURORA_AERIAL" },
        { string_id: "org.droidtv.ui.strings2.R.string.MAIN_AURORA_ARTS" },
        { string_id: "org.droidtv.ui.strings2.R.string.MAIN_AURORA_HYBRID_ECLYPSES" },
        { string_id: "org.droidtv.ui.strings2.R.string.MAIN_AURORA_RB_LAND_SPORTS" },
        { string_id: "org.droidtv.ui.strings2.R.string.MAIN_AURORA_RB_SEA_SPORTS" },
        { string_id: "org.droidtv.ui.strings2.R.string.MAIN_AURORA_RB_SKY_SPORTS" },
        { string_id: "org.droidtv.ui.strings2.R.string.MAIN_AURORA_RB_SNOW_SPORTS" },
        { string_id: "org.droidtv.ui.strings2.R.string.MAIN_AURORA_EX_MARINE" },
        { string_id: "org.droidtv.ui.strings2.R.string.MAIN_AURORA_EX_MOUNTAIN" },
        { string_id: "org.droidtv.ui.strings2.R.string.MAIN_AURORA_EX_OCEAN" },
        { string_id: "org.droidtv.ui.strings2.R.string.MAIN_AURORA_EX_SCENIC" },
        { string_id: "org.droidtv.ui.strings2.R.string.MAIN_AURORA_EX_SNOW" },
    ],
};
exports.ambilight = {
    STANDARD: { styleName: "FOLLOW_VIDEO", isExpert: false, menuSetting: "STANDARD" },
    NATURAL: { styleName: "FOLLOW_VIDEO", isExpert: false, menuSetting: "NATURAL" },
    IMMERSIVE: { styleName: "FOLLOW_VIDEO", isExpert: false, menuSetting: "IMMERSIVE" },
    VIVID: { styleName: "FOLLOW_VIDEO", isExpert: false, menuSetting: "VIVID" },
    GAME: { styleName: "FOLLOW_VIDEO", isExpert: false, menuSetting: "GAME" },
    COMFORT: { styleName: "FOLLOW_VIDEO", isExpert: false, menuSetting: "COMFORT" },
    RELAX: { styleName: "FOLLOW_VIDEO", isExpert: false, menuSetting: "RELAX" },
    ENERGY_ADAPTIVE_BRIGHTNESS: {
        styleName: "FOLLOW_AUDIO",
        isExpert: false,
        menuSetting: "ENERGY_ADAPTIVE_BRIGHTNESS",
    },
    ENERGY_ADAPTIVE_COLORS: { styleName: "FOLLOW_AUDIO", isExpert: false, menuSetting: "ENERGY_ADAPTIVE_COLORS" },
    VU_METER: { styleName: "FOLLOW_AUDIO", isExpert: false, menuSetting: "VU_METER" },
    SPECTRUM_ANALYSER: { styleName: "FOLLOW_AUDIO", isExpert: false, menuSetting: "SPECTRUM_ANALYSER" },
    KNIGHT_RIDER_CLOCKWISE: { styleName: "FOLLOW_AUDIO", isExpert: false, menuSetting: "KNIGHT_RIDER_CLOCKWISE" },
    KNIGHT_RIDER_ALTERNATING: { styleName: "FOLLOW_AUDIO", isExpert: false, menuSetting: "KNIGHT_RIDER_ALTERNATING" },
    RANDOM_PIXEL_FLASH: { styleName: "FOLLOW_AUDIO", isExpert: false, menuSetting: "RANDOM_PIXEL_FLASH" },
    MODE_RANDOM: { styleName: "FOLLOW_AUDIO", isExpert: false, menuSetting: "MODE_RANDOM" },
};
exports.pairingText = {
    no_found_device: {
        en: "No devices found to pair!",
        de: "Keine Geräte zum koppeln gefunden!",
        ru: "Нет устройств, найденных в паре!",
        pt: "Nenhum dispositivo encontrado para emparelhar!",
        nl: "Geen apparaten gevonden om te paren!",
        fr: "Aucun dispositif n'a été trouvé à paire!",
        it: "Nessun dispositivo trovato per abbinare!",
        es: "¡No hay dispositivos encontrados para emparejar!",
        pl: "Nie znaleziono żadnych urządzeń do pary!",
        uk: "Не знайдено пристроїв для пари!",
        "zh-cn": "找不到什么装置!",
    },
    found_device: {
        en: "At least 1 device can be paired! Please select a device to pair.",
        de: "Mindestens 1 Gerät kann gekoppelt werden! Bitte wählen Sie ein Gerät zum koppeln aus.",
        ru: "По крайней мере 1 прибор можно спарить! Пожалуйста, выберите устройство для пары.",
        pt: "Pelo menos um dispositivo pode ser emparelhado! Por favor, selecione um dispositivo para emparelhar.",
        nl: "Ten minste één apparaat kan worden gepaard! Kies alsjeblieft een apparaat uit.",
        fr: "Au moins 1 appareil peut être apparié! Veuillez sélectionner un appareil à pairer.",
        it: "Almeno 1 dispositivo può essere abbinato! Si prega di selezionare un dispositivo da abbinare.",
        es: "¡Al menos 1 dispositivo puede ser emparejado! Por favor, seleccione un dispositivo a par.",
        pl: "Przynajmniej jeden urządzenie może być podzielone. Wybiera urządzenie do pary.",
        uk: "Принаймні 1 пристрій можна парувати! Виберіть пристрій для пари.",
        "zh-cn": "至少可以安装1台装置。 请选择一个装置来对手。.",
    },
    button_pair: {
        en: "Please press the button to pair.",
        de: "Bitte drücken Sie die den Button zum koppeln.",
        ru: "Пожалуйста, нажмите кнопку для пары.",
        pt: "Por favor, pressione o botão para emparelhar.",
        nl: "Druk op de knop.",
        fr: "S'il vous plaît appuyez sur le bouton pour coupler.",
        it: "Si prega di premere il pulsante per la coppia.",
        es: "Por favor, presione el botón para emparejar.",
        pl: "Proponuje przycisk do pary.",
        uk: "Будь ласка, натисніть кнопку в парі.",
        "zh-cn": "请注意:.",
    },
    button_pin: {
        en: "Please enter the PIN that is displayed on your TV screen.",
        de: "Bitte geben Sie die PIN ein, die auf Ihrem TV-Bildschirm angezeigt wird.",
        ru: "Пожалуйста, введите PIN, который отображается на вашем экране ТВ.",
        pt: "Digite o PIN que é exibido na tela de TV.",
        nl: "Betrek alsjeblieft de PIN die wordt tentoongesteld op je TV-scherm.",
        fr: "Veuillez entrer le NIP qui est affiché sur votre écran TV.",
        it: "Si prega di inserire il PIN che viene visualizzato sulla schermata TV.",
        es: "Por favor, introduzca el PIN que se muestra en su pantalla de TV.",
        pl: "Wejście do PIN, które jest wyświetlane na ekranie.",
        uk: "Будь ласка, введіть PIN, який відображається на екрані телевізора.",
        "zh-cn": "请进入在你的电视屏幕上展示的PIN。.",
    },
    pair_done: {
        en: "The device <Lucky-ESA> has been paired. Please save the instance settings now.",
        de: "Das Gerät <Lucky-ESA> wurde gepaart. Bitte speichern Sie jetzt die Instanzeinstellungen.",
        ru: "Устройство <Lucky-ESA> было спарено. Пожалуйста, сохраните настройки примера сейчас.",
        pt: "O dispositivo <Lucky-ESA> foi emparelhado. Por favor, salve as configurações de instância agora.",
        nl: "Het apparaat <Lucky-ESA> is gepaard. Bewaar alsjeblieft de instancesetingen.",
        fr: "L'appareil a été associé à <Lucky-ESA>. Veuillez sauvegarder les paramètres de l'instance maintenant.",
        it: "Il dispositivo <Lucky-ESA> è stato abbinato. Si prega di salvare le impostazioni dell'istanza ora.",
        es: "El dispositivo <Lucky-ESA> se ha emparejado. Por favor, guarde la configuración de instancia ahora.",
        pl: "Urządzenie <Lucky-ESA> zostało połączone. Oszczędzamy teraz ustawienia.",
        uk: "Пристрій <Lucky-ESA> було паровано. Збережіть налаштування екземпляра зараз.",
        "zh-cn": "安装了<Lucky-ESA>的装置。 请拯救目前的情况。.",
    },
    pair_active: {
        en: "A pairing is currently active.",
        de: "Eine Kopplung ist derzeit aktiv.",
        ru: "В настоящее время активная пара.",
        pt: "Um emparelhamento está atualmente ativo.",
        nl: "Een koppeling is momenteel actief.",
        fr: "Une paire est actuellement active.",
        it: "Un accoppiamento è attualmente attivo.",
        es: "Actualmente hay una pareja activa.",
        pl: "Obecnie funkcjonuje para.",
        uk: "В даний час діє паріння.",
        "zh-cn": "目前,正在积极开展结转工作。.",
    },
    error_pair: {
        en: "Error: <Lucky-ESA>",
        de: "Fehler: <Lucky-ESA>",
        ru: "Ошибка: <Lucky-ESA>",
        pt: "Erro: <Lucky-ESA>",
        nl: "Error: <Lucky-ESA>",
        fr: "Erreur: <Lucky-ESA>",
        it: "Errore: <Lucky-ESA>",
        es: "Error: <Lucky-ESA>",
        pl: "Error: <Lucky-ESA>",
        uk: "Помилка: <Lucky-ESA>",
        "zh-cn": "Error: <Lucky-ESA>",
    },
    missing_ip_pin: {
        en: "IP or PIN missing!",
        de: "IP oder PIN fehlen!",
        ru: "IP или PIN отсутствует!",
        pt: "Falta IP ou PIN!",
        nl: "IP of PIN vermist!",
        fr: "IP ou PIN manquant !",
        it: "IP o PIN mancante!",
        es: "IP o PIN desaparecidos!",
        pl: "PIN (ang.)!",
        uk: "IP або PIN відсутній!",
        "zh-cn": "IP或PIN失踪!",
    },
    missing_ip: {
        en: "No IP selected!",
        de: "Keine IP ausgewählt!",
        ru: "Не выбран IP!",
        pt: "Nenhum IP selecionado!",
        nl: "Geen IP geselecteerd!",
        fr: "Pas d'IP sélectionné !",
        it: "Nessun IP selezionato!",
        es: "No IP seleccionada!",
        pl: "Nikt nie wybrany!",
        uk: "Не вибрано IP!",
        "zh-cn": "没有选择!",
    },
    no_auth: {
        en: "No authentication found!",
        de: "Keine Authentifizierung gefunden!",
        ru: "Нет аутентификации!",
        pt: "Nenhuma autenticação encontrada!",
        nl: "Geen authenticatie gevonden!",
        fr: "Aucune authentification trouvée !",
        it: "Nessuna autenticazione trovata!",
        es: "¡No se ha encontrado autenticación!",
        pl: "Nie znaleziono autentyczności!",
        uk: "Не знайдено!",
        "zh-cn": "没有发现的核证!",
    },
    no_username: {
        en: "No username found!",
        de: "Kein Benutzername gefunden!",
        ru: "Имя пользователя не найдено!",
        pt: "Nenhum nome de usuário encontrado!",
        nl: "Geen gebruikersnaam gevonden!",
        fr: "Pas de nom d'utilisateur trouvé !",
        it: "Nessun nome utente trovato!",
        es: "¡No se ha encontrado ningún nombre de usuario!",
        pl: "Nie znaleziono nazwy użytkownika!",
        uk: "Не знайдено ім'я користувача!",
        "zh-cn": "未发现任何用户的名字!",
    },
    pw_assigned: {
        en: "Password cannot be assigned to any device!",
        de: "Passwort kann keinem Gerät zugewiesen werden!",
        ru: "Пароль не может быть назначен на любое устройство!",
        pt: "A senha não pode ser atribuída a nenhum dispositivo!",
        nl: "Het wachtwoord kan niet worden toegewezen aan een apparaat!",
        fr: "Le mot de passe ne peut être attribué à aucun appareil !",
        it: "La password non può essere assegnata a nessun dispositivo!",
        es: "No se puede asignar contraseña a ningún dispositivo!",
        pl: "Miecz nie może być przypisany do jakiegokolwiek urządzenia!",
        uk: "Пароль не може бути призначеним для будь-якого пристрою!",
        "zh-cn": "不能将护照交给任何装置!",
    },
    un_assigned: {
        en: "Username cannot be assigned to any device!",
        de: "Benutzername kann keinem Gerät zugewiesen werden!",
        ru: "Имя пользователя не может быть назначено на любое устройство!",
        pt: "O nome de usuário não pode ser atribuído a nenhum dispositivo!",
        nl: "Gebruikersnaam kan niet worden toegewezen aan een apparaat!",
        fr: "L'utilisateur ne peut être affecté à aucun appareil !",
        it: "Il nome utente non può essere assegnato a qualsiasi dispositivo!",
        es: "¡No se puede asignar el nombre de usuario a ningún dispositivo!",
        pl: "Użytkownicy nie mogą być przypisani do żadnego urządzenia!",
        uk: "Ім'я користувача не може бути призначене для будь-якого пристрою!",
        "zh-cn": "不能将用户的名字分配给任何装置!",
    },
    unknwon_pair: {
        en: "Unknown pairing error!",
        de: "Unbekannter Kopplungsfehler!",
        ru: "Неизвестная ошибка парения!",
        pt: "Erro de emparelhamento desconhecido!",
        nl: "Onbekende fout!",
        fr: "Inconnue erreur de jumelage !",
        it: "Errore di accoppiamento sconosciuto!",
        es: "Error de emparejamiento desconocido!",
        pl: "Nieznany błąd!",
        uk: "Невідома помилка парі!",
        "zh-cn": "无人知晓的错误!",
    },
};
exports.getContext = {
    picture: 2130968791,
    sound: 2130968798,
    ambilight: 2130968779,
    eco_settings: 2130968703,
    general_settings: 2130968827,
    region_languages: 2130968738,
    android_settings: 2130968721,
    accessibility: 2130968577,
    child_lock: 2130968823,
    wireless_networks: 2130968832,
    channels: 2130968822,
    update_software: 2130968618,
};
exports.getContext = {
    launch_live_tv: {
        body: {
            mode: "raw",
            raw: {
                intent: {
                    action: "empty",
                    component: { className: "org.droidtv.playtv.PlayTvActivity", packageName: "org.droidtv.playtv" },
                },
            },
            options: {
                raw: {
                    language: "json",
                },
            },
        },
    },
    youtube: {
        body: {
            mode: "raw",
            raw: {
                intent: {
                    action: "empty",
                    component: {
                        packageName: "com.google.android.youtube.tv",
                        className: "com.google.android.apps.youtube.tv.activity.ShellActivity",
                    },
                },
            },
            options: {
                raw: {
                    language: "json",
                },
            },
        },
    },
    prime_video: {
        body: {
            mode: "raw",
            raw: {
                intent: {
                    action: "empty",
                    component: {
                        packageName: "com.amazon.amazonvideo.livingroom",
                        className: "com.amazon.ignition.IgnitionActivity",
                    },
                },
            },
            options: {
                raw: {
                    language: "json",
                },
            },
        },
    },
    nexflix: {
        body: {
            mode: "raw",
            raw: {
                intent: {
                    action: "empty",
                    component: { packageName: "com.netflix.ninja", className: "com.netflix.ninja.MainActivity" },
                },
            },
            options: {
                raw: {
                    language: "json",
                },
            },
        },
    },
};
exports.getTest = {
    node: {
        node_id: 2130968607,
        type: "PARENT_NODE",
        string_id: "org.droidtv.ui.strings.R.string.MAIN_VB_SETUP",
        context: "Setup_Menu",
        data: {
            nodes: [
                {
                    node_id: 2130968791,
                    type: "PARENT_NODE",
                    string_id: "org.droidtv.ui.strings.R.string.MAIN_PICTURE",
                    context: "picture",
                    data: {
                        nodes: [
                            {
                                node_id: 2130968797,
                                context: "picture_style",
                                data: {
                                    enums: [],
                                },
                                type: "LIST_NODE",
                            },
                            {
                                node_id: 2130968794,
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_COLOUR",
                                context: "colour",
                                data: {
                                    slider_data: {
                                        min: 0,
                                        max: 100,
                                        step_size: 1,
                                    },
                                },
                                type: "SLIDER_NODE",
                            },
                            {
                                node_id: 2130968795,
                                context: "contrast",
                                data: {
                                    slider_data: {
                                        min: 0,
                                        max: 100,
                                        step_size: 1,
                                    },
                                },
                                type: "SLIDER_NODE",
                            },
                            {
                                node_id: 2130968796,
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_SHARPNESS",
                                context: "sharpness",
                                data: {
                                    slider_data: {
                                        min: 0,
                                        max: 10,
                                        step_size: 1,
                                    },
                                },
                                type: "SLIDER_NODE",
                            },
                            {
                                node_id: 2130968793,
                                string_id: "org.droidtv.ui.strings2.R.string.MAIN_BLACK_LEVEL",
                                context: "brightness",
                                data: {
                                    slider_data: {
                                        min: 0,
                                        max: 100,
                                        step_size: 1,
                                    },
                                },
                                type: "SLIDER_NODE",
                            },
                            {
                                node_id: 2130968792,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_ADVANCED_PICTURE",
                                context: "advanced_picture",
                                data: {
                                    nodes: [
                                        {
                                            node_id: 2130968631,
                                            type: "PARENT_NODE",
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_PICTURE_CLEAN",
                                            context: "picture_clean_menu",
                                            data: {
                                                nodes: [
                                                    {
                                                        node_id: 2130968749,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_NOISE_REDUCTION",
                                                        context: "noise_reduction",
                                                        data: {
                                                            enums: [
                                                                {
                                                                    enum_id: 0,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                                },
                                                                {
                                                                    enum_id: 1,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_MINIMUM",
                                                                },
                                                                {
                                                                    enum_id: 2,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_MEDIUM",
                                                                },
                                                                {
                                                                    enum_id: 3,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_MAXIMUM",
                                                                },
                                                            ],
                                                        },
                                                        type: "LIST_NODE",
                                                    },
                                                    {
                                                        node_id: 2130968748,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_MPEG_ARTEFACT_REDUCTION",
                                                        context: "mpeg_artefact_reduction",
                                                        data: {
                                                            enums: [
                                                                {
                                                                    enum_id: 0,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                                },
                                                                {
                                                                    enum_id: 1,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_MINIMUM",
                                                                },
                                                                {
                                                                    enum_id: 2,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_MEDIUM",
                                                                },
                                                                {
                                                                    enum_id: 3,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_MAXIMUM",
                                                                },
                                                            ],
                                                        },
                                                        type: "LIST_NODE",
                                                    },
                                                ],
                                            },
                                        },
                                        {
                                            node_id: 2130968632,
                                            type: "PARENT_NODE",
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_SHARPNESS",
                                            context: "sharpness_menu",
                                            data: {
                                                nodes: [
                                                    {
                                                        node_id: 2130968815,
                                                        context: "super_resolution",
                                                        data: {
                                                            enums: [
                                                                {
                                                                    enum_id: 0,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                                },
                                                                {
                                                                    enum_id: 1,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_ON",
                                                                },
                                                            ],
                                                        },
                                                        type: "LIST_NODE",
                                                    },
                                                ],
                                            },
                                        },
                                        {
                                            node_id: 2130968757,
                                            type: "PARENT_NODE",
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_COLOUR",
                                            context: "colour_menu",
                                            data: {
                                                nodes: [
                                                    {
                                                        node_id: 2130968680,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_TINT_HUE",
                                                        context: "tint",
                                                        data: {
                                                            slider_data: {
                                                                min: -50,
                                                                max: 50,
                                                                step_size: 1,
                                                            },
                                                        },
                                                        type: "SLIDER_NODE",
                                                    },
                                                    {
                                                        node_id: 2130968689,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_COLOUR_ENHANCEMENT",
                                                        context: "colour_enhancement",
                                                        data: {
                                                            enums: [
                                                                {
                                                                    enum_id: 0,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                                },
                                                                {
                                                                    enum_id: 1,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_MINIMUM",
                                                                },
                                                                {
                                                                    enum_id: 2,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_MEDIUM",
                                                                },
                                                                {
                                                                    enum_id: 3,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_MAXIMUM",
                                                                },
                                                            ],
                                                        },
                                                        type: "LIST_NODE",
                                                    },
                                                    {
                                                        node_id: 2130968690,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_COLOUR_GAMUT",
                                                        context: "colour_gamut",
                                                        data: {
                                                            enums: [
                                                                {
                                                                    enum_id: 0,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_NORMAL",
                                                                },
                                                                {
                                                                    enum_id: 1,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_WIDE",
                                                                },
                                                            ],
                                                        },
                                                        type: "LIST_NODE",
                                                    },
                                                    {
                                                        node_id: 2130968691,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_COLOUR_TEMPERATURE",
                                                        context: "colour_temperature",
                                                        data: {
                                                            enums: [
                                                                {
                                                                    enum_id: 2,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_NORMAL",
                                                                },
                                                                {
                                                                    enum_id: 3,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_WARM",
                                                                },
                                                                {
                                                                    enum_id: 1,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_COOL",
                                                                },
                                                                {
                                                                    enum_id: 4,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_CUSTOM",
                                                                },
                                                            ],
                                                        },
                                                        type: "LIST_NODE",
                                                    },
                                                    {
                                                        node_id: 2130968844,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_WHITEPOINT_ALIGNMENT",
                                                        context: "whitepoint_alignment_item",
                                                        data: {
                                                            sliders: [
                                                                {
                                                                    slider_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_MS_RED_WP",
                                                                    slider_data: {
                                                                        min: 0,
                                                                        max: 127,
                                                                        step_size: 1,
                                                                    },
                                                                },
                                                                {
                                                                    slider_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_MS_GREEN_WP",
                                                                    slider_data: {
                                                                        min: 0,
                                                                        max: 127,
                                                                        step_size: 1,
                                                                    },
                                                                },
                                                                {
                                                                    slider_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_MS_BLUE_WP",
                                                                    slider_data: {
                                                                        min: 0,
                                                                        max: 127,
                                                                        step_size: 1,
                                                                    },
                                                                },
                                                                {
                                                                    slider_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_MS_RED_BL",
                                                                    slider_data: {
                                                                        min: -7,
                                                                        max: 8,
                                                                        step_size: 1,
                                                                    },
                                                                },
                                                                {
                                                                    slider_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_MS_GREEN_BL",
                                                                    slider_data: {
                                                                        min: -7,
                                                                        max: 8,
                                                                        step_size: 1,
                                                                    },
                                                                },
                                                                {
                                                                    slider_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_MS_BLUE_BL",
                                                                    slider_data: {
                                                                        min: -7,
                                                                        max: 8,
                                                                        step_size: 1,
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                        type: "MULTIPLE_SLIDER",
                                                    },
                                                    {
                                                        node_id: 2130968845,
                                                        type: "PARENT_NODE",
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_WHITEPOINT_ALIGNMENT",
                                                        context: "whitepoint_alignment_menu",
                                                        data: {
                                                            nodes: [
                                                                {
                                                                    node_id: 2130968834,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_WHITEPOINT_ALIGNMENT_2POINT",
                                                                    context: "whitepoint_alignment",
                                                                    data: {
                                                                        sliders: [
                                                                            {
                                                                                slider_id:
                                                                                    "org.droidtv.ui.strings.R.string.MAIN_MS_RED_WP",
                                                                                slider_data: {
                                                                                    min: 0,
                                                                                    max: 127,
                                                                                    step_size: 1,
                                                                                },
                                                                            },
                                                                            {
                                                                                slider_id:
                                                                                    "org.droidtv.ui.strings.R.string.MAIN_MS_GREEN_WP",
                                                                                slider_data: {
                                                                                    min: 0,
                                                                                    max: 127,
                                                                                    step_size: 1,
                                                                                },
                                                                            },
                                                                            {
                                                                                slider_id:
                                                                                    "org.droidtv.ui.strings.R.string.MAIN_MS_BLUE_WP",
                                                                                slider_data: {
                                                                                    min: 0,
                                                                                    max: 127,
                                                                                    step_size: 1,
                                                                                },
                                                                            },
                                                                            {
                                                                                slider_id:
                                                                                    "org.droidtv.ui.strings.R.string.MAIN_MS_RED_BL",
                                                                                slider_data: {
                                                                                    min: -7,
                                                                                    max: 8,
                                                                                    step_size: 1,
                                                                                },
                                                                            },
                                                                            {
                                                                                slider_id:
                                                                                    "org.droidtv.ui.strings.R.string.MAIN_MS_GREEN_BL",
                                                                                slider_data: {
                                                                                    min: -7,
                                                                                    max: 8,
                                                                                    step_size: 1,
                                                                                },
                                                                            },
                                                                            {
                                                                                slider_id:
                                                                                    "org.droidtv.ui.strings.R.string.MAIN_MS_BLUE_BL",
                                                                                slider_data: {
                                                                                    min: -7,
                                                                                    max: 8,
                                                                                    step_size: 1,
                                                                                },
                                                                            },
                                                                        ],
                                                                    },
                                                                    type: "MULTIPLE_SLIDER",
                                                                },
                                                                {
                                                                    node_id: 2130968833,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_WHITEPOINT_ALIGNMENT_20POINT",
                                                                    context: "whitepoint_alignment",
                                                                    data: {
                                                                        sliders: [
                                                                            {
                                                                                slider_id:
                                                                                    "org.droidtv.ui.strings.R.string.MAIN_LEVEL",
                                                                                slider_data: {
                                                                                    min: 1,
                                                                                    max: 20,
                                                                                    step_size: 1,
                                                                                },
                                                                            },
                                                                            {
                                                                                slider_id:
                                                                                    "org.droidtv.ui.strings.R.string.MAIN_MS_RED_OFFSET",
                                                                                slider_data: {
                                                                                    min: -15,
                                                                                    max: 15,
                                                                                    step_size: 1,
                                                                                },
                                                                            },
                                                                            {
                                                                                slider_id:
                                                                                    "org.droidtv.ui.strings.R.string.MAIN_MS_GREEN_OFFSET",
                                                                                slider_data: {
                                                                                    min: -15,
                                                                                    max: 15,
                                                                                    step_size: 1,
                                                                                },
                                                                            },
                                                                            {
                                                                                slider_id:
                                                                                    "org.droidtv.ui.strings.R.string.MAIN_MS_BLUE_OFFSET",
                                                                                slider_data: {
                                                                                    min: -15,
                                                                                    max: 15,
                                                                                    step_size: 1,
                                                                                },
                                                                            },
                                                                        ],
                                                                    },
                                                                    type: "MULTIPLE_SLIDER",
                                                                },
                                                            ],
                                                        },
                                                    },
                                                    {
                                                        node_id: 2130968681,
                                                        type: "PARENT_NODE",
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_COLOUR_CONTROL",
                                                        context: "colour_control",
                                                        data: {
                                                            nodes: [
                                                                {
                                                                    node_id: 2130968686,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_MS_RED",
                                                                    context: "colour_control",
                                                                    data: {
                                                                        sliders: [
                                                                            {
                                                                                slider_id:
                                                                                    "org.droidtv.ui.strings.R.string.MAIN_HUE",
                                                                                slider_data: {
                                                                                    min: -15,
                                                                                    max: 15,
                                                                                    step_size: 1,
                                                                                },
                                                                            },
                                                                            {
                                                                                slider_id:
                                                                                    "org.droidtv.ui.strings.R.string.MAIN_SATURATION",
                                                                                slider_data: {
                                                                                    min: -15,
                                                                                    max: 15,
                                                                                    step_size: 1,
                                                                                },
                                                                            },
                                                                            {
                                                                                slider_id:
                                                                                    "org.droidtv.ui.strings.R.string.MAIN_INTENSITY",
                                                                                slider_data: {
                                                                                    min: -15,
                                                                                    max: 15,
                                                                                    step_size: 1,
                                                                                },
                                                                            },
                                                                        ],
                                                                    },
                                                                    type: "MULTIPLE_SLIDER",
                                                                },
                                                                {
                                                                    node_id: 2130968688,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_MS_YELLOW",
                                                                    context: "colour_control",
                                                                    data: {
                                                                        sliders: [
                                                                            {
                                                                                slider_id:
                                                                                    "org.droidtv.ui.strings.R.string.MAIN_HUE",
                                                                                slider_data: {
                                                                                    min: -15,
                                                                                    max: 15,
                                                                                    step_size: 1,
                                                                                },
                                                                            },
                                                                            {
                                                                                slider_id:
                                                                                    "org.droidtv.ui.strings.R.string.MAIN_SATURATION",
                                                                                slider_data: {
                                                                                    min: -15,
                                                                                    max: 15,
                                                                                    step_size: 1,
                                                                                },
                                                                            },
                                                                            {
                                                                                slider_id:
                                                                                    "org.droidtv.ui.strings.R.string.MAIN_INTENSITY",
                                                                                slider_data: {
                                                                                    min: -15,
                                                                                    max: 15,
                                                                                    step_size: 1,
                                                                                },
                                                                            },
                                                                        ],
                                                                    },
                                                                    type: "MULTIPLE_SLIDER",
                                                                },
                                                                {
                                                                    node_id: 2130968684,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_MS_GREEN",
                                                                    context: "colour_control",
                                                                    data: {
                                                                        sliders: [
                                                                            {
                                                                                slider_id:
                                                                                    "org.droidtv.ui.strings.R.string.MAIN_HUE",
                                                                                slider_data: {
                                                                                    min: -15,
                                                                                    max: 15,
                                                                                    step_size: 1,
                                                                                },
                                                                            },
                                                                            {
                                                                                slider_id:
                                                                                    "org.droidtv.ui.strings.R.string.MAIN_SATURATION",
                                                                                slider_data: {
                                                                                    min: -15,
                                                                                    max: 15,
                                                                                    step_size: 1,
                                                                                },
                                                                            },
                                                                            {
                                                                                slider_id:
                                                                                    "org.droidtv.ui.strings.R.string.MAIN_INTENSITY",
                                                                                slider_data: {
                                                                                    min: -15,
                                                                                    max: 15,
                                                                                    step_size: 1,
                                                                                },
                                                                            },
                                                                        ],
                                                                    },
                                                                    type: "MULTIPLE_SLIDER",
                                                                },
                                                                {
                                                                    node_id: 2130968683,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_MS_CYAN",
                                                                    context: "colour_control",
                                                                    data: {
                                                                        sliders: [
                                                                            {
                                                                                slider_id:
                                                                                    "org.droidtv.ui.strings.R.string.MAIN_HUE",
                                                                                slider_data: {
                                                                                    min: -15,
                                                                                    max: 15,
                                                                                    step_size: 1,
                                                                                },
                                                                            },
                                                                            {
                                                                                slider_id:
                                                                                    "org.droidtv.ui.strings.R.string.MAIN_SATURATION",
                                                                                slider_data: {
                                                                                    min: -15,
                                                                                    max: 15,
                                                                                    step_size: 1,
                                                                                },
                                                                            },
                                                                            {
                                                                                slider_id:
                                                                                    "org.droidtv.ui.strings.R.string.MAIN_INTENSITY",
                                                                                slider_data: {
                                                                                    min: -15,
                                                                                    max: 15,
                                                                                    step_size: 1,
                                                                                },
                                                                            },
                                                                        ],
                                                                    },
                                                                    type: "MULTIPLE_SLIDER",
                                                                },
                                                                {
                                                                    node_id: 2130968682,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_MS_BLUE",
                                                                    context: "colour_control",
                                                                    data: {
                                                                        sliders: [
                                                                            {
                                                                                slider_id:
                                                                                    "org.droidtv.ui.strings.R.string.MAIN_HUE",
                                                                                slider_data: {
                                                                                    min: -15,
                                                                                    max: 15,
                                                                                    step_size: 1,
                                                                                },
                                                                            },
                                                                            {
                                                                                slider_id:
                                                                                    "org.droidtv.ui.strings.R.string.MAIN_SATURATION",
                                                                                slider_data: {
                                                                                    min: -15,
                                                                                    max: 15,
                                                                                    step_size: 1,
                                                                                },
                                                                            },
                                                                            {
                                                                                slider_id:
                                                                                    "org.droidtv.ui.strings.R.string.MAIN_INTENSITY",
                                                                                slider_data: {
                                                                                    min: -15,
                                                                                    max: 15,
                                                                                    step_size: 1,
                                                                                },
                                                                            },
                                                                        ],
                                                                    },
                                                                    type: "MULTIPLE_SLIDER",
                                                                },
                                                                {
                                                                    node_id: 2130968685,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_MS_MAGENTA",
                                                                    context: "colour_control",
                                                                    data: {
                                                                        sliders: [
                                                                            {
                                                                                slider_id:
                                                                                    "org.droidtv.ui.strings.R.string.MAIN_HUE",
                                                                                slider_data: {
                                                                                    min: -15,
                                                                                    max: 15,
                                                                                    step_size: 1,
                                                                                },
                                                                            },
                                                                            {
                                                                                slider_id:
                                                                                    "org.droidtv.ui.strings.R.string.MAIN_SATURATION",
                                                                                slider_data: {
                                                                                    min: -15,
                                                                                    max: 15,
                                                                                    step_size: 1,
                                                                                },
                                                                            },
                                                                            {
                                                                                slider_id:
                                                                                    "org.droidtv.ui.strings.R.string.MAIN_INTENSITY",
                                                                                slider_data: {
                                                                                    min: -15,
                                                                                    max: 15,
                                                                                    step_size: 1,
                                                                                },
                                                                            },
                                                                        ],
                                                                    },
                                                                    type: "MULTIPLE_SLIDER",
                                                                },
                                                                {
                                                                    node_id: 2130968687,
                                                                    type: "PARENT_NODE",
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_RESET_ALL",
                                                                    context: "reset_all",
                                                                    data: {},
                                                                },
                                                            ],
                                                        },
                                                    },
                                                    {
                                                        node_id: 2130968769,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_RGB_ONLY_MODE",
                                                        context: "rgb_only_mode",
                                                        data: {
                                                            enums: [
                                                                {
                                                                    enum_id: 0,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                                },
                                                                {
                                                                    enum_id: 1,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_RED",
                                                                },
                                                                {
                                                                    enum_id: 2,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_GREEN",
                                                                },
                                                                {
                                                                    enum_id: 3,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_BLUE",
                                                                },
                                                            ],
                                                        },
                                                        type: "LIST_NODE",
                                                    },
                                                ],
                                            },
                                        },
                                        {
                                            node_id: 2130968758,
                                            type: "PARENT_NODE",
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_CONTRAST_MENU",
                                            context: "contrast_menu",
                                            data: {
                                                nodes: [
                                                    {
                                                        node_id: 2130968626,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_CONTRAST_MODE",
                                                        context: "contrast_modes",
                                                        data: {
                                                            enums: [
                                                                {
                                                                    enum_id: 0,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                                },
                                                                {
                                                                    enum_id: 1,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_NORMAL",
                                                                },
                                                                {
                                                                    enum_id: 2,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_OPTMIZED_FOR_PICTURE",
                                                                },
                                                                {
                                                                    enum_id: 3,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_OPTMIZED_FOR_ENERGY_SAVING",
                                                                },
                                                            ],
                                                        },
                                                        type: "LIST_NODE",
                                                    },
                                                    {
                                                        node_id: 2130968741,
                                                        context: "light_boost",
                                                        data: {
                                                            enums: [
                                                                {
                                                                    enum_id: 0,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                                },
                                                                {
                                                                    enum_id: 1,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_MINIMUM",
                                                                },
                                                                {
                                                                    enum_id: 2,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_MEDIUM",
                                                                },
                                                                {
                                                                    enum_id: 3,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_MAXIMUM",
                                                                },
                                                            ],
                                                        },
                                                        type: "LIST_NODE",
                                                    },
                                                    {
                                                        node_id: 2130968628,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_HDR_UPSCALING",
                                                        context: "hdr_upscaling",
                                                        data: {
                                                            enums: [
                                                                {
                                                                    enum_id: 0,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                                },
                                                                {
                                                                    enum_id: 1,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_ON",
                                                                },
                                                            ],
                                                        },
                                                        type: "LIST_NODE",
                                                    },
                                                    {
                                                        node_id: 2130968630,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_PNR",
                                                        context: "perfect_natural_reality",
                                                        data: {
                                                            enums: [
                                                                {
                                                                    enum_id: 0,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                                },
                                                                {
                                                                    enum_id: 1,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_MINIMUM",
                                                                },
                                                                {
                                                                    enum_id: 2,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_MEDIUM",
                                                                },
                                                                {
                                                                    enum_id: 3,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_MAXIMUM",
                                                                },
                                                            ],
                                                        },
                                                        type: "LIST_NODE",
                                                    },
                                                    {
                                                        node_id: 2130968627,
                                                        context: "hd_ultra_hdr",
                                                        data: {
                                                            enums: [],
                                                        },
                                                        type: "LIST_NODE",
                                                    },
                                                    {
                                                        node_id: 2130968734,
                                                        string_id:
                                                            "org.droidtv.ui.strings2.R.string.MAIN_HDR_TONE_MAPPING",
                                                        context: "hdr_tone_mapping",
                                                        data: {
                                                            enums: [
                                                                {
                                                                    enum_id: 0,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings2.R.string.MAIN_HDR_TONE_MAPPING_OFF_HGIG",
                                                                },
                                                                {
                                                                    enum_id: 1,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings2.R.string.MAIN_HDR_TONE_MAPPING_STANDARD",
                                                                },
                                                                {
                                                                    enum_id: 5,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings2.R.string.MAIN_HDR_TONE_MAPPING_ADVANCED",
                                                                },
                                                            ],
                                                        },
                                                        type: "LIST_NODE",
                                                    },
                                                    {
                                                        node_id: 2130968733,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_HDR_PREFECT",
                                                        context: "hdr_perfect",
                                                        data: {
                                                            enums: [
                                                                {
                                                                    enum_id: 1,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_MINIMUM",
                                                                },
                                                                {
                                                                    enum_id: 2,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_MEDIUM",
                                                                },
                                                                {
                                                                    enum_id: 3,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_MAXIMUM",
                                                                },
                                                            ],
                                                        },
                                                        type: "LIST_NODE",
                                                    },
                                                    {
                                                        node_id: 2130968623,
                                                        context: "perfect_contrast",
                                                        data: {
                                                            enums: [
                                                                {
                                                                    enum_id: 0,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                                },
                                                                {
                                                                    enum_id: 1,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_MINIMUM",
                                                                },
                                                                {
                                                                    enum_id: 2,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_MEDIUM",
                                                                },
                                                                {
                                                                    enum_id: 3,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_MAXIMUM",
                                                                },
                                                            ],
                                                        },
                                                        type: "LIST_NODE",
                                                    },
                                                    {
                                                        node_id: 2130968839,
                                                        context: "video_contrast",
                                                        data: {
                                                            slider_data: {
                                                                min: 0,
                                                                max: 100,
                                                                step_size: 1,
                                                            },
                                                        },
                                                        type: "SLIDER_NODE",
                                                    },
                                                    {
                                                        node_id: 2130968625,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_LIGHT_SENSOR",
                                                        context: "light_sensor",
                                                        data: {
                                                            enums: [
                                                                {
                                                                    enum_id: 0,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                                },
                                                                {
                                                                    enum_id: 1,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_ON",
                                                                },
                                                            ],
                                                        },
                                                        type: "LIST_NODE",
                                                    },
                                                    {
                                                        node_id: 2130968624,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_GAMMA",
                                                        context: "gamma",
                                                        data: {
                                                            slider_data: {
                                                                min: -4,
                                                                max: 4,
                                                                step_size: 1,
                                                            },
                                                        },
                                                        type: "SLIDER_NODE",
                                                    },
                                                    {
                                                        node_id: 2130968842,
                                                        string_id:
                                                            "org.droidtv.ui.strings2.R.string.MAIN_VRR_SHADOW_ENCHANCER",
                                                        context: "vrr_shadow_enhancer",
                                                        data: {
                                                            enums: [
                                                                {
                                                                    enum_id: 0,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                                },
                                                                {
                                                                    enum_id: 1,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_ON",
                                                                },
                                                            ],
                                                        },
                                                        type: "LIST_NODE",
                                                    },
                                                ],
                                            },
                                        },
                                        {
                                            node_id: 2130968629,
                                            type: "PARENT_NODE",
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_MOTION_MENU",
                                            context: "motion_menu",
                                            data: {
                                                nodes: [
                                                    {
                                                        node_id: 2130968747,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_MOTION_STYLE",
                                                        context: "motion_style",
                                                        data: {
                                                            enums: [
                                                                {
                                                                    enum_id: 0,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                                },
                                                                {
                                                                    enum_id: 1,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_PURE_CINEMA",
                                                                },
                                                                {
                                                                    enum_id: 2,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_MOVIE",
                                                                },
                                                                {
                                                                    enum_id: 3,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_STANDARD",
                                                                },
                                                                {
                                                                    enum_id: 4,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_SMOOTH",
                                                                },
                                                                {
                                                                    enum_id: 5,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_PERSONAL",
                                                                },
                                                            ],
                                                        },
                                                        type: "LIST_NODE",
                                                    },
                                                    {
                                                        node_id: 2130968727,
                                                        context: "hd_natural_motion",
                                                        data: {
                                                            slider_data: {
                                                                min: 0,
                                                                max: 10,
                                                                step_size: 1,
                                                            },
                                                        },
                                                        type: "SLIDER_NODE",
                                                    },
                                                    {
                                                        node_id: 2130968755,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MISC_PERFECT_CLEAN_MOTION",
                                                        context: "clear_lcd",
                                                        data: {
                                                            slider_data: {
                                                                min: 0,
                                                                max: 10,
                                                                step_size: 1,
                                                            },
                                                        },
                                                        type: "SLIDER_NODE",
                                                    },
                                                    {
                                                        node_id: 2130968708,
                                                        string_id:
                                                            "org.droidtv.ui.strings2.R.string.MISC_FAST_MOTION_CLARITY",
                                                        context: "fast_motion_clarity",
                                                        data: {
                                                            enums: [
                                                                {
                                                                    enum_id: 0,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                                },
                                                                {
                                                                    enum_id: 1,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_MINIMUM",
                                                                },
                                                                {
                                                                    enum_id: 2,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_MEDIUM",
                                                                },
                                                                {
                                                                    enum_id: 3,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_MAXIMUM",
                                                                },
                                                            ],
                                                        },
                                                        type: "LIST_NODE",
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                            },
                            {
                                node_id: 2130968634,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings2.R.string.MAIN_AMBIENT_INTELLIGENCE",
                                context: "ambient_intelligence",
                                data: {
                                    nodes: [
                                        {
                                            node_id: 2130968707,
                                            string_id: "org.droidtv.ui.strings2.R.string.MAIN_EYE_CARE",
                                            context: "eye_care",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_ON",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968695,
                                            string_id: "org.droidtv.ui.strings2.R.string.MAIN_DARK_DETAIL_OPTIMIZATION",
                                            context: "dark_detail_optimization",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_ON",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968692,
                                            string_id:
                                                "org.droidtv.ui.strings2.R.string.MAIN_COLOUR_TEMPERATURE_OPTIMIZATION",
                                            context: "colour_temperature_optimization",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_ON",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                    ],
                                },
                            },
                            {
                                node_id: 2130968759,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_PICTURE_FORMAT",
                                context: "picture_format",
                                data: {},
                            },
                            {
                                node_id: 2130968700,
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_DOLBY_VISION_NOTIFICATION",
                                context: "dolby_vision_notification",
                                data: {
                                    enums: [
                                        {
                                            enum_id: 0,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                        },
                                        {
                                            enum_id: 1,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_ON",
                                        },
                                    ],
                                },
                                type: "LIST_NODE",
                            },
                            {
                                node_id: 2130968765,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_QUICK_PICTURE_SETTINGS",
                                context: "quick_picture_settings",
                                data: {},
                            },
                        ],
                    },
                },
                {
                    node_id: 2130968798,
                    type: "PARENT_NODE",
                    string_id: "org.droidtv.ui.strings.R.string.MAIN_SOUND",
                    context: "sound",
                    data: {
                        nodes: [
                            {
                                node_id: 2130968799,
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_SOUND_STYLE",
                                context: "sound_style",
                                data: {
                                    enums: [],
                                },
                                type: "LIST_NODE",
                            },
                            {
                                node_id: 2130968800,
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_SOUND_STYLE",
                                context: "sound_style",
                                data: {
                                    enums: [],
                                },
                                type: "LIST_NODE",
                            },
                            {
                                node_id: 2130968802,
                                type: "PARENT_NODE",
                                context: "sound_expert_mode",
                                data: {
                                    nodes: [
                                        {
                                            node_id: 2130968698,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_SPEAKER_VIRTUALIZER",
                                            context: "personal_dolby_atmos",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_ON",
                                                    },
                                                    {
                                                        enum_id: 2,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_DOLBY_ATMOS_AUTO",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968705,
                                            string_id: "org.droidtv.ui.strings.R.string.MISC_CLEAR_DIALOGUE",
                                            context: "clear_dialogue",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_ON",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968633,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_AI_EQUALIZER",
                                            context: "expert_equalizer",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_ON",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968706,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_CUSTOM_AI_EQUALIZER",
                                            context: "expert_equalizer",
                                            data: {
                                                sliders: [
                                                    {
                                                        slider_id: "org.droidtv.ui.strings.R.string.MISC_100_HZ",
                                                        slider_data: {
                                                            min: -8,
                                                            max: 8,
                                                            step_size: 1,
                                                        },
                                                    },
                                                    {
                                                        slider_id: "org.droidtv.ui.strings.R.string.MISC_300_HZ",
                                                        slider_data: {
                                                            min: -8,
                                                            max: 8,
                                                            step_size: 1,
                                                        },
                                                    },
                                                    {
                                                        slider_id: "org.droidtv.ui.strings.R.string.MISC_1_KHZ",
                                                        slider_data: {
                                                            min: -8,
                                                            max: 8,
                                                            step_size: 1,
                                                        },
                                                    },
                                                    {
                                                        slider_id: "org.droidtv.ui.strings.R.string.MISC_3_KHZ",
                                                        slider_data: {
                                                            min: -8,
                                                            max: 8,
                                                            step_size: 1,
                                                        },
                                                    },
                                                    {
                                                        slider_id: "org.droidtv.ui.strings.R.string.MISC_10_KHZ",
                                                        slider_data: {
                                                            min: -8,
                                                            max: 8,
                                                            step_size: 1,
                                                        },
                                                    },
                                                ],
                                            },
                                            type: "MULTIPLE_SLIDER",
                                        },
                                    ],
                                },
                            },
                            {
                                node_id: 2130968616,
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_TV_POSITION",
                                context: "tv_placement",
                                data: {
                                    enums: [
                                        {
                                            enum_id: 0,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_WALL_MOUNTED",
                                        },
                                        {
                                            enum_id: 1,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_ON_TV_STAND",
                                        },
                                    ],
                                },
                                type: "LIST_NODE",
                            },
                            {
                                node_id: 2130968591,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_DTS_PLAY_FI",
                                context: "DTS_Play_Fi",
                                data: {},
                            },
                            {
                                node_id: 2130968601,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings2.R.string.MAIN_MIMI_SOUND_PERSONALISATION_SETTINGS",
                                context: "Mimi_sound_personalisation_settings",
                                data: {
                                    nodes: [
                                        {
                                            node_id: 2130968599,
                                            type: "PARENT_NODE",
                                            string_id: "org.droidtv.ui.strings2.R.string.MAIN_MIMI_SOUND_CONFIGURE",
                                            context: "Mimi_sound_personalisation_settings",
                                            data: {},
                                        },
                                        {
                                            node_id: 2130968600,
                                            string_id:
                                                "org.droidtv.ui.strings2.R.string.MAIN_MIMI_SOUND_PERSONALISATION",
                                            context: "Mimi_sound_personalisation_settings",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_ON",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                    ],
                                },
                            },
                            {
                                node_id: 2130968756,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings2.R.string.MISC_EASYLINK_PLUS",
                                context: "easylink_2",
                                data: {
                                    nodes: [
                                        {
                                            node_id: 2130968807,
                                            string_id:
                                                "org.droidtv.ui.strings2.R.string.MAIN_EASYLINK_PLUS_SOUND_STYLE",
                                            context: "easylink_plus_sound_style",
                                            data: {
                                                enums: [],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968808,
                                            string_id: "org.droidtv.ui.strings2.R.string.MAIN_EASYLINK_PLUS_BASS",
                                            context: "easylink_plus_bass",
                                            data: {
                                                slider_data: {
                                                    min: -5,
                                                    max: 5,
                                                    step_size: 1,
                                                },
                                            },
                                            type: "SLIDER_NODE",
                                        },
                                        {
                                            node_id: 2130968810,
                                            string_id: "org.droidtv.ui.strings2.R.string.MAIN_EASYLINK_PLUS_TREBLE",
                                            context: "easylink_plus_treble",
                                            data: {
                                                slider_data: {
                                                    min: -5,
                                                    max: 5,
                                                    step_size: 1,
                                                },
                                            },
                                            type: "SLIDER_NODE",
                                        },
                                        {
                                            node_id: 2130968809,
                                            string_id:
                                                "org.droidtv.ui.strings2.R.string.MAIN_EASYLINK_PLUS_CUSTOM_EQUALISER",
                                            context: "easylink_plus_custom_equaliser",
                                            data: {
                                                sliders: [
                                                    {
                                                        slider_id: "org.droidtv.ui.strings2.R.string.MISC_150_HZ",
                                                        slider_data: {
                                                            min: -5,
                                                            max: 5,
                                                            step_size: 1,
                                                        },
                                                    },
                                                    {
                                                        slider_id: "org.droidtv.ui.strings.R.string.MISC_300_HZ",
                                                        slider_data: {
                                                            min: -5,
                                                            max: 5,
                                                            step_size: 1,
                                                        },
                                                    },
                                                    {
                                                        slider_id: "org.droidtv.ui.strings2.R.string.MISC_600_HZ",
                                                        slider_data: {
                                                            min: -5,
                                                            max: 5,
                                                            step_size: 1,
                                                        },
                                                    },
                                                    {
                                                        slider_id: "org.droidtv.ui.strings2.R.string.MISC_1_2_KHZ",
                                                        slider_data: {
                                                            min: -5,
                                                            max: 5,
                                                            step_size: 1,
                                                        },
                                                    },
                                                    {
                                                        slider_id: "org.droidtv.ui.strings2.R.string.MISC_2_5_KHZ",
                                                        slider_data: {
                                                            min: -5,
                                                            max: 5,
                                                            step_size: 1,
                                                        },
                                                    },
                                                    {
                                                        slider_id: "org.droidtv.ui.strings2.R.string.MISC_5_KHZ",
                                                        slider_data: {
                                                            min: -5,
                                                            max: 5,
                                                            step_size: 1,
                                                        },
                                                    },
                                                    {
                                                        slider_id: "org.droidtv.ui.strings.R.string.MISC_10_KHZ",
                                                        slider_data: {
                                                            min: -5,
                                                            max: 5,
                                                            step_size: 1,
                                                        },
                                                    },
                                                ],
                                            },
                                            type: "MULTIPLE_SLIDER",
                                        },
                                        {
                                            node_id: 2130968811,
                                            string_id:
                                                "org.droidtv.ui.strings2.R.string.MAIN_EASYLINK_PLUS_SURROUND_SOUND",
                                            context: "easylink_plus_surround_sound",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id:
                                                            "org.droidtv.ui.strings2.R.string.MAIN_EASYLINK_PLUS_UPMIX",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id:
                                                            "org.droidtv.ui.strings2.R.string.MAIN_EASYLINK_PLUS_STANDARD",
                                                    },
                                                    {
                                                        enum_id: 2,
                                                        string_id:
                                                            "org.droidtv.ui.strings2.R.string.MAIN_EASYLINK_PLUS_SURROUND_AI",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968803,
                                            string_id: "org.droidtv.ui.strings2.R.string.MAIN_EASYLINK_PLUS_DRC",
                                            context: "easylink_plus_drc",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id: "org.droidtv.ui.strings2.R.string.MAIN_AUTO",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_ON",
                                                    },
                                                    {
                                                        enum_id: 2,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968804,
                                            string_id:
                                                "org.droidtv.ui.strings2.R.string.MAIN_EASYLINK_PLUS_HEIGHT_SPEAKERS",
                                            context: "easylink_plus_height_speakers",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id: "org.droidtv.ui.strings2.R.string.MAIN_AUTO",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_ON",
                                                    },
                                                    {
                                                        enum_id: 2,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968806,
                                            string_id:
                                                "org.droidtv.ui.strings2.R.string.MAIN_EASYLINK_PLUS_SOUND_STAGE",
                                            context: "easylink_plus_sound_stage",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id: "org.droidtv.ui.strings2.R.string.MAIN_AUTO",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_ON",
                                                    },
                                                    {
                                                        enum_id: 2,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968805,
                                            type: "PARENT_NODE",
                                            string_id:
                                                "org.droidtv.ui.strings2.R.string.MAIN_EASYLINK_PLUS_RESET_ALL_DEFAULT",
                                            context: "easylink_plus_reset_all_default",
                                            data: {},
                                        },
                                    ],
                                },
                            },
                            {
                                node_id: 2130968821,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings2.R.string.MAIN_ROOM_CALIBRATION",
                                context: "room_calibration",
                                data: {
                                    nodes: [
                                        {
                                            node_id: 2130968673,
                                            type: "PARENT_NODE",
                                            context: "room_calibration",
                                            data: {},
                                        },
                                        {
                                            node_id: 2130968674,
                                            string_id: "org.droidtv.ui.strings2.R.string.MAIN_APPLY_CALIBRATION",
                                            context: "room_calibration",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_ON",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                    ],
                                },
                            },
                            {
                                node_id: 2130968801,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_ADVANCED_SOUND",
                                context: "advanced_sound",
                                data: {
                                    nodes: [
                                        {
                                            node_id: 2130968665,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_AUTO_VOLUME",
                                            context: "auto_volume_leveling",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_ON",
                                                    },
                                                    {
                                                        enum_id: 2,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_NIGHT_MODE",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968696,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_DELTA_VOLUME",
                                            context: "DeltaVolume",
                                            data: {
                                                slider_data: {
                                                    min: -12,
                                                    max: 12,
                                                    step_size: 1,
                                                },
                                            },
                                            type: "SLIDER_NODE",
                                        },
                                        {
                                            node_id: 2130968830,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_AUDIO_OUT",
                                            context: "tv_speakers",
                                            data: {
                                                enums: [],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968701,
                                            string_id: "org.droidtv.ui.strings2.R.string.MISC_EARC",
                                            context: "earc",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_AUTOMATIC",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968660,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_DIGITAL_OUTPUT_FORMAT",
                                            context: "digital_output_format",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_MULTICHANNEL",
                                                    },
                                                    {
                                                        enum_id: 3,
                                                        string_id: "org.droidtv.ui.strings.R.string.SPDIF_OUTPUT_3",
                                                    },
                                                    {
                                                        enum_id: 2,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_PCM",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968661,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_DIGITAL_OUTPUT_LEVEL",
                                            context: "digital_output_level",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 2,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_SPDIF_MORE",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_SPDIF_MEDIUM",
                                                    },
                                                    {
                                                        enum_id: 0,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_SPDIF_LESS",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968659,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_AUDIO_OUT_DELAY",
                                            context: "audio_out_delay",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_NO_LATENCY",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_IN_LIPSYNC",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968662,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_AUDIO_OUT_OFFSET",
                                            context: "audio_out_offset",
                                            data: {
                                                slider_data: {
                                                    min: 0,
                                                    max: 60,
                                                    step_size: 5,
                                                },
                                            },
                                            type: "SLIDER_NODE",
                                        },
                                        {
                                            node_id: 2130968814,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_SUBWOOFER_OUT",
                                            context: "subwoofer_out",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_ON",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968676,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_CENTRE_SPEAKER_VOLUME",
                                            context: "centre_speaker_volume",
                                            data: {
                                                slider_data: {
                                                    min: -3,
                                                    max: 3,
                                                    step_size: 1,
                                                },
                                            },
                                            type: "SLIDER_NODE",
                                        },
                                        {
                                            node_id: 2130968736,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_HEIGHT_SPEAKER_VOLUME",
                                            context: "height_speaker_volume",
                                            data: {
                                                slider_data: {
                                                    min: -3,
                                                    max: 3,
                                                    step_size: 1,
                                                },
                                            },
                                            type: "SLIDER_NODE",
                                        },
                                        {
                                            node_id: 2130968740,
                                            string_id:
                                                "org.droidtv.ui.strings2.R.string.MAIN_LEFT_SURROUND_SPEAKER_VOLUME",
                                            context: "left_surround_speaker_volume",
                                            data: {
                                                slider_data: {
                                                    min: -3,
                                                    max: 3,
                                                    step_size: 1,
                                                },
                                            },
                                            type: "SLIDER_NODE",
                                        },
                                        {
                                            node_id: 2130968770,
                                            string_id:
                                                "org.droidtv.ui.strings2.R.string.MAIN_RIGHT_SURROUND_SPEAKER_VOLUME",
                                            context: "right_surround_speaker_volume",
                                            data: {
                                                slider_data: {
                                                    min: -3,
                                                    max: 3,
                                                    step_size: 1,
                                                },
                                            },
                                            type: "SLIDER_NODE",
                                        },
                                    ],
                                },
                            },
                            {
                                node_id: 2130968699,
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_DOLBY_ATMOS_NOTIFICATION",
                                context: "dolby_atmos_notification",
                                data: {
                                    enums: [
                                        {
                                            enum_id: 0,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                        },
                                        {
                                            enum_id: 1,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_ON",
                                        },
                                    ],
                                },
                                type: "LIST_NODE",
                            },
                        ],
                    },
                },
                {
                    node_id: 2130968779,
                    type: "PARENT_NODE",
                    string_id: "org.droidtv.ui.strings.R.string.MISC_AMBILIGHT",
                    context: "ambilight",
                    data: {
                        nodes: [
                            {
                                node_id: 2130968783,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_AMBILIGHT_STYLE",
                                context: "ambilight_style",
                                data: {
                                    nodes: [
                                        {
                                            node_id: 2130968789,
                                            type: "PARENT_NODE",
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_AMBILIGHT_STYLE_OFF",
                                            context: "ambilight_off",
                                            data: {},
                                        },
                                        {
                                            node_id: 2130968788,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_FOLLOW_VIDEO",
                                            context: "ambilight_follow_video",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 1,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_AMBILIGHT_STANDARD",
                                                    },
                                                    {
                                                        enum_id: 2,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_AMBILIGHT_NATURAL",
                                                    },
                                                    {
                                                        enum_id: 3,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_AMBILIGHT_SPORTS",
                                                    },
                                                    {
                                                        enum_id: 4,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_AMBILIGHT_VIVID",
                                                    },
                                                    {
                                                        enum_id: 5,
                                                        string_id:
                                                            "org.droidtv.ui.strings2.R.string.MAIN_AMBILIGHT_GAME_2K23",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968785,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_FOLLOW_AUDIO",
                                            context: "ambilight_follow_audio",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 101,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_FOLLOW_AUDIO_STYLE_1",
                                                    },
                                                    {
                                                        enum_id: 103,
                                                        string_id:
                                                            "org.droidtv.ui.strings2.R.string.MAIN_FOLLOW_AUDIO_STYLE_3_2K23",
                                                    },
                                                    {
                                                        enum_id: 107,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_FOLLOW_AUDIO_STYLE_6",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968786,
                                            string_id:
                                                "org.droidtv.ui.strings.R.string.MAIN_AMBILIGHT_FOLLOW_COLOUR_2K20",
                                            context: "ambilight_lounge_light",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 201,
                                                        string_id:
                                                            "org.droidtv.ui.strings2.R.string.MAIN_LOUNGE_LIGHT_MODE_2_2K23",
                                                    },
                                                    {
                                                        enum_id: 202,
                                                        string_id:
                                                            "org.droidtv.ui.strings2.R.string.MAIN_LOUNGE_LIGHT_MODE_3_2K23",
                                                    },
                                                    {
                                                        enum_id: 203,
                                                        string_id:
                                                            "org.droidtv.ui.strings2.R.string.MAIN_LOUNGE_LIGHT_MODE_1_2K23",
                                                    },
                                                    {
                                                        enum_id: 207,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_WARM_WHITE",
                                                    },
                                                    {
                                                        enum_id: 204,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_COOL_WHITE",
                                                    },
                                                    {
                                                        enum_id: 208,
                                                        string_id:
                                                            "org.droidtv.ui.strings2.R.string.MAIN_CUSTOM_COLOUR_2K23",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968787,
                                            type: "PARENT_NODE",
                                            string_id: "org.droidtv.ui.strings2.R.string.MAIN_FOLLOW_FLAG_2K23",
                                            context: "ambilight_follow_flag",
                                            data: {},
                                        },
                                        {
                                            node_id: 2130968784,
                                            type: "PARENT_NODE",
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_FOLLOW_APP",
                                            context: "ambilight_follow_app",
                                            data: {},
                                        },
                                    ],
                                },
                            },
                            {
                                node_id: 2130968781,
                                string_id: "org.droidtv.ui.strings2.R.string.MAIN_CUSTOM_COLOUR_2K23",
                                context: "ambilight_custom_colour",
                                data: {
                                    colors: [
                                        -14411265, -15097089, -15074561, -15073484, -1442023, -19943, -59111, -58908,
                                        -11647489, -12208897, -12190721, -12189861, -1179835, -16059, -47803, -47639,
                                        -8883713, -9320705, -9306881, -9306238, -917647, -12175, -36495, -36370,
                                        -6119937, -6432769, -6423041, -6422615, -589923, -8547, -25187, -25101,
                                        -3356161, -3544577, -3539201, -3538993, -327735, -4663, -13879, -13831, -2323,
                                        -1807, -1035, -520, -4, -67329, -461313, -789761,
                                    ],
                                },
                                type: "COLOR_PICKER_NODE",
                            },
                            {
                                node_id: 2130968650,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_AMBISLEEP",
                                context: "ambisleep",
                                data: {
                                    nodes: [
                                        {
                                            node_id: 2130968654,
                                            type: "PARENT_NODE",
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_AMBISLEEP_ON",
                                            context: "ambisleep_on",
                                            data: {},
                                        },
                                        {
                                            node_id: 2130968653,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_AMBISLEEP_DURATION",
                                            context: "ambisleep_duration",
                                            data: {
                                                slider_data: {
                                                    min: 1,
                                                    max: 60,
                                                    step_size: 1,
                                                },
                                            },
                                            type: "SLIDER_NODE",
                                        },
                                        {
                                            node_id: 2130968651,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_AMBISLEEP_BRIGHTNESS",
                                            context: "ambisleep_brightness",
                                            data: {
                                                slider_data: {
                                                    min: 1,
                                                    max: 9,
                                                    step_size: 1,
                                                },
                                            },
                                            type: "SLIDER_NODE",
                                        },
                                        {
                                            node_id: 2130968652,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_AMBISLEEP_COLOUR",
                                            context: "ambisleep_colour",
                                            data: {
                                                colors: [-62976, -45056, -37376, -29696, -14336],
                                            },
                                            type: "COLOR_PICKER_NODE",
                                        },
                                        {
                                            node_id: 2130968655,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_AMBISLEEP_SOUND",
                                            context: "ambisleep_sound",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_AMBISLEEP_SOUND_CAMPFIRE",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_AMBISLEEP_SOUND_HOWLING_WIND",
                                                    },
                                                    {
                                                        enum_id: 2,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_AMBISLEEP_SOUND_RAIN",
                                                    },
                                                    {
                                                        enum_id: 3,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_AMBISLEEP_SOUND_RAINFOREST",
                                                    },
                                                    {
                                                        enum_id: 4,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_AMBISLEEP_SOUND_SUMMER_NIGHT",
                                                    },
                                                    {
                                                        enum_id: 5,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_AMBISLEEP_SOUND_TROPICAL_BEACH",
                                                    },
                                                    {
                                                        enum_id: 6,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_AMBISLEEP_SOUND_WATERFALL",
                                                    },
                                                    {
                                                        enum_id: 7,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_AMBISLEEP_SOUND_NO_SOUND",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                    ],
                                },
                            },
                            {
                                node_id: 2130968641,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_AMBILIGHT_EXTENSION",
                                context: "ambilight_extension",
                                data: {
                                    nodes: [
                                        {
                                            node_id: 2130968649,
                                            type: "PARENT_NODE",
                                            string_id: "org.droidtv.ui.strings2.R.string.MAIN_AMBILIGHT_PLUS_HUE_2K23",
                                            context: "ambilight_hue_menu",
                                            data: {
                                                nodes: [
                                                    {
                                                        node_id: 2130968635,
                                                        type: "PARENT_NODE",
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_AMBILIGHT_HUE_CONFIGURE",
                                                        context: "ambilight_hue_wizard",
                                                        data: {},
                                                    },
                                                    {
                                                        node_id: 2130968816,
                                                        context: "ambilight_hue_off",
                                                        data: {},
                                                        type: "TOGGLE_NODE",
                                                    },
                                                    {
                                                        node_id: 2130968636,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_AMBILIGHT_HUE_FOLLOW_AMBILIGHT",
                                                        context: "ambilight_hue_follow_ambilight",
                                                        data: {
                                                            slider_data: {
                                                                min: 0,
                                                                max: 10,
                                                                step_size: 1,
                                                            },
                                                        },
                                                        type: "SLIDER_NODE",
                                                    },
                                                    {
                                                        node_id: 2130968648,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_LOUNGE_LIGHT_HUE",
                                                        context: "ambilight_lounge_light_hue",
                                                        data: {
                                                            enums: [
                                                                {
                                                                    enum_id: 0,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                                },
                                                                {
                                                                    enum_id: 1,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_ON",
                                                                },
                                                            ],
                                                        },
                                                        type: "LIST_NODE",
                                                    },
                                                    {
                                                        node_id: 2130968637,
                                                        type: "PARENT_NODE",
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_AMBILIGHT_HUE_STATUS",
                                                        context: "ambilight_hue_status",
                                                        data: {},
                                                    },
                                                    {
                                                        node_id: 2130968768,
                                                        type: "PARENT_NODE",
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_AMBILIGHT_HUE_RESET",
                                                        context: "ambilight_hue_reset_configuration",
                                                        data: {},
                                                    },
                                                ],
                                            },
                                        },
                                        {
                                            node_id: 2130968643,
                                            type: "PARENT_NODE",
                                            string_id: "org.droidtv.ui.strings2.R.string.MAIN_AMBILIGHT_AIR_2K23",
                                            context: "ambilight_light_play",
                                            data: {
                                                nodes: [
                                                    {
                                                        node_id: 2130968644,
                                                        type: "PARENT_NODE",
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_AMBILIGHT_AIR_CONFIGURE",
                                                        context: "ambilight_light_play",
                                                        data: {},
                                                    },
                                                    {
                                                        node_id: 2130968647,
                                                        type: "PARENT_NODE",
                                                        context: "ambilight_light_play",
                                                        data: {},
                                                    },
                                                    {
                                                        node_id: 2130968745,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_LOUNGE_LIGHT_AIR",
                                                        context: "ambilight_light_play",
                                                        data: {
                                                            enums: [
                                                                {
                                                                    enum_id: 0,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_LOUNGE_LIGHT_AIR_LABEL_1",
                                                                },
                                                                {
                                                                    enum_id: 1,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_LOUNGE_LIGHT_AIR_LABEL_2",
                                                                },
                                                            ],
                                                        },
                                                        type: "LIST_NODE",
                                                    },
                                                    {
                                                        node_id: 2130968646,
                                                        type: "PARENT_NODE",
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_AMBILIGHT_AIR_STATUS",
                                                        context: "ambilight_light_play",
                                                        data: {},
                                                    },
                                                    {
                                                        node_id: 2130968645,
                                                        type: "PARENT_NODE",
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_AMBILIGHT_AIR_RESET",
                                                        context: "ambilight_light_play",
                                                        data: {},
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                            },
                            {
                                node_id: 2130968638,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_ADVANCED_AMBILIGHT",
                                context: "ambilight_advanced",
                                data: {
                                    nodes: [
                                        {
                                            node_id: 2130968780,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_AMBILIGHT_BRIGHTNESS",
                                            context: "ambilight_brightness",
                                            data: {
                                                slider_data: {
                                                    min: 0,
                                                    max: 10,
                                                    step_size: 1,
                                                },
                                            },
                                            type: "SLIDER_NODE",
                                        },
                                        {
                                            node_id: 2130968782,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_AMBILIGHT_SATURATION",
                                            context: "ambilight_saturation",
                                            data: {
                                                slider_data: {
                                                    min: -2,
                                                    max: 2,
                                                    step_size: 1,
                                                },
                                            },
                                            type: "SLIDER_NODE",
                                        },
                                        {
                                            node_id: 2130968639,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_AMBILIGHT_BOTTOM_SIDE",
                                            context: "ambilight_bottom_side",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                    },
                                                    {
                                                        enum_id: 0,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_ON",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968640,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_BRIGHTNESS_BOTTOM_SIDE",
                                            context: "ambilight_brightness_bottom_side",
                                            data: {
                                                slider_data: {
                                                    min: 0,
                                                    max: 10,
                                                    step_size: 1,
                                                },
                                            },
                                            type: "SLIDER_NODE",
                                        },
                                        {
                                            node_id: 2130968778,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_WALL_COLOUR",
                                            context: "ambilight_wall_colour",
                                            data: {
                                                colors: [
                                                    -1, -1651276, -3342439, -3347201, -3355393, -13108, -6451, -103,
                                                    -12566464, -3693173, -6565376, -10053121, -2982751, -33664, -81560,
                                                    -256, -15724528, -7508135, -10452480, -15513423, -5293203, -1888983,
                                                    -5682169, -26368,
                                                ],
                                            },
                                            type: "WALL_COLOR_NODE",
                                        },
                                        {
                                            node_id: 2130968790,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_TV_SWITCH_OFF",
                                            context: "ambilight_tv_switch_off",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_FADE_OUT",
                                                    },
                                                    {
                                                        enum_id: 2,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_IMMEDIATE_SWITCH_OFF",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968843,
                                            string_id: "org.droidtv.ui.strings2.R.string.MAIN_WARM_WHITE_TUNING",
                                            context: "ambilight_isf_tuning",
                                            data: {
                                                sliders: [
                                                    {
                                                        slider_id: "org.droidtv.ui.strings.R.string.MAIN_MS_RED",
                                                        slider_data: {
                                                            min: 0,
                                                            max: 100,
                                                            step_size: 1,
                                                        },
                                                    },
                                                    {
                                                        slider_id: "org.droidtv.ui.strings.R.string.MAIN_MS_GREEN",
                                                        slider_data: {
                                                            min: 0,
                                                            max: 100,
                                                            step_size: 1,
                                                        },
                                                    },
                                                    {
                                                        slider_id: "org.droidtv.ui.strings.R.string.MAIN_MS_BLUE",
                                                        slider_data: {
                                                            min: 0,
                                                            max: 100,
                                                            step_size: 1,
                                                        },
                                                    },
                                                ],
                                            },
                                            type: "MULTIPLE_SLIDER",
                                        },
                                        {
                                            node_id: 2130968642,
                                            string_id: "org.droidtv.ui.strings2.R.string.MAIN_HALO_TYPE",
                                            context: "ambilight_halo_type",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id: "org.droidtv.ui.strings2.R.string.MAIN_FINE_DETAIL",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings2.R.string.MAIN_CLASSIC_GLOW",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
                {
                    node_id: 2130968703,
                    type: "PARENT_NODE",
                    string_id: "org.droidtv.ui.strings.R.string.MAIN_ECO_SETTINGS",
                    context: "eco_settings",
                    data: {
                        nodes: [
                            {
                                node_id: 2130968704,
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_ENERGY_SAVING",
                                context: "energy_saving",
                                data: {
                                    enums: [
                                        {
                                            enum_id: 0,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                        },
                                        {
                                            enum_id: 1,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_MINIMUM",
                                        },
                                        {
                                            enum_id: 2,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_MEDIUM",
                                        },
                                        {
                                            enum_id: 3,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_MAXIMUM",
                                        },
                                    ],
                                },
                                type: "LIST_NODE",
                            },
                            {
                                node_id: 2130968772,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_MUTE_SCREEN",
                                context: "screen_off",
                                data: {},
                            },
                            {
                                node_id: 2130968742,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_LIGHT_SENSOR",
                                context: "eco_settings_light_sensor",
                                data: {},
                            },
                            {
                                node_id: 2130968702,
                                string_id: "org.droidtv.ui.strings2.R.string.MAIN_EYE_CARE",
                                context: "eco_eye_care",
                                data: {
                                    enums: [
                                        {
                                            enum_id: 0,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                        },
                                        {
                                            enum_id: 1,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_ON",
                                        },
                                    ],
                                },
                                type: "LIST_NODE",
                            },
                            {
                                node_id: 2130968766,
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_AUTOMATIC_SWITCH_OFF",
                                context: "switch_off_timer",
                                data: {
                                    slider_data: {
                                        min: 0,
                                        max: 240,
                                        step_size: 30,
                                    },
                                },
                                type: "SLIDER_NODE",
                            },
                        ],
                    },
                },
                {
                    node_id: 2130968827,
                    type: "PARENT_NODE",
                    string_id: "org.droidtv.ui.strings.R.string.MAIN_GENERAL_SETTINGS",
                    context: "general_settings",
                    data: {
                        nodes: [
                            {
                                node_id: 2130968831,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_USB_STORAGE",
                                context: "usb_storage",
                                data: {},
                            },
                            {
                                node_id: 2130968819,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_USB_KEYBOARD_SETTINGS",
                                context: "usb_keyboard_settings",
                                data: {},
                            },
                            {
                                node_id: 2130968826,
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_PHILIPS_WORDMARK",
                                context: "philips_wordmark",
                                data: {
                                    enums: [
                                        {
                                            enum_id: 0,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                        },
                                        {
                                            enum_id: 1,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_MINIMUM",
                                        },
                                        {
                                            enum_id: 2,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_MEDIUM",
                                        },
                                        {
                                            enum_id: 3,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_MAXIMUM",
                                        },
                                    ],
                                },
                                type: "LIST_NODE",
                            },
                            {
                                node_id: 2130968825,
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_LOCATION",
                                context: "location",
                                data: {
                                    enums: [
                                        {
                                            enum_id: 1,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_HOME",
                                        },
                                        {
                                            enum_id: 0,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_SHOP",
                                        },
                                    ],
                                },
                                type: "LIST_NODE",
                            },
                            {
                                node_id: 2130968828,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_VB_SHOP_CONFIGURATION",
                                context: "shop_setup",
                                data: {},
                            },
                            {
                                node_id: 2130968824,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings.R.string.MISC_EASYLINK",
                                context: "easylink_menu",
                                data: {
                                    nodes: [
                                        {
                                            node_id: 2130968592,
                                            string_id: "org.droidtv.ui.strings.R.string.MISC_EASYLINK",
                                            context: "easylink",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_ON",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968596,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_EASYLINK_REMOTE_CONTROL",
                                            context: "easylink_remote_control",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_ON",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968594,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_EASYLINK_AUTO_DEVICE_OFF",
                                            context: "easylink_auto_device_off",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                    },
                                                    {
                                                        enum_id: 0,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_ON",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968595,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_EASYLINK_AUTO_TV_ON",
                                            context: "easylink_auto_tv_on",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                    },
                                                    {
                                                        enum_id: 0,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_ON",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968593,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_EASYLINK_AUTO_ARC_ON",
                                            context: "easylink_auto_arc_on",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                    },
                                                    {
                                                        enum_id: 0,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_ON",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968829,
                                            string_id:
                                                "org.droidtv.ui.strings2.R.string.MAIN_EASYLINK_PLUS_SOUND_CONTROL",
                                            context: "easylink_2_sound_control",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_ON",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                    ],
                                },
                            },
                            {
                                node_id: 2130968728,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings.R.string.MISC_HDMI_ULTRA_HD",
                                context: "hdmi_ultra_hd",
                                data: {
                                    nodes: [
                                        {
                                            node_id: 2130968729,
                                            string_id: "org.droidtv.ui.strings.R.string.MISC_HDMI1",
                                            context: "hdmi_ultra_hd",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_UHD_STANDARD_2K18",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_UHD_OPTIMAL_2K18",
                                                    },
                                                    {
                                                        enum_id: 2,
                                                        string_id:
                                                            "org.droidtv.ui.strings2.R.string.MAIN_OPTIMAL_AUTO_GAME",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968730,
                                            string_id: "org.droidtv.ui.strings.R.string.MISC_HDMI2",
                                            context: "hdmi_ultra_hd",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_UHD_STANDARD_2K18",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_UHD_OPTIMAL_2K18",
                                                    },
                                                    {
                                                        enum_id: 2,
                                                        string_id:
                                                            "org.droidtv.ui.strings2.R.string.MAIN_OPTIMAL_AUTO_GAME",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968731,
                                            string_id: "org.droidtv.ui.strings.R.string.MISC_HDMI3",
                                            context: "hdmi_ultra_hd",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_UHD_STANDARD_2K18",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_UHD_OPTIMAL_2K18",
                                                    },
                                                    {
                                                        enum_id: 2,
                                                        string_id:
                                                            "org.droidtv.ui.strings2.R.string.MAIN_OPTIMAL_AUTO_GAME",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968732,
                                            string_id: "org.droidtv.ui.strings.R.string.MISC_HDMI4",
                                            context: "hdmi_ultra_hd",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_UHD_STANDARD_2K18",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_UHD_OPTIMAL_2K18",
                                                    },
                                                    {
                                                        enum_id: 2,
                                                        string_id:
                                                            "org.droidtv.ui.strings2.R.string.MAIN_OPTIMAL_AUTO_GAME",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                    ],
                                },
                            },
                            {
                                node_id: 2130968664,
                                context: "auto_movie_mode",
                                data: {
                                    enums: [
                                        {
                                            enum_id: 0,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                        },
                                        {
                                            enum_id: 1,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_ON",
                                        },
                                    ],
                                },
                                type: "LIST_NODE",
                            },
                            {
                                node_id: 2130968663,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings2.R.string.MAIN_AUTO_FILMAKER_AI",
                                context: "auto_film_mode",
                                data: {
                                    nodes: [
                                        {
                                            node_id: 2130968709,
                                            string_id: "org.droidtv.ui.strings2.R.string.MAIN_FILM_DETECTION",
                                            context: "auto_film_mode",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id:
                                                            "org.droidtv.ui.strings2.R.string.MAIN_FOLLOW_NOTIFICATION_FROM_SOURCE",
                                                    },
                                                    {
                                                        enum_id: 2,
                                                        string_id:
                                                            "org.droidtv.ui.strings2.R.string.MAIN_FOLLOW_P5_AI_DETECTION",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968761,
                                            string_id: "org.droidtv.ui.strings2.R.string.MAIN_PREFERRED_AUTO_FILM_MODE",
                                            context: "auto_film_mode",
                                            data: {
                                                enums: [],
                                            },
                                            type: "LIST_NODE",
                                        },
                                    ],
                                },
                            },
                            {
                                node_id: 2130968820,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_ADVANCED_INSTALLATION",
                                context: "advanced_general_settings",
                                data: {
                                    nodes: [
                                        {
                                            node_id: 2130968598,
                                            type: "PARENT_NODE",
                                            string_id: "org.droidtv.ui.strings2.R.string.MAIN_HBBTV_OPPAPP_SETTINGS",
                                            context: "hbbtv_settings",
                                            data: {
                                                nodes: [
                                                    {
                                                        node_id: 2130968597,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_HBB_TV",
                                                        context: "hbbtv",
                                                        data: {
                                                            enums: [
                                                                {
                                                                    enum_id: 0,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                                },
                                                                {
                                                                    enum_id: 1,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_ON",
                                                                },
                                                            ],
                                                        },
                                                        type: "LIST_NODE",
                                                    },
                                                    {
                                                        node_id: 2130968726,
                                                        string_id:
                                                            "org.droidtv.ui.strings2.R.string.MAIN_HBBTV_OPPAPP_TRACK_USAGE",
                                                        context: "hbbtv_track_usage",
                                                        data: {
                                                            enums: [
                                                                {
                                                                    enum_id: 0,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                                },
                                                                {
                                                                    enum_id: 1,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_ON",
                                                                },
                                                            ],
                                                        },
                                                        type: "LIST_NODE",
                                                    },
                                                    {
                                                        node_id: 2130968724,
                                                        string_id:
                                                            "org.droidtv.ui.strings2.R.string.MAIN_HBBTV_OPPAPP_COOKIES",
                                                        context: "hbbtv_cookies",
                                                        data: {
                                                            enums: [
                                                                {
                                                                    enum_id: 0,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                                },
                                                                {
                                                                    enum_id: 1,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_ON",
                                                                },
                                                            ],
                                                        },
                                                        type: "LIST_NODE",
                                                    },
                                                    {
                                                        node_id: 2130968723,
                                                        type: "PARENT_NODE",
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_CLEAR_APPROVED_APP_LISTING",
                                                        context: "hbbtv_clear_listing",
                                                        data: {},
                                                    },
                                                    {
                                                        node_id: 2130968725,
                                                        type: "PARENT_NODE",
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_HBBTV_DEVICEID_RESET",
                                                        context: "hbbtv_device_id_reset",
                                                        data: {},
                                                    },
                                                ],
                                            },
                                        },
                                        {
                                            node_id: 2130968750,
                                            type: "PARENT_NODE",
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_OLED_SCREEN_SETTINGS",
                                            context: "OLED_screen_settings",
                                            data: {
                                                nodes: [
                                                    {
                                                        node_id: 2130968813,
                                                        context: "still_image_protection",
                                                        data: {
                                                            enums: [
                                                                {
                                                                    enum_id: 1,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                                },
                                                                {
                                                                    enum_id: 2,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_NORMAL",
                                                                },
                                                                {
                                                                    enum_id: 3,
                                                                    string_id:
                                                                        "org.droidtv.ui.strings.R.string.MAIN_HIGH",
                                                                },
                                                            ],
                                                        },
                                                        type: "LIST_NODE",
                                                    },
                                                    {
                                                        node_id: 2130968679,
                                                        type: "PARENT_NODE",
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_CLEAR_IMAGE_RESIDUAL",
                                                        context: "clear_image_residual",
                                                        data: {},
                                                    },
                                                ],
                                            },
                                        },
                                    ],
                                },
                            },
                            {
                                node_id: 67698689,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_VIEWING_DATA",
                                context: "viewing_data",
                                data: {
                                    nodes: [
                                        {
                                            node_id: 2130968620,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_VIEWING_DATA_SETTINGS",
                                            context: "viewing_data_settings",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_ON",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968604,
                                            type: "PARENT_NODE",
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_PRIVACY_POLICY",
                                            context: "privacy_policy",
                                            data: {},
                                        },
                                    ],
                                },
                            },
                            {
                                node_id: 2130968817,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_FACTORY_SETTINGS",
                                context: "factory_settings",
                                data: {},
                            },
                            {
                                node_id: 2130968818,
                                type: "PARENT_NODE",
                                context: "reinstall_tv",
                                data: {},
                            },
                            {
                                node_id: 2130968582,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings.R.string.CAM_PROFILE_NAME",
                                context: "CAM_profile_name",
                                data: {},
                            },
                            {
                                node_id: 2130968581,
                                string_id: "org.droidtv.ui.strings2.R.string.MAIN_CAM_INTERFACE",
                                context: "CAM_interface",
                                data: {
                                    enums: [
                                        {
                                            enum_id: 0,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_CAM_PCMCIA",
                                        },
                                        {
                                            enum_id: 1,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_CAM_USB",
                                        },
                                    ],
                                },
                                type: "LIST_NODE",
                            },
                        ],
                    },
                },
                {
                    node_id: 2130968738,
                    type: "PARENT_NODE",
                    string_id: "org.droidtv.ui.strings.R.string.MAIN_REGION_AND_LANGUAGE",
                    context: "region_languages",
                    data: {
                        nodes: [
                            {
                                node_id: 2130968739,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_LANGUAGES",
                                context: "languages",
                                data: {
                                    nodes: [
                                        {
                                            node_id: 2130968746,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_MENU_LANGUAGE",
                                            context: "menu_language",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 83,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_AZERBAIJANI",
                                                    },
                                                    {
                                                        enum_id: 48,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_BAHASA_MELAYU",
                                                    },
                                                    {
                                                        enum_id: 50,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_INDONESIAN",
                                                    },
                                                    {
                                                        enum_id: 37,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_BULGARIAN",
                                                    },
                                                    {
                                                        enum_id: 6,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_CZECH",
                                                    },
                                                    {
                                                        enum_id: 14,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_DANISH",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_GERMAN",
                                                    },
                                                    {
                                                        enum_id: 0,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_ENGLISH",
                                                    },
                                                    {
                                                        enum_id: 5,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_SPANISH",
                                                    },
                                                    {
                                                        enum_id: 26,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_ESTONIAN",
                                                    },
                                                    {
                                                        enum_id: 10,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_GREEK",
                                                    },
                                                    {
                                                        enum_id: 4,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_FRENCH",
                                                    },
                                                    {
                                                        enum_id: 43,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_IRISH",
                                                    },
                                                    {
                                                        enum_id: 13,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_CROATIAN",
                                                    },
                                                    {
                                                        enum_id: 75,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_ICELANDIC",
                                                    },
                                                    {
                                                        enum_id: 3,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_ITALIAN",
                                                    },
                                                    {
                                                        enum_id: 41,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_KAZAKH",
                                                    },
                                                    {
                                                        enum_id: 40,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_LATVIAN",
                                                    },
                                                    {
                                                        enum_id: 39,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_LITHUANIAN",
                                                    },
                                                    {
                                                        enum_id: 52,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_MACEDONIAN",
                                                    },
                                                    {
                                                        enum_id: 30,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_HUNGARIAN",
                                                    },
                                                    {
                                                        enum_id: 78,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_MONGOLIAN",
                                                    },
                                                    {
                                                        enum_id: 15,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_DUTCH",
                                                    },
                                                    {
                                                        enum_id: 19,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_NORWEGIAN",
                                                    },
                                                    {
                                                        enum_id: 7,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_POLISH",
                                                    },
                                                    {
                                                        enum_id: 20,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_PORTUGUESE",
                                                    },
                                                    {
                                                        enum_id: 36,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MISC_PORTUGUESE_BRAZILIAN",
                                                    },
                                                    {
                                                        enum_id: 9,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_RUSSIAN",
                                                    },
                                                    {
                                                        enum_id: 25,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_ROMANIAN",
                                                    },
                                                    {
                                                        enum_id: 74,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_ALBANIAN",
                                                    },
                                                    {
                                                        enum_id: 21,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_SERBIAN",
                                                    },
                                                    {
                                                        enum_id: 22,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_SLOVAK",
                                                    },
                                                    {
                                                        enum_id: 23,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_SLOVENIAN",
                                                    },
                                                    {
                                                        enum_id: 16,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_FINNISH",
                                                    },
                                                    {
                                                        enum_id: 2,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_SWEDISH",
                                                    },
                                                    {
                                                        enum_id: 8,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_TURKISH",
                                                    },
                                                    {
                                                        enum_id: 51,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_VIETNAMESE",
                                                    },
                                                    {
                                                        enum_id: 27,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_UKRAINIAN",
                                                    },
                                                    {
                                                        enum_id: 49,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MISC_TRADITIONAL_CHINESE",
                                                    },
                                                    {
                                                        enum_id: 34,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_CHINESE",
                                                    },
                                                    {
                                                        enum_id: 28,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_ARABIC",
                                                    },
                                                    {
                                                        enum_id: 29,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_HEBREW",
                                                    },
                                                    {
                                                        enum_id: 45,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_THAI",
                                                    },
                                                    {
                                                        enum_id: 58,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_HINDI",
                                                    },
                                                    {
                                                        enum_id: 79,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_BENGALI",
                                                    },
                                                    {
                                                        enum_id: 80,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_TELUGU",
                                                    },
                                                    {
                                                        enum_id: 81,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_MARATHI",
                                                    },
                                                    {
                                                        enum_id: 53,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_TAMIL",
                                                    },
                                                    {
                                                        enum_id: 82,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_ARMENIAN",
                                                    },
                                                    {
                                                        enum_id: 84,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_GEORGIAN",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968762,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_PRIMARY_AUDIO",
                                            context: "primary_audio",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 74,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ALBANIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 85,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ALTERNATIVE_LANGUAGE_A",
                                                    },
                                                    {
                                                        enum_id: 86,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ALTERNATIVE_LANGUAGE_B",
                                                    },
                                                    {
                                                        enum_id: 28,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ARABIC_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 82,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ARMENIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 83,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_AZERBAIJANI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 48,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_BAHASA_MELAYU_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 11,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_BASQUE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 79,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_BENGALI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 37,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_BULGARIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 12,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_CATALAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 34,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_CHINESE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 49,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_CHINESE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 61,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_MANDARIN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 76,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_CANTONESE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 13,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_CROATIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 6,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_CZECH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 14,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_DANISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 15,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_DUTCH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 0,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ENGLISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 26,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ESTONIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 16,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_FINNISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 4,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_FRENCH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 18,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_GALLEGAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 84,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_GEORGIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_GERMAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 10,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_GREEK_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 29,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_HEBREW_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 58,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_HINDI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 30,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_HUNGARIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 46,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ORIGINAL_AUDIO",
                                                    },
                                                    {
                                                        enum_id: 59,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_SECOND_AUDIO",
                                                    },
                                                    {
                                                        enum_id: 60,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_THIRD_AUDIO",
                                                    },
                                                    {
                                                        enum_id: 47,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_MULTIPLE_LANGUAGES",
                                                    },
                                                    {
                                                        enum_id: 75,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ICELANDIC_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 50,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_INDONESIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 43,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_IRISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 3,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ITALIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 57,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_JAPANESE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 41,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_KAZAKH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 55,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_KOREAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 40,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_LATVIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 39,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_LITHUANIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 52,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_MACEDONIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 54,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_MAORI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 81,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_MARATHI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 78,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_MONGOLIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 19,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_NORWEGIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 44,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ORIGINAL_LANGUAGE",
                                                    },
                                                    {
                                                        enum_id: 7,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_POLISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 20,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_PORTUGUESE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 25,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ROMANIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 9,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_RUSSIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 72,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SAMI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 17,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_GAELIC_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 22,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SLOVAK_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 23,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SLOVENIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 21,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SERBIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 5,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SPANISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 2,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SWEDISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 53,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_TAMIL_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 80,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_TELUGU_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 45,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_THAI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 8,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_TURKISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 27,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_UKRAINIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 51,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_VIETNAMESE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 24,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_WELSH_TRANSLATED",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968774,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_SECONDARY_AUDIO",
                                            context: "secondary_audio",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 74,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ALBANIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 85,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ALTERNATIVE_LANGUAGE_A",
                                                    },
                                                    {
                                                        enum_id: 86,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ALTERNATIVE_LANGUAGE_B",
                                                    },
                                                    {
                                                        enum_id: 28,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ARABIC_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 82,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ARMENIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 83,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_AZERBAIJANI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 48,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_BAHASA_MELAYU_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 11,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_BASQUE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 79,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_BENGALI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 37,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_BULGARIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 12,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_CATALAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 34,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_CHINESE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 49,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_CHINESE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 61,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_MANDARIN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 76,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_CANTONESE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 13,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_CROATIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 6,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_CZECH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 14,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_DANISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 15,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_DUTCH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 0,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ENGLISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 26,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ESTONIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 16,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_FINNISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 4,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_FRENCH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 18,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_GALLEGAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 84,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_GEORGIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_GERMAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 10,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_GREEK_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 29,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_HEBREW_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 58,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_HINDI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 30,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_HUNGARIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 46,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ORIGINAL_AUDIO",
                                                    },
                                                    {
                                                        enum_id: 59,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_SECOND_AUDIO",
                                                    },
                                                    {
                                                        enum_id: 60,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_THIRD_AUDIO",
                                                    },
                                                    {
                                                        enum_id: 47,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_MULTIPLE_LANGUAGES",
                                                    },
                                                    {
                                                        enum_id: 75,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ICELANDIC_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 50,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_INDONESIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 43,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_IRISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 3,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ITALIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 57,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_JAPANESE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 41,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_KAZAKH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 55,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_KOREAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 40,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_LATVIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 39,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_LITHUANIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 52,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_MACEDONIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 54,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_MAORI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 81,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_MARATHI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 78,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_MONGOLIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 19,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_NORWEGIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 44,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ORIGINAL_LANGUAGE",
                                                    },
                                                    {
                                                        enum_id: 7,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_POLISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 20,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_PORTUGUESE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 25,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ROMANIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 9,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_RUSSIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 72,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SAMI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 17,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_GAELIC_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 22,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SLOVAK_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 23,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SLOVENIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 21,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SERBIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 5,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SPANISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 2,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SWEDISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 53,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_TAMIL_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 80,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_TELUGU_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 45,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_THAI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 8,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_TURKISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 27,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_UKRAINIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 51,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_VIETNAMESE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 24,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_WELSH_TRANSLATED",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968763,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_PRIMARY_SUBTITLES",
                                            context: "primary_subtitles",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 74,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ALBANIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 28,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ARABIC_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 82,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ARMENIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 83,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_AZERBAIJANI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 48,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_BAHASA_MELAYU_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 11,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_BASQUE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 79,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_BENGALI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 37,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_BULGARIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 12,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_CATALAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 49,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_CHINESE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 61,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_MANDARIN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 76,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_CANTONESE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 13,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_CROATIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 6,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_CZECH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 14,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_DANISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 15,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_DUTCH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 0,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ENGLISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 26,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ESTONIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 16,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_FINNISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 4,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_FRENCH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 18,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_GALLEGAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 84,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_GEORGIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_GERMAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 10,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_GREEK_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 29,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_HEBREW_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 58,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_HINDI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 30,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_HUNGARIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 75,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ICELANDIC_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 50,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_INDONESIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 43,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_IRISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 3,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ITALIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 57,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_JAPANESE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 41,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_KAZAKH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 55,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_KOREAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 40,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_LATVIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 39,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_LITHUANIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 52,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_MACEDONIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 54,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_MAORI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 81,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_MARATHI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 78,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_MONGOLIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 47,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_MULTIPLE_LANGUAGES",
                                                    },
                                                    {
                                                        enum_id: 19,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_NORWEGIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 7,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_POLISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 20,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_PORTUGUESE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 25,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ROMANIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 9,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_RUSSIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 72,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SAMI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 17,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_GAELIC_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 34,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SIMPLIFIED_CHINESE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 22,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SLOVAK_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 23,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SLOVENIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 21,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SERBIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 5,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SPANISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 2,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SWEDISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 53,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_TAMIL_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 80,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_TELUGU_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 45,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_THAI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 8,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_TURKISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 27,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_UKRAINIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 51,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_VIETNAMESE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 24,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_WELSH_TRANSLATED",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968775,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_SECONDARY_SUBTITLES",
                                            context: "secondary_subtitles",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 74,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ALBANIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 28,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ARABIC_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 82,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ARMENIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 83,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_AZERBAIJANI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 48,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_BAHASA_MELAYU_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 11,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_BASQUE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 79,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_BENGALI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 37,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_BULGARIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 12,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_CATALAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 49,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_CHINESE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 61,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_MANDARIN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 76,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_CANTONESE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 13,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_CROATIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 6,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_CZECH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 14,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_DANISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 15,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_DUTCH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 0,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ENGLISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 26,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ESTONIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 16,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_FINNISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 4,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_FRENCH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 18,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_GALLEGAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 84,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_GEORGIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_GERMAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 10,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_GREEK_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 29,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_HEBREW_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 58,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_HINDI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 30,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_HUNGARIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 75,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ICELANDIC_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 50,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_INDONESIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 43,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_IRISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 3,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ITALIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 57,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_JAPANESE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 41,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_KAZAKH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 55,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_KOREAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 40,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_LATVIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 39,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_LITHUANIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 52,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_MACEDONIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 54,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_MAORI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 81,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_MARATHI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 78,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_MONGOLIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 47,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_MULTIPLE_LANGUAGES",
                                                    },
                                                    {
                                                        enum_id: 19,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_NORWEGIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 7,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_POLISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 20,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_PORTUGUESE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 25,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ROMANIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 9,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_RUSSIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 72,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SAMI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 17,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_GAELIC_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 34,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SIMPLIFIED_CHINESE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 22,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SLOVAK_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 23,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SLOVENIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 21,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SERBIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 5,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SPANISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 2,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SWEDISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 53,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_TAMIL_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 80,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_TELUGU_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 45,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_THAI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 8,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_TURKISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 27,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_UKRAINIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 51,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_VIETNAMESE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 24,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_WELSH_TRANSLATED",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968764,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_PRIMARY_TELETEXT",
                                            context: "primary_text",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 74,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ALBANIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 28,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ARABIC_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 82,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ARMENIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 83,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_AZERBAIJANI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 48,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_BAHASA_MELAYU_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 11,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_BASQUE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 79,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_BENGALI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 37,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_BULGARIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 12,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_CATALAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 49,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_CHINESE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 61,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_MANDARIN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 76,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_CANTONESE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 13,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_CROATIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 6,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_CZECH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 14,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_DANISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 15,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_DUTCH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 0,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ENGLISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 26,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ESTONIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 16,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_FINNISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 4,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_FRENCH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 18,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_GALLEGAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 84,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_GEORGIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_GERMAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 10,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_GREEK_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 29,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_HEBREW_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 58,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_HINDI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 30,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_HUNGARIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 75,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ICELANDIC_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 50,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_INDONESIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 43,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_IRISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 3,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ITALIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 57,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_JAPANESE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 41,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_KAZAKH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 55,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_KOREAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 40,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_LATVIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 39,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_LITHUANIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 52,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_MACEDONIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 54,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_MAORI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 81,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_MARATHI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 78,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_MONGOLIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 47,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_MULTIPLE_LANGUAGES",
                                                    },
                                                    {
                                                        enum_id: 19,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_NORWEGIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 7,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_POLISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 20,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_PORTUGUESE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 25,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ROMANIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 9,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_RUSSIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 72,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SAMI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 17,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_GAELIC_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 34,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SIMPLIFIED_CHINESE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 22,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SLOVAK_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 23,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SLOVENIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 21,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SERBIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 5,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SPANISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 2,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SWEDISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 53,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_TAMIL_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 80,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_TELUGU_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 45,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_THAI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 8,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_TURKISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 27,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_UKRAINIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 51,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_VIETNAMESE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 24,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_WELSH_TRANSLATED",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968776,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_SECONDARY_TELETEXT",
                                            context: "secondary_text",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 74,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ALBANIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 28,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ARABIC_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 82,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ARMENIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 83,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_AZERBAIJANI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 48,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_BAHASA_MELAYU_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 11,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_BASQUE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 79,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_BENGALI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 37,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_BULGARIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 12,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_CATALAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 49,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_CHINESE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 61,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_MANDARIN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 76,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_CANTONESE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 13,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_CROATIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 6,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_CZECH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 14,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_DANISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 15,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_DUTCH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 0,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ENGLISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 26,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ESTONIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 16,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_FINNISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 4,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_FRENCH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 18,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_GALLEGAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 84,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_GEORGIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_GERMAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 10,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_GREEK_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 29,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_HEBREW_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 58,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_HINDI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 30,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_HUNGARIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 75,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ICELANDIC_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 50,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_INDONESIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 43,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_IRISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 3,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ITALIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 57,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_JAPANESE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 41,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_KAZAKH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 55,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_KOREAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 40,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_LATVIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 39,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_LITHUANIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 52,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_MACEDONIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 54,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_MAORI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 81,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_MARATHI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 78,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_MONGOLIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 47,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_MULTIPLE_LANGUAGES",
                                                    },
                                                    {
                                                        enum_id: 19,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_NORWEGIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 7,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_POLISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 20,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_PORTUGUESE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 25,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_ROMANIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 9,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_RUSSIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 72,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SAMI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 17,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_GAELIC_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 34,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SIMPLIFIED_CHINESE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 22,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SLOVAK_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 23,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SLOVENIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 21,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SERBIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 5,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SPANISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 2,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SWEDISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 53,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_TAMIL_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 80,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_TELUGU_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 45,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_THAI_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 8,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_TURKISH_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 27,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_UKRAINIAN_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 51,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_VIETNAMESE_TRANSLATED",
                                                    },
                                                    {
                                                        enum_id: 24,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_WELSH_TRANSLATED",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                    ],
                                },
                            },
                            {
                                node_id: 2130968760,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_POSTAL_CODE",
                                context: "postal_code",
                                data: {},
                            },
                            {
                                node_id: 2130968722,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_CLOCK",
                                context: "clock",
                                data: {
                                    nodes: [
                                        {
                                            node_id: 2130968710,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_AUTO_CLOCK_MODE",
                                            context: "auto_clock_mode",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_AUTOMATIC",
                                                    },
                                                    {
                                                        enum_id: 2,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_COUNTRY_DEPENDENT",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_MANUAL",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968716,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_TIME_ZONE",
                                            context: "time_zone",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_KAZAKH_WESTERN",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_KAZAKH_EASTERN",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968718,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_TIME_ZONE",
                                            context: "time_zone",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_PORTUGAL_MADEIRA",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_AZORES",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968719,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_TIME_ZONE",
                                            context: "time_zone",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_KALINGRAD",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_MOSCOW",
                                                    },
                                                    {
                                                        enum_id: 2,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_SAMARA",
                                                    },
                                                    {
                                                        enum_id: 3,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_YEKATERINBURG",
                                                    },
                                                    {
                                                        enum_id: 4,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_OMSK",
                                                    },
                                                    {
                                                        enum_id: 5,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_KRASNOYARSK",
                                                    },
                                                    {
                                                        enum_id: 6,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_IRKUTSK",
                                                    },
                                                    {
                                                        enum_id: 7,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_YAKUTSK",
                                                    },
                                                    {
                                                        enum_id: 8,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_VLADIVOSTOK",
                                                    },
                                                    {
                                                        enum_id: 9,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_SREDNEKOLYMSK",
                                                    },
                                                    {
                                                        enum_id: 10,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_KAMCHATKA",
                                                    },
                                                    {
                                                        enum_id: 11,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_NONE",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968720,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_TIME_ZONE",
                                            context: "time_zone",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 1,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SPAIN_BALEARES",
                                                    },
                                                    {
                                                        enum_id: 2,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_CANARY_ISLANDS",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968714,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_TIME_ZONE",
                                            context: "time_zone",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 2,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_QUEENSLAND",
                                                    },
                                                    {
                                                        enum_id: 0,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_NEW_SOUTH_WALES",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_VICTORIA",
                                                    },
                                                    {
                                                        enum_id: 5,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_TASMANIA",
                                                    },
                                                    {
                                                        enum_id: 3,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SOUTH_AUSTRALIA",
                                                    },
                                                    {
                                                        enum_id: 6,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_NORTHERN_TERRITORY",
                                                    },
                                                    {
                                                        enum_id: 4,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_WESTERN_AUSTRALIA",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968715,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_TIME_ZONE",
                                            context: "time_zone",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_INDONESIA_WESTERN_TIME_ZONE",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_INDONESIA_CENTRAL_TIME_ZONE",
                                                    },
                                                    {
                                                        enum_id: 2,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_INDONESIA_EASTERN_TIME_ZONE",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968717,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_TIME_ZONE",
                                            context: "time_zone",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_NZ_EXCEPT_CHATHAM_TIME_ZONE",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_CHATHAM_ISLANDS",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968711,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_DATE",
                                            context: "date",
                                            data: {},
                                            type: "DATE_PICKER",
                                        },
                                        {
                                            node_id: 2130968713,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_TIME",
                                            context: "time",
                                            data: {},
                                            type: "TIME_PICKER",
                                        },
                                        {
                                            node_id: 2130968712,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_SLEEPTIMER",
                                            context: "sleeptimer",
                                            data: {
                                                slider_data: {
                                                    min: 0,
                                                    max: 180,
                                                    step_size: 5,
                                                },
                                            },
                                            type: "SLIDER_NODE",
                                        },
                                    ],
                                },
                            },
                            {
                                node_id: 2130968606,
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_RC_KEYBOARD",
                                context: "rc_keyboard",
                                data: {
                                    enums: [
                                        {
                                            enum_id: 0,
                                            string_id: "org.droidtv.ui.strings.R.string.MISC_QWERTY",
                                        },
                                        {
                                            enum_id: 1,
                                            string_id: "org.droidtv.ui.strings.R.string.MISC_AZERTY",
                                        },
                                    ],
                                },
                                type: "LIST_NODE",
                            },
                        ],
                    },
                },
                {
                    node_id: 2130968721,
                    type: "PARENT_NODE",
                    string_id: "org.droidtv.ui.strings.R.string.MAIN_GOOGLE_SETTINGS",
                    context: "android_settings",
                    data: {},
                },
                {
                    node_id: 2130968577,
                    type: "PARENT_NODE",
                    string_id: "org.droidtv.ui.strings.R.string.MAIN_UNIVERSAL_ACCESS",
                    context: "accessibility",
                    data: {
                        nodes: [
                            {
                                node_id: 2130968617,
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_UNIVERSAL_ACCESS",
                                context: "universal_access",
                                data: {
                                    enums: [
                                        {
                                            enum_id: 0,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                        },
                                        {
                                            enum_id: 1,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_ON",
                                        },
                                    ],
                                },
                                type: "LIST_NODE",
                            },
                            {
                                node_id: 2130968735,
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_HEARING_IMPAIRED",
                                context: "hearing_impaired",
                                data: {
                                    enums: [
                                        {
                                            enum_id: 0,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                        },
                                        {
                                            enum_id: 1,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_ON",
                                        },
                                    ],
                                },
                                type: "LIST_NODE",
                            },
                            {
                                node_id: 2130968578,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_AUDIO_DESCRIPTION",
                                context: "audio_description_menu",
                                data: {
                                    nodes: [
                                        {
                                            node_id: 2130968658,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_AUDIO_DESCRIPTION",
                                            context: "audio_description",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                    },
                                                    {
                                                        enum_id: 3,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_ON",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968812,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_SPEAKERS_OR_HEADPHONES",
                                            context: "speakers_headphones",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_SPEAKERS",
                                                    },
                                                    {
                                                        enum_id: 2,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_HEADPHONE",
                                                    },
                                                    {
                                                        enum_id: 3,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_SPEAKERS_HEADPHONE",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968602,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_MIXED_VOLUME",
                                            context: "mixed_volume",
                                            data: {
                                                slider_data: {
                                                    min: -32,
                                                    max: 32,
                                                    step_size: 1,
                                                },
                                            },
                                            type: "SLIDER_NODE",
                                        },
                                        {
                                            node_id: 2130968579,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_SEAMLESS_MIXING",
                                            context: "audio_effects",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_ON",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968608,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_SPEECH_PREFERENCE",
                                            context: "speech",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_PREFERENCE_DESCRIPTIVE",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_PREFERENCE_SUBTITLES",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                    ],
                                },
                            },
                            {
                                node_id: 2130968697,
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_DIALOGUE_ENHANCEMENT",
                                context: "dialogue_enhancement",
                                data: {
                                    slider_data: {
                                        min: 0,
                                        max: 9,
                                        step_size: 1,
                                    },
                                },
                                type: "SLIDER_NODE",
                            },
                        ],
                    },
                },
                {
                    node_id: 2130968823,
                    type: "PARENT_NODE",
                    string_id: "org.droidtv.ui.strings.R.string.MAIN_CHILD_LOCK",
                    context: "child_lock",
                    data: {
                        nodes: [
                            {
                                node_id: 2130968753,
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_PARENTAL_RATING",
                                context: "parental_rating",
                                data: {
                                    enums: [],
                                },
                                type: "LIST_NODE",
                            },
                            {
                                node_id: 2130968754,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_PARENTAL_RATING_STREAMING_CHANNELS",
                                context: "parental_rating",
                                data: {},
                            },
                            {
                                node_id: 2130968657,
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_APP_LOCKING",
                                context: "app_locking",
                                data: {
                                    enums: [
                                        {
                                            enum_id: 0,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                        },
                                        {
                                            enum_id: 1,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_ON",
                                        },
                                    ],
                                },
                                type: "LIST_NODE",
                            },
                            {
                                node_id: 2130968777,
                                type: "PARENT_NODE",
                                context: "change_code",
                                data: {},
                            },
                            {
                                node_id: 2130968675,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings.R.string.ID_CAM_PIN",
                                context: "CAM_change_code",
                                data: {},
                            },
                        ],
                    },
                },
                {
                    node_id: 2130968832,
                    type: "PARENT_NODE",
                    string_id: "org.droidtv.ui.strings.R.string.MAIN_WIRELESS_AND_NETWORKS",
                    context: "wireless_networks",
                    data: {
                        nodes: [
                            {
                                node_id: 2130968846,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_WIRED_OR_WIFI",
                                context: "network",
                                data: {
                                    nodes: [
                                        {
                                            node_id: 2130968589,
                                            type: "PARENT_NODE",
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_CONNECT_TO_NETWORK",
                                            context: "connect_to_network",
                                            data: {},
                                        },
                                        {
                                            node_id: 2130968619,
                                            type: "PARENT_NODE",
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_VIEW_NETWORK_SETTINGS",
                                            context: "view_network_settings",
                                            data: {},
                                        },
                                        {
                                            node_id: 2130968603,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_NETWORK_MODE",
                                            context: "network_configuration",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id: "org.droidtv.ui.strings.R.string.MISC_DHCP",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_STATIC_IP",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968613,
                                            type: "PARENT_NODE",
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_IP_CONFIGURATION",
                                            context: "ip_configuration",
                                            data: {
                                                nodes: [
                                                    {
                                                        node_id: 2130968612,
                                                        type: "PARENT_NODE",
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_PANEL_IPV4_ADDRESS",
                                                        context: "ip_address",
                                                        data: {},
                                                    },
                                                    {
                                                        node_id: 2130968614,
                                                        type: "PARENT_NODE",
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_PANEL_IPV4_NETMASK",
                                                        context: "netmask",
                                                        data: {},
                                                    },
                                                    {
                                                        node_id: 2130968611,
                                                        type: "PARENT_NODE",
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_PANEL_IPV4_GATEWAY",
                                                        context: "gateway",
                                                        data: {},
                                                    },
                                                    {
                                                        node_id: 2130968609,
                                                        type: "PARENT_NODE",
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_PANEL_IPV4_DNS_1",
                                                        context: "dns_1",
                                                        data: {},
                                                    },
                                                    {
                                                        node_id: 2130968610,
                                                        type: "PARENT_NODE",
                                                        string_id:
                                                            "org.droidtv.ui.strings.R.string.MAIN_PANEL_IPV4_DNS_2",
                                                        context: "dns_2",
                                                        data: {},
                                                    },
                                                ],
                                            },
                                        },
                                        {
                                            node_id: 2130968622,
                                            string_id:
                                                "org.droidtv.ui.strings.R.string.MAIN_SWITCH_ON_WITH_WIFI_WOWLAN",
                                            context: "switch_on_with_network",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_ON",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968587,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_SWITCH_ON_WITH_CHROMECAST",
                                            context: "switch_on_with_network",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_ON",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968590,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_RENDERER_ACCESS",
                                            context: "digital_media_renderer",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_ON",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968621,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_WIFI_ON_OFF",
                                            context: "wifi_on_off",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_ON",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968605,
                                            type: "PARENT_NODE",
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_RECORDING_ON_THE_GO",
                                            context: "myremote_recording",
                                            data: {},
                                        },
                                        {
                                            node_id: 2130968615,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_TV_NAME",
                                            context: "tv_network_name",
                                            data: {},
                                            type: "TEXT_ENTRY",
                                        },
                                        {
                                            node_id: 2130968588,
                                            type: "PARENT_NODE",
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_CLEAR_APPS_MEMORY",
                                            context: "clear_internet_memory",
                                            data: {},
                                        },
                                    ],
                                },
                            },
                            {
                                node_id: 2130968667,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_BLUETOOTH",
                                context: "bluetooth",
                                data: {
                                    nodes: [
                                        {
                                            node_id: 2130968580,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_BT_ON_OFF",
                                            context: "bluetooth_on_off",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_ON",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                        {
                                            node_id: 2130968693,
                                            type: "PARENT_NODE",
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_SEARCH_BT_DEVICE",
                                            context: "search_for_bt_devices",
                                            data: {},
                                        },
                                        {
                                            node_id: 2130968767,
                                            type: "PARENT_NODE",
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_REMOVE_BT_DEVICE",
                                            context: "remove_bt_device",
                                            data: {},
                                        },
                                        {
                                            node_id: 2130968668,
                                            string_id: "org.droidtv.ui.strings2.R.string.MAIN_SWITCH_ON_TO_BTA",
                                            context: "switch_on_to_bluetooth_audio",
                                            data: {
                                                enums: [
                                                    {
                                                        enum_id: 0,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                                    },
                                                    {
                                                        enum_id: 1,
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_ON",
                                                    },
                                                ],
                                            },
                                            type: "LIST_NODE",
                                        },
                                    ],
                                },
                            },
                            {
                                node_id: 2130968669,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_REMOTE_CONTROL",
                                context: "bt_remote_control",
                                data: {
                                    nodes: [
                                        {
                                            node_id: 2130968752,
                                            type: "PARENT_NODE",
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_PAIR_RC",
                                            context: "pair_remote_control",
                                            data: {},
                                        },
                                        {
                                            node_id: 2130968678,
                                            type: "PARENT_NODE",
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_REMOTE_CONTROL_INFO",
                                            context: "check_software_version",
                                            data: {},
                                        },
                                        {
                                            node_id: 2130968837,
                                            type: "PARENT_NODE",
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_CH_UPDATE_RC_SOFTWARE",
                                            context: "update_rc_software",
                                            data: {},
                                        },
                                    ],
                                },
                            },
                            {
                                node_id: 2130968841,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_CUBE_NAME",
                                context: "cube_name",
                                data: {
                                    nodes: [
                                        {
                                            node_id: 2130968751,
                                            type: "PARENT_NODE",
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_PAIR_CUBE_NAME",
                                            context: "pair_voice_cube",
                                            data: {},
                                        },
                                        {
                                            node_id: 2130968678,
                                            type: "PARENT_NODE",
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_CURRENT_SOFTWARE_INFO",
                                            context: "check_software_version",
                                            data: {},
                                        },
                                        {
                                            node_id: 2130968835,
                                            type: "PARENT_NODE",
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_UPDATE_CUBE_NAME_SOFTWARE",
                                            context: "update_rc_software",
                                            data: {},
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
                {
                    node_id: 2130968822,
                    type: "PARENT_NODE",
                    string_id: "org.droidtv.ui.strings.R.string.MAIN_CHANNELS",
                    context: "channels",
                    data: {
                        nodes: [
                            {
                                node_id: 2130968677,
                                type: "PARENT_NODE",
                                context: "channel_installation",
                                data: {},
                            },
                            {
                                node_id: 2130968771,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_SATELLITE_INSTALLATION",
                                context: "satellite_installation",
                                data: {},
                            },
                            {
                                node_id: 2130968584,
                                type: "PARENT_NODE",
                                context: "channel_list_copy",
                                data: {
                                    nodes: [
                                        {
                                            node_id: 2130968586,
                                            type: "PARENT_NODE",
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_COPY_TO_USB",
                                            context: "channels_copy_to_usb",
                                            data: {},
                                        },
                                        {
                                            node_id: 2130968585,
                                            type: "PARENT_NODE",
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_COPY_TO_TV",
                                            context: "channels_copy_to_tv",
                                            data: {},
                                        },
                                        {
                                            node_id: 2130968583,
                                            type: "PARENT_NODE",
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_CURRENT_VERSION",
                                            context: "channels_current_version",
                                            data: {},
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                },
                {
                    node_id: 2130968618,
                    type: "PARENT_NODE",
                    string_id: "org.droidtv.ui.strings.R.string.MAIN_UPDATE_SOFTWARE",
                    context: "update_software",
                    data: {
                        nodes: [
                            {
                                node_id: 2130968773,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_SEARCH_FOR_UPDATES",
                                context: "search_for_update",
                                data: {
                                    nodes: [
                                        {
                                            node_id: 2130968836,
                                            type: "PARENT_NODE",
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_INTERNET_RECOMMENDED",
                                            context: "internet_updates",
                                            data: {},
                                        },
                                        {
                                            node_id: 2130968838,
                                            type: "PARENT_NODE",
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_USB",
                                            context: "local_updates",
                                            data: {
                                                nodes: [
                                                    {
                                                        node_id: 2130968743,
                                                        type: "PARENT_NODE",
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_LOCAL_UPDATES",
                                                        context: "local_updates",
                                                        data: {},
                                                    },
                                                    {
                                                        node_id: 2130968737,
                                                        type: "PARENT_NODE",
                                                        string_id: "org.droidtv.ui.strings.R.string.MAIN_IDENTIFY_TV",
                                                        context: "local_updates",
                                                        data: {},
                                                    },
                                                ],
                                            },
                                        },
                                        {
                                            node_id: 2130968744,
                                            type: "PARENT_NODE",
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_LOOK_FOR_OAD_UPDATES",
                                            context: "look_for_oad_updates",
                                            data: {},
                                        },
                                    ],
                                },
                            },
                            {
                                node_id: 2130968694,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_CURRENT_SOFTWARE_INFO",
                                context: "current_software_info",
                                data: {},
                            },
                            {
                                node_id: 2130968666,
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_AUTOMATIC_SOFTWARE_UPDATE",
                                context: "automatic_update",
                                data: {
                                    enums: [
                                        {
                                            enum_id: 0,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_OFF",
                                        },
                                        {
                                            enum_id: 1,
                                            string_id: "org.droidtv.ui.strings.R.string.MAIN_ON",
                                        },
                                    ],
                                },
                                type: "LIST_NODE",
                            },
                            {
                                node_id: 2130968656,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_ANNOUNCEMENT",
                                context: "announcement",
                                data: {},
                            },
                            {
                                node_id: 2130968840,
                                type: "PARENT_NODE",
                                string_id: "org.droidtv.ui.strings.R.string.MAIN_VIEW_SOFTWARE_UPDATE_HISTORY",
                                context: "view_software_update_history",
                                data: {},
                            },
                        ],
                    },
                },
            ],
        },
    },
};
exports.system = {
    notifyChange: "http",
    menulanguage: "German",
    name: "75PUS8808/12",
    country: "Germany",
    serialnumber_encrypted: "PF08XWGLPRs4MiGUcTcLMZNdJlvmDwKrFbVfCEE9vdU=\n",
    softwareversion_encrypted: "xMaxtMZN6UajvmHBkvrpBzlu0w1uJXA7/6MeHDiEYX3L/A5WOWODeK4UmN8tWmgx\n",
    model_encrypted: "Rz4X1wgCbHZsFKSIzHrP+zcKwxl/jD3BHyo1BaI+Mkc=\n",
    deviceid_encrypted: "0QzE4RA/TvKnBHAOnKCZSBi8VDGgqFpQJPzKn1FN4HU=\n",
    nettvversion: "8.0.2",
    epgsource: "no_epg",
    api_version: { Major: 6, Minor: 1, Patch: 0 },
    featuring: {
        jsonfeatures: {
            editfavorites: ["TVChannels", "SatChannels"],
            recordings: ["List", "Schedule", "Manage"],
            ambilight: ["LoungeLight", "Ambilight"],
            menuitems: ["Setup_Menu"],
            textentry: ["not_available"],
            applications: ["TV_Apps", "TV_Games", "TV_Settings"],
            pointer: ["not_available"],
            inputkey: ["key"],
            activities: ["intent"],
            channels: ["preset_string"],
            mappings: ["server_mapping"],
            aurora: ["available"],
        },
        systemfeatures: {
            tvtype: "consumer",
            content: ["dmr", "pvr"],
            tvsearch: "intent",
            pairing_type: "digest_auth_pairing",
            secured_transport: "true",
            companion_screen: "true",
        },
    },
    os_type: "MSAF_2019_P",
};
exports.request = {
    power: {
        power_on: {
            path: "apps/ChromeCast",
        },
    },
    get: {
        current_channel: {
            path: "activities/tv",
        },
        current_app: {
            path: "activities/current",
        },
        list_channels: {
            path: "channeldb/tv/channelLists/all",
        },
        list_favorite: {
            path: "channeldb/tv/favoritelLists/all",
        },
        powerstate: {
            path: "powerstate",
        },
        volume: {
            path: "audio/volume",
        },
    },
    post: {
        allow_power_on: {
            path: "menuitems/settings/update",
            body: {
                values: [
                    {
                        value: {
                            Nodeid: 2131230736,
                            data: {
                                selected_item: 1,
                            },
                        },
                    },
                ],
            },
        },
        ambilight_on: {
            path: "ambilight/power",
            body: {
                power: "On",
            },
        },
        ambilight_off: {
            path: "ambilight/power",
            body: {
                power: "Off",
            },
        },
        ambilight_video_immersive: {
            path: "ambilight/currentconfiguration",
            body: {
                styleName: "FOLLOW_VIDEO",
                isExpert: "false",
                menuSetting: "IMMERSIVE",
            },
        },
        ambilight_video_standard: {
            path: "ambilight/currentconfiguration",
            body: {
                styleName: "FOLLOW_VIDEO",
                isExpert: "false",
                menuSetting: "STANDARD",
            },
        },
        ambilight_video_natural: {
            path: "ambilight/currentconfiguration",
            body: {
                styleName: "FOLLOW_VIDEO",
                isExpert: "false",
                menuSetting: "NATURAL",
            },
        },
        ambilight_video_vivid: {
            path: "ambilight/currentconfiguration",
            body: {
                styleName: "FOLLOW_VIDEO",
                isExpert: "false",
                menuSetting: "VIVID",
            },
        },
        ambilight_video_game: {
            path: "ambilight/currentconfiguration",
            body: {
                styleName: "FOLLOW_VIDEO",
                isExpert: "false",
                menuSetting: "GAME",
            },
        },
        ambilight_video_comfort: {
            path: "ambilight/currentconfiguration",
            body: {
                styleName: "FOLLOW_VIDEO",
                isExpert: "false",
                menuSetting: "COMFORT",
            },
        },
        ambilight_video_relax: {
            path: "ambilight/currentconfiguration",
            body: {
                styleName: "FOLLOW_VIDEO",
                isExpert: "false",
                menuSetting: "RELAX",
            },
        },
        ambilight_audio_adapt_brightness: {
            path: "ambilight/currentconfiguration",
            body: {
                styleName: "FOLLOW_AUDIO",
                isExpert: "false",
                menuSetting: "ENERGY_ADAPTIVE_BRIGHTNESS",
            },
        },
        ambilight_audio_adapt_colors: {
            path: "ambilight/currentconfiguration",
            body: {
                styleName: "FOLLOW_AUDIO",
                isExpert: "false",
                menuSetting: "ENERGY_ADAPTIVE_COLORS",
            },
        },
        ambilight_audio_vu_meter: {
            path: "ambilight/currentconfiguration",
            body: {
                styleName: "FOLLOW_AUDIO",
                isExpert: "false",
                menuSetting: "VU_METER",
            },
        },
        ambilight_audio_spectrum: {
            path: "ambilight/currentconfiguration",
            body: {
                styleName: "FOLLOW_AUDIO",
                isExpert: "false",
                menuSetting: "SPECTRUM_ANALYZER",
            },
        },
        ambilight_audio_knight_rider_1: {
            path: "ambilight/currentconfiguration",
            body: {
                styleName: "FOLLOW_AUDIO",
                isExpert: "false",
                menuSetting: "KNIGHT_RIDER_CLOCKWISE",
            },
        },
        ambilight_audio_knight_rider_2: {
            path: "ambilight/currentconfiguration",
            body: {
                styleName: "FOLLOW_AUDIO",
                isExpert: "false",
                menuSetting: "KNIGHT_RIDER_ALTERNATING",
            },
        },
        ambilight_audio_flash: {
            path: "ambilight/currentconfiguration",
            body: {
                styleName: "FOLLOW_AUDIO",
                isExpert: "false",
                menuSetting: "RANDOM_PIXEL_FLASH",
            },
        },
        ambilight_audio_strobo: {
            path: "ambilight/currentconfiguration",
            body: {
                styleName: "FOLLOW_AUDIO",
                isExpert: "false",
                menuSetting: "STROBO",
            },
        },
        ambilight_audio_party: {
            path: "ambilight/currentconfiguration",
            body: {
                styleName: "FOLLOW_AUDIO",
                isExpert: "false",
                menuSetting: "PARTY",
            },
        },
        ambilight_audio_random: {
            path: "ambilight/currentconfiguration",
            body: {
                styleName: "FOLLOW_AUDIO",
                isExpert: "false",
                menuSetting: "MODE_RANDOM",
            },
        },
        ambilight_brightness: {
            path: "menuitems/settings/update",
            body: {
                values: [
                    {
                        value: {
                            Nodeid: 2131230769,
                            Controllable: "true",
                            Available: "true",
                            string_id: "Brightness",
                            data: {},
                        },
                    },
                ],
            },
        },
        ambilight_color: {
            path: "ambilight/currentconfiguration",
            body: {
                styleName: "FOLLOW_COLOR",
                isExpert: "true",
                algorithm: "MANUAL_HUE",
                colorSettings: {
                    color: {},
                    colorDelta: {
                        hue: 0,
                        saturation: 0,
                        brightness: 0,
                    },
                    speed: 255,
                },
            },
        },
        ambihue_status: {
            path: "menuitems/settings/current",
            body: {
                nodes: [
                    {
                        nodeid: 2131230774,
                    },
                ],
            },
        },
        ambihue_on: {
            path: "menuitems/settings/update",
            body: {
                values: [
                    {
                        value: {
                            Nodeid: 2131230774,
                            Controllable: "true",
                            Available: "true",
                            data: {
                                value: "true",
                            },
                        },
                    },
                ],
            },
        },
        ambihue_off: {
            path: "menuitems/settings/update",
            body: {
                values: [
                    {
                        value: {
                            Nodeid: 2131230774,
                            Controllable: "true",
                            Available: "true",
                            data: {
                                value: "false",
                            },
                        },
                    },
                ],
            },
        },
        standby: {
            path: "input/key",
            body: {
                key: "Standby",
            },
        },
        mute: {
            path: "input/key",
            body: {
                key: "Mute",
            },
        },
        volume_up: {
            path: "input/key",
            body: {
                key: "VolumeUp",
            },
        },
        volume_down: {
            path: "input/key",
            body: {
                key: "VolumeDown",
            },
        },
        channel_up: {
            path: "input/key",
            body: {
                key: "ChannelStepUp",
            },
        },
        channel_down: {
            path: "input/key",
            body: {
                key: "ChannelStepDown",
            },
        },
        play: {
            path: "input/key",
            body: {
                key: "Play",
            },
        },
        pause: {
            path: "input/key",
            body: {
                key: "Pause",
            },
        },
        play_pause: {
            path: "input/key",
            body: {
                key: "PlayPause",
            },
        },
        stop: {
            path: "input/key",
            body: {
                key: "Stop",
            },
        },
        fast_forward: {
            path: "input/key",
            body: {
                key: "FastForward",
            },
        },
        rewind: {
            path: "input/key",
            body: {
                key: "Rewind",
            },
        },
        next: {
            path: "input/key",
            body: {
                key: "Next",
            },
        },
        previous: {
            path: "input/key",
            body: {
                key: "Previous",
            },
        },
        cursor_up: {
            path: "input/key",
            body: {
                key: "CursorUp",
            },
        },
        cursor_down: {
            path: "input/key",
            body: {
                key: "CursorDown",
            },
        },
        cursor_left: {
            path: "input/key",
            body: {
                key: "CursorLeft",
            },
        },
        cursor_right: {
            path: "input/key",
            body: {
                key: "CursorRight",
            },
        },
        confirm: {
            path: "input/key",
            body: {
                key: "Confirm",
            },
        },
        back: {
            path: "input/key",
            body: {
                key: "Back",
            },
        },
        find: {
            path: "input/key",
            body: {
                key: "Find",
            },
        },
        red: {
            path: "input/key",
            body: {
                key: "RedColour",
            },
        },
        green: {
            path: "input/key",
            body: {
                key: "GreenColour",
            },
        },
        yellow: {
            path: "input/key",
            body: {
                key: "YellowColour",
            },
        },
        blue: {
            path: "input/key",
            body: {
                key: "BlueColour",
            },
        },
        home: {
            path: "input/key",
            body: {
                key: "Home",
            },
        },
        options: {
            path: "input/key",
            body: {
                key: "Options",
            },
        },
        dot: {
            path: "input/key",
            body: {
                key: "Dot",
            },
        },
        digit_0: {
            path: "input/key",
            body: {
                key: "Digit0",
            },
        },
        digit_1: {
            path: "input/key",
            body: {
                key: "Digit1",
            },
        },
        digit_2: {
            path: "input/key",
            body: {
                key: "Digit2",
            },
        },
        digit_3: {
            path: "input/key",
            body: {
                key: "Digit3",
            },
        },
        digit_4: {
            path: "input/key",
            body: {
                key: "Digit4",
            },
        },
        digit_5: {
            path: "input/key",
            body: {
                key: "Digit5",
            },
        },
        digit_6: {
            path: "input/key",
            body: {
                key: "Digit6",
            },
        },
        digit_7: {
            path: "input/key",
            body: {
                key: "Digit7",
            },
        },
        digit_8: {
            path: "input/key",
            body: {
                key: "Digit8",
            },
        },
        digit_9: {
            path: "input/key",
            body: {
                key: "Digit9",
            },
        },
        info: {
            path: "input/key",
            body: {
                key: "Info",
            },
        },
        adjust: {
            path: "input/key",
            body: {
                key: "Adjust",
            },
        },
        watch_tv: {
            path: "input/key",
            body: {
                key: "WatchTV",
            },
        },
        viewmode: {
            path: "input/key",
            body: {
                key: "Viewmode",
            },
        },
        teletext: {
            path: "input/key",
            body: {
                key: "Teletext",
            },
        },
        subtitle: {
            path: "input/key",
            body: {
                key: "Subtitle",
            },
        },
        source: {
            path: "input/key",
            body: {
                key: "Source",
            },
        },
        ambilight_onoff: {
            path: "input/key",
            body: {
                key: "AmbilightOnOff",
            },
        },
        record: {
            path: "input/key",
            body: {
                key: "Record",
            },
        },
        online: {
            path: "input/key",
            body: {
                key: "Online",
            },
        },
        launch_app: {
            path: "activities/launch",
        },
        set_channel: {
            path: "activities/tv",
        },
        update_settings: {
            path: "menuitems/settings/update",
        },
    },
};
exports.net = {
    net: [
        { id: "wifi0", mac: "e0:d8:c4:d1:72:9a", type: "Wifi", "wake-on-lan": "Disabled" },
        {
            id: "eth0",
            mac: "0c:ca:fb:37:02:15",
            type: "Ethernet",
            ip: "2001:9e8:d6f9:c300:1032:94de:76ae:6e3e",
            "wake-on-lan": "Enabled",
        },
    ],
};
exports.sys = {
    sys: {
        notifyChange: "http",
        menulanguage: "German",
        name: "75PUS8808/12",
        country: "Germany",
        serialnumber_encrypted: "dfCzMx3neddjb33Op5jjPLH333ESV5iE/r1IFOz8b/0=\n",
        softwareversion_encrypted: "8GGKztdNP6BZP/jGse78Em4hw/cQFSiZ/OTaACwbQKUAuQuQNdYpLtkmu+x17uGz\n",
        model_encrypted: "aLZwETHkNzu2pFl8u0YQz5fx4/pMuGmiQQ/ceCv9VqM=\n",
        deviceid_encrypted: "mmKz11Hn2SwdnjpsVcCTBl5ilG9f75pGFK9/BkoC4tI=\n",
        nettvversion: "8.0.2",
        epgsource: "no_epg",
        api_version: { Major: 6, Minor: 1, Patch: 0 },
        featuring: {
            jsonfeatures: {
                editfavorites: ["TVChannels", "SatChannels"],
                recordings: ["List", "Schedule", "Manage"],
                ambilight: ["LoungeLight", "Ambilight"],
                menuitems: ["Setup_Menu"],
                textentry: ["not_available"],
                applications: ["TV_Apps", "TV_Games", "TV_Settings"],
                pointer: ["not_available"],
                inputkey: ["key"],
                activities: ["intent"],
                channels: ["preset_string"],
                mappings: ["server_mapping"],
                aurora: ["available"],
            },
            systemfeatures: {
                tvtype: "consumer",
                content: ["dmr", "pvr"],
                tvsearch: "intent",
                pairing_type: "digest_auth_pairing",
                secured_transport: "true",
                companion_screen: "true",
            },
        },
        os_type: "MSAF_2019_P",
    },
};
