import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiSmartphone, FiGlobe } from 'react-icons/fi';
import './About.css';

const About = () => {
  const services = [
    {
      icon: FiCode,
      title: 'Software Development',
      description: 'Building robust applications using Java, C++, and modern programming languages with focus on clean, maintainable code.'
    },
    {
      icon: FiGlobe,
      title: 'Game Development',
      description: 'Learning and developing games primarily using Unreal Engine with growing expertise in C++ and game development fundamentals.'
    },
    {
      icon: FiLayout,
      title: 'Mobile Development',
      description: 'Developing Android applications using Java and modern mobile development practices for optimal user experience.'
    },
    {
      icon: FiSmartphone,
      title: 'Technical Consultation',
      description: 'Providing technology advice and solutions with certified expertise in hardware diagnostics and system troubleshooting.'
    }
  ];

  const stats = [
    { number: '10+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '5', label: 'Programming Languages' },
    { number: 'C++', label: 'HackerRank #1' }
  ];

  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know more about who I am, what I do, and what skills I have
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-info">
              <h3 className="about-title">Know Me Better</h3>
              <p className="about-description">
                I'm a passionate Software Engineering student at Iowa State University with experience in 
                Agile software development. My journey in technology started with a fascination for how 
                systems work, leading me to master languages like Java, C++, and mobile development platforms.
              </p>
              <p className="about-description">
                Currently pursuing my Bachelor's degree in Software Engineering, I've gained hands-on experience 
                through various projects. From developing Android applications to creating complex game 
                systems, I enjoy solving challenging problems and building innovative solutions.
              </p>
              <p className="about-description">
                When I'm not coding, you can find me working on personal game development projects 
                or helping others with hardware diagnostics and repair through my certified technician expertise.
              </p>

              <div className="personal-info">
                <div className="info-item">
                  <span className="info-label">Name:</span>
                  <span className="info-value">Om Shukla</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Location:</span>
                  <span className="info-value">Bettendorf, Iowa, United States</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email:</span>
                  <span className="info-value">shuklaom.jobs@gmail.com</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Phone:</span>
                  <span className="info-value">563-726-4808</span>
                </div>
              </div>
            </div>

            <motion.div
              className="about-stats"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-item"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="about-services"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="services-title">What I Do</h3>
            <div className="services-grid">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="service-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="service-icon">
                    <service.icon />
                  </div>
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-description">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;