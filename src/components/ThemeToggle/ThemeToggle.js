import React from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../contexts/ThemeContext';
import { DURATION, DELAY, TRANSFORM } from '../../constants/animations';
import './ThemeToggle.css';

const ThemeToggle = ({ className = '' }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      className={`theme-toggle ${className}`}
      onClick={toggleTheme}
      whileHover={{ scale: TRANSFORM.SCALE_UP }}
      whileTap={{ scale: TRANSFORM.SCALE_DOWN }}
      initial={{ opacity: 0, rotate: TRANSFORM.ROTATE_HALF }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: DURATION.STANDARD, delay: DELAY.TINY }}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      <motion.div
        className="toggle-track"
        initial={false}
        animate={{ 
          backgroundColor: isDarkMode ? '#1a1a2e' : '#e2e8f0' 
        }}
        transition={{ duration: DURATION.FAST }}
      >
        <motion.div
          className="toggle-thumb"
          initial={false}
          animate={{ 
            x: isDarkMode ? TRANSFORM.X_TOGGLE : 0,
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
            transition={{ duration: DURATION.FAST }}
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