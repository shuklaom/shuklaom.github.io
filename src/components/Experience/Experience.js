import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Freelance Software Engnineer',
      company: 'DataAnnotation',
      location: 'Remote',
      period: 'February 2026 - Present',
      type: 'Freelance',
      description: '',
      achievements: [
        
      ]
    },
    {
      id: 2,
      title: 'Repair Technician',
      company: 'Iowa State University Book Store',
      location: 'Ames, Iowa',
      period: 'January 2024 - May 2024',
      type: 'Part-time',
      description: 'Worked on diagnosing and repairing hardware and software issues for Apple and Dell devices.',
      achievements: [
        'Worked on diagnosing and repairing hardware and software issues for Apple and Dell devices, including laptops, and desktops',
        'Responsibilities included display, motherboard, battery and keyboard replacements, troubleshooting operating system problems, and providing technical support to customers',
        'Maintained accurate repair records, and stayed updated with the latest industry trends to ensure high-quality service and customer satisfaction'
      ]
    },
    {
      id: 3,
      title: 'Sales Floor Associate - TechCyte',
      company: 'Iowa State University Book Store',
      location: 'Ames, Iowa',
      period: 'June 2022 - September 2022',
      type: 'Part-time',
      description: 'Provided customer service and technical support for technology products in the campus bookstore.',
      achievements: [
        'Recommended and helped choose computer devices to customers based on their major or position, researched and provided information on helpful accessories, software and tools and answered general technology questions',
        'Maintained floor displays and information presented to customers, inventory stocks in the store',
        'Handled sales and provided services related to technology needs of the students, faculty and staff on the campus'
      ]
    },
    {
      id: 4,
      title: 'Android Developer Intern',
      company: 'John Deere Academy',
      location: 'Bettendorf, Iowa',
      period: 'January 2020 - May 2020',
      type: 'Internship',
      description: '',
      achievements: [
        'Designed and built Android application user interface with intuitive navigation and user experience flows',
        'Implemented application logic and functionality while participating in Agile and Scrum development workflows',
        'Collaborated with team of 6 members using version control, code reviews, and collaborative development practices',
        'Tech Stack: Android Studio, Java, GitHub, Discord, WebEx, Trello'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
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
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp) => (
            <motion.article
              key={exp.id}
              className="experience-card"
              variants={itemVariants}
            >
              <div className="experience-header">
                <div className="experience-icon">
                  <FiBriefcase />
                </div>
                <div className="experience-main">
                  <div className="experience-title-group">
                    <h3 className="experience-title">{exp.title}</h3>
                    <span className="experience-type">{exp.type}</span>
                  </div>
                  <div className="experience-company">{exp.company}</div>
                  <div className="experience-meta">
                    <span className="meta-item">
                      <FiMapPin />
                      {exp.location}
                    </span>
                    <span className="meta-divider">•</span>
                    <span className="meta-item">
                      <FiCalendar />
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>

              <div className="experience-content">
                <p className="experience-description">{exp.description}</p>
                <ul className="achievement-list">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index} className="achievement-item">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
