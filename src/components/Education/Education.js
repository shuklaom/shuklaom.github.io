import React, { useState } from 'react';
import { motion } from 'framer-motion';
import EducationCard from './EducationCard';
import DiplomaModal from './DiplomaModal';
import { educationList } from './educationData';
import { DURATION, DELAY, STAGGER, TRANSFORM, viewportConfig } from '../../constants/animations';
import './Education.css';

const Education = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentDiploma, setCurrentDiploma] = useState(null);

  const openDiplomaModal = (diplomaUrl) => {
    setCurrentDiploma(diplomaUrl);
    setModalOpen(true);
  };

  const closeDiplomaModal = () => {
    setModalOpen(false);
    setCurrentDiploma(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: STAGGER.FAST,
        delayChildren: DELAY.TINY
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: TRANSFORM.Y_SMALL },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION.STANDARD }
    }
  };

  return (
    <section id="education" className="education section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: TRANSFORM.Y_STANDARD }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: DURATION.SLOW }}
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
          viewport={viewportConfig}
        >
          {educationList.map((education, index) => (
            <React.Fragment key={index}>
              <EducationCard 
                education={education}
                onDiplomaClick={openDiplomaModal}
                variants={itemVariants}
              />
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      <DiplomaModal 
        isOpen={modalOpen}
        diplomaUrl={currentDiploma}
        onClose={closeDiplomaModal}
      />
    </section>
  );
};

export default Education;
