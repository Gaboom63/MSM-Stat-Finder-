const monsters = [
    {
        name: "Mammott",
        level: 1,
        img: "Potbelly.png",
        food_id: "natural_SD" // Natural Single / Double's 
    },
        {
        name: "Mammott",
        level: 1,
        img: "Toe Jammer.png",
        food_id: "natural_SD" // Natural Single / Double's 
    }
]

const natural_monsters = [
    {
        level: 1,
        feeding: 5,
        needed_food: 20
    },
    {
        level: 2,
        feeding: 10,
        needed_food: 40
    },
    {
        level: 3,
        feeding: 20,
        needed_food: 90,
    },
    {
        level: 4,
        feeding: 40,
        needed_food: 160,
    },
    {
        level: 5,
        feeding: 80,
        needed_food: 320,
    },
    {
        level: 6,
        feeding: 160,
        needed_food: 640,
    },
    {
        level: 7,
        feeding: 320,
        needed_food: 1280,
    },
    {
        level: 8,
        feeding: 640,
        needed_food: 2560,
    },
    {
        level: 9,
        feeding: 1280,
        needed_food: 5120,
    },
    {
        level: 10,
        feeding: 2560,
        needed_food: 10240,
    },
    {
        level: 11,
        feeding: 5120,
        needed_food: 20480,
    },
    {
        level: 12,
        feeding: 10240,
        needed_food: 40960,
    },
    {
        level: 13,
        feeding: 20480,
        needed_food: 81920,
    },
    {
        level: 14,
        feeding: 40960,
        needed_food: 163840,
    },
    {
        level: 15,
        feeding: 61440,
        needed_food: 245760,
    },
    {
        level: 16,
        feeding: 92160,
        needed_food: 368640,
    },
    {
        level: 17,
        feeding: 138240,
        needed_food: 552960,
    },
    {
        level: 18,
        feeding: 207360,
        needed_food: 829440,
    },
    {
        level: 19,
        feeding: 311040,
        needed_food: 1244160,
    },
    {
        level: 20,
        feeding: 0,
        needed_food: 0,
    }
]

const nfmsd_monsters = [ // Natural Doubles + Triples, Fire Magical Singles + Doubles, Common and Rare Seasonals, Common and Rare non-Dream Element Mythicals (So just G'joob and those ones)
    { level: 1, feeding: 10, needed_food: 40 },
    { level: 2, feeding: 20, needed_food: 80 },
    { level: 3, feeding: 40, needed_food: 160 },
    { level: 4, feeding: 80, needed_food: 320 },
    { level: 5, feeding: 160, needed_food: 640 },
    { level: 6, feeding: 320, needed_food: 1280 },
    { level: 7, feeding: 640, needed_food: 2560 },
    { level: 8, feeding: 1280, needed_food: 5120 },
    { level: 9, feeding: 2560, needed_food: 10240 },
    { level: 10, feeding: 5120, needed_food: 20480 },
    { level: 11, feeding: 10240, needed_food: 40960 },
    { level: 12, feeding: 20480, needed_food: 81920 },
    { level: 13, feeding: 40960, needed_food: 163840 },
    { level: 14, feeding: 81920, needed_food: 327680 },
    { level: 15, feeding: 122880, needed_food: 491520 },
    { level: 16, feeding: 184320, needed_food: 737280 },
    { level: 17, feeding: 276480, needed_food: 1105920 },
    { level: 18, feeding: 414720, needed_food: 1658880 },
    { level: 19, feeding: 622080, needed_food: 2488320 },
    { level: 20, feeding: null, needed_food: null }, // Max level (no more feeding past this)
]

const ndfmc_monsters = [ // Quad Natural, Dipsters, FIre and Magical Triples and Catalizszt
    { level: 1, feeding: 15, needed_food: 60 },
    { level: 2, feeding: 30, needed_food: 120 },
    { level: 3, feeding: 60, needed_food: 240 },
    { level: 4, feeding: 120, needed_food: 480 },
    { level: 5, feeding: 240, needed_food: 960 },
    { level: 6, feeding: 480, needed_food: 1920 },
    { level: 7, feeding: 960, needed_food: 3840 },
    { level: 8, feeding: 1920, needed_food: 7680 },
    { level: 9, feeding: 3840, needed_food: 15360 },
    { level: 10, feeding: 7680, needed_food: 30720 },
    { level: 11, feeding: 15360, needed_food: 61440 },
    { level: 12, feeding: 30720, needed_food: 122880 },
    { level: 13, feeding: 61440, needed_food: 245760 },
    { level: 14, feeding: 122880, needed_food: 491520 },
    { level: 15, feeding: 184320, needed_food: 737280 },
    { level: 16, feeding: 276480, needed_food: 1105920 },
    { level: 17, feeding: 414720, needed_food: 1658880 },
    { level: 18, feeding: 622080, needed_food: 2488320 },
    { level: 19, feeding: 933120, needed_food: 3732480 },
    { level: 20, feeding: null, needed_food: null }, // Max level, no feeding past this
];

const eswfmsmd_monsters = [ //Ethereal Singles, Shugafam, Wubbox + Rare. Fire, Magical Quads, Epic Sesonals, Epic Mythicals, and Dreamythicals
    { level: 1, feeding: 20, needed_food: 80 },
    { level: 2, feeding: 40, needed_food: 160 },
    { level: 3, feeding: 80, needed_food: 320 },
    { level: 4, feeding: 160, needed_food: 640 },
    { level: 5, feeding: 320, needed_food: 1280 },
    { level: 6, feeding: 640, needed_food: 2560 },
    { level: 7, feeding: 1280, needed_food: 5120 },
    { level: 8, feeding: 2560, needed_food: 10240 },
    { level: 9, feeding: 5120, needed_food: 20480 },
    { level: 10, feeding: 10240, needed_food: 40960 },
    { level: 11, feeding: 20480, needed_food: 81920 },
    { level: 12, feeding: 40960, needed_food: 163840 },
    { level: 13, feeding: 81920, needed_food: 327680 },
    { level: 14, feeding: 163840, needed_food: 655360 },
    { level: 15, feeding: 245760, needed_food: 983040 },
    { level: 16, feeding: 368640, needed_food: 1474560 },
    { level: 17, feeding: 552960, needed_food: 2211840 },
    { level: 18, feeding: 829440, needed_food: 3317760 },
    { level: 19, feeding: 1244160, needed_food: 4976640 },
    { level: 20, feeding: null, needed_food: null }, // Max level, no more feeding past this
];

const paironormal_monsters = [
    { level: 1, feeding: 22, needed_food: 88 },
    { level: 2, feeding: 44, needed_food: 176 },
    { level: 3, feeding: 88, needed_food: 352 },
    { level: 4, feeding: 176, needed_food: 704 },
    { level: 5, feeding: 352, needed_food: 1408 },
    { level: 6, feeding: 704, needed_food: 2816 },
    { level: 7, feeding: 1408, needed_food: 5632 },
    { level: 8, feeding: 2816, needed_food: 11264 },
    { level: 9, feeding: 5632, needed_food: 22528 },
    { level: 10, feeding: 11264, needed_food: 45056 },
    { level: 11, feeding: 22528, needed_food: 90112 },
    { level: 12, feeding: 45056, needed_food: 180224 },
    { level: 13, feeding: 90112, needed_food: 360448 },
    { level: 14, feeding: 180224, needed_food: 720896 },
    { level: 15, feeding: 270336, needed_food: 1081344 },
    { level: 16, feeding: 405504, needed_food: 1622016 },
    { level: 17, feeding: 608256, needed_food: 2433024 },
    { level: 18, feeding: 912384, needed_food: 3649536 },
    { level: 19, feeding: 1368576, needed_food: 5474304 },
    { level: 20, feeding: null, needed_food: null }, // Max level, no more feeding past this
];

// Natural and Fire Quints, Werdos And Epic Wubbox
const nfww = [
    { level: 1, feeding: 25, needed_food: 100 },
    { level: 2, feeding: 50, needed_food: 200 },
    { level: 3, feeding: 100, needed_food: 400 },
    { level: 4, feeding: 200, needed_food: 800 },
    { level: 5, feeding: 400, needed_food: 1600 },
    { level: 6, feeding: 800, needed_food: 3200 },
    { level: 7, feeding: 1600, needed_food: 6400 },
    { level: 8, feeding: 3200, needed_food: 12800 },
    { level: 9, feeding: 6400, needed_food: 25600 },
    { level: 10, feeding: 12800, needed_food: 51200 },
    { level: 11, feeding: 25600, needed_food: 102400 },
    { level: 12, feeding: 51200, needed_food: 204800 },
    { level: 13, feeding: 102400, needed_food: 409600 },
    { level: 14, feeding: 204800, needed_food: 819200 },
    { level: 15, feeding: 307200, needed_food: 1228800 },
    { level: 16, feeding: 460800, needed_food: 1843200 },
    { level: 17, feeding: 691200, needed_food: 2764800 },
    { level: 18, feeding: 1036800, needed_food: 4147200 },
    { level: 19, feeding: 1555200, needed_food: 6220800 },
    { level: 20, feeding: null, needed_food: null }, // Max level, no feeding past this
];

// Double Element Ethereals 
const double_ethereal_monsters = [
    { level: 1, feeding: 40, needed_food: 160 },
    { level: 2, feeding: 80, needed_food: 320 },
    { level: 3, feeding: 160, needed_food: 640 },
    { level: 4, feeding: 320, needed_food: 1280 },
    { level: 5, feeding: 640, needed_food: 2560 },
    { level: 6, feeding: 1280, needed_food: 5120 },
    { level: 7, feeding: 2560, needed_food: 10240 },
    { level: 8, feeding: 5120, needed_food: 20480 },
    { level: 9, feeding: 10240, needed_food: 40960 },
    { level: 10, feeding: 20480, needed_food: 81920 },
    { level: 11, feeding: 40960, needed_food: 163840 },
    { level: 12, feeding: 81920, needed_food: 327680 },
    { level: 13, feeding: 163840, needed_food: 655360 },
    { level: 14, feeding: 327680, needed_food: 1310720 },
    { level: 15, feeding: 491520, needed_food: 1966080 },
    { level: 16, feeding: 737280, needed_food: 2949120 },
    { level: 17, feeding: 1105920, needed_food: 4423680 },
    { level: 18, feeding: 1658880, needed_food: 6635520 },
    { level: 19, feeding: 2488320, needed_food: 9953280 },
    { level: 20, feeding: null, needed_food: null }, // Max level, no more feeding
];

const triple_ethereal_monsters = [
    { level: 1, feeding: 60, needed_food: 240 },
    { level: 2, feeding: 120, needed_food: 480 },
    { level: 3, feeding: 240, needed_food: 960 },
    { level: 4, feeding: 480, needed_food: 1920 },
    { level: 5, feeding: 960, needed_food: 3840 },
    { level: 6, feeding: 1920, needed_food: 7680 },
    { level: 7, feeding: 3840, needed_food: 15360 },
    { level: 8, feeding: 7680, needed_food: 30720 },
    { level: 9, feeding: 15360, needed_food: 61440 },
    { level: 10, feeding: 30720, needed_food: 122880 },
    { level: 11, feeding: 61440, needed_food: 245760 },
    { level: 12, feeding: 122880, needed_food: 491520 },
    { level: 13, feeding: 245760, needed_food: 983040 },
    { level: 14, feeding: 491520, needed_food: 1966080 },
    { level: 15, feeding: 983040, needed_food: 3932160 },
    { level: 16, feeding: 1474560, needed_food: 5898240 },
    { level: 17, feeding: 2211840, needed_food: 8847360 },
    { level: 18, feeding: 3317760, needed_food: 13271040 },
    { level: 19, feeding: 4976640, needed_food: 19906560 },
    { level: 20, feeding: null, needed_food: null }, // Max level, no feeding past this
];

const quad_ethereal_monsters = [
    { level: 1, feeding: 80, needed_food: 320 },
    { level: 2, feeding: 160, needed_food: 640 },
    { level: 3, feeding: 320, needed_food: 1280 },
    { level: 4, feeding: 640, needed_food: 2560 },
    { level: 5, feeding: 1280, needed_food: 5120 },
    { level: 6, feeding: 2560, needed_food: 10240 },
    { level: 7, feeding: 5120, needed_food: 20480 },
    { level: 8, feeding: 10240, needed_food: 40960 },
    { level: 9, feeding: 20480, needed_food: 81920 },
    { level: 10, feeding: 40960, needed_food: 163840 },
    { level: 11, feeding: 81920, needed_food: 327680 },
    { level: 12, feeding: 163840, needed_food: 655360 },
    { level: 13, feeding: 327680, needed_food: 1310720 },
    { level: 14, feeding: 655360, needed_food: 2621440 },
    { level: 15, feeding: 1310720, needed_food: 5242880 },
    { level: 16, feeding: 1966080, needed_food: 7864320 },
    { level: 17, feeding: 2949120, needed_food: 11796480 },
    { level: 18, feeding: 4423680, needed_food: 17694720 },
    { level: 19, feeding: 6635520, needed_food: 26542080 },
    { level: 20, feeding: null, needed_food: null }, // Max level, no feeding past this
];

const primordials = [
    { level: 1, feeding: 100, needed_food: 400 },
    { level: 2, feeding: 200, needed_food: 800 },
    { level: 3, feeding: 400, needed_food: 1600 },
    { level: 4, feeding: 800, needed_food: 3200 },
    { level: 5, feeding: 1600, needed_food: 6400 },
    { level: 6, feeding: 3200, needed_food: 12800 },
    { level: 7, feeding: 6400, needed_food: 25600 },
    { level: 8, feeding: 12800, needed_food: 51200 },
    { level: 9, feeding: 25600, needed_food: 102400 },
    { level: 10, feeding: 51200, needed_food: 204800 },
    { level: 11, feeding: 102400, needed_food: 409600 },
    { level: 12, feeding: 204800, needed_food: 819200 },
    { level: 13, feeding: 409600, needed_food: 1638400 },
    { level: 14, feeding: 809200, needed_food: 3236800 },
    { level: 15, feeding: 1213800, needed_food: 4855200 },
    { level: 16, feeding: 1820700, needed_food: 7282800 },
    { level: 17, feeding: 2731050, needed_food: 10924200 },
    { level: 18, feeding: 4096575, needed_food: 16386300 },
    { level: 19, feeding: 6144863, needed_food: 24579452 },
    { level: 20, feeding: null, needed_food: null }, // Max level, no feeding past this
];

const bemeebeth = [
    { level: 1, feeding: 111, needed_food: 444 },
    { level: 2, feeding: 222, needed_food: 888 },
    { level: 3, feeding: 444, needed_food: 1776 },
    { level: 4, feeding: 888, needed_food: 2664 },
    { level: 5, feeding: 1776, needed_food: 7104 },
    { level: 6, feeding: 3552, needed_food: 14208 },
    { level: 7, feeding: 7104, needed_food: 28416 },
    { level: 8, feeding: 14208, needed_food: 56832 },
    { level: 9, feeding: 28416, needed_food: 113664 },
    { level: 10, feeding: 56832, needed_food: 227328 },
    { level: 11, feeding: 113664, needed_food: 454656 },
    { level: 12, feeding: 227328, needed_food: 909312 },
    { level: 13, feeding: 454656, needed_food: 1818624 },
    { level: 14, feeding: 909312, needed_food: 3637248 },
    { level: 15, feeding: 1363968, needed_food: 5455872 },
    { level: 16, feeding: 2045952, needed_food: 8183808 },
    { level: 17, feeding: 3068928, needed_food: 12275712 },
    { level: 18, feeding: 4603392, needed_food: 18413568 },
    { level: 19, feeding: 6905088, needed_food: 27620352 },
    { level: 20, feeding: null, needed_food: null }, // Max level, no feeding past this
];
;
const monsterImgContainer = document.getElementById("Monster_Images");

// Function to load all monster images into the div
function renderMonsters(monsters, rarity) {
    monsterImgContainer.innerHTML = ""; // clear any old ones

    monsters.forEach(monster => {
        const img = document.createElement("img");
        if (rarity === "common") {
            img.src = `Images/bm/${monster.img}`;
        } else if (rarity === "rare") {
            img.src = `Images/bm/Rare ${monster.img}`;
        } else if (rarity === "epic") {
            img.src = `Images/bm/Epic ${monster.img}`;
        } else {
            alert("Error: No Rarity Detected. (This Should Never Occur)");
        }
        img.alt = monster.name;
        img.style.width = "300px";  // set any size you want
        img.style.height = "auto";
        img.title = monster.name; // tooltip on hover

        monsterImgContainer.appendChild(img);
    });
}

renderMonsters(monsters, "common");


/** Layout For monsters List. 
 *  
    {
        name: "",
        level: 1,
        commonImg: "",
        rareImg: "",
        epicImg: "",  
        food_id: "" // Natural Single / Double's 
    }

    {
        level: ,
        feeding: ,
        needed_food: , 
    }
*/
