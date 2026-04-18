# Om Shukla - Portfolio Website

A modern, responsive portfolio website built with React.js, showcasing my skills, projects, and experience as a Full Stack Developer.

![Portfolio Preview](https://via.placeholder.com/800x400/667eea/ffffff?text=Portfolio+Preview)

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Fully responsive across all devices and screen sizes
- **Dark/Light Theme**: Toggle between dark and light themes with React Context
- **Interactive Components**: Engaging UI with Framer Motion and AOS animations
- **Component Architecture**: Modular, reusable components with PropTypes validation
- **Data-Driven**: Centralized data files for easy content management
- **Type-Safe**: PropTypes validation on all components
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Performance Optimized**: Optimized bundle size (106.73 kB gzipped)

## 🛠️ Built With

- **Frontend Framework**: [React 18.3.1](https://reactjs.org/)
- **Routing**: [React Router DOM 6.26.2](https://reactrouter.com/)
- **Animations**: [Framer Motion 11.5.4](https://www.framer.com/motion/) & [AOS 2.3.4](https://michalsnik.github.io/aos/)
- **Icons**: [React Icons 5.3.0](https://react-icons.github.io/react-icons/)
- **Validation**: [PropTypes 15.8.1](https://www.npmjs.com/package/prop-types)
- **Styling**: CSS3 with CSS Variables for theming
- **Typography**: [Inter](https://fonts.google.com/specimen/Inter) & [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
- **Deployment**: GitHub Pages

### Dependencies

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.26.2",
  "framer-motion": "^11.5.4",
  "react-icons": "^5.3.0",
  "prop-types": "^15.8.1",
  "aos": "^2.3.4",
  "react-scripts": "5.0.1"
}
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shuklaom/shuklaom.github.io.git
   cd shuklaom.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website locally.

## 🏆 Code Quality

This portfolio follows modern React best practices:

### Architecture Principles
- **Component Composition**: Large components split into focused subcomponents
- **Data Separation**: Content in dedicated data files for easy maintenance
- **PropTypes Validation**: Runtime type checking on all component props
- **Constant Extraction**: Magic numbers replaced with named constants
- **CSS Variables**: Consistent theming with CSS custom properties

### Code Standards
- **PropTypes**: All components validate props with `prop-types` package
- **Reusable Components**: Card components, modals, and UI elements are modular
- **Animation Constants**: Centralized timing values prevent inconsistencies
- **Context API**: Global state (theme) managed with React Context

### File Organization
```
Component/
├── Component.js          # Main component logic
├── Component.css         # Component-specific styles
├── Subcomponent.js       # Reusable child component
└── componentData.js      # Data separated from UI
```

## 📁 Project Structure

```
shuklaom.github.io/
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
│   └── assets/
│       ├── documents/
│       └── images/
├── src/
│   ├── components/
│   │   ├── About/
│   │   │   ├── About.js
│   │   │   └── About.css
│   │   ├── Contact/
│   │   │   ├── Contact.js
│   │   │   ├── Contact.css
│   │   │   ├── ContactCard.js       # Reusable contact method card
│   │   │   └── contactData.js       # Contact information data
│   │   ├── Education/
│   │   │   ├── Education.js
│   │   │   ├── Education.css
│   │   │   ├── EducationCard.js     # Individual education card
│   │   │   ├── DiplomaModal.js      # Diploma viewer modal
│   │   │   └── educationData.js     # Education history data
│   │   ├── Experience/
│   │   │   ├── Experience.js
│   │   │   ├── Experience.css
│   │   │   ├── ExperienceCard.js    # Individual experience card
│   │   │   └── experienceData.js    # Work experience data
│   │   ├── Footer/
│   │   │   ├── Footer.js
│   │   │   └── Footer.css
│   │   ├── Header/
│   │   │   ├── Header.js
│   │   │   └── Header.css
│   │   ├── Hero/
│   │   │   ├── Hero.js
│   │   │   ├── Hero.css
│   │   │   ├── HeroProfile.js       # Profile image component
│   │   │   ├── HeroContent.js       # Main content with typed text
│   │   │   ├── HeroActions.js       # CTA buttons
│   │   │   └── HeroStats.js         # Stats display
│   │   ├── Navigation/
│   │   │   ├── Navigation.js
│   │   │   └── Navigation.css
│   │   ├── PrivacyPolicy/
│   │   │   ├── PrivacyPolicy.js
│   │   │   └── PrivacyPolicy.css
│   │   ├── Projects/
│   │   │   ├── Projects.js
│   │   │   ├── Projects.css
│   │   │   ├── ProjectCard.js       # Individual project card
│   │   │   ├── ProjectSection.js    # Project category section
│   │   │   └── projectsData.js      # Projects data
│   │   ├── Skills/
│   │   │   ├── Skills.js
│   │   │   ├── Skills.css
│   │   │   ├── SkillCategory.js     # Skill category component
│   │   │   └── skillsData.js        # Skills data
│   │   ├── SimpleBackground/
│   │   │   ├── SimpleBackground.js  # Animated gradient background
│   │   │   └── SimpleBackground.css
│   │   └── ThemeToggle/
│   │       ├── ThemeToggle.js       # Dark/light mode toggle
│   │       └── ThemeToggle.css
│   ├── constants/
│   │   └── animations.js            # Centralized animation constants
│   ├── contexts/
│   │   └── ThemeContext.js          # Theme state management
│   ├── styles/
│   │   ├── animations.css           # Global animation styles
│   │   └── responsive.css           # Responsive breakpoints
│   ├── utils/
│   │   └── discordTracker.js        # Optional visit tracking
│   ├── App.js                       # Main app component
│   ├── App.css                      # App-specific styles
│   ├── index.js                     # Entry point
│   └── index.css                    # Global styles & CSS variables
├── build/                           # Production build output
├── package.json
├── jsconfig.json
└── README.md
```

## 🏗️ Architecture Highlights

### Component Structure
- **Main Components**: High-level section components (Hero, Projects, etc.)
- **Subcomponents**: Reusable, modular pieces (ProjectCard, EducationCard, etc.)
- **Data Files**: Centralized data management (projectsData.js, skillsData.js, etc.)
- **Constants**: Shared animation values and configuration

### Code Organization
- **PropTypes Validation**: All components have runtime prop validation
- **CSS Variables**: Consistent theming with CSS custom properties
- **Animation Constants**: Centralized timing/easing values in `constants/animations.js`
- **Context API**: Theme state managed with React Context

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **src/components/Hero/HeroContent.js** - Name, roles, and bio
2. **src/components/Hero/HeroStats.js** - Profile statistics
3. **src/components/Contact/contactData.js** - Contact information
4. **public/index.html** - Meta tags and title

### Projects

Add your projects in **src/components/Projects/projectsData.js**:

```javascript
export const fullStackProjects = [
  {
    title: 'Your Project Title',
    description: 'Brief description of your project',
    technologies: ['React', 'Node.js', 'MongoDB'],
    impact: [
      'Key achievement or impact metric',
      'Another important outcome'
    ],
    github: 'https://github.com/yourusername/project',
    demo: 'https://your-demo-url.com',
    buttons: [
      { label: 'Live Demo', url: 'https://demo.com' },
      { label: 'GitHub', url: 'https://github.com/...' }
    ]
  }
];
```

The data file includes three categories: `fullStackProjects`, `frontendProjects`, and `otherProjects`.

### Skills

Update your skills in **src/components/Skills/skillsData.js**:

```javascript
export const skillsData = [
  {
    title: 'Programming Languages',
    skills: ['JavaScript', 'Python', 'Java', 'C++']
  },
  {
    title: 'Frontend Development',
    skills: ['React', 'Vue.js', 'HTML5', 'CSS3']
  }
  // Add more categories...
];
```

### Experience

Add your work experience in **src/components/Experience/experienceData.js**:

```javascript
export const experienceData = [
  {
    id: 1,
    title: 'Your Job Title',
    company: 'Company Name',
    location: 'City, State',
    period: 'Month Year - Present',
    type: 'Full-time',
    description: 'Brief role description',
    achievements: [
      'Key achievement or responsibility',
      'Another important contribution'
    ]
  }
];
```

### Education

Update your education in **src/components/Education/educationData.js**:

```javascript
export const educationData = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University Name',
    location: 'City, State',
    period: 'Year - Year',
    status: 'Expected Graduation: Month Year',
    achievements: [
      'GPA: 3.X/4.0',
      'Relevant achievement'
    ],
    relevantCourses: [
      'Course 1',
      'Course 2'
    ],
    diplomaUrl: '/assets/documents/diploma.pdf' // optional
  }
];
```

### Theme Colors

Customize the color scheme in **src/index.css**:

```css
:root {
  /* Primary Colors */
  --primary-blue: #3b82f6;
  --primary-purple: #8b5cf6;
  
  /* Accent Colors */
  --accent-primary: #00d4ff;
  --accent-secondary: #7c3aed;
  
  /* Background Colors */
  --bg-primary: #ffffff;
  --bg-secondary: #f8fafc;
  
  /* Add more custom colors */
}
```

### Animation Timing

Adjust animation timing in **src/constants/animations.js**:

```javascript
export const DURATION = {
  INSTANT: 0.2,
  FAST: 0.3,
  STANDARD: 0.5,
  SLOW: 0.8
};

export const DELAY = {
  TINY: 0.2,
  SMALL: 0.3,
  MEDIUM: 0.5,
  LARGE: 0.8
};
```
```

## � Available Scripts

- `npm start` - Start development server (runs on http://localhost:3000)
- `npm run build` - Create production build
- `npm run deploy` - Deploy to GitHub Pages
- `npm run eject` - Eject from Create React App (⚠️ irreversible)

## 🚀 Deployment

### GitHub Pages (Recommended)

The repository is configured for automatic deployment to GitHub Pages.

1. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Select "gh-pages" branch as source
   - Click Save

2. **Deploy your site**:
   ```bash
   npm run deploy
   ```

3. **Access your site**:
   Your portfolio will be available at: `https://yourusername.github.io`

### Manual Build

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Other Platforms

The built files in the `build/` directory can be deployed to:

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **AWS S3**: Upload the `build` folder contents
- **Firebase Hosting**: Use Firebase CLI

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Create production build
- `npm test` - Run test suite
- `npm run deploy` - Deploy to GitHub Pages
- `npm run eject` - Eject from Create React App (irreversible)

## 🎯 Performance Optimization

The portfolio includes several performance optimizations:

- **Component Refactoring**: Modular architecture with reusable subcomponents
- **Centralized Constants**: Animation values in shared constants file
- **PropTypes Validation**: Runtime type checking in development
- **CSS Variables**: Dynamic theming without JavaScript overhead
- **Optimized Build**: Production bundle size of 106.73 kB (gzipped)

### Current Bundle Size
- **JavaScript**: 106.73 kB (gzipped)
- **CSS**: 8.52 kB (gzipped)

### Lighthouse Score Goals

- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 90+
- **SEO**: 90+

## 🐛 Troubleshooting

### Common Issues

**1. Build fails with "Module not found"**
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**2. GitHub Pages deployment fails**
- Check that `homepage` in package.json matches your repository
- Ensure gh-pages package is installed: `npm install gh-pages --save-dev`
- Verify you have push access to the repository

**3. Animations not working**
- Check if `framer-motion` and `aos` are installed correctly
- Verify browser supports CSS animations
- Check console for JavaScript errors

**4. Theme toggle not working**
- Verify ThemeContext is properly wrapped around App
- Check browser console for errors
- Clear browser cache and local storage

**5. Outdated browser data warning**
```bash
# Update browserslist database
npx update-browserslist-db@latest
```

## 📱 Browser Support

- **Chrome** (latest)
- **Firefox** (latest) 
- **Safari** (latest)
- **Edge** (latest)
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

If you have any questions or need help customizing the portfolio:

- **Email**: your.email@example.com
- **LinkedIn**: [Om Shukla](https://linkedin.com/in/om-shukla)
- **GitHub Issues**: [Create an issue](https://github.com/shuklaom/shuklaom.github.io/issues)

## 🌟 Acknowledgments

- **Design Inspiration**: Modern portfolio websites and UI/UX trends
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Fonts**: [Google Fonts](https://fonts.google.com/)
- **Color Palette**: [Tailwind CSS Colors](https://tailwindcss.com/docs/customizing-colors)
- **Animations**: [Framer Motion Documentation](https://www.framer.com/motion/)

---

**Made with ❤️ and React.js**

*Don't forget to give this repository a ⭐ if you found it helpful!*