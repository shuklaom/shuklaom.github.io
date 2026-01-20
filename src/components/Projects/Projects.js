import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const universityProjects = [
    {
      title: 'RUMBLE - Outdoor Roomba',
      description: 'Designed and developed a responsive React-based web application for managing autonomous outdoor cleaning robots with secure authentication and real-time monitoring capabilities.',
      technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'Spring Boot', 'Java', 'REST APIs', 'Google Maps API', 'Git'],
      period: 'January 2025 - December 2025',
      impact: [
        'Implemented user registration and login system with password recovery, profile management, and form validation with user-friendly error handling',
        'Created an interactive dashboard featuring live robot location tracking via Google Maps API, fleet statistics visualization, and robot assignment management',
        'Developed comprehensive settings page allowing users to update profiles, change passwords, and manage account preferences with real-time validation',
        'Implemented modern UX features including typewriter animations, glassmorphism design, loading states, and accessibility standards',
        'Contributed REST API endpoints to Spring Boot backend for user profile management, password reset functionality, and robot-to-user assignment operations'
      ],
      github: 'https://github.com/shuklaom/RUMBLE_Git_Clone',
      demo: null,
      buttons: [
        { label: 'Project Team Website', url: '/assets/Websites/RUMBLE/TeamWebsite/index.html' }
      ]
    },
    {
      title: 'RSFS (Ridiculously Simple File System)',
      description: 'Developed a complete in-memory file system in C, implementing both basic and advanced file operations while mastering concurrent programming challenges.',
      technologies: ['C'],
      period: 'April 2024 - April 2024',
      impact: [
        'Built all 8 core API functions (open, append, read, fseek, close, delete, write, cut) supporting multi-block file storage with bitmap-based resource allocation.',
        'Solved the readers-writers concurrency problem using POSIX pthreads, allowing multiple readers simultaneous access while enforcing exclusive writer locks to prevent data corruption.',
        'Designed complete file system architecture including linked-list directory management, inode allocation tracking, and synchronized access controls across the entire system.',
        'Validated implementation thoroughly with sequential tests covering file operations across block boundaries and concurrent stress tests with simultaneous readers and writers to verify correctness under contention.'
      ],
      github: 'https://github.com/shuklaom/RSFS',
      demo: null
    },
    {
      title: 'Card Shark – Card Game for Android OS',
      description: 'Developed an Android card game with deck management and multiplayer functionality.',
      technologies: ['Spring Boot', 'Java', 'JPA', 'SQL', 'MySQL', 'GitHub'],
      period: 'August 2022 - December 2022',
      impact: [
        'Implemented REST APIs to accept moves from game UI and process the logic',
        'Implemented REST APIs to support a deck mechanism where player can create up to 3 unique decks of 10 cards to use in battles',
        'Implemented parts of game play where the player uses cards to battle with another player',
        'Implemented logic to keep inventory to track of cards the player owns',
        'Created database design and table structure to store information about cards, players, decks and lobby'
      ],
      github: 'https://github.com/shuklaom/Card_Shark',
      demo: null
    },
    {
      title: 'Assignment Tracker Web application',
      description: 'Developed UI for a web application using HTML 6, CSS, JavaScript to manage assignments and track due dates.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      period: 'January 2022 - May 2022',
      impact: [
        'Developed UI for a web application using HTML 6, CSS, JavaScript',
        'Designed and implemented screens for User authentication, Add/Update User Admin page, Assignments management pages and a dashboard to view list of assignments by due dates with necessary user actions and on-screen validations for user inputs and service calls'
      ],
      github: 'https://github.com/shuklaom/Assignment_Tracker_Web_Application',
      demo: null
    },
    {
      title: 'Traffic Light System',
      description: 'Designed and created a traffic light system in Verilog and Block design using Intel Quartus Prime.',
      technologies: ['Verilog', 'Intel Quartus Prime', 'DE2-115 board'],
      period: 'January 2022 - April 2022',
      impact: [
        'Implemented and tested the system using DE2-115 board',
        'Created circuit for managing number of cars in each side of the lane at the intersection',
        'Created Verilog logic for managing greenlight in the intersection'
      ],
      github: 'https://github.com/shuklaom/Traffic_Light_System',
      demo: null
    },
    {
      title: 'Pokémon Game',
      description: 'Implemented Pokémon stats and abilities from a Pokédex folder, multiple landscapes and maps with Pokémon trainers and facilities.',
      technologies: ['C', 'C++'],
      period: 'January 2022 - April 2022',
      impact: [
        'Implemented Pokémon stats and abilities from a Pokédex folder',
        'Implemented multiple landscapes and maps, Pokémon trainers and facilities, transfer between maps, terrain generation and User Interface using C language',
        'Implemented loading Pokémon into the maps, and Pokémon battles in C++'
      ],
      github: 'https://github.com/shuklaom/Pokemon_Game',
      demo: null
    },
    {
      title: 'Text based Maze runner',
      description: 'Created a text-based Maze runner game in C language to demonstrate various C coding skills.',
      technologies: ['C'],
      period: 'January 2021 - May 2021',
      impact: [
        'Created a text-based Maze runner game in C language. Helped team members debug issues and fix defects',
        'Worked on a team of 3 students to demonstrate various C coding skills like pointers, structures, file I/O, methods, exception handling',
        'Created and implemented Maze to start the game, level transitions, points, and inventory for the player and non-player characters'
      ],
      github: 'https://github.com/shuklaom/Text_Based_Maze_Runner',
      demo: null
    },
    {
      title: '2D Chess Game',
      description: 'Created real-life Chess using Java with GUI game pieces and a Chess board.',
      technologies: ['Java', 'Swing'],
      period: 'January 2021 - May 2021',
      impact: [
        'Created real-life Chess using Java',
        'Created GUI game pieces and a Chess board',
        'Implemented Java logic to hold each game piece information and X/Y coordinates on the board. Updated game piece objects after every move',
        'Implemented check algorithms for each game piece to find all positions a selected piece can move. The new position must be within piece movement parameters and must not already contain a different game piece'
      ],
      github: null,
      demo: null
    }
  ];

  const preUniversityProjects = [
    {
      title: 'Android app for Renting Farming and Agricultural Equipment',
      description: 'Designed and created a User interface of an Android application with navigation flows and screen transitions at John Deere Academy.',
      technologies: ['Android Studio', 'Java', 'GitHub', 'Discord', 'WebEx', 'Trello'],
      period: 'January 2020 - May 2020',
      impact: [
        'Designed and created a User interface of an Android application',
        'Implemented navigation flows between screens and screen transitions',
        'Coded buttons and screen behaviors',
        'Worked in an Agile team of 6 team members. Participated in Scrum rituals during the project'
      ],
      github: null,
      demo: null
    },
    {
      title: '3D Multi-level Escape Room Simulator',
      description: 'Designed and created terrain and various sets of level 1 and level 3 escape rooms using Unity Game creation platform.',
      technologies: ['C#', 'Unity', 'Blender'],
      period: 'January 2019 - May 2019',
      impact: [
        'Designed and created terrain and various sets of level 1 and level 3',
        'Created game assets like tables, crates, household items',
        'Implemented randomize code logic for each level',
        'Worked in team of 3 members'
      ],
      github: null,
      demo: null
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Projects</h2>
          <p className="section-description">
            A selection of projects showcasing my technical abilities and problem-solving skills.
          </p>
        </motion.div>

        {/* University Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginTop: '3rem' }}
        >
          <h3 style={{ 
            fontSize: '1.75rem', 
            fontWeight: 700, 
            color: 'var(--text-primary)', 
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            University Projects
          </h3>
          <motion.div
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {universityProjects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                variants={cardVariants}
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
            ))}
          </motion.div>
        </motion.div>

        {/* Pre-University Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ marginTop: '4rem' }}
        >
          <h3 style={{ 
            fontSize: '1.75rem', 
            fontWeight: 700, 
            color: 'var(--text-primary)', 
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Pre-University Projects
          </h3>
          <motion.div
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {preUniversityProjects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                variants={cardVariants}
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

                <div className="project-impact">
                  <h4 className="impact-title">Key Achievements</h4>
                  <ul className="impact-list">
                    {project.impact.map((item, impactIndex) => (
                      <li key={impactIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
