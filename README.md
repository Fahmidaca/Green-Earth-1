# 🌍 Green Earth - Tree Plantation Campaign

A modern, responsive web application for a tree plantation campaign that allows users to browse different types of trees, add them to cart, and contribute to environmental sustainability.

## 📋 Project Overview

Green Earth is a comprehensive web platform designed to promote tree plantation and environmental awareness. The application features an intuitive interface where users can explore various tree species, learn about their benefits, and participate in tree-planting initiatives.

## 🎯 Key Features

- **Tree Catalog**: Browse through different categories of trees with detailed descriptions
- **Shopping Cart**: Add trees to cart with quantity management
- **Category Filtering**: Filter trees by categories (Fruit Trees, Flowering Trees, etc.)
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, green-themed design promoting environmental consciousness
- **Interactive Elements**: Hover effects, smooth animations, and user feedback notifications

## 🛠️ Technological Stack

### Frontend Technologies
- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox and Grid layouts
- **JavaScript (ES6+)**: Interactive functionality and DOM manipulation
- **Google Fonts**: Poppins font family for typography

### Key Dependencies
- No external frameworks required
- Vanilla JavaScript for all interactive features
- CSS Grid and Flexbox for responsive layouts
- Modern CSS features (transitions, transforms, box-shadows)

### Development Tools
- Visual Studio Code (recommended IDE)
- Live Server extension for development
- Modern web browsers (Chrome, Firefox, Safari, Edge)

## 📱 Mobile Responsiveness

### ✅ Fully Responsive Design
- **Breakpoints**: Optimized for all screen sizes
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

### 📱 Mobile Features
- **Touch-friendly**: Large buttons and interactive elements
- **Responsive Grid**: Tree cards adapt from 3 columns to 1 column on mobile
- **Collapsible Navigation**: Categories and cart stack vertically on small screens
- **Optimized Typography**: Font sizes scale appropriately
- **Touch Gestures**: Smooth scrolling and touch interactions

### 🧪 Tested Devices
- iPhone SE (375px)
- iPhone 12 Pro (390px)
- iPad (768px)
- iPad Pro (1024px)
- Desktop (1200px+)

## 🚀 Getting Started

### Prerequisites
- Modern web browser
- Local web server (optional, for development)

### Installation
1. Clone or download the project files
2. Navigate to the project directory
3. Open `index.html` in your web browser

### For Development
```bash
# Using Python (if available)
python -m http.server 8000

# Using Node.js (if available)
npx http-server -p 8000

# Then open http://localhost:8000 in your browser
```

## 📁 Project Structure

```
B12A06-Green-Earth/
├── index.html          # Main HTML file
├── style.css           # CSS styling
├── script.js           # JavaScript functionality
├── assets/             # Images and media files
│   ├── hero-leaf1.png
│   ├── hero-leaf2.png
│   └── about.png
└── README.md           # Project documentation
```

## 🎨 Design System

### Color Palette
- **Primary Green**: #28a745 (buttons, accents)
- **Dark Green**: #0c571c (navbar, headings)
- **Light Green**: #c6f4d9 (background)
- **Success Green**: #218838 (hover states)
- **Text Colors**: #2c3e50, #6c757d, #495057

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 400 (regular), 500 (medium), 600 (semi-bold), 700 (bold)
- **Sizes**: Responsive scaling from 0.9rem to 3rem

### Components
- **Cards**: Rounded corners (12px), subtle shadows, hover effects
- **Buttons**: Primary green with white text, rounded (8px)
- **Forms**: Clean inputs with focus states
- **Navigation**: Sticky header with smooth transitions

## 🔧 Customization

### Adding New Tree Categories
1. Update the `sampleCategories` array in `script.js`
2. Add corresponding tree data to `sampleTrees` array
3. Update CSS if new styling is needed

### Modifying Colors
1. Update CSS custom properties or color values
2. Maintain contrast ratios for accessibility
3. Test across different devices

### Adding Images
1. Place images in the `assets/` folder
2. Update image paths in HTML/CSS/JS files
3. Optimize images for web (recommended: WebP format)

## ❓ FAQ

### Q: How do I add more trees to the catalog?
A: Edit the `sampleTrees` array in `script.js` and add new tree objects with id, name, description, category, price, and image properties.

### Q: Can I change the currency symbol?
A: Yes, update the price formatting in the `createTreeCard` function and `updateCartDisplay` function in `script.js`.

### Q: How do I modify the cart functionality?
A: The cart logic is in the `addToCart`, `removeFromCart`, and `updateCartDisplay` functions in `script.js`.

### Q: Is this project SEO optimized?
A: The project uses semantic HTML5 elements and proper heading structure. For better SEO, consider adding meta tags, alt attributes for images, and structured data.

### Q: Can I integrate this with a backend?
A: Yes, replace the sample data with API calls. Update the `loadSampleData` function to fetch data from your backend API.

## 🌱 Environmental Impact

This project promotes environmental awareness by:
- Encouraging tree plantation
- Educating users about different tree species
- Providing an easy way to contribute to reforestation
- Raising awareness about climate change

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📞 Support

For questions or support, please create an issue in the project repository or contact the development team.

---

**Built with ❤️ for a greener planet** 🌍
