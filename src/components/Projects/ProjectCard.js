import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project, variants }) => {
  return (
    <motion.div
      className="project-card"
      variants={variants}
    >
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View source code">
              <FiGithub />
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="View live demo">
              <FiExternalLink />
            </a>
          )}
        </div>
      </div>

      {project.period && (
        <p style={{ 
          fontSize: '0.875rem', 
          color: 'var(--text-tertiary)', 
          marginBottom: '0.75rem',
          fontWeight: 500
        }}>
          {project.period}
        </p>
      )}

      <p className="project-description">{project.description}</p>

      <div className="project-tech">
        {project.technologies.map((tech, techIndex) => (
          <span key={techIndex} className="tech-tag">{tech}</span>
        ))}
      </div>

      {project.buttons && project.buttons.length > 0 && (
        <div className="project-buttons">
          {project.buttons.map((button, btnIndex) => (
            <a key={btnIndex} href={button.url} target="_blank" rel="noopener noreferrer" className="project-button">
              {button.label}
            </a>
          ))}
        </div>
      )}

      <div className="project-impact">
        <h4 className="impact-title">Key Achievements</h4>
        <ul className="impact-list">
          {project.impact.map((item, impactIndex) => (
            <li key={impactIndex}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    period: PropTypes.string,
    impact: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string,
    demo: PropTypes.string,
    buttons: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      })
    )
  }).isRequired,
  variants: PropTypes.object.isRequired
};

export default ProjectCard;
