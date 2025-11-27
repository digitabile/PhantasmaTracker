// Pokemon Card Collection - Multi-Set Pricing
// Market prices based on TCGPlayer, PriceCharting, and other reputable sources
// Last updated: November 2025

const CARD_PRICING = {
    "phantasmal-flames": {
    // Main Set Cards (001-094)
    // Only Common, Uncommon, and Rare cards have reverse holo variants
    // Double Rare ex cards and Trainers have only one variant

    "001": { normal: 0.10, reverseHolo: 0.25 }, // Oddish (Common)
    "002": { normal: 0.10, reverseHolo: 0.25 }, // Gloom (Common)
    "003": { normal: 0.50, reverseHolo: 1.25 }, // Vileplume (Rare)
    "004": 3.50, // Mega Heracross ex (Double Rare) - single variant only
    "005": { normal: 0.10, reverseHolo: 0.25 }, // Lotad (Common)
    "006": { normal: 0.10, reverseHolo: 0.25 }, // Lombre (Common)
    "007": { normal: 0.25, reverseHolo: 0.60 }, // Ludicolo (Uncommon)
    "008": { normal: 0.75, reverseHolo: 1.75 }, // Genesect (Rare)
    "009": { normal: 0.10, reverseHolo: 0.25 }, // Nymble (Common)
    "010": { normal: 0.20, reverseHolo: 0.50 }, // Lokix (Uncommon)
    "011": { normal: 0.15, reverseHolo: 0.40 }, // Charmander (Common - popular)
    "012": { normal: 0.20, reverseHolo: 0.50 }, // Charmeleon (Common)
    "013": 25.00, // Mega Charizard X ex (Double Rare) - single variant only
    "014": { normal: 1.00, reverseHolo: 2.25 }, // Moltres (Rare)
    "015": { normal: 0.10, reverseHolo: 0.25 }, // Darumaka (Common)
    "016": { normal: 0.25, reverseHolo: 0.60 }, // Darmanitan (Uncommon)
    "017": { normal: 1.25, reverseHolo: 2.75 }, // Reshiram (Rare)
    "018": 4.50, // Oricorio ex (Double Rare) - single variant only
    "019": { normal: 0.10, reverseHolo: 0.25 }, // Charcadet
    "020": { normal: 0.25, reverseHolo: 0.60 }, // Ceruledge (Uncommon)
    "021": { normal: 0.10, reverseHolo: 0.25 }, // Seel
    "022": { normal: 0.20, reverseHolo: 0.45 }, // Dewgong (Common)
    "023": { normal: 0.10, reverseHolo: 0.25 }, // Swinub
    "024": { normal: 0.10, reverseHolo: 0.25 }, // Piloswine
    "025": { normal: 0.25, reverseHolo: 0.60 }, // Mamoswine (Uncommon)
    "026": { normal: 0.75, reverseHolo: 1.75 }, // Suicune (Rare)
    "027": { normal: 0.25, reverseHolo: 0.60 }, // Piplup (Common - popular)
    "028": { normal: 0.20, reverseHolo: 0.50 }, // Prinplup (Common)
    "029": 4.50, // Rotom ex (Double Rare) - single variant only
    "030": { normal: 0.15, reverseHolo: 0.35 }, // Yamper
    "031": { normal: 0.20, reverseHolo: 0.50 }, // Boltund
    "032": { normal: 0.10, reverseHolo: 0.25 }, // Pawmi
    "033": { normal: 0.10, reverseHolo: 0.25 }, // Pawmo
    "034": { normal: 0.60, reverseHolo: 1.50 }, // Pawmot (Rare)
    "035": { normal: 0.15, reverseHolo: 0.35 }, // Misdreavus (Common)
    "036": 4.75, // Mismagius ex (Double Rare) - single variant only
    "037": { normal: 0.10, reverseHolo: 0.25 }, // Snubbull
    "038": { normal: 0.25, reverseHolo: 0.60 }, // Granbull (Uncommon)
    "039": { normal: 0.30, reverseHolo: 0.70 }, // Cresselia (Uncommon)
    "040": { normal: 0.30, reverseHolo: 0.70 }, // Meloetta (Uncommon)
    "041": 5.00, // Mega Diancie ex (Double Rare) - single variant only
    "042": { normal: 0.30, reverseHolo: 0.75 }, // Mimikyu (Common - popular)
    "043": { normal: 0.10, reverseHolo: 0.25 }, // Milcery
    "044": { normal: 0.25, reverseHolo: 0.60 }, // Alcremie (Uncommon)
    "045": { normal: 0.75, reverseHolo: 1.75 }, // Zacian (Rare)
    "046": { normal: 0.10, reverseHolo: 0.25 }, // Bramblin
    "047": { normal: 0.25, reverseHolo: 0.60 }, // Brambleghast (Uncommon)
    "048": { normal: 0.25, reverseHolo: 0.60 }, // Paldean Tauros (Uncommon)
    "049": { normal: 0.10, reverseHolo: 0.25 }, // Gligar
    "050": { normal: 0.25, reverseHolo: 0.60 }, // Gliscor (Uncommon)
    "051": { normal: 0.10, reverseHolo: 0.25 }, // Trapinch
    "052": { normal: 0.10, reverseHolo: 0.25 }, // Vibrava
    "053": { normal: 0.50, reverseHolo: 1.25 }, // Flygon (Rare)
    "054": { normal: 0.20, reverseHolo: 0.50 }, // Gastly (Common - popular)
    "055": { normal: 0.25, reverseHolo: 0.60 }, // Haunter (Uncommon)
    "056": 6.50, // Mega Gengar ex (Double Rare) - single variant only
    "057": { normal: 0.10, reverseHolo: 0.25 }, // Murkrow
    "058": { normal: 0.25, reverseHolo: 0.60 }, // Honchkrow (Uncommon)
    "059": { normal: 0.15, reverseHolo: 0.35 }, // Sableye (Common)
    "060": { normal: 0.10, reverseHolo: 0.25 }, // Carvanha (Common)
    "061": 4.50, // Mega Sharpedo ex (Double Rare) - single variant only
    "062": { normal: 0.25, reverseHolo: 0.60 }, // Seviper (Uncommon)
    "063": { normal: 0.15, reverseHolo: 0.35 }, // Absol
    "064": { normal: 0.10, reverseHolo: 0.25 }, // Sandile
    "065": { normal: 0.10, reverseHolo: 0.25 }, // Krokorok
    "066": { normal: 0.25, reverseHolo: 0.60 }, // Krookodile (Uncommon)
    "067": { normal: 0.10, reverseHolo: 0.25 }, // Toxel (Common)
    "068": { normal: 0.60, reverseHolo: 1.50 }, // Toxtricity (Rare)
    "069": { normal: 0.30, reverseHolo: 0.70 }, // Eternatus (Uncommon)
    "070": 4.75, // Empoleon ex (Double Rare) - single variant only
    "071": { normal: 0.10, reverseHolo: 0.25 }, // Bronzor
    "072": { normal: 0.25, reverseHolo: 0.60 }, // Bronzong (Uncommon)
    "073": { normal: 0.15, reverseHolo: 0.35 }, // Togedemaru
    "074": { normal: 0.10, reverseHolo: 0.25 }, // Duraludon
    "075": { normal: 0.25, reverseHolo: 0.60 }, // Archaludon (Uncommon)
    "076": { normal: 0.20, reverseHolo: 0.50 }, // Jigglypuff (Common - popular)
    "077": { normal: 0.25, reverseHolo: 0.60 }, // Wigglytuff (Uncommon)
    "078": { normal: 0.10, reverseHolo: 0.25 }, // Aipom
    "079": { normal: 0.50, reverseHolo: 1.25 }, // Ambipom (Rare)
    "080": { normal: 0.20, reverseHolo: 0.50 }, // Smeargle
    "081": { normal: 0.10, reverseHolo: 0.25 }, // Zigzagoon (Common)
    "082": { normal: 0.25, reverseHolo: 0.60 }, // Linoone (Uncommon)
    "083": { normal: 0.10, reverseHolo: 0.25 }, // Buneary (Common)
    "084": 5.25, // Mega Lopunny ex (Double Rare) - single variant only
    "085": { normal: 0.25, reverseHolo: 0.60 }, // Battle Cage (Trainer Uncommon)
    "086": { normal: 0.25, reverseHolo: 0.60 }, // Blowtorch (Trainer Uncommon)
    "087": { normal: 0.30, reverseHolo: 0.70 }, // Dawn (Trainer Uncommon)
    "088": { normal: 0.25, reverseHolo: 0.60 }, // Dizzying Valley (Trainer Uncommon)
    "089": { normal: 0.25, reverseHolo: 0.60 }, // Firebreather (Trainer Uncommon)
    "090": { normal: 0.30, reverseHolo: 0.70 }, // Grimsley's Move (Trainer Uncommon)
    "091": { normal: 0.25, reverseHolo: 0.60 }, // Jumbo Ice Cream (Trainer Uncommon)
    "092": { normal: 0.25, reverseHolo: 0.60 }, // Punk Helmet (Trainer Uncommon)
    "093": { normal: 0.30, reverseHolo: 0.70 }, // Sacred Charm (Trainer Uncommon)
    "094": { normal: 0.25, reverseHolo: 0.60 }, // Wondrous Patch (Trainer Uncommon)

    // Illustration Rares (095-107) - Holofoil only, no reverse holo variant
    "095": 6.50, // Ludicolo (Illustration Rare)
    "096": 8.00, // Nymble (Illustration Rare)
    "097": 9.50, // Dewgong (Illustration Rare)
    "098": 29.88, // Piplup (Illustration Rare) - confirmed price
    "099": 12.00, // Yamper (Illustration Rare)
    "100": 14.50, // Zacian (Illustration Rare)
    "101": 10.50, // Flygon (Illustration Rare)
    "102": 8.50, // Paldean Wooper (Illustration Rare)
    "103": 12.50, // Toxtricity (Illustration Rare)
    "104": 13.00, // Togedemaru (Illustration Rare)
    "105": 16.00, // Wigglytuff (Illustration Rare)
    "106": 41.01, // Meowth (Illustration Rare) - confirmed price
    "107": 11.00, // Ambipom (Illustration Rare)

    // Ultra Rares (108-124) - Holofoil only, no reverse holo variant
    "108": 8.50, // Mega Heracross ex (Ultra Rare)
    "109": 82.27, // Mega Charizard X ex (Ultra Rare) - high demand
    "110": 7.50, // Oricorio ex (Ultra Rare)
    "111": 11.00, // Rotom ex (Ultra Rare)
    "112": 8.75, // Mismagius ex (Ultra Rare)
    "113": 13.50, // Mega Sharpedo ex (Ultra Rare)
    "114": 10.00, // Empoleon ex (Ultra Rare)
    "115": 12.50, // Mega Lopunny ex (Ultra Rare)
    "116": 4.50, // Battle Cage (Trainer Ultra Rare)
    "117": 4.75, // Blowtorch (Trainer Ultra Rare)
    "118": 7.00, // Dawn (Trainer Ultra Rare)
    "119": 4.25, // Firebreather (Trainer Ultra Rare)
    "120": 5.00, // Grimsley's Move (Trainer Ultra Rare)
    "121": 5.25, // Punk Helmet (Trainer Ultra Rare)
    "122": 5.75, // Sacred Charm (Trainer Ultra Rare)
    "123": 7.50, // Switch (Trainer Ultra Rare)
    "124": 9.00, // Ignition Energy (Energy Ultra Rare)

    // Special Illustration Rares (125-129) - Premium holofoil only
    "125": 790.00, // Mega Charizard X ex (Special Illustration Rare) - chase card
    "126": 43.27, // Rotom ex (Special Illustration Rare) - confirmed price
    "127": 59.23, // Mega Sharpedo ex (Special Illustration Rare) - confirmed price
    "128": 65.00, // Mega Lopunny ex (Special Illustration Rare)
    "129": 55.00, // Dawn (Special Illustration Rare)

    // Mega Hyper Rare (130) - Premium holofoil only
    "130": 850.00  // Mega Charizard X ex (Mega Hyper Rare) - top chase card
},
    "scarlet-violet": {
    "1": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "2": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "3": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "4": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "5": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "6": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "7": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "8": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "9": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "10": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "11": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "12": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "13": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "14": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "15": {
        "normal": 0.75,
        "reverseHolo": 1.75
    },
    "16": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "17": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "18": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "19": 1.25, // Spidops ex (Double Rare)
    "20": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "21": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "22": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "23": {
        "normal": 0.75,
        "reverseHolo": 1.75
    },
    "24": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "25": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "26": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "27": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "28": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "29": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "30": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "31": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "32": 2.50, // Arcanine ex (Double Rare)
    "33": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "34": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "35": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "36": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "37": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "38": {
        "normal": 0.75,
        "reverseHolo": 1.75
    },
    "39": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "40": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "41": {
        "normal": 0.75,
        "reverseHolo": 1.75
    },
    "42": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "43": {
        "normal": 0.75,
        "reverseHolo": 1.75
    },
    "44": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "45": 2.75, // Gyarados ex (Double Rare)
    "46": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "47": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "48": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "49": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "50": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "51": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "52": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "53": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "54": {
        "normal": 0.75,
        "reverseHolo": 1.75
    },
    "55": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "56": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "57": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "58": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "59": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "60": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "61": {
        "normal": 0.75,
        "reverseHolo": 1.75
    },
    "62": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "63": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "64": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "65": 2.25, // Magnezone ex (Double Rare)
    "66": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "67": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "68": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "69": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "70": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "71": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "72": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "73": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "74": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "75": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "76": {
        "normal": 0.75,
        "reverseHolo": 1.75
    },
    "77": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "78": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "79": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "80": {
        "normal": 0.75,
        "reverseHolo": 1.75
    },
    "81": 1.75, // Miraidon ex (Double Rare - box promo)
    "82": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "83": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "84": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "85": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "86": 4.50, // Gardevoir ex (Double Rare - popular/playable)
    "87": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "88": 1.25, // Banette ex (Double Rare)
    "89": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "90": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "91": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "92": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "93": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "94": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "95": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "96": {
        "normal": 0.75,
        "reverseHolo": 1.75
    },
    "97": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "98": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "99": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "100": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "101": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "102": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "103": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "104": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "105": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "106": {
        "normal": 0.75,
        "reverseHolo": 1.75
    },
    "107": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "108": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "109": {
        "normal": 0.75,
        "reverseHolo": 1.75
    },
    "110": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "111": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "112": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "113": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "114": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "115": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "116": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "117": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "118": {
        "normal": 0.75,
        "reverseHolo": 1.75
    },
    "119": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "120": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "121": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "122": {
        "normal": 0.75,
        "reverseHolo": 1.75
    },
    "123": 3.50, // Great Tusk ex (Double Rare - playable)
    "124": {
        "normal": 0.75,
        "reverseHolo": 1.75
    },
    "125": 1.50, // Koraidon ex (Double Rare - box promo)
    "126": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "127": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "128": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "129": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "130": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "131": 1.25, // Toxicroak ex (Double Rare)
    "132": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "133": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "134": {
        "normal": 0.75,
        "reverseHolo": 1.75
    },
    "135": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "136": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "137": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "138": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "139": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "140": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "141": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "142": {
        "normal": 0.75,
        "reverseHolo": 1.75
    },
    "143": 2.50, // Iron Treads ex (Double Rare - paradox)
    "144": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "145": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "146": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "147": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "148": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "149": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "150": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "151": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "152": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "153": {
        "normal": 0.75,
        "reverseHolo": 1.75
    },
    "154": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "155": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "156": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "157": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "158": 1.25, // Oinkologne ex (Double Rare)
    "159": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "160": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "161": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "162": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "163": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "164": {
        "normal": 0.75,
        "reverseHolo": 1.75
    },
    "165": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "166": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "167": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "168": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "169": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "170": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "171": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "172": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "173": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "174": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "175": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "176": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "177": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "178": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "179": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "180": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "181": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "182": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "183": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "184": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "185": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "186": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "187": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "188": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "189": {
        "normal": 0.75,
        "reverseHolo": 1.75
    },
    "190": {
        "normal": 0.75,
        "reverseHolo": 1.75
    },
    "191": { // Rare Candy - playable staple
        "normal": 0.50,
        "reverseHolo": 2.50
    },
    "192": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "193": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "194": {
        "normal": 0.1,
        "reverseHolo": 0.25
    },
    "195": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "196": { // Ultra Ball - staple trainer
        "normal": 1.50,
        "reverseHolo": 5.70
    },
    "197": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    "198": {
        "normal": 0.25,
        "reverseHolo": 0.6
    },
    // Illustration Rares (#199-222) - varied pricing based on popularity
    "199": 1.75, // Dolliv
    "200": 1.50, // Toedscool
    "201": 2.25, // Scovillain
    "202": 3.50, // Armarouge - popular Gen 9
    "203": 5.50, // Slowpoke - very popular Pokemon
    "204": 2.00, // Clauncher
    "205": 2.50, // Wiglett - new Gen 9
    "206": 3.00, // Dondozo - popular Gen 9
    "207": 3.50, // Pachirisu - cute/popular
    "208": 3.25, // Pawmot - popular Gen 9
    "209": 2.25, // Drowzee
    "210": 6.00, // Ralts - very popular Pokemon line
    "211": 5.50, // Kirlia - popular Pokemon line
    "212": 4.50, // Fidough - cute/popular Gen 9
    "213": 3.75, // Greavard - popular Gen 9
    "214": 5.00, // Riolu - very popular Pokemon
    "215": 2.00, // Sandile
    "216": 2.75, // Klawf - Gen 9
    "217": 3.50, // Mabosstiff - popular Gen 9
    "218": 2.50, // Bombirdier - Gen 9
    "219": 4.00, // Kingambit - competitive/popular
    "220": 2.00, // Starly
    "221": 1.75, // Skwovet
    "222": 3.00, // Energy search
    // Ultra Rares / Full Arts (#223-242) - based on playability & popularity
    "223": 2.50, // Spidops ex (Full Art)
    "224": 4.50, // Arcanine ex (Full Art) - popular
    "225": 5.00, // Gyarados ex (Full Art) - popular
    "226": 3.50, // Magnezone ex (Full Art)
    "227": 3.25, // Miraidon ex (Full Art) - box promo
    "228": 9.50, // Gardevoir ex (Full Art) - very popular/playable
    "229": 2.75, // Banette ex (Full Art)
    "230": 5.50, // Great Tusk ex (Full Art) - playable
    "231": 2.75, // Koraidon ex (Full Art) - box promo
    "232": 2.50, // Toxicroak ex (Full Art)
    "233": 4.00, // Iron Treads ex (Full Art) - paradox
    "234": 2.25, // Oinkologne ex (Full Art)
    "235": 6.50, // Arven (Full Art) - popular/playable
    "236": 2.50, // Jacq (Full Art)
    "237": 2.75, // Katy (Full Art)
    "238": 3.50, // Miriam (Full Art)
    "239": 5.00, // Penny (Full Art) - popular character
    "240": 7.50, // Professor's Research Sada (Full Art) - staple
    "241": 7.00, // Professor's Research Turo (Full Art) - staple
    "242": 2.50, // Team Star Grunt (Full Art)
    // Special Illustration Rares (#243-252) - premium artwork variants
    "243": 7.50, // Spidops ex (SIR)
    "244": 20.00, // Miraidon ex (SIR) - legendary, nice art
    "245": 40.00, // Gardevoir ex (SIR) - very popular, beautiful art
    "246": 14.00, // Great Tusk ex (SIR) - playable paradox
    "247": 17.00, // Koraidon ex (SIR) - legendary, good art
    "248": 11.00, // Iron Treads ex (SIR) - paradox
    "249": 18.00, // Arven (SIR) - popular character, good art
    "250": 9.00, // Jacq (SIR)
    "251": 12.00, // Miriam (SIR)
    "252": 23.00, // Penny (SIR) - very popular character
    // Hyper Rares (#253-258) - gold cards
    "253": 9.00, // Miraidon ex (Hyper/Gold) - widely available
    "254": 7.00, // Koraidon ex (Hyper/Gold) - widely available
    "255": 3.50, // Nest Ball (Hyper/Gold)
    "256": 9.50, // Rare Candy (Hyper/Gold) - playable staple
    "257": 2.50, // Basic Lightning Energy (Hyper/Gold)
    "258": 2.25  // Basic Fighting Energy (Hyper/Gold)
},
"pokemon-go": {
    "1": { normal: 0.1, reverseHolo: 0.5 },
    "2": { normal: 0.15, reverseHolo: 0.5 },
    "3": { normal: 2, reverseHolo: 3.5 },
    "4": 6.15,
    "5": 0.75,
    "6": { normal: 0.1, reverseHolo: 0.5 },
    "7": { normal: 0.15, reverseHolo: 0.5 },
    "8": { normal: 0.1, reverseHolo: 0.5 },
    "9": { normal: 0.15, reverseHolo: 0.5 },
    "10": { normal: 2, reverseHolo: 3.5 },
    "11": 16.11,
    "12": { normal: 0.75, reverseHolo: 1.5 },
    "13": { normal: 0.1, reverseHolo: 0.5 },
    "14": { normal: 0.15, reverseHolo: 0.5 },
    "15": { normal: 0.1, reverseHolo: 0.5 },
    "16": { normal: 0.15, reverseHolo: 0.5 },
    "17": { normal: 2, reverseHolo: 3.5 },
    "18": 6.08,
    "19": { normal: 0.1, reverseHolo: 0.5 },
    "20": { normal: 0.15, reverseHolo: 0.5 },
    "21": { normal: 0.1, reverseHolo: 0.5 },
    "22": { normal: 2, reverseHolo: 3.5 },
    "23": { normal: 0.75, reverseHolo: 1.5 },
    "24": { normal: 0.75, reverseHolo: 1.5 },
    "25": { normal: 0.1, reverseHolo: 0.5 },
    "26": { normal: 0.75, reverseHolo: 1.5 },
    "27": { normal: 0.1, reverseHolo: 0.5 },
    "28": { normal: 2, reverseHolo: 3.5 },
    "29": { normal: 0.75, reverseHolo: 1.5 },
    "30": 1.5,
    "31": 7,
    "32": { normal: 0.1, reverseHolo: 0.5 },
    "33": { normal: 0.15, reverseHolo: 0.5 },
    "34": { normal: 0.15, reverseHolo: 0.5 },
    "35": { normal: 2, reverseHolo: 3.5 },
    "36": { normal: 0.1, reverseHolo: 0.5 },
    "37": { normal: 0.1, reverseHolo: 0.5 },
    "38": { normal: 0.15, reverseHolo: 0.5 },
    "39": { normal: 0.15, reverseHolo: 0.5 },
    "40": 0.75,
    "41": { normal: 0.1, reverseHolo: 0.5 },
    "42": { normal: 0.1, reverseHolo: 0.5 },
    "43": { normal: 2, reverseHolo: 3.5 },
    "44": { normal: 0.15, reverseHolo: 0.5 },
    "45": { normal: 0.1, reverseHolo: 0.5 },
    "46": { normal: 0.75, reverseHolo: 1.5 },
    "47": 0.75,
    "48": 3.5,
    "49": 1.5,
    "50": 3.5,
    "51": { normal: 0.15, reverseHolo: 0.5 },
    "52": { normal: 0.75, reverseHolo: 1.5 },
    "53": { normal: 2, reverseHolo: 3.5 },
    "54": { normal: 0.1, reverseHolo: 0.5 },
    "55": { normal: 2, reverseHolo: 3.5 },
    "56": { normal: 0.1, reverseHolo: 0.5 },
    "57": { normal: 0.1, reverseHolo: 0.5 },
    "58": 0.75,
    "59": { normal: 0.1, reverseHolo: 0.5 },
    "60": { normal: 0.1, reverseHolo: 0.5 },
    "61": { normal: 0.1, reverseHolo: 0.5 },
    "62": { normal: 0.1, reverseHolo: 0.5 },
    "63": { normal: 0.15, reverseHolo: 0.5 },
    "64": { normal: 0.15, reverseHolo: 0.5 },
    "65": { normal: 0.15, reverseHolo: 0.5 },
    "66": { normal: 0.15, reverseHolo: 0.5 },
    "67": { normal: 0.15, reverseHolo: 0.5 },
    "68": { normal: 0.15, reverseHolo: 0.5 },
    "69": { normal: 0.15, reverseHolo: 0.5 },
    "70": { normal: 0.15, reverseHolo: 0.5 },
    "71": 2.25,
    "72": 57.00, // Mewtwo V (Alternate Full Art) - premium chase card
    "73": 2.5,
    "74": 2.5,
    "75": 2.25,
    "76": 3.5,
    "77": 2.25,
    "78": 3.5,
    "79": 42,
    "80": 9.99,
    "81": 24.99,
    "82": 10,
    "83": 10,
    "84": 12,
    "85": 10,
    "86": 16.99,
    "87": 8,
    "88": 8
},

"mega-evolution": {
    "1": { normal: 0.1, reverseHolo: 0.3 },
    "2": { normal: 0.15, reverseHolo: 0.4 },
    "3": 13.29,
    "4": { normal: 0.1, reverseHolo: 0.3 },
    "5": { normal: 0.15, reverseHolo: 0.4 },
    "6": { normal: 0.1, reverseHolo: 0.3 },
    "7": { normal: 0.15, reverseHolo: 0.4 },
    "8": { normal: 0.1, reverseHolo: 0.3 },
    "9": { normal: 0.15, reverseHolo: 0.4 },
    "10": { normal: 1, reverseHolo: 2 },
    "11": { normal: 0.1, reverseHolo: 0.3 },
    "12": { normal: 2, reverseHolo: 3.5 },
    "13": { normal: 0.1, reverseHolo: 0.3 },
    "14": { normal: 0.15, reverseHolo: 0.4 },
    "15": { normal: 1, reverseHolo: 2 },
    "16": { normal: 0.1, reverseHolo: 0.3 },
    "17": { normal: 0.15, reverseHolo: 0.4 },
    "18": { normal: 1, reverseHolo: 2 },
    "19": { normal: 0.1, reverseHolo: 0.3 },
    "20": { normal: 0.15, reverseHolo: 0.4 },
    "21": { normal: 0.1, reverseHolo: 0.3 },
    "22": 10,
    "23": { normal: 0.1, reverseHolo: 0.3 },
    "24": { normal: 0.15, reverseHolo: 0.4 },
    "25": { normal: 1, reverseHolo: 2 },
    "26": { normal: 0.1, reverseHolo: 0.3 },
    "27": { normal: 0.15, reverseHolo: 0.4 },
    "28": { normal: 1, reverseHolo: 2 },
    "29": { normal: 0.1, reverseHolo: 0.3 },
    "30": { normal: 0.15, reverseHolo: 0.4 },
    "31": { normal: 1, reverseHolo: 2 },
    "32": { normal: 0.15, reverseHolo: 0.4 },
    "33": { normal: 0.1, reverseHolo: 0.3 },
    "34": { normal: 2, reverseHolo: 3.5 },
    "35": { normal: 0.1, reverseHolo: 0.3 },
    "36": 10,
    "37": { normal: 0.1, reverseHolo: 0.3 },
    "38": { normal: 0.15, reverseHolo: 0.4 },
    "39": { normal: 0.1, reverseHolo: 0.3 },
    "40": { normal: 0.15, reverseHolo: 0.4 },
    "41": { normal: 1, reverseHolo: 2 },
    "42": { normal: 0.1, reverseHolo: 0.3 },
    "43": { normal: 0.15, reverseHolo: 0.4 },
    "44": { normal: 0.1, reverseHolo: 0.3 },
    "45": { normal: 0.1, reverseHolo: 0.3 },
    "46": { normal: 0.15, reverseHolo: 0.4 },
    "47": { normal: 1, reverseHolo: 2 },
    "48": { normal: 1, reverseHolo: 2 },
    "49": { normal: 0.1, reverseHolo: 0.3 },
    "50": 10,
    "51": { normal: 0.1, reverseHolo: 0.3 },
    "52": { normal: 0.1, reverseHolo: 0.3 },
    "53": { normal: 0.15, reverseHolo: 0.4 },
    "54": { normal: 0.1, reverseHolo: 0.3 },
    "55": { normal: 0.15, reverseHolo: 0.4 },
    "56": { normal: 1, reverseHolo: 2 },
    "57": { normal: 0.15, reverseHolo: 0.4 },
    "58": { normal: 0.1, reverseHolo: 0.3 },
    "59": { normal: 0.15, reverseHolo: 0.4 },
    "60": 6.14,
    "61": { normal: 0.15, reverseHolo: 0.4 },
    "62": { normal: 0.1, reverseHolo: 0.3 },
    "63": { normal: 0.15, reverseHolo: 0.4 },
    "64": { normal: 2, reverseHolo: 3.5 },
    "65": { normal: 0.1, reverseHolo: 0.3 },
    "66": { normal: 0.15, reverseHolo: 0.4 },
    "67": { normal: 0.1, reverseHolo: 0.3 },
    "68": { normal: 0.1, reverseHolo: 0.3 },
    "69": { normal: 0.15, reverseHolo: 0.4 },
    "70": { normal: 0.1, reverseHolo: 0.3 },
    "71": { normal: 0.1, reverseHolo: 0.3 },
    "72": { normal: 0.1, reverseHolo: 0.3 },
    "73": { normal: 0.15, reverseHolo: 0.4 },
    "74": { normal: 0.15, reverseHolo: 0.4 },
    "75": { normal: 0.15, reverseHolo: 0.4 },
    "76": { normal: 0.1, reverseHolo: 0.3 },
    "77": 14.63,
    "78": { normal: 0.1, reverseHolo: 0.3 },
    "79": { normal: 0.15, reverseHolo: 0.4 },
    "80": { normal: 1, reverseHolo: 2 },
    "81": { normal: 0.15, reverseHolo: 0.4 },
    "82": { normal: 0.1, reverseHolo: 0.3 },
    "83": { normal: 0.15, reverseHolo: 0.4 },
    "84": { normal: 1, reverseHolo: 2 },
    "85": { normal: 0.15, reverseHolo: 0.4 },
    "86": 10,
    "87": { normal: 0.15, reverseHolo: 0.4 },
    "88": { normal: 2, reverseHolo: 3.5 },
    "89": { normal: 0.1, reverseHolo: 0.3 },
    "90": { normal: 0.15, reverseHolo: 0.4 },
    "91": { normal: 0.1, reverseHolo: 0.3 },
    "92": { normal: 0.15, reverseHolo: 0.4 },
    "93": { normal: 0.15, reverseHolo: 0.4 },
    "94": 10,
    "95": { normal: 2, reverseHolo: 3.5 },
    "96": { normal: 0.1, reverseHolo: 0.3 },
    "97": { normal: 0.15, reverseHolo: 0.4 },
    "98": { normal: 1, reverseHolo: 2 },
    "99": { normal: 1, reverseHolo: 2 },
    "100": 12,
    "101": { normal: 1, reverseHolo: 2 },
    "102": { normal: 0.1, reverseHolo: 0.3 },
    "103": { normal: 0.15, reverseHolo: 0.4 },
    "104": 10,
    "105": { normal: 0.1, reverseHolo: 0.3 },
    "106": { normal: 0.15, reverseHolo: 0.4 },
    "107": { normal: 0.1, reverseHolo: 0.3 },
    "108": { normal: 0.15, reverseHolo: 0.4 },
    "109": { normal: 0.1, reverseHolo: 0.3 },
    "110": { normal: 0.15, reverseHolo: 0.4 },
    "111": { normal: 0.1, reverseHolo: 0.3 },
    "112": { normal: 0.15, reverseHolo: 0.4 },
    "113": { normal: 0.15, reverseHolo: 0.4 },
    "114": { normal: 0.15, reverseHolo: 0.4 },
    "115": { normal: 0.15, reverseHolo: 0.4 },
    "116": { normal: 0.15, reverseHolo: 0.4 },
    "117": { normal: 0.15, reverseHolo: 0.4 },
    "118": { normal: 0.15, reverseHolo: 0.4 },
    "119": { normal: 0.15, reverseHolo: 0.4 },
    "120": { normal: 0.15, reverseHolo: 0.4 },
    "121": { normal: 0.15, reverseHolo: 0.4 },
    "122": { normal: 0.15, reverseHolo: 0.4 },
    "123": { normal: 0.15, reverseHolo: 0.4 },
    "124": { normal: 0.15, reverseHolo: 0.4 },
    "125": { normal: 0.15, reverseHolo: 0.4 },
    "126": { normal: 0.15, reverseHolo: 0.4 },
    "127": { normal: 0.15, reverseHolo: 0.4 },
    "128": { normal: 0.15, reverseHolo: 0.4 },
    "129": { normal: 0.15, reverseHolo: 0.4 },
    "130": { normal: 0.15, reverseHolo: 0.4 },
    "131": { normal: 0.15, reverseHolo: 0.4 },
    "132": { normal: 0.15, reverseHolo: 0.4 }
}

};

// Legacy export for backward compatibility
const CARD_PRICES = CARD_PRICING["phantasmal-flames"];

// Helper function to get price for a specific variant
function getCardPrice(cardNumber, variant = 'normal') {
    const priceData = CARD_PRICES[cardNumber];

    if (!priceData) {
        return variant === 'reverseHolo' ? 0.25 : 0.15;
    }

    // If priceData is an object with variants
    if (typeof priceData === 'object') {
        return priceData[variant] || priceData.normal || 0.15;
    }

    // If priceData is a single number (no variants)
    return priceData;
}

// Export for use in app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CARD_PRICING, CARD_PRICES, getCardPrice };
}
