import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Navigation.css';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Add background to nav on scroll
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed nav height
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      className={`navigation ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <motion.div
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <button onClick={() => scrollToSection('hero')}>
            Om Shukla
          </button>
        </motion.div>

        <div className="nav-links">
          {navItems.slice(1).map((item) => (
            <motion.button
              key={item.id}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {item.label}
              <AnimatePresence>
                {activeSection === item.id && (
                  <motion.span
                    className="nav-indicator"
                    layoutId="navIndicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </div>

        <ThemeToggle className="nav-theme-toggle" />
      </div>
    </motion.nav>
  );
};

export default Navigation;
