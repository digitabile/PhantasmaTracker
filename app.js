// Pokemon Card Tracker Application
// Main application logic supporting multiple Pokemon TCG sets

// Type color mapping for visual elements
const TYPE_COLORS = {
    'Grass': '#7AC74C',
    'Fire': '#EE8130',
    'Water': '#6390F0',
    'Electric': '#F7D02C',
    'Psychic': '#F95587',
    'Fighting': '#C22E28',
    'Fairy': '#D685AD',
    'Colorless': '#A8A77A',
    'Trainer': '#7EC850',
    'Energy': '#FFD700',
    'Darkness': '#705746',
    'Metal': '#B7B7CE',
    'Dragon': '#6F35FC',
    'Lightning': '#F7D02C'
};

class CardTracker {
    constructor() {
        // Load saved set or default to Phantasmal Flames
        this.currentSet = localStorage.getItem('selectedSet') || 'phantasmal-flames';
        this.cards = CARD_SETS[this.currentSet].cards;
        this.ownedCards = new Set();
        this.cardPrices = new Map();
        this.currentView = 'collection';
        this.filters = {
            search: '',
            type: '',
            rarity: '',
            owned: ''
        };

        this.init();
    }

    async init() {
        this.loadFromLocalStorage();
        this.setupEventListeners();
        this.loadSetSelector();
        // Don't render cards until prices are loaded
        await this.fetchPrices();
        // fetchPrices() calls renderCards() and updateStats() after loading prices
        this.updateFooterApiStatus();
    }

    // Set Selection Management
    loadSetSelector() {
        const selector = document.getElementById('set-selector');
        if (selector) {
            selector.value = this.currentSet;
        }
    }

    async switchSet(newSet) {
        if (newSet === this.currentSet) return;

        // Save current set's data
        this.saveToLocalStorage();

        // Switch to new set
        this.currentSet = newSet;
        localStorage.setItem('selectedSet', newSet);

        // Load new set's data
        this.cards = CARD_SETS[this.currentSet].cards;
        this.ownedCards = new Set();
        this.cardPrices = new Map();

        // Reload from localStorage for new set
        this.loadFromLocalStorage();

        // Reset filters (without rendering)
        this.filters = {
            search: '',
            type: '',
            rarity: '',
            owned: ''
        };
        document.getElementById('search-input').value = '';
        document.getElementById('filter-type').value = '';
        document.getElementById('filter-rarity').value = '';
        document.getElementById('filter-owned').value = '';

        // Fetch prices first, then render everything
        await this.fetchPrices();
        // fetchPrices() calls renderCards() and updateStats() after loading prices

        console.log(`Switched to ${CARD_SETS[newSet].name} (${CARD_SETS[newSet].totalCards} cards)`);
    }

    // Local Storage Management
    loadFromLocalStorage() {
        const storageKey = `cardCollection_${this.currentSet}`;
        const stored = localStorage.getItem(storageKey);
        if (stored) {
            try {
                const data = JSON.parse(stored);
                this.ownedCards = new Set(data.ownedCards || []);
                this.cardPrices = new Map(data.cardPrices || []);
            } catch (e) {
                console.error('Error loading from localStorage:', e);
            }
        }
    }

    saveToLocalStorage() {
        const storageKey = `cardCollection_${this.currentSet}`;
        const data = {
            ownedCards: Array.from(this.ownedCards),
            cardPrices: Array.from(this.cardPrices.entries()),
            lastUpdated: new Date().toISOString()
        };
        localStorage.setItem(storageKey, JSON.stringify(data));
    }

    // Event Listeners
    setupEventListeners() {
        // Set Selector
        const setSelector = document.getElementById('set-selector');
        if (setSelector) {
            setSelector.addEventListener('change', (e) => {
                this.switchSet(e.target.value);
            });
        }

        // Navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchView(e.currentTarget.dataset.view);
            });
        });

        // Search and Filters
        document.getElementById('search-input').addEventListener('input', (e) => {
            this.filters.search = e.target.value.toLowerCase();
            this.renderCards();
        });

        document.getElementById('filter-type').addEventListener('change', (e) => {
            this.filters.type = e.target.value;
            this.renderCards();
        });

        document.getElementById('filter-rarity').addEventListener('change', (e) => {
            this.filters.rarity = e.target.value;
            this.renderCards();
        });

        document.getElementById('filter-owned').addEventListener('change', (e) => {
            this.filters.owned = e.target.value;
            this.renderCards();
        });

        document.getElementById('clear-filters').addEventListener('click', () => {
            this.clearFilters();
        });

        // Refresh Prices button
        document.getElementById('refresh-prices-btn').addEventListener('click', () => {
            this.forceRefreshPrices();
        });

        // Export/Import buttons
        document.getElementById('export-btn').addEventListener('click', () => {
            this.exportCollection();
        });

        document.getElementById('import-btn').addEventListener('click', () => {
            document.getElementById('import-file-input').click();
        });

        document.getElementById('import-file-input').addEventListener('change', (e) => {
            this.importCollection(e.target.files[0]);
        });

        // Gallery filters
        document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.gallery-filter-btn').forEach(b => b.classList.remove('active'));
                e.currentTarget.classList.add('active');
                this.renderGallery(e.currentTarget.dataset.category);
            });
        });

        // Modal
        document.getElementById('card-modal').addEventListener('click', (e) => {
            if (e.target.id === 'card-modal') {
                this.closeModal();
            }
        });

        document.querySelector('.modal-close').addEventListener('click', () => {
            this.closeModal();
        });

        // Settings button
        document.getElementById('settings-btn').addEventListener('click', () => {
            this.switchView('settings');
            this.loadSettingsUI();
        });

        // Settings UI controls
        document.getElementById('save-api-key-btn').addEventListener('click', () => {
            this.saveApiKey();
        });

        document.getElementById('remove-api-key-btn').addEventListener('click', () => {
            this.removeApiKey();
        });

        document.getElementById('toggle-api-key-visibility').addEventListener('click', () => {
            this.toggleApiKeyVisibility();
        });
    }

    // View Management
    switchView(viewName) {
        this.currentView = viewName;

        // Update nav buttons
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.view === viewName);
        });

        // Update views
        document.querySelectorAll('.view').forEach(view => {
            view.classList.remove('active');
        });
        document.getElementById(`${viewName}-view`).classList.add('active');

        // Render view-specific content
        if (viewName === 'statistics') {
            this.renderStatistics();
        } else if (viewName === 'gallery') {
            this.renderGallery('all');
        }
    }

    // Filter Management
    clearFilters() {
        this.filters = {
            search: '',
            type: '',
            rarity: '',
            owned: ''
        };

        document.getElementById('search-input').value = '';
        document.getElementById('filter-type').value = '';
        document.getElementById('filter-rarity').value = '';
        document.getElementById('filter-owned').value = '';

        this.renderCards();
    }

    getFilteredCards() {
        return this.cards.filter(card => {
            // Search filter
            if (this.filters.search) {
                const searchTerm = this.filters.search;
                const matchesSearch = card.name.toLowerCase().includes(searchTerm) ||
                                    card.number.includes(searchTerm);
                if (!matchesSearch) return false;
            }

            // Type filter
            if (this.filters.type && card.type !== this.filters.type) {
                return false;
            }

            // Rarity filter
            if (this.filters.rarity && card.rarity !== this.filters.rarity) {
                return false;
            }

            // Owned filter
            if (this.filters.owned === 'owned' && !this.ownedCards.has(card.number)) {
                return false;
            }
            if (this.filters.owned === 'needed' && this.ownedCards.has(card.number)) {
                return false;
            }

            return true;
        });
    }

    // Card Rendering
    renderCards() {
        const container = document.getElementById('card-grid');
        const filteredCards = this.getFilteredCards();

        if (filteredCards.length === 0) {
            container.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                    <h3>No cards found</h3>
                    <p>Try adjusting your filters or search terms</p>
                </div>
            `;
            return;
        }

        container.innerHTML = filteredCards.map((card, index) => this.createCardHTML(card, index)).join('');

        // Add event listeners to checkboxes
        container.querySelectorAll('.card-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                e.stopPropagation();
                const cardNumber = e.target.dataset.cardNumber;
                const variant = e.target.dataset.variant; // Will be undefined for single-variant cards
                this.toggleCardOwnership(cardNumber, variant);
            });
        });

        // Add click listeners to cards
        container.querySelectorAll('.card-item').forEach(cardEl => {
            cardEl.addEventListener('click', (e) => {
                if (!e.target.classList.contains('card-checkbox')) {
                    this.showCardDetail(cardEl.dataset.cardNumber);
                }
            });
        });

        this.updateStats();
    }

    // Helper function to check if a card has variants
    cardHasVariants(card) {
        // Only Common, Uncommon, and regular Rare cards have reverse holo variants
        // EX cards (Double Rare) and other special rarities have only one variant
        return card.rarity === 'Common' || card.rarity === 'Uncommon' || card.rarity === 'Rare';
    }

    createCardHTML(card, index = null) {
        const hasVariants = this.cardHasVariants(card);

        const typeColor = TYPE_COLORS[card.type] || '#999';

        // For cards with variants, check both normal and reverse holo ownership
        const isOwnedNormal = this.ownedCards.has(`${card.number}-normal`);
        const isOwnedReverseHolo = this.ownedCards.has(`${card.number}-reverseHolo`);
        const isOwnedAny = isOwnedNormal || isOwnedReverseHolo;

        // For cards without variants, use simple ownership check
        const isOwned = hasVariants ? isOwnedAny : this.ownedCards.has(card.number);

        // Get prices
        const priceNormal = this.cardPrices.get(`${card.number}-normal`) || this.cardPrices.get(card.number);
        const priceReverseHolo = this.cardPrices.get(`${card.number}-reverseHolo`);

        // Card number indicator (1, 2, 3, etc.) - for all sets
        const cardNumberIndicator = index !== null ? `<div class="card-sequence-number">${index + 1}</div>` : '';

        if (hasVariants) {
            // Determine the correct label for the first variant based on rarity
            // Rare cards have Holofoil + Reverse Holo
            // Common/Uncommon cards have Non-foil + Reverse Holo
            const firstVariantLabel = card.rarity === 'Rare' ? 'Holofoil' : 'Non-foil';

            // Render card with two checkboxes
            return `
                <div class="card-item ${isOwnedAny ? 'owned' : ''}" data-card-number="${card.number}">
                    ${cardNumberIndicator}
                    <div class="card-variants">
                        <div class="variant-item">
                            <input type="checkbox"
                                   class="card-checkbox variant-checkbox-input"
                                   data-card-number="${card.number}"
                                   data-variant="normal"
                                   id="card-${card.number}-normal"
                                   ${isOwnedNormal ? 'checked' : ''}>
                            <label for="card-${card.number}-normal" class="variant-label">${firstVariantLabel}</label>
                        </div>
                        <div class="variant-item">
                            <input type="checkbox"
                                   class="card-checkbox variant-checkbox-input"
                                   data-card-number="${card.number}"
                                   data-variant="reverseHolo"
                                   id="card-${card.number}-holo"
                                   ${isOwnedReverseHolo ? 'checked' : ''}>
                            <label for="card-${card.number}-holo" class="variant-label">Rev Holo</label>
                        </div>
                    </div>

                    <div class="card-image-container">
                        <img src="${card.imageUrl}"
                             alt="${card.name}"
                             class="card-image"
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                        <div class="card-placeholder" style="display: none;">
                            <div class="card-number">#${card.number}</div>
                            <div>${card.type}</div>
                        </div>
                    </div>

                    <div class="card-info">
                        <div class="card-header">
                            <span class="card-number-badge">#${card.number}</span>
                            <span class="card-type-badge" style="background-color: ${typeColor}">
                                ${card.type}
                            </span>
                        </div>
                        <div class="card-name">${card.name}</div>
                        <div class="card-rarity">${card.rarity}</div>
                        <div class="card-price">
                            ${priceNormal ? `$${priceNormal.toFixed(2)}` : '<span class="price-loading">Loading...</span>'}
                            ${priceReverseHolo ? ` / $${priceReverseHolo.toFixed(2)}` : ''}
                        </div>
                    </div>
                </div>
            `;
        } else {
            // Render card with single checkbox (holofoil only)
            return `
                <div class="card-item ${isOwned ? 'owned' : ''}" data-card-number="${card.number}">
                    ${cardNumberIndicator}
                    <input type="checkbox"
                           class="card-checkbox"
                           data-card-number="${card.number}"
                           ${isOwned ? 'checked' : ''}>

                    <div class="card-image-container">
                        <img src="${card.imageUrl}"
                             alt="${card.name}"
                             class="card-image"
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                        <div class="card-placeholder" style="display: none;">
                            <div class="card-number">#${card.number}</div>
                            <div>${card.type}</div>
                        </div>
                    </div>

                    <div class="card-info">
                        <div class="card-header">
                            <span class="card-number-badge">#${card.number}</span>
                            <span class="card-type-badge" style="background-color: ${typeColor}">
                                ${card.type}
                            </span>
                        </div>
                        <div class="card-name">${card.name}</div>
                        <div class="card-rarity">${card.rarity}</div>
                        <div class="card-price">
                            ${priceNormal ? `$${priceNormal.toFixed(2)}` : '<span class="price-loading">Loading...</span>'}
                        </div>
                    </div>
                </div>
            `;
        }
    }

    // Card Ownership Management
    toggleCardOwnership(cardNumber, variant) {
        // If variant is specified (for main set cards with multiple variants)
        const key = variant ? `${cardNumber}-${variant}` : cardNumber;

        if (this.ownedCards.has(key)) {
            this.ownedCards.delete(key);
        } else {
            this.ownedCards.add(key);
        }

        this.saveToLocalStorage();
        this.renderCards();
    }

    // Statistics
    updateStats() {
        // Calculate total possible cards including variants
        // Only Common, Uncommon, and Rare cards have 2 variants (normal + reverse holo)
        // Double Rare, Ultra Rare, and other special cards have 1 variant
        const cardsWithVariants = this.cards.filter(card => this.cardHasVariants(card));
        const cardsWithoutVariants = this.cards.filter(card => !this.cardHasVariants(card));
        const totalCards = (cardsWithVariants.length * 2) + cardsWithoutVariants.length;

        const ownedCount = this.ownedCards.size;
        const percentage = totalCards > 0 ? Math.round((ownedCount / totalCards) * 100) : 0;

        document.getElementById('owned-count').textContent = ownedCount;
        document.getElementById('total-count').textContent = totalCards;
        document.getElementById('completion-percentage').textContent = percentage;
        document.getElementById('progress-fill').style.width = `${percentage}%`;

        // Calculate total value
        let totalValue = 0;
        this.ownedCards.forEach(key => {
            const price = this.cardPrices.get(key);
            if (price) totalValue += price;
        });
        document.getElementById('total-value').textContent = `$${totalValue.toFixed(2)}`;
    }

    renderStatistics() {
        this.renderStatsByType();
        this.renderStatsByRarity();
        this.renderStatsByCategory();
        this.renderVisualStats();
        this.renderMissingCards();
    }

    renderStatsByType() {
        const typeStats = {};
        this.cards.forEach(card => {
            if (!typeStats[card.type]) {
                typeStats[card.type] = { total: 0, owned: 0 };
            }
            typeStats[card.type].total++;
            if (this.ownedCards.has(card.number)) {
                typeStats[card.type].owned++;
            }
        });

        const container = document.getElementById('stats-by-type');
        container.innerHTML = Object.entries(typeStats)
            .sort((a, b) => b[1].total - a[1].total)
            .map(([type, stats]) => `
                <div class="stat-item">
                    <span class="stat-label">
                        <span class="stat-badge" style="background-color: ${TYPE_COLORS[type]}"></span>
                        ${type}
                    </span>
                    <span class="stat-value">${stats.owned} / ${stats.total}</span>
                </div>
            `).join('');
    }

    renderStatsByRarity() {
        const rarityStats = {};
        this.cards.forEach(card => {
            if (!rarityStats[card.rarity]) {
                rarityStats[card.rarity] = { total: 0, owned: 0 };
            }
            rarityStats[card.rarity].total++;
            if (this.ownedCards.has(card.number)) {
                rarityStats[card.rarity].owned++;
            }
        });

        const container = document.getElementById('stats-by-rarity');
        container.innerHTML = Object.entries(rarityStats)
            .sort((a, b) => (RARITY_ORDER[b[0]] || 0) - (RARITY_ORDER[a[0]] || 0))
            .map(([rarity, stats]) => `
                <div class="stat-item">
                    <span class="stat-label">${rarity}</span>
                    <span class="stat-value">${stats.owned} / ${stats.total}</span>
                </div>
            `).join('');
    }

    renderStatsByCategory() {
        const categoryStats = {};
        this.cards.forEach(card => {
            if (!categoryStats[card.category]) {
                categoryStats[card.category] = { total: 0, owned: 0 };
            }
            categoryStats[card.category].total++;
            if (this.ownedCards.has(card.number)) {
                categoryStats[card.category].owned++;
            }
        });

        const container = document.getElementById('stats-by-category');
        container.innerHTML = Object.entries(categoryStats)
            .map(([category, stats]) => `
                <div class="stat-item">
                    <span class="stat-label">${category}</span>
                    <span class="stat-value">${stats.owned} / ${stats.total}</span>
                </div>
            `).join('');
    }

    renderVisualStats() {
        const container = document.getElementById('visual-stats');
        container.innerHTML = this.cards.map(card => {
            const isOwned = this.ownedCards.has(card.number);
            return `
                <div class="visual-card ${isOwned ? 'owned' : ''}"
                     data-card-number="${card.number}"
                     title="${card.name} - ${isOwned ? 'Owned' : 'Not owned'}">
                    <img src="${card.imageUrl}"
                         alt="${card.name}"
                         onerror="this.style.display='none';">
                </div>
            `;
        }).join('');

        // Add click listeners
        container.querySelectorAll('.visual-card').forEach(card => {
            card.addEventListener('click', (e) => {
                this.showCardDetail(e.currentTarget.dataset.cardNumber);
            });
        });
    }

    renderMissingCards() {
        const missingCards = this.cards.filter(card => !this.ownedCards.has(card.number));
        const container = document.getElementById('missing-cards-list');

        if (missingCards.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; padding: 2rem; grid-column: 1/-1;">
                    <h3>🎉 Congratulations!</h3>
                    <p>You've collected all cards in the ${CARD_SETS[this.currentSet].name} set!</p>
                </div>
            `;
            return;
        }

        container.innerHTML = missingCards.map((card, index) => this.createCardHTML(card, index)).join('');

        // Add event listeners
        container.querySelectorAll('.card-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                e.stopPropagation();
                const cardNumber = e.target.dataset.cardNumber;
                const variant = e.target.dataset.variant; // Will be undefined for single-variant cards
                this.toggleCardOwnership(cardNumber, variant);
            });
        });

        container.querySelectorAll('.card-item').forEach(cardEl => {
            cardEl.addEventListener('click', (e) => {
                if (!e.target.classList.contains('card-checkbox')) {
                    this.showCardDetail(cardEl.dataset.cardNumber);
                }
            });
        });
    }

    // Gallery View
    renderGallery(category) {
        // Update gallery subtitle with current set name
        const subtitle = document.querySelector('.gallery-subtitle');
        if (subtitle) {
            subtitle.textContent = `Browse all cards in the ${CARD_SETS[this.currentSet].name} set`;
        }

        const container = document.getElementById('gallery-grid');
        let filteredCards = this.cards;

        if (category !== 'all') {
            filteredCards = this.cards.filter(card => card.category === category);
        }

        container.innerHTML = filteredCards.map(card => {
            const isOwned = this.ownedCards.has(card.number);
            const typeColor = TYPE_COLORS[card.type] || '#999';

            return `
                <div class="gallery-card ${isOwned ? 'owned' : ''}" data-card-number="${card.number}">
                    <div class="card-image-container">
                        <img src="${card.imageUrl}"
                             alt="${card.name}"
                             class="card-image"
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                        <div class="card-placeholder" style="display: none;">
                            <div class="card-number">#${card.number}</div>
                            <div>${card.type}</div>
                        </div>
                    </div>
                    <div class="card-info">
                        <div class="card-header">
                            <span class="card-number-badge">#${card.number}</span>
                            <span class="card-type-badge" style="background-color: ${typeColor}">
                                ${card.type}
                            </span>
                        </div>
                        <div class="card-name">${card.name}</div>
                        <div class="card-rarity">${card.rarity}</div>
                    </div>
                </div>
            `;
        }).join('');

        // Add click listeners
        container.querySelectorAll('.gallery-card').forEach(cardEl => {
            cardEl.addEventListener('click', () => {
                this.showCardDetail(cardEl.dataset.cardNumber);
            });
        });
    }

    // Modal
    showCardDetail(cardNumber) {
        const card = this.cards.find(c => c.number === cardNumber);
        if (!card) return;

        const hasVariants = this.cardHasVariants(card);

        // Check ownership for variants
        let isOwned, ownershipStatus, priceDisplay;
        if (hasVariants) {
            const isOwnedNormal = this.ownedCards.has(`${cardNumber}-normal`);
            const isOwnedReverseHolo = this.ownedCards.has(`${cardNumber}-reverseHolo`);
            const priceNormal = this.cardPrices.get(`${cardNumber}-normal`);
            const priceReverseHolo = this.cardPrices.get(`${cardNumber}-reverseHolo`);

            isOwned = isOwnedNormal || isOwnedReverseHolo;

            // Determine the correct label for the first variant
            const firstVariantLabel = card.rarity === 'Rare' ? 'Holofoil' : 'Non-foil';

            // Show ownership status for both variants
            if (isOwnedNormal && isOwnedReverseHolo) {
                ownershipStatus = '✅ Both variants owned';
            } else if (isOwnedNormal) {
                ownershipStatus = `✅ ${firstVariantLabel} owned | ❌ Reverse Holo needed`;
            } else if (isOwnedReverseHolo) {
                ownershipStatus = `❌ ${firstVariantLabel} needed | ✅ Reverse Holo owned`;
            } else {
                ownershipStatus = '❌ Neither variant owned';
            }

            // Display prices for both variants
            priceDisplay = `
                <p><strong>Estimated Prices:</strong></p>
                <ul style="margin: 0.5rem 0; padding-left: 1.5rem;">
                    <li><strong>${firstVariantLabel}:</strong> ${priceNormal ? `$${priceNormal.toFixed(2)}` : 'Loading...'}</li>
                    <li><strong>Reverse Holo:</strong> ${priceReverseHolo ? `$${priceReverseHolo.toFixed(2)}` : 'Loading...'}</li>
                </ul>
            `;
        } else {
            isOwned = this.ownedCards.has(cardNumber);
            const price = this.cardPrices.get(cardNumber);
            ownershipStatus = isOwned ? '✅ Owned' : '❌ Not owned';
            priceDisplay = `<p><strong>Estimated Price:</strong> ${price ? `$${price.toFixed(2)}` : 'Loading...'}</p>`;
        }

        const typeColor = TYPE_COLORS[card.type] || '#999';

        // Generate pricing links based on current set
        const cardNameEncoded = encodeURIComponent(card.name);
        const currentSetInfo = CARD_SETS[this.currentSet];
        const setNameEncoded = encodeURIComponent(currentSetInfo.name);
        const setCode = currentSetInfo.code.toLowerCase();

        let pricingLinks;
        if (this.currentSet === 'phantasmal-flames') {
            pricingLinks = {
                tcgplayer: `https://www.tcgplayer.com/search/pokemon/me02-phantasmal-flames?productLineName=pokemon&q=${cardNameEncoded}&view=grid`,
                pricecharting: `https://www.pricecharting.com/search-products?type=prices&q=phantasmal+flames+${cardNameEncoded}`,
                tcgcollector: `https://www.tcgcollector.com/cards?cardName=${cardNameEncoded}&setName=${setNameEncoded}`,
                ebay: `https://www.ebay.com/sch/i.html?_nkw=pokemon+phantasmal+flames+${cardNameEncoded}`
            };
        } else if (this.currentSet === 'scarlet-violet') {
            pricingLinks = {
                tcgplayer: `https://www.tcgplayer.com/search/pokemon/scarlet-violet-base-set?productLineName=pokemon&q=${cardNameEncoded}&view=grid`,
                pricecharting: `https://www.pricecharting.com/search-products?type=prices&q=scarlet+violet+${cardNameEncoded}`,
                tcgcollector: `https://www.tcgcollector.com/cards?cardName=${cardNameEncoded}&setName=${setNameEncoded}`,
                ebay: `https://www.ebay.com/sch/i.html?_nkw=pokemon+scarlet+violet+${cardNameEncoded}`
            };
        } else {
            // Generic pricing links for any future sets
            pricingLinks = {
                tcgplayer: `https://www.tcgplayer.com/search/pokemon/product?productLineName=pokemon&q=${cardNameEncoded}`,
                pricecharting: `https://www.pricecharting.com/search-products?type=prices&q=${setNameEncoded}+${cardNameEncoded}`,
                tcgcollector: `https://www.tcgcollector.com/cards?cardName=${cardNameEncoded}&setName=${setNameEncoded}`,
                ebay: `https://www.ebay.com/sch/i.html?_nkw=pokemon+${setNameEncoded}+${cardNameEncoded}`
            };
        }

        const modalContent = document.getElementById('modal-card-detail');
        modalContent.innerHTML = `
            <div class="card-image-container" style="max-width: 400px; margin: 0 auto; padding-top: 0; height: auto;">
                <img src="${card.imageUrl}"
                     alt="${card.name}"
                     class="modal-card-image"
                     style="position: static; width: 100%; height: auto; border-radius: 8px;"
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <div class="card-placeholder" style="display: none;">
                    <div class="card-number">#${card.number}</div>
                    <div>${card.type}</div>
                </div>
            </div>
            <h2 style="margin-top: 1rem;">${card.name}</h2>
            <p><strong>Card Number:</strong> #${card.number}</p>
            <p><strong>Type:</strong> <span style="color: ${typeColor}; font-weight: bold;">${card.type}</span></p>
            <p><strong>Rarity:</strong> ${card.rarity}</p>
            <p><strong>Category:</strong> ${card.category}</p>
            ${priceDisplay}
            <p><strong>Status:</strong> ${ownershipStatus}</p>

            <div style="margin-top: 1.5rem; padding: 1rem; background: #f3f4f6; border-radius: 8px;">
                <p style="font-weight: 600; margin-bottom: 0.75rem; font-size: 0.95rem;">💰 Check Current Market Prices:</p>
                <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                    <a href="${pricingLinks.tcgplayer}" target="_blank" rel="noopener noreferrer"
                       style="padding: 0.5rem 1rem; background: #5E9ED6; color: white; text-decoration: none;
                              border-radius: 6px; font-weight: 600; text-align: center; font-size: 0.9rem;">
                        🎴 TCGPlayer
                    </a>
                    <a href="${pricingLinks.pricecharting}" target="_blank" rel="noopener noreferrer"
                       style="padding: 0.5rem 1rem; background: #FF6B35; color: white; text-decoration: none;
                              border-radius: 6px; font-weight: 600; text-align: center; font-size: 0.9rem;">
                        📈 PriceCharting
                    </a>
                    <a href="${pricingLinks.tcgcollector}" target="_blank" rel="noopener noreferrer"
                       style="padding: 0.5rem 1rem; background: #7EC850; color: white; text-decoration: none;
                              border-radius: 6px; font-weight: 600; text-align: center; font-size: 0.9rem;">
                        📊 TCG Collector
                    </a>
                    <a href="${pricingLinks.ebay}" target="_blank" rel="noopener noreferrer"
                       style="padding: 0.5rem 1rem; background: #E53238; color: white; text-decoration: none;
                              border-radius: 6px; font-weight: 600; text-align: center; font-size: 0.9rem;">
                        🛒 eBay Listings
                    </a>
                </div>
                <p style="font-size: 0.75rem; color: #6B7280; margin-top: 0.75rem; margin-bottom: 0;">
                    Links open in new tab. Prices may vary by condition and seller.
                </p>
            </div>

            <button onclick="app.toggleCardOwnership('${cardNumber}'); app.showCardDetail('${cardNumber}'); app.renderCards();"
                    style="margin-top: 1.5rem; padding: 0.75rem 1.5rem; background: ${isOwned ? '#EF4444' : '#7EC850'};
                           color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; width: 100%;">
                ${isOwned ? 'Remove from Collection' : 'Add to Collection'}
            </button>
        `;

        document.getElementById('card-modal').classList.add('active');
    }

    closeModal() {
        document.getElementById('card-modal').classList.remove('active');
    }

    // Settings Management
    loadSettingsUI() {
        const apiKey = localStorage.getItem('justtcg_api_key') || '';
        const apiKeyInput = document.getElementById('justtcg-api-key');
        const useLivePricing = localStorage.getItem('use_live_pricing') !== 'false';
        const cachePrices = localStorage.getItem('cache_prices') !== 'false';

        apiKeyInput.value = apiKey;
        document.getElementById('use-live-pricing').checked = useLivePricing;
        document.getElementById('cache-prices').checked = cachePrices;

        this.updateApiStatus();
    }

    saveApiKey() {
        const apiKeyInput = document.getElementById('justtcg-api-key');
        const apiKey = apiKeyInput.value.trim();

        if (!apiKey) {
            alert('Please enter an API key');
            return;
        }

        localStorage.setItem('justtcg_api_key', apiKey);
        localStorage.setItem('use_live_pricing', document.getElementById('use-live-pricing').checked);
        localStorage.setItem('cache_prices', document.getElementById('cache-prices').checked);

        this.updateApiStatus(true);
        alert('API key saved successfully! Prices will be refreshed on next load.');
    }

    removeApiKey() {
        if (confirm('Are you sure you want to remove the API key? The app will fall back to static pricing data.')) {
            localStorage.removeItem('justtcg_api_key');
            document.getElementById('justtcg-api-key').value = '';
            this.updateApiStatus();
            alert('API key removed. The app will use static pricing data.');
        }
    }

    toggleApiKeyVisibility() {
        const apiKeyInput = document.getElementById('justtcg-api-key');
        const button = document.getElementById('toggle-api-key-visibility');

        if (apiKeyInput.type === 'password') {
            apiKeyInput.type = 'text';
            button.textContent = '🙈';
        } else {
            apiKeyInput.type = 'password';
            button.textContent = '👁️';
        }
    }

    updateApiStatus(success = null) {
        const statusElement = document.getElementById('api-status');
        const statusText = document.getElementById('api-status-text');
        const apiKey = localStorage.getItem('justtcg_api_key');

        statusElement.classList.remove('success', 'error');

        if (success === true) {
            statusElement.classList.add('success');
            statusText.textContent = '✅ API key configured and saved';
        } else if (success === false) {
            statusElement.classList.add('error');
            statusText.textContent = '❌ API key is invalid or request failed';
        } else if (apiKey) {
            statusElement.classList.add('success');
            statusText.textContent = '✅ API key configured';
        } else {
            statusText.textContent = '⚠️ No API key configured - using static pricing';
        }
    }

    // JustTCG API Integration
    async fetchFromJustTCG(setName, cardName) {
        const apiKey = localStorage.getItem('justtcg_api_key');
        if (!apiKey) {
            return null;
        }

        try {
            const setNameFormatted = this.formatSetNameForAPI(setName);
            const url = `https://api.justtcg.com/v1/cards?game=pokemon&q=${encodeURIComponent(cardName)}&set=${encodeURIComponent(setNameFormatted)}&limit=5`;

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'x-api-key': apiKey,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                console.error(`JustTCG API error: ${response.status} ${response.statusText}`);
                return null;
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching from JustTCG API:', error);
            return null;
        }
    }

    formatSetNameForAPI(setKey) {
        // Map internal set keys to JustTCG API set names
        const setMapping = {
            'phantasmal-flames': 'Phantasmal Flames',
            'mega-evolution': 'Mega Evolution',
            'pokemon-go': 'Pokemon GO',
            'scarlet-violet-alt': 'Scarlet & Violet',
            'paldea-evolved': 'Paldea Evolved',
            'obsidian-flames': 'Obsidian Flames',
            'sv-151': '151',
            'paradox-rift': 'Paradox Rift',
            'paldean-fates': 'Paldean Fates',
            'temporal-forces': 'Temporal Forces',
            'twilight-masquerade': 'Twilight Masquerade',
            'shrouded-fable': 'Shrouded Fable',
            'stellar-crown': 'Stellar Crown',
            'surging-sparks': 'Surging Sparks',
            'prismatic-evolutions': 'Prismatic Evolutions',
            'journey-together': 'Journey Together',
            'destined-rivals': 'Destined Rivals'
        };
        return setMapping[setKey] || setKey;
    }

    extractPriceFromJustTCG(apiData, condition = 'NM') {
        if (!apiData || !apiData.data || apiData.data.length === 0) {
            return null;
        }

        // Get the first card match
        const card = apiData.data[0];

        // Try to get the market price for the specified condition
        if (card.prices && card.prices.market) {
            if (card.prices.market[condition]) {
                return parseFloat(card.prices.market[condition]);
            }
            // Fallback to any available price
            const prices = Object.values(card.prices.market);
            if (prices.length > 0 && prices[0]) {
                return parseFloat(prices[0]);
            }
        }

        return null;
    }

    // Price Fetching
    async fetchPrices() {
        const PRICE_VERSION = 'v13.0'; // Updated to v13.0 - fixed generic duplicate pricing for all sets
        const lastUpdate = localStorage.getItem('priceLastUpdate');
        const priceVersion = localStorage.getItem('priceVersion');
        const now = Date.now();
        const cachePrices = localStorage.getItem('cache_prices') !== 'false';

        // Check if we should use cached prices
        const cacheValid = cachePrices &&
                          lastUpdate &&
                          priceVersion === PRICE_VERSION &&
                          (now - parseInt(lastUpdate)) < 24 * 60 * 60 * 1000;

        if (cacheValid && this.cardPrices.size > 0) {
            // Use cached prices
            this.renderCards();
            return;
        }

        // Clear old cached prices if version changed
        if (priceVersion !== PRICE_VERSION) {
            console.log('Updating to new pricing system v12.0 with JustTCG API...');
            this.cardPrices.clear();
        }

        const apiKey = localStorage.getItem('justtcg_api_key');
        const useLivePricing = localStorage.getItem('use_live_pricing') !== 'false';
        const useJustTCG = apiKey && useLivePricing;

        console.log(`Fetching prices... ${useJustTCG ? 'Using JustTCG API' : 'Using static pricing'}`);

        if (useJustTCG) {
            // Try to fetch prices from JustTCG API
            await this.fetchPricesFromJustTCG();
        } else {
            // Fall back to static pricing
            await this.fetchPricesStatic();
        }

        localStorage.setItem('priceLastUpdate', now.toString());
        localStorage.setItem('priceVersion', PRICE_VERSION);
        this.saveToLocalStorage();
        this.renderCards();
        this.updateStats();
    }

    async fetchPricesFromJustTCG() {
        console.log('🌐 Fetching real-time prices from JustTCG API...');

        const currentSetPricing = CARD_PRICING[this.currentSet] || {};
        let successCount = 0;
        let failCount = 0;

        // Process cards in batches to avoid rate limiting
        const batchSize = 5;
        for (let i = 0; i < this.cards.length; i += batchSize) {
            const batch = this.cards.slice(i, i + batchSize);

            await Promise.all(batch.map(async (card) => {
                try {
                    // Try to fetch from JustTCG API
                    const apiData = await this.fetchFromJustTCG(this.currentSet, card.name);
                    const hasVariants = this.cardHasVariants(card);

                    if (apiData && apiData.data && apiData.data.length > 0) {
                        // Successfully got API data
                        const apiPrice = this.extractPriceFromJustTCG(apiData);

                        if (apiPrice !== null && apiPrice > 0) {
                            // Use API price
                            if (hasVariants) {
                                // For variant cards, use API price for normal, estimate reverse holo
                                this.cardPrices.set(`${card.number}-normal`, parseFloat(apiPrice.toFixed(2)));
                                this.cardPrices.set(`${card.number}-reverseHolo`, parseFloat((apiPrice * 1.5).toFixed(2)));
                            } else {
                                this.cardPrices.set(card.number, parseFloat(apiPrice.toFixed(2)));
                            }
                            successCount++;
                            return;
                        }
                    }

                    // Fallback to static price for this card
                    this.setStaticPriceForCard(card, currentSetPricing);
                    failCount++;
                } catch (error) {
                    console.error(`Error fetching price for ${card.name}:`, error);
                    this.setStaticPriceForCard(card, currentSetPricing);
                    failCount++;
                }
            }));

            // Small delay between batches to be nice to the API
            if (i + batchSize < this.cards.length) {
                await new Promise(resolve => setTimeout(resolve, 100));
            }
        }

        console.log(`✅ JustTCG API: ${successCount} cards from API, ${failCount} from static data`);
    }

    async fetchPricesStatic() {
        console.log('📦 Loading static pricing data...');

        // Simulate API delay for UX
        await new Promise(resolve => setTimeout(resolve, 300));

        const currentSetPricing = CARD_PRICING[this.currentSet] || {};

        this.cards.forEach(card => {
            this.setStaticPriceForCard(card, currentSetPricing);
        });

        console.log('✅ Static prices loaded');
    }

    setStaticPriceForCard(card, pricingData) {
        const priceData = pricingData[card.number];
        const hasVariants = this.cardHasVariants(card);

        if (hasVariants && typeof priceData === 'object') {
            // Store prices for both variants
            const normalPrice = priceData.normal || 0.15;
            const reverseHoloPrice = priceData.reverseHolo || 0.25;
            this.cardPrices.set(`${card.number}-normal`, parseFloat(normalPrice.toFixed(2)));
            this.cardPrices.set(`${card.number}-reverseHolo`, parseFloat(reverseHoloPrice.toFixed(2)));
        } else {
            // Single variant cards (Double Rare, Ultra Rare, etc.)
            const price = typeof priceData === 'number' ? priceData : (priceData?.normal || 0.15);
            this.cardPrices.set(card.number, parseFloat(price.toFixed(2)));
        }
    }

    // Force refresh prices (manual cache clear)
    async forceRefreshPrices() {
        console.log('🔄 Force refreshing prices...');

        // Clear all price-related cache
        localStorage.removeItem('priceLastUpdate');
        localStorage.removeItem('priceVersion');
        this.cardPrices.clear();

        // Show loading message
        const btn = document.getElementById('refresh-prices-btn');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span class="icon">⏳</span> Loading...';
        btn.disabled = true;

        // Reload prices
        await this.fetchPrices();

        // Restore button
        btn.innerHTML = '<span class="icon">✅</span> Prices Updated!';
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
        }, 2000);

        const apiKey = localStorage.getItem('justtcg_api_key');
        const useLivePricing = localStorage.getItem('use_live_pricing') !== 'false';

        console.log('✅ Prices refreshed successfully!');

        if (apiKey && useLivePricing) {
            alert('Prices updated successfully from JustTCG API!\n\nReal-time pricing is now active.');
        } else {
            alert('Prices updated successfully from static pricing data!\n\nTip: Configure a JustTCG API key in Settings for real-time pricing.');
        }
    }

    // Export/Import functionality - backs up ALL sets
    exportCollection() {
        // Collect data from all sets
        const allSetsData = {};
        const setNames = [
            'mega-evolution', 'phantasmal-flames', 'pokemon-go',
            'scarlet-violet-alt', 'paldea-evolved', 'obsidian-flames', 'sv-151',
            'paradox-rift', 'paldean-fates', 'temporal-forces', 'twilight-masquerade',
            'shrouded-fable', 'stellar-crown', 'surging-sparks', 'prismatic-evolutions',
            'journey-together', 'destined-rivals'
        ];

        setNames.forEach(setCode => {
            const storageKey = `cardCollection_${setCode}`;
            const savedData = localStorage.getItem(storageKey);
            if (savedData) {
                try {
                    const parsed = JSON.parse(savedData);
                    allSetsData[setCode] = {
                        setName: CARD_SETS[setCode].name,
                        ownedCards: parsed.ownedCards || [],
                        lastUpdated: parsed.lastUpdated
                    };
                } catch (e) {
                    console.error(`Error parsing ${setCode}:`, e);
                }
            }
        });

        const backup = {
            exportDate: new Date().toISOString(),
            version: '1.0',
            appVersion: 'v10.0',
            totalSets: Object.keys(allSetsData).length,
            sets: allSetsData
        };

        const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        const dateStr = new Date().toISOString().split('T')[0];
        a.download = `pokemon-collection-backup-${dateStr}.json`;
        a.click();
        URL.revokeObjectURL(url);

        // Show success message
        const totalCards = Object.values(allSetsData).reduce((sum, set) => sum + set.ownedCards.length, 0);
        alert(`✅ Backup exported successfully!\n\nSets included: ${Object.keys(allSetsData).length}\nTotal cards: ${totalCards}\n\nFile: pokemon-collection-backup-${dateStr}.json`);
    }

    importCollection(file) {
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const backup = JSON.parse(e.target.result);

                // Validate backup format
                if (!backup.sets || typeof backup.sets !== 'object') {
                    alert('❌ Invalid backup file format.\n\nPlease select a valid Pokemon collection backup file.');
                    return;
                }

                // Confirm before overwriting
                const setCount = Object.keys(backup.sets).length;
                const totalCards = Object.values(backup.sets).reduce((sum, set) => sum + (set.ownedCards?.length || 0), 0);

                const confirmed = confirm(
                    `📥 Import Collection Backup?\n\n` +
                    `Sets: ${setCount}\n` +
                    `Total cards: ${totalCards}\n` +
                    `Export date: ${new Date(backup.exportDate).toLocaleDateString()}\n\n` +
                    `⚠️ This will overwrite your current collection data.\n\n` +
                    `Continue?`
                );

                if (!confirmed) return;

                // Restore all sets
                let restoredSets = 0;
                let restoredCards = 0;

                Object.keys(backup.sets).forEach(setCode => {
                    const setData = backup.sets[setCode];
                    if (setData.ownedCards && Array.isArray(setData.ownedCards)) {
                        const storageKey = `cardCollection_${setCode}`;
                        const saveData = {
                            ownedCards: setData.ownedCards,
                            lastUpdated: new Date().toISOString()
                        };
                        localStorage.setItem(storageKey, JSON.stringify(saveData));
                        restoredSets++;
                        restoredCards += setData.ownedCards.length;
                    }
                });

                // Reload current set data
                this.loadFromLocalStorage();
                this.renderCards();
                this.updateStats();

                // Clear file input
                document.getElementById('import-file-input').value = '';

                alert(`✅ Collection restored successfully!\n\nSets restored: ${restoredSets}\nCards restored: ${restoredCards}\n\nYour collection has been updated!`);

            } catch (error) {
                console.error('Import error:', error);
                alert('❌ Error importing collection.\n\nPlease check the file format and try again.');
            }
        };
        reader.readAsText(file);
    }

    // Update footer to show API status
    updateFooterApiStatus() {
        const footerNote = document.querySelector('.footer-note');
        if (!footerNote) return;

        const apiKey = localStorage.getItem('justtcg_api_key');
        const useLivePricing = localStorage.getItem('use_live_pricing') !== 'false';

        if (apiKey && useLivePricing) {
            footerNote.innerHTML = '🌐 Real-time pricing powered by <a href="https://justtcg.com" target="_blank" rel="noopener" style="color: #7EC850; text-decoration: none;">JustTCG API</a>';
        } else {
            footerNote.textContent = '📦 Card prices from static pricing data';
        }
    }
}

// Initialize the application when DOM is loaded
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new CardTracker();
    console.log('Pokemon Card Collection Tracker initialized');
});
