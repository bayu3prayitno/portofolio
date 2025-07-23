# SnapFolio - Modern Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. Features a clean design, dark mode toggle, and smooth animations.

## 🚀 Features

- **Fully Responsive Design** - Optimized for mobile, tablet, and desktop
- **Dark Mode Toggle** - Switch between light and dark themes with persistent storage
- **Smooth Animations** - Powered by Framer Motion for delightful user experience
- **Modern UI/UX** - Clean, professional design with soft colors
- **SEO Optimized** - Semantic HTML and proper meta tags
- **Fast Performance** - Built with Vite for optimal loading speeds

## 📱 Sections

1. **Home** - Hero section with introduction and call-to-action buttons
2. **Profile** - Personal information, bio, and contact details
3. **Skills** - Technical and soft skills with interactive progress bars
4. **Education** - Educational background with timeline layout
5. **Projects** - Portfolio showcase with filter functionality
6. **Activities** - Achievements, certifications, and extracurricular activities
7. **Contact** - Contact form and social media links

## 🛠️ Built With

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful SVG icons

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd snapfolio-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎨 Customization

### Personal Data

Update your personal information in `src/data/portfolioData.js`:

```javascript
export const personalData = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... other details
};
```

### Colors and Styling

Customize the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your primary colors
      },
      // ... other color customizations
    },
  },
},
```

### Adding New Sections

1. Create a new component in `src/components/`
2. Add the component to `src/App.jsx`
3. Update navigation in `src/components/Navigation.jsx`

## 📂 Project Structure

```
src/
├── components/          # React components
│   ├── Navigation.jsx   # Main navigation
│   ├── Home.jsx        # Hero section
│   ├── Profile.jsx     # About section
│   ├── Skills.jsx      # Skills display
│   ├── Education.jsx   # Education timeline
│   ├── Projects.jsx    # Portfolio showcase
│   ├── Activities.jsx  # Activities & achievements
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Footer component
├── contexts/           # React contexts
│   └── ThemeContext.jsx # Dark mode context
├── data/              # Static data
│   └── portfolioData.js # Portfolio content
├── App.jsx            # Main app component
├── main.jsx          # App entry point
└── index.css         # Global styles
```

## 🌟 Key Features Details

### Dark Mode
- Automatic system preference detection
- Manual toggle switch
- Persistent storage across sessions

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts

### Animations
- Scroll-triggered animations
- Hover effects and transitions
- Loading states and micro-interactions

### Performance
- Lazy loading for images
- Optimized bundle size
- Fast development with Vite

## 📞 Contact & Social Links

Update your social media links in `src/data/portfolioData.js`:

```javascript
export const socialLinks = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  whatsapp: "https://wa.me/yournumber",
  email: "mailto:your.email@example.com"
};
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - JavaScript library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide React](https://lucide.dev/) - Icon library
- [Vite](https://vitejs.dev/) - Build tool

---

Made with ❤️ by [Your Name]
