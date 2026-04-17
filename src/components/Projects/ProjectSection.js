import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { DURATION, DELAY, TRANSFORM, viewportConfig } from '../../constants/animations';

const ProjectSection = ({ title, projects, delay = DELAY.TINY, cardVariants, containerVariants }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: TRANSFORM.Y_SMALL }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportConfig}
      transition={{ duration: DURATION.STANDARD, delay }}
      style={{ marginTop: delay > DELAY.TINY ? '4rem' : '3rem' }}
    >
      <h3 style={{ 
        fontSize: '1.75rem', 
        fontWeight: 700, 
        color: 'var(--text-primary)', 
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        {title}
      </h3>
      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            variants={cardVariants} 
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProjectSection;
