import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'Software Engineer',
        'Java Developer',
        'C++ Programmer',
        'Game Developer',
        'Problem Solver'
      ],
      typeSpeed: 80,
      backSpeed: 60,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

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
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      url: 'https://www.linkedin.com/in/om-shukla/',
      color: '#0077b5'
    },
    {
      name: 'Email',
      icon: FiMail,
      url: 'mailto:shuklaom.jobs@gmail.com',
      color: '#ea4335'
    }
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="hero-greeting"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1
              className="hero-name"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Om Shukla
            </motion.h1>
            
            <motion.div
              className="hero-role"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span>I'm a </span>
              <span ref={typedRef} className="typed-text"></span>
            </motion.div>
            
            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Software Engineering student with experience in Agile development and a passion for creating 
              innovative solutions using Java, C++, and modern technologies. Aiming to use knowledge of 
              programming and mobile application development to satisfy IT needs at your organization.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <a
                href="/resume.pdf"
                className="btn btn-primary"
                download
                aria-label="Download Resume"
              >
                <FiDownload />
                Download Resume
              </a>
              <button
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </motion.div>

            <motion.div
              className="hero-social"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5,
                    color: social.color 
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 1.4 + index * 0.1 
                  }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="image-container">
              <div className="image-placeholder">
                <span>Your Photo</span>
              </div>
              <div className="image-glow"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <button
            className="scroll-btn"
            onClick={() => scrollToSection('about')}
            aria-label="Scroll to About section"
          >
            <FiArrowDown />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;