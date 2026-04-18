import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiDownload } from 'react-icons/fi';
import { DURATION, DELAY, TRANSFORM } from '../../constants/animations';

const HeroActions = () => {
  return (
    <motion.div
      className="hero-action-buttons"
      initial={{ opacity: 0, y: TRANSFORM.Y_SMALL }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DURATION.STANDARD, delay: DELAY.XX_LARGE }}
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
