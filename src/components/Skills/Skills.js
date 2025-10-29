import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiDatabase, 
  FiGitBranch, 
  FiSettings,
  FiLayers,
  FiGlobe
} from 'react-icons/fi';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: FiCode,
      skills: [
        { name: 'Java', level: 90, color: '#ED8B00' },
        { name: 'C++', level: 95, color: '#00599C' },
        { name: 'C', level: 85, color: '#A8B9CC' },
        { name: 'JavaScript', level: 80, color: '#F7DF1E' },
        { name: 'HTML5', level: 85, color: '#E34F26' },
        { name: 'CSS', level: 80, color: '#1572B6' }
      ]
    },
    {
      category: 'Technologies & Frameworks',
      icon: FiDatabase,
      skills: [
        { name: 'Spring Boot', level: 85, color: '#6DB33F' },
        { name: 'JPA', level: 80, color: '#ED8B00' },
        { name: 'SQL', level: 85, color: '#336791' },
        { name: 'MySQL', level: 80, color: '#4479A1' },
        { name: 'Unity', level: 85, color: '#000000' },
        { name: 'Unreal Engine 5', level: 80, color: '#313131' }
      ]
    },
    {
      category: 'Tools & Platforms',
      icon: FiSettings,
      skills: [
        { name: 'Android Studio', level: 85, color: '#3DDC84' },
        { name: 'GitHub', level: 90, color: '#181717' },
        { name: 'Intel Quartus Prime', level: 75, color: '#0071C5' },
        { name: 'Verilog', level: 70, color: '#4A90E2' },
        { name: 'Blender', level: 75, color: '#F5792A' },
        { name: 'Apple GSX', level: 80, color: '#007AFF' }
      ]
    }
  ];

  const otherSkills = [
    'Hardware Diagnostics',
    'Troubleshooting', 
    'Record Keeping',
    'Game Development',
    'Mobile App Development',
    'Database Design',
    'REST APIs',
    'Agile Development',
    'Scrum Methodology',
    'Team Collaboration',
    'Problem Solving',
    'Technical Support'
  ];

  return (
    <section id="skills" className="skills section-padding">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="skills-content">
          <div className="skills-main">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                className="skill-category"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              >
                <div className="category-header">
                  <div className="category-icon">
                    <category.icon />
                  </div>
                  <h3 className="category-title">{category.category}</h3>
                </div>

                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.6, 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1 
                      }}
                    >
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          style={{ backgroundColor: skill.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="skills-sidebar"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="other-skills">
              <h3 className="sidebar-title">
                <FiLayers />
                Other Skills
              </h3>
              <div className="skills-tags">
                {otherSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.6 + index * 0.05 
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="learning-goals">
              <h3 className="sidebar-title">
                <FiGlobe />
                Currently Learning
              </h3>
              <ul className="learning-list">
                <li>Advanced Game Development</li>
                <li>Machine Learning</li>
                <li>Cloud Technologies</li>
                <li>DevOps Practices</li>
              </ul>
            </div>

            <div className="skill-summary">
              <h3 className="sidebar-title">
                <FiGitBranch />
                Quick Stats
              </h3>
              <div className="stats-grid">
                <div className="stat-box">
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Technologies</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">8+</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">3+</div>
                  <div className="stat-label">Years Exp.</div>
                </div>
                <div className="stat-box">
                  <div className="stat-number">#1</div>
                  <div className="stat-label">C++ Rank</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;