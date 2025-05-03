# Real Estate Hub 🏡

A modern, responsive real estate website template built with HTML, CSS, and JavaScript. This template provides a complete solution for real estate agencies or property listing services, featuring property browsing, filtering, favorites management, and more.


## 📋 Features

- **Property Listings** - Browse through a diverse collection of properties
- **Advanced Filtering** - Filter properties by type, region, price range, bedrooms, and more
- **Property Search** - Search properties by location, name, or address with autocomplete suggestions
- **Favorites System** - Save your favorite properties for later viewing
- **Responsive Design** - Fully responsive layout that works on all devices
- **Dark/Light Mode** - Toggle between dark and light themes with persistent preferences
- **Contact Form** - Built-in contact form for customer inquiries
- **About Us Section** - Company information, team profiles, and values showcase

## 🔧 Technical Features

- CSS Variables for easy theme customization
- Local Storage to persist user preferences and favorites
- CSS Grid and Flexbox for modern layouts
- Modular JavaScript functions with event handling
- Font Awesome integration for icons
- Smooth animations and transitions

## 📁 File Structure

The project is organized into three main files:

- **index.html** - The main HTML structure and content
- **styles.css** - All CSS styling and responsive design rules
- **main.js** - JavaScript functionality for filtering, favorites, theme toggle, etc.

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Clone the repository or download the files:
   ```bash
   git clone https://github.com/yourusername/real-estate-hub.git
   ```

2. Open the project folder:
   ```bash
   cd real-estate-hub
   ```

3. Open `index.html` in your browser or set up a local server.

## 🎨 Customization

### Modifying Properties

To add, modify, or remove properties, edit the `properties` array in `main.js`:

```javascript
const properties = [
    {
        id: 1,
        title: "Modern Family Home",
        address: "123 Main Street, Cityville",
        price: 450000,
        // Add other property details
    },
    // Add more properties
];
```

### Changing Colors

The color scheme can be easily modified by changing the CSS variables in the `:root` selector in `styles.css`:

```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    /* Add other colors */
}
```

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **768px** - Mobile devices
- **992px** - Tablets and small laptops

## 💡 Features in Detail

### Property Filtering

Properties can be filtered using multiple criteria:
- Property type (house, apartment, condo, etc.)
- Region (downtown, suburban, coastal, etc.)
- Price range
- Number of bedrooms/bathrooms
- New listings only

### Favorites System

Users can:
- Save properties to favorites by clicking the heart icon
- View all favorite properties in the dedicated "Favorites" section
- Favorites are saved to local storage so they persist between sessions

### Theme Toggle

The site includes a dark/light mode toggle:
- User's preference is saved to local storage
- Theme automatically applies on page load

## 🖥️ Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🛠️ Dependencies

- [Font Awesome](https://fontawesome.com/) - For icons
- [Google Fonts (Montserrat)](https://fonts.google.com/specimen/Montserrat) - For typography

## 📝 Notes

- The sample property data is for demonstration purposes
- In a production environment, you would likely fetch this data from a backend API

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Made with ❤️ for real estate professionals and developers