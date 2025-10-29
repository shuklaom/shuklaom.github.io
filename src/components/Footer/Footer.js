import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FiGithub,
      url: 'https://github.com/shuklaom',
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      url: 'https://linkedin.com/in/om-shukla',
      color: '#0077b5'
    },
    {
      name: 'Twitter',
      icon: FiTwitter,
      url: 'https://twitter.com/omshukla',
      color: '#1da1f2'
    },
    {
      name: 'Email',
      icon: FiMail,
      url: 'mailto:your.email@example.com',
      color: '#ea4335'
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-main"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="footer-brand">
              <h3 className="footer-logo">Om Shukla</h3>
              <p className="footer-tagline">
                Building digital experiences that make a difference
              </p>
              <p className="footer-description">
                A passionate full-stack developer dedicated to creating 
                innovative web solutions with modern technologies.
              </p>
            </div>

            <div className="footer-links">
              <div className="footer-section">
                <h4 className="footer-section-title">Quick Links</h4>
                <ul className="footer-nav">
                  {quickLinks.map((link, index) => (
                    <motion.li
                      key={link.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <button
                        className="footer-link"
                        onClick={() => scrollToSection(link.id)}
                      >
                        {link.name}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="footer-section">
                <h4 className="footer-section-title">Services</h4>
                <ul className="footer-nav">
                  <li><span className="footer-service">Web Development</span></li>
                  <li><span className="footer-service">Mobile Apps</span></li>
                  <li><span className="footer-service">UI/UX Design</span></li>
                  <li><span className="footer-service">Consulting</span></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4 className="footer-section-title">Connect</h4>
                <div className="footer-social">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      className="footer-social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -3,
                        color: social.color 
                      }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    >
                      <social.icon />
                    </motion.a>
                  ))}
                </div>
                <div className="footer-contact-info">
                  <p className="footer-email">your.email@example.com</p>
                  <p className="footer-location">Your City, Country</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="footer-bottom"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="footer-copyright">
              <p>
                © {currentYear} Om Shukla. Made with{' '}
                <motion.span
                  className="heart"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <FiHeart />
                </motion.span>{' '}
                and React.js
              </p>
            </div>
            
            <motion.button
              className="back-to-top"
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Back to top"
            >
              <FiArrowUp />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;