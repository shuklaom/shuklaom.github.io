import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Git', 'Tailwind CSS', 'React.js', 'C', 'C++', 'C#', 'Java', 'JavaScript', 'HTML/CSS', 'SQL', 'MySQL']
    },
    {
      title: 'Frameworks & Tools',
      skills: ['Spring Boot', 'JPA', 'Android Studio', 'Unity', 'Blender', 'GitHub', 'Discord', 'WebEx', 'Trello']
    },
    {
      title: 'Certifications',
      skills: ['Unreal Engine 5 C++ The Ultimate Game Developer', 'C++ Programming for Unreal Game Development', 'C++ Class Development', 'Microsoft Technology Associate: Introduction to Programming with Java', 'Apple Certified Repair Technician']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="skills section">
      <div className="container container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
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
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              variants={itemVariants}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="skill-tag"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
