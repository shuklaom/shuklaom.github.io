import React from 'react';
import { motion } from 'framer-motion';

const HeroStats = ({ stats }) => {
  return (
    <motion.div
      className="hero-info-grid"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="hero-info-card"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
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
