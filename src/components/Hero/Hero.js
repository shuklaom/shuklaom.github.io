import React, { useEffect, useRef } from 'react';
import { FiCalendar, FiMapPin, FiCode } from 'react-icons/fi';
import HeroProfile from './HeroProfile';
import HeroContent from './HeroContent';
import HeroActions from './HeroActions';
import HeroStats from './HeroStats';
import './Hero.css';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const roles = ['Software Engineer', 'Game Developer', 'Java Developer', 'Problem Solver', 'React Developer', 'Web Developer', 'Team Player'];
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
    { icon: <FiCalendar />, value: '2025', label: 'Graduated' },
    { icon: <FiMapPin />, value: 'Bettendorf, IA', label: 'Location' },
    { icon: <FiCode />, value: '10+', label: 'Technologies' }
  ];

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          <HeroProfile />
          <HeroContent typedRef={typedRef} />
          <HeroActions />
          <HeroStats stats={stats} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
