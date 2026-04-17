import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const ExperienceCard = ({ experience, variants }) => {
  return (
    <motion.article
      className="experience-card"
      variants={variants}
    >
      <div className="experience-header">
        <div className="experience-icon">
          <FiBriefcase />
        </div>
        <div className="experience-main">
          <div className="experience-title-group">
            <h3 className="experience-title">{experience.title}</h3>
            <span className="experience-type">{experience.type}</span>
          </div>
          <div className="experience-company">{experience.company}</div>
          <div className="experience-meta">
            <span className="meta-item">
              <FiMapPin />
              {experience.location}
            </span>
            <span className="meta-divider">•</span>
            <span className="meta-item">
              <FiCalendar />
              {experience.period}
            </span>
          </div>
        </div>
      </div>

      <div className="experience-content">
        <p className="experience-description">{experience.description}</p>
        <ul className="achievement-list">
          {experience.achievements.map((achievement, index) => (
            <li key={index} className="achievement-item">
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
};

export default ExperienceCard;
