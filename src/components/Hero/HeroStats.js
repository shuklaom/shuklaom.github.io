import React from 'react';
import { motion } from 'framer-motion';
import { DURATION, DELAY, TRANSFORM } from '../../constants/animations';

const HeroStats = ({ stats }) => {
  return (
    <motion.div
      className="hero-info-grid"
      initial={{ opacity: 0, y: TRANSFORM.Y_STANDARD }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: DURATION.SLOW, delay: DELAY.XXX_LARGE }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="hero-info-card"
          whileHover={{ y: -4 }}
          transition={{ duration: DURATION.INSTANT }}
        >
          <div className="info-icon">{stat.icon}</div>
          <div className="info-content">
            <div className="info-value">{stat.value}</div>
            <div className="info-label">{stat.label}</div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HeroStats;
