import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { DURATION, TRANSFORM } from '../../constants/animations';
import { sections, getNavItems } from '../../config/sections';
import './Navigation.css';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = getNavItems();

  useEffect(() => {
    const handleScroll = () => {
      // Add background to nav on scroll
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sectionElements = sections.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
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
      transition={{ duration: DURATION.MEDIUM }}
    >
      <div className="nav-container">
        <motion.div
          className="nav-logo"
          whileHover={{ scale: TRANSFORM.SCALE_UP }}
          transition={{ duration: DURATION.INSTANT }}
        >
          <button onClick={() => scrollToSection('hero')}>
            Om Shukla
          </button>
        </motion.div>

        <div className="nav-links">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ y: -2 }}
              transition={{ duration: DURATION.INSTANT }}
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
                    transition={{ duration: DURATION.FAST }}
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
