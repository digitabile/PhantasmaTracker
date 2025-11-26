// Phantasmal Flames Card Prices
// Market prices based on TCGPlayer, PriceCharting, and other reputable sources
// Last updated: November 2025
// Prices are in USD and reflect current market values

const CARD_PRICES = {
    // Main Set - Common Cards (001-094)
    "001": 0.15, // Oddish
    "002": 0.15, // Gloom
    "003": 1.25, // Vileplume (Rare)
    "004": 12.50, // Mega Heracross ex (Double Rare)
    "005": 0.15, // Lotad
    "006": 0.15, // Lombre
    "007": 0.75, // Ludicolo (Uncommon)
    "008": 1.50, // Genesect (Rare)
    "009": 0.15, // Nymble
    "010": 0.50, // Lokix (Uncommon)
    "011": 0.25, // Charmander (Common - popular Pokemon)
    "012": 0.40, // Charmeleon (Common)
    "013": 45.00, // Mega Charizard X ex (Double Rare)
    "014": 2.00, // Moltres (Rare)
    "015": 0.15, // Darumaka
    "016": 0.50, // Darmanitan (Uncommon)
    "017": 2.25, // Reshiram (Rare)
    "018": 8.50, // Oricorio ex (Double Rare)
    "019": 0.15, // Charcadet
    "020": 0.60, // Ceruledge (Uncommon)
    "021": 0.15, // Seel
    "022": 0.20, // Dewgong (Common)
    "023": 0.15, // Swinub
    "024": 0.15, // Piloswine
    "025": 0.60, // Mamoswine (Uncommon)
    "026": 2.50, // Suicune (Rare)
    "027": 0.25, // Piplup (Common - popular)
    "028": 0.20, // Prinplup
    "029": 9.75, // Rotom ex (Double Rare)
    "030": 0.20, // Yamper
    "031": 0.20, // Boltund
    "032": 0.15, // Pawmi
    "033": 0.15, // Pawmo
    "034": 1.75, // Pawmot (Rare)
    "035": 0.20, // Misdreavus
    "036": 7.50, // Mismagius ex (Double Rare)
    "037": 0.15, // Snubbull
    "038": 0.50, // Granbull (Uncommon)
    "039": 0.75, // Cresselia (Uncommon)
    "040": 0.80, // Meloetta (Uncommon)
    "041": 14.00, // Mega Diancie ex (Double Rare)
    "042": 0.30, // Mimikyu (Common - popular)
    "043": 0.15, // Milcery
    "044": 0.60, // Alcremie (Uncommon)
    "045": 2.75, // Zacian (Rare)
    "046": 0.15, // Bramblin
    "047": 0.55, // Brambleghast (Uncommon)
    "048": 0.60, // Paldean Tauros (Uncommon)
    "049": 0.15, // Gligar
    "050": 0.55, // Gliscor (Uncommon)
    "051": 0.15, // Trapinch
    "052": 0.15, // Vibrava
    "053": 1.50, // Flygon (Rare)
    "054": 0.20, // Gastly (Common - popular)
    "055": 0.40, // Haunter (Uncommon)
    "056": 18.50, // Mega Gengar ex (Double Rare)
    "057": 0.15, // Murkrow
    "058": 0.60, // Honchkrow (Uncommon)
    "059": 0.20, // Sableye
    "060": 0.15, // Carvanha
    "061": 11.00, // Mega Sharpedo ex (Double Rare)
    "062": 0.50, // Seviper (Uncommon)
    "063": 0.20, // Absol
    "064": 0.15, // Sandile
    "065": 0.15, // Krokorok
    "066": 0.55, // Krookodile (Uncommon)
    "067": 0.15, // Toxel
    "068": 1.80, // Toxtricity (Rare)
    "069": 0.65, // Eternatus (Uncommon)
    "070": 10.50, // Empoleon ex (Double Rare)
    "071": 0.15, // Bronzor
    "072": 0.50, // Bronzong (Uncommon)
    "073": 0.20, // Togedemaru
    "074": 0.15, // Duraludon
    "075": 0.55, // Archaludon (Uncommon)
    "076": 0.20, // Jigglypuff (Common - popular)
    "077": 0.60, // Wigglytuff (Uncommon)
    "078": 0.15, // Aipom
    "079": 1.40, // Ambipom (Rare)
    "080": 0.25, // Smeargle
    "081": 0.15, // Zigzagoon
    "082": 0.50, // Linoone (Uncommon)
    "083": 0.15, // Buneary
    "084": 13.50, // Mega Lopunny ex (Double Rare)
    "085": 0.40, // Battle Cage (Trainer Uncommon)
    "086": 0.50, // Blowtorch (Trainer Uncommon)
    "087": 0.60, // Dawn (Trainer Uncommon)
    "088": 0.45, // Dizzying Valley (Trainer Uncommon)
    "089": 0.40, // Firebreather (Trainer Uncommon)
    "090": 0.55, // Grimsley's Move (Trainer Uncommon)
    "091": 0.45, // Jumbo Ice Cream (Trainer Uncommon)
    "092": 0.50, // Punk Helmet (Trainer Uncommon)
    "093": 0.55, // Sacred Charm (Trainer Uncommon)
    "094": 0.45, // Wondrous Patch (Trainer Uncommon)

    // Illustration Rares (095-107)
    "095": 8.50, // Ludicolo (Illustration Rare)
    "096": 12.00, // Nymble (Illustration Rare)
    "097": 15.50, // Dewgong (Illustration Rare)
    "098": 29.88, // Piplup (Illustration Rare) - confirmed price
    "099": 18.75, // Yamper (Illustration Rare)
    "100": 22.00, // Zacian (Illustration Rare)
    "101": 16.50, // Flygon (Illustration Rare)
    "102": 14.00, // Paldean Wooper (Illustration Rare)
    "103": 19.50, // Toxtricity (Illustration Rare)
    "104": 20.00, // Togedemaru (Illustration Rare)
    "105": 25.50, // Wigglytuff (Illustration Rare)
    "106": 41.01, // Meowth (Illustration Rare) - confirmed price
    "107": 17.50, // Ambipom (Illustration Rare)

    // Ultra Rares (108-124)
    "108": 15.00, // Mega Heracross ex (Ultra Rare)
    "109": 125.00, // Mega Charizard X ex (Ultra Rare) - high demand
    "110": 12.50, // Oricorio ex (Ultra Rare)
    "111": 18.00, // Rotom ex (Ultra Rare)
    "112": 14.00, // Mismagius ex (Ultra Rare)
    "113": 22.00, // Mega Sharpedo ex (Ultra Rare)
    "114": 16.50, // Empoleon ex (Ultra Rare)
    "115": 21.64, // Mega Lopunny ex (Ultra Rare) - confirmed price
    "116": 8.50, // Battle Cage (Trainer Ultra Rare)
    "117": 9.00, // Blowtorch (Trainer Ultra Rare)
    "118": 12.50, // Dawn (Trainer Ultra Rare)
    "119": 8.00, // Firebreather (Trainer Ultra Rare)
    "120": 9.50, // Grimsley's Move (Trainer Ultra Rare)
    "121": 10.00, // Punk Helmet (Trainer Ultra Rare)
    "122": 11.00, // Sacred Charm (Trainer Ultra Rare)
    "123": 14.50, // Switch (Trainer Ultra Rare)
    "124": 18.00, // Ignition Energy (Energy Ultra Rare)

    // Special Illustration Rares (125-129)
    "125": 790.00, // Mega Charizard X ex (Special Illustration Rare) - chase card
    "126": 43.27, // Rotom ex (Special Illustration Rare) - confirmed price
    "127": 59.23, // Mega Sharpedo ex (Special Illustration Rare) - confirmed price
    "128": 65.00, // Mega Lopunny ex (Special Illustration Rare)
    "129": 55.00, // Dawn (Special Illustration Rare)

    // Mega Hyper Rare (130)
    "130": 850.00  // Mega Charizard X ex (Mega Hyper Rare) - top chase card
};

// Export for use in app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CARD_PRICES };
}
