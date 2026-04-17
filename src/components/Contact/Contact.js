import React from 'react';
import { motion } from 'framer-motion';
import ContactCard from './ContactCard';
import { contactMethods } from './contactData';
import { DURATION, DELAY, STAGGER, TRANSFORM, viewportConfig } from '../../constants/animations';
import './Contact.css';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: STAGGER.FAST
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: TRANSFORM.Y_SMALL },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: DURATION.MEDIUM }
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: TRANSFORM.Y_STANDARD }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: DURATION.SLOW }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-description">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          className="contact-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {contactMethods.map((method, index) => (
            <ContactCard 
              key={index}
              method={method}
              variants={itemVariants}
            />
          ))}
        </motion.div>

        <motion.div
          className="contact-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
          transition={{ duration: DURATION.SLOW, delay: DELAY.SMALL }}
        >
          <p>© 2025 Om Shukla. Built with React.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
