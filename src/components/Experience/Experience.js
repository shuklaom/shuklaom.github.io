import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Repair Technician',
      company: 'Iowa State University Book Store',
      location: 'Iowa State University',
      duration: 'Jan 2024 - May 2024 (5 months)',
      type: 'Part-time',
      description: [
        'Worked on diagnosing and repairing hardware and software issues for Apple and Dell devices, including laptops and desktops',
        'Responsibilities included display, motherboard, battery and keyboard replacements, troubleshooting operating system problems, and providing technical support to customers',
        'Maintained accurate repair records, and stayed updated with the latest industry trends to ensure high-quality service and customer satisfaction'
      ],
      technologies: ['Hardware Diagnostics', 'Troubleshooting', 'Record Keeping', 'Apple GSX', 'Technical Support']
    },
    {
      title: 'Sales Floor Associate - TechCyte',
      company: 'Iowa State University Book Store',
      location: 'Iowa State University',
      duration: 'Jun 2022 - Sep 2022 (4 months)',
      type: 'Part-time',
      description: [
        'Recommended and helped choose computer devices to customers based on their major or position',
        'Researched and provided information on helpful accessories, software and tools',
        'Answered general technology questions and provided technical support',
        'Handled sales procedures and provided services related to technology needs of students, faculty and staff'
      ],
      technologies: ['Customer Service', 'Sales', 'Technology Consultation', 'Product Knowledge']
    }
  ];

  const education = [
    {
      degree: "Bachelor's degree, Software Engineering",
      institution: 'Iowa State University',
      location: 'Iowa State University',
      duration: '2020 - 2026',
      description: 'Currently pursuing Software Engineering degree with focus on programming languages, software development methodologies, and computer systems. Active in hands-on projects and collaborative development.'
    },
    {
      degree: 'High School Diploma',
      institution: 'High School',
      location: 'Bettendorf, Iowa',
      duration: '2016 - 2020',
      description: 'Completed high school education with strong foundation in mathematics and technology, preparing for advanced studies in software engineering.'
    }
  ];

  const certifications = [
    'Microsoft Technology Associate: Introduction to Programming with Java - Microsoft',
    'Unreal Engine 5 C++ The Ultimate Game Developer - Udemy', 
    'Introduction to C++ Programming and Unreal - University of Colorado',
    'More C++ Programming and Unreal - University of Colorado',
    'C++ Class Development - University of Colorado',
    'Intermediate Object-Oriented Programming for Unreal Games - University of Colorado',
    'C++ Programming for Unreal Game Development - University of Colorado',
    'Apple Certified Repair Technician - Apple',
    'Dell Certified Repair Technician - Dell Technologies'
  ];

  return (
    <section id="experience" className="experience section-padding">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education & Experience</h2>
          <p className="section-subtitle">
            My academic journey and work experience in technology and software development
          </p>
        </motion.div>

        <div className="experience-content">
          <div className="experience-main">
            <motion.div
              className="experience-section"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="subsection-title">
                <FiBriefcase />
                Work Experience
              </h3>
              
              <div className="timeline">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    className="timeline-item"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <div className="timeline-marker">
                      <div className="timeline-dot"></div>
                      {index < experiences.length - 1 && <div className="timeline-line"></div>}
                    </div>
                    
                    <motion.div
                      className="timeline-content"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="experience-header">
                        <div className="experience-info">
                          <h4 className="experience-title">{exp.title}</h4>
                          <h5 className="experience-company">{exp.company}</h5>
                          <div className="experience-meta">
                            <span className="experience-duration">
                              <FiCalendar />
                              {exp.duration}
                            </span>
                            <span className="experience-location">
                              <FiMapPin />
                              {exp.location}
                            </span>
                            <span className={`experience-type ${exp.type.toLowerCase()}`}>
                              {exp.type}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <ul className="experience-description">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                      
                      <div className="experience-technologies">
                        {exp.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="education-section"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="subsection-title">
                <FiBriefcase />
                Education
              </h3>
              
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="education-item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="education-info">
                    <h4 className="education-degree">{edu.degree}</h4>
                    <h5 className="education-institution">{edu.institution}</h5>
                    <div className="education-meta">
                      <span className="education-duration">
                        <FiCalendar />
                        {edu.duration}
                      </span>
                      <span className="education-location">
                        <FiMapPin />
                        {edu.location}
                      </span>
                    </div>
                    <p className="education-description">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="experience-sidebar"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="certifications-section">
              <h3 className="sidebar-title">Certifications</h3>
              <ul className="certifications-list">
                {certifications.map((cert, index) => (
                  <motion.li
                    key={index}
                    className="certification-item"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  >
                    {cert}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="achievements-section">
              <h3 className="sidebar-title">Key Achievements</h3>
              <ul className="achievements-list">
                <li>Rank #1 for C++ Programming - HackerRank (Jul 2023)</li>
                <li>Successfully completed all challenges for C++ Gold Badge</li>
                <li>Apple & Dell Certified Repair Technician</li>
                <li>Proficient in multiple programming languages</li>
                <li>Strong background in game development</li>
              </ul>
            </div>

            <div className="download-section">
              <h3 className="sidebar-title">Resume</h3>
              <a
                href="/resume.pdf"
                className="btn btn-primary download-btn"
                download
              >
                Download Full Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;