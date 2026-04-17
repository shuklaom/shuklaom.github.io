import React from 'react';
import { motion } from 'framer-motion';

const HeroContent = ({ typedRef }) => {
  return (
    <motion.div
      className="hero-main-content"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <motion.span 
        className="hero-greeting"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Hi, I'm
      </motion.span>
      
      <motion.h1
        className="hero-name"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Om Shukla
      </motion.h1>
      
      <motion.div
        className="hero-role-wrapper"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <span className="hero-role-label">I'm a </span>
        <span ref={typedRef} className="hero-role-text"></span>
      </motion.div>

      <motion.p
        className="hero-bio"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        Problem solver, experienced with Agile software development, and a team player 
        working towards a Bachelor of Science degree in Software Engineering at Iowa State University.
      </motion.p>
    </motion.div>
  );
};

export default HeroContent;
