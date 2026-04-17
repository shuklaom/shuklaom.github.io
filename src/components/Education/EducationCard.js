import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCalendar, FiMapPin, FiFileText } from 'react-icons/fi';

const EducationCard = ({ education, onDiplomaClick, variants }) => {
  return (
    <>
      <motion.div className="education-main" variants={variants}>
        <div className="education-header">
          <div className="education-icon">
            <FiAward />
          </div>
          <div className="education-info">
            <h3 className="education-degree">{education.degree}</h3>
            <div className="education-school">{education.school}</div>
            <div className="education-meta">
              <span className="meta-item">
                <FiMapPin />
                {education.location}
              </span>
              <span className="meta-divider">•</span>
              <span className="meta-item">
                <FiCalendar />
                {education.period}
              </span>
            </div>
          </div>
          <div className="education-status-container">
            <div className="education-status">{education.status}</div>
            {education.diplomaUrl && (
              <motion.button
                className="diploma-button"
                onClick={() => onDiplomaClick(education.diplomaUrl)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiFileText />
                <span>View Diploma</span>
              </motion.button>
            )}
          </div>
        </div>
      </motion.div>

      {education.achievements.length > 0 && (
        <motion.div className="education-details" variants={variants}>
          <div className="detail-section">
            <h4 className="detail-title">Key Achievements</h4>
            <ul className="achievement-list">
              {education.achievements.map((achievement, achIndex) => (
                <motion.li
                  key={achIndex}
                  className="achievement-item"
                  variants={variants}
                >
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </div>

          {education.relevantCourses.length > 0 && (
            <div className="detail-section">
              <h4 className="detail-title">Relevant Coursework</h4>
              <div className="course-grid">
                {education.relevantCourses.map((course, courseIndex) => (
                  <motion.div
                    key={courseIndex}
                    className="course-tag"
                    variants={variants}
                    whileHover={{ y: -2 }}
                  >
                    {course}
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      )}
    </>
  );
};

export default EducationCard;
