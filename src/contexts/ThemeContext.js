import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  // Update CSS variables and localStorage when theme changes
  useEffect(() => {
    const root = document.documentElement;
    
    if (isDarkMode) {
      // Dark theme variables - matching the dark mode design
      root.style.setProperty('--bg-primary', '#1b1d1e');
      root.style.setProperty('--bg-secondary', '#181a1b');
      root.style.setProperty('--bg-tertiary', '#242424');
      root.style.setProperty('--text-primary', '#ffffff');
      root.style.setProperty('--text-secondary', '#999999');
      root.style.setProperty('--text-accent', '#0099cc');
      root.style.setProperty('--accent-primary', '#0099cc');
      root.style.setProperty('--accent-secondary', '#ff6b6b');
      root.style.setProperty('--accent-gradient', 'linear-gradient(135deg, #0099cc 0%, #ff6b6b 100%)');
      root.style.setProperty('--border-color', '#2a2a2a');
      root.style.setProperty('--shadow-light', 'rgba(0, 153, 204, 0.12)');
      root.style.setProperty('--shadow-medium', 'rgba(0, 153, 204, 0.2)');
      root.style.setProperty('--shadow-heavy', 'rgba(0, 153, 204, 0.3)');
      root.style.setProperty('--glass-bg', 'rgba(20, 20, 20, 0.9)');
      root.style.setProperty('--card-bg', 'rgba(26, 26, 26, 0.8)');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      // Light theme variables
      root.style.setProperty('--bg-primary', '#ffffff');
      root.style.setProperty('--bg-secondary', '#f8fafc');
      root.style.setProperty('--bg-tertiary', '#e2e8f0');
      root.style.setProperty('--text-primary', '#1a202c');
      root.style.setProperty('--text-secondary', '#4a5568');
      root.style.setProperty('--text-accent', '#3182ce');
      root.style.setProperty('--accent-primary', '#3182ce');
      root.style.setProperty('--accent-secondary', '#e53e3e');
      root.style.setProperty('--accent-gradient', 'linear-gradient(135deg, #3182ce 0%, #e53e3e 100%)');
      root.style.setProperty('--border-color', '#e2e8f0');
      root.style.setProperty('--shadow-light', 'rgba(0, 0, 0, 0.05)');
      root.style.setProperty('--shadow-medium', 'rgba(0, 0, 0, 0.1)');
      root.style.setProperty('--shadow-heavy', 'rgba(0, 0, 0, 0.15)');
      root.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.8)');
      root.style.setProperty('--card-bg', 'rgba(248, 250, 252, 0.8)');
      localStorage.setItem('portfolio-theme', 'light');
    }

    // Update body class for theme-specific styles
    document.body.className = isDarkMode ? 'dark-theme' : 'light-theme';
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const value = {
    isDarkMode,
    toggleTheme,
    theme: isDarkMode ? 'dark' : 'light'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;