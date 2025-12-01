import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCalendar, FiMapPin, FiTrendingUp } from 'react-icons/fi';
import './Education.css';

const Education = () => {
  const education = {
    degree: 'Bachelor of Science, Software Engineering',
    school: 'Iowa State University',
    location: 'Ames, Iowa',
    period: '2020 - 2025',
    gpa: null,
    status: 'Expected May 2025',
    achievements: [
      'Rank #1 of 10+ C++ Programming',
      'Strong foundation in software development and Agile methodologies',
      'Extensive project experience in web and mobile development',
      'Active participation in software development teams'
    ],
    relevantCourses: [
      'Data Structures',
      'Algorithms',
      'Software Design',
      'Database Systems',
      'Web Development',
      'Mobile Development',
      'Operating Systems',
      'Computer Architecture'
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="education" className="education section">
      <div className="container container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Education</h2>
          <p className="section-description">
            Currently pursuing my degree with a focus on software engineering principles
            and practical application development.
          </p>
        </motion.div>

        <motion.div
          className="education-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="education-main" variants={itemVariants}>
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
              <div className="education-status">{education.status}</div>
            </div>
          </motion.div>

          <motion.div className="education-details" variants={itemVariants}>
            <div className="detail-section">
              <h4 className="detail-title">Key Achievements</h4>
              <ul className="achievement-list">
                {education.achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    className="achievement-item"
                    variants={itemVariants}
                  >
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="detail-section">
              <h4 className="detail-title">Relevant Coursework</h4>
              <div className="course-grid">
                {education.relevantCourses.map((course, index) => (
                  <motion.div
                    key={index}
                    className="course-tag"
                    variants={itemVariants}
                    whileHover={{ y: -2 }}
                  >
                    {course}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
