import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { experiences } from './experienceData';
import { DURATION, STAGGER, TRANSFORM, viewportConfig } from '../../constants/animations';
import './Experience.css';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: STAGGER.STANDARD
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: TRANSFORM.Y_STANDARD },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION.STANDARD }
    }
  };

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: TRANSFORM.Y_STANDARD }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: DURATION.SLOW }}
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-description">
            Professional experience and technical roles that have shaped my skills
            and understanding of software development.
          </p>
        </motion.div>

        <motion.div
          className="experience-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {experiences.map((exp) => (
            <ExperienceCard 
              key={exp.id} 
              experience={exp} 
              variants={itemVariants} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
