import React from 'react';
import { motion } from 'framer-motion';

const HeroProfile = () => {
  return (
    <motion.div
      className="hero-image-section"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
    >
      <div className="hero-image-circle">
        <img 
          src="/assets/images/profile.jpg" 
          alt="Om Shukla" 
          className="hero-profile-image"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.classList.add('no-image');
          }}
        />
      </div>
    </motion.div>
  );
};

export default HeroProfile;
