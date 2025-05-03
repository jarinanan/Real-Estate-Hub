// Sample property data
const properties = [
    {
        id: 1,
        title: "Modern Family Home",
        address: "123 Main Street, Cityville",
        price: 450000,
        type: "house",
        badge: "Featured",
        image: "https://picsum.photos/id/1040/600/400",
        bedrooms: 4,
        bathrooms: 3,
        sqft: 2200,
        isNew: true,
        forSale: true,
        forRent: false,
        location: "Cityville",
        region: "suburban"
    },
    {
        id: 2,
        title: "Cozy Suburban Home",
        address: "456 Oak Avenue, Townsburg",
        price: 375000,
        type: "house",
        badge: "Sale",
        image: "https://picsum.photos/id/1029/600/400",
        bedrooms: 3,
        bathrooms: 2,
        sqft: 1800,
        isNew: false,
        forSale: true,
        forRent: false,
        location: "Townsburg",
        region: "suburban"
    },
    {
        id: 3,
        title: "Luxury City Apartment",
        address: "789 Skyline Drive, Downtown",
        price: 2500,
        type: "apartment",
        badge: "Rent",
        image: "https://picsum.photos/id/1031/600/400",
        bedrooms: 2,
        bathrooms: 2,
        sqft: 1200,
        isNew: false,
        forSale: false,
        forRent: true,
        location: "Downtown",
        region: "downtown"
    },
    {
        id: 4,
        title: "Spacious Country Villa",
        address: "101 Country Road, Ruralville",
        price: 550000,
        type: "house",
        badge: "Sale",
        image: "https://picsum.photos/id/1048/600/400",
        bedrooms: 5,
        bathrooms: 4,
        sqft: 3500,
        isNew: true,
        forSale: true,
        forRent: false,
        location: "Ruralville",
        region: "rural"
    },
    {
        id: 5,
        title: "Urban Loft Condo",
        address: "202 Loft Avenue, Metroville",
        price: 320000,
        type: "condo",
        badge: "Sale",
        image: "https://picsum.photos/id/1052/600/400",
        bedrooms: 1,
        bathrooms: 1,
        sqft: 950,
        isNew: true,
        forSale: true,
        forRent: false,
        location: "Metroville",
        region: "downtown"
    },
    {
        id: 6,
        title: "Beachfront Townhouse",
        address: "303 Coastal Drive, Beachburg",
        price: 4200,
        type: "townhouse",
        badge: "Rent",
        image: "https://picsum.photos/id/1053/600/400",
        bedrooms: 3,
        bathrooms: 2.5,
        sqft: 1650,
        isNew: false,
        forSale: false,
        forRent: true,
        location: "Beachburg",
        region: "coastal"
    },
    {
        id: 7,
        title: "Mountain View Cabin",
        address: "404 Mountain Trail, Highlands",
        price: 290000,
        type: "house",
        badge: "Sale",
        image: "https://picsum.photos/id/1054/600/400",
        bedrooms: 2,
        bathrooms: 1,
        sqft: 1100,
        isNew: false,
        forSale: true,
        forRent: false,
        location: "Highlands",
        region: "mountain"
    },
    {
        id: 8,
        title: "Condo City Views",
        address: "505 Downtown Blvd, Los Angeles",
        price: 625000,
        type: "condo",
        badge: "Sale",
        image: "https://picsum.photos/id/1055/600/400",
        bedrooms: 2,
        bathrooms: 2,
        sqft: 1150,
        isNew: true,
        forSale: true,
        forRent: false,
        location: "Los Angeles",
        region: "downtown"
    },
    {
        id: 9,
        title: "Apartment in City Center",
        address: "606 Central Ave, Chicago",
        price: 3500,
        type: "apartment",
        badge: "Rent",
        image: "https://picsum.photos/id/1056/600/400",
        bedrooms: 3,
        bathrooms: 2,
        sqft: 1800,
        isNew: true,
        forSale: false,
        forRent: true,
        location: "Chicago",
        region: "downtown"
    }
];

// Generate search data from properties
const searchData = [];

// Add locations
properties.forEach(property => {
    // Add location if not already in searchData
    if (!searchData.some(item => item.value === property.location && item.type === 'location')) {
        searchData.push({
            value: property.location,
            type: 'location',
            display: property.location
        });
    }

    // Add property title
    searchData.push({
        value: property.title,
        type: 'property',
        display: property.title,
        id: property.id
    });

    // Add property address
    searchData.push({
        value: property.address,
        type: 'address',
        display: property.address,
        id: property.id
    });

    // Add region if not already in searchData
    if (!searchData.some(item => item.value === property.region && item.type === 'region')) {
        searchData.push({
            value: property.region,
            type: 'region',
            display: property.region.charAt(0).toUpperCase() + property.region.slice(1)
        });
    }
});

// DOM references
const homeSearchInput = document.getElementById('homeSearchInput');
const searchInput = document.getElementById('searchInput');
const homeSuggestions = document.getElementById('homeSuggestions');
const suggestions = document.getElementById('suggestions');
const featuredListings = document.getElementById('propertyListings');
const allListings = document.getElementById('allPropertyListings');
const themeToggle = document.getElementById('themeToggle');

// Mobile menu elements
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.overlay');
const mobileMenuClose = document.querySelector('.mobile-menu-close');

// Function to show a section
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(sectionId + 'Section').classList.add('active');

    // Update active nav links (both desktop and mobile)
    document.querySelectorAll('.nav-menu a, .mobile-nav a').forEach(link => {
        link.classList.remove('active');
    });

    const navElement = document.getElementById(sectionId + 'Nav');
    const mobileNavElement = document.getElementById('mobile' + sectionId.charAt(0).toUpperCase() + sectionId.slice(1) + 'Nav');

    if (navElement) {
        navElement.classList.add('active');
    }

    if (mobileNavElement) {
        mobileNavElement.classList.add('active');
    }

    // Render properties based on section
    if (sectionId === 'listings') {
        renderProperties(properties, allListings);
    } else if (sectionId === 'home') {
        renderFeaturedProperties();
    } else if (sectionId === 'favorites') {
        renderFavorites();
    }
}

// Function to populate suggestions with improved autocomplete
function populateSuggestions(input, suggestionsContainer) {
    const query = input.value.toLowerCase();

    if (!query) {
        suggestionsContainer.style.display = 'none';
        return;
    }

    const matchingItems = searchData.filter(item =>
        item.value.toLowerCase().includes(query)
    );

    suggestionsContainer.innerHTML = '';

    if (matchingItems.length === 0) {
        suggestionsContainer.style.display = 'none';
        return;
    }

    matchingItems.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `${item.display} <span class="suggestion-category">${getCategoryLabel(item.type)}</span>`;

        div.addEventListener('click', function () {
            input.value = item.display;
            suggestionsContainer.style.display = 'none';

            // If searching from home, redirect to listings with the search applied
            if (input.id === 'homeSearchInput') {
                showSection('listings');
                searchInput.value = item.display;

                // Apply appropriate filters based on search type
                if (item.type === 'region') {
                    document.getElementById('listingRegion').value = item.value;
                }
            }

            filterProperties();
        });

        suggestionsContainer.appendChild(div);
    });

    suggestionsContainer.style.display = 'block';
}

// Helper function to get user-friendly category labels
function getCategoryLabel(type) {
    switch (type) {
        case 'location': return 'City';
        case 'property': return 'Property';
        case 'address': return 'Address';
        case 'region': return 'Region';
        default: return type;
    }
}

// Function to render properties
function renderProperties(filteredProperties, targetElement = allListings) {
    targetElement.innerHTML = '';

    if (filteredProperties.length === 0) {
        targetElement.innerHTML = '<p style="text-align: center; padding: 30px;">No properties match your criteria. Please try different filters.</p>';
        return;
    }

    // Get favorites from localStorage
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    filteredProperties.forEach(property => {
        const propertyCard = document.createElement('div');
        propertyCard.className = `property-card ${property.isNew ? 'new-listing' : ''}`;

        // Check if this property is in favorites
        const isFavorite = favorites.includes(property.id);

        propertyCard.innerHTML = `
            <div class="property-image">
                <img src="${property.image}" alt="${property.title}">
                <div class="property-badge">${property.badge}</div>
                <div class="property-price">${property.forRent ? '$' + property.price + '/mo' : '$' + property.price.toLocaleString()}</div>
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-id="${property.id}">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
            <div class="property-info">
                <h3 class="property-title">${property.title}</h3>
                <div class="property-address">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${property.address}</span>
                </div>
                <div class="property-features">
                    <div class="feature">
                        <i class="fas fa-bed"></i>
                        <span>${property.bedrooms} Beds</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-bath"></i>
                        <span>${property.bathrooms} Baths</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-ruler-combined"></i>
                        <span>${property.sqft} sqft</span>
                    </div>
                </div>
            </div>
        `;

        targetElement.appendChild(propertyCard);

        // Add click event for the favorite button
        const favoriteBtn = propertyCard.querySelector('.favorite-btn');
        favoriteBtn.addEventListener('click', function (e) {
            e.stopPropagation(); // Prevent card click event
            toggleFavorite(property.id);
        });
    });
}

// Function to render featured properties on the home page
function renderFeaturedProperties() {
    const featuredContainer = document.querySelector('.featured-section .listings');
    featuredContainer.innerHTML = '';

    // Get 3 random properties for featured section
    const featured = [...properties].sort(() => 0.5 - Math.random()).slice(0, 3);
    renderProperties(featured, featuredListings);
}

// Filter properties based on current selections
function filterProperties() {
    // Determine which section we're filtering from
    const isHomeSection = document.getElementById('homeSection').classList.contains('active');

    // Get filter values based on current section
    const searchValue = isHomeSection ?
        document.getElementById('homeSearchInput').value.toLowerCase() :
        document.getElementById('searchInput').value.toLowerCase();

    const typeFilter = isHomeSection ?
        document.getElementById('propertyType').value :
        document.getElementById('listingType').value;

    const regionFilter = isHomeSection ?
        document.getElementById('regionFilter').value :
        document.getElementById('listingRegion').value;

    const priceFilter = isHomeSection ?
        document.getElementById('priceRange').value :
        document.getElementById('listingPrice').value;

    const bedroomsFilter = isHomeSection ?
        document.getElementById('bedrooms').value :
        document.getElementById('listingBeds').value;

    const bathroomsFilter = isHomeSection ?
        document.getElementById('bathrooms').value :
        null;

    // Direct DOM access for checkbox state
    const newOnlyFilter = isHomeSection ?
        document.getElementById('newListings').checked :
        document.getElementById('listingNewOnly').checked;

    console.log("New Only Filter:", newOnlyFilter); // Debug

    let filtered = [...properties];

    // Apply search filter (now searches across property name, address, location)
    if (searchValue) {
        filtered = filtered.filter(property =>
            property.title.toLowerCase().includes(searchValue) ||
            property.address.toLowerCase().includes(searchValue) ||
            property.location.toLowerCase().includes(searchValue)
        );
    }

    // Apply region filter
    if (regionFilter) {
        filtered = filtered.filter(property => property.region === regionFilter);
    }

    // Apply property type / listing type filter
    if (typeFilter) {
        if (typeFilter === 'sale') {
            filtered = filtered.filter(property => property.forSale);
        } else if (typeFilter === 'rent') {
            filtered = filtered.filter(property => property.forRent);
        } else {
            filtered = filtered.filter(property => property.type === typeFilter);
        }
    }

    // Apply price filter
    if (priceFilter) {
        if (priceFilter.includes('-')) {
            const [min, max] = priceFilter.split('-').map(Number);
            filtered = filtered.filter(property => property.price >= min && property.price <= max);
        } else if (priceFilter === '1000000+') {
            filtered = filtered.filter(property => property.price >= 1000000);
        }
    }

    // Apply bedrooms filter
    if (bedroomsFilter) {
        filtered = filtered.filter(property => property.bedrooms >= parseInt(bedroomsFilter));
    }

    // Apply bathrooms filter
    if (bathroomsFilter) {
        filtered = filtered.filter(property => property.bathrooms >= parseInt(bathroomsFilter));
    }

    // Apply new listings only filter
    if (newOnlyFilter) {
        console.log("Filtering for new listings only"); // Debug
        filtered = filtered.filter(property => property.isNew);
    }

    // Render results in appropriate section
    if (isHomeSection) {
        renderProperties(filtered.slice(0, 3), featuredListings);
    } else {
        renderProperties(filtered, allListings);
    }
}

// Toggle favorite status of a property
function toggleFavorite(propertyId) {
    // Get current favorites from localStorage
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    // Check if property is already favorited
    const index = favorites.indexOf(propertyId);

    if (index === -1) {
        // Add to favorites
        favorites.push(propertyId);
    } else {
        // Remove from favorites
        favorites.splice(index, 1);
    }

    // Save updated favorites back to localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));

    // Update UI
    document.querySelectorAll(`.favorite-btn[data-id="${propertyId}"]`).forEach(btn => {
        btn.classList.toggle('active');
    });

    // Refresh favorites section if it's currently active
    if (document.getElementById('favoritesSection').classList.contains('active')) {
        renderFavorites();
    }
}

// Function to render favorite properties
function renderFavorites() {
    const favoritesContainer = document.getElementById('favoriteListings');
    const noFavoritesMessage = document.querySelector('#favoritesSection .no-favorites');

    // Get favorites from localStorage
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    // Filter properties to only include favorites
    const favoriteProperties = properties.filter(property => favorites.includes(property.id));

    if (favoriteProperties.length === 0) {
        // Show the "no favorites" message
        if (!noFavoritesMessage) {
            favoritesContainer.innerHTML = '<p class="no-favorites">You don\'t have any properties liked yet!</p>';
        } else {
            noFavoritesMessage.style.display = 'block';
        }
        favoritesContainer.innerHTML = '<p class="no-favorites">You don\'t have any properties liked yet!</p>';
        return;
    }

    // Hide the "no favorites" message if it exists
    if (noFavoritesMessage) {
        noFavoritesMessage.style.display = 'none';
    }

    // Render the favorite properties
    renderProperties(favoriteProperties, favoritesContainer);
}

// Toggle dark/light mode
function toggleTheme() {
    const isLight = document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode', !isLight);
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    themeToggle.innerHTML = isLight ? '🌙' : '☀️';
}

// Apply stored theme preference
function applyTheme() {
    const storedTheme = localStorage.getItem('theme') || 'dark';

    if (storedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.innerHTML = '🌙';
    } else {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '☀️';
    }
}

// Mobile menu functions
function openMobileMenu() {
    mobileMenu.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = ''; // Allow scrolling
}

// Event listeners
window.addEventListener('load', function () {
    showSection('home');
    renderFeaturedProperties();
    applyTheme();

    // Add direct click event listeners to checkboxes for debugging
    document.getElementById('newListings').addEventListener('click', function () {
        console.log('Home checkbox clicked, checked:', this.checked);
    });

    document.getElementById('listingNewOnly').addEventListener('click', function () {
        console.log('Listing checkbox clicked, checked:', this.checked);
    });

    // Set up event listeners for search inputs
    homeSearchInput.addEventListener('input', function () {
        populateSuggestions(this, homeSuggestions);
    });

    searchInput.addEventListener('input', function () {
        populateSuggestions(this, suggestions);
    });

    // Filter button event listeners
    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const section = this.closest('section');
            if (section.id === 'homeSection') {
                // Transfer all home filters to listings section
                searchInput.value = homeSearchInput.value;
                document.getElementById('listingType').value = document.getElementById('propertyType').value;
                document.getElementById('listingRegion').value = document.getElementById('regionFilter').value;
                document.getElementById('listingPrice').value = document.getElementById('priceRange').value;
                document.getElementById('listingBeds').value = document.getElementById('bedrooms').value;
                document.getElementById('listingNewOnly').checked = document.getElementById('newListings').checked;
            }
            if (section.id === 'homeSection') {
                showSection('listings');
            }
            filterProperties();
        });
    });

    // Filter change event listeners
    const filters = [
        'propertyType', 'regionFilter', 'priceRange', 'bedrooms', 'bathrooms', 'newListings',
        'listingType', 'listingRegion', 'listingPrice', 'listingBeds', 'listingNewOnly'
    ];

    filters.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            if (element.type === 'checkbox') {
                element.addEventListener('change', filterProperties);
            } else {
                element.addEventListener('change', filterProperties);
            }
        }
    });

    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);

    // Mobile menu
    mobileMenuToggle.addEventListener('click', openMobileMenu);
    mobileMenuClose.addEventListener('click', closeMobileMenu);
    overlay.addEventListener('click', closeMobileMenu);

    // Toggle profile dropdown
    const profileButton = document.querySelector('.user-profile button');
    const profileDropdown = document.querySelector('.user-profile .dropdown');

    profileButton.addEventListener('click', function (e) {
        e.stopPropagation();
        profileDropdown.classList.toggle('show');
    });

    document.addEventListener('click', function (e) {
        if (!profileButton.contains(e.target) && !profileDropdown.contains(e.target)) {
            profileDropdown.classList.remove('show');
        }
    });

    // Hide suggestions when clicking outside
    document.addEventListener('click', function (event) {
        if (!event.target.matches('#searchInput') && !event.target.matches('#homeSearchInput')) {
            suggestions.style.display = 'none';
            homeSuggestions.style.display = 'none';
        }
    });

    // Focus events for search inputs
    homeSearchInput.addEventListener('focus', function () {
        if (this.value.length > 0) {
            populateSuggestions(this, homeSuggestions);
        }
    });

    searchInput.addEventListener('focus', function () {
        if (this.value.length > 0) {
            populateSuggestions(this, suggestions);
        }
    });
});
