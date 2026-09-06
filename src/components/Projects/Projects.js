import React from 'react';
import { motion } from 'framer-motion';
import ProjectSection from './ProjectSection';
import { universityProjects, preUniversityProjects, personalProjects } from './projectData';
import { DURATION, DELAY, STAGGER, TRANSFORM, viewportConfig } from '../../constants/animations';
import './Projects.css';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: STAGGER.STANDARD
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: TRANSFORM.Y_STANDARD },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION.STANDARD }
    }
  };

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: TRANSFORM.Y_STANDARD }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: DURATION.SLOW }}
        >
          <h2 className="section-title">Projects</h2>
          <p className="section-description">
            A selection of projects showcasing my technical abilities and problem-solving skills.
          </p>
        </motion.div>

        <ProjectSection 
          title="Personal Projects"
          projects={personalProjects}
          delay={DELAY.TINY}
          cardVariants={cardVariants}
          containerVariants={containerVariants}
        />

        <ProjectSection 
          title="University Projects"
          projects={universityProjects}
          delay={DELAY.SMALL}
          cardVariants={cardVariants}
          containerVariants={containerVariants}
        />

        <ProjectSection 
          title="Pre-University Projects"
          projects={preUniversityProjects}
          delay={DELAY.SMALL}
          cardVariants={cardVariants}
          containerVariants={containerVariants}
        />
      </div>
    </section>
  );
};

export default Projects;
