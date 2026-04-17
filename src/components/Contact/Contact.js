import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiPhone } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const contactMethods = [
    {
      icon: <FiPhone />,
      label: 'Phone',
      value: '(563) 726-4808',
      link: 'tel:+15637264808'
    },
    {
      icon: <FiMail />,
      label: 'Email',
      value: 'shuklaom.jobs@gmail.com',
      link: 'mailto:shuklaom.jobs@gmail.com'
    },
    {
      icon: <FiGithub />,
      label: 'GitHub',
      value: '@shuklaom',
      link: 'https://github.com/shuklaom'
    },
    {
      icon: <FiLinkedin />,
      label: 'LinkedIn',
      value: 'Om Shukla',
      link: 'https://www.linkedin.com/in/om-shukla/'
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
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
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
          viewport={{ once: true, margin: "-100px" }}
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target={method.link.startsWith('http') ? '_blank' : '_self'}
              rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
              className="contact-card"
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="contact-icon">{method.icon}</div>
              <div className="contact-info">
                <h3 className="contact-label">{method.label}</h3>
                <p className="contact-value">{method.value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="contact-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>© 2025 Om Shukla. Built with React.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
