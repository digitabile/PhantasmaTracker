// Phantasmal Flames Card Prices
// Market prices based on TCGPlayer, PriceCharting, and other reputable sources
// Last updated: November 2025
// Prices are in USD and reflect current market values

const CARD_PRICES = {
    // Main Set - Common Cards (001-094)
    "001": 0.10, // Oddish
    "002": 0.10, // Gloom
    "003": 0.50, // Vileplume (Rare)
    "004": 3.50, // Mega Heracross ex (Double Rare)
    "005": 0.10, // Lotad
    "006": 0.10, // Lombre
    "007": 0.25, // Ludicolo (Uncommon)
    "008": 0.75, // Genesect (Rare)
    "009": 0.10, // Nymble
    "010": 0.20, // Lokix (Uncommon)
    "011": 0.15, // Charmander (Common - popular Pokemon)
    "012": 0.20, // Charmeleon (Common)
    "013": 25.00, // Mega Charizard X ex (Double Rare)
    "014": 1.00, // Moltres (Rare)
    "015": 0.10, // Darumaka
    "016": 0.25, // Darmanitan (Uncommon)
    "017": 1.25, // Reshiram (Rare)
    "018": 4.50, // Oricorio ex (Double Rare)
    "019": 0.10, // Charcadet
    "020": 0.25, // Ceruledge (Uncommon)
    "021": 0.10, // Seel
    "022": 0.20, // Dewgong (Common)
    "023": 0.10, // Swinub
    "024": 0.10, // Piloswine
    "025": 0.25, // Mamoswine (Uncommon)
    "026": 0.75, // Suicune (Rare)
    "027": 0.25, // Piplup (Common - popular)
    "028": 0.20, // Prinplup
    "029": 4.50, // Rotom ex (Double Rare)
    "030": 0.15, // Yamper
    "031": 0.20, // Boltund
    "032": 0.10, // Pawmi
    "033": 0.10, // Pawmo
    "034": 0.60, // Pawmot (Rare)
    "035": 0.15, // Misdreavus
    "036": 4.75, // Mismagius ex (Double Rare)
    "037": 0.10, // Snubbull
    "038": 0.25, // Granbull (Uncommon)
    "039": 0.30, // Cresselia (Uncommon)
    "040": 0.30, // Meloetta (Uncommon)
    "041": 5.00, // Mega Diancie ex (Double Rare)
    "042": 0.30, // Mimikyu (Common - popular)
    "043": 0.10, // Milcery
    "044": 0.25, // Alcremie (Uncommon)
    "045": 0.75, // Zacian (Rare)
    "046": 0.10, // Bramblin
    "047": 0.25, // Brambleghast (Uncommon)
    "048": 0.25, // Paldean Tauros (Uncommon)
    "049": 0.10, // Gligar
    "050": 0.25, // Gliscor (Uncommon)
    "051": 0.10, // Trapinch
    "052": 0.10, // Vibrava
    "053": 0.50, // Flygon (Rare)
    "054": 0.20, // Gastly (Common - popular)
    "055": 0.25, // Haunter (Uncommon)
    "056": 6.50, // Mega Gengar ex (Double Rare)
    "057": 0.10, // Murkrow
    "058": 0.25, // Honchkrow (Uncommon)
    "059": 0.15, // Sableye
    "060": 0.10, // Carvanha
    "061": 4.50, // Mega Sharpedo ex (Double Rare)
    "062": 0.25, // Seviper (Uncommon)
    "063": 0.15, // Absol
    "064": 0.10, // Sandile
    "065": 0.10, // Krokorok
    "066": 0.25, // Krookodile (Uncommon)
    "067": 0.10, // Toxel
    "068": 0.60, // Toxtricity (Rare)
    "069": 0.30, // Eternatus (Uncommon)
    "070": 4.75, // Empoleon ex (Double Rare)
    "071": 0.10, // Bronzor
    "072": 0.25, // Bronzong (Uncommon)
    "073": 0.15, // Togedemaru
    "074": 0.10, // Duraludon
    "075": 0.25, // Archaludon (Uncommon)
    "076": 0.20, // Jigglypuff (Common - popular)
    "077": 0.25, // Wigglytuff (Uncommon)
    "078": 0.10, // Aipom
    "079": 0.50, // Ambipom (Rare)
    "080": 0.20, // Smeargle
    "081": 0.10, // Zigzagoon
    "082": 0.25, // Linoone (Uncommon)
    "083": 0.10, // Buneary
    "084": 5.25, // Mega Lopunny ex (Double Rare)
    "085": 0.25, // Battle Cage (Trainer Uncommon)
    "086": 0.25, // Blowtorch (Trainer Uncommon)
    "087": 0.30, // Dawn (Trainer Uncommon)
    "088": 0.25, // Dizzying Valley (Trainer Uncommon)
    "089": 0.25, // Firebreather (Trainer Uncommon)
    "090": 0.30, // Grimsley's Move (Trainer Uncommon)
    "091": 0.25, // Jumbo Ice Cream (Trainer Uncommon)
    "092": 0.25, // Punk Helmet (Trainer Uncommon)
    "093": 0.30, // Sacred Charm (Trainer Uncommon)
    "094": 0.25, // Wondrous Patch (Trainer Uncommon)

    // Illustration Rares (095-107)
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

    // Ultra Rares (108-124)
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
