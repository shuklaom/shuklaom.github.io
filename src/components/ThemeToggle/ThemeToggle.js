import React from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../contexts/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = ({ className = '' }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      className={`theme-toggle ${className}`}
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, rotate: -180 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      <motion.div
        className="toggle-track"
        initial={false}
        animate={{ 
          backgroundColor: isDarkMode ? '#1a1a2e' : '#e2e8f0' 
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="toggle-thumb"
          initial={false}
          animate={{ 
            x: isDarkMode ? 24 : 0,
            backgroundColor: isDarkMode ? '#00d4ff' : '#3182ce'
          }}
          transition={{ 
            type: "spring", 
            stiffness: 500, 
            damping: 30 
          }}
        >
          <motion.div
            initial={false}
            animate={{ rotate: isDarkMode ? 0 : 180 }}
            transition={{ duration: 0.3 }}
          >
            {isDarkMode ? <FiMoon size={14} /> : <FiSun size={14} />}
          </motion.div>
        </motion.div>
      </motion.div>
      
      <span className="toggle-label">
        {isDarkMode ? 'Dark' : 'Light'}
      </span>
    </motion.button>
  );
};

export default ThemeToggle;