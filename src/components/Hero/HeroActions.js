import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiDownload } from 'react-icons/fi';

const HeroActions = () => {
  return (
    <motion.div
      className="hero-action-buttons"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.1 }}
    >
      <a 
        href="#contact" 
        className="hero-btn hero-btn-primary"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <FiMail />
        Get In Touch
      </a>
      <a 
        href="#projects" 
        className="hero-btn hero-btn-secondary"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        View Projects
      </a>
      <a 
        href="/assets/documents/resume.pdf" 
        target="_blank"
        rel="noopener noreferrer"
        className="hero-btn hero-btn-secondary"
      >
        <FiDownload />
        View Resume
      </a>
    </motion.div>
  );
};

export default HeroActions;
