import React from 'react';
import { motion } from 'framer-motion';
import SkillCategory from './SkillCategory';
import { skillCategories } from './skillsData';
import { DURATION, STAGGER, TRANSFORM, viewportConfig } from '../../constants/animations';
import './Skills.css';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: STAGGER.FAST
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: TRANSFORM.Y_SMALL },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION.MEDIUM }
    }
  };

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: TRANSFORM.Y_STANDARD }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: DURATION.SLOW }}
        >
          <h2 className="section-title">Skills</h2>
          <p className="section-description">
            Technical skills and tools I use to build software solutions.
          </p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={index}
              category={category}
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
