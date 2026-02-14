# SMAJ Ecosystem Website

A modern, responsive multi-page website for SMAJ Ecosystem, a corporate business ecosystem company. The website is designed to showcase the company's services, projects, partnerships, and insights.

## Features

### General
- Multi-page website with 7 pages: Home, About, Projects, Partnerships, Insights, Contact, Legal
- Fully responsive design for desktop, tablet, and mobile
- Fixed header with logo, navigation, and hamburger menu for mobile
- Sticky footer with multi-column layout
- Smooth scroll animations for sections
- Hover effects on buttons, cards, and icons
- Modern professional design with clean fonts

### Pages
1. **index.html** - Home page with hero, stats, services, why choose us, featured projects, insights, and CTA sections
2. **about.html** - About page with mission, values, and team sections
3. **projects.html** - Projects page with filterable project cards
4. **partnerships.html** - Partnerships page with partnership tiers and benefits
5. **insights.html** - Insights/Blog page with article cards
6. **contact.html** - Contact page with form and contact information
7. **legal.html** - Legal page with privacy policy, terms of service, and cookie policy

### Design Elements
- **Color Palette**: Professional corporate colors (blue #0066CC, accent #00D4AA)
- **Typography**: Clean Inter font family
- **Animations**: Fade-in, slide-in, and scale animations
- **Responsive**: Mobile-first design with breakpoints for tablet and desktop

## File Structure

```
SMAJ-Ecosystem/
├── index.html
├── about.html
├── projects.html
├── partnerships.html
├── insights.html
├── contact.html
├── legal.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── main.js
    │   └── navigation.js
    └── images/
        ├── icons/
        └── projects/
```

## Technologies Used
- HTML5
- CSS3 (CSS Grid, Flexbox, Animations)
- JavaScript (Vanilla JS)
- Google Fonts (Inter)
- Unsplash (Stock images)

## Getting Started

1. Clone or download the repository
2. Open `index.html` in your web browser
3. The website is fully functional and ready to use

## Customization

### Colors
To change the primary color, update the `--primary-color` variable in `assets/css/style.css`:
```
css
:root {
    --primary-color: #0066CC; /* Change this to your desired color */
}
```

### Adding New Pages
1. Create a new HTML file in the root directory
2. Copy the header and footer from an existing page
3. Add your custom content
4. Update the navigation links in all HTML files

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License
This project is for demonstration purposes.

## Credits
- Design inspired by Lime Technologies
- Images from Unsplash
- Icons from inline SVG
