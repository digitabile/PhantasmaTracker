// Phantasmal Flames Card Prices
// Market prices based on TCGPlayer, PriceCharting, and other reputable sources
// Last updated: November 2025
// Prices are in USD and reflect current market values
// Reverse Holo variants typically worth 2-3x more for commons/uncommons

const CARD_PRICES = {
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
};

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
    module.exports = { CARD_PRICES, getCardPrice };
}
