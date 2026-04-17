import React from 'react';
import { motion } from 'framer-motion';
import { DURATION, EASING } from '../../constants/animations';

const HeroProfile = () => {
  return (
    <motion.div
      className="hero-image-section"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: DURATION.SLOW, ease: EASING.SMOOTH }}
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
