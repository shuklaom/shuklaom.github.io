import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiCalendar, FiMapPin, FiCode, FiDownload } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const roles = ['Software Engineer', 'React Developer', 'Problem Solver', 'Java Developer', 'Game Developer', 'Web Developer', 'Team Player'];
    let currentIndex = 0;
    
    const rotateText = () => {
      if (typedRef.current) {
        typedRef.current.textContent = roles[currentIndex];
        currentIndex = (currentIndex + 1) % roles.length;
      }
    };
    
    rotateText();
    const interval = setInterval(rotateText, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: <FiCalendar />, value: '2025', label: 'Expected Graduation' },
    { icon: <FiMapPin />, value: 'Ames, IA', label: 'Location' },
    { icon: <FiCode />, value: '10+', label: 'Technologies' }
  ];

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Profile Image Circle - Top */}
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

          {/* Main Content */}
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

            <motion.div
              className="hero-action-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <a 
                href="#contact" 
                className="hero-btn hero-btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <FiMail />
                Get In Touch
              </a>
              <a 
                href="#projects" 
                className="hero-btn hero-btn-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Projects
              </a>
              <a 
                href="/assets/documents/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn hero-btn-secondary"
              >
                <FiDownload />
                View Resume
              </a>
            </motion.div>

          </motion.div>

          {/* Quick Info Cards */}
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
