import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFilter, FiX } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Card Shark - Card Game for Android OS',
      category: 'Mobile',
      description: 'An Android card game with REST APIs to accept moves from game UI and process the logic.',
      longDescription: 'Developed a comprehensive Android card game featuring REST APIs for move processing, deck mechanism allowing players to create up to 3 unique decks of 10 cards, battle system where players use cards to battle with another player, and inventory tracking system. Built using Spring Boot, Java, JPA, SQL, and MySQL with GitHub for version control.',
      image: 'https://via.placeholder.com/400x300/667eea/ffffff?text=Card+Shark+Game',
      technologies: ['Spring Boot', 'Java', 'JPA', 'SQL', 'MySQL', 'GitHub'],
      github: 'https://github.com/shuklaom/card-shark',
      demo: '#',
      features: [
        'REST APIs for game logic processing',
        'Deck creation mechanism (up to 3 unique decks)',
        'Card battle system between players',
        'Inventory tracking for card ownership',
        'Database design and table structure',
        'Spring Boot backend architecture'
      ],
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Assignment Tracker Web Application',
      category: 'Full Stack',
      description: 'Web application for tracking assignments with user authentication and admin functionality.',
      longDescription: 'Built a comprehensive assignment tracking system using HTML 5, CSS, and JavaScript. Features include user authentication system, Add/Update User Admin page, Assignments management pages, and a dashboard to view list of assignments by due dates with necessary user actions and on-screen validations for user inputs and service calls.',
      image: 'https://via.placeholder.com/400x300/f093fb/ffffff?text=Assignment+Tracker',
      technologies: ['HTML5', 'CSS', 'JavaScript', 'User Authentication', 'Admin Panel'],
      github: 'https://github.com/shuklaom/assignment-tracker',
      demo: '#',
      features: [
        'User Authentication System',
        'Admin User Management',
        'Assignment Management Pages',
        'Due Date Dashboard',
        'Input Validation',
        'Service Call Validation',
        'Responsive Design'
      ],
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Traffic Light System',
      category: 'Hardware',
      description: 'Verilog-based traffic light system designed and implemented using Intel Quartus Prime.',
      longDescription: 'Designed and created a traffic light system in Verilog and Block design using Intel Quartus Prime. Implemented and tested the system using DE2-115 board. Created circuit for managing number of cars in each side of the lane at the intersection and implemented Verilog logic for managing greenlight in the intersection.',
      image: 'https://via.placeholder.com/400x300/4facfe/ffffff?text=Traffic+Light+System',
      technologies: ['Verilog', 'Intel Quartus Prime', 'DE2-115 Board', 'Block Design'],
      github: 'https://github.com/shuklaom/traffic-light-system',
      demo: '#',
      features: [
        'Verilog and Block design implementation',
        'DE2-115 board testing',
        'Car counting system',
        'Lane management logic',
        'Intersection control',
        'Greenlight management system'
      ],
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Pokémon Game',
      category: 'Game Development',
      description: 'C++ implementation of Pokémon game mechanics with multiple features.',
      longDescription: 'Implemented comprehensive Pokémon game mechanics using C++ including Pokémon stats and abilities from a Pokédex folder, multiple landscapes and maps with trainers and facilities, transfer system between maps, terrain generation, and User Interface development using C language.',
      image: 'https://via.placeholder.com/400x300/667eea/ffffff?text=Pokemon+Game',
      technologies: ['C++', 'C', 'Pokédex Integration', 'UI Development'],
      github: 'https://github.com/shuklaom/pokemon-game',
      demo: '#',
      features: [
        'Pokémon stats and abilities system',
        'Multiple landscapes and maps',
        'Pokémon trainers and facilities',
        'Map transfer system',
        'Terrain generation',
        'Custom User Interface'
      ],
      status: 'Completed'
    },
    {
      id: 5,
      title: 'Text-based Maze Runner',
      category: 'Game Development',
      description: 'C language implementation of a text-based maze game with team collaboration.',
      longDescription: 'Created a text-based Maze runner game in C language as part of a team project. Helped team members debug issues and fix defects. Worked on a team of 3 students to demonstrate various C coding skills like pointers, structures, file I/O, methods, exception handling. Created and implemented Maze to start the game, level transitions, points, and inventory for the player and non-player characters.',
      image: 'https://via.placeholder.com/400x300/f093fb/ffffff?text=Maze+Runner',
      technologies: ['C', 'Pointers', 'Structures', 'File I/O', 'Exception Handling'],
      github: 'https://github.com/shuklaom/maze-runner',
      demo: '#',
      features: [
        'Text-based maze navigation',
        'Level transition system',
        'Points and scoring system',
        'Player and NPC inventory',
        'Team collaboration',
        'C programming fundamentals'
      ],
      status: 'Completed'
    },
    {
      id: 6,
      title: '2D Chess Game',
      category: 'Game Development',
      description: 'Java implementation of a real-life Chess game with complete game logic.',
      longDescription: 'Created a comprehensive 2D Chess game using Java with real-life Chess rules implementation. Features include GUI game pieces and Chess board, Java logic to hold each game piece information and X/Y coordinates on the board, game piece object updates after every move, and check algorithms for each game piece to find all positions a selected piece can move.',
      image: 'https://via.placeholder.com/400x300/4facfe/ffffff?text=2D+Chess+Game',
      technologies: ['Java', 'Swing', 'Game Logic', 'GUI Development'],
      github: 'https://github.com/shuklaom/2d-chess-game',
      demo: '#',
      features: [
        'Complete Chess rules implementation',
        'GUI game pieces and board',
        'Coordinate tracking system',
        'Game piece object management',
        'Move validation algorithms',
        'Position calculation system'
      ],
      status: 'Completed'
    },
    {
      id: 7,
      title: 'John Deere Academy Android App',
      category: 'Mobile',
      description: 'Android application for Renting Farming and Agricultural Equipment with Agile development.',
      longDescription: 'Developed an Android app for Renting Farming and Agricultural Equipment. Designed and created User interface of an Android application, implemented navigation flows between screens and screen transitions, coded buttons and screen behaviors. Worked in an Agile team of 6 team members and participated in Scrum rituals during the project. Used Android Studio, Java, GitHub, Discord, WebEx meetings and Trello for Scrum process.',
      image: 'https://via.placeholder.com/400x300/667eea/ffffff?text=John+Deere+App',
      technologies: ['Android Studio', 'Java', 'GitHub', 'Discord', 'WebEx', 'Trello'],
      github: 'https://github.com/shuklaom/john-deere-academy',
      demo: '#',
      features: [
        'Equipment rental system',
        'User interface design',
        'Screen navigation flows',
        'Button and behavior coding',
        'Agile team collaboration',
        'Scrum methodology implementation'
      ],
      status: 'Completed'
    },
    {
      id: 8,
      title: '3D Multi-level Escape Room Simulator',
      category: 'Game Development',
      description: 'Unity-based 3D escape room game with multiple levels and interactive elements.',
      longDescription: 'Designed and created terrain and various sets of level 1 and level 3. Created game assets like tables, crates, household items. Implemented randomize code logic for each level. Worked in team of 3 members. Used C#, Unity Game creation platform, and Blender 3D model creation platform for development.',
      image: 'https://via.placeholder.com/400x300/f093fb/ffffff?text=3D+Escape+Room',
      technologies: ['C#', 'Unity', 'Blender', '3D Modeling'],
      github: 'https://github.com/shuklaom/3d-escape-room',
      demo: '#',
      features: [
        'Multi-level terrain design',
        'Custom 3D game assets',
        'Randomized code logic',
        'Interactive household items',
        'Team collaboration',
        '3D model creation'
      ],
      status: 'Completed'
    }
  ];

  const categories = ['All', 'Full Stack', 'Mobile', 'Game Development', 'Hardware'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <motion.div
          className="filter-buttons"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FiFilter className="filter-icon" />
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div className="projects-grid" layout>
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiGithub />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiExternalLink />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-badge more">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="project-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="project-modal"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="modal-close"
                  onClick={() => setSelectedProject(null)}
                >
                  <FiX />
                </button>
                
                <div className="modal-content">
                  <div className="modal-image">
                    <img src={selectedProject.image} alt={selectedProject.title} />
                  </div>
                  
                  <div className="modal-info">
                    <div className="modal-header">
                      <h3 className="modal-title">{selectedProject.title}</h3>
                      <span className={`project-status ${selectedProject.status.toLowerCase().replace(' ', '-')}`}>
                        {selectedProject.status}
                      </span>
                    </div>
                    
                    <p className="modal-description">{selectedProject.longDescription}</p>
                    
                    <div className="modal-features">
                      <h4>Key Features:</h4>
                      <ul>
                        {selectedProject.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="modal-tech">
                      <h4>Technologies Used:</h4>
                      <div className="tech-list">
                        {selectedProject.technologies.map((tech, index) => (
                          <span key={index} className="tech-badge">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="modal-links">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        <FiGithub />
                        View Code
                      </a>
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        <FiExternalLink />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;