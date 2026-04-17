import React from 'react';
import { motion } from 'framer-motion';
import { DURATION } from '../../constants/animations';

const ContactCard = ({ method, variants }) => {
  return (
    <motion.a
      href={method.link}
      target={method.link.startsWith('http') ? '_blank' : '_self'}
      rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
      className="contact-card"
      variants={variants}
      whileHover={{ y: -4 }}
      transition={{ duration: DURATION.INSTANT }}
    >
      <div className="contact-icon">{method.icon}</div>
      <div className="contact-info">
        <h3 className="contact-label">{method.label}</h3>
        <p className="contact-value">{method.value}</p>
      </div>
    </motion.a>
  );
};

export default ContactCard;
