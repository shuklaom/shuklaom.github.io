# Om Shukla - Portfolio Website

A modern, responsive portfolio website built with React.js, showcasing my skills, projects, and experience as a Full Stack Developer.

![Portfolio Preview](https://via.placeholder.com/800x400/667eea/ffffff?text=Portfolio+Preview)

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Fully responsive across all devices and screen sizes
- **Dark/Light Theme**: Toggle between dark and light themes
- **Interactive Components**: Engaging UI with smooth transitions and hover effects
- **Project Showcase**: Detailed project cards with live demos and GitHub links
- **Contact Form**: Functional contact form with EmailJS integration
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Performance Optimized**: Fast loading with optimized images and code splitting

## 🛠️ Built With

- **Frontend Framework**: [React 18](https://reactjs.org/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Styling**: CSS3 with CSS Variables for theming
- **Typography**: [Inter](https://fonts.google.com/specimen/Inter) & [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
- **Form Handling**: [EmailJS](https://www.emailjs.com/)
- **Deployment**: GitHub Pages with GitHub Actions

### Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.8.1",
  "framer-motion": "^10.12.4",
  "react-icons": "^4.8.0",
  "emailjs-com": "^3.2.0",
  "aos": "^2.3.4",
  "typed.js": "^2.0.16"
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

## 📁 Project Structure

```
shuklaom.github.io/
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.js
│   │   │   └── Header.css
│   │   ├── Hero/
│   │   │   ├── Hero.js
│   │   │   └── Hero.css
│   │   ├── About/
│   │   │   ├── About.js
│   │   │   └── About.css
│   │   ├── Skills/
│   │   │   ├── Skills.js
│   │   │   └── Skills.css
│   │   ├── Experience/
│   │   │   ├── Experience.js
│   │   │   └── Experience.css
│   │   ├── Projects/
│   │   │   ├── Projects.js
│   │   │   └── Projects.css
│   │   ├── Contact/
│   │   │   ├── Contact.js
│   │   │   └── Contact.css
│   │   ├── Footer/
│   │   │   ├── Footer.js
│   │   │   └── Footer.css
│   │   └── ScrollToTop/
│   │       ├── ScrollToTop.js
│   │       └── ScrollToTop.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── .gitignore
└── README.md
```

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **src/components/Hero/Hero.js** - Name, roles, and social links
2. **src/components/About/About.js** - Personal information and bio
3. **src/components/Contact/Contact.js** - Contact details
4. **public/index.html** - Meta tags and title

### Projects

Add your projects in **src/components/Projects/Projects.js**:

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    category: 'Full Stack', // 'Full Stack', 'Frontend', 'Mobile'
    description: 'Short description...',
    longDescription: 'Detailed description...',
    image: 'https://your-image-url.com/image.jpg',
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/project',
    demo: 'https://your-demo-url.com',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    status: 'Completed' // 'Completed', 'In Progress'
  }
];
```

### Skills

Update your skills in **src/components/Skills/Skills.js**:

```javascript
const skillCategories = [
  {
    category: 'Frontend Development',
    icon: FiCode,
    skills: [
      { name: 'React', level: 90, color: '#61DAFB' },
      // Add more skills...
    ]
  }
];
```

### Experience

Add your work experience in **src/components/Experience/Experience.js**:

```javascript
const experiences = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    location: 'City, Country',
    duration: '2022 - Present',
    type: 'Full-time', // 'Full-time', 'Part-time', 'Internship'
    description: ['Achievement 1', 'Achievement 2'],
    technologies: ['React', 'Node.js']
  }
];
```

### Theme Colors

Customize the color scheme in **src/index.css**:

```css
:root {
  --primary-color: #2563eb;     /* Your primary brand color */
  --secondary-color: #1e40af;   /* Secondary color */
  --accent-color: #3b82f6;      /* Accent color */
  /* Add more custom colors */
}
```

## 📧 Contact Form Setup

The contact form uses EmailJS for handling form submissions. To set it up:

1. **Create an EmailJS account** at [emailjs.com](https://www.emailjs.com/)

2. **Get your credentials**:
   - Service ID
   - Template ID  
   - Public Key

3. **Update the contact form** in `src/components/Contact/Contact.js`:
   ```javascript
   await emailjs.send(
     'YOUR_SERVICE_ID',    // Replace with your service ID
     'YOUR_TEMPLATE_ID',   // Replace with your template ID
     templateParams,
     'YOUR_PUBLIC_KEY'     // Replace with your public key
   );
   ```

4. **Create an email template** in your EmailJS dashboard with these variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{subject}}`
   - `{{message}}`

## 🚀 Deployment

### GitHub Pages (Recommended)

The repository is configured for automatic deployment to GitHub Pages using GitHub Actions.

1. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings
   - Navigate to Pages section
   - Select "GitHub Actions" as source
   - The site will be deployed automatically

3. **Access your site**:
   Your portfolio will be available at: `https://yourusername.github.io`

### Manual Deployment

If you prefer manual deployment:

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

- **Code Splitting**: Components are loaded as needed
- **Image Optimization**: Proper sizing and lazy loading
- **CSS Optimization**: Minimal and organized stylesheets
- **Bundle Analysis**: Use `npm run build` to analyze bundle size

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
- Check that the repository name matches your username: `username.github.io`
- Ensure GitHub Pages is enabled in repository settings
- Verify the workflow has necessary permissions

**3. Contact form not working**
- Verify EmailJS credentials are correct
- Check browser console for errors
- Ensure EmailJS template variables match

**4. Animations not working**
- Check if `framer-motion` is installed correctly
- Verify browser support for CSS animations

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