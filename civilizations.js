const civilizations = [
    {
        "id": 1,
        "url": "https://static.wikia.nocookie.net/ageofempires/images/0/0c/CivIcon-Aztecs.png",
        "unit_types": ["https://static.wikia.nocookie.net/ageofempires/images/3/32/JaguarWarriorIcon-DE.png"]
    },
    {
        "id": 2,
        "url": "https://static.wikia.nocookie.net/ageofempires/images/a/ae/CivIcon-Britons.png",
        "unit_types": ["https://static.wikia.nocookie.net/ageofempires/images/8/8c/LongbowmanIcon-DE.png"]
    },
    {
        "id": 3,
        "url": "https://static.wikia.nocookie.net/ageofempires/images/2/27/CivIcon-Byzantines.png",
        "unit_types": ["https://static.wikia.nocookie.net/ageofempires/images/b/bd/CataphractIcon-DE.png"]
    },
    {
        "id": 4,
        "url": "https://static.wikia.nocookie.net/ageofempires/images/5/59/CivIcon-Celts.png",
        "unit_types": ["https://static.wikia.nocookie.net/ageofempires/images/5/55/WoadRaiderIcon-DE.png"]
    },
    {
        "id": 5,
        "url": "https://static.wikia.nocookie.net/ageofempires/images/c/cc/CivIcon-Chinese.png",
        "unit_types": ["https://static.wikia.nocookie.net/ageofempires/images/7/77/ChukoNuIcon-DE.png"]
    },
    {
        "id": 6,
        "url": "https://static.wikia.nocookie.net/ageofempires/images/1/1b/CivIcon-Franks.png",
        "unit_types": ["https://static.wikia.nocookie.net/ageofempires/images/d/d3/ThrowingAxemanIcon-DE.png"]
    },
    {
        "id": 7,
        "url": "https://static.wikia.nocookie.net/ageofempires/images/2/24/CivIcon-Goths.png",
        "unit_types": ["https://static.wikia.nocookie.net/ageofempires/images/7/79/HuskarlIcon-DE.png"]
    },
    {
        "id": 8,
        "url": "https://static.wikia.nocookie.net/ageofempires/images/1/17/CivIcon-Huns.png",
        "unit_types": ["https://static.wikia.nocookie.net/ageofempires/images/9/9e/TarkanIcon-DE.png"]
    },
    {
        "id": 9,
        "url": "https://static.wikia.nocookie.net/ageofempires/images/9/9a/CivIcon-Japanese.png",
        "unit_types": ["https://static.wikia.nocookie.net/ageofempires/images/1/17/SamuraiIcon-DE.png"]
    },
    {
        "id": 10,
        "url": "https://static.wikia.nocookie.net/ageofempires/images/7/73/CivIcon-Koreans.png",
        "unit_types": ["https://static.wikia.nocookie.net/ageofempires/images/4/4b/WarWagonIcon-DE.png", "https://static.wikia.nocookie.net/ageofempires/images/d/de/TurtleShipIcon-DE.png"]
    },
    {
        "id": 11,
        "url": "https://static.wikia.nocookie.net/ageofempires/images/0/05/CivIcon-Mayans.png",
        "unit_types": ["https://static.wikia.nocookie.net/ageofempires/images/f/fd/PlumedArcherIcon-DE.png"]
    },
    {
        "id": 12,
        "url": "https://static.wikia.nocookie.net/ageofempires/images/1/10/CivIcon-Mongols.png",
        "unit_types": ["https://static.wikia.nocookie.net/ageofempires/images/3/3c/MangudaiIcon-DE.png"]
    },
    {
        "id": 13,
        "url": "https://static.wikia.nocookie.net/ageofempires/images/a/ad/CivIcon-Persians.png",
        "unit_types": ["https://static.wikia.nocookie.net/ageofempires/images/a/ab/WarElephantIcon-DE.png"]
    },
    {
        "id": 14,
        "url": "https://static.wikia.nocookie.net/ageofempires/images/5/59/CivIcon-Saracens.png",
        "unit_types": ["https://static.wikia.nocookie.net/ageofempires/images/a/ab/MamelukeIcon-DE.png"]
    },
    {
        "id": 15,
        "url": "https://static.wikia.nocookie.net/ageofempires/images/0/0a/CivIcon-Spanish.png",
        "unit_types": ["https://static.wikia.nocookie.net/ageofempires/images/9/9e/ConquistadorIcon-DE.png", "https://static.wikia.nocookie.net/ageofempires/images/a/aa/MissionaryIcon-DE.png"]
    },
    {
        "id": 16,
        "url": "https://static.wikia.nocookie.net/ageofempires/images/3/3f/CivIcon-Teutons.png",
        "unit_types": ["https://static.wikia.nocookie.net/ageofempires/images/9/95/TeutonicKnightIcon-DE.png"]
    },
    {
        "id": 17,
        "url": "https://static.wikia.nocookie.net/ageofempires/images/1/1c/CivIcon-Turks.png",
        "unit_types": ["https://static.wikia.nocookie.net/ageofempires/images/e/ed/JanissaryIcon-DE.png"]
    },
    {
        "id": 18,
        "url": "https://static.wikia.nocookie.net/ageofempires/images/c/c9/CivIcon-Vikings.png",
        "unit_types": ["https://static.wikia.nocookie.net/ageofempires/images/0/0d/BerserkIcon-DE.png", "https://static.wikia.nocookie.net/ageofempires/images/7/79/LongboatIcon-DE.png"]
    },
    {
        "id": 19,
        "url": "https://static.wikia.nocookie.net/ageofempires/images/7/71/CivIcon-Berbers.png",
        "unit_types": ["https://static.wikia.nocookie.net/ageofempires/images/f/f4/CamelArcherIcon-DE.png", "https://static.wikia.nocookie.net/ageofempires/images/f/fa/GenitourIcon-DE.png"]
    },
    {
        "id": 20,
        "url": "https://static.wikia.nocookie.net/ageofempires/images/7/79/CivIcon-Burmese.png",
        "unit_types": ["https://static.wikia.nocookie.net/ageofempires/images/6/6c/Arambaiicon-DE.png"]
    },
    {
        "id": 21,
        "url": "https://static.wikia.nocookie.net/ageofempires/images/c/cb/CivIcon-Ethiopians.png",
        "unit_types": ["https://static.wikia.nocookie.net/ageofempires/images/0/03/Shotelwarrioricon-DE.png"]
    },
    {
        "id": 23,
        "url": "https://static.wikia.nocookie.net/ageofempires/images/5/5e/CivIcon-Incas.png",
        "unit_types": ["https://static.wikia.nocookie.net/ageofempires/images/8/85/KamayukIcon-DE.png", "https://static.wikia.nocookie.net/ageofempires/images/8/89/SlingerIcon-DE.png"]
    },
    {
        "id": 24,
        "url": "https://static.wikia.nocookie.net/ageofempires/images/8/8b/CivIcon-Indians.png",
        "unit_types": [""]
    },
    {
        "id": 25,
        "url": "https://static.wikia.nocookie.net/ageofempires/images/e/e1/CivIcon-Italians.png",
        "unit_types": ["https://static.wikia.nocookie.net/ageofempires/images/e/ea/GenoeseCrossbowmanIcon-DE.png", "https://static.wikia.nocookie.net/ageofempires/images/1/1c/CondottieroIcon-DE.png"]
    },
    {
        "id": 27,
        "url": "https://static.wikia.nocookie.net/ageofempires/images/e/ec/CivIcon-Khmer.png",
        "unit_types": ["https://static.wikia.nocookie.net/ageofempires/images/7/7e/Ballistaelephanticon-DE.png"]
    },
    {
        "id": 28,
        "url": "https://static.wikia.nocookie.net/ageofempires/images/6/68/CivIcon-Magyars.png",
        "unit_types": ["https://static.wikia.nocookie.net/ageofempires/images/5/5b/MagyarHuszarIcon-DE.png"]
    },
    {
        "id": 29,
        "url": "https://static.wikia.nocookie.net/ageofempires/images/8/80/CivIcon-Malians.png",
        "unit_types": ["https://static.wikia.nocookie.net/ageofempires/images/0/0f/GbetoIcon-DE.png"]
    },
    {
        "id": 30,
        "url": "https://static.wikia.nocookie.net/ageofempires/images/6/60/CivIcon-Portuguese.png",
        "unit_types": ["https://static.wikia.nocookie.net/ageofempires/images/c/c3/OrganGunIcon-DE.png", "https://static.wikia.nocookie.net/ageofempires/images/9/90/CaravelIcon-DE.png"]
    },
    {
        "id": 31,
        "url": "https://static.wikia.nocookie.net/ageofempires/images/1/12/CivIcon-Slavs.png",
        "unit_types": ["https://static.wikia.nocookie.net/ageofempires/images/b/bf/BoyarIcon-DE.png"]
    },
    {
        "id": 32,
        "url": "https://static.wikia.nocookie.net/ageofempires/images/0/07/CivIcon-Vietnamese.png",
        "unit_types": ["https://static.wikia.nocookie.net/ageofempires/images/c/c4/Rattanarchericon-DE.png", "https://static.wikia.nocookie.net/ageofempires/images/e/ee/Imperialskirmishericon-DE.png"]
    }
];

export default civilizations;