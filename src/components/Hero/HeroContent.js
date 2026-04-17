import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { DURATION, DELAY, TRANSFORM } from '../../constants/animations';

const HeroContent = ({ typedRef }) => {
  return (
    <motion.div
      className="hero-main-content"
      initial={{ opacity: 0, y: TRANSFORM.Y_STANDARD }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DURATION.SLOW, delay: DELAY.TINY }}
    >
      <motion.span 
        className="hero-greeting"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: DELAY.SMALL }}
      >
        Hi, I'm
      </motion.span>
      
      <motion.h1
        className="hero-name"
        initial={{ opacity: 0, y: TRANSFORM.Y_SMALL }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION.STANDARD, delay: DELAY.MEDIUM }}
      >
        Om Shukla
      </motion.h1>
      
      <motion.div
        className="hero-role-wrapper"
        initial={{ opacity: 0, y: TRANSFORM.Y_SMALL }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION.STANDARD, delay: DELAY.LARGE }}
      >
        <span className="hero-role-label">I'm a </span>
        <span ref={typedRef} className="hero-role-text"></span>
      </motion.div>

      <motion.p
        className="hero-bio"
        initial={{ opacity: 0, y: TRANSFORM.Y_SMALL }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION.STANDARD, delay: DELAY.X_LARGE }}
      >
        Problem solver, experienced with Agile software development, and a team player 
        working towards a Bachelor of Science degree in Software Engineering at Iowa State University.
      </motion.p>
    </motion.div>
  );
};

HeroContent.propTypes = {
  typedRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
};

export default HeroContent;
