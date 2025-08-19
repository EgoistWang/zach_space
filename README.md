# System Design & Automation Engineer Portfolio

A modern, responsive portfolio website showcasing professional experience in system design and automation engineering, including SCADA systems, PLC programming, and industrial automation solutions.

## 🚀 Features

### Design & User Experience
- **Modern, Clean Design**: Minimalist aesthetic with tech-focused visual elements
- **Dark/Light Mode Toggle**: User preference is saved in localStorage
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Scroll-triggered animations and hover effects
- **Interactive Elements**: Hover effects, transitions, and micro-interactions

### Sections
1. **Hero/Landing Page**: Professional introduction with animated tech grid
2. **Experience**: Professional background with technology stacks
3. **Projects**: Interactive project cards with detailed modals
4. **Resume**: Download section with key highlights
5. **Contact**: Contact form with validation and social links

### Technical Features
- **Semantic HTML5**: Proper document structure and accessibility
- **CSS Custom Properties**: Theme variables for easy customization
- **Vanilla JavaScript**: No external dependencies for core functionality
- **Form Validation**: Client-side validation with user feedback
- **Project Modals**: Detailed project information in popup modals
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Mobile Navigation**: Hamburger menu for mobile devices

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and modern web standards
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **JavaScript (ES6+)**: Modern JavaScript features and DOM manipulation
- **Font Awesome**: Icons for visual elements
- **Google Fonts**: Inter font family for typography

## 📁 Project Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and theme variables
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🎨 Design System

### Color Scheme
- **Primary**: Blue (#2563eb) - Professional and trustworthy
- **Accent**: Cyan (#06b6d4) - Tech-focused and modern
- **Surface**: Light gray (#f8fafc) - Clean and minimal
- **Text**: Dark gray (#1e293b) - High contrast and readable

### Dark Mode Colors
- **Primary**: Light blue (#3b82f6)
- **Background**: Dark blue (#0f172a)
- **Surface**: Dark gray (#1e293b)
- **Text**: Light gray (#f1f5f9)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Scales appropriately across devices

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. The website will load with all functionality ready

### Local Development
For local development, you can use any local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

### Mobile Features
- Collapsible navigation menu
- Optimized touch targets
- Simplified layouts for small screens
- Touch-friendly interactions

## 🎯 Customization

### Updating Content
1. **Personal Information**: Edit the HTML content in `index.html`
2. **Styling**: Modify CSS variables in `styles.css`
3. **Functionality**: Update JavaScript in `script.js`

### Adding Projects
To add new projects, update the `projectData` object in `script.js`:

```javascript
const projectData = {
    'your-project-id': {
        title: 'Your Project Title',
        description: 'Project description...',
        features: ['Feature 1', 'Feature 2', 'Feature 3'],
        technologies: ['Tech 1', 'Tech 2', 'Tech 3'],
        image: 'fas fa-icon-name',
        link: 'https://your-project-link.com'
    }
};
```

### Changing Colors
Update the CSS custom properties in `styles.css`:

```css
:root {
    --primary-color: #your-color;
    --accent-color: #your-accent;
    /* ... other colors */
}
```

## 🔧 Browser Support

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Contact

For questions or support, please reach out through the contact form on the website.

---

**Built with ❤️ for showcasing automation engineering expertise** 