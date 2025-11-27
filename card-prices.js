// Card pricing data from TCGPlayer and other reputable sources
// Prices are market averages and update regularly

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
    "132": { normal: 0.15, reverseHolo: 0.4 },
    "133": 46.65,
    "134": 17.59,
    "135": 4.28,
    "136": 8.5,
    "137": 5,
    "138": 12,
    "139": 4.5,
    "140": 5.5,
    "141": 6,
    "142": 8.5,
    "143": 4.75,
    "144": 9,
    "145": 7,
    "146": 15,
    "147": 7.5,
    "148": 11,
    "149": 4.5,
    "150": 8,
    "151": 4,
    "152": 6.5,
    "153": 5.5,
    "154": 7,
    "155": 52.25,
    "156": 28,
    "157": 25,
    "158": 30,
    "159": 35,
    "160": 42,
    "161": 32,
    "162": 27,
    "163": 38,
    "164": 29,
    "165": 37.6,
    "166": 15,
    "167": 18,
    "168": 12,
    "169": 43.44,
    "170": 37.62,
    "171": 14,
    "172": 16,
    "173": 20,
    "174": 13,
    "175": 25,
    "176": 22.61,
    "177": 154,
    "178": 206,
    "179": 201,
    "180": 125,
    "181": 145,
    "182": 110,
    "183": 65,
    "184": 87.88,
    "185": 55,
    "186": 58,
    "187": 345,
    "188": 460
},

    "scarlet-violet-alt": {
        "1": { normal: 0.1, reverseHolo: 0.5 },
        "2": { normal: 0.15, reverseHolo: 0.5 },
        "3": { normal: 0.1, reverseHolo: 0.5 },
        "4": { normal: 0.15, reverseHolo: 0.5 },
        "5": { normal: 0.1, reverseHolo: 0.5 },
        "6": { normal: 0.15, reverseHolo: 0.5 },
        "7": { normal: 0.1, reverseHolo: 0.5 },
        "8": { normal: 0.1, reverseHolo: 0.5 },
        "9": { normal: 0.1, reverseHolo: 0.5 },
        "10": { normal: 0.15, reverseHolo: 0.5 },
        "11": { normal: 0.1, reverseHolo: 0.5 },
        "12": { normal: 0.1, reverseHolo: 0.5 },
        "13": { normal: 0.1, reverseHolo: 0.5 },
        "14": { normal: 0.15, reverseHolo: 0.5 },
        "15": { normal: 0.75, reverseHolo: 1.5 },
        "16": { normal: 0.1, reverseHolo: 0.5 },
        "17": { normal: 0.1, reverseHolo: 0.5 },
        "18": { normal: 0.1, reverseHolo: 0.5 },
        "19": 6,
        "20": { normal: 0.1, reverseHolo: 0.5 },
        "21": { normal: 0.1, reverseHolo: 0.5 },
        "22": { normal: 0.1, reverseHolo: 0.5 },
        "23": { normal: 0.75, reverseHolo: 1.5 },
        "24": { normal: 0.1, reverseHolo: 0.5 },
        "25": { normal: 0.1, reverseHolo: 0.5 },
        "26": { normal: 0.15, reverseHolo: 0.5 },
        "27": { normal: 0.1, reverseHolo: 0.5 },
        "28": { normal: 0.1, reverseHolo: 0.5 },
        "29": { normal: 0.15, reverseHolo: 0.5 },
        "30": { normal: 0.1, reverseHolo: 0.5 },
        "31": { normal: 0.1, reverseHolo: 0.5 },
        "32": 6,
        "33": { normal: 0.1, reverseHolo: 0.5 },
        "34": { normal: 0.1, reverseHolo: 0.5 },
        "35": { normal: 0.15, reverseHolo: 0.5 },
        "36": { normal: 0.1, reverseHolo: 0.5 },
        "37": { normal: 0.15, reverseHolo: 0.5 },
        "38": { normal: 0.75, reverseHolo: 1.5 },
        "39": { normal: 0.1, reverseHolo: 0.5 },
        "40": { normal: 0.1, reverseHolo: 0.5 },
        "41": { normal: 0.75, reverseHolo: 1.5 },
        "42": { normal: 0.1, reverseHolo: 0.5 },
        "43": { normal: 0.75, reverseHolo: 1.5 },
        "44": { normal: 0.1, reverseHolo: 0.5 },
        "45": 6,
        "46": { normal: 0.1, reverseHolo: 0.5 },
        "47": { normal: 0.15, reverseHolo: 0.5 },
        "48": { normal: 0.1, reverseHolo: 0.5 },
        "49": { normal: 0.1, reverseHolo: 0.5 },
        "50": { normal: 0.1, reverseHolo: 0.5 },
        "51": { normal: 0.1, reverseHolo: 0.5 },
        "52": { normal: 0.1, reverseHolo: 0.5 },
        "53": { normal: 0.15, reverseHolo: 0.5 },
        "54": { normal: 0.75, reverseHolo: 1.5 },
        "55": { normal: 0.1, reverseHolo: 0.5 },
        "56": { normal: 0.1, reverseHolo: 0.5 },
        "57": { normal: 0.15, reverseHolo: 0.5 },
        "58": { normal: 0.1, reverseHolo: 0.5 },
        "59": { normal: 0.1, reverseHolo: 0.5 },
        "60": { normal: 0.15, reverseHolo: 0.5 },
        "61": { normal: 0.75, reverseHolo: 1.5 },
        "62": { normal: 0.15, reverseHolo: 0.5 },
        "63": { normal: 0.1, reverseHolo: 0.5 },
        "64": { normal: 0.1, reverseHolo: 0.5 },
        "65": 6,
        "66": { normal: 0.1, reverseHolo: 0.5 },
        "67": { normal: 0.15, reverseHolo: 0.5 },
        "68": { normal: 0.15, reverseHolo: 0.5 },
        "69": { normal: 0.1, reverseHolo: 0.5 },
        "70": { normal: 0.1, reverseHolo: 0.5 },
        "71": { normal: 0.1, reverseHolo: 0.5 },
        "72": { normal: 0.15, reverseHolo: 0.5 },
        "73": { normal: 0.1, reverseHolo: 0.5 },
        "74": { normal: 0.1, reverseHolo: 0.5 },
        "75": { normal: 0.1, reverseHolo: 0.5 },
        "76": { normal: 0.75, reverseHolo: 1.5 },
        "77": { normal: 0.1, reverseHolo: 0.5 },
        "78": { normal: 0.1, reverseHolo: 0.5 },
        "79": { normal: 0.15, reverseHolo: 0.5 },
        "80": { normal: 0.75, reverseHolo: 1.5 },
        "81": 6,
        "82": { normal: 0.1, reverseHolo: 0.5 },
        "83": { normal: 0.15, reverseHolo: 0.5 },
        "84": { normal: 0.1, reverseHolo: 0.5 },
        "85": { normal: 0.1, reverseHolo: 0.5 },
        "86": 6,
        "87": { normal: 0.1, reverseHolo: 0.5 },
        "88": 6,
        "89": { normal: 0.1, reverseHolo: 0.5 },
        "90": { normal: 0.15, reverseHolo: 0.5 },
        "91": { normal: 0.1, reverseHolo: 0.5 },
        "92": { normal: 0.1, reverseHolo: 0.5 },
        "93": { normal: 0.15, reverseHolo: 0.5 },
        "94": { normal: 0.1, reverseHolo: 0.5 },
        "95": { normal: 0.1, reverseHolo: 0.5 },
        "96": { normal: 0.75, reverseHolo: 1.5 },
        "97": { normal: 0.1, reverseHolo: 0.5 },
        "98": { normal: 0.1, reverseHolo: 0.5 },
        "99": { normal: 0.15, reverseHolo: 0.5 },
        "100": { normal: 0.1, reverseHolo: 0.5 },
        "101": { normal: 0.1, reverseHolo: 0.5 },
        "102": { normal: 0.1, reverseHolo: 0.5 },
        "103": { normal: 0.15, reverseHolo: 0.5 },
        "104": { normal: 0.1, reverseHolo: 0.5 },
        "105": { normal: 0.1, reverseHolo: 0.5 },
        "106": { normal: 0.75, reverseHolo: 1.5 },
        "107": { normal: 0.1, reverseHolo: 0.5 },
        "108": { normal: 0.1, reverseHolo: 0.5 },
        "109": { normal: 0.75, reverseHolo: 1.5 },
        "110": { normal: 0.1, reverseHolo: 0.5 },
        "111": { normal: 0.15, reverseHolo: 0.5 },
        "112": { normal: 0.1, reverseHolo: 0.5 },
        "113": { normal: 0.1, reverseHolo: 0.5 },
        "114": { normal: 0.15, reverseHolo: 0.5 },
        "115": { normal: 0.1, reverseHolo: 0.5 },
        "116": { normal: 0.1, reverseHolo: 0.5 },
        "117": { normal: 0.15, reverseHolo: 0.5 },
        "118": { normal: 0.75, reverseHolo: 1.5 },
        "119": { normal: 0.1, reverseHolo: 0.5 },
        "120": { normal: 0.15, reverseHolo: 0.5 },
        "121": { normal: 0.15, reverseHolo: 0.5 },
        "122": { normal: 0.75, reverseHolo: 1.5 },
        "123": 6,
        "124": { normal: 0.75, reverseHolo: 1.5 },
        "125": 6,
        "126": { normal: 0.1, reverseHolo: 0.5 },
        "127": { normal: 0.15, reverseHolo: 0.5 },
        "128": { normal: 0.1, reverseHolo: 0.5 },
        "129": { normal: 0.15, reverseHolo: 0.5 },
        "130": { normal: 0.1, reverseHolo: 0.5 },
        "131": 6,
        "132": { normal: 0.1, reverseHolo: 0.5 },
        "133": { normal: 0.1, reverseHolo: 0.5 },
        "134": { normal: 0.75, reverseHolo: 1.5 },
        "135": { normal: 0.1, reverseHolo: 0.5 },
        "136": { normal: 0.1, reverseHolo: 0.5 },
        "137": { normal: 0.15, reverseHolo: 0.5 },
        "138": { normal: 0.15, reverseHolo: 0.5 },
        "139": { normal: 0.15, reverseHolo: 0.5 },
        "140": { normal: 0.1, reverseHolo: 0.5 },
        "141": { normal: 0.1, reverseHolo: 0.5 },
        "142": { normal: 0.75, reverseHolo: 1.5 },
        "143": 6,
        "144": { normal: 0.1, reverseHolo: 0.5 },
        "145": { normal: 0.15, reverseHolo: 0.5 },
        "146": { normal: 0.1, reverseHolo: 0.5 },
        "147": { normal: 0.15, reverseHolo: 0.5 },
        "148": { normal: 0.1, reverseHolo: 0.5 },
        "149": { normal: 0.1, reverseHolo: 0.5 },
        "150": { normal: 0.15, reverseHolo: 0.5 },
        "151": { normal: 0.1, reverseHolo: 0.5 },
        "152": { normal: 0.15, reverseHolo: 0.5 },
        "153": { normal: 0.75, reverseHolo: 1.5 },
        "154": { normal: 0.1, reverseHolo: 0.5 },
        "155": { normal: 0.1, reverseHolo: 0.5 },
        "156": { normal: 0.1, reverseHolo: 0.5 },
        "157": { normal: 0.15, reverseHolo: 0.5 },
        "158": 6,
        "159": { normal: 0.1, reverseHolo: 0.5 },
        "160": { normal: 0.1, reverseHolo: 0.5 },
        "161": { normal: 0.15, reverseHolo: 0.5 },
        "162": { normal: 0.1, reverseHolo: 0.5 },
        "163": { normal: 0.15, reverseHolo: 0.5 },
        "164": { normal: 0.75, reverseHolo: 1.5 },
        "165": { normal: 0.15, reverseHolo: 0.5 },
        "166": { normal: 0.15, reverseHolo: 0.5 },
        "167": { normal: 0.15, reverseHolo: 0.5 },
        "168": { normal: 0.1, reverseHolo: 0.5 },
        "169": { normal: 0.15, reverseHolo: 0.5 },
        "170": { normal: 0.15, reverseHolo: 0.5 },
        "171": { normal: 0.1, reverseHolo: 0.5 },
        "172": { normal: 0.1, reverseHolo: 0.5 },
        "173": { normal: 0.1, reverseHolo: 0.5 },
        "174": { normal: 0.15, reverseHolo: 0.5 },
        "175": { normal: 0.15, reverseHolo: 0.5 },
        "176": { normal: 0.15, reverseHolo: 0.5 },
        "177": { normal: 0.15, reverseHolo: 0.5 },
        "178": { normal: 0.15, reverseHolo: 0.5 },
        "179": { normal: 0.15, reverseHolo: 0.5 },
        "180": { normal: 0.1, reverseHolo: 0.5 },
        "181": { normal: 0.15, reverseHolo: 0.5 },
        "182": { normal: 0.1, reverseHolo: 0.5 },
        "183": { normal: 0.15, reverseHolo: 0.5 },
        "184": { normal: 0.15, reverseHolo: 0.5 },
        "185": { normal: 0.1, reverseHolo: 0.5 },
        "186": { normal: 0.1, reverseHolo: 0.5 },
        "187": { normal: 0.1, reverseHolo: 0.5 },
        "188": { normal: 0.1, reverseHolo: 0.5 },
        "189": { normal: 0.75, reverseHolo: 1.5 },
        "190": { normal: 0.75, reverseHolo: 1.5 },
        "191": { normal: 0.1, reverseHolo: 0.5 },
        "192": { normal: 0.15, reverseHolo: 0.5 },
        "193": { normal: 0.15, reverseHolo: 0.5 },
        "194": { normal: 0.1, reverseHolo: 0.5 },
        "195": { normal: 0.15, reverseHolo: 0.5 },
        "196": { normal: 0.15, reverseHolo: 0.5 },
        "197": { normal: 0.15, reverseHolo: 0.5 },
        "198": { normal: 0.15, reverseHolo: 0.5 },
        "199": 8,
        "200": 8,
        "201": 8,
        "202": 8,
        "203": 8,
        "204": 8,
        "205": 8,
        "206": 8,
        "207": 8,
        "208": 8,
        "209": 8,
        "210": 8,
        "211": 8,
        "212": 8,
        "213": 8,
        "214": 8,
        "215": 8,
        "216": 8,
        "217": 8,
        "218": 8,
        "219": 8,
        "220": 8,
        "221": 8,
        "222": 8,
        "223": 15,
        "224": 15,
        "225": 15,
        "226": 15,
        "227": 15,
        "228": 15,
        "229": 15,
        "230": 15,
        "231": 15,
        "232": 15,
        "233": 15,
        "234": 15,
        "235": 15,
        "236": 15,
        "237": 15,
        "238": 15,
        "239": 15,
        "240": 15,
        "241": 15,
        "242": 15,
        "243": 30,
        "244": 30,
        "245": 30,
        "246": 30,
        "247": 30,
        "248": 30,
        "249": 30,
        "250": 30,
        "251": 30,
        "252": 30,
        "253": 25,
        "254": 25,
        "255": 25,
        "256": 25,
        "257": 25,
        "258": 25
    },

    "paldea-evolved": {
        "1": { normal: 0.1, reverseHolo: 0.5 },
        "2": { normal: 0.15, reverseHolo: 0.5 },
        "3": { normal: 0.75, reverseHolo: 1.5 },
        "4": { normal: 0.1, reverseHolo: 0.5 },
        "5": 6,
        "6": { normal: 0.15, reverseHolo: 0.5 },
        "7": { normal: 0.1, reverseHolo: 0.5 },
        "8": { normal: 0.1, reverseHolo: 0.5 },
        "9": { normal: 0.15, reverseHolo: 0.5 },
        "10": { normal: 0.1, reverseHolo: 0.5 },
        "11": { normal: 0.75, reverseHolo: 1.5 },
        "12": { normal: 0.1, reverseHolo: 0.5 },
        "13": { normal: 0.1, reverseHolo: 0.5 },
        "14": { normal: 0.15, reverseHolo: 0.5 },
        "15": 6,
        "16": { normal: 0.1, reverseHolo: 0.5 },
        "17": { normal: 0.1, reverseHolo: 0.5 },
        "18": { normal: 0.15, reverseHolo: 0.5 },
        "19": { normal: 0.1, reverseHolo: 0.5 },
        "20": { normal: 0.1, reverseHolo: 0.5 },
        "21": { normal: 0.75, reverseHolo: 1.5 },
        "22": { normal: 0.1, reverseHolo: 0.5 },
        "23": { normal: 0.1, reverseHolo: 0.5 },
        "24": { normal: 0.15, reverseHolo: 0.5 },
        "25": { normal: 0.1, reverseHolo: 0.5 },
        "26": { normal: 0.1, reverseHolo: 0.5 },
        "27": 6,
        "28": { normal: 0.15, reverseHolo: 0.5 },
        "29": { normal: 0.15, reverseHolo: 0.5 },
        "30": { normal: 0.15, reverseHolo: 0.5 },
        "31": { normal: 0.1, reverseHolo: 0.5 },
        "32": { normal: 0.15, reverseHolo: 0.5 },
        "33": { normal: 0.75, reverseHolo: 1.5 },
        "34": { normal: 0.1, reverseHolo: 0.5 },
        "35": { normal: 0.1, reverseHolo: 0.5 },
        "36": { normal: 0.15, reverseHolo: 0.5 },
        "37": 6,
        "38": { normal: 0.1, reverseHolo: 0.5 },
        "39": { normal: 0.1, reverseHolo: 0.5 },
        "40": 6,
        "41": { normal: 0.15, reverseHolo: 0.5 },
        "42": { normal: 0.1, reverseHolo: 0.5 },
        "43": { normal: 0.75, reverseHolo: 1.5 },
        "44": { normal: 0.1, reverseHolo: 0.5 },
        "45": { normal: 0.15, reverseHolo: 0.5 },
        "46": { normal: 0.1, reverseHolo: 0.5 },
        "47": { normal: 0.1, reverseHolo: 0.5 },
        "48": { normal: 0.15, reverseHolo: 0.5 },
        "49": { normal: 0.1, reverseHolo: 0.5 },
        "50": { normal: 0.1, reverseHolo: 0.5 },
        "51": { normal: 0.15, reverseHolo: 0.5 },
        "52": 6,
        "53": { normal: 0.1, reverseHolo: 0.5 },
        "54": { normal: 0.1, reverseHolo: 0.5 },
        "55": { normal: 0.15, reverseHolo: 0.5 },
        "56": { normal: 0.75, reverseHolo: 1.5 },
        "57": { normal: 0.1, reverseHolo: 0.5 },
        "58": { normal: 0.1, reverseHolo: 0.5 },
        "59": { normal: 0.15, reverseHolo: 0.5 },
        "60": { normal: 0.75, reverseHolo: 1.5 },
        "61": 6,
        "62": { normal: 0.1, reverseHolo: 0.5 },
        "63": 6,
        "64": { normal: 0.15, reverseHolo: 0.5 },
        "65": { normal: 0.1, reverseHolo: 0.5 },
        "66": { normal: 0.1, reverseHolo: 0.5 },
        "67": { normal: 0.15, reverseHolo: 0.5 },
        "68": { normal: 0.1, reverseHolo: 0.5 },
        "69": { normal: 0.1, reverseHolo: 0.5 },
        "70": { normal: 0.15, reverseHolo: 0.5 },
        "71": { normal: 0.75, reverseHolo: 1.5 },
        "72": { normal: 0.1, reverseHolo: 0.5 },
        "73": { normal: 0.15, reverseHolo: 0.5 },
        "74": { normal: 0.1, reverseHolo: 0.5 },
        "75": { normal: 0.15, reverseHolo: 0.5 },
        "76": { normal: 0.75, reverseHolo: 1.5 },
        "77": { normal: 0.1, reverseHolo: 0.5 },
        "78": { normal: 0.1, reverseHolo: 0.5 },
        "79": 6,
        "80": { normal: 0.1, reverseHolo: 0.5 },
        "81": { normal: 0.1, reverseHolo: 0.5 },
        "82": { normal: 0.15, reverseHolo: 0.5 },
        "83": { normal: 0.1, reverseHolo: 0.5 },
        "84": { normal: 0.75, reverseHolo: 1.5 },
        "85": { normal: 0.1, reverseHolo: 0.5 },
        "86": 6,
        "87": { normal: 0.1, reverseHolo: 0.5 },
        "88": { normal: 0.15, reverseHolo: 0.5 },
        "89": { normal: 0.75, reverseHolo: 1.5 },
        "90": { normal: 0.1, reverseHolo: 0.5 },
        "91": { normal: 0.15, reverseHolo: 0.5 },
        "92": { normal: 0.15, reverseHolo: 0.5 },
        "93": 6,
        "94": { normal: 0.15, reverseHolo: 0.5 },
        "95": { normal: 0.1, reverseHolo: 0.5 },
        "96": { normal: 0.15, reverseHolo: 0.5 },
        "97": { normal: 0.75, reverseHolo: 1.5 },
        "98": { normal: 0.75, reverseHolo: 1.5 },
        "99": { normal: 0.75, reverseHolo: 1.5 },
        "100": { normal: 0.1, reverseHolo: 0.5 },
        "101": { normal: 0.1, reverseHolo: 0.5 },
        "102": { normal: 0.1, reverseHolo: 0.5 },
        "103": { normal: 0.15, reverseHolo: 0.5 },
        "104": { normal: 0.15, reverseHolo: 0.5 },
        "105": { normal: 0.75, reverseHolo: 1.5 },
        "106": { normal: 0.1, reverseHolo: 0.5 },
        "107": { normal: 0.15, reverseHolo: 0.5 },
        "108": { normal: 0.15, reverseHolo: 0.5 },
        "109": { normal: 0.15, reverseHolo: 0.5 },
        "110": { normal: 0.1, reverseHolo: 0.5 },
        "111": { normal: 0.15, reverseHolo: 0.5 },
        "112": { normal: 0.1, reverseHolo: 0.5 },
        "113": { normal: 0.75, reverseHolo: 1.5 },
        "114": { normal: 0.1, reverseHolo: 0.5 },
        "115": { normal: 0.15, reverseHolo: 0.5 },
        "116": { normal: 0.1, reverseHolo: 0.5 },
        "117": 6,
        "118": { normal: 0.15, reverseHolo: 0.5 },
        "119": { normal: 0.1, reverseHolo: 0.5 },
        "120": { normal: 0.1, reverseHolo: 0.5 },
        "121": { normal: 0.1, reverseHolo: 0.5 },
        "122": { normal: 0.15, reverseHolo: 0.5 },
        "123": { normal: 0.75, reverseHolo: 1.5 },
        "124": { normal: 0.1, reverseHolo: 0.5 },
        "125": { normal: 0.1, reverseHolo: 0.5 },
        "126": { normal: 0.75, reverseHolo: 1.5 },
        "127": 6,
        "128": { normal: 0.1, reverseHolo: 0.5 },
        "129": { normal: 0.1, reverseHolo: 0.5 },
        "130": 6,
        "131": { normal: 0.1, reverseHolo: 0.5 },
        "132": { normal: 0.15, reverseHolo: 0.5 },
        "133": { normal: 0.1, reverseHolo: 0.5 },
        "134": { normal: 0.75, reverseHolo: 1.5 },
        "135": { normal: 0.75, reverseHolo: 1.5 },
        "136": { normal: 0.75, reverseHolo: 1.5 },
        "137": { normal: 0.15, reverseHolo: 0.5 },
        "138": { normal: 0.1, reverseHolo: 0.5 },
        "139": { normal: 0.15, reverseHolo: 0.5 },
        "140": { normal: 0.75, reverseHolo: 1.5 },
        "141": { normal: 0.1, reverseHolo: 0.5 },
        "142": { normal: 0.1, reverseHolo: 0.5 },
        "143": { normal: 0.15, reverseHolo: 0.5 },
        "144": { normal: 0.1, reverseHolo: 0.5 },
        "145": { normal: 0.1, reverseHolo: 0.5 },
        "146": { normal: 0.15, reverseHolo: 0.5 },
        "147": { normal: 0.15, reverseHolo: 0.5 },
        "148": { normal: 0.15, reverseHolo: 0.5 },
        "149": { normal: 0.1, reverseHolo: 0.5 },
        "150": 6,
        "151": { normal: 0.75, reverseHolo: 1.5 },
        "152": { normal: 0.1, reverseHolo: 0.5 },
        "153": 6,
        "154": { normal: 0.1, reverseHolo: 0.5 },
        "155": { normal: 0.15, reverseHolo: 0.5 },
        "156": { normal: 0.1, reverseHolo: 0.5 },
        "157": { normal: 0.15, reverseHolo: 0.5 },
        "158": { normal: 0.1, reverseHolo: 0.5 },
        "159": { normal: 0.15, reverseHolo: 0.5 },
        "160": { normal: 0.1, reverseHolo: 0.5 },
        "161": { normal: 0.15, reverseHolo: 0.5 },
        "162": { normal: 0.75, reverseHolo: 1.5 },
        "163": { normal: 0.1, reverseHolo: 0.5 },
        "164": { normal: 0.1, reverseHolo: 0.5 },
        "165": { normal: 0.15, reverseHolo: 0.5 },
        "166": { normal: 0.1, reverseHolo: 0.5 },
        "167": { normal: 0.1, reverseHolo: 0.5 },
        "168": { normal: 0.15, reverseHolo: 0.5 },
        "169": 6,
        "170": { normal: 0.15, reverseHolo: 0.5 },
        "171": { normal: 0.15, reverseHolo: 0.5 },
        "172": { normal: 0.75, reverseHolo: 1.5 },
        "173": { normal: 0.15, reverseHolo: 0.5 },
        "174": { normal: 0.15, reverseHolo: 0.5 },
        "175": { normal: 0.15, reverseHolo: 0.5 },
        "176": { normal: 0.15, reverseHolo: 0.5 },
        "177": { normal: 0.1, reverseHolo: 0.5 },
        "178": { normal: 0.15, reverseHolo: 0.5 },
        "179": { normal: 0.15, reverseHolo: 0.5 },
        "180": { normal: 0.15, reverseHolo: 0.5 },
        "181": { normal: 0.15, reverseHolo: 0.5 },
        "182": { normal: 0.15, reverseHolo: 0.5 },
        "183": { normal: 0.1, reverseHolo: 0.5 },
        "184": { normal: 0.15, reverseHolo: 0.5 },
        "185": { normal: 0.15, reverseHolo: 0.5 },
        "186": { normal: 0.15, reverseHolo: 0.5 },
        "187": { normal: 0.15, reverseHolo: 0.5 },
        "188": { normal: 0.1, reverseHolo: 0.5 },
        "189": { normal: 0.15, reverseHolo: 0.5 },
        "190": { normal: 0.15, reverseHolo: 0.5 },
        "191": { normal: 0.15, reverseHolo: 0.5 },
        "192": { normal: 0.15, reverseHolo: 0.5 },
        "193": { normal: 0.15, reverseHolo: 0.5 },
        "194": 19.50, // Heracross (Illustration Rare)
        "195": 7.25, // Tropius (Illustration Rare)
        "196": 23.50, // Sprigatito (Illustration Rare)
        "197": 9.90, // Floragato (Illustration Rare)
        "198": 6.10, // Bramblin (Illustration Rare)
        "199": 10.00, // Fletchinder (Illustration Rare)
        "200": 8.00, // Pyroar (Illustration Rare)
        "201": 15.00, // Fuecoco (Illustration Rare)
        "202": 11.00, // Crocalor (Illustration Rare)
        "203": 91.00, // Magikarp (Illustration Rare)
        "204": 25.80, // Marill (Illustration Rare)
        "205": 12.90, // Eiscue (Illustration Rare)
        "206": 9.70, // Quaxly (Illustration Rare)
        "207": 4.35, // Quaxwell (Illustration Rare)
        "208": 11.65, // Frigibax (Illustration Rare)
        "209": 9.00, // Arctibax (Illustration Rare)
        "210": 12.00, // Baxcalibur (Illustration Rare)
        "211": 18.00, // Raichu (Illustration Rare)
        "212": 7.00, // Mismagius (Illustration Rare)
        "213": 5.00, // Gothorita (Illustration Rare)
        "214": 6.00, // Sandygast (Illustration Rare)
        "215": 5.50, // Rabsca (Illustration Rare)
        "216": 12.15, // Tinkatink (Illustration Rare)
        "217": 7.00, // Tinkatuff (Illustration Rare)
        "218": 15.00, // Paldean Tauros (Illustration Rare)
        "219": 6.50, // Sudowoodo (Illustration Rare)
        "220": 5.00, // Nacli (Illustration Rare)
        "221": 8.00, // Paldean Wooper (Illustration Rare)
        "222": 38.00, // Tyranitar (Illustration Rare)
        "223": 7.00, // Grafaiai (Illustration Rare)
        "224": 6.00, // Orthworm (Illustration Rare)
        "225": 10.00, // Rookidee (Illustration Rare)
        "226": 8.00, // Maushold (Illustration Rare)
        "227": 7.00, // Flamigo (Illustration Rare)
        "228": 6.50, // Farigiraf (Illustration Rare)
        "229": 7.50, // Dudunsparce (Illustration Rare)
        "230": 5.50, // Forretress ex (Ultra Rare)
        "231": 7.00, // Meowscarada ex (Ultra Rare)
        "232": 4.50, // Wo-Chien ex (Ultra Rare)
        "233": 6.50, // Skeledirge ex (Ultra Rare)
        "234": 5.00, // Chi-Yu ex (Ultra Rare)
        "235": 6.00, // Quaquaval ex (Ultra Rare)
        "236": 7.50, // Chien-Pao ex (Ultra Rare)
        "237": 4.00, // Bellibolt ex (Ultra Rare)
        "238": 5.50, // Slowking ex (Ultra Rare)
        "239": 4.50, // Dedenne ex (Ultra Rare)
        "240": 6.50, // Tinkaton ex (Ultra Rare)
        "241": 5.00, // Lycanroc ex (Ultra Rare)
        "242": 6.00, // Annihilape ex (Ultra Rare)
        "243": 5.50, // Ting-Lu ex (Ultra Rare)
        "244": 4.50, // Paldean Clodsire ex (Ultra Rare)
        "245": 5.00, // Copperajah ex (Ultra Rare)
        "246": 4.00, // Noivern ex (Ultra Rare)
        "247": 5.50, // Squawkabilly ex (Ultra Rare)
        "248": 3.50, // Boss's Orders (Ghetsis) (Ultra Rare)
        "249": 3.00, // Clavell (Ultra Rare)
        "250": 2.75, // Dendra (Ultra Rare)
        "251": 3.50, // Falkner (Ultra Rare)
        "252": 3.25, // Giacomo (Ultra Rare)
        "253": 4.00, // Grusha (Ultra Rare)
        "254": 8.50, // Iono (Ultra Rare)
        "255": 3.00, // Saguaro (Ultra Rare)
        "256": 19.50, // Meowscarada ex (Special Illustration Rare)
        "257": 12.00, // Wo-Chien ex (Special Illustration Rare)
        "258": 15.00, // Skeledirge ex (Special Illustration Rare)
        "259": 18.00, // Chi-Yu ex (Special Illustration Rare)
        "260": 16.00, // Quaquaval ex (Special Illustration Rare)
        "261": 22.00, // Chien-Pao ex (Special Illustration Rare)
        "262": 30.00, // Tinkaton ex (Special Illustration Rare)
        "263": 14.00, // Ting-Lu ex (Special Illustration Rare)
        "264": 13.00, // Squawkabilly ex (Special Illustration Rare)
        "265": 25.00, // Boss's Orders (Ghetsis) (Special Illustration Rare)
        "266": 9.00, // Dendra (Special Illustration Rare)
        "267": 28.00, // Giacomo (Special Illustration Rare)
        "268": 32.00, // Grusha (Special Illustration Rare)
        "269": 60.00, // Iono (Special Illustration Rare)
        "270": 27.00, // Saguaro (Special Illustration Rare)
        "271": 35.00, // Meowscarada ex (Hyper Rare)
        "272": 32.00, // Skeledirge ex (Hyper Rare)
        "273": 30.00, // Quaquaval ex (Hyper Rare)
        "274": 38.00, // Chien-Pao ex (Hyper Rare)
        "275": 28.00, // Ting-Lu ex (Hyper Rare)
        "276": 22.00, // Super Rod (Hyper Rare)
        "277": 25.00, // Superior Energy Retrieval (Hyper Rare)
        "278": 18.00, // Basic Grass Energy (Hyper Rare)
        "279": 18.00 // Basic Water Energy (Hyper Rare)
    },

    "obsidian-flames": {
        "1": { normal: 0.1, reverseHolo: 0.5 },
        "2": { normal: 0.1, reverseHolo: 0.5 },
        "3": { normal: 0.15, reverseHolo: 0.5 },
        "4": { normal: 0.1, reverseHolo: 0.5 },
        "5": { normal: 0.1, reverseHolo: 0.5 },
        "6": { normal: 0.1, reverseHolo: 0.5 },
        "7": { normal: 0.15, reverseHolo: 0.5 },
        "8": { normal: 0.1, reverseHolo: 0.5 },
        "9": { normal: 0.1, reverseHolo: 0.5 },
        "10": { normal: 0.15, reverseHolo: 0.5 },
        "11": { normal: 0.1, reverseHolo: 0.5 },
        "12": { normal: 0.15, reverseHolo: 0.5 },
        "13": { normal: 0.1, reverseHolo: 0.5 },
        "14": { normal: 0.15, reverseHolo: 0.5 },
        "15": 6,
        "16": { normal: 0.1, reverseHolo: 0.5 },
        "17": { normal: 0.1, reverseHolo: 0.5 },
        "18": { normal: 0.15, reverseHolo: 0.5 },
        "19": { normal: 0.1, reverseHolo: 0.5 },
        "20": { normal: 0.1, reverseHolo: 0.5 },
        "21": { normal: 0.15, reverseHolo: 0.5 },
        "22": 6,
        "23": { normal: 0.1, reverseHolo: 0.5 },
        "24": { normal: 0.1, reverseHolo: 0.5 },
        "25": { normal: 0.75, reverseHolo: 1.5 },
        "26": { normal: 0.1, reverseHolo: 0.5 },
        "27": { normal: 0.15, reverseHolo: 0.5 },
        "28": { normal: 0.1, reverseHolo: 0.5 },
        "29": { normal: 0.15, reverseHolo: 0.5 },
        "30": { normal: 0.75, reverseHolo: 1.5 },
        "31": { normal: 0.1, reverseHolo: 0.5 },
        "32": { normal: 0.15, reverseHolo: 0.5 },
        "33": 6,
        "34": { normal: 0.1, reverseHolo: 0.5 },
        "35": { normal: 0.15, reverseHolo: 0.5 },
        "36": { normal: 0.1, reverseHolo: 0.5 },
        "37": { normal: 0.1, reverseHolo: 0.5 },
        "38": { normal: 0.15, reverseHolo: 0.5 },
        "39": { normal: 0.1, reverseHolo: 0.5 },
        "40": { normal: 0.1, reverseHolo: 0.5 },
        "41": { normal: 0.15, reverseHolo: 0.5 },
        "42": 6,
        "43": { normal: 0.1, reverseHolo: 0.5 },
        "44": { normal: 0.15, reverseHolo: 0.5 },
        "45": { normal: 0.15, reverseHolo: 0.5 },
        "46": { normal: 0.1, reverseHolo: 0.5 },
        "47": { normal: 0.15, reverseHolo: 0.5 },
        "48": { normal: 0.1, reverseHolo: 0.5 },
        "49": { normal: 0.15, reverseHolo: 0.5 },
        "50": { normal: 0.1, reverseHolo: 0.5 },
        "51": { normal: 0.1, reverseHolo: 0.5 },
        "52": { normal: 0.15, reverseHolo: 0.5 },
        "53": { normal: 0.1, reverseHolo: 0.5 },
        "54": { normal: 0.15, reverseHolo: 0.5 },
        "55": { normal: 0.1, reverseHolo: 0.5 },
        "56": { normal: 0.1, reverseHolo: 0.5 },
        "57": { normal: 0.15, reverseHolo: 0.5 },
        "58": { normal: 0.1, reverseHolo: 0.5 },
        "59": { normal: 0.15, reverseHolo: 0.5 },
        "60": { normal: 0.1, reverseHolo: 0.5 },
        "61": { normal: 0.1, reverseHolo: 0.5 },
        "62": { normal: 0.75, reverseHolo: 1.5 },
        "63": { normal: 0.1, reverseHolo: 0.5 },
        "64": { normal: 0.1, reverseHolo: 0.5 },
        "65": { normal: 0.15, reverseHolo: 0.5 },
        "66": 6,
        "67": { normal: 0.1, reverseHolo: 0.5 },
        "68": { normal: 0.1, reverseHolo: 0.5 },
        "69": { normal: 0.15, reverseHolo: 0.5 },
        "70": { normal: 0.75, reverseHolo: 1.5 },
        "71": { normal: 0.1, reverseHolo: 0.5 },
        "72": { normal: 0.75, reverseHolo: 1.5 },
        "73": 6,
        "74": { normal: 0.1, reverseHolo: 0.5 },
        "75": { normal: 0.1, reverseHolo: 0.5 },
        "76": { normal: 0.1, reverseHolo: 0.5 },
        "77": { normal: 0.15, reverseHolo: 0.5 },
        "78": { normal: 0.15, reverseHolo: 0.5 },
        "79": 6,
        "80": { normal: 0.1, reverseHolo: 0.5 },
        "81": { normal: 0.1, reverseHolo: 0.5 },
        "82": 6,
        "83": { normal: 0.1, reverseHolo: 0.5 },
        "84": { normal: 0.15, reverseHolo: 0.5 },
        "85": { normal: 0.75, reverseHolo: 1.5 },
        "86": { normal: 0.15, reverseHolo: 0.5 },
        "87": { normal: 0.1, reverseHolo: 0.5 },
        "88": { normal: 0.15, reverseHolo: 0.5 },
        "89": { normal: 0.1, reverseHolo: 0.5 },
        "90": { normal: 0.1, reverseHolo: 0.5 },
        "91": { normal: 0.15, reverseHolo: 0.5 },
        "92": { normal: 0.15, reverseHolo: 0.5 },
        "93": { normal: 0.15, reverseHolo: 0.5 },
        "94": { normal: 0.1, reverseHolo: 0.5 },
        "95": { normal: 0.75, reverseHolo: 1.5 },
        "96": 6,
        "97": { normal: 0.1, reverseHolo: 0.5 },
        "98": { normal: 0.15, reverseHolo: 0.5 },
        "99": { normal: 0.1, reverseHolo: 0.5 },
        "100": { normal: 0.1, reverseHolo: 0.5 },
        "101": { normal: 0.15, reverseHolo: 0.5 },
        "102": 6,
        "103": { normal: 0.1, reverseHolo: 0.5 },
        "104": { normal: 0.15, reverseHolo: 0.5 },
        "105": { normal: 0.1, reverseHolo: 0.5 },
        "106": { normal: 0.15, reverseHolo: 0.5 },
        "107": { normal: 0.1, reverseHolo: 0.5 },
        "108": { normal: 0.1, reverseHolo: 0.5 },
        "109": { normal: 0.15, reverseHolo: 0.5 },
        "110": { normal: 0.1, reverseHolo: 0.5 },
        "111": { normal: 0.1, reverseHolo: 0.5 },
        "112": { normal: 0.15, reverseHolo: 0.5 },
        "113": { normal: 0.15, reverseHolo: 0.5 },
        "114": { normal: 0.1, reverseHolo: 0.5 },
        "115": { normal: 0.15, reverseHolo: 0.5 },
        "116": { normal: 0.1, reverseHolo: 0.5 },
        "117": { normal: 0.15, reverseHolo: 0.5 },
        "118": { normal: 0.1, reverseHolo: 0.5 },
        "119": { normal: 0.15, reverseHolo: 0.5 },
        "120": 6,
        "121": { normal: 0.1, reverseHolo: 0.5 },
        "122": { normal: 0.1, reverseHolo: 0.5 },
        "123": 6,
        "124": 6,
        "125": 6,
        "126": { normal: 0.1, reverseHolo: 0.5 },
        "127": { normal: 0.1, reverseHolo: 0.5 },
        "128": { normal: 0.15, reverseHolo: 0.5 },
        "129": { normal: 0.15, reverseHolo: 0.5 },
        "130": { normal: 0.15, reverseHolo: 0.5 },
        "131": { normal: 0.1, reverseHolo: 0.5 },
        "132": { normal: 0.1, reverseHolo: 0.5 },
        "133": { normal: 0.15, reverseHolo: 0.5 },
        "134": 6,
        "135": 6,
        "136": { normal: 0.75, reverseHolo: 1.5 },
        "137": { normal: 0.1, reverseHolo: 0.5 },
        "138": { normal: 0.15, reverseHolo: 0.5 },
        "139": { normal: 0.1, reverseHolo: 0.5 },
        "140": { normal: 0.15, reverseHolo: 0.5 },
        "141": { normal: 0.75, reverseHolo: 1.5 },
        "142": { normal: 0.15, reverseHolo: 0.5 },
        "143": { normal: 0.15, reverseHolo: 0.5 },
        "144": { normal: 0.1, reverseHolo: 0.5 },
        "145": { normal: 0.15, reverseHolo: 0.5 },
        "146": { normal: 0.15, reverseHolo: 0.5 },
        "147": { normal: 0.15, reverseHolo: 0.5 },
        "148": { normal: 0.1, reverseHolo: 0.5 },
        "149": { normal: 0.1, reverseHolo: 0.5 },
        "150": { normal: 0.15, reverseHolo: 0.5 },
        "151": { normal: 0.1, reverseHolo: 0.5 },
        "152": { normal: 0.1, reverseHolo: 0.5 },
        "153": 6,
        "154": { normal: 0.1, reverseHolo: 0.5 },
        "155": { normal: 0.1, reverseHolo: 0.5 },
        "156": 6,
        "157": { normal: 0.1, reverseHolo: 0.5 },
        "158": { normal: 0.15, reverseHolo: 0.5 },
        "159": 6,
        "160": { normal: 0.15, reverseHolo: 0.5 },
        "161": { normal: 0.15, reverseHolo: 0.5 },
        "162": { normal: 0.1, reverseHolo: 0.5 },
        "163": { normal: 0.15, reverseHolo: 0.5 },
        "164": 6,
        "165": { normal: 0.15, reverseHolo: 0.5 },
        "166": { normal: 0.1, reverseHolo: 0.5 },
        "167": { normal: 0.1, reverseHolo: 0.5 },
        "168": { normal: 0.15, reverseHolo: 0.5 },
        "169": { normal: 0.1, reverseHolo: 0.5 },
        "170": { normal: 0.1, reverseHolo: 0.5 },
        "171": { normal: 0.1, reverseHolo: 0.5 },
        "172": { normal: 0.15, reverseHolo: 0.5 },
        "173": { normal: 0.1, reverseHolo: 0.5 },
        "174": { normal: 0.15, reverseHolo: 0.5 },
        "175": { normal: 0.1, reverseHolo: 0.5 },
        "176": { normal: 0.1, reverseHolo: 0.5 },
        "177": { normal: 0.15, reverseHolo: 0.5 },
        "178": { normal: 0.1, reverseHolo: 0.5 },
        "179": 6,
        "180": { normal: 0.1, reverseHolo: 0.5 },
        "181": { normal: 0.1, reverseHolo: 0.5 },
        "182": { normal: 0.1, reverseHolo: 0.5 },
        "183": { normal: 0.15, reverseHolo: 0.5 },
        "184": { normal: 0.15, reverseHolo: 0.5 },
        "185": { normal: 0.15, reverseHolo: 0.5 },
        "186": { normal: 0.15, reverseHolo: 0.5 },
        "187": { normal: 0.15, reverseHolo: 0.5 },
        "188": { normal: 0.75, reverseHolo: 1.5 },
        "189": { normal: 0.15, reverseHolo: 0.5 },
        "190": { normal: 0.15, reverseHolo: 0.5 },
        "191": { normal: 0.15, reverseHolo: 0.5 },
        "192": { normal: 0.15, reverseHolo: 0.5 },
        "193": { normal: 0.15, reverseHolo: 0.5 },
        "194": { normal: 0.1, reverseHolo: 0.5 },
        "195": { normal: 0.15, reverseHolo: 0.5 },
        "196": { normal: 0.1, reverseHolo: 0.5 },
        "197": { normal: 0.15, reverseHolo: 0.5 },
        "198": 9.50, // Gloom (Illustration Rare)
        "199": 11.00, // Ninetales (Illustration Rare)
        "200": 14.00, // Palafin (Illustration Rare)
        "201": 8.50, // Bellibolt (Illustration Rare)
        "202": 16.00, // Cleffa (Illustration Rare)
        "203": 7.50, // Larvitar (Illustration Rare)
        "204": 4.00, // Houndour (Illustration Rare)
        "205": 13.50, // Scizor (Illustration Rare)
        "206": 6.00, // Varoom (Illustration Rare)
        "207": 8.00, // Pidgey (Illustration Rare)
        "208": 9.00, // Pidgeotto (Illustration Rare)
        "209": 7.00, // Lechonk (Illustration Rare)
        "210": 5.00, // Eiscue ex (Ultra Rare)
        "211": 8.50, // Tyranitar ex (Ultra Rare)
        "212": 4.50, // Vespiquen ex (Ultra Rare)
        "213": 5.50, // Glimmora ex (Ultra Rare)
        "214": 6.00, // Absol ex (Ultra Rare)
        "215": 12.00, // Charizard ex (Ultra Rare)
        "216": 5.00, // Revavroom ex (Ultra Rare)
        "217": 7.50, // Pidgeot ex (Ultra Rare)
        "218": 3.50, // Geeta (Ultra Rare)
        "219": 3.00, // Ortega (Ultra Rare)
        "220": 3.25, // Poppy (Ultra Rare)
        "221": 3.50, // Ryme (Ultra Rare)
        "222": 5.00, // Eiscue ex (Special Illustration Rare)
        "223": 54.00, // Charizard ex (Special Illustration Rare)
        "224": 3.00, // Revavroom ex (Special Illustration Rare)
        "225": 13.00, // Pidgeot ex (Special Illustration Rare)
        "226": 18.00, // Geeta (Special Illustration Rare)
        "227": 22.00, // Poppy (Special Illustration Rare)
        "228": 75.00, // Charizard ex (Hyper Rare)
        "229": 28.00, // Artazon (Hyper Rare)
        "230": 20.00 // Basic Psychic Energy (Hyper Rare)
    },

    "sv-151": {
        "1": { normal: 0.1, reverseHolo: 0.5 },
        "2": { normal: 0.15, reverseHolo: 0.5 },
        "3": 6,
        "4": { normal: 0.1, reverseHolo: 0.5 },
        "5": { normal: 0.15, reverseHolo: 0.5 },
        "6": 6,
        "7": { normal: 0.1, reverseHolo: 0.5 },
        "8": { normal: 0.15, reverseHolo: 0.5 },
        "9": 6,
        "10": { normal: 0.1, reverseHolo: 0.5 },
        "11": { normal: 0.1, reverseHolo: 0.5 },
        "12": { normal: 0.15, reverseHolo: 0.5 },
        "13": { normal: 0.1, reverseHolo: 0.5 },
        "14": { normal: 0.1, reverseHolo: 0.5 },
        "15": { normal: 0.75, reverseHolo: 1.5 },
        "16": { normal: 0.1, reverseHolo: 0.5 },
        "17": { normal: 0.1, reverseHolo: 0.5 },
        "18": { normal: 0.15, reverseHolo: 0.5 },
        "19": { normal: 0.1, reverseHolo: 0.5 },
        "20": { normal: 0.15, reverseHolo: 0.5 },
        "21": { normal: 0.1, reverseHolo: 0.5 },
        "22": { normal: 0.15, reverseHolo: 0.5 },
        "23": { normal: 0.1, reverseHolo: 0.5 },
        "24": 6,
        "25": { normal: 0.1, reverseHolo: 0.5 },
        "26": { normal: 0.75, reverseHolo: 1.5 },
        "27": { normal: 0.1, reverseHolo: 0.5 },
        "28": { normal: 0.15, reverseHolo: 0.5 },
        "29": { normal: 0.1, reverseHolo: 0.5 },
        "30": { normal: 0.15, reverseHolo: 0.5 },
        "31": { normal: 0.15, reverseHolo: 0.5 },
        "32": { normal: 0.1, reverseHolo: 0.5 },
        "33": { normal: 0.15, reverseHolo: 0.5 },
        "34": { normal: 0.75, reverseHolo: 1.5 },
        "35": { normal: 0.1, reverseHolo: 0.5 },
        "36": { normal: 0.15, reverseHolo: 0.5 },
        "37": { normal: 0.1, reverseHolo: 0.5 },
        "38": 6,
        "39": { normal: 0.1, reverseHolo: 0.5 },
        "40": 6,
        "41": { normal: 0.1, reverseHolo: 0.5 },
        "42": { normal: 0.15, reverseHolo: 0.5 },
        "43": { normal: 0.1, reverseHolo: 0.5 },
        "44": { normal: 0.15, reverseHolo: 0.5 },
        "45": { normal: 0.75, reverseHolo: 1.5 },
        "46": { normal: 0.1, reverseHolo: 0.5 },
        "47": { normal: 0.15, reverseHolo: 0.5 },
        "48": { normal: 0.1, reverseHolo: 0.5 },
        "49": { normal: 0.15, reverseHolo: 0.5 },
        "50": { normal: 0.1, reverseHolo: 0.5 },
        "51": { normal: 0.15, reverseHolo: 0.5 },
        "52": { normal: 0.1, reverseHolo: 0.5 },
        "53": { normal: 0.15, reverseHolo: 0.5 },
        "54": { normal: 0.1, reverseHolo: 0.5 },
        "55": { normal: 0.15, reverseHolo: 0.5 },
        "56": { normal: 0.1, reverseHolo: 0.5 },
        "57": { normal: 0.15, reverseHolo: 0.5 },
        "58": { normal: 0.1, reverseHolo: 0.5 },
        "59": { normal: 0.15, reverseHolo: 0.5 },
        "60": { normal: 0.1, reverseHolo: 0.5 },
        "61": { normal: 0.1, reverseHolo: 0.5 },
        "62": { normal: 0.15, reverseHolo: 0.5 },
        "63": { normal: 0.1, reverseHolo: 0.5 },
        "64": { normal: 0.15, reverseHolo: 0.5 },
        "65": 6,
        "66": { normal: 0.1, reverseHolo: 0.5 },
        "67": { normal: 0.15, reverseHolo: 0.5 },
        "68": { normal: 0.75, reverseHolo: 1.5 },
        "69": { normal: 0.1, reverseHolo: 0.5 },
        "70": { normal: 0.1, reverseHolo: 0.5 },
        "71": { normal: 0.15, reverseHolo: 0.5 },
        "72": { normal: 0.1, reverseHolo: 0.5 },
        "73": { normal: 0.15, reverseHolo: 0.5 },
        "74": { normal: 0.1, reverseHolo: 0.5 },
        "75": { normal: 0.15, reverseHolo: 0.5 },
        "76": 6,
        "77": { normal: 0.1, reverseHolo: 0.5 },
        "78": { normal: 0.15, reverseHolo: 0.5 },
        "79": { normal: 0.1, reverseHolo: 0.5 },
        "80": { normal: 0.15, reverseHolo: 0.5 },
        "81": { normal: 0.1, reverseHolo: 0.5 },
        "82": { normal: 0.15, reverseHolo: 0.5 },
        "83": { normal: 0.1, reverseHolo: 0.5 },
        "84": { normal: 0.1, reverseHolo: 0.5 },
        "85": { normal: 0.75, reverseHolo: 1.5 },
        "86": { normal: 0.1, reverseHolo: 0.5 },
        "87": { normal: 0.15, reverseHolo: 0.5 },
        "88": { normal: 0.1, reverseHolo: 0.5 },
        "89": { normal: 0.15, reverseHolo: 0.5 },
        "90": { normal: 0.1, reverseHolo: 0.5 },
        "91": { normal: 0.15, reverseHolo: 0.5 },
        "92": { normal: 0.1, reverseHolo: 0.5 },
        "93": { normal: 0.15, reverseHolo: 0.5 },
        "94": { normal: 0.75, reverseHolo: 1.5 },
        "95": { normal: 0.15, reverseHolo: 0.5 },
        "96": { normal: 0.1, reverseHolo: 0.5 },
        "97": { normal: 0.15, reverseHolo: 0.5 },
        "98": { normal: 0.1, reverseHolo: 0.5 },
        "99": { normal: 0.15, reverseHolo: 0.5 },
        "100": { normal: 0.1, reverseHolo: 0.5 },
        "101": { normal: 0.75, reverseHolo: 1.5 },
        "102": { normal: 0.1, reverseHolo: 0.5 },
        "103": { normal: 0.15, reverseHolo: 0.5 },
        "104": { normal: 0.1, reverseHolo: 0.5 },
        "105": { normal: 0.75, reverseHolo: 1.5 },
        "106": { normal: 0.15, reverseHolo: 0.5 },
        "107": { normal: 0.15, reverseHolo: 0.5 },
        "108": { normal: 0.1, reverseHolo: 0.5 },
        "109": { normal: 0.1, reverseHolo: 0.5 },
        "110": { normal: 0.75, reverseHolo: 1.5 },
        "111": { normal: 0.1, reverseHolo: 0.5 },
        "112": { normal: 0.15, reverseHolo: 0.5 },
        "113": { normal: 0.75, reverseHolo: 1.5 },
        "114": { normal: 0.1, reverseHolo: 0.5 },
        "115": 6,
        "116": { normal: 0.1, reverseHolo: 0.5 },
        "117": { normal: 0.15, reverseHolo: 0.5 },
        "118": { normal: 0.1, reverseHolo: 0.5 },
        "119": { normal: 0.15, reverseHolo: 0.5 },
        "120": { normal: 0.1, reverseHolo: 0.5 },
        "121": { normal: 0.75, reverseHolo: 1.5 },
        "122": { normal: 0.75, reverseHolo: 1.5 },
        "123": { normal: 0.15, reverseHolo: 0.5 },
        "124": 6,
        "125": { normal: 0.1, reverseHolo: 0.5 },
        "126": { normal: 0.1, reverseHolo: 0.5 },
        "127": { normal: 0.15, reverseHolo: 0.5 },
        "128": { normal: 0.15, reverseHolo: 0.5 },
        "129": { normal: 0.1, reverseHolo: 0.5 },
        "130": { normal: 0.75, reverseHolo: 1.5 },
        "131": { normal: 0.15, reverseHolo: 0.5 },
        "132": { normal: 0.75, reverseHolo: 1.5 },
        "133": { normal: 0.1, reverseHolo: 0.5 },
        "134": { normal: 0.75, reverseHolo: 1.5 },
        "135": { normal: 0.75, reverseHolo: 1.5 },
        "136": { normal: 0.75, reverseHolo: 1.5 },
        "137": { normal: 0.1, reverseHolo: 0.5 },
        "138": { normal: 0.15, reverseHolo: 0.5 },
        "139": { normal: 0.75, reverseHolo: 1.5 },
        "140": { normal: 0.15, reverseHolo: 0.5 },
        "141": { normal: 0.75, reverseHolo: 1.5 },
        "142": { normal: 0.75, reverseHolo: 1.5 },
        "143": { normal: 0.15, reverseHolo: 0.5 },
        "144": { normal: 0.75, reverseHolo: 1.5 },
        "145": 6,
        "146": { normal: 0.75, reverseHolo: 1.5 },
        "147": { normal: 0.1, reverseHolo: 0.5 },
        "148": { normal: 0.15, reverseHolo: 0.5 },
        "149": { normal: 0.75, reverseHolo: 1.5 },
        "150": { normal: 0.75, reverseHolo: 1.5 },
        "151": 6,
        "152": { normal: 0.1, reverseHolo: 0.5 },
        "153": { normal: 0.1, reverseHolo: 0.5 },
        "154": { normal: 0.1, reverseHolo: 0.5 },
        "155": { normal: 0.15, reverseHolo: 0.5 },
        "156": { normal: 0.15, reverseHolo: 0.5 },
        "157": { normal: 0.15, reverseHolo: 0.5 },
        "158": { normal: 0.15, reverseHolo: 0.5 },
        "159": { normal: 0.15, reverseHolo: 0.5 },
        "160": { normal: 0.15, reverseHolo: 0.5 },
        "161": { normal: 0.15, reverseHolo: 0.5 },
        "162": { normal: 0.15, reverseHolo: 0.5 },
        "163": { normal: 0.15, reverseHolo: 0.5 },
        "164": { normal: 0.15, reverseHolo: 0.5 },
        "165": { normal: 0.15, reverseHolo: 0.5 },
        "166": 8.00, // Bulbasaur (Illustration Rare)
        "167": 7.00, // Ivysaur (Illustration Rare)
        "168": 12.00, // Charmander (Illustration Rare)
        "169": 9.00, // Charmeleon (Illustration Rare)
        "170": 11.00, // Squirtle (Illustration Rare)
        "171": 7.50, // Wartortle (Illustration Rare)
        "172": 6.00, // Caterpie (Illustration Rare)
        "173": 15.00, // Pikachu (Illustration Rare)
        "174": 8.00, // Nidoking (Illustration Rare)
        "175": 9.50, // Psyduck (Illustration Rare)
        "176": 7.00, // Poliwhirl (Illustration Rare)
        "177": 6.50, // Machoke (Illustration Rare)
        "178": 6.00, // Tangela (Illustration Rare)
        "179": 8.00, // Mr. Mime (Illustration Rare)
        "180": 10.00, // Omanyte (Illustration Rare)
        "181": 12.00, // Dragonair (Illustration Rare)
        "182": 14.00, // Venusaur ex (Ultra Rare)
        "183": 20.00, // Charizard ex (Ultra Rare)
        "184": 13.00, // Blastoise ex (Ultra Rare)
        "185": 10.00, // Arbok ex (Ultra Rare)
        "186": 12.00, // Ninetales ex (Ultra Rare)
        "187": 11.00, // Wigglytuff ex (Ultra Rare)
        "188": 13.00, // Alakazam ex (Ultra Rare)
        "189": 10.00, // Golem ex (Ultra Rare)
        "190": 11.00, // Kangaskhan ex (Ultra Rare)
        "191": 10.00, // Jynx ex (Ultra Rare)
        "192": 15.00, // Zapdos ex (Ultra Rare)
        "193": 18.00, // Mew ex (Ultra Rare)
        "194": 12.00, // Bill's Transfer (Ultra Rare)
        "195": 10.00, // Daisy's Help (Ultra Rare)
        "196": 13.00, // Erika's Invitation (Ultra Rare)
        "197": 12.00, // Giovanni's Charisma (Ultra Rare)
        "198": 73.00, // Venusaur ex (Special Illustration Rare)
        "199": 210.00, // Charizard ex (Special Illustration Rare)
        "200": 70.00, // Blastoise ex (Special Illustration Rare)
        "201": 42.00, // Alakazam ex (Special Illustration Rare)
        "202": 57.00, // Zapdos ex (Special Illustration Rare)
        "203": 14.00, // Erika's Invitation (Special Illustration Rare)
        "204": 12.00, // Giovanni's Charisma (Special Illustration Rare)
        "205": 28.00, // Mew ex (Hyper Rare)
        "206": 22.00, // Switch (Hyper Rare)
        "207": 20.00 // Basic Psychic Energy (Hyper Rare)
    },

    "paradox-rift": {
        "1": { normal: 0.1, reverseHolo: 0.5 },
        "2": { normal: 0.15, reverseHolo: 0.5 },
        "3": 6,
        "4": { normal: 0.1, reverseHolo: 0.5 },
        "5": { normal: 0.15, reverseHolo: 0.5 },
        "6": { normal: 0.1, reverseHolo: 0.5 },
        "7": { normal: 0.1, reverseHolo: 0.5 },
        "8": { normal: 0.1, reverseHolo: 0.5 },
        "9": { normal: 0.15, reverseHolo: 0.5 },
        "10": { normal: 0.1, reverseHolo: 0.5 },
        "11": { normal: 0.1, reverseHolo: 0.5 },
        "12": { normal: 0.15, reverseHolo: 0.5 },
        "13": { normal: 0.1, reverseHolo: 0.5 },
        "14": { normal: 0.1, reverseHolo: 0.5 },
        "15": { normal: 0.1, reverseHolo: 0.5 },
        "16": { normal: 0.1, reverseHolo: 0.5 },
        "17": { normal: 0.15, reverseHolo: 0.5 },
        "18": { normal: 0.75, reverseHolo: 1.5 },
        "19": { normal: 0.1, reverseHolo: 0.5 },
        "20": { normal: 0.1, reverseHolo: 0.5 },
        "21": { normal: 0.15, reverseHolo: 0.5 },
        "22": { normal: 0.75, reverseHolo: 1.5 },
        "23": { normal: 0.1, reverseHolo: 0.5 },
        "24": { normal: 0.15, reverseHolo: 0.5 },
        "25": { normal: 0.1, reverseHolo: 0.5 },
        "26": { normal: 0.1, reverseHolo: 0.5 },
        "27": 6,
        "28": { normal: 0.75, reverseHolo: 1.5 },
        "29": { normal: 0.75, reverseHolo: 1.5 },
        "30": { normal: 0.1, reverseHolo: 0.5 },
        "31": { normal: 0.1, reverseHolo: 0.5 },
        "32": { normal: 0.75, reverseHolo: 1.5 },
        "33": { normal: 0.1, reverseHolo: 0.5 },
        "34": { normal: 0.1, reverseHolo: 0.5 },
        "35": { normal: 0.1, reverseHolo: 0.5 },
        "36": { normal: 0.75, reverseHolo: 1.5 },
        "37": { normal: 0.1, reverseHolo: 0.5 },
        "38": 6,
        "39": { normal: 0.1, reverseHolo: 0.5 },
        "40": { normal: 0.75, reverseHolo: 1.5 },
        "41": { normal: 0.1, reverseHolo: 0.5 },
        "42": { normal: 0.15, reverseHolo: 0.5 },
        "43": { normal: 0.1, reverseHolo: 0.5 },
        "44": { normal: 0.1, reverseHolo: 0.5 },
        "45": { normal: 0.15, reverseHolo: 0.5 },
        "46": 6,
        "47": { normal: 0.1, reverseHolo: 0.5 },
        "48": { normal: 0.1, reverseHolo: 0.5 },
        "49": { normal: 0.75, reverseHolo: 1.5 },
        "50": 6,
        "51": { normal: 0.1, reverseHolo: 0.5 },
        "52": { normal: 0.1, reverseHolo: 0.5 },
        "53": { normal: 0.15, reverseHolo: 0.5 },
        "54": { normal: 0.15, reverseHolo: 0.5 },
        "55": { normal: 0.15, reverseHolo: 0.5 },
        "56": { normal: 0.15, reverseHolo: 0.5 },
        "57": { normal: 0.75, reverseHolo: 1.5 },
        "58": 6,
        "59": { normal: 0.1, reverseHolo: 0.5 },
        "60": { normal: 0.1, reverseHolo: 0.5 },
        "61": { normal: 0.1, reverseHolo: 0.5 },
        "62": { normal: 0.1, reverseHolo: 0.5 },
        "63": { normal: 0.15, reverseHolo: 0.5 },
        "64": { normal: 0.1, reverseHolo: 0.5 },
        "65": { normal: 0.1, reverseHolo: 0.5 },
        "66": { normal: 0.75, reverseHolo: 1.5 },
        "67": { normal: 0.1, reverseHolo: 0.5 },
        "68": 6,
        "69": { normal: 0.1, reverseHolo: 0.5 },
        "70": 6,
        "71": { normal: 0.1, reverseHolo: 0.5 },
        "72": { normal: 0.75, reverseHolo: 1.5 },
        "73": { normal: 0.75, reverseHolo: 1.5 },
        "74": { normal: 0.75, reverseHolo: 1.5 },
        "75": { normal: 0.1, reverseHolo: 0.5 },
        "76": 6,
        "77": { normal: 0.1, reverseHolo: 0.5 },
        "78": { normal: 0.15, reverseHolo: 0.5 },
        "79": { normal: 0.1, reverseHolo: 0.5 },
        "80": { normal: 0.1, reverseHolo: 0.5 },
        "81": { normal: 0.75, reverseHolo: 1.5 },
        "82": { normal: 0.1, reverseHolo: 0.5 },
        "83": { normal: 0.1, reverseHolo: 0.5 },
        "84": { normal: 0.1, reverseHolo: 0.5 },
        "85": { normal: 0.15, reverseHolo: 0.5 },
        "86": { normal: 0.15, reverseHolo: 0.5 },
        "87": { normal: 0.1, reverseHolo: 0.5 },
        "88": { normal: 0.1, reverseHolo: 0.5 },
        "89": 6,
        "90": { normal: 0.1, reverseHolo: 0.5 },
        "91": { normal: 0.1, reverseHolo: 0.5 },
        "92": { normal: 0.15, reverseHolo: 0.5 },
        "93": { normal: 0.75, reverseHolo: 1.5 },
        "94": { normal: 0.1, reverseHolo: 0.5 },
        "95": { normal: 0.1, reverseHolo: 0.5 },
        "96": { normal: 0.1, reverseHolo: 0.5 },
        "97": { normal: 0.15, reverseHolo: 0.5 },
        "98": 6,
        "99": { normal: 0.15, reverseHolo: 0.5 },
        "100": 6,
        "101": { normal: 0.1, reverseHolo: 0.5 },
        "102": { normal: 0.1, reverseHolo: 0.5 },
        "103": { normal: 0.1, reverseHolo: 0.5 },
        "104": { normal: 0.75, reverseHolo: 1.5 },
        "105": { normal: 0.15, reverseHolo: 0.5 },
        "106": { normal: 0.1, reverseHolo: 0.5 },
        "107": { normal: 0.15, reverseHolo: 0.5 },
        "108": 6,
        "109": { normal: 0.75, reverseHolo: 1.5 },
        "110": { normal: 0.1, reverseHolo: 0.5 },
        "111": { normal: 0.1, reverseHolo: 0.5 },
        "112": { normal: 0.15, reverseHolo: 0.5 },
        "113": { normal: 0.15, reverseHolo: 0.5 },
        "114": { normal: 0.1, reverseHolo: 0.5 },
        "115": { normal: 0.1, reverseHolo: 0.5 },
        "116": { normal: 0.1, reverseHolo: 0.5 },
        "117": { normal: 0.15, reverseHolo: 0.5 },
        "118": { normal: 0.75, reverseHolo: 1.5 },
        "119": { normal: 0.1, reverseHolo: 0.5 },
        "120": { normal: 0.75, reverseHolo: 1.5 },
        "121": { normal: 0.75, reverseHolo: 1.5 },
        "122": { normal: 0.75, reverseHolo: 1.5 },
        "123": { normal: 0.75, reverseHolo: 1.5 },
        "124": 6,
        "125": { normal: 0.75, reverseHolo: 1.5 },
        "126": { normal: 0.1, reverseHolo: 0.5 },
        "127": { normal: 0.1, reverseHolo: 0.5 },
        "128": { normal: 0.15, reverseHolo: 0.5 },
        "129": { normal: 0.15, reverseHolo: 0.5 },
        "130": { normal: 0.1, reverseHolo: 0.5 },
        "131": { normal: 0.1, reverseHolo: 0.5 },
        "132": { normal: 0.1, reverseHolo: 0.5 },
        "133": { normal: 0.1, reverseHolo: 0.5 },
        "134": { normal: 0.75, reverseHolo: 1.5 },
        "135": 6,
        "136": { normal: 0.75, reverseHolo: 1.5 },
        "137": 6,
        "138": { normal: 0.15, reverseHolo: 0.5 },
        "139": 6,
        "140": 6,
        "141": { normal: 0.15, reverseHolo: 0.5 },
        "142": { normal: 0.1, reverseHolo: 0.5 },
        "143": { normal: 0.1, reverseHolo: 0.5 },
        "144": { normal: 0.75, reverseHolo: 1.5 },
        "145": { normal: 0.1, reverseHolo: 0.5 },
        "146": { normal: 0.15, reverseHolo: 0.5 },
        "147": { normal: 0.1, reverseHolo: 0.5 },
        "148": { normal: 0.1, reverseHolo: 0.5 },
        "149": { normal: 0.1, reverseHolo: 0.5 },
        "150": { normal: 0.15, reverseHolo: 0.5 },
        "151": { normal: 0.1, reverseHolo: 0.5 },
        "152": { normal: 0.1, reverseHolo: 0.5 },
        "153": { normal: 0.1, reverseHolo: 0.5 },
        "154": { normal: 0.1, reverseHolo: 0.5 },
        "155": 6,
        "156": 6,
        "157": { normal: 0.15, reverseHolo: 0.5 },
        "158": { normal: 0.75, reverseHolo: 1.5 },
        "159": { normal: 0.15, reverseHolo: 0.5 },
        "160": { normal: 0.15, reverseHolo: 0.5 },
        "161": { normal: 0.15, reverseHolo: 0.5 },
        "162": { normal: 0.15, reverseHolo: 0.5 },
        "163": { normal: 0.15, reverseHolo: 0.5 },
        "164": { normal: 0.15, reverseHolo: 0.5 },
        "165": { normal: 0.1, reverseHolo: 0.5 },
        "166": { normal: 0.15, reverseHolo: 0.5 },
        "167": { normal: 0.15, reverseHolo: 0.5 },
        "168": { normal: 0.15, reverseHolo: 0.5 },
        "169": { normal: 0.1, reverseHolo: 0.5 },
        "170": { normal: 0.15, reverseHolo: 0.5 },
        "171": { normal: 0.15, reverseHolo: 0.5 },
        "172": { normal: 0.15, reverseHolo: 0.5 },
        "173": { normal: 0.15, reverseHolo: 0.5 },
        "174": { normal: 0.15, reverseHolo: 0.5 },
        "175": { normal: 0.15, reverseHolo: 0.5 },
        "176": { normal: 0.15, reverseHolo: 0.5 },
        "177": { normal: 0.15, reverseHolo: 0.5 },
        "178": { normal: 0.15, reverseHolo: 0.5 },
        "179": { normal: 0.15, reverseHolo: 0.5 },
        "180": { normal: 0.15, reverseHolo: 0.5 },
        "181": { normal: 0.15, reverseHolo: 0.5 },
        "182": { normal: 0.15, reverseHolo: 0.5 },
        "183": 6.00, // Crustle (Illustration Rare)
        "184": 7.00, // Dottler (Illustration Rare)
        "185": 6.50, // Toedscruel (Illustration Rare)
        "186": 8.00, // Magby (Illustration Rare)
        "187": 9.00, // Iron Moth (Illustration Rare)
        "188": 7.00, // Snorunt (Illustration Rare)
        "189": 8.00, // Mantyke (Illustration Rare)
        "190": 7.50, // Vanillish (Illustration Rare)
        "191": 6.00, // Wimpod (Illustration Rare)
        "192": 7.00, // Veluza (Illustration Rare)
        "193": 24.00, // Plusle (Illustration Rare)
        "194": 25.00, // Minun (Illustration Rare)
        "195": 8.00, // Blitzle (Illustration Rare)
        "196": 7.00, // Joltik (Illustration Rare)
        "197": 9.00, // Espathra (Illustration Rare)
        "198": 10.00, // Gimmighoul (Illustration Rare)
        "199": 83.00, // Groudon (Illustration Rare)
        "200": 8.00, // Mienshao (Illustration Rare)
        "201": 7.50, // Minior (Illustration Rare)
        "202": 9.00, // Garganacl (Illustration Rare)
        "203": 10.00, // Slither Wing (Illustration Rare)
        "204": 6.50, // Garbodor (Illustration Rare)
        "205": 11.00, // Yveltal (Illustration Rare)
        "206": 37.00, // Morpeko (Illustration Rare)
        "207": 8.00, // Brute Bonnet (Illustration Rare)
        "208": 31.00, // Steelix (Illustration Rare)
        "209": 9.00, // Ferrothorn (Illustration Rare)
        "210": 10.00, // Aegislash (Illustration Rare)
        "211": 7.00, // Aipom (Illustration Rare)
        "212": 6.50, // Loudred (Illustration Rare)
        "213": 8.00, // Swablu (Illustration Rare)
        "214": 9.00, // Porygon-Z (Illustration Rare)
        "215": 10.00, // Cyclizar (Illustration Rare)
        "216": 9.00, // Iron Jugulis (Illustration Rare)
        "217": 10.00, // Froslass ex (Ultra Rare)
        "218": 12.00, // Armarouge ex (Ultra Rare)
        "219": 14.00, // Garchomp ex (Ultra Rare)
        "220": 10.00, // Tsareena ex (Ultra Rare)
        "221": 11.00, // Golisopod ex (Ultra Rare)
        "222": 13.00, // Tapu Koko ex (Ultra Rare)
        "223": 15.00, // Iron Hands ex (Ultra Rare)
        "224": 10.00, // Cofagrigus ex (Ultra Rare)
        "225": 16.00, // Iron Valiant ex (Ultra Rare)
        "226": 11.00, // Hoopa ex (Ultra Rare)
        "227": 12.00, // Toxtricity ex (Ultra Rare)
        "228": 11.00, // Sandy Shocks ex (Ultra Rare)
        "229": 17.00, // Roaring Moon ex (Ultra Rare)
        "230": 12.00, // Aegislash ex (Ultra Rare)
        "231": 14.00, // Gholdengo ex (Ultra Rare)
        "232": 11.00, // Altaria ex (Ultra Rare)
        "233": 10.00, // Maushold ex (Ultra Rare)
        "234": 10.00, // Bombirdier ex (Ultra Rare)
        "235": 11.00, // Larry (Ultra Rare)
        "236": 10.00, // Mela (Ultra Rare)
        "237": 10.00, // Norman (Ultra Rare)
        "238": 11.00, // Parasol Lady (Ultra Rare)
        "239": 12.00, // Professor Sada's Vitality (Ultra Rare)
        "240": 12.00, // Professor Turo's Scenario (Ultra Rare)
        "241": 11.00, // Rika (Ultra Rare)
        "242": 10.00, // Roark (Ultra Rare)
        "243": 10.00, // Shauntal (Ultra Rare)
        "244": 11.00, // Tulip (Ultra Rare)
        "245": 18.00, // Garchomp ex (Special Illustration Rare)
        "246": 15.00, // Golisopod ex (Special Illustration Rare)
        "247": 20.00, // Tapu Koko ex (Special Illustration Rare)
        "248": 25.00, // Iron Hands ex (Special Illustration Rare)
        "249": 35.00, // Iron Valiant ex (Special Illustration Rare)
        "250": 18.00, // Sandy Shocks ex (Special Illustration Rare)
        "251": 69.00, // Roaring Moon ex (Special Illustration Rare)
        "252": 28.00, // Gholdengo ex (Special Illustration Rare)
        "253": 22.00, // Altaria ex (Special Illustration Rare)
        "254": 12.00, // Mela (Special Illustration Rare)
        "255": 14.00, // Parasol Lady (Special Illustration Rare)
        "256": 16.00, // Professor Sada's Vitality (Special Illustration Rare)
        "257": 16.00, // Professor Turo's Scenario (Special Illustration Rare)
        "258": 13.00, // Rika (Special Illustration Rare)
        "259": 15.00, // Tulip (Special Illustration Rare)
        "260": 25.00, // Garchomp ex (Hyper Rare)
        "261": 40.00, // Iron Valiant ex (Hyper Rare)
        "262": 80.00, // Roaring Moon ex (Hyper Rare)
        "263": 22.00, // Beach Court (Hyper Rare)
        "264": 24.00, // Counter Catcher (Hyper Rare)
        "265": 20.00, // Luxurious Cape (Hyper Rare)
        "266": 23.00 // Reversal Energy (Hyper Rare)
    },

    "paldean-fates": {
        "1": { normal: 0.1, reverseHolo: 0.5 },
        "2": 6,
        "3": { normal: 0.1, reverseHolo: 0.5 },
        "4": { normal: 0.1, reverseHolo: 0.5 },
        "5": 6,
        "6": 6,
        "7": { normal: 0.1, reverseHolo: 0.5 },
        "8": { normal: 0.15, reverseHolo: 0.5 },
        "9": { normal: 0.1, reverseHolo: 0.5 },
        "10": { normal: 0.75, reverseHolo: 1.5 },
        "11": { normal: 0.1, reverseHolo: 0.5 },
        "12": { normal: 0.15, reverseHolo: 0.5 },
        "13": { normal: 0.75, reverseHolo: 1.5 },
        "14": { normal: 0.1, reverseHolo: 0.5 },
        "15": { normal: 0.75, reverseHolo: 1.5 },
        "16": { normal: 0.1, reverseHolo: 0.5 },
        "17": { normal: 0.1, reverseHolo: 0.5 },
        "18": { normal: 0.1, reverseHolo: 0.5 },
        "19": { normal: 0.75, reverseHolo: 1.5 },
        "20": { normal: 0.1, reverseHolo: 0.5 },
        "21": { normal: 0.15, reverseHolo: 0.5 },
        "22": { normal: 0.15, reverseHolo: 0.5 },
        "23": { normal: 0.1, reverseHolo: 0.5 },
        "24": { normal: 0.75, reverseHolo: 1.5 },
        "25": { normal: 0.1, reverseHolo: 0.5 },
        "26": { normal: 0.75, reverseHolo: 1.5 },
        "27": { normal: 0.1, reverseHolo: 0.5 },
        "28": { normal: 0.15, reverseHolo: 0.5 },
        "29": 6,
        "30": { normal: 0.1, reverseHolo: 0.5 },
        "31": { normal: 0.1, reverseHolo: 0.5 },
        "32": { normal: 0.1, reverseHolo: 0.5 },
        "33": { normal: 0.15, reverseHolo: 0.5 },
        "34": { normal: 0.1, reverseHolo: 0.5 },
        "35": { normal: 0.15, reverseHolo: 0.5 },
        "36": { normal: 0.1, reverseHolo: 0.5 },
        "37": { normal: 0.75, reverseHolo: 1.5 },
        "38": { normal: 0.1, reverseHolo: 0.5 },
        "39": { normal: 0.15, reverseHolo: 0.5 },
        "40": { normal: 0.75, reverseHolo: 1.5 },
        "41": { normal: 0.1, reverseHolo: 0.5 },
        "42": { normal: 0.1, reverseHolo: 0.5 },
        "43": { normal: 0.75, reverseHolo: 1.5 },
        "44": { normal: 0.1, reverseHolo: 0.5 },
        "45": { normal: 0.1, reverseHolo: 0.5 },
        "46": { normal: 0.15, reverseHolo: 0.5 },
        "47": { normal: 0.75, reverseHolo: 1.5 },
        "48": { normal: 0.1, reverseHolo: 0.5 },
        "49": { normal: 0.15, reverseHolo: 0.5 },
        "50": { normal: 0.1, reverseHolo: 0.5 },
        "51": { normal: 0.1, reverseHolo: 0.5 },
        "52": { normal: 0.15, reverseHolo: 0.5 },
        "53": 6,
        "54": 6,
        "55": { normal: 0.1, reverseHolo: 0.5 },
        "56": { normal: 0.1, reverseHolo: 0.5 },
        "57": { normal: 0.15, reverseHolo: 0.5 },
        "58": { normal: 0.1, reverseHolo: 0.5 },
        "59": 6,
        "60": { normal: 0.1, reverseHolo: 0.5 },
        "61": { normal: 0.15, reverseHolo: 0.5 },
        "62": { normal: 0.1, reverseHolo: 0.5 },
        "63": { normal: 0.75, reverseHolo: 1.5 },
        "64": { normal: 0.1, reverseHolo: 0.5 },
        "65": { normal: 0.75, reverseHolo: 1.5 },
        "66": 6,
        "67": { normal: 0.75, reverseHolo: 1.5 },
        "68": { normal: 0.1, reverseHolo: 0.5 },
        "69": 6,
        "70": { normal: 0.75, reverseHolo: 1.5 },
        "71": { normal: 0.1, reverseHolo: 0.5 },
        "72": { normal: 0.15, reverseHolo: 0.5 },
        "73": { normal: 0.1, reverseHolo: 0.5 },
        "74": { normal: 0.15, reverseHolo: 0.5 },
        "75": 6,
        "76": { normal: 0.15, reverseHolo: 0.5 },
        "77": { normal: 0.15, reverseHolo: 0.5 },
        "78": { normal: 0.15, reverseHolo: 0.5 },
        "79": { normal: 0.15, reverseHolo: 0.5 },
        "80": { normal: 0.15, reverseHolo: 0.5 },
        "81": { normal: 0.15, reverseHolo: 0.5 },
        "82": { normal: 0.1, reverseHolo: 0.5 },
        "83": { normal: 0.15, reverseHolo: 0.5 },
        "84": { normal: 0.15, reverseHolo: 0.5 },
        "85": { normal: 0.1, reverseHolo: 0.5 },
        "86": { normal: 0.1, reverseHolo: 0.5 },
        "87": { normal: 0.75, reverseHolo: 1.5 },
        "88": { normal: 0.75, reverseHolo: 1.5 },
        "89": { normal: 0.1, reverseHolo: 0.5 },
        "90": { normal: 0.15, reverseHolo: 0.5 },
        "91": { normal: 0.15, reverseHolo: 0.5 },
        "92": 12.00, // Shiny Rare
        "93": 14.00, // Shiny Rare
        "94": 11.00, // Shiny Rare
        "95": 15.00, // Shiny Rare
        "96": 13.00, // Shiny Rare
        "97": 16.00, // Shiny Rare
        "98": 12.50, // Shiny Rare
        "99": 18.00, // Shiny Rare
        "100": 14.00, // Shiny Rare
        "101": 11.50, // Shiny Rare
        "102": 13.00, // Shiny Rare
        "103": 15.50, // Shiny Rare
        "104": 12.00, // Shiny Rare
        "105": 17.00, // Shiny Rare
        "106": 14.50, // Shiny Rare
        "107": 11.00, // Shiny Rare
        "108": 13.50, // Shiny Rare
        "109": 16.00, // Shiny Rare
        "110": 12.00, // Shiny Rare
        "111": 14.00, // Shiny Rare
        "112": 19.00, // Shiny Rare
        "113": 13.00, // Shiny Rare
        "114": 15.00, // Shiny Rare
        "115": 11.50, // Shiny Rare
        "116": 14.50, // Shiny Rare
        "117": 12.50, // Shiny Rare
        "118": 16.50, // Shiny Rare
        "119": 13.50, // Shiny Rare
        "120": 18.00, // Shiny Rare
        "121": 14.00, // Shiny Rare
        "122": 11.00, // Shiny Rare
        "123": 15.00, // Shiny Rare
        "124": 12.00, // Shiny Rare
        "125": 17.00, // Shiny Rare
        "126": 13.00, // Shiny Rare
        "127": 14.50, // Shiny Rare
        "128": 11.50, // Shiny Rare
        "129": 16.00, // Shiny Rare
        "130": 12.50, // Shiny Rare
        "131": 15.50, // Shiny Rare
        "132": 13.50, // Shiny Rare
        "133": 14.00, // Shiny Rare
        "134": 11.00, // Shiny Rare
        "135": 18.00, // Shiny Rare
        "136": 12.00, // Shiny Rare
        "137": 16.00, // Shiny Rare
        "138": 13.00, // Shiny Rare
        "139": 15.00, // Shiny Rare
        "140": 14.50, // Shiny Rare
        "141": 11.50, // Shiny Rare
        "142": 17.00, // Shiny Rare
        "143": 12.50, // Shiny Rare
        "144": 19.00, // Shiny Rare
        "145": 13.50, // Shiny Rare
        "146": 15.50, // Shiny Rare
        "147": 14.00, // Shiny Rare
        "148": 11.00, // Shiny Rare
        "149": 16.50, // Shiny Rare
        "150": 12.00, // Shiny Rare
        "151": 14.00, // Shiny Rare
        "152": 13.00, // Shiny Rare
        "153": 15.00, // Shiny Rare
        "154": 11.50, // Shiny Rare
        "155": 17.50, // Shiny Rare
        "156": 12.50, // Shiny Rare
        "157": 14.50, // Shiny Rare
        "158": 16.00, // Shiny Rare
        "159": 13.50, // Shiny Rare
        "160": 15.50, // Shiny Rare
        "161": 12.00, // Shiny Rare
        "162": 18.00, // Shiny Rare
        "163": 14.00, // Shiny Rare
        "164": 11.00, // Shiny Rare
        "165": 16.00, // Shiny Rare
        "166": 13.00, // Shiny Rare
        "167": 15.00, // Shiny Rare
        "168": 12.50, // Shiny Rare
        "169": 17.00, // Shiny Rare
        "170": 14.50, // Shiny Rare
        "171": 11.50, // Shiny Rare
        "172": 19.00, // Shiny Rare
        "173": 13.50, // Shiny Rare
        "174": 15.50, // Shiny Rare
        "175": 12.00, // Shiny Rare
        "176": 16.50, // Shiny Rare
        "177": 14.00, // Shiny Rare
        "178": 13.00, // Shiny Rare
        "179": 18.00, // Shiny Rare
        "180": 11.00, // Shiny Rare
        "181": 15.00, // Shiny Rare
        "182": 12.50, // Shiny Rare
        "183": 17.00, // Shiny Rare
        "184": 14.50, // Shiny Rare
        "185": 13.50, // Shiny Rare
        "186": 16.00, // Shiny Rare
        "187": 12.00, // Shiny Rare
        "188": 15.50, // Shiny Rare
        "189": 14.00, // Shiny Rare
        "190": 11.50, // Shiny Rare
        "191": 18.50, // Shiny Rare
        "192": 13.00, // Shiny Rare
        "193": 16.00, // Shiny Rare
        "194": 12.50, // Shiny Rare
        "195": 15.00, // Shiny Rare
        "196": 14.50, // Shiny Rare
        "197": 17.00, // Shiny Rare
        "198": 13.50, // Shiny Rare
        "199": 19.00, // Shiny Rare
        "200": 12.00, // Shiny Rare
        "201": 15.50, // Shiny Rare
        "202": 14.00, // Shiny Rare
        "203": 11.00, // Shiny Rare
        "204": 16.50, // Shiny Rare
        "205": 13.00, // Shiny Rare
        "206": 18.00, // Shiny Rare
        "207": 12.50, // Shiny Rare
        "208": 15.00, // Shiny Rare
        "209": 14.50, // Shiny Rare
        "210": 17.50, // Shiny Rare
        "211": 13.50, // Shiny Rare
        "212": 35.00, // Forretress ex (Shiny Ultra Rare)
        "213": 38.00, // Toedscruel ex (Shiny Ultra Rare)
        "214": 42.00, // Espathra ex (Shiny Ultra Rare)
        "215": 45.00, // Alakazam ex (Shiny Ultra Rare)
        "216": 55.00, // Mew ex (Shiny Ultra Rare)
        "217": 60.00, // Gardevoir ex (Shiny Ultra Rare)
        "218": 36.00, // Glimmora ex (Shiny Ultra Rare)
        "219": 40.00, // Paldean Clodsire ex (Shiny Ultra Rare)
        "220": 44.00, // Noivern ex (Shiny Ultra Rare)
        "221": 50.00, // Pidgeot ex (Shiny Ultra Rare)
        "222": 38.00, // Wigglytuff ex (Shiny Ultra Rare)
        "223": 35.00, // Squawkabilly ex (Shiny Ultra Rare)
        "224": 8.00, // Wugtrio (Illustration Rare)
        "225": 9.00, // Palafin (Illustration Rare)
        "226": 7.50, // Pawmi (Illustration Rare)
        "227": 12.00, // Clive (Ultra Rare)
        "228": 14.00, // Judge (Ultra Rare)
        "229": 16.00, // Nemona (Ultra Rare)
        "230": 13.00, // Paldean Student (Ultra Rare)
        "231": 13.00, // Paldean Student (Ultra Rare)
        "232": 307.00, // Mew ex (Special Illustration Rare)
        "233": 55.00, // Gardevoir ex (Special Illustration Rare)
        "234": 156.00, // Charizard ex (Special Illustration Rare)
        "235": 18.00, // Arven (Special Illustration Rare)
        "236": 16.00, // Clive (Special Illustration Rare)
        "237": 25.00, // Iono (Special Illustration Rare)
        "238": 20.00, // Nemona (Special Illustration Rare)
        "239": 22.00, // Penny (Special Illustration Rare)
        "240": 32.00, // Wo-Chien ex (Hyper Rare)
        "241": 30.00, // Chi-Yu ex (Hyper Rare)
        "242": 28.00, // Chien-Pao ex (Hyper Rare)
        "243": 38.00, // Miraidon ex (Hyper Rare)
        "244": 26.00, // Ting-Lu ex (Hyper Rare)
        "245": 40.00 // Koraidon ex (Hyper Rare)
    },

    "temporal-forces": {
        "1": { normal: 0.1, reverseHolo: 0.5 },
        "2": { normal: 0.1, reverseHolo: 0.5 },
        "3": { normal: 0.1, reverseHolo: 0.5 },
        "4": { normal: 0.1, reverseHolo: 0.5 },
        "5": { normal: 0.15, reverseHolo: 0.5 },
        "6": { normal: 0.1, reverseHolo: 0.5 },
        "7": { normal: 0.1, reverseHolo: 0.5 },
        "8": { normal: 0.1, reverseHolo: 0.5 },
        "9": { normal: 0.15, reverseHolo: 0.5 },
        "10": { normal: 0.1, reverseHolo: 0.5 },
        "11": { normal: 0.1, reverseHolo: 0.5 },
        "12": 6,
        "13": { normal: 0.15, reverseHolo: 0.5 },
        "14": { normal: 0.1, reverseHolo: 0.5 },
        "15": { normal: 0.75, reverseHolo: 1.5 },
        "16": { normal: 0.1, reverseHolo: 0.5 },
        "17": { normal: 0.15, reverseHolo: 0.5 },
        "18": { normal: 0.1, reverseHolo: 0.5 },
        "19": { normal: 0.15, reverseHolo: 0.5 },
        "20": { normal: 0.1, reverseHolo: 0.5 },
        "21": { normal: 0.75, reverseHolo: 1.5 },
        "22": 6,
        "23": { normal: 0.1, reverseHolo: 0.5 },
        "24": { normal: 0.15, reverseHolo: 0.5 },
        "25": 6,
        "26": { normal: 0.1, reverseHolo: 0.5 },
        "27": { normal: 0.15, reverseHolo: 0.5 },
        "28": { normal: 0.1, reverseHolo: 0.5 },
        "29": { normal: 0.75, reverseHolo: 1.5 },
        "30": { normal: 0.1, reverseHolo: 0.5 },
        "31": { normal: 0.1, reverseHolo: 0.5 },
        "32": { normal: 0.1, reverseHolo: 0.5 },
        "33": { normal: 0.1, reverseHolo: 0.5 },
        "34": 6,
        "35": { normal: 0.1, reverseHolo: 0.5 },
        "36": { normal: 0.1, reverseHolo: 0.5 },
        "37": { normal: 0.15, reverseHolo: 0.5 },
        "38": 6,
        "39": { normal: 0.1, reverseHolo: 0.5 },
        "40": { normal: 0.1, reverseHolo: 0.5 },
        "41": { normal: 0.75, reverseHolo: 1.5 },
        "42": { normal: 0.1, reverseHolo: 0.5 },
        "43": { normal: 0.15, reverseHolo: 0.5 },
        "44": { normal: 0.15, reverseHolo: 0.5 },
        "45": { normal: 0.1, reverseHolo: 0.5 },
        "46": { normal: 0.1, reverseHolo: 0.5 },
        "47": { normal: 0.1, reverseHolo: 0.5 },
        "48": { normal: 0.1, reverseHolo: 0.5 },
        "49": { normal: 0.15, reverseHolo: 0.5 },
        "50": 6,
        "51": { normal: 0.1, reverseHolo: 0.5 },
        "52": { normal: 0.1, reverseHolo: 0.5 },
        "53": { normal: 0.1, reverseHolo: 0.5 },
        "54": { normal: 0.15, reverseHolo: 0.5 },
        "55": { normal: 0.1, reverseHolo: 0.5 },
        "56": { normal: 0.15, reverseHolo: 0.5 },
        "57": { normal: 0.15, reverseHolo: 0.5 },
        "58": { normal: 0.1, reverseHolo: 0.5 },
        "59": { normal: 0.15, reverseHolo: 0.5 },
        "60": 6,
        "61": { normal: 0.15, reverseHolo: 0.5 },
        "62": { normal: 0.75, reverseHolo: 1.5 },
        "63": { normal: 0.1, reverseHolo: 0.5 },
        "64": { normal: 0.1, reverseHolo: 0.5 },
        "65": { normal: 0.1, reverseHolo: 0.5 },
        "66": { normal: 0.1, reverseHolo: 0.5 },
        "67": { normal: 0.15, reverseHolo: 0.5 },
        "68": { normal: 0.1, reverseHolo: 0.5 },
        "69": { normal: 0.15, reverseHolo: 0.5 },
        "70": { normal: 0.1, reverseHolo: 0.5 },
        "71": { normal: 0.1, reverseHolo: 0.5 },
        "72": { normal: 0.15, reverseHolo: 0.5 },
        "73": { normal: 0.1, reverseHolo: 0.5 },
        "74": { normal: 0.15, reverseHolo: 0.5 },
        "75": { normal: 0.1, reverseHolo: 0.5 },
        "76": { normal: 0.15, reverseHolo: 0.5 },
        "77": { normal: 0.15, reverseHolo: 0.5 },
        "78": { normal: 0.75, reverseHolo: 1.5 },
        "79": { normal: 0.15, reverseHolo: 0.5 },
        "80": { normal: 0.75, reverseHolo: 1.5 },
        "81": 6,
        "82": { normal: 0.1, reverseHolo: 0.5 },
        "83": { normal: 0.1, reverseHolo: 0.5 },
        "84": { normal: 0.75, reverseHolo: 1.5 },
        "85": { normal: 0.1, reverseHolo: 0.5 },
        "86": { normal: 0.15, reverseHolo: 0.5 },
        "87": { normal: 0.1, reverseHolo: 0.5 },
        "88": { normal: 0.15, reverseHolo: 0.5 },
        "89": { normal: 0.1, reverseHolo: 0.5 },
        "90": { normal: 0.15, reverseHolo: 0.5 },
        "91": { normal: 0.1, reverseHolo: 0.5 },
        "92": { normal: 0.15, reverseHolo: 0.5 },
        "93": { normal: 0.1, reverseHolo: 0.5 },
        "94": { normal: 0.1, reverseHolo: 0.5 },
        "95": { normal: 0.15, reverseHolo: 0.5 },
        "96": { normal: 0.15, reverseHolo: 0.5 },
        "97": { normal: 0.15, reverseHolo: 0.5 },
        "98": { normal: 0.15, reverseHolo: 0.5 },
        "99": 6,
        "100": { normal: 0.1, reverseHolo: 0.5 },
        "101": { normal: 0.1, reverseHolo: 0.5 },
        "102": { normal: 0.1, reverseHolo: 0.5 },
        "103": { normal: 0.1, reverseHolo: 0.5 },
        "104": 6,
        "105": { normal: 0.1, reverseHolo: 0.5 },
        "106": { normal: 0.1, reverseHolo: 0.5 },
        "107": { normal: 0.15, reverseHolo: 0.5 },
        "108": 6,
        "109": { normal: 0.75, reverseHolo: 1.5 },
        "110": { normal: 0.15, reverseHolo: 0.5 },
        "111": 6,
        "112": { normal: 0.1, reverseHolo: 0.5 },
        "113": { normal: 0.1, reverseHolo: 0.5 },
        "114": { normal: 0.1, reverseHolo: 0.5 },
        "115": { normal: 0.15, reverseHolo: 0.5 },
        "116": { normal: 0.1, reverseHolo: 0.5 },
        "117": { normal: 0.75, reverseHolo: 1.5 },
        "118": { normal: 0.15, reverseHolo: 0.5 },
        "119": { normal: 0.75, reverseHolo: 1.5 },
        "120": 6,
        "121": { normal: 0.75, reverseHolo: 1.5 },
        "122": 6,
        "123": 6,
        "124": { normal: 0.1, reverseHolo: 0.5 },
        "125": { normal: 0.1, reverseHolo: 0.5 },
        "126": { normal: 0.1, reverseHolo: 0.5 },
        "127": { normal: 0.1, reverseHolo: 0.5 },
        "128": { normal: 0.1, reverseHolo: 0.5 },
        "129": { normal: 0.75, reverseHolo: 1.5 },
        "130": { normal: 0.1, reverseHolo: 0.5 },
        "131": { normal: 0.15, reverseHolo: 0.5 },
        "132": { normal: 0.1, reverseHolo: 0.5 },
        "133": { normal: 0.1, reverseHolo: 0.5 },
        "134": { normal: 0.1, reverseHolo: 0.5 },
        "135": { normal: 0.15, reverseHolo: 0.5 },
        "136": { normal: 0.1, reverseHolo: 0.5 },
        "137": { normal: 0.15, reverseHolo: 0.5 },
        "138": { normal: 0.75, reverseHolo: 1.5 },
        "139": { normal: 0.15, reverseHolo: 0.5 },
        "140": { normal: 0.15, reverseHolo: 0.5 },
        "141": 12,
        "142": { normal: 0.15, reverseHolo: 0.5 },
        "143": { normal: 0.15, reverseHolo: 0.5 },
        "144": { normal: 0.15, reverseHolo: 0.5 },
        "145": { normal: 0.15, reverseHolo: 0.5 },
        "146": { normal: 0.15, reverseHolo: 0.5 },
        "147": { normal: 0.15, reverseHolo: 0.5 },
        "148": { normal: 0.15, reverseHolo: 0.5 },
        "149": { normal: 0.15, reverseHolo: 0.5 },
        "150": { normal: 0.15, reverseHolo: 0.5 },
        "151": { normal: 0.15, reverseHolo: 0.5 },
        "152": 12,
        "153": 12,
        "154": 12,
        "155": { normal: 0.15, reverseHolo: 0.5 },
        "156": { normal: 0.15, reverseHolo: 0.5 },
        "157": 12,
        "158": 12,
        "159": { normal: 0.15, reverseHolo: 0.5 },
        "160": { normal: 0.15, reverseHolo: 0.5 },
        "161": { normal: 0.15, reverseHolo: 0.5 },
        "162": 12,
        "163": 6.50, // Gastly (Illustration Rare)
        "164": 8.00, // (Illustration Rare)
        "165": 7.00, // (Illustration Rare)
        "166": 9.00, // (Illustration Rare)
        "167": 7.50, // (Illustration Rare)
        "168": 6.00, // (Illustration Rare)
        "169": 8.50, // (Illustration Rare)
        "170": 7.00, // (Illustration Rare)
        "171": 10.00, // Deerling (Illustration Rare)
        "172": 12.00, // (Illustration Rare)
        "173": 8.00, // (Illustration Rare)
        "174": 9.50, // (Illustration Rare)
        "175": 7.00, // (Illustration Rare)
        "176": 6.50, // (Illustration Rare)
        "177": 8.00, // (Illustration Rare)
        "178": 7.50, // (Illustration Rare)
        "179": 9.00, // (Illustration Rare)
        "180": 8.50, // (Illustration Rare)
        "181": 25.00, // Sawsbuck (Illustration Rare)
        "182": 7.00, // (Illustration Rare)
        "183": 8.00, // (Illustration Rare)
        "184": 9.00, // (Illustration Rare)
        "185": 10.00, // (Ultra Rare)
        "186": 12.00, // (Ultra Rare)
        "187": 11.00, // (Ultra Rare)
        "188": 13.00, // (Ultra Rare)
        "189": 10.50, // (Ultra Rare)
        "190": 14.00, // (Ultra Rare)
        "191": 11.50, // (Ultra Rare)
        "192": 12.00, // (Ultra Rare)
        "193": 10.00, // (Ultra Rare)
        "194": 13.50, // (Ultra Rare)
        "195": 11.00, // (Ultra Rare)
        "196": 12.50, // (Ultra Rare)
        "197": 10.00, // (Ultra Rare)
        "198": 11.00, // (Ultra Rare)
        "199": 10.50, // (Ultra Rare)
        "200": 12.00, // (Ultra Rare)
        "201": 11.00, // (Ultra Rare)
        "202": 13.00, // (Ultra Rare)
        "203": 30.00, // Iron Leaves ex (Special Illustration Rare)
        "204": 43.00, // Gouging Fire ex (Special Illustration Rare)
        "205": 58.00, // Walking Wake ex (Special Illustration Rare)
        "206": 56.00, // Iron Crown ex (Special Illustration Rare)
        "207": 22.00, // (Special Illustration Rare)
        "208": 76.00, // Raging Bolt ex (Special Illustration Rare)
        "209": 28.00, // Bianca's Devotion (Special Illustration Rare)
        "210": 18.00, // (Special Illustration Rare)
        "211": 35.00, // Morty's Conviction (Special Illustration Rare)
        "212": 24.00, // (Special Illustration Rare)
        "213": 28.00, // (Hyper Rare)
        "214": 32.00, // (Hyper Rare)
        "215": 26.00, // (Hyper Rare)
        "216": 30.00, // (Hyper Rare)
        "217": 24.00, // (Hyper Rare)
        "218": 27.00 // (Hyper Rare)
    },

    "twilight-masquerade": {
        "1": { normal: 0.1, reverseHolo: 0.5 },
        "2": { normal: 0.1, reverseHolo: 0.5 },
        "3": { normal: 0.1, reverseHolo: 0.5 },
        "4": { normal: 0.1, reverseHolo: 0.5 },
        "5": { normal: 0.15, reverseHolo: 0.5 },
        "6": { normal: 0.1, reverseHolo: 0.5 },
        "7": { normal: 0.15, reverseHolo: 0.5 },
        "8": { normal: 0.15, reverseHolo: 0.5 },
        "9": { normal: 0.1, reverseHolo: 0.5 },
        "10": { normal: 0.1, reverseHolo: 0.5 },
        "11": { normal: 0.15, reverseHolo: 0.5 },
        "12": { normal: 0.1, reverseHolo: 0.5 },
        "13": { normal: 0.1, reverseHolo: 0.5 },
        "14": { normal: 0.1, reverseHolo: 0.5 },
        "15": { normal: 0.1, reverseHolo: 0.5 },
        "16": { normal: 0.15, reverseHolo: 0.5 },
        "17": { normal: 0.1, reverseHolo: 0.5 },
        "18": { normal: 0.15, reverseHolo: 0.5 },
        "19": { normal: 0.75, reverseHolo: 1.5 },
        "20": { normal: 0.1, reverseHolo: 0.5 },
        "21": { normal: 0.1, reverseHolo: 0.5 },
        "22": { normal: 0.75, reverseHolo: 1.5 },
        "23": 6,
        "24": { normal: 0.75, reverseHolo: 1.5 },
        "25": 6,
        "26": { normal: 0.1, reverseHolo: 0.5 },
        "27": { normal: 0.1, reverseHolo: 0.5 },
        "28": { normal: 0.1, reverseHolo: 0.5 },
        "29": 6,
        "30": { normal: 0.1, reverseHolo: 0.5 },
        "31": { normal: 0.1, reverseHolo: 0.5 },
        "32": { normal: 0.1, reverseHolo: 0.5 },
        "33": { normal: 0.75, reverseHolo: 1.5 },
        "34": { normal: 0.1, reverseHolo: 0.5 },
        "35": { normal: 0.15, reverseHolo: 0.5 },
        "36": { normal: 0.1, reverseHolo: 0.5 },
        "37": { normal: 0.1, reverseHolo: 0.5 },
        "38": { normal: 0.75, reverseHolo: 1.5 },
        "39": { normal: 0.15, reverseHolo: 0.5 },
        "40": 6,
        "41": { normal: 0.1, reverseHolo: 0.5 },
        "42": { normal: 0.1, reverseHolo: 0.5 },
        "43": { normal: 0.15, reverseHolo: 0.5 },
        "44": { normal: 0.1, reverseHolo: 0.5 },
        "45": { normal: 0.1, reverseHolo: 0.5 },
        "46": { normal: 0.1, reverseHolo: 0.5 },
        "47": { normal: 0.1, reverseHolo: 0.5 },
        "48": { normal: 0.1, reverseHolo: 0.5 },
        "49": { normal: 0.1, reverseHolo: 0.5 },
        "50": { normal: 0.15, reverseHolo: 0.5 },
        "51": { normal: 0.1, reverseHolo: 0.5 },
        "52": { normal: 0.15, reverseHolo: 0.5 },
        "53": { normal: 0.75, reverseHolo: 1.5 },
        "54": { normal: 0.15, reverseHolo: 0.5 },
        "55": { normal: 0.1, reverseHolo: 0.5 },
        "56": { normal: 0.1, reverseHolo: 0.5 },
        "57": { normal: 0.1, reverseHolo: 0.5 },
        "58": { normal: 0.15, reverseHolo: 0.5 },
        "59": { normal: 0.1, reverseHolo: 0.5 },
        "60": { normal: 0.15, reverseHolo: 0.5 },
        "61": 6,
        "62": { normal: 0.15, reverseHolo: 0.5 },
        "63": { normal: 0.75, reverseHolo: 1.5 },
        "64": 6,
        "65": { normal: 0.75, reverseHolo: 1.5 },
        "66": { normal: 0.1, reverseHolo: 0.5 },
        "67": { normal: 0.1, reverseHolo: 0.5 },
        "68": 6,
        "69": { normal: 0.1, reverseHolo: 0.5 },
        "70": { normal: 0.1, reverseHolo: 0.5 },
        "71": { normal: 0.1, reverseHolo: 0.5 },
        "72": { normal: 0.15, reverseHolo: 0.5 },
        "73": { normal: 0.1, reverseHolo: 0.5 },
        "74": { normal: 0.15, reverseHolo: 0.5 },
        "75": { normal: 0.1, reverseHolo: 0.5 },
        "76": { normal: 0.15, reverseHolo: 0.5 },
        "77": 6,
        "78": { normal: 0.1, reverseHolo: 0.5 },
        "79": { normal: 0.15, reverseHolo: 0.5 },
        "80": { normal: 0.1, reverseHolo: 0.5 },
        "81": { normal: 0.1, reverseHolo: 0.5 },
        "82": { normal: 0.75, reverseHolo: 1.5 },
        "83": { normal: 0.1, reverseHolo: 0.5 },
        "84": { normal: 0.15, reverseHolo: 0.5 },
        "85": { normal: 0.1, reverseHolo: 0.5 },
        "86": { normal: 0.1, reverseHolo: 0.5 },
        "87": { normal: 0.1, reverseHolo: 0.5 },
        "88": { normal: 0.15, reverseHolo: 0.5 },
        "89": { normal: 0.1, reverseHolo: 0.5 },
        "90": { normal: 0.15, reverseHolo: 0.5 },
        "91": { normal: 0.1, reverseHolo: 0.5 },
        "92": { normal: 0.1, reverseHolo: 0.5 },
        "93": { normal: 0.75, reverseHolo: 1.5 },
        "94": 6,
        "95": { normal: 0.75, reverseHolo: 1.5 },
        "96": { normal: 0.75, reverseHolo: 1.5 },
        "97": { normal: 0.1, reverseHolo: 0.5 },
        "98": { normal: 0.15, reverseHolo: 0.5 },
        "99": { normal: 0.1, reverseHolo: 0.5 },
        "100": { normal: 0.75, reverseHolo: 1.5 },
        "101": { normal: 0.1, reverseHolo: 0.5 },
        "102": { normal: 0.15, reverseHolo: 0.5 },
        "103": { normal: 0.1, reverseHolo: 0.5 },
        "104": { normal: 0.1, reverseHolo: 0.5 },
        "105": { normal: 0.15, reverseHolo: 0.5 },
        "106": 6,
        "107": { normal: 0.1, reverseHolo: 0.5 },
        "108": { normal: 0.1, reverseHolo: 0.5 },
        "109": { normal: 0.15, reverseHolo: 0.5 },
        "110": { normal: 0.75, reverseHolo: 1.5 },
        "111": { normal: 0.75, reverseHolo: 1.5 },
        "112": 6,
        "113": { normal: 0.1, reverseHolo: 0.5 },
        "114": { normal: 0.15, reverseHolo: 0.5 },
        "115": { normal: 0.1, reverseHolo: 0.5 },
        "116": { normal: 0.1, reverseHolo: 0.5 },
        "117": { normal: 0.15, reverseHolo: 0.5 },
        "118": { normal: 0.15, reverseHolo: 0.5 },
        "119": { normal: 0.1, reverseHolo: 0.5 },
        "120": { normal: 0.1, reverseHolo: 0.5 },
        "121": { normal: 0.1, reverseHolo: 0.5 },
        "122": { normal: 0.15, reverseHolo: 0.5 },
        "123": { normal: 0.75, reverseHolo: 1.5 },
        "124": { normal: 0.1, reverseHolo: 0.5 },
        "125": { normal: 0.15, reverseHolo: 0.5 },
        "126": { normal: 0.1, reverseHolo: 0.5 },
        "127": { normal: 0.15, reverseHolo: 0.5 },
        "128": { normal: 0.1, reverseHolo: 0.5 },
        "129": { normal: 0.1, reverseHolo: 0.5 },
        "130": 6,
        "131": { normal: 0.15, reverseHolo: 0.5 },
        "132": { normal: 0.1, reverseHolo: 0.5 },
        "133": { normal: 0.1, reverseHolo: 0.5 },
        "134": 6,
        "135": { normal: 0.1, reverseHolo: 0.5 },
        "136": { normal: 0.15, reverseHolo: 0.5 },
        "137": { normal: 0.1, reverseHolo: 0.5 },
        "138": { normal: 0.15, reverseHolo: 0.5 },
        "139": { normal: 0.1, reverseHolo: 0.5 },
        "140": { normal: 0.15, reverseHolo: 0.5 },
        "141": 6,
        "142": { normal: 0.15, reverseHolo: 0.5 },
        "143": { normal: 0.15, reverseHolo: 0.5 },
        "144": { normal: 0.1, reverseHolo: 0.5 },
        "145": { normal: 0.15, reverseHolo: 0.5 },
        "146": { normal: 0.15, reverseHolo: 0.5 },
        "147": { normal: 0.15, reverseHolo: 0.5 },
        "148": { normal: 0.15, reverseHolo: 0.5 },
        "149": { normal: 0.15, reverseHolo: 0.5 },
        "150": { normal: 0.15, reverseHolo: 0.5 },
        "151": { normal: 0.15, reverseHolo: 0.5 },
        "152": 12,
        "153": { normal: 0.15, reverseHolo: 0.5 },
        "154": { normal: 0.15, reverseHolo: 0.5 },
        "155": { normal: 0.15, reverseHolo: 0.5 },
        "156": { normal: 0.15, reverseHolo: 0.5 },
        "157": { normal: 0.15, reverseHolo: 0.5 },
        "158": { normal: 0.15, reverseHolo: 0.5 },
        "159": { normal: 0.15, reverseHolo: 0.5 },
        "160": { normal: 0.15, reverseHolo: 0.5 },
        "161": { normal: 0.15, reverseHolo: 0.5 },
        "162": 12,
        "163": 12,
        "164": 12,
        "165": 12,
        "166": { normal: 0.15, reverseHolo: 0.5 },
        "167": 12,
        "168": 7.00, // (Illustration Rare)
        "169": 8.00, // (Illustration Rare)
        "170": 6.50, // (Illustration Rare)
        "171": 9.00, // (Illustration Rare)
        "172": 7.50, // (Illustration Rare)
        "173": 8.50, // (Illustration Rare)
        "174": 7.00, // (Illustration Rare)
        "175": 9.50, // (Illustration Rare)
        "176": 8.00, // (Illustration Rare)
        "177": 7.00, // (Illustration Rare)
        "178": 10.00, // (Illustration Rare)
        "179": 8.50, // (Illustration Rare)
        "180": 7.50, // (Illustration Rare)
        "181": 9.00, // (Illustration Rare)
        "182": 8.00, // (Illustration Rare)
        "183": 11.00, // (Illustration Rare)
        "184": 7.00, // (Illustration Rare)
        "185": 9.00, // (Illustration Rare)
        "186": 24.00, // Tatsugiri (Illustration Rare)
        "187": 25.00, // Chansey (Illustration Rare)
        "188": 60.00, // Eevee (Illustration Rare)
        "189": 10.00, // (Ultra Rare)
        "190": 12.00, // (Ultra Rare)
        "191": 11.00, // (Ultra Rare)
        "192": 13.00, // (Ultra Rare)
        "193": 10.50, // (Ultra Rare)
        "194": 14.00, // (Ultra Rare)
        "195": 11.50, // (Ultra Rare)
        "196": 12.50, // (Ultra Rare)
        "197": 10.00, // (Ultra Rare)
        "198": 13.50, // (Ultra Rare)
        "199": 11.00, // (Ultra Rare)
        "200": 12.00, // (Ultra Rare)
        "201": 10.50, // (Ultra Rare)
        "202": 14.00, // (Ultra Rare)
        "203": 11.50, // (Ultra Rare)
        "204": 13.00, // (Ultra Rare)
        "205": 10.00, // (Ultra Rare)
        "206": 12.00, // (Ultra Rare)
        "207": 11.00, // (Ultra Rare)
        "208": 13.50, // (Ultra Rare)
        "209": 12.00, // (Ultra Rare)
        "210": 18.00, // (Special Illustration Rare)
        "211": 20.00, // (Special Illustration Rare)
        "212": 22.00, // (Special Illustration Rare)
        "213": 25.00, // (Special Illustration Rare)
        "214": 333.00, // Greninja ex (Special Illustration Rare)
        "215": 28.00, // (Special Illustration Rare)
        "216": 32.00, // (Special Illustration Rare)
        "217": 79.00, // Carmine (Special Illustration Rare)
        "218": 24.00, // (Special Illustration Rare)
        "219": 26.00, // (Special Illustration Rare)
        "220": 84.00, // Perrin (Special Illustration Rare)
        "221": 30.00, // (Hyper Rare)
        "222": 35.00, // (Hyper Rare)
        "223": 28.00, // (Hyper Rare)
        "224": 32.00, // (Hyper Rare)
        "225": 26.00, // (Hyper Rare)
        "226": 34.00 // (Hyper Rare)
    },

    "shrouded-fable": {
        "1": { normal: 0.1, reverseHolo: 0.5 },
        "2": { normal: 0.15, reverseHolo: 0.5 },
        "3": { normal: 0.1, reverseHolo: 0.5 },
        "4": { normal: 0.1, reverseHolo: 0.5 },
        "5": { normal: 0.15, reverseHolo: 0.5 },
        "6": { normal: 0.75, reverseHolo: 1.5 },
        "7": { normal: 0.1, reverseHolo: 0.5 },
        "8": { normal: 0.1, reverseHolo: 0.5 },
        "9": { normal: 0.15, reverseHolo: 0.5 },
        "10": { normal: 0.1, reverseHolo: 0.5 },
        "11": { normal: 0.1, reverseHolo: 0.5 },
        "12": 6,
        "13": { normal: 0.1, reverseHolo: 0.5 },
        "14": { normal: 0.15, reverseHolo: 0.5 },
        "15": 6,
        "16": { normal: 0.1, reverseHolo: 0.5 },
        "17": { normal: 0.15, reverseHolo: 0.5 },
        "18": { normal: 0.1, reverseHolo: 0.5 },
        "19": { normal: 0.1, reverseHolo: 0.5 },
        "20": { normal: 0.75, reverseHolo: 1.5 },
        "21": { normal: 0.75, reverseHolo: 1.5 },
        "22": { normal: 0.15, reverseHolo: 0.5 },
        "23": { normal: 0.1, reverseHolo: 0.5 },
        "24": { normal: 0.1, reverseHolo: 0.5 },
        "25": { normal: 0.75, reverseHolo: 1.5 },
        "26": { normal: 0.15, reverseHolo: 0.5 },
        "27": { normal: 0.1, reverseHolo: 0.5 },
        "28": { normal: 0.1, reverseHolo: 0.5 },
        "29": { normal: 0.15, reverseHolo: 0.5 },
        "30": { normal: 0.1, reverseHolo: 0.5 },
        "31": { normal: 0.1, reverseHolo: 0.5 },
        "32": { normal: 0.75, reverseHolo: 1.5 },
        "33": { normal: 0.1, reverseHolo: 0.5 },
        "34": { normal: 0.15, reverseHolo: 0.5 },
        "35": { normal: 0.15, reverseHolo: 0.5 },
        "36": 6,
        "37": 6,
        "38": 6,
        "39": 6,
        "40": { normal: 0.15, reverseHolo: 0.5 },
        "41": { normal: 0.1, reverseHolo: 0.5 },
        "42": { normal: 0.75, reverseHolo: 1.5 },
        "43": { normal: 0.1, reverseHolo: 0.5 },
        "44": { normal: 0.1, reverseHolo: 0.5 },
        "45": { normal: 0.1, reverseHolo: 0.5 },
        "46": { normal: 0.75, reverseHolo: 1.5 },
        "47": { normal: 0.15, reverseHolo: 0.5 },
        "48": { normal: 0.1, reverseHolo: 0.5 },
        "49": { normal: 0.1, reverseHolo: 0.5 },
        "50": { normal: 0.1, reverseHolo: 0.5 },
        "51": { normal: 0.1, reverseHolo: 0.5 },
        "52": { normal: 0.1, reverseHolo: 0.5 },
        "53": { normal: 0.1, reverseHolo: 0.5 },
        "54": { normal: 0.15, reverseHolo: 0.5 },
        "55": { normal: 0.15, reverseHolo: 0.5 },
        "56": { normal: 0.15, reverseHolo: 0.5 },
        "57": { normal: 0.15, reverseHolo: 0.5 },
        "58": 12,
        "59": { normal: 0.15, reverseHolo: 0.5 },
        "60": 12,
        "61": { normal: 0.15, reverseHolo: 0.5 },
        "62": 12,
        "63": { normal: 0.15, reverseHolo: 0.5 },
        "64": { normal: 0.15, reverseHolo: 0.5 },
        "65": 7.00, // (Illustration Rare)
        "66": 8.00, // (Illustration Rare)
        "67": 7.50, // (Illustration Rare)
        "68": 9.00, // (Illustration Rare)
        "69": 8.00, // (Illustration Rare)
        "70": 7.00, // (Illustration Rare)
        "71": 8.50, // (Illustration Rare)
        "72": 20.00, // Munkidori (Illustration Rare)
        "73": 6.50, // Fezandipiti (Illustration Rare)
        "74": 7.50, // (Illustration Rare)
        "75": 8.00, // (Illustration Rare)
        "76": 7.00, // (Illustration Rare)
        "77": 9.00, // (Illustration Rare)
        "78": 8.00, // (Illustration Rare)
        "79": 7.50, // (Illustration Rare)
        "80": 10.00, // (Ultra Rare)
        "81": 11.00, // (Ultra Rare)
        "82": 12.00, // (Ultra Rare)
        "83": 10.50, // (Ultra Rare)
        "84": 13.00, // (Ultra Rare)
        "85": 11.50, // (Ultra Rare)
        "86": 12.00, // (Ultra Rare)
        "87": 10.00, // (Ultra Rare)
        "88": 11.00, // (Ultra Rare)
        "89": 12.50, // (Ultra Rare)
        "90": 21.00, // Okidogi ex (Special Illustration Rare)
        "91": 16.00, // Munkidori ex (Special Illustration Rare)
        "92": 52.00, // Fezandipiti ex (Special Illustration Rare)
        "93": 16.00, // Pecharunt ex (Special Illustration Rare)
        "94": 25.00, // Cassiopeia (Special Illustration Rare)
        "95": 22.00, // (Hyper Rare)
        "96": 26.00, // (Hyper Rare)
        "97": 24.00, // (Hyper Rare)
        "98": 28.00, // (Hyper Rare)
        "99": 25.00 // (Hyper Rare)
    },

    "stellar-crown": {
        "1": 6,
        "2": { normal: 0.1, reverseHolo: 0.5 },
        "3": { normal: 0.75, reverseHolo: 1.5 },
        "4": { normal: 0.15, reverseHolo: 0.5 },
        "5": { normal: 0.1, reverseHolo: 0.5 },
        "6": { normal: 0.75, reverseHolo: 1.5 },
        "7": { normal: 0.1, reverseHolo: 0.5 },
        "8": { normal: 0.1, reverseHolo: 0.5 },
        "9": { normal: 0.1, reverseHolo: 0.5 },
        "10": { normal: 0.1, reverseHolo: 0.5 },
        "11": { normal: 0.15, reverseHolo: 0.5 },
        "12": { normal: 0.1, reverseHolo: 0.5 },
        "13": { normal: 0.1, reverseHolo: 0.5 },
        "14": 6,
        "15": { normal: 0.1, reverseHolo: 0.5 },
        "16": { normal: 0.1, reverseHolo: 0.5 },
        "17": { normal: 0.1, reverseHolo: 0.5 },
        "18": { normal: 0.15, reverseHolo: 0.5 },
        "19": { normal: 0.1, reverseHolo: 0.5 },
        "20": { normal: 0.15, reverseHolo: 0.5 },
        "21": { normal: 0.1, reverseHolo: 0.5 },
        "22": { normal: 0.15, reverseHolo: 0.5 },
        "23": { normal: 0.1, reverseHolo: 0.5 },
        "24": { normal: 0.15, reverseHolo: 0.5 },
        "25": { normal: 0.1, reverseHolo: 0.5 },
        "26": { normal: 0.1, reverseHolo: 0.5 },
        "27": { normal: 0.1, reverseHolo: 0.5 },
        "28": 6,
        "29": { normal: 0.1, reverseHolo: 0.5 },
        "30": 6,
        "31": { normal: 0.15, reverseHolo: 0.5 },
        "32": 6,
        "33": { normal: 0.1, reverseHolo: 0.5 },
        "34": { normal: 0.15, reverseHolo: 0.5 },
        "35": { normal: 0.1, reverseHolo: 0.5 },
        "36": { normal: 0.15, reverseHolo: 0.5 },
        "37": { normal: 0.1, reverseHolo: 0.5 },
        "38": { normal: 0.75, reverseHolo: 1.5 },
        "39": { normal: 0.1, reverseHolo: 0.5 },
        "40": { normal: 0.15, reverseHolo: 0.5 },
        "41": 6,
        "42": { normal: 0.15, reverseHolo: 0.5 },
        "43": { normal: 0.1, reverseHolo: 0.5 },
        "44": { normal: 0.75, reverseHolo: 1.5 },
        "45": { normal: 0.15, reverseHolo: 0.5 },
        "46": { normal: 0.1, reverseHolo: 0.5 },
        "47": { normal: 0.15, reverseHolo: 0.5 },
        "48": { normal: 0.1, reverseHolo: 0.5 },
        "49": { normal: 0.15, reverseHolo: 0.5 },
        "50": { normal: 0.1, reverseHolo: 0.5 },
        "51": 6,
        "52": { normal: 0.1, reverseHolo: 0.5 },
        "53": { normal: 0.15, reverseHolo: 0.5 },
        "54": { normal: 0.15, reverseHolo: 0.5 },
        "55": { normal: 0.75, reverseHolo: 1.5 },
        "56": { normal: 0.1, reverseHolo: 0.5 },
        "57": { normal: 0.1, reverseHolo: 0.5 },
        "58": { normal: 0.15, reverseHolo: 0.5 },
        "59": { normal: 0.15, reverseHolo: 0.5 },
        "60": { normal: 0.1, reverseHolo: 0.5 },
        "61": { normal: 0.15, reverseHolo: 0.5 },
        "62": { normal: 0.1, reverseHolo: 0.5 },
        "63": { normal: 0.1, reverseHolo: 0.5 },
        "64": { normal: 0.1, reverseHolo: 0.5 },
        "65": { normal: 0.75, reverseHolo: 1.5 },
        "66": { normal: 0.1, reverseHolo: 0.5 },
        "67": 6,
        "68": { normal: 0.1, reverseHolo: 0.5 },
        "69": { normal: 0.1, reverseHolo: 0.5 },
        "70": { normal: 0.1, reverseHolo: 0.5 },
        "71": { normal: 0.75, reverseHolo: 1.5 },
        "72": { normal: 0.1, reverseHolo: 0.5 },
        "73": { normal: 0.15, reverseHolo: 0.5 },
        "74": { normal: 0.1, reverseHolo: 0.5 },
        "75": { normal: 0.1, reverseHolo: 0.5 },
        "76": { normal: 0.75, reverseHolo: 1.5 },
        "77": { normal: 0.1, reverseHolo: 0.5 },
        "78": { normal: 0.1, reverseHolo: 0.5 },
        "79": { normal: 0.1, reverseHolo: 0.5 },
        "80": 6,
        "81": { normal: 0.1, reverseHolo: 0.5 },
        "82": 6,
        "83": { normal: 0.1, reverseHolo: 0.5 },
        "84": { normal: 0.15, reverseHolo: 0.5 },
        "85": { normal: 0.1, reverseHolo: 0.5 },
        "86": { normal: 0.15, reverseHolo: 0.5 },
        "87": { normal: 0.1, reverseHolo: 0.5 },
        "88": { normal: 0.1, reverseHolo: 0.5 },
        "89": 6,
        "90": { normal: 0.15, reverseHolo: 0.5 },
        "91": { normal: 0.1, reverseHolo: 0.5 },
        "92": { normal: 0.15, reverseHolo: 0.5 },
        "93": { normal: 0.15, reverseHolo: 0.5 },
        "94": { normal: 0.1, reverseHolo: 0.5 },
        "95": { normal: 0.1, reverseHolo: 0.5 },
        "96": { normal: 0.75, reverseHolo: 1.5 },
        "97": { normal: 0.1, reverseHolo: 0.5 },
        "98": { normal: 0.15, reverseHolo: 0.5 },
        "99": { normal: 0.1, reverseHolo: 0.5 },
        "100": { normal: 0.1, reverseHolo: 0.5 },
        "101": { normal: 0.75, reverseHolo: 1.5 },
        "102": { normal: 0.1, reverseHolo: 0.5 },
        "103": { normal: 0.1, reverseHolo: 0.5 },
        "104": { normal: 0.75, reverseHolo: 1.5 },
        "105": 6,
        "106": { normal: 0.1, reverseHolo: 0.5 },
        "107": { normal: 0.75, reverseHolo: 1.5 },
        "108": { normal: 0.1, reverseHolo: 0.5 },
        "109": { normal: 0.15, reverseHolo: 0.5 },
        "110": 6,
        "111": { normal: 0.75, reverseHolo: 1.5 },
        "112": { normal: 0.1, reverseHolo: 0.5 },
        "113": { normal: 0.1, reverseHolo: 0.5 },
        "114": { normal: 0.1, reverseHolo: 0.5 },
        "115": { normal: 0.75, reverseHolo: 1.5 },
        "116": { normal: 0.1, reverseHolo: 0.5 },
        "117": { normal: 0.1, reverseHolo: 0.5 },
        "118": { normal: 0.1, reverseHolo: 0.5 },
        "119": { normal: 0.75, reverseHolo: 1.5 },
        "120": { normal: 0.15, reverseHolo: 0.5 },
        "121": { normal: 0.1, reverseHolo: 0.5 },
        "122": { normal: 0.1, reverseHolo: 0.5 },
        "123": { normal: 0.15, reverseHolo: 0.5 },
        "124": { normal: 0.1, reverseHolo: 0.5 },
        "125": { normal: 0.15, reverseHolo: 0.5 },
        "126": { normal: 0.1, reverseHolo: 0.5 },
        "127": { normal: 0.1, reverseHolo: 0.5 },
        "128": 6,
        "129": { normal: 0.1, reverseHolo: 0.5 },
        "130": { normal: 0.1, reverseHolo: 0.5 },
        "131": { normal: 0.15, reverseHolo: 0.5 },
        "132": { normal: 0.15, reverseHolo: 0.5 },
        "133": { normal: 0.15, reverseHolo: 0.5 },
        "134": 12,
        "135": { normal: 0.15, reverseHolo: 0.5 },
        "136": 12,
        "137": { normal: 0.15, reverseHolo: 0.5 },
        "138": { normal: 0.15, reverseHolo: 0.5 },
        "139": { normal: 0.15, reverseHolo: 0.5 },
        "140": { normal: 0.15, reverseHolo: 0.5 },
        "141": { normal: 0.15, reverseHolo: 0.5 },
        "142": 12,
        "143": 53.00, // Bulbasaur (Illustration Rare)
        "144": 8.00, // (Illustration Rare)
        "145": 7.50, // (Illustration Rare)
        "146": 9.00, // (Illustration Rare)
        "147": 8.00, // (Illustration Rare)
        "148": 55.00, // Squirtle (Illustration Rare)
        "149": 7.00, // (Illustration Rare)
        "150": 8.50, // (Illustration Rare)
        "151": 7.50, // (Illustration Rare)
        "152": 9.00, // (Illustration Rare)
        "153": 8.00, // (Illustration Rare)
        "154": 7.00, // (Illustration Rare)
        "155": 8.50, // (Illustration Rare)
        "156": 10.00, // (Ultra Rare)
        "157": 11.50, // (Ultra Rare)
        "158": 12.00, // (Ultra Rare)
        "159": 10.50, // (Ultra Rare)
        "160": 13.00, // (Ultra Rare)
        "161": 11.00, // (Ultra Rare)
        "162": 12.50, // (Ultra Rare)
        "163": 10.00, // (Ultra Rare)
        "164": 11.50, // (Ultra Rare)
        "165": 12.00, // (Ultra Rare)
        "166": 13.50, // (Ultra Rare)
        "167": 18.00, // (Special Illustration Rare)
        "168": 22.00, // (Special Illustration Rare)
        "169": 20.00, // (Special Illustration Rare)
        "170": 95.00, // Terapagos ex (Special Illustration Rare)
        "171": 24.00, // (Special Illustration Rare)
        "172": 45.00, // Lacey (Special Illustration Rare)
        "173": 28.00, // (Hyper Rare)
        "174": 30.00, // (Hyper Rare)
        "175": 26.00 // (Hyper Rare)
    },

    "surging-sparks": {
        "1": { normal: 0.1, reverseHolo: 0.5 },
        "2": { normal: 0.1, reverseHolo: 0.5 },
        "3": { normal: 0.15, reverseHolo: 0.5 },
        "4": 6,
        "5": { normal: 0.1, reverseHolo: 0.5 },
        "6": { normal: 0.1, reverseHolo: 0.5 },
        "7": { normal: 0.15, reverseHolo: 0.5 },
        "8": { normal: 0.1, reverseHolo: 0.5 },
        "9": { normal: 0.15, reverseHolo: 0.5 },
        "10": { normal: 0.1, reverseHolo: 0.5 },
        "11": { normal: 0.75, reverseHolo: 1.5 },
        "12": { normal: 0.1, reverseHolo: 0.5 },
        "13": { normal: 0.1, reverseHolo: 0.5 },
        "14": { normal: 0.75, reverseHolo: 1.5 },
        "15": { normal: 0.15, reverseHolo: 0.5 },
        "16": { normal: 0.1, reverseHolo: 0.5 },
        "17": { normal: 0.15, reverseHolo: 0.5 },
        "18": { normal: 0.15, reverseHolo: 0.5 },
        "19": { normal: 0.15, reverseHolo: 0.5 },
        "20": { normal: 0.1, reverseHolo: 0.5 },
        "21": { normal: 0.15, reverseHolo: 0.5 },
        "22": { normal: 0.1, reverseHolo: 0.5 },
        "23": { normal: 0.1, reverseHolo: 0.5 },
        "24": { normal: 0.1, reverseHolo: 0.5 },
        "25": { normal: 0.1, reverseHolo: 0.5 },
        "26": { normal: 0.1, reverseHolo: 0.5 },
        "27": { normal: 0.1, reverseHolo: 0.5 },
        "28": { normal: 0.1, reverseHolo: 0.5 },
        "29": { normal: 0.1, reverseHolo: 0.5 },
        "30": { normal: 0.1, reverseHolo: 0.5 },
        "31": { normal: 0.75, reverseHolo: 1.5 },
        "32": { normal: 0.1, reverseHolo: 0.5 },
        "33": { normal: 0.1, reverseHolo: 0.5 },
        "34": { normal: 0.15, reverseHolo: 0.5 },
        "35": { normal: 0.15, reverseHolo: 0.5 },
        "36": 6,
        "37": 6,
        "38": { normal: 0.75, reverseHolo: 1.5 },
        "39": { normal: 0.15, reverseHolo: 0.5 },
        "40": { normal: 0.1, reverseHolo: 0.5 },
        "41": { normal: 0.1, reverseHolo: 0.5 },
        "42": 6,
        "43": { normal: 0.1, reverseHolo: 0.5 },
        "44": { normal: 0.1, reverseHolo: 0.5 },
        "45": { normal: 0.15, reverseHolo: 0.5 },
        "46": { normal: 0.1, reverseHolo: 0.5 },
        "47": { normal: 0.1, reverseHolo: 0.5 },
        "48": 6,
        "49": { normal: 0.15, reverseHolo: 0.5 },
        "50": { normal: 0.1, reverseHolo: 0.5 },
        "51": { normal: 0.1, reverseHolo: 0.5 },
        "52": { normal: 0.15, reverseHolo: 0.5 },
        "53": { normal: 0.1, reverseHolo: 0.5 },
        "54": { normal: 0.1, reverseHolo: 0.5 },
        "55": { normal: 0.15, reverseHolo: 0.5 },
        "56": { normal: 0.75, reverseHolo: 1.5 },
        "57": 6,
        "58": { normal: 0.1, reverseHolo: 0.5 },
        "59": { normal: 0.15, reverseHolo: 0.5 },
        "60": { normal: 0.15, reverseHolo: 0.5 },
        "61": { normal: 0.1, reverseHolo: 0.5 },
        "62": { normal: 0.1, reverseHolo: 0.5 },
        "63": { normal: 0.1, reverseHolo: 0.5 },
        "64": { normal: 0.1, reverseHolo: 0.5 },
        "65": { normal: 0.75, reverseHolo: 1.5 },
        "66": { normal: 0.1, reverseHolo: 0.5 },
        "67": { normal: 0.15, reverseHolo: 0.5 },
        "68": 6,
        "69": { normal: 0.15, reverseHolo: 0.5 },
        "70": { normal: 0.1, reverseHolo: 0.5 },
        "71": { normal: 0.1, reverseHolo: 0.5 },
        "72": { normal: 0.75, reverseHolo: 1.5 },
        "73": { normal: 0.1, reverseHolo: 0.5 },
        "74": { normal: 0.15, reverseHolo: 0.5 },
        "75": { normal: 0.1, reverseHolo: 0.5 },
        "76": 6,
        "77": { normal: 0.15, reverseHolo: 0.5 },
        "78": { normal: 0.1, reverseHolo: 0.5 },
        "79": { normal: 0.1, reverseHolo: 0.5 },
        "80": { normal: 0.1, reverseHolo: 0.5 },
        "81": { normal: 0.1, reverseHolo: 0.5 },
        "82": { normal: 0.1, reverseHolo: 0.5 },
        "83": { normal: 0.75, reverseHolo: 1.5 },
        "84": { normal: 0.1, reverseHolo: 0.5 },
        "85": { normal: 0.15, reverseHolo: 0.5 },
        "86": 6,
        "87": { normal: 0.1, reverseHolo: 0.5 },
        "88": { normal: 0.15, reverseHolo: 0.5 },
        "89": { normal: 0.1, reverseHolo: 0.5 },
        "90": { normal: 0.1, reverseHolo: 0.5 },
        "91": 6,
        "92": { normal: 0.75, reverseHolo: 1.5 },
        "93": { normal: 0.15, reverseHolo: 0.5 },
        "94": { normal: 0.1, reverseHolo: 0.5 },
        "95": { normal: 0.15, reverseHolo: 0.5 },
        "96": { normal: 0.15, reverseHolo: 0.5 },
        "97": { normal: 0.1, reverseHolo: 0.5 },
        "98": { normal: 0.1, reverseHolo: 0.5 },
        "99": { normal: 0.1, reverseHolo: 0.5 },
        "100": { normal: 0.15, reverseHolo: 0.5 },
        "101": { normal: 0.15, reverseHolo: 0.5 },
        "102": { normal: 0.1, reverseHolo: 0.5 },
        "103": { normal: 0.1, reverseHolo: 0.5 },
        "104": { normal: 0.1, reverseHolo: 0.5 },
        "105": { normal: 0.1, reverseHolo: 0.5 },
        "106": 6,
        "107": { normal: 0.75, reverseHolo: 1.5 },
        "108": { normal: 0.1, reverseHolo: 0.5 },
        "109": { normal: 0.1, reverseHolo: 0.5 },
        "110": { normal: 0.75, reverseHolo: 1.5 },
        "111": { normal: 0.15, reverseHolo: 0.5 },
        "112": { normal: 0.1, reverseHolo: 0.5 },
        "113": { normal: 0.1, reverseHolo: 0.5 },
        "114": { normal: 0.1, reverseHolo: 0.5 },
        "115": { normal: 0.1, reverseHolo: 0.5 },
        "116": { normal: 0.15, reverseHolo: 0.5 },
        "117": { normal: 0.1, reverseHolo: 0.5 },
        "118": { normal: 0.1, reverseHolo: 0.5 },
        "119": 6,
        "120": { normal: 0.1, reverseHolo: 0.5 },
        "121": { normal: 0.15, reverseHolo: 0.5 },
        "122": { normal: 0.1, reverseHolo: 0.5 },
        "123": { normal: 0.15, reverseHolo: 0.5 },
        "124": { normal: 0.1, reverseHolo: 0.5 },
        "125": { normal: 0.15, reverseHolo: 0.5 },
        "126": { normal: 0.1, reverseHolo: 0.5 },
        "127": { normal: 0.1, reverseHolo: 0.5 },
        "128": { normal: 0.1, reverseHolo: 0.5 },
        "129": { normal: 0.1, reverseHolo: 0.5 },
        "130": 6,
        "131": { normal: 0.15, reverseHolo: 0.5 },
        "132": { normal: 0.75, reverseHolo: 1.5 },
        "133": 6,
        "134": { normal: 0.15, reverseHolo: 0.5 },
        "135": { normal: 0.75, reverseHolo: 1.5 },
        "136": { normal: 0.75, reverseHolo: 1.5 },
        "137": { normal: 0.15, reverseHolo: 0.5 },
        "138": { normal: 0.1, reverseHolo: 0.5 },
        "139": { normal: 0.15, reverseHolo: 0.5 },
        "140": { normal: 0.15, reverseHolo: 0.5 },
        "141": { normal: 0.75, reverseHolo: 1.5 },
        "142": 6,
        "143": { normal: 0.1, reverseHolo: 0.5 },
        "144": { normal: 0.1, reverseHolo: 0.5 },
        "145": { normal: 0.1, reverseHolo: 0.5 },
        "146": { normal: 0.1, reverseHolo: 0.5 },
        "147": 6,
        "148": { normal: 0.1, reverseHolo: 0.5 },
        "149": { normal: 0.1, reverseHolo: 0.5 },
        "150": { normal: 0.1, reverseHolo: 0.5 },
        "151": { normal: 0.1, reverseHolo: 0.5 },
        "152": { normal: 0.1, reverseHolo: 0.5 },
        "153": { normal: 0.15, reverseHolo: 0.5 },
        "154": { normal: 0.1, reverseHolo: 0.5 },
        "155": { normal: 0.1, reverseHolo: 0.5 },
        "156": { normal: 0.1, reverseHolo: 0.5 },
        "157": { normal: 0.1, reverseHolo: 0.5 },
        "158": { normal: 0.15, reverseHolo: 0.5 },
        "159": 6,
        "160": 6,
        "161": { normal: 0.75, reverseHolo: 1.5 },
        "162": 12,
        "163": { normal: 0.15, reverseHolo: 0.5 },
        "164": 12,
        "165": { normal: 0.15, reverseHolo: 0.5 },
        "166": { normal: 0.15, reverseHolo: 0.5 },
        "167": { normal: 0.15, reverseHolo: 0.5 },
        "168": { normal: 0.15, reverseHolo: 0.5 },
        "169": { normal: 0.15, reverseHolo: 0.5 },
        "170": { normal: 0.15, reverseHolo: 0.5 },
        "171": { normal: 0.15, reverseHolo: 0.5 },
        "172": { normal: 0.15, reverseHolo: 0.5 },
        "173": { normal: 0.1, reverseHolo: 0.5 },
        "174": { normal: 0.15, reverseHolo: 0.5 },
        "175": { normal: 0.15, reverseHolo: 0.5 },
        "176": 12,
        "177": { normal: 0.15, reverseHolo: 0.5 },
        "178": { normal: 0.15, reverseHolo: 0.5 },
        "179": { normal: 0.15, reverseHolo: 0.5 },
        "180": { normal: 0.15, reverseHolo: 0.5 },
        "181": { normal: 0.15, reverseHolo: 0.5 },
        "182": 12,
        "183": 12,
        "184": { normal: 0.15, reverseHolo: 0.5 },
        "185": 12,
        "186": 12,
        "187": { normal: 0.15, reverseHolo: 0.5 },
        "188": { normal: 0.15, reverseHolo: 0.5 },
        "189": { normal: 0.15, reverseHolo: 0.5 },
        "190": { normal: 0.15, reverseHolo: 0.5 },
        "191": 12,
        "192": 7.00, // (Illustration Rare)
        "193": 8.50, // (Illustration Rare)
        "194": 7.50, // (Illustration Rare)
        "195": 9.00, // (Illustration Rare)
        "196": 8.00, // (Illustration Rare)
        "197": 7.00, // (Illustration Rare)
        "198": 9.50, // (Illustration Rare)
        "199": 8.00, // (Illustration Rare)
        "200": 7.50, // (Illustration Rare)
        "201": 10.00, // (Illustration Rare)
        "202": 8.50, // (Illustration Rare)
        "203": 7.00, // (Illustration Rare)
        "204": 9.00, // (Illustration Rare)
        "205": 8.00, // (Illustration Rare)
        "206": 7.50, // (Illustration Rare)
        "207": 11.00, // (Illustration Rare)
        "208": 8.50, // (Illustration Rare)
        "209": 7.00, // (Illustration Rare)
        "210": 9.00, // (Illustration Rare)
        "211": 8.00, // (Illustration Rare)
        "212": 7.50, // (Illustration Rare)
        "213": 10.00, // (Illustration Rare)
        "214": 8.50, // (Illustration Rare)
        "215": 10.00, // (Ultra Rare)
        "216": 11.50, // (Ultra Rare)
        "217": 12.00, // (Ultra Rare)
        "218": 10.50, // (Ultra Rare)
        "219": 13.00, // (Ultra Rare)
        "220": 11.00, // (Ultra Rare)
        "221": 12.50, // (Ultra Rare)
        "222": 10.00, // (Ultra Rare)
        "223": 14.00, // (Ultra Rare)
        "224": 11.50, // (Ultra Rare)
        "225": 12.00, // (Ultra Rare)
        "226": 13.00, // (Ultra Rare)
        "227": 10.50, // (Ultra Rare)
        "228": 11.00, // (Ultra Rare)
        "229": 12.50, // (Ultra Rare)
        "230": 14.50, // (Ultra Rare)
        "231": 11.00, // (Ultra Rare)
        "232": 12.00, // (Ultra Rare)
        "233": 10.50, // (Ultra Rare)
        "234": 13.00, // (Ultra Rare)
        "235": 11.50, // (Ultra Rare)
        "236": 24.00, // (Special Illustration Rare)
        "237": 98.00, // Milotic ex (Special Illustration Rare)
        "238": 385.00, // Pikachu ex (Special Illustration Rare)
        "239": 185.00, // Latias ex (Special Illustration Rare)
        "240": 60.00, // Hydreigon ex (Special Illustration Rare)
        "241": 22.00, // (Special Illustration Rare)
        "242": 28.00, // (Special Illustration Rare)
        "243": 20.00, // (Special Illustration Rare)
        "244": 30.00, // (Special Illustration Rare)
        "245": 75.00, // Jasmine's Gaze (Special Illustration Rare)
        "246": 120.00, // Lisia's Appeal (Special Illustration Rare)
        "247": 32.00, // (Hyper Rare)
        "248": 28.00, // (Hyper Rare)
        "249": 35.00, // (Hyper Rare)
        "250": 30.00, // (Hyper Rare)
        "251": 26.00, // (Hyper Rare)
        "252": 33.00 // (Hyper Rare)
    },

    "prismatic-evolutions": {
        "1": { normal: 0.1, reverseHolo: 0.5 },
        "2": { normal: 0.15, reverseHolo: 0.5 },
        "3": { normal: 0.1, reverseHolo: 0.5 },
        "4": { normal: 0.1, reverseHolo: 0.5 },
        "5": { normal: 0.75, reverseHolo: 1.5 },
        "6": 6,
        "7": { normal: 0.1, reverseHolo: 0.5 },
        "8": { normal: 0.75, reverseHolo: 1.5 },
        "9": { normal: 0.1, reverseHolo: 0.5 },
        "10": { normal: 0.15, reverseHolo: 0.5 },
        "11": 6,
        "12": 6,
        "13": { normal: 0.75, reverseHolo: 1.5 },
        "14": 6,
        "15": { normal: 0.1, reverseHolo: 0.5 },
        "16": { normal: 0.15, reverseHolo: 0.5 },
        "17": 6,
        "18": { normal: 0.1, reverseHolo: 0.5 },
        "19": { normal: 0.15, reverseHolo: 0.5 },
        "20": { normal: 0.1, reverseHolo: 0.5 },
        "21": { normal: 0.15, reverseHolo: 0.5 },
        "22": { normal: 0.75, reverseHolo: 1.5 },
        "23": 6,
        "24": { normal: 0.15, reverseHolo: 0.5 },
        "25": { normal: 0.75, reverseHolo: 1.5 },
        "26": 6,
        "27": 6,
        "28": 6,
        "29": { normal: 0.75, reverseHolo: 1.5 },
        "30": 6,
        "31": 6,
        "32": 6,
        "33": { normal: 0.75, reverseHolo: 1.5 },
        "34": 6,
        "35": { normal: 0.1, reverseHolo: 0.5 },
        "36": { normal: 0.1, reverseHolo: 0.5 },
        "37": { normal: 0.75, reverseHolo: 1.5 },
        "38": { normal: 0.1, reverseHolo: 0.5 },
        "39": { normal: 0.1, reverseHolo: 0.5 },
        "40": { normal: 0.75, reverseHolo: 1.5 },
        "41": 6,
        "42": { normal: 0.15, reverseHolo: 0.5 },
        "43": { normal: 0.75, reverseHolo: 1.5 },
        "44": { normal: 0.75, reverseHolo: 1.5 },
        "45": { normal: 0.75, reverseHolo: 1.5 },
        "46": { normal: 0.75, reverseHolo: 1.5 },
        "47": { normal: 0.1, reverseHolo: 0.5 },
        "48": { normal: 0.1, reverseHolo: 0.5 },
        "49": { normal: 0.75, reverseHolo: 1.5 },
        "50": { normal: 0.1, reverseHolo: 0.5 },
        "51": 6,
        "52": { normal: 0.1, reverseHolo: 0.5 },
        "53": { normal: 0.1, reverseHolo: 0.5 },
        "54": { normal: 0.75, reverseHolo: 1.5 },
        "55": { normal: 0.15, reverseHolo: 0.5 },
        "56": 6,
        "57": { normal: 0.75, reverseHolo: 1.5 },
        "58": 6,
        "59": { normal: 0.75, reverseHolo: 1.5 },
        "60": 6,
        "61": { normal: 0.1, reverseHolo: 0.5 },
        "62": { normal: 0.1, reverseHolo: 0.5 },
        "63": { normal: 0.1, reverseHolo: 0.5 },
        "64": 6,
        "65": { normal: 0.75, reverseHolo: 1.5 },
        "66": { normal: 0.1, reverseHolo: 0.5 },
        "67": { normal: 0.15, reverseHolo: 0.5 },
        "68": { normal: 0.15, reverseHolo: 0.5 },
        "69": { normal: 0.1, reverseHolo: 0.5 },
        "70": { normal: 0.75, reverseHolo: 1.5 },
        "71": { normal: 0.1, reverseHolo: 0.5 },
        "72": { normal: 0.1, reverseHolo: 0.5 },
        "73": 6,
        "74": { normal: 0.1, reverseHolo: 0.5 },
        "75": 6,
        "76": 6,
        "77": { normal: 0.1, reverseHolo: 0.5 },
        "78": { normal: 0.75, reverseHolo: 1.5 },
        "79": { normal: 0.1, reverseHolo: 0.5 },
        "80": { normal: 0.75, reverseHolo: 1.5 },
        "81": { normal: 0.1, reverseHolo: 0.5 },
        "82": 6,
        "83": { normal: 0.1, reverseHolo: 0.5 },
        "84": { normal: 0.1, reverseHolo: 0.5 },
        "85": { normal: 0.1, reverseHolo: 0.5 },
        "86": { normal: 0.15, reverseHolo: 0.5 },
        "87": { normal: 0.15, reverseHolo: 0.5 },
        "88": { normal: 0.1, reverseHolo: 0.5 },
        "89": { normal: 0.15, reverseHolo: 0.5 },
        "90": { normal: 0.1, reverseHolo: 0.5 },
        "91": 6,
        "92": 6,
        "93": { normal: 0.1, reverseHolo: 0.5 },
        "94": { normal: 0.15, reverseHolo: 0.5 },
        "95": { normal: 0.15, reverseHolo: 0.5 },
        "96": { normal: 0.1, reverseHolo: 0.5 },
        "97": { normal: 0.1, reverseHolo: 0.5 },
        "98": { normal: 0.1, reverseHolo: 0.5 },
        "99": { normal: 0.1, reverseHolo: 0.5 },
        "100": { normal: 0.15, reverseHolo: 0.5 },
        "101": { normal: 0.15, reverseHolo: 0.5 },
        "102": { normal: 0.15, reverseHolo: 0.5 },
        "103": { normal: 0.15, reverseHolo: 0.5 },
        "104": { normal: 0.15, reverseHolo: 0.5 },
        "105": { normal: 0.15, reverseHolo: 0.5 },
        "106": { normal: 0.15, reverseHolo: 0.5 },
        "107": { normal: 0.15, reverseHolo: 0.5 },
        "108": { normal: 0.15, reverseHolo: 0.5 },
        "109": { normal: 0.1, reverseHolo: 0.5 },
        "110": { normal: 0.15, reverseHolo: 0.5 },
        "111": { normal: 0.1, reverseHolo: 0.5 },
        "112": { normal: 0.15, reverseHolo: 0.5 },
        "113": { normal: 0.15, reverseHolo: 0.5 },
        "114": { normal: 0.15, reverseHolo: 0.5 },
        "115": { normal: 0.1, reverseHolo: 0.5 },
        "116": 12,
        "117": 12,
        "118": { normal: 0.15, reverseHolo: 0.5 },
        "119": 12,
        "120": { normal: 0.15, reverseHolo: 0.5 },
        "121": { normal: 0.15, reverseHolo: 0.5 },
        "122": { normal: 0.1, reverseHolo: 0.5 },
        "123": { normal: 0.1, reverseHolo: 0.5 },
        "124": { normal: 0.1, reverseHolo: 0.5 },
        "125": { normal: 0.1, reverseHolo: 0.5 },
        "126": { normal: 0.15, reverseHolo: 0.5 },
        "127": { normal: 0.1, reverseHolo: 0.5 },
        "128": 12,
        "129": 12,
        "130": { normal: 0.15, reverseHolo: 0.5 },
        "131": 12,
        "132": 8.00, // (Ultra Rare)
        "133": 7.00, // (Ultra Rare)
        "134": 9.00, // (Ultra Rare)
        "135": 6.50, // (Ultra Rare)
        "136": 8.50, // (Ultra Rare)
        "137": 7.50, // (Ultra Rare)
        "138": 9.50, // (Ultra Rare)
        "139": 7.00, // (Ultra Rare)
        "140": 8.00, // (Ultra Rare)
        "141": 6.00, // (Ultra Rare)
        "142": 9.00, // (Ultra Rare)
        "143": 7.50, // (Ultra Rare)
        "144": 15.00, // (Special Illustration Rare)
        "145": 18.00, // (Special Illustration Rare)
        "146": 22.00, // (Special Illustration Rare)
        "147": 14.00, // (Special Illustration Rare)
        "148": 25.00, // (Special Illustration Rare)
        "149": 20.00, // (Special Illustration Rare)
        "150": 16.00, // (Special Illustration Rare)
        "151": 28.00, // (Special Illustration Rare)
        "152": 19.00, // (Special Illustration Rare)
        "153": 24.00, // (Special Illustration Rare)
        "154": 17.00, // (Special Illustration Rare)
        "155": 30.00, // (Special Illustration Rare)
        "156": 21.00, // (Special Illustration Rare)
        "157": 26.00, // (Special Illustration Rare)
        "158": 18.00, // (Special Illustration Rare)
        "159": 32.00, // (Special Illustration Rare)
        "160": 23.00, // (Special Illustration Rare)
        "161": 16.00, // (Special Illustration Rare)
        "162": 35.00, // (Special Illustration Rare)
        "163": 20.00, // (Special Illustration Rare)
        "164": 27.00, // (Special Illustration Rare)
        "165": 19.00, // (Special Illustration Rare)
        "166": 40.00, // (Special Illustration Rare)
        "167": 22.00, // (Special Illustration Rare)
        "168": 29.00, // (Special Illustration Rare)
        "169": 24.00, // (Special Illustration Rare)
        "170": 45.00, // (Special Illustration Rare)
        "171": 21.00, // (Special Illustration Rare)
        "172": 33.00, // (Special Illustration Rare)
        "173": 26.00, // (Special Illustration Rare)
        "174": 50.00, // (Special Illustration Rare)
        "175": 38.00, // (Special Illustration Rare)
        "176": 28.00, // (Hyper Rare)
        "177": 32.00, // (Hyper Rare)
        "178": 24.00, // (Hyper Rare)
        "179": 35.00, // (Hyper Rare)
        "180": 30.00 // (Hyper Rare)
    },

    "journey-together": {
        "1": { normal: 0.1, reverseHolo: 0.5 },
        "2": { normal: 0.1, reverseHolo: 0.5 },
        "3": { normal: 0.75, reverseHolo: 1.5 },
        "4": { normal: 0.1, reverseHolo: 0.5 },
        "5": { normal: 0.1, reverseHolo: 0.5 },
        "6": { normal: 0.1, reverseHolo: 0.5 },
        "7": { normal: 0.1, reverseHolo: 0.5 },
        "8": { normal: 0.15, reverseHolo: 0.5 },
        "9": { normal: 0.1, reverseHolo: 0.5 },
        "10": { normal: 0.1, reverseHolo: 0.5 },
        "11": 6,
        "12": { normal: 0.1, reverseHolo: 0.5 },
        "13": { normal: 0.15, reverseHolo: 0.5 },
        "14": { normal: 0.1, reverseHolo: 0.5 },
        "15": { normal: 0.15, reverseHolo: 0.5 },
        "16": { normal: 0.1, reverseHolo: 0.5 },
        "17": { normal: 0.1, reverseHolo: 0.5 },
        "18": { normal: 0.75, reverseHolo: 1.5 },
        "19": { normal: 0.1, reverseHolo: 0.5 },
        "20": { normal: 0.1, reverseHolo: 0.5 },
        "21": { normal: 0.75, reverseHolo: 1.5 },
        "22": { normal: 0.1, reverseHolo: 0.5 },
        "23": { normal: 0.15, reverseHolo: 0.5 },
        "24": 6,
        "25": { normal: 0.1, reverseHolo: 0.5 },
        "26": { normal: 0.1, reverseHolo: 0.5 },
        "27": { normal: 0.15, reverseHolo: 0.5 },
        "28": { normal: 0.1, reverseHolo: 0.5 },
        "29": { normal: 0.15, reverseHolo: 0.5 },
        "30": 6,
        "31": 6,
        "32": { normal: 0.15, reverseHolo: 0.5 },
        "33": { normal: 0.1, reverseHolo: 0.5 },
        "34": { normal: 0.15, reverseHolo: 0.5 },
        "35": { normal: 0.1, reverseHolo: 0.5 },
        "36": { normal: 0.1, reverseHolo: 0.5 },
        "37": { normal: 0.75, reverseHolo: 1.5 },
        "38": { normal: 0.1, reverseHolo: 0.5 },
        "39": { normal: 0.15, reverseHolo: 0.5 },
        "40": { normal: 0.1, reverseHolo: 0.5 },
        "41": { normal: 0.75, reverseHolo: 1.5 },
        "42": { normal: 0.15, reverseHolo: 0.5 },
        "43": 6,
        "44": { normal: 0.1, reverseHolo: 0.5 },
        "45": { normal: 0.1, reverseHolo: 0.5 },
        "46": { normal: 0.15, reverseHolo: 0.5 },
        "47": { normal: 0.1, reverseHolo: 0.5 },
        "48": { normal: 0.15, reverseHolo: 0.5 },
        "49": { normal: 0.1, reverseHolo: 0.5 },
        "50": { normal: 0.1, reverseHolo: 0.5 },
        "51": 6,
        "52": { normal: 0.1, reverseHolo: 0.5 },
        "53": 6,
        "54": { normal: 0.1, reverseHolo: 0.5 },
        "55": { normal: 0.75, reverseHolo: 1.5 },
        "56": 6,
        "57": { normal: 0.15, reverseHolo: 0.5 },
        "58": { normal: 0.1, reverseHolo: 0.5 },
        "59": { normal: 0.1, reverseHolo: 0.5 },
        "60": { normal: 0.15, reverseHolo: 0.5 },
        "61": { normal: 0.1, reverseHolo: 0.5 },
        "62": { normal: 0.1, reverseHolo: 0.5 },
        "63": { normal: 0.75, reverseHolo: 1.5 },
        "64": { normal: 0.1, reverseHolo: 0.5 },
        "65": { normal: 0.1, reverseHolo: 0.5 },
        "66": { normal: 0.1, reverseHolo: 0.5 },
        "67": { normal: 0.75, reverseHolo: 1.5 },
        "68": { normal: 0.1, reverseHolo: 0.5 },
        "69": 6,
        "70": { normal: 0.1, reverseHolo: 0.5 },
        "71": { normal: 0.1, reverseHolo: 0.5 },
        "72": { normal: 0.1, reverseHolo: 0.5 },
        "73": { normal: 0.15, reverseHolo: 0.5 },
        "74": { normal: 0.1, reverseHolo: 0.5 },
        "75": 6,
        "76": { normal: 0.1, reverseHolo: 0.5 },
        "77": { normal: 0.1, reverseHolo: 0.5 },
        "78": { normal: 0.1, reverseHolo: 0.5 },
        "79": 6,
        "80": { normal: 0.1, reverseHolo: 0.5 },
        "81": { normal: 0.1, reverseHolo: 0.5 },
        "82": { normal: 0.75, reverseHolo: 1.5 },
        "83": { normal: 0.1, reverseHolo: 0.5 },
        "84": { normal: 0.1, reverseHolo: 0.5 },
        "85": { normal: 0.75, reverseHolo: 1.5 },
        "86": { normal: 0.1, reverseHolo: 0.5 },
        "87": { normal: 0.15, reverseHolo: 0.5 },
        "88": { normal: 0.1, reverseHolo: 0.5 },
        "89": { normal: 0.15, reverseHolo: 0.5 },
        "90": { normal: 0.15, reverseHolo: 0.5 },
        "91": { normal: 0.1, reverseHolo: 0.5 },
        "92": { normal: 0.15, reverseHolo: 0.5 },
        "93": { normal: 0.1, reverseHolo: 0.5 },
        "94": 6,
        "95": { normal: 0.75, reverseHolo: 1.5 },
        "96": { normal: 0.1, reverseHolo: 0.5 },
        "97": { normal: 0.1, reverseHolo: 0.5 },
        "98": 6,
        "99": { normal: 0.15, reverseHolo: 0.5 },
        "100": { normal: 0.15, reverseHolo: 0.5 },
        "101": { normal: 0.1, reverseHolo: 0.5 },
        "102": { normal: 0.15, reverseHolo: 0.5 },
        "103": { normal: 0.1, reverseHolo: 0.5 },
        "104": { normal: 0.1, reverseHolo: 0.5 },
        "105": { normal: 0.15, reverseHolo: 0.5 },
        "106": { normal: 0.1, reverseHolo: 0.5 },
        "107": { normal: 0.75, reverseHolo: 1.5 },
        "108": { normal: 0.15, reverseHolo: 0.5 },
        "109": { normal: 0.1, reverseHolo: 0.5 },
        "110": { normal: 0.15, reverseHolo: 0.5 },
        "111": 6,
        "112": { normal: 0.1, reverseHolo: 0.5 },
        "113": { normal: 0.1, reverseHolo: 0.5 },
        "114": 6,
        "115": { normal: 0.1, reverseHolo: 0.5 },
        "116": { normal: 0.75, reverseHolo: 1.5 },
        "117": { normal: 0.75, reverseHolo: 1.5 },
        "118": { normal: 0.1, reverseHolo: 0.5 },
        "119": { normal: 0.1, reverseHolo: 0.5 },
        "120": { normal: 0.1, reverseHolo: 0.5 },
        "121": 6,
        "122": { normal: 0.1, reverseHolo: 0.5 },
        "123": { normal: 0.1, reverseHolo: 0.5 },
        "124": { normal: 0.1, reverseHolo: 0.5 },
        "125": { normal: 0.1, reverseHolo: 0.5 },
        "126": { normal: 0.15, reverseHolo: 0.5 },
        "127": { normal: 0.1, reverseHolo: 0.5 },
        "128": { normal: 0.75, reverseHolo: 1.5 },
        "129": { normal: 0.1, reverseHolo: 0.5 },
        "130": { normal: 0.1, reverseHolo: 0.5 },
        "131": { normal: 0.1, reverseHolo: 0.5 },
        "132": { normal: 0.15, reverseHolo: 0.5 },
        "133": { normal: 0.1, reverseHolo: 0.5 },
        "134": { normal: 0.1, reverseHolo: 0.5 },
        "135": { normal: 0.1, reverseHolo: 0.5 },
        "136": { normal: 0.75, reverseHolo: 1.5 },
        "137": { normal: 0.1, reverseHolo: 0.5 },
        "138": { normal: 0.15, reverseHolo: 0.5 },
        "139": { normal: 0.1, reverseHolo: 0.5 },
        "140": { normal: 0.15, reverseHolo: 0.5 },
        "141": { normal: 0.1, reverseHolo: 0.5 },
        "142": { normal: 0.1, reverseHolo: 0.5 },
        "143": { normal: 0.1, reverseHolo: 0.5 },
        "144": { normal: 0.1, reverseHolo: 0.5 },
        "145": { normal: 0.1, reverseHolo: 0.5 },
        "146": { normal: 0.15, reverseHolo: 0.5 },
        "147": { normal: 0.15, reverseHolo: 0.5 },
        "148": { normal: 0.15, reverseHolo: 0.5 },
        "149": { normal: 0.15, reverseHolo: 0.5 },
        "150": { normal: 0.15, reverseHolo: 0.5 },
        "151": { normal: 0.15, reverseHolo: 0.5 },
        "152": { normal: 0.15, reverseHolo: 0.5 },
        "153": { normal: 0.15, reverseHolo: 0.5 },
        "154": { normal: 0.15, reverseHolo: 0.5 },
        "155": { normal: 0.1, reverseHolo: 0.5 },
        "156": { normal: 0.15, reverseHolo: 0.5 },
        "157": { normal: 0.15, reverseHolo: 0.5 },
        "158": { normal: 0.15, reverseHolo: 0.5 },
        "159": { normal: 0.15, reverseHolo: 0.5 },
        "160": 7.00, // (Illustration Rare)
        "161": 9.00, // (Illustration Rare)
        "162": 8.00, // (Illustration Rare)
        "163": 10.00, // (Illustration Rare)
        "164": 7.50, // (Illustration Rare)
        "165": 8.50, // (Illustration Rare)
        "166": 9.50, // (Illustration Rare)
        "167": 7.00, // (Illustration Rare)
        "168": 11.00, // (Illustration Rare)
        "169": 8.00, // (Illustration Rare)
        "170": 12.00, // (Illustration Rare)
        "171": 6.00, // (Ultra Rare)
        "172": 8.00, // (Ultra Rare)
        "173": 7.00, // (Ultra Rare)
        "174": 9.00, // (Ultra Rare)
        "175": 6.50, // (Ultra Rare)
        "176": 8.50, // (Ultra Rare)
        "177": 7.50, // (Ultra Rare)
        "178": 9.50, // (Ultra Rare)
        "179": 7.00, // (Ultra Rare)
        "180": 8.00, // (Ultra Rare)
        "181": 10.00, // (Ultra Rare)
        "182": 18.00, // (Special Illustration Rare)
        "183": 24.00, // (Special Illustration Rare)
        "184": 20.00, // (Special Illustration Rare)
        "185": 32.00, // (Special Illustration Rare)
        "186": 22.00, // (Special Illustration Rare)
        "187": 28.00, // (Special Illustration Rare)
        "188": 26.00, // (Hyper Rare)
        "189": 30.00, // (Hyper Rare)
        "190": 28.00 // (Hyper Rare)
    },

    "destined-rivals": {
        "1": { normal: 0.15, reverseHolo: 0.5 },
        "2": { normal: 0.1, reverseHolo: 0.5 },
        "3": 6,
        "4": { normal: 0.1, reverseHolo: 0.5 },
        "5": { normal: 0.1, reverseHolo: 0.5 },
        "6": { normal: 0.1, reverseHolo: 0.5 },
        "7": { normal: 0.1, reverseHolo: 0.5 },
        "8": { normal: 0.75, reverseHolo: 1.5 },
        "9": { normal: 0.1, reverseHolo: 0.5 },
        "10": { normal: 0.15, reverseHolo: 0.5 },
        "11": { normal: 0.1, reverseHolo: 0.5 },
        "12": { normal: 0.75, reverseHolo: 1.5 },
        "13": { normal: 0.1, reverseHolo: 0.5 },
        "14": { normal: 0.15, reverseHolo: 0.5 },
        "15": { normal: 0.1, reverseHolo: 0.5 },
        "16": { normal: 0.1, reverseHolo: 0.5 },
        "17": { normal: 0.1, reverseHolo: 0.5 },
        "18": { normal: 0.75, reverseHolo: 1.5 },
        "19": { normal: 0.1, reverseHolo: 0.5 },
        "20": { normal: 0.75, reverseHolo: 1.5 },
        "21": { normal: 0.1, reverseHolo: 0.5 },
        "22": { normal: 0.1, reverseHolo: 0.5 },
        "23": 6,
        "24": { normal: 0.1, reverseHolo: 0.5 },
        "25": 6,
        "26": { normal: 0.15, reverseHolo: 0.5 },
        "27": { normal: 0.1, reverseHolo: 0.5 },
        "28": { normal: 0.15, reverseHolo: 0.5 },
        "29": { normal: 0.1, reverseHolo: 0.5 },
        "30": { normal: 0.15, reverseHolo: 0.5 },
        "31": 6,
        "32": { normal: 0.1, reverseHolo: 0.5 },
        "33": { normal: 0.1, reverseHolo: 0.5 },
        "34": { normal: 0.75, reverseHolo: 1.5 },
        "35": { normal: 0.1, reverseHolo: 0.5 },
        "36": { normal: 0.75, reverseHolo: 1.5 },
        "37": { normal: 0.1, reverseHolo: 0.5 },
        "38": { normal: 0.15, reverseHolo: 0.5 },
        "39": 6,
        "40": { normal: 0.1, reverseHolo: 0.5 },
        "41": { normal: 0.1, reverseHolo: 0.5 },
        "42": { normal: 0.75, reverseHolo: 1.5 },
        "43": { normal: 0.1, reverseHolo: 0.5 },
        "44": { normal: 0.15, reverseHolo: 0.5 },
        "45": { normal: 0.15, reverseHolo: 0.5 },
        "46": { normal: 0.1, reverseHolo: 0.5 },
        "47": { normal: 0.15, reverseHolo: 0.5 },
        "48": { normal: 0.1, reverseHolo: 0.5 },
        "49": { normal: 0.75, reverseHolo: 1.5 },
        "50": { normal: 0.1, reverseHolo: 0.5 },
        "51": { normal: 0.75, reverseHolo: 1.5 },
        "52": { normal: 0.1, reverseHolo: 0.5 },
        "53": { normal: 0.15, reverseHolo: 0.5 },
        "54": { normal: 0.1, reverseHolo: 0.5 },
        "55": { normal: 0.15, reverseHolo: 0.5 },
        "56": { normal: 0.75, reverseHolo: 1.5 },
        "57": { normal: 0.1, reverseHolo: 0.5 },
        "58": { normal: 0.15, reverseHolo: 0.5 },
        "59": { normal: 0.1, reverseHolo: 0.5 },
        "60": { normal: 0.15, reverseHolo: 0.5 },
        "61": { normal: 0.1, reverseHolo: 0.5 },
        "62": { normal: 0.1, reverseHolo: 0.5 },
        "63": { normal: 0.15, reverseHolo: 0.5 },
        "64": { normal: 0.1, reverseHolo: 0.5 },
        "65": 6,
        "66": 6,
        "67": { normal: 0.15, reverseHolo: 0.5 },
        "68": { normal: 0.1, reverseHolo: 0.5 },
        "69": 6,
        "70": { normal: 0.75, reverseHolo: 1.5 },
        "71": { normal: 0.1, reverseHolo: 0.5 },
        "72": { normal: 0.1, reverseHolo: 0.5 },
        "73": { normal: 0.1, reverseHolo: 0.5 },
        "74": { normal: 0.15, reverseHolo: 0.5 },
        "75": { normal: 0.1, reverseHolo: 0.5 },
        "76": { normal: 0.15, reverseHolo: 0.5 },
        "77": { normal: 0.1, reverseHolo: 0.5 },
        "78": { normal: 0.75, reverseHolo: 1.5 },
        "79": { normal: 0.1, reverseHolo: 0.5 },
        "80": { normal: 0.15, reverseHolo: 0.5 },
        "81": 6,
        "82": { normal: 0.75, reverseHolo: 1.5 },
        "83": { normal: 0.1, reverseHolo: 0.5 },
        "84": { normal: 0.15, reverseHolo: 0.5 },
        "85": { normal: 0.1, reverseHolo: 0.5 },
        "86": { normal: 0.1, reverseHolo: 0.5 },
        "87": { normal: 0.15, reverseHolo: 0.5 },
        "88": { normal: 0.1, reverseHolo: 0.5 },
        "89": { normal: 0.15, reverseHolo: 0.5 },
        "90": { normal: 0.1, reverseHolo: 0.5 },
        "91": { normal: 0.1, reverseHolo: 0.5 },
        "92": { normal: 0.75, reverseHolo: 1.5 },
        "93": { normal: 0.1, reverseHolo: 0.5 },
        "94": { normal: 0.1, reverseHolo: 0.5 },
        "95": { normal: 0.1, reverseHolo: 0.5 },
        "96": { normal: 0.75, reverseHolo: 1.5 },
        "97": { normal: 0.1, reverseHolo: 0.5 },
        "98": { normal: 0.15, reverseHolo: 0.5 },
        "99": { normal: 0.1, reverseHolo: 0.5 },
        "100": { normal: 0.15, reverseHolo: 0.5 },
        "101": 6,
        "102": { normal: 0.1, reverseHolo: 0.5 },
        "103": { normal: 0.1, reverseHolo: 0.5 },
        "104": 6,
        "105": { normal: 0.1, reverseHolo: 0.5 },
        "106": { normal: 0.15, reverseHolo: 0.5 },
        "107": { normal: 0.1, reverseHolo: 0.5 },
        "108": { normal: 0.15, reverseHolo: 0.5 },
        "109": { normal: 0.1, reverseHolo: 0.5 },
        "110": { normal: 0.15, reverseHolo: 0.5 },
        "111": { normal: 0.15, reverseHolo: 0.5 },
        "112": { normal: 0.1, reverseHolo: 0.5 },
        "113": { normal: 0.15, reverseHolo: 0.5 },
        "114": { normal: 0.1, reverseHolo: 0.5 },
        "115": { normal: 0.1, reverseHolo: 0.5 },
        "116": { normal: 0.15, reverseHolo: 0.5 },
        "117": { normal: 0.1, reverseHolo: 0.5 },
        "118": { normal: 0.1, reverseHolo: 0.5 },
        "119": 6,
        "120": { normal: 0.1, reverseHolo: 0.5 },
        "121": { normal: 0.15, reverseHolo: 0.5 },
        "122": 6,
        "123": { normal: 0.1, reverseHolo: 0.5 },
        "124": { normal: 0.15, reverseHolo: 0.5 },
        "125": { normal: 0.1, reverseHolo: 0.5 },
        "126": { normal: 0.15, reverseHolo: 0.5 },
        "127": { normal: 0.15, reverseHolo: 0.5 },
        "128": { normal: 0.75, reverseHolo: 1.5 },
        "129": { normal: 0.15, reverseHolo: 0.5 },
        "130": { normal: 0.1, reverseHolo: 0.5 },
        "131": { normal: 0.15, reverseHolo: 0.5 },
        "132": { normal: 0.1, reverseHolo: 0.5 },
        "133": { normal: 0.15, reverseHolo: 0.5 },
        "134": { normal: 0.1, reverseHolo: 0.5 },
        "135": { normal: 0.15, reverseHolo: 0.5 },
        "136": 6,
        "137": { normal: 0.1, reverseHolo: 0.5 },
        "138": { normal: 0.1, reverseHolo: 0.5 },
        "139": 6,
        "140": { normal: 0.15, reverseHolo: 0.5 },
        "141": { normal: 0.1, reverseHolo: 0.5 },
        "142": { normal: 0.1, reverseHolo: 0.5 },
        "143": { normal: 0.1, reverseHolo: 0.5 },
        "144": { normal: 0.15, reverseHolo: 0.5 },
        "145": 6,
        "146": { normal: 0.75, reverseHolo: 1.5 },
        "147": { normal: 0.1, reverseHolo: 0.5 },
        "148": { normal: 0.1, reverseHolo: 0.5 },
        "149": { normal: 0.1, reverseHolo: 0.5 },
        "150": 6,
        "151": { normal: 0.1, reverseHolo: 0.5 },
        "152": { normal: 0.1, reverseHolo: 0.5 },
        "153": { normal: 0.1, reverseHolo: 0.5 },
        "154": { normal: 0.1, reverseHolo: 0.5 },
        "155": { normal: 0.15, reverseHolo: 0.5 },
        "156": { normal: 0.1, reverseHolo: 0.5 },
        "157": { normal: 0.1, reverseHolo: 0.5 },
        "158": { normal: 0.1, reverseHolo: 0.5 },
        "159": { normal: 0.75, reverseHolo: 1.5 },
        "160": { normal: 0.1, reverseHolo: 0.5 },
        "161": { normal: 0.15, reverseHolo: 0.5 },
        "162": { normal: 0.15, reverseHolo: 0.5 },
        "163": { normal: 0.1, reverseHolo: 0.5 },
        "164": { normal: 0.15, reverseHolo: 0.5 },
        "165": { normal: 0.15, reverseHolo: 0.5 },
        "166": { normal: 0.15, reverseHolo: 0.5 },
        "167": { normal: 0.15, reverseHolo: 0.5 },
        "168": { normal: 0.15, reverseHolo: 0.5 },
        "169": { normal: 0.15, reverseHolo: 0.5 },
        "170": { normal: 0.15, reverseHolo: 0.5 },
        "171": { normal: 0.15, reverseHolo: 0.5 },
        "172": { normal: 0.15, reverseHolo: 0.5 },
        "173": { normal: 0.15, reverseHolo: 0.5 },
        "174": { normal: 0.15, reverseHolo: 0.5 },
        "175": { normal: 0.15, reverseHolo: 0.5 },
        "176": { normal: 0.15, reverseHolo: 0.5 },
        "177": { normal: 0.15, reverseHolo: 0.5 },
        "178": { normal: 0.15, reverseHolo: 0.5 },
        "179": { normal: 0.15, reverseHolo: 0.5 },
        "180": { normal: 0.15, reverseHolo: 0.5 },
        "181": { normal: 0.15, reverseHolo: 0.5 },
        "182": { normal: 0.15, reverseHolo: 0.5 },
        "183": 6.50, // (Illustration Rare)
        "184": 8.00, // (Illustration Rare)
        "185": 7.50, // (Illustration Rare)
        "186": 9.00, // (Illustration Rare)
        "187": 7.00, // (Illustration Rare)
        "188": 10.00, // (Illustration Rare)
        "189": 8.50, // (Illustration Rare)
        "190": 7.00, // (Illustration Rare)
        "191": 9.50, // (Illustration Rare)
        "192": 8.00, // (Illustration Rare)
        "193": 11.00, // (Illustration Rare)
        "194": 7.50, // (Illustration Rare)
        "195": 9.00, // (Illustration Rare)
        "196": 8.50, // (Illustration Rare)
        "197": 7.00, // (Illustration Rare)
        "198": 10.00, // (Illustration Rare)
        "199": 8.00, // (Illustration Rare)
        "200": 12.00, // (Illustration Rare)
        "201": 7.50, // (Illustration Rare)
        "202": 9.00, // (Illustration Rare)
        "203": 8.00, // (Illustration Rare)
        "204": 10.50, // (Illustration Rare)
        "205": 9.50, // (Illustration Rare)
        "206": 6.00, // (Ultra Rare)
        "207": 8.50, // (Ultra Rare)
        "208": 7.00, // (Ultra Rare)
        "209": 9.00, // (Ultra Rare)
        "210": 6.50, // (Ultra Rare)
        "211": 8.00, // (Ultra Rare)
        "212": 7.50, // (Ultra Rare)
        "213": 9.50, // (Ultra Rare)
        "214": 7.00, // (Ultra Rare)
        "215": 8.50, // (Ultra Rare)
        "216": 10.00, // (Ultra Rare)
        "217": 7.00, // (Ultra Rare)
        "218": 9.00, // (Ultra Rare)
        "219": 8.00, // (Ultra Rare)
        "220": 6.50, // (Ultra Rare)
        "221": 9.50, // (Ultra Rare)
        "222": 7.50, // (Ultra Rare)
        "223": 8.00, // (Ultra Rare)
        "224": 10.00, // (Ultra Rare)
        "225": 7.00, // (Ultra Rare)
        "226": 9.00, // (Ultra Rare)
        "227": 8.50, // (Ultra Rare)
        "228": 20.00, // (Special Illustration Rare)
        "229": 25.00, // (Special Illustration Rare)
        "230": 18.00, // (Special Illustration Rare)
        "231": 30.00, // (Special Illustration Rare)
        "232": 22.00, // (Special Illustration Rare)
        "233": 28.00, // (Special Illustration Rare)
        "234": 24.00, // (Special Illustration Rare)
        "235": 35.00, // (Special Illustration Rare)
        "236": 26.00, // (Special Illustration Rare)
        "237": 32.00, // (Special Illustration Rare)
        "238": 40.00, // (Special Illustration Rare)
        "239": 28.00, // (Hyper Rare)
        "240": 32.00, // (Hyper Rare)
        "241": 26.00, // (Hyper Rare)
        "242": 35.00 // (Hyper Rare),
        "243": 25,
        "244": 25
    }

};
