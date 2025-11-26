# 🔥 Phantasmal Flames Card Tracker

A comprehensive web application for tracking your Pokemon TCG Phantasmal Flames collection. This app helps you manage your card collection, view statistics, and track the value of your cards.

## Features

### 📋 Collection Tracker
- **Visual Card Grid**: Browse all 130 cards in the Phantasmal Flames set
- **Checkbox System**: Mark cards as owned with a simple checkbox (similar to players booklet)
- **Smart Filtering**: Filter by type, rarity, and ownership status
- **Search Functionality**: Quickly find cards by name or number
- **Live Pricing**: Automatic price fetching from reputable sources (simulated for demo)

### 📊 Statistics Dashboard
- **Collection Progress**: Visual progress bars and percentage completion
- **By Type**: See collection progress broken down by Pokemon type
- **By Rarity**: Track which rare cards you still need
- **By Category**: View stats for Pokemon, Trainers, and Energy cards
- **Visual Grid**: See all 130 cards at a glance with owned cards highlighted
- **Missing Cards**: Dedicated section showing which cards you still need

### 🖼️ Gallery View
- **Full Card Gallery**: Browse beautiful card images
- **Category Filters**: View Pokemon, Trainers, or Energy cards separately
- **Card Details**: Click any card to see detailed information
- **Quick Add**: Add cards to your collection directly from the gallery

### 💾 Data Persistence
- All collection data is saved locally in your browser
- No account required - everything stays on your device
- Export/Import functionality (built-in for future use)

## Getting Started

### Installation

1. **Clone or download this repository**
   ```bash
   git clone <repository-url>
   cd PhantasmaTracker
   ```

2. **Open the application**
   - Simply open `index.html` in any modern web browser
   - No build process or dependencies required!
   - Works offline after first load

### Usage

1. **Track Your Collection**
   - Navigate to the "Collection" tab
   - Check the boxes next to cards you own
   - Use filters to find specific cards
   - Your progress is automatically saved

2. **View Statistics**
   - Navigate to the "Statistics" tab
   - See your collection progress visualized
   - View missing cards you still need
   - Track estimated collection value

3. **Browse Gallery**
   - Navigate to the "Gallery" tab
   - Browse all cards in the set
   - Click cards for detailed information
   - Filter by category (Pokemon, Trainers, Energy)

## Customization

### Adding Complete Card Data

The app currently includes sample cards. To add the complete Phantasmal Flames set:

1. **Edit `cards-data.js`**
   - Replace the sample cards with the complete 130-card list
   - Maintain the same data structure:
     ```javascript
     {
       number: "001",
       name: "Card Name",
       type: "Fire",
       rarity: "Ultra Rare",
       category: "Pokemon",
       imageUrl: "assets/cards/001.png"
     }
     ```

2. **Add Card Images**
   - Place card images in the `assets/cards/` directory
   - Name files by card number: `001.png`, `002.png`, etc.
   - Recommended format: PNG with transparent backgrounds
   - Recommended dimensions: 734×1024 pixels (standard Pokemon card ratio)

### Card Data Sources

To get complete card data for Phantasmal Flames, visit:
- **Official Pokemon TCG Gallery**: https://tcg.pokemon.com/en-us/galleries/phantasmal-flames/
- **Bulbapedia**: https://bulbapedia.bulbagarden.net/wiki/Phantasmal_Flames_(TCG)
- **PokeBeach**: https://www.pokebeach.com (search for Phantasmal Flames)
- **TCG Collector**: https://www.tcgcollector.com/sets/11669/phantasmal-flames

### Price Integration

The app includes a price fetching system that can be integrated with real APIs:

**Supported Price APIs:**
- **TCGPlayer API**: https://docs.tcgplayer.com/
- **Pokemon TCG API**: https://pokemontcg.io/
- **CardMarket API**: https://api.cardmarket.com/

To integrate real pricing:
1. Sign up for an API key from one of the above services
2. Modify the `fetchPrices()` method in `app.js`
3. Replace the simulated prices with actual API calls

Example API integration:
```javascript
async fetchPrices() {
    const apiKey = 'YOUR_API_KEY';
    const response = await fetch(`https://api.pokemontcg.io/v2/cards?q=set.id:phantasmal-flames`, {
        headers: { 'X-Api-Key': apiKey }
    });
    const data = await response.json();
    // Process and store prices
}
```

## Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern responsive design with Grid and Flexbox
- **JavaScript (ES6+)**: Object-oriented application structure
- **LocalStorage API**: Client-side data persistence

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### File Structure
```
PhantasmaTracker/
├── index.html          # Main application HTML
├── styles.css          # All application styles
├── app.js             # Main application logic
├── cards-data.js      # Card database
├── assets/
│   └── cards/         # Card images directory
│       └── .gitkeep
└── README.md          # This file
```

## Set Information

**Phantasmal Flames** is the second main expansion of the Pokemon TCG Mega Evolution Series.

- **Release Date**: November 14, 2025
- **Total Cards**: 130
- **Featured Pokemon**: Mega Charizard X ex, Mega Gengar ex, Mega Diancie ex
- **Card Types**:
  - 6 Mega Evolution EX Pokemon
  - 4 Pokemon EX cards
  - 94 Regular Pokemon cards
  - 13 Illustrated Rare cards
  - 5 Special Illustrated Rare cards
  - Trainer and Energy cards

## Features Roadmap

- [x] Basic collection tracking
- [x] Visual statistics dashboard
- [x] Card gallery view
- [x] Local storage persistence
- [x] Search and filtering
- [ ] Price API integration
- [ ] Complete card database (130 cards)
- [ ] Export/Import collections
- [ ] Print checklist view
- [ ] Duplicate card tracking
- [ ] Trade list generator

## Contributing

To add features or improve the app:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Data Sources & Credits

- **Card Information**: Official Pokemon TCG
- **Set Details**: Bulbapedia, PokeBeach
- **Price Data**: TCGPlayer, CardMarket (when integrated)

## License

This is a fan-made tool for personal collection management. Pokemon and all related properties are trademarks of Nintendo, Creatures Inc., and Game Freak.

## Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Check existing issues for solutions
- Contribute improvements via pull requests

## Quick Tips

💡 **Pro Tips:**
- Use the search bar to quickly find cards by name
- Filter by "Needed" to see which cards to hunt for
- Click any card for detailed information and pricing
- The visual grid in Statistics shows your overall progress at a glance
- Your data is saved automatically - no need to click save!

---

**Happy Collecting! 🎴✨**
