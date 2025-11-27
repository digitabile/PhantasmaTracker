# 🎴 Pokemon Card Collection Tracker

A comprehensive web application for tracking your Pokemon TCG collection across multiple sets. This app helps you manage your card collection, view statistics, and track the value of your cards with **real-time pricing powered by the JustTCG API**.

## Features

### 📋 Collection Tracker
- **Multi-Set Support**: Track 17 different Pokemon TCG sets (Mega Evolution, Scarlet & Violet series, and more)
- **Visual Card Grid**: Browse all cards in your selected set
- **Checkbox System**: Mark cards as owned with a simple checkbox
- **Smart Filtering**: Filter by type, rarity, and ownership status
- **Search Functionality**: Quickly find cards by name or number
- **Real-Time Pricing**: Live market prices via JustTCG API integration
- **Variant Support**: Track normal, reverse holo, and foil variants

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

### 💾 Data Persistence & Backup
- All collection data is saved locally in your browser
- No account required - everything stays on your device
- **Export/Import**: Full backup and restore for all sets
- **API Key Storage**: Securely store your JustTCG API key locally

### ⚙️ Settings & Configuration
- **JustTCG API Integration**: Configure your API key for real-time pricing
- **Flexible Pricing Options**: Choose between live API pricing or static data
- **Price Caching**: Optional 24-hour cache to reduce API calls
- **API Status Display**: See real-time status of your API connection

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

### 🌐 JustTCG API Integration

This app now includes **full integration with the JustTCG API** for real-time Pokemon card pricing!

**Setting up JustTCG API:**

1. **Get Your API Key**
   - Visit [JustTCG.com](https://justtcg.com) and sign up for an account
   - Generate your API key from the dashboard
   - Free tier available for developers

2. **Configure in the App**
   - Click the **⚙️ Settings** button in the navigation bar
   - Enter your JustTCG API key in the API Configuration section
   - Click **Save API Key**
   - Enable "Use JustTCG API for real-time pricing"

3. **Refresh Prices**
   - Click **💰 Refresh Prices** to load real-time market data
   - Prices are cached for 24 hours by default (configurable)
   - The app automatically falls back to static pricing if API is unavailable

**JustTCG API Features:**
- ✅ Real-time pricing updated every 6 hours
- ✅ Multiple market sources for accurate pricing
- ✅ Average response time: 50ms
- ✅ Condition-specific pricing (NM, LP, MP, HP)
- ✅ Foil variant pricing support
- ✅ Support for 17 different Pokemon TCG sets

**Supported Sets:**
- Mega Evolution Series (Mega Evolution, Phantasmal Flames)
- Special Sets (Pokemon GO)
- Scarlet & Violet Series (14 sets including 151, Paradox Rift, Prismatic Evolutions, and more)

**API Documentation:**
- Official Docs: [https://justtcg.com/docs](https://justtcg.com/docs)
- Pricing API: `https://api.justtcg.com/v1/cards`
- Authentication: x-api-key header

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
├── app.js             # Main application logic with JustTCG integration
├── cards-data.js      # Complete card database (17 sets, 3000+ cards)
├── card-prices.js     # Static fallback pricing data
├── test-prices.html   # Price diagnostic tool
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
- [x] **JustTCG API integration** ✨ NEW!
- [x] Complete card database (17 sets, 3000+ cards)
- [x] Export/Import collections
- [x] Multi-set support
- [x] Variant tracking (normal/reverse holo)
- [x] Real-time pricing
- [ ] Print checklist view
- [ ] Duplicate card tracking
- [ ] Trade list generator
- [ ] Price history tracking
- [ ] Set comparison tools

## Contributing

To add features or improve the app:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Data Sources & Credits

- **Card Information**: Official Pokemon TCG, Pokemon TCG API
- **Set Details**: Bulbapedia, PokeBeach, TCG Collector
- **Real-Time Pricing**: [JustTCG API](https://justtcg.com) - The Simple, Reliable TCG Pricing API
- **Static Pricing Fallback**: TCGPlayer, PriceCharting market data

## License

This is a fan-made tool for personal collection management. Pokemon and all related properties are trademarks of Nintendo, Creatures Inc., and Game Freak.

## Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Check existing issues for solutions
- Contribute improvements via pull requests

## Quick Tips

💡 **Pro Tips:**
- **Configure JustTCG API** in Settings for real-time pricing across all sets
- Use the search bar to quickly find cards by name or number
- Filter by "Needed" to see which cards to hunt for
- Click any card for detailed information and current market pricing
- The visual grid in Statistics shows your overall progress at a glance
- Your data is saved automatically - no need to click save!
- Use **Export Backup** regularly to protect your collection data
- Switch between sets using the dropdown to track multiple collections
- Enable price caching to reduce API calls and stay within rate limits

---

**Happy Collecting! 🎴✨**
