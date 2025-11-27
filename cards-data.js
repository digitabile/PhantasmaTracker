// Pokemon Card Collection - Multi-Set Data
// Supports multiple Pokemon TCG sets

const CARD_SETS = {
    "phantasmal-flames": {
        name: "Phantasmal Flames",
        code: "ME2",
        totalCards: 130,
        releaseDate: "November 14, 2025",
        cards: [
    {
        "number": "001",
        "name": "Oddish",
        "type": "Grass",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/1.png"
    },
    {
        "number": "002",
        "name": "Gloom",
        "type": "Grass",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/2.png"
    },
    {
        "number": "003",
        "name": "Vileplume",
        "type": "Grass",
        "rarity": "Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/3.png"
    },
    {
        "number": "004",
        "name": "Mega Heracross ex",
        "type": "Grass",
        "rarity": "Double Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/4.png"
    },
    {
        "number": "005",
        "name": "Lotad",
        "type": "Grass",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/5.png"
    },
    {
        "number": "006",
        "name": "Lombre",
        "type": "Grass",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/6.png"
    },
    {
        "number": "007",
        "name": "Ludicolo",
        "type": "Grass",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/7.png"
    },
    {
        "number": "008",
        "name": "Genesect",
        "type": "Grass",
        "rarity": "Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/8.png"
    },
    {
        "number": "009",
        "name": "Nymble",
        "type": "Grass",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/9.png"
    },
    {
        "number": "010",
        "name": "Lokix",
        "type": "Grass",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/10.png"
    },
    {
        "number": "011",
        "name": "Charmander",
        "type": "Fire",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/11.png"
    },
    {
        "number": "012",
        "name": "Charmeleon",
        "type": "Fire",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/12.png"
    },
    {
        "number": "013",
        "name": "Mega Charizard X ex",
        "type": "Fire",
        "rarity": "Double Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/13.png"
    },
    {
        "number": "014",
        "name": "Moltres",
        "type": "Fire",
        "rarity": "Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/14.png"
    },
    {
        "number": "015",
        "name": "Darumaka",
        "type": "Fire",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/15.png"
    },
    {
        "number": "016",
        "name": "Darmanitan",
        "type": "Fire",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/16.png"
    },
    {
        "number": "017",
        "name": "Reshiram",
        "type": "Fire",
        "rarity": "Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/17.png"
    },
    {
        "number": "018",
        "name": "Oricorio ex",
        "type": "Fire",
        "rarity": "Double Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/18.png"
    },
    {
        "number": "019",
        "name": "Charcadet",
        "type": "Fire",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/19.png"
    },
    {
        "number": "020",
        "name": "Ceruledge",
        "type": "Fire",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/20.png"
    },
    {
        "number": "021",
        "name": "Seel",
        "type": "Water",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/21.png"
    },
    {
        "number": "022",
        "name": "Dewgong",
        "type": "Water",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/22.png"
    },
    {
        "number": "023",
        "name": "Swinub",
        "type": "Water",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/23.png"
    },
    {
        "number": "024",
        "name": "Piloswine",
        "type": "Water",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/24.png"
    },
    {
        "number": "025",
        "name": "Mamoswine",
        "type": "Water",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/25.png"
    },
    {
        "number": "026",
        "name": "Suicune",
        "type": "Water",
        "rarity": "Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/26.png"
    },
    {
        "number": "027",
        "name": "Piplup",
        "type": "Water",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/27.png"
    },
    {
        "number": "028",
        "name": "Prinplup",
        "type": "Water",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/28.png"
    },
    {
        "number": "029",
        "name": "Rotom ex",
        "type": "Lightning",
        "rarity": "Double Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/29.png"
    },
    {
        "number": "030",
        "name": "Yamper",
        "type": "Lightning",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/30.png"
    },
    {
        "number": "031",
        "name": "Boltund",
        "type": "Lightning",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/31.png"
    },
    {
        "number": "032",
        "name": "Pawmi",
        "type": "Lightning",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/32.png"
    },
    {
        "number": "033",
        "name": "Pawmo",
        "type": "Lightning",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/33.png"
    },
    {
        "number": "034",
        "name": "Pawmot",
        "type": "Lightning",
        "rarity": "Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/34.png"
    },
    {
        "number": "035",
        "name": "Misdreavus",
        "type": "Psychic",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/35.png"
    },
    {
        "number": "036",
        "name": "Mismagius ex",
        "type": "Psychic",
        "rarity": "Double Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/36.png"
    },
    {
        "number": "037",
        "name": "Snubbull",
        "type": "Psychic",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/37.png"
    },
    {
        "number": "038",
        "name": "Granbull",
        "type": "Psychic",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/38.png"
    },
    {
        "number": "039",
        "name": "Cresselia",
        "type": "Psychic",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/39.png"
    },
    {
        "number": "040",
        "name": "Meloetta",
        "type": "Psychic",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/40.png"
    },
    {
        "number": "041",
        "name": "Mega Diancie ex",
        "type": "Psychic",
        "rarity": "Double Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/41.png"
    },
    {
        "number": "042",
        "name": "Mimikyu",
        "type": "Psychic",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/42.png"
    },
    {
        "number": "043",
        "name": "Milcery",
        "type": "Psychic",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/43.png"
    },
    {
        "number": "044",
        "name": "Alcremie",
        "type": "Psychic",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/44.png"
    },
    {
        "number": "045",
        "name": "Zacian",
        "type": "Psychic",
        "rarity": "Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/45.png"
    },
    {
        "number": "046",
        "name": "Bramblin",
        "type": "Psychic",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/46.png"
    },
    {
        "number": "047",
        "name": "Brambleghast",
        "type": "Psychic",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/47.png"
    },
    {
        "number": "048",
        "name": "Paldean Tauros",
        "type": "Fighting",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/48.png"
    },
    {
        "number": "049",
        "name": "Gligar",
        "type": "Fighting",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/49.png"
    },
    {
        "number": "050",
        "name": "Gliscor",
        "type": "Fighting",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/50.png"
    },
    {
        "number": "051",
        "name": "Trapinch",
        "type": "Fighting",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/51.png"
    },
    {
        "number": "052",
        "name": "Vibrava",
        "type": "Fighting",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/52.png"
    },
    {
        "number": "053",
        "name": "Flygon",
        "type": "Fighting",
        "rarity": "Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/53.png"
    },
    {
        "number": "054",
        "name": "Gastly",
        "type": "Darkness",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/54.png"
    },
    {
        "number": "055",
        "name": "Haunter",
        "type": "Darkness",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/55.png"
    },
    {
        "number": "056",
        "name": "Mega Gengar ex",
        "type": "Darkness",
        "rarity": "Double Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/56.png"
    },
    {
        "number": "057",
        "name": "Murkrow",
        "type": "Darkness",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/57.png"
    },
    {
        "number": "058",
        "name": "Honchkrow",
        "type": "Darkness",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/58.png"
    },
    {
        "number": "059",
        "name": "Sableye",
        "type": "Darkness",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/59.png"
    },
    {
        "number": "060",
        "name": "Carvanha",
        "type": "Darkness",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/60.png"
    },
    {
        "number": "061",
        "name": "Mega Sharpedo ex",
        "type": "Darkness",
        "rarity": "Double Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/61.png"
    },
    {
        "number": "062",
        "name": "Seviper",
        "type": "Darkness",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/62.png"
    },
    {
        "number": "063",
        "name": "Absol",
        "type": "Darkness",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/63.png"
    },
    {
        "number": "064",
        "name": "Sandile",
        "type": "Darkness",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/64.png"
    },
    {
        "number": "065",
        "name": "Krokorok",
        "type": "Darkness",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/65.png"
    },
    {
        "number": "066",
        "name": "Krookodile",
        "type": "Darkness",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/66.png"
    },
    {
        "number": "067",
        "name": "Toxel",
        "type": "Darkness",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/67.png"
    },
    {
        "number": "068",
        "name": "Toxtricity",
        "type": "Darkness",
        "rarity": "Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/68.png"
    },
    {
        "number": "069",
        "name": "Eternatus",
        "type": "Darkness",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/69.png"
    },
    {
        "number": "070",
        "name": "Empoleon ex",
        "type": "Metal",
        "rarity": "Double Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/70.png"
    },
    {
        "number": "071",
        "name": "Bronzor",
        "type": "Metal",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/71.png"
    },
    {
        "number": "072",
        "name": "Bronzong",
        "type": "Metal",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/72.png"
    },
    {
        "number": "073",
        "name": "Togedemaru",
        "type": "Metal",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/73.png"
    },
    {
        "number": "074",
        "name": "Duraludon",
        "type": "Metal",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/74.png"
    },
    {
        "number": "075",
        "name": "Archaludon",
        "type": "Metal",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/75.png"
    },
    {
        "number": "076",
        "name": "Jigglypuff",
        "type": "Colorless",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/76.png"
    },
    {
        "number": "077",
        "name": "Wigglytuff",
        "type": "Colorless",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/77.png"
    },
    {
        "number": "078",
        "name": "Aipom",
        "type": "Colorless",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/78.png"
    },
    {
        "number": "079",
        "name": "Ambipom",
        "type": "Colorless",
        "rarity": "Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/79.png"
    },
    {
        "number": "080",
        "name": "Smeargle",
        "type": "Colorless",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/80.png"
    },
    {
        "number": "081",
        "name": "Zigzagoon",
        "type": "Colorless",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/81.png"
    },
    {
        "number": "082",
        "name": "Linoone",
        "type": "Colorless",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/82.png"
    },
    {
        "number": "083",
        "name": "Buneary",
        "type": "Colorless",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/83.png"
    },
    {
        "number": "084",
        "name": "Mega Lopunny ex",
        "type": "Colorless",
        "rarity": "Double Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/84.png"
    },
    {
        "number": "085",
        "name": "Battle Cage",
        "type": "N/A",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/me2/85.png"
    },
    {
        "number": "086",
        "name": "Blowtorch",
        "type": "N/A",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/me2/86.png"
    },
    {
        "number": "087",
        "name": "Dawn",
        "type": "N/A",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/me2/87.png"
    },
    {
        "number": "088",
        "name": "Dizzying Valley",
        "type": "N/A",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/me2/88.png"
    },
    {
        "number": "089",
        "name": "Firebreather",
        "type": "N/A",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/me2/89.png"
    },
    {
        "number": "090",
        "name": "Grimsley's Move",
        "type": "N/A",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/me2/90.png"
    },
    {
        "number": "091",
        "name": "Jumbo Ice Cream",
        "type": "N/A",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/me2/91.png"
    },
    {
        "number": "092",
        "name": "Punk Helmet",
        "type": "N/A",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/me2/92.png"
    },
    {
        "number": "093",
        "name": "Sacred Charm",
        "type": "N/A",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/me2/93.png"
    },
    {
        "number": "094",
        "name": "Wondrous Patch",
        "type": "N/A",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/me2/94.png"
    },
    {
        "number": "095",
        "name": "Ludicolo",
        "type": "Grass",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/95.png"
    },
    {
        "number": "096",
        "name": "Nymble",
        "type": "Grass",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/96.png"
    },
    {
        "number": "097",
        "name": "Dewgong",
        "type": "Water",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/97.png"
    },
    {
        "number": "098",
        "name": "Piplup",
        "type": "Water",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/98.png"
    },
    {
        "number": "099",
        "name": "Yamper",
        "type": "Lightning",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/99.png"
    },
    {
        "number": "100",
        "name": "Zacian",
        "type": "Psychic",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/100.png"
    },
    {
        "number": "101",
        "name": "Flygon",
        "type": "Fighting",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/101.png"
    },
    {
        "number": "102",
        "name": "Paldean Wooper",
        "type": "Darkness",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/102.png"
    },
    {
        "number": "103",
        "name": "Toxtricity",
        "type": "Darkness",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/103.png"
    },
    {
        "number": "104",
        "name": "Togedemaru",
        "type": "Metal",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/104.png"
    },
    {
        "number": "105",
        "name": "Wigglytuff",
        "type": "Colorless",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/105.png"
    },
    {
        "number": "106",
        "name": "Meowth",
        "type": "Colorless",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/106.png"
    },
    {
        "number": "107",
        "name": "Ambipom",
        "type": "Colorless",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/107.png"
    },
    {
        "number": "108",
        "name": "Mega Heracross ex",
        "type": "Grass",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/108.png"
    },
    {
        "number": "109",
        "name": "Mega Charizard X ex",
        "type": "Fire",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/109.png"
    },
    {
        "number": "110",
        "name": "Oricorio ex",
        "type": "Fire",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/110.png"
    },
    {
        "number": "111",
        "name": "Rotom ex",
        "type": "Lightning",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/111.png"
    },
    {
        "number": "112",
        "name": "Mismagius ex",
        "type": "Psychic",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/112.png"
    },
    {
        "number": "113",
        "name": "Mega Sharpedo ex",
        "type": "Darkness",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/113.png"
    },
    {
        "number": "114",
        "name": "Empoleon ex",
        "type": "Metal",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/114.png"
    },
    {
        "number": "115",
        "name": "Mega Lopunny ex",
        "type": "Colorless",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/115.png"
    },
    {
        "number": "116",
        "name": "Battle Cage",
        "type": "N/A",
        "rarity": "Ultra Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/me2/116.png"
    },
    {
        "number": "117",
        "name": "Blowtorch",
        "type": "N/A",
        "rarity": "Ultra Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/me2/117.png"
    },
    {
        "number": "118",
        "name": "Dawn",
        "type": "N/A",
        "rarity": "Ultra Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/me2/118.png"
    },
    {
        "number": "119",
        "name": "Firebreather",
        "type": "N/A",
        "rarity": "Ultra Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/me2/119.png"
    },
    {
        "number": "120",
        "name": "Grimsley's Move",
        "type": "N/A",
        "rarity": "Ultra Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/me2/120.png"
    },
    {
        "number": "121",
        "name": "Punk Helmet",
        "type": "N/A",
        "rarity": "Ultra Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/me2/121.png"
    },
    {
        "number": "122",
        "name": "Sacred Charm",
        "type": "N/A",
        "rarity": "Ultra Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/me2/122.png"
    },
    {
        "number": "123",
        "name": "Switch",
        "type": "N/A",
        "rarity": "Ultra Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/me2/123.png"
    },
    {
        "number": "124",
        "name": "Ignition Energy",
        "type": "N/A",
        "rarity": "Ultra Rare",
        "category": "Energy",
        "imageUrl": "https://images.pokemontcg.io/me2/124.png"
    },
    {
        "number": "125",
        "name": "Mega Charizard X ex",
        "type": "Fire",
        "rarity": "Special Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/125.png"
    },
    {
        "number": "126",
        "name": "Rotom ex",
        "type": "Lightning",
        "rarity": "Special Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/126.png"
    },
    {
        "number": "127",
        "name": "Mega Sharpedo ex",
        "type": "Darkness",
        "rarity": "Special Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/127.png"
    },
    {
        "number": "128",
        "name": "Mega Lopunny ex",
        "type": "Colorless",
        "rarity": "Special Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/128.png"
    },
    {
        "number": "129",
        "name": "Dawn",
        "type": "N/A",
        "rarity": "Special Illustration Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/me2/129.png"
    },
    {
        "number": "130",
        "name": "Mega Charizard X ex",
        "type": "Fire",
        "rarity": "Mega Hyper Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/me2/130.png"
    }
]
    },
    "scarlet-violet": {
        name: "Scarlet & Violet Base",
        code: "SV1",
        totalCards: 258,
        releaseDate: "March 31, 2023",
        cards: [
    {
        "number": "1",
        "name": "Pineco",
        "type": "Grass",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/1.png"
    },
    {
        "number": "2",
        "name": "Heracross",
        "type": "Grass",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/2.png"
    },
    {
        "number": "3",
        "name": "Shroomish",
        "type": "Grass",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/3.png"
    },
    {
        "number": "4",
        "name": "Breloom",
        "type": "Grass",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/4.png"
    },
    {
        "number": "5",
        "name": "Cacnea",
        "type": "Grass",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/5.png"
    },
    {
        "number": "6",
        "name": "Cacturne",
        "type": "Grass",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/6.png"
    },
    {
        "number": "7",
        "name": "Tropius",
        "type": "Grass",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/7.png"
    },
    {
        "number": "8",
        "name": "Scatterbug",
        "type": "Grass",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/8.png"
    },
    {
        "number": "9",
        "name": "Spewpa",
        "type": "Grass",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/9.png"
    },
    {
        "number": "10",
        "name": "Vivillon",
        "type": "Grass",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/10.png"
    },
    {
        "number": "11",
        "name": "Skiddo",
        "type": "Grass",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/11.png"
    },
    {
        "number": "12",
        "name": "Gogoat",
        "type": "Grass",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/12.png"
    },
    {
        "number": "13",
        "name": "Sprigatito",
        "type": "Grass",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/13.png"
    },
    {
        "number": "14",
        "name": "Floragato",
        "type": "Grass",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/14.png"
    },
    {
        "number": "15",
        "name": "Meowscarada",
        "type": "Grass",
        "rarity": "Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/15.png"
    },
    {
        "number": "16",
        "name": "Tarountula",
        "type": "Grass",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/16.png"
    },
    {
        "number": "17",
        "name": "Tarountula",
        "type": "Grass",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/17.png"
    },
    {
        "number": "18",
        "name": "Tarountula",
        "type": "Grass",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/18.png"
    },
    {
        "number": "19",
        "name": "Spidops ex",
        "type": "Grass",
        "rarity": "Double Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/19.png"
    },
    {
        "number": "20",
        "name": "Smoliv",
        "type": "Grass",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/20.png"
    },
    {
        "number": "21",
        "name": "Smoliv",
        "type": "Grass",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/21.png"
    },
    {
        "number": "22",
        "name": "Dolliv",
        "type": "Grass",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/22.png"
    },
    {
        "number": "23",
        "name": "Arboliva",
        "type": "Grass",
        "rarity": "Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/23.png"
    },
    {
        "number": "24",
        "name": "Toedscool",
        "type": "Grass",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/24.png"
    },
    {
        "number": "25",
        "name": "Toedscool",
        "type": "Grass",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/25.png"
    },
    {
        "number": "26",
        "name": "Toedscruel",
        "type": "Grass",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/26.png"
    },
    {
        "number": "27",
        "name": "Capsakid",
        "type": "Grass",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/27.png"
    },
    {
        "number": "28",
        "name": "Capsakid",
        "type": "Grass",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/28.png"
    },
    {
        "number": "29",
        "name": "Scovillain",
        "type": "Grass",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/29.png"
    },
    {
        "number": "30",
        "name": "Growlithe",
        "type": "Fire",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/30.png"
    },
    {
        "number": "31",
        "name": "Growlithe",
        "type": "Fire",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/31.png"
    },
    {
        "number": "32",
        "name": "Arcanine ex",
        "type": "Fire",
        "rarity": "Double Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/32.png"
    },
    {
        "number": "33",
        "name": "Houndour",
        "type": "Fire",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/33.png"
    },
    {
        "number": "34",
        "name": "Houndoom",
        "type": "Fire",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/34.png"
    },
    {
        "number": "35",
        "name": "Torkoal",
        "type": "Fire",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/35.png"
    },
    {
        "number": "36",
        "name": "Fuecoco",
        "type": "Fire",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/36.png"
    },
    {
        "number": "37",
        "name": "Crocalor",
        "type": "Fire",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/37.png"
    },
    {
        "number": "38",
        "name": "Skeledirge",
        "type": "Fire",
        "rarity": "Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/38.png"
    },
    {
        "number": "39",
        "name": "Charcadet",
        "type": "Fire",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/39.png"
    },
    {
        "number": "40",
        "name": "Charcadet",
        "type": "Fire",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/40.png"
    },
    {
        "number": "41",
        "name": "Armarouge",
        "type": "Fire",
        "rarity": "Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/41.png"
    },
    {
        "number": "42",
        "name": "Slowpoke",
        "type": "Water",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/42.png"
    },
    {
        "number": "43",
        "name": "Slowbro",
        "type": "Water",
        "rarity": "Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/43.png"
    },
    {
        "number": "44",
        "name": "Magikarp",
        "type": "Water",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/44.png"
    },
    {
        "number": "45",
        "name": "Gyarados ex",
        "type": "Water",
        "rarity": "Double Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/45.png"
    },
    {
        "number": "46",
        "name": "Buizel",
        "type": "Water",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/46.png"
    },
    {
        "number": "47",
        "name": "Floatzel",
        "type": "Water",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/47.png"
    },
    {
        "number": "48",
        "name": "Alomomola",
        "type": "Water",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/48.png"
    },
    {
        "number": "49",
        "name": "Clauncher",
        "type": "Water",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/49.png"
    },
    {
        "number": "50",
        "name": "Clawitzer",
        "type": "Water",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/50.png"
    },
    {
        "number": "51",
        "name": "Bruxish",
        "type": "Water",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/51.png"
    },
    {
        "number": "52",
        "name": "Quaxly",
        "type": "Water",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/52.png"
    },
    {
        "number": "53",
        "name": "Quaxwell",
        "type": "Water",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/53.png"
    },
    {
        "number": "54",
        "name": "Quaquaval",
        "type": "Water",
        "rarity": "Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/54.png"
    },
    {
        "number": "55",
        "name": "Wiglett",
        "type": "Water",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/55.png"
    },
    {
        "number": "56",
        "name": "Wiglett",
        "type": "Water",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/56.png"
    },
    {
        "number": "57",
        "name": "Wugtrio",
        "type": "Water",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/57.png"
    },
    {
        "number": "58",
        "name": "Cetoddle",
        "type": "Water",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/58.png"
    },
    {
        "number": "59",
        "name": "Cetoddle",
        "type": "Water",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/59.png"
    },
    {
        "number": "60",
        "name": "Cetitan",
        "type": "Water",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/60.png"
    },
    {
        "number": "61",
        "name": "Dondozo",
        "type": "Water",
        "rarity": "Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/61.png"
    },
    {
        "number": "62",
        "name": "Tatsugiri",
        "type": "Water",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/62.png"
    },
    {
        "number": "63",
        "name": "Magnemite",
        "type": "Lightning",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/63.png"
    },
    {
        "number": "64",
        "name": "Magneton",
        "type": "Lightning",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/64.png"
    },
    {
        "number": "65",
        "name": "Magnezone ex",
        "type": "Lightning",
        "rarity": "Double Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/65.png"
    },
    {
        "number": "66",
        "name": "Mareep",
        "type": "Lightning",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/66.png"
    },
    {
        "number": "67",
        "name": "Flaaffy",
        "type": "Lightning",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/67.png"
    },
    {
        "number": "68",
        "name": "Pachirisu",
        "type": "Lightning",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/68.png"
    },
    {
        "number": "69",
        "name": "Rotom",
        "type": "Lightning",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/69.png"
    },
    {
        "number": "70",
        "name": "Rotom",
        "type": "Lightning",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/70.png"
    },
    {
        "number": "71",
        "name": "Toxel",
        "type": "Lightning",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/71.png"
    },
    {
        "number": "72",
        "name": "Toxtricity",
        "type": "Lightning",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/72.png"
    },
    {
        "number": "73",
        "name": "Pawmi",
        "type": "Lightning",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/73.png"
    },
    {
        "number": "74",
        "name": "Pawmi",
        "type": "Lightning",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/74.png"
    },
    {
        "number": "75",
        "name": "Pawmo",
        "type": "Lightning",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/75.png"
    },
    {
        "number": "76",
        "name": "Pawmot",
        "type": "Lightning",
        "rarity": "Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/76.png"
    },
    {
        "number": "77",
        "name": "Wattrel",
        "type": "Lightning",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/77.png"
    },
    {
        "number": "78",
        "name": "Wattrel",
        "type": "Lightning",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/78.png"
    },
    {
        "number": "79",
        "name": "Kilowattrel",
        "type": "Lightning",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/79.png"
    },
    {
        "number": "80",
        "name": "Miraidon",
        "type": "Lightning",
        "rarity": "Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/80.png"
    },
    {
        "number": "81",
        "name": "Miraidon ex",
        "type": "Lightning",
        "rarity": "Double Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/81.png"
    },
    {
        "number": "82",
        "name": "Drowzee",
        "type": "Psychic",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/82.png"
    },
    {
        "number": "83",
        "name": "Hypno",
        "type": "Psychic",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/83.png"
    },
    {
        "number": "84",
        "name": "Ralts",
        "type": "Psychic",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/84.png"
    },
    {
        "number": "85",
        "name": "Kirlia",
        "type": "Psychic",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/85.png"
    },
    {
        "number": "86",
        "name": "Gardevoir ex",
        "type": "Psychic",
        "rarity": "Double Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/86.png"
    },
    {
        "number": "87",
        "name": "Shuppet",
        "type": "Psychic",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/87.png"
    },
    {
        "number": "88",
        "name": "Banette ex",
        "type": "Psychic",
        "rarity": "Double Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/88.png"
    },
    {
        "number": "89",
        "name": "Drifloon",
        "type": "Psychic",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/89.png"
    },
    {
        "number": "90",
        "name": "Drifblim",
        "type": "Psychic",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/90.png"
    },
    {
        "number": "91",
        "name": "Flabébé",
        "type": "Psychic",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/91.png"
    },
    {
        "number": "92",
        "name": "Floette",
        "type": "Psychic",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/92.png"
    },
    {
        "number": "93",
        "name": "Florges",
        "type": "Psychic",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/93.png"
    },
    {
        "number": "94",
        "name": "Dedenne",
        "type": "Psychic",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/94.png"
    },
    {
        "number": "95",
        "name": "Dedenne",
        "type": "Psychic",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/95.png"
    },
    {
        "number": "96",
        "name": "Klefki",
        "type": "Psychic",
        "rarity": "Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/96.png"
    },
    {
        "number": "97",
        "name": "Fidough",
        "type": "Psychic",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/97.png"
    },
    {
        "number": "98",
        "name": "Fidough",
        "type": "Psychic",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/98.png"
    },
    {
        "number": "99",
        "name": "Dachsbun",
        "type": "Psychic",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/99.png"
    },
    {
        "number": "100",
        "name": "Flittle",
        "type": "Psychic",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/100.png"
    },
    {
        "number": "101",
        "name": "Flittle",
        "type": "Psychic",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/101.png"
    },
    {
        "number": "102",
        "name": "Flittle",
        "type": "Psychic",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/102.png"
    },
    {
        "number": "103",
        "name": "Espathra",
        "type": "Psychic",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/103.png"
    },
    {
        "number": "104",
        "name": "Greavard",
        "type": "Psychic",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/104.png"
    },
    {
        "number": "105",
        "name": "Greavard",
        "type": "Psychic",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/105.png"
    },
    {
        "number": "106",
        "name": "Houndstone",
        "type": "Psychic",
        "rarity": "Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/106.png"
    },
    {
        "number": "107",
        "name": "Mankey",
        "type": "Fighting",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/107.png"
    },
    {
        "number": "108",
        "name": "Primeape",
        "type": "Fighting",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/108.png"
    },
    {
        "number": "109",
        "name": "Annihilape",
        "type": "Fighting",
        "rarity": "Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/109.png"
    },
    {
        "number": "110",
        "name": "Meditite",
        "type": "Fighting",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/110.png"
    },
    {
        "number": "111",
        "name": "Medicham",
        "type": "Fighting",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/111.png"
    },
    {
        "number": "112",
        "name": "Riolu",
        "type": "Fighting",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/112.png"
    },
    {
        "number": "113",
        "name": "Riolu",
        "type": "Fighting",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/113.png"
    },
    {
        "number": "114",
        "name": "Lucario",
        "type": "Fighting",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/114.png"
    },
    {
        "number": "115",
        "name": "Sandile",
        "type": "Fighting",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/115.png"
    },
    {
        "number": "116",
        "name": "Krokorok",
        "type": "Fighting",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/116.png"
    },
    {
        "number": "117",
        "name": "Krookodile",
        "type": "Fighting",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/117.png"
    },
    {
        "number": "118",
        "name": "Hawlucha",
        "type": "Fighting",
        "rarity": "Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/118.png"
    },
    {
        "number": "119",
        "name": "Silicobra",
        "type": "Fighting",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/119.png"
    },
    {
        "number": "120",
        "name": "Sandaconda",
        "type": "Fighting",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/120.png"
    },
    {
        "number": "121",
        "name": "Stonjourner",
        "type": "Fighting",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/121.png"
    },
    {
        "number": "122",
        "name": "Klawf",
        "type": "Fighting",
        "rarity": "Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/122.png"
    },
    {
        "number": "123",
        "name": "Great Tusk ex",
        "type": "Fighting",
        "rarity": "Double Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/123.png"
    },
    {
        "number": "124",
        "name": "Koraidon",
        "type": "Fighting",
        "rarity": "Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/124.png"
    },
    {
        "number": "125",
        "name": "Koraidon ex",
        "type": "Fighting",
        "rarity": "Double Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/125.png"
    },
    {
        "number": "126",
        "name": "Grimer",
        "type": "Darkness",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/126.png"
    },
    {
        "number": "127",
        "name": "Muk",
        "type": "Darkness",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/127.png"
    },
    {
        "number": "128",
        "name": "Seviper",
        "type": "Darkness",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/128.png"
    },
    {
        "number": "129",
        "name": "Spiritomb",
        "type": "Darkness",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/129.png"
    },
    {
        "number": "130",
        "name": "Croagunk",
        "type": "Darkness",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/130.png"
    },
    {
        "number": "131",
        "name": "Toxicroak ex",
        "type": "Darkness",
        "rarity": "Double Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/131.png"
    },
    {
        "number": "132",
        "name": "Pawniard",
        "type": "Darkness",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/132.png"
    },
    {
        "number": "133",
        "name": "Bisharp",
        "type": "Darkness",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/133.png"
    },
    {
        "number": "134",
        "name": "Kingambit",
        "type": "Darkness",
        "rarity": "Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/134.png"
    },
    {
        "number": "135",
        "name": "Maschiff",
        "type": "Darkness",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/135.png"
    },
    {
        "number": "136",
        "name": "Maschiff",
        "type": "Darkness",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/136.png"
    },
    {
        "number": "137",
        "name": "Mabosstiff",
        "type": "Darkness",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/137.png"
    },
    {
        "number": "138",
        "name": "Bombirdier",
        "type": "Darkness",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/138.png"
    },
    {
        "number": "139",
        "name": "Forretress",
        "type": "Metal",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/139.png"
    },
    {
        "number": "140",
        "name": "Varoom",
        "type": "Metal",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/140.png"
    },
    {
        "number": "141",
        "name": "Varoom",
        "type": "Metal",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/141.png"
    },
    {
        "number": "142",
        "name": "Revavroom",
        "type": "Metal",
        "rarity": "Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/142.png"
    },
    {
        "number": "143",
        "name": "Iron Treads ex",
        "type": "Metal",
        "rarity": "Double Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/143.png"
    },
    {
        "number": "144",
        "name": "Chansey",
        "type": "Colorless",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/144.png"
    },
    {
        "number": "145",
        "name": "Blissey",
        "type": "Colorless",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/145.png"
    },
    {
        "number": "146",
        "name": "Zangoose",
        "type": "Colorless",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/146.png"
    },
    {
        "number": "147",
        "name": "Zangoose",
        "type": "Colorless",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/147.png"
    },
    {
        "number": "148",
        "name": "Starly",
        "type": "Colorless",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/148.png"
    },
    {
        "number": "149",
        "name": "Staravia",
        "type": "Colorless",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/149.png"
    },
    {
        "number": "150",
        "name": "Staraptor",
        "type": "Colorless",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/150.png"
    },
    {
        "number": "151",
        "name": "Skwovet",
        "type": "Colorless",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/151.png"
    },
    {
        "number": "152",
        "name": "Greedent",
        "type": "Colorless",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/152.png"
    },
    {
        "number": "153",
        "name": "Indeedee",
        "type": "Colorless",
        "rarity": "Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/153.png"
    },
    {
        "number": "154",
        "name": "Lechonk",
        "type": "Colorless",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/154.png"
    },
    {
        "number": "155",
        "name": "Lechonk",
        "type": "Colorless",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/155.png"
    },
    {
        "number": "156",
        "name": "Lechonk",
        "type": "Colorless",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/156.png"
    },
    {
        "number": "157",
        "name": "Oinkologne",
        "type": "Colorless",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/157.png"
    },
    {
        "number": "158",
        "name": "Oinkologne ex",
        "type": "Colorless",
        "rarity": "Double Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/158.png"
    },
    {
        "number": "159",
        "name": "Tandemaus",
        "type": "Colorless",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/159.png"
    },
    {
        "number": "160",
        "name": "Tandemaus",
        "type": "Colorless",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/160.png"
    },
    {
        "number": "161",
        "name": "Maushold",
        "type": "Colorless",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/161.png"
    },
    {
        "number": "162",
        "name": "Squawkabilly",
        "type": "Colorless",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/162.png"
    },
    {
        "number": "163",
        "name": "Cyclizar",
        "type": "Colorless",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/163.png"
    },
    {
        "number": "164",
        "name": "Cyclizar",
        "type": "Colorless",
        "rarity": "Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/164.png"
    },
    {
        "number": "165",
        "name": "Flamigo",
        "type": "Colorless",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/165.png"
    },
    {
        "number": "166",
        "name": "Arven",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/166.png"
    },
    {
        "number": "167",
        "name": "Beach Court",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/167.png"
    },
    {
        "number": "168",
        "name": "Crushing Hammer",
        "type": "Trainer",
        "rarity": "Common",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/168.png"
    },
    {
        "number": "169",
        "name": "Defiance Band",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/169.png"
    },
    {
        "number": "170",
        "name": "Electric Generator",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/170.png"
    },
    {
        "number": "171",
        "name": "Energy Retrieval",
        "type": "Trainer",
        "rarity": "Common",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/171.png"
    },
    {
        "number": "172",
        "name": "Energy Search",
        "type": "Trainer",
        "rarity": "Common",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/172.png"
    },
    {
        "number": "173",
        "name": "Energy Switch",
        "type": "Trainer",
        "rarity": "Common",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/173.png"
    },
    {
        "number": "174",
        "name": "Exp. Share",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/174.png"
    },
    {
        "number": "175",
        "name": "Jacq",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/175.png"
    },
    {
        "number": "176",
        "name": "Judge",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/176.png"
    },
    {
        "number": "177",
        "name": "Katy",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/177.png"
    },
    {
        "number": "178",
        "name": "Mesagoza",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/178.png"
    },
    {
        "number": "179",
        "name": "Miriam",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/179.png"
    },
    {
        "number": "180",
        "name": "Nemona",
        "type": "Trainer",
        "rarity": "Common",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/180.png"
    },
    {
        "number": "181",
        "name": "Nest Ball",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/181.png"
    },
    {
        "number": "182",
        "name": "Pal Pad",
        "type": "Trainer",
        "rarity": "Common",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/182.png"
    },
    {
        "number": "183",
        "name": "Penny",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/183.png"
    },
    {
        "number": "184",
        "name": "Picnic Basket",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/184.png"
    },
    {
        "number": "185",
        "name": "Poké Ball",
        "type": "Trainer",
        "rarity": "Common",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/185.png"
    },
    {
        "number": "186",
        "name": "Pokégear 3.0",
        "type": "Trainer",
        "rarity": "Common",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/186.png"
    },
    {
        "number": "187",
        "name": "Pokémon Catcher",
        "type": "Trainer",
        "rarity": "Common",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/187.png"
    },
    {
        "number": "188",
        "name": "Potion",
        "type": "Trainer",
        "rarity": "Common",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/188.png"
    },
    {
        "number": "189",
        "name": "Professor's Research (Professor Sada)",
        "type": "Trainer",
        "rarity": "Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/189.png"
    },
    {
        "number": "190",
        "name": "Professor's Research (Professor Turo)",
        "type": "Trainer",
        "rarity": "Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/190.png"
    },
    {
        "number": "191",
        "name": "Rare Candy",
        "type": "Trainer",
        "rarity": "Common",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/191.png"
    },
    {
        "number": "192",
        "name": "Rock Chestplate",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/192.png"
    },
    {
        "number": "193",
        "name": "Rocky Helmet",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/193.png"
    },
    {
        "number": "194",
        "name": "Switch",
        "type": "Trainer",
        "rarity": "Common",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/194.png"
    },
    {
        "number": "195",
        "name": "Team Star Grunt",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/195.png"
    },
    {
        "number": "196",
        "name": "Ultra Ball",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/196.png"
    },
    {
        "number": "197",
        "name": "Vitality Band",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/197.png"
    },
    {
        "number": "198",
        "name": "Youngster",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/198.png"
    },
    {
        "number": "199",
        "name": "Tarountula",
        "type": "Grass",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/199.png"
    },
    {
        "number": "200",
        "name": "Dolliv",
        "type": "Grass",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/200.png"
    },
    {
        "number": "201",
        "name": "Toedscool",
        "type": "Grass",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/201.png"
    },
    {
        "number": "202",
        "name": "Scovillain",
        "type": "Grass",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/202.png"
    },
    {
        "number": "203",
        "name": "Armarouge",
        "type": "Fire",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/203.png"
    },
    {
        "number": "204",
        "name": "Slowpoke",
        "type": "Water",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/204.png"
    },
    {
        "number": "205",
        "name": "Clauncher",
        "type": "Water",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/205.png"
    },
    {
        "number": "206",
        "name": "Wiglett",
        "type": "Water",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/206.png"
    },
    {
        "number": "207",
        "name": "Dondozo",
        "type": "Water",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/207.png"
    },
    {
        "number": "208",
        "name": "Pachirisu",
        "type": "Lightning",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/208.png"
    },
    {
        "number": "209",
        "name": "Pawmot",
        "type": "Lightning",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/209.png"
    },
    {
        "number": "210",
        "name": "Drowzee",
        "type": "Psychic",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/210.png"
    },
    {
        "number": "211",
        "name": "Ralts",
        "type": "Psychic",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/211.png"
    },
    {
        "number": "212",
        "name": "Kirlia",
        "type": "Psychic",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/212.png"
    },
    {
        "number": "213",
        "name": "Fidough",
        "type": "Psychic",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/213.png"
    },
    {
        "number": "214",
        "name": "Greavard",
        "type": "Psychic",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/214.png"
    },
    {
        "number": "215",
        "name": "Riolu",
        "type": "Fighting",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/215.png"
    },
    {
        "number": "216",
        "name": "Sandile",
        "type": "Fighting",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/216.png"
    },
    {
        "number": "217",
        "name": "Klawf",
        "type": "Fighting",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/217.png"
    },
    {
        "number": "218",
        "name": "Mabosstiff",
        "type": "Darkness",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/218.png"
    },
    {
        "number": "219",
        "name": "Bombirdier",
        "type": "Darkness",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/219.png"
    },
    {
        "number": "220",
        "name": "Kingambit",
        "type": "Darkness",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/220.png"
    },
    {
        "number": "221",
        "name": "Starly",
        "type": "Colorless",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/221.png"
    },
    {
        "number": "222",
        "name": "Skwovet",
        "type": "Colorless",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/222.png"
    },
    {
        "number": "223",
        "name": "Spidops ex",
        "type": "Grass",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/223.png"
    },
    {
        "number": "224",
        "name": "Arcanine ex",
        "type": "Fire",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/224.png"
    },
    {
        "number": "225",
        "name": "Gyarados ex",
        "type": "Water",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/225.png"
    },
    {
        "number": "226",
        "name": "Magnezone ex",
        "type": "Lightning",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/226.png"
    },
    {
        "number": "227",
        "name": "Miraidon ex",
        "type": "Lightning",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/227.png"
    },
    {
        "number": "228",
        "name": "Gardevoir ex",
        "type": "Psychic",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/228.png"
    },
    {
        "number": "229",
        "name": "Banette ex",
        "type": "Psychic",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/229.png"
    },
    {
        "number": "230",
        "name": "Great Tusk ex",
        "type": "Fighting",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/230.png"
    },
    {
        "number": "231",
        "name": "Koraidon ex",
        "type": "Fighting",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/231.png"
    },
    {
        "number": "232",
        "name": "Toxicroak ex",
        "type": "Darkness",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/232.png"
    },
    {
        "number": "233",
        "name": "Iron Treads ex",
        "type": "Metal",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/233.png"
    },
    {
        "number": "234",
        "name": "Oinkologne ex",
        "type": "Colorless",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/234.png"
    },
    {
        "number": "235",
        "name": "Arven",
        "type": "Trainer",
        "rarity": "Ultra Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/235.png"
    },
    {
        "number": "236",
        "name": "Jacq",
        "type": "Trainer",
        "rarity": "Ultra Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/236.png"
    },
    {
        "number": "237",
        "name": "Katy",
        "type": "Trainer",
        "rarity": "Ultra Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/237.png"
    },
    {
        "number": "238",
        "name": "Miriam",
        "type": "Trainer",
        "rarity": "Ultra Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/238.png"
    },
    {
        "number": "239",
        "name": "Penny",
        "type": "Trainer",
        "rarity": "Ultra Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/239.png"
    },
    {
        "number": "240",
        "name": "Professor's Research (Professor Sada)",
        "type": "Trainer",
        "rarity": "Ultra Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/240.png"
    },
    {
        "number": "241",
        "name": "Professor's Research (Professor Turo)",
        "type": "Trainer",
        "rarity": "Ultra Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/241.png"
    },
    {
        "number": "242",
        "name": "Team Star Grunt",
        "type": "Trainer",
        "rarity": "Ultra Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/242.png"
    },
    {
        "number": "243",
        "name": "Spidops ex",
        "type": "Grass",
        "rarity": "Special Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/243.png"
    },
    {
        "number": "244",
        "name": "Miraidon ex",
        "type": "Lightning",
        "rarity": "Special Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/244.png"
    },
    {
        "number": "245",
        "name": "Gardevoir ex",
        "type": "Psychic",
        "rarity": "Special Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/245.png"
    },
    {
        "number": "246",
        "name": "Great Tusk ex",
        "type": "Fighting",
        "rarity": "Special Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/246.png"
    },
    {
        "number": "247",
        "name": "Koraidon ex",
        "type": "Fighting",
        "rarity": "Special Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/247.png"
    },
    {
        "number": "248",
        "name": "Iron Treads ex",
        "type": "Metal",
        "rarity": "Special Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/248.png"
    },
    {
        "number": "249",
        "name": "Arven",
        "type": "Trainer",
        "rarity": "Special Illustration Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/249.png"
    },
    {
        "number": "250",
        "name": "Jacq",
        "type": "Trainer",
        "rarity": "Special Illustration Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/250.png"
    },
    {
        "number": "251",
        "name": "Miriam",
        "type": "Trainer",
        "rarity": "Special Illustration Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/251.png"
    },
    {
        "number": "252",
        "name": "Penny",
        "type": "Trainer",
        "rarity": "Special Illustration Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/252.png"
    },
    {
        "number": "253",
        "name": "Miraidon ex",
        "type": "Lightning",
        "rarity": "Hyper Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/253.png"
    },
    {
        "number": "254",
        "name": "Koraidon ex",
        "type": "Fighting",
        "rarity": "Hyper Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/sv1/254.png"
    },
    {
        "number": "255",
        "name": "Nest Ball",
        "type": "Trainer",
        "rarity": "Hyper Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/255.png"
    },
    {
        "number": "256",
        "name": "Rare Candy",
        "type": "Trainer",
        "rarity": "Hyper Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/sv1/256.png"
    },
    {
        "number": "257",
        "name": "Basic Lightning Energy",
        "type": "Trainer",
        "rarity": "Hyper Rare",
        "category": "Energy",
        "imageUrl": "https://images.pokemontcg.io/sv1/257.png"
    },
    {
        "number": "258",
        "name": "Basic Fighting Energy",
        "type": "Trainer",
        "rarity": "Hyper Rare",
        "category": "Energy",
        "imageUrl": "https://images.pokemontcg.io/sv1/258.png"
    }
]
    },
    "pokemon-go": {
        name: "Pokemon GO",
        code: "PGO",
        totalCards: 88,
        releaseDate: "July 1, 2022",
        cards: [
    {
        "number": "1",
        "name": "Bulbasaur",
        "type": "Grass",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/1.png"
    },
    {
        "number": "2",
        "name": "Ivysaur",
        "type": "Grass",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/2.png"
    },
    {
        "number": "3",
        "name": "Venusaur",
        "type": "Grass",
        "rarity": "Rare Holo",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/3.png"
    },
    {
        "number": "4",
        "name": "Radiant Venusaur",
        "type": "Grass",
        "rarity": "Radiant Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/4.png"
    },
    {
        "number": "5",
        "name": "Alolan Exeggutor V",
        "type": "Grass",
        "rarity": "Rare Holo V",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/5.png"
    },
    {
        "number": "6",
        "name": "Spinarak",
        "type": "Grass",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/6.png"
    },
    {
        "number": "7",
        "name": "Ariados",
        "type": "Grass",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/7.png"
    },
    {
        "number": "8",
        "name": "Charmander",
        "type": "Fire",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/8.png"
    },
    {
        "number": "9",
        "name": "Charmeleon",
        "type": "Fire",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/9.png"
    },
    {
        "number": "10",
        "name": "Charizard",
        "type": "Fire",
        "rarity": "Rare Holo",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/10.png"
    },
    {
        "number": "11",
        "name": "Radiant Charizard",
        "type": "Fire",
        "rarity": "Radiant Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/11.png"
    },
    {
        "number": "12",
        "name": "Moltres",
        "type": "Fire",
        "rarity": "Rare Holo",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/12.png"
    },
    {
        "number": "13",
        "name": "Numel",
        "type": "Fire",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/13.png"
    },
    {
        "number": "14",
        "name": "Camerupt",
        "type": "Fire",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/14.png"
    },
    {
        "number": "15",
        "name": "Squirtle",
        "type": "Water",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/15.png"
    },
    {
        "number": "16",
        "name": "Wartortle",
        "type": "Water",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/16.png"
    },
    {
        "number": "17",
        "name": "Blastoise",
        "type": "Water",
        "rarity": "Rare Holo",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/17.png"
    },
    {
        "number": "18",
        "name": "Radiant Blastoise",
        "type": "Water",
        "rarity": "Radiant Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/18.png"
    },
    {
        "number": "19",
        "name": "Slowpoke",
        "type": "Water",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/19.png"
    },
    {
        "number": "20",
        "name": "Slowbro",
        "type": "Water",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/20.png"
    },
    {
        "number": "21",
        "name": "Magikarp",
        "type": "Water",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/21.png"
    },
    {
        "number": "22",
        "name": "Gyarados",
        "type": "Water",
        "rarity": "Rare Holo",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/22.png"
    },
    {
        "number": "23",
        "name": "Lapras",
        "type": "Water",
        "rarity": "Rare Holo",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/23.png"
    },
    {
        "number": "24",
        "name": "Articuno",
        "type": "Water",
        "rarity": "Rare Holo",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/24.png"
    },
    {
        "number": "25",
        "name": "Wimpod",
        "type": "Water",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/25.png"
    },
    {
        "number": "26",
        "name": "Golisopod",
        "type": "Water",
        "rarity": "Rare Holo",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/26.png"
    },
    {
        "number": "27",
        "name": "Pikachu",
        "type": "Lightning",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/27.png"
    },
    {
        "number": "28",
        "name": "Pikachu",
        "type": "Lightning",
        "rarity": "Rare Holo",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/28.png"
    },
    {
        "number": "29",
        "name": "Zapdos",
        "type": "Lightning",
        "rarity": "Rare Holo",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/29.png"
    },
    {
        "number": "30",
        "name": "Mewtwo V",
        "type": "Psychic",
        "rarity": "Rare Holo V",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/30.png"
    },
    {
        "number": "31",
        "name": "Mewtwo VSTAR",
        "type": "Psychic",
        "rarity": "Rare Holo VSTAR",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/31.png"
    },
    {
        "number": "32",
        "name": "Natu",
        "type": "Psychic",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/32.png"
    },
    {
        "number": "33",
        "name": "Xatu",
        "type": "Psychic",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/33.png"
    },
    {
        "number": "34",
        "name": "Lunatone",
        "type": "Psychic",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/34.png"
    },
    {
        "number": "35",
        "name": "Sylveon",
        "type": "Psychic",
        "rarity": "Rare Holo",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/35.png"
    },
    {
        "number": "36",
        "name": "Onix",
        "type": "Fighting",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/36.png"
    },
    {
        "number": "37",
        "name": "Larvitar",
        "type": "Fighting",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/37.png"
    },
    {
        "number": "38",
        "name": "Pupitar",
        "type": "Fighting",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/38.png"
    },
    {
        "number": "39",
        "name": "Solrock",
        "type": "Fighting",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/39.png"
    },
    {
        "number": "40",
        "name": "Conkeldurr V",
        "type": "Fighting",
        "rarity": "Rare Holo V",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/40.png"
    },
    {
        "number": "41",
        "name": "Alolan Rattata",
        "type": "Darkness",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/41.png"
    },
    {
        "number": "42",
        "name": "Alolan Raticate",
        "type": "Darkness",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/42.png"
    },
    {
        "number": "43",
        "name": "Tyranitar",
        "type": "Darkness",
        "rarity": "Rare Holo",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/43.png"
    },
    {
        "number": "44",
        "name": "Steelix",
        "type": "Metal",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/44.png"
    },
    {
        "number": "45",
        "name": "Meltan",
        "type": "Metal",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/45.png"
    },
    {
        "number": "46",
        "name": "Melmetal",
        "type": "Metal",
        "rarity": "Rare Holo",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/46.png"
    },
    {
        "number": "47",
        "name": "Melmetal V",
        "type": "Metal",
        "rarity": "Rare Holo V",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/47.png"
    },
    {
        "number": "48",
        "name": "Melmetal VMAX",
        "type": "Metal",
        "rarity": "Rare Holo VMAX",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/48.png"
    },
    {
        "number": "49",
        "name": "Dragonite V",
        "type": "Dragon",
        "rarity": "Rare Holo V",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/49.png"
    },
    {
        "number": "50",
        "name": "Dragonite VSTAR",
        "type": "Dragon",
        "rarity": "Rare Holo VSTAR",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/50.png"
    },
    {
        "number": "51",
        "name": "Chansey",
        "type": "Colorless",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/51.png"
    },
    {
        "number": "52",
        "name": "Blissey",
        "type": "Colorless",
        "rarity": "Rare Holo",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/52.png"
    },
    {
        "number": "53",
        "name": "Ditto",
        "type": "Colorless",
        "rarity": "Rare Holo",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/53.png"
    },
    {
        "number": "54",
        "name": "Eevee",
        "type": "Colorless",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/54.png"
    },
    {
        "number": "55",
        "name": "Snorlax",
        "type": "Colorless",
        "rarity": "Rare Holo",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/55.png"
    },
    {
        "number": "56",
        "name": "Aipom",
        "type": "Colorless",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/56.png"
    },
    {
        "number": "57",
        "name": "Ambipom",
        "type": "Colorless",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/57.png"
    },
    {
        "number": "58",
        "name": "Slaking V",
        "type": "Colorless",
        "rarity": "Rare Holo V",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/58.png"
    },
    {
        "number": "59",
        "name": "Bidoof",
        "type": "Colorless",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/59.png"
    },
    {
        "number": "60",
        "name": "Bibarel",
        "type": "Colorless",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/60.png"
    },
    {
        "number": "61",
        "name": "Pidove",
        "type": "Colorless",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/61.png"
    },
    {
        "number": "62",
        "name": "Tranquill",
        "type": "Colorless",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/62.png"
    },
    {
        "number": "63",
        "name": "Unfezant",
        "type": "Colorless",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/63.png"
    },
    {
        "number": "64",
        "name": "Blanche",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/pgo/64.png"
    },
    {
        "number": "65",
        "name": "Candela",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/pgo/65.png"
    },
    {
        "number": "66",
        "name": "Egg Incubator",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/pgo/66.png"
    },
    {
        "number": "67",
        "name": "Lure Module",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/pgo/67.png"
    },
    {
        "number": "68",
        "name": "PokéStop",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/pgo/68.png"
    },
    {
        "number": "69",
        "name": "Rare Candy",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/pgo/69.png"
    },
    {
        "number": "70",
        "name": "Spark",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/pgo/70.png"
    },
    {
        "number": "71",
        "name": "Alolan Exeggutor V",
        "type": "Grass",
        "rarity": "Rare Ultra",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/71.png"
    },
    {
        "number": "72",
        "name": "Mewtwo V",
        "type": "Psychic",
        "rarity": "Rare Ultra",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/72.png"
    },
    {
        "number": "73",
        "name": "Conkeldurr V",
        "type": "Fighting",
        "rarity": "Rare Ultra",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/73.png"
    },
    {
        "number": "74",
        "name": "Conkeldurr V",
        "type": "Fighting",
        "rarity": "Rare Ultra",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/74.png"
    },
    {
        "number": "75",
        "name": "Melmetal V",
        "type": "Metal",
        "rarity": "Rare Ultra",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/75.png"
    },
    {
        "number": "76",
        "name": "Dragonite V",
        "type": "Dragon",
        "rarity": "Rare Ultra",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/76.png"
    },
    {
        "number": "77",
        "name": "Slaking V",
        "type": "Colorless",
        "rarity": "Rare Ultra",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/77.png"
    },
    {
        "number": "78",
        "name": "Professor's Research",
        "type": "Trainer",
        "rarity": "Rare Ultra",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/pgo/78.png"
    },
    {
        "number": "79",
        "name": "Mewtwo VSTAR",
        "type": "Psychic",
        "rarity": "Rare Rainbow",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/79.png"
    },
    {
        "number": "80",
        "name": "Melmetal VMAX",
        "type": "Metal",
        "rarity": "Rare Rainbow",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/80.png"
    },
    {
        "number": "81",
        "name": "Dragonite VSTAR",
        "type": "Dragon",
        "rarity": "Rare Rainbow",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/81.png"
    },
    {
        "number": "82",
        "name": "Blanche",
        "type": "Trainer",
        "rarity": "Rare Rainbow",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/pgo/82.png"
    },
    {
        "number": "83",
        "name": "Candela",
        "type": "Trainer",
        "rarity": "Rare Rainbow",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/pgo/83.png"
    },
    {
        "number": "84",
        "name": "Professor's Research",
        "type": "Trainer",
        "rarity": "Rare Rainbow",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/pgo/84.png"
    },
    {
        "number": "85",
        "name": "Spark",
        "type": "Trainer",
        "rarity": "Rare Rainbow",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/pgo/85.png"
    },
    {
        "number": "86",
        "name": "Mewtwo VSTAR",
        "type": "Psychic",
        "rarity": "Rare Secret",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/pgo/86.png"
    },
    {
        "number": "87",
        "name": "Egg Incubator",
        "type": "Trainer",
        "rarity": "Rare Secret",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/pgo/87.png"
    },
    {
        "number": "88",
        "name": "Lure Module",
        "type": "Trainer",
        "rarity": "Rare Secret",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/pgo/88.png"
    }

]
    },
    "mega-evolution": {
        name: "Mega Evolution",
        code: "MEG",
        totalCards: 188,
        releaseDate: "September 26, 2025",
        cards: [
    {
        "number": "1",
        "name": "Bulbasaur",
        "type": "Grass",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/1.png"
    },
    {
        "number": "2",
        "name": "Ivysaur",
        "type": "Grass",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/2.png"
    },
    {
        "number": "3",
        "name": "Mega Venusaur ex",
        "type": "Grass",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/3.png"
    },
    {
        "number": "4",
        "name": "Exeggcute",
        "type": "Grass",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/4.png"
    },
    {
        "number": "5",
        "name": "Exeggutor",
        "type": "Grass",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/5.png"
    },
    {
        "number": "6",
        "name": "Tangela",
        "type": "Grass",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/6.png"
    },
    {
        "number": "7",
        "name": "Tangrowth",
        "type": "Grass",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/7.png"
    },
    {
        "number": "8",
        "name": "Chikorita",
        "type": "Grass",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/8.png"
    },
    {
        "number": "9",
        "name": "Bayleef",
        "type": "Grass",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/9.png"
    },
    {
        "number": "10",
        "name": "Meganium",
        "type": "Grass",
        "rarity": "Rare Holo",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/10.png"
    },
    {
        "number": "11",
        "name": "Shuckle",
        "type": "Grass",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/11.png"
    },
    {
        "number": "12",
        "name": "Celebi",
        "type": "Grass",
        "rarity": "Rare Holo",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/12.png"
    },
    {
        "number": "13",
        "name": "Seedot",
        "type": "Grass",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/13.png"
    },
    {
        "number": "14",
        "name": "Nuzleaf",
        "type": "Grass",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/14.png"
    },
    {
        "number": "15",
        "name": "Shiftry",
        "type": "Grass",
        "rarity": "Rare Holo",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/15.png"
    },
    {
        "number": "16",
        "name": "Nincada",
        "type": "Grass",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/16.png"
    },
    {
        "number": "17",
        "name": "Ninjask",
        "type": "Grass",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/17.png"
    },
    {
        "number": "18",
        "name": "Dhelmise",
        "type": "Grass",
        "rarity": "Rare Holo",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/18.png"
    },
    {
        "number": "19",
        "name": "Vulpix",
        "type": "Fire",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/19.png"
    },
    {
        "number": "20",
        "name": "Ninetales",
        "type": "Fire",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/20.png"
    },
    {
        "number": "21",
        "name": "Numel",
        "type": "Fire",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/21.png"
    },
    {
        "number": "22",
        "name": "Mega Camerupt ex",
        "type": "Fire",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/22.png"
    },
    {
        "number": "23",
        "name": "Litleo",
        "type": "Fire",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/23.png"
    },
    {
        "number": "24",
        "name": "Pyroar",
        "type": "Fire",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/24.png"
    },
    {
        "number": "25",
        "name": "Volcanion",
        "type": "Fire",
        "rarity": "Rare Holo",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/25.png"
    },
    {
        "number": "26",
        "name": "Scorbunny",
        "type": "Fire",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/26.png"
    },
    {
        "number": "27",
        "name": "Raboot",
        "type": "Fire",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/27.png"
    },
    {
        "number": "28",
        "name": "Cinderace",
        "type": "Fire",
        "rarity": "Rare Holo",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/28.png"
    },
    {
        "number": "29",
        "name": "Sizzlipede",
        "type": "Fire",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/29.png"
    },
    {
        "number": "30",
        "name": "Centiskorch",
        "type": "Fire",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/30.png"
    },
    {
        "number": "31",
        "name": "Chi-Yu",
        "type": "Fire",
        "rarity": "Rare Holo",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/31.png"
    },
    {
        "number": "32",
        "name": "Mantine",
        "type": "Water",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/32.png"
    },
    {
        "number": "33",
        "name": "Corphish",
        "type": "Water",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/33.png"
    },
    {
        "number": "34",
        "name": "Kyogre",
        "type": "Water",
        "rarity": "Rare Holo",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/34.png"
    },
    {
        "number": "35",
        "name": "Snover",
        "type": "Water",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/35.png"
    },
    {
        "number": "36",
        "name": "Mega Abomasnow ex",
        "type": "Water",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/36.png"
    },
    {
        "number": "37",
        "name": "Clauncher",
        "type": "Water",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/37.png"
    },
    {
        "number": "38",
        "name": "Clawitzer",
        "type": "Water",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/38.png"
    },
    {
        "number": "39",
        "name": "Sobble",
        "type": "Water",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/39.png"
    },
    {
        "number": "40",
        "name": "Drizzile",
        "type": "Water",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/40.png"
    },
    {
        "number": "41",
        "name": "Inteleon",
        "type": "Water",
        "rarity": "Rare Holo",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/41.png"
    },
    {
        "number": "42",
        "name": "Snom",
        "type": "Water",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/42.png"
    },
    {
        "number": "43",
        "name": "Frosmoth",
        "type": "Water",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/43.png"
    },
    {
        "number": "44",
        "name": "Eiscue",
        "type": "Water",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/44.png"
    },
    {
        "number": "45",
        "name": "Magnemite",
        "type": "Lightning",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/45.png"
    },
    {
        "number": "46",
        "name": "Magneton",
        "type": "Lightning",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/46.png"
    },
    {
        "number": "47",
        "name": "Magnezone",
        "type": "Lightning",
        "rarity": "Rare Holo",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/47.png"
    },
    {
        "number": "48",
        "name": "Raikou",
        "type": "Lightning",
        "rarity": "Rare Holo",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/48.png"
    },
    {
        "number": "49",
        "name": "Electrike",
        "type": "Lightning",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/49.png"
    },
    {
        "number": "50",
        "name": "Mega Manectric ex",
        "type": "Lightning",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/50.png"
    },
    {
        "number": "51",
        "name": "Pachirisu",
        "type": "Lightning",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/51.png"
    },
    {
        "number": "52",
        "name": "Helioptile",
        "type": "Lightning",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/52.png"
    },
    {
        "number": "53",
        "name": "Heliolisk",
        "type": "Lightning",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/53.png"
    },
    {
        "number": "54",
        "name": "Abra",
        "type": "Psychic",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/54.png"
    },
    {
        "number": "55",
        "name": "Kadabra",
        "type": "Psychic",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/55.png"
    },
    {
        "number": "56",
        "name": "Alakazam",
        "type": "Psychic",
        "rarity": "Rare Holo",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/56.png"
    },
    {
        "number": "57",
        "name": "Jynx",
        "type": "Psychic",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/57.png"
    },
    {
        "number": "58",
        "name": "Ralts",
        "type": "Psychic",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/58.png"
    },
    {
        "number": "59",
        "name": "Kirlia",
        "type": "Psychic",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/59.png"
    },
    {
        "number": "60",
        "name": "Mega Gardevoir ex",
        "type": "Psychic",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/60.png"
    },
    {
        "number": "61",
        "name": "Shedinja",
        "type": "Psychic",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/61.png"
    },
    {
        "number": "62",
        "name": "Spoink",
        "type": "Psychic",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/62.png"
    },
    {
        "number": "63",
        "name": "Grumpig",
        "type": "Psychic",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/63.png"
    },
    {
        "number": "64",
        "name": "Xerneas",
        "type": "Psychic",
        "rarity": "Rare Holo",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/64.png"
    },
    {
        "number": "65",
        "name": "Greavard",
        "type": "Psychic",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/65.png"
    },
    {
        "number": "66",
        "name": "Houndstone",
        "type": "Psychic",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/66.png"
    },
    {
        "number": "67",
        "name": "Gimmighoul",
        "type": "Psychic",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/67.png"
    },
    {
        "number": "68",
        "name": "Sandshrew",
        "type": "Fighting",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/68.png"
    },
    {
        "number": "69",
        "name": "Sandslash",
        "type": "Fighting",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/69.png"
    },
    {
        "number": "70",
        "name": "Onix",
        "type": "Fighting",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/70.png"
    },
    {
        "number": "71",
        "name": "Tyrogue",
        "type": "Fighting",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/71.png"
    },
    {
        "number": "72",
        "name": "Makuhita",
        "type": "Fighting",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/72.png"
    },
    {
        "number": "73",
        "name": "Hariyama",
        "type": "Fighting",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/73.png"
    },
    {
        "number": "74",
        "name": "Lunatone",
        "type": "Fighting",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/74.png"
    },
    {
        "number": "75",
        "name": "Solrock",
        "type": "Fighting",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/75.png"
    },
    {
        "number": "76",
        "name": "Riolu",
        "type": "Fighting",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/76.png"
    },
    {
        "number": "77",
        "name": "Mega Lucario ex",
        "type": "Fighting",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/77.png"
    },
    {
        "number": "78",
        "name": "Croagunk",
        "type": "Fighting",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/78.png"
    },
    {
        "number": "79",
        "name": "Toxicroak",
        "type": "Fighting",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/79.png"
    },
    {
        "number": "80",
        "name": "Marshadow",
        "type": "Fighting",
        "rarity": "Rare Holo",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/80.png"
    },
    {
        "number": "81",
        "name": "Stonjourner",
        "type": "Fighting",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/81.png"
    },
    {
        "number": "82",
        "name": "Nacli",
        "type": "Fighting",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/82.png"
    },
    {
        "number": "83",
        "name": "Naclstack",
        "type": "Fighting",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/83.png"
    },
    {
        "number": "84",
        "name": "Garganacl",
        "type": "Fighting",
        "rarity": "Rare Holo",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/84.png"
    },
    {
        "number": "85",
        "name": "Crawdaunt",
        "type": "Darkness",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/85.png"
    },
    {
        "number": "86",
        "name": "Mega Absol ex",
        "type": "Darkness",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/86.png"
    },
    {
        "number": "87",
        "name": "Spiritomb",
        "type": "Darkness",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/87.png"
    },
    {
        "number": "88",
        "name": "Yveltal",
        "type": "Darkness",
        "rarity": "Rare Holo",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/88.png"
    },
    {
        "number": "89",
        "name": "Nickit",
        "type": "Darkness",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/89.png"
    },
    {
        "number": "90",
        "name": "Thievul",
        "type": "Darkness",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/90.png"
    },
    {
        "number": "91",
        "name": "Shroodle",
        "type": "Darkness",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/91.png"
    },
    {
        "number": "92",
        "name": "Grafaiai",
        "type": "Darkness",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/92.png"
    },
    {
        "number": "93",
        "name": "Steelix",
        "type": "Metal",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/93.png"
    },
    {
        "number": "94",
        "name": "Mega Mawile ex",
        "type": "Metal",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/94.png"
    },
    {
        "number": "95",
        "name": "Dialga",
        "type": "Metal",
        "rarity": "Rare Holo",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/95.png"
    },
    {
        "number": "96",
        "name": "Tinkatink",
        "type": "Metal",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/96.png"
    },
    {
        "number": "97",
        "name": "Tinkatuff",
        "type": "Metal",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/97.png"
    },
    {
        "number": "98",
        "name": "Tinkaton",
        "type": "Metal",
        "rarity": "Rare Holo",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/98.png"
    },
    {
        "number": "99",
        "name": "Gholdengo",
        "type": "Metal",
        "rarity": "Rare Holo",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/99.png"
    },
    {
        "number": "100",
        "name": "Mega Latias ex",
        "type": "Dragon",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/100.png"
    },
    {
        "number": "101",
        "name": "Latios",
        "type": "Dragon",
        "rarity": "Rare Holo",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/101.png"
    },
    {
        "number": "102",
        "name": "Spearow",
        "type": "Colorless",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/102.png"
    },
    {
        "number": "103",
        "name": "Fearow",
        "type": "Colorless",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/103.png"
    },
    {
        "number": "104",
        "name": "Mega Kangaskhan ex",
        "type": "Colorless",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/104.png"
    },
    {
        "number": "105",
        "name": "Delibird",
        "type": "Colorless",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/105.png"
    },
    {
        "number": "106",
        "name": "Miltank",
        "type": "Colorless",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/106.png"
    },
    {
        "number": "107",
        "name": "Buneary",
        "type": "Colorless",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/107.png"
    },
    {
        "number": "108",
        "name": "Lopunny",
        "type": "Colorless",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/108.png"
    },
    {
        "number": "109",
        "name": "Yungoos",
        "type": "Colorless",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/109.png"
    },
    {
        "number": "110",
        "name": "Gumshoos",
        "type": "Colorless",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/110.png"
    },
    {
        "number": "111",
        "name": "Stufful",
        "type": "Colorless",
        "rarity": "Common",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/111.png"
    },
    {
        "number": "112",
        "name": "Bewear",
        "type": "Colorless",
        "rarity": "Uncommon",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/112.png"
    },
    {
        "number": "113",
        "name": "Acerola's Mischief",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/meg/113.png"
    },
    {
        "number": "114",
        "name": "Boss's Orders",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/meg/114.png"
    },
    {
        "number": "115",
        "name": "Energy Switch",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/meg/115.png"
    },
    {
        "number": "116",
        "name": "Fighting Gong",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/meg/116.png"
    },
    {
        "number": "117",
        "name": "Forest of Vitality",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/meg/117.png"
    },
    {
        "number": "118",
        "name": "Iron Defender",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/meg/118.png"
    },
    {
        "number": "119",
        "name": "Lillie's Determination",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/meg/119.png"
    },
    {
        "number": "120",
        "name": "Lt. Surge's Bargain",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/meg/120.png"
    },
    {
        "number": "121",
        "name": "Mega Signal",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/meg/121.png"
    },
    {
        "number": "122",
        "name": "Mystery Garden",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/meg/122.png"
    },
    {
        "number": "123",
        "name": "Pokémon Center Lady",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/meg/123.png"
    },
    {
        "number": "124",
        "name": "Premium Power Pro",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/meg/124.png"
    },
    {
        "number": "125",
        "name": "Rare Candy",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/meg/125.png"
    },
    {
        "number": "126",
        "name": "Repel",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/meg/126.png"
    },
    {
        "number": "127",
        "name": "Risky Ruins",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/meg/127.png"
    },
    {
        "number": "128",
        "name": "Strange Timepiece",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/meg/128.png"
    },
    {
        "number": "129",
        "name": "Surfing Beach",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/meg/129.png"
    },
    {
        "number": "130",
        "name": "Switch",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/meg/130.png"
    },
    {
        "number": "131",
        "name": "Ultra Ball",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/meg/131.png"
    },
    {
        "number": "132",
        "name": "Wally's Compassion",
        "type": "Trainer",
        "rarity": "Uncommon",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/meg/132.png"
    },
    {
        "number": "133",
        "name": "Bulbasaur",
        "type": "Grass",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/133.png"
    },
    {
        "number": "134",
        "name": "Ivysaur",
        "type": "Grass",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/134.png"
    },
    {
        "number": "135",
        "name": "Exeggutor",
        "type": "Grass",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/135.png"
    },
    {
        "number": "136",
        "name": "Shuckle",
        "type": "Grass",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/136.png"
    },
    {
        "number": "137",
        "name": "Ninjask",
        "type": "Grass",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/137.png"
    },
    {
        "number": "138",
        "name": "Vulpix",
        "type": "Fire",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/138.png"
    },
    {
        "number": "139",
        "name": "Litleo",
        "type": "Fire",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/139.png"
    },
    {
        "number": "140",
        "name": "Snover",
        "type": "Water",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/140.png"
    },
    {
        "number": "141",
        "name": "Clawitzer",
        "type": "Water",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/141.png"
    },
    {
        "number": "142",
        "name": "Inteleon",
        "type": "Water",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/142.png"
    },
    {
        "number": "143",
        "name": "Helioptile",
        "type": "Lightning",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/143.png"
    },
    {
        "number": "144",
        "name": "Shedinja",
        "type": "Psychic",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/144.png"
    },
    {
        "number": "145",
        "name": "Houndstone",
        "type": "Psychic",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/145.png"
    },
    {
        "number": "146",
        "name": "Marshadow",
        "type": "Fighting",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/146.png"
    },
    {
        "number": "147",
        "name": "Garganacl",
        "type": "Fighting",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/147.png"
    },
    {
        "number": "148",
        "name": "Spiritomb",
        "type": "Darkness",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/148.png"
    },
    {
        "number": "149",
        "name": "Shroodle",
        "type": "Darkness",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/149.png"
    },
    {
        "number": "150",
        "name": "Steelix",
        "type": "Metal",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/150.png"
    },
    {
        "number": "151",
        "name": "Spearow",
        "type": "Colorless",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/151.png"
    },
    {
        "number": "152",
        "name": "Delibird",
        "type": "Colorless",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/152.png"
    },
    {
        "number": "153",
        "name": "Gumshoos",
        "type": "Colorless",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/153.png"
    },
    {
        "number": "154",
        "name": "Stufful",
        "type": "Colorless",
        "rarity": "Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/154.png"
    },
    {
        "number": "155",
        "name": "Mega Venusaur ex",
        "type": "Grass",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/155.png"
    },
    {
        "number": "156",
        "name": "Mega Camerupt ex",
        "type": "Fire",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/156.png"
    },
    {
        "number": "157",
        "name": "Mega Abomasnow ex",
        "type": "Water",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/157.png"
    },
    {
        "number": "158",
        "name": "Mega Manectric ex",
        "type": "Lightning",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/158.png"
    },
    {
        "number": "159",
        "name": "Mega Gardevoir ex",
        "type": "Psychic",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/159.png"
    },
    {
        "number": "160",
        "name": "Mega Lucario ex",
        "type": "Fighting",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/160.png"
    },
    {
        "number": "161",
        "name": "Mega Absol ex",
        "type": "Darkness",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/161.png"
    },
    {
        "number": "162",
        "name": "Mega Mawile ex",
        "type": "Metal",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/162.png"
    },
    {
        "number": "163",
        "name": "Mega Latias ex",
        "type": "Dragon",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/163.png"
    },
    {
        "number": "164",
        "name": "Mega Kangaskhan ex",
        "type": "Colorless",
        "rarity": "Ultra Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/164.png"
    },
    {
        "number": "165",
        "name": "Acerola's Mischief",
        "type": "Trainer",
        "rarity": "Ultra Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/meg/165.png"
    },
    {
        "number": "166",
        "name": "Air Balloon",
        "type": "Trainer",
        "rarity": "Ultra Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/meg/166.png"
    },
    {
        "number": "167",
        "name": "Buddy-Buddy Poffin",
        "type": "Trainer",
        "rarity": "Ultra Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/meg/167.png"
    },
    {
        "number": "168",
        "name": "Fighting Gong",
        "type": "Trainer",
        "rarity": "Ultra Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/meg/168.png"
    },
    {
        "number": "169",
        "name": "Lillie's Determination",
        "type": "Trainer",
        "rarity": "Ultra Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/meg/169.png"
    },
    {
        "number": "170",
        "name": "Lt. Surge's Bargain",
        "type": "Trainer",
        "rarity": "Ultra Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/meg/170.png"
    },
    {
        "number": "171",
        "name": "Mega Signal",
        "type": "Trainer",
        "rarity": "Ultra Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/meg/171.png"
    },
    {
        "number": "172",
        "name": "Mystery Garden",
        "type": "Trainer",
        "rarity": "Ultra Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/meg/172.png"
    },
    {
        "number": "173",
        "name": "Night Stretcher",
        "type": "Trainer",
        "rarity": "Ultra Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/meg/173.png"
    },
    {
        "number": "174",
        "name": "Premium Power Pro",
        "type": "Trainer",
        "rarity": "Ultra Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/meg/174.png"
    },
    {
        "number": "175",
        "name": "Rare Candy",
        "type": "Trainer",
        "rarity": "Ultra Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/meg/175.png"
    },
    {
        "number": "176",
        "name": "Wally's Compassion",
        "type": "Trainer",
        "rarity": "Ultra Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/meg/176.png"
    },
    {
        "number": "177",
        "name": "Mega Venusaur ex",
        "type": "Grass",
        "rarity": "Special Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/177.png"
    },
    {
        "number": "178",
        "name": "Mega Gardevoir ex",
        "type": "Psychic",
        "rarity": "Special Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/178.png"
    },
    {
        "number": "179",
        "name": "Mega Lucario ex",
        "type": "Fighting",
        "rarity": "Special Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/179.png"
    },
    {
        "number": "180",
        "name": "Mega Absol ex",
        "type": "Darkness",
        "rarity": "Special Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/180.png"
    },
    {
        "number": "181",
        "name": "Mega Latias ex",
        "type": "Dragon",
        "rarity": "Special Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/181.png"
    },
    {
        "number": "182",
        "name": "Mega Kangaskhan ex",
        "type": "Colorless",
        "rarity": "Special Illustration Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/182.png"
    },
    {
        "number": "183",
        "name": "Acerola's Mischief",
        "type": "Trainer",
        "rarity": "Special Illustration Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/meg/183.png"
    },
    {
        "number": "184",
        "name": "Lillie's Determination",
        "type": "Trainer",
        "rarity": "Special Illustration Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/meg/184.png"
    },
    {
        "number": "185",
        "name": "Lt. Surge's Bargain",
        "type": "Trainer",
        "rarity": "Special Illustration Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/meg/185.png"
    },
    {
        "number": "186",
        "name": "Wally's Compassion",
        "type": "Trainer",
        "rarity": "Special Illustration Rare",
        "category": "Trainer",
        "imageUrl": "https://images.pokemontcg.io/meg/186.png"
    },
    {
        "number": "187",
        "name": "Mega Gardevoir ex",
        "type": "Psychic",
        "rarity": "Mega Hyper Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/187.png"
    },
    {
        "number": "188",
        "name": "Mega Lucario ex",
        "type": "Fighting",
        "rarity": "Mega Hyper Rare",
        "category": "Pokémon",
        "imageUrl": "https://images.pokemontcg.io/meg/188.png"
    }

]
    }
};

// Legacy export for backward compatibility
const PHANTASMAL_FLAMES_CARDS = CARD_SETS["phantasmal-flames"].cards;

// Export for use in app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CARD_SETS, PHANTASMAL_FLAMES_CARDS };
}
