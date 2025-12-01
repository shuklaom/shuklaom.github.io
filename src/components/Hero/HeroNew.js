import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Typed from 'typed.js';
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiArrowDown, FiMapPin, FiCode, FiStar } from 'react-icons/fi';
import { useTheme } from '../../contexts/ThemeContext';
import './Hero.css';

const Hero = () => {
  const typedRef = useRef(null);
  const heroRef = useRef(null);
  const { isDarkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  // Mouse tracking for interactive effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 500, damping: 100 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 100 });
  
  const rotateX = useTransform(springY, [-300, 300], [15, -15]);
  const rotateY = useTransform(springX, [-300, 300], [-15, 15]);

  useEffect(() => {
    const options = {
      strings: [
        'Software Engineer',
        'Java Developer', 
        'C++ Programmer',
        'Game Developer',
        'Problem Solver',
        'HackerRank #1 C++'
      ],
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    };

    const typed = new Typed(typedRef.current, options);
    setIsVisible(true);

    return () => {
      typed.destroy();
    };
  }, []);

  const handleMouseMove = (event) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(event.clientX - centerX);
      mouseY.set(event.clientY - centerY);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FiGithub,
      url: 'https://github.com/shuklaom',
      color: isDarkMode ? '#00d4ff' : '#3182ce',
      count: '8+'
    },
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      url: 'https://www.linkedin.com/in/om-shukla/',
      color: isDarkMode ? '#00d4ff' : '#0077b5',
      count: 'Connect'
    },
    {
      name: 'Email',
      icon: FiMail,
      url: 'mailto:shuklaom.jobs@gmail.com',
      color: isDarkMode ? '#ff6b6b' : '#e53e3e',
      count: 'Contact'
    }
  ];

  const stats = [
    {
      icon: FiCode,
      label: 'Languages',
      value: '6+',
      description: 'Programming Languages'
    },
    {
      icon: FiStar,
      label: 'Rank #1',
      value: 'C++',
      description: 'HackerRank Achievement'
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Iowa',
      description: 'Bettendorf, IA'
    }
  ];

  return (
    <section 
      id="home" 
      className="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Elements */}
      <div className="hero-background">
        <motion.div 
          className="floating-shapes"
          style={{
            rotateX: rotateX,
            rotateY: rotateY,
          }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`shape shape-${i + 1}`}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
          ))}
        </motion.div>
      </div>

      <div className="container">
        <div className="hero-content">
          {/* Main Hero Card */}
          <motion.div
            className="hero-main-card card"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
            }}
          >
            <div className="hero-text">
              <motion.div
                className="hero-badge"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <FiStar className="badge-icon" />
                <span>Software Engineering Student</span>
              </motion.div>
              
              <motion.h1
                className="hero-name gradient-text"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Om Shukla
              </motion.h1>
              
              <motion.div
                className="hero-role"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <span className="role-prefix">I'm a </span>
                <span ref={typedRef} className="typed-text gradient-text"></span>
              </motion.div>
              
              <motion.p
                className="hero-description"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                Software Engineering student at Iowa State University with experience in 
                Agile development. Passionate about creating innovative solutions using 
                Java, C++, and modern technologies.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                className="hero-actions"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <motion.a
                  href="/resume.pdf"
                  className="btn btn-primary"
                  download
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiDownload />
                  Download Resume
                </motion.a>
                <motion.button
                  className="btn btn-secondary"
                  onClick={() => scrollToSection('contact')}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.button>
              </motion.div>
            </div>

            {/* Profile Image */}
            <motion.div
              className="hero-image"
              initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="image-container">
                <motion.div 
                  className="image-placeholder"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span>Your Photo</span>
                  <div className="image-glow"></div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-card card"
                initial={{ opacity: 0, y: 20, rotateX: 45 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                whileHover={{ 
                  y: -5, 
                  rotateX: 5,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="stat-icon">
                  <stat.icon />
                </div>
                <div className="stat-content">
                  <div className="stat-value gradient-text">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-description">{stat.description}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="hero-social"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                className="social-card card"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 0.6, delay: 2 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  rotateY: 5,
                  borderColor: social.color,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="social-icon" style={{ color: social.color }}>
                  <social.icon />
                </div>
                <div className="social-info">
                  <span className="social-name">{social.name}</span>
                  <span className="social-count">{social.count}</span>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          <motion.button
            className="scroll-btn"
            onClick={() => scrollToSection('about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiArrowDown />
            <span>Scroll to explore</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;