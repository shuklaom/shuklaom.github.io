import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const DiplomaModal = ({ isOpen, diplomaUrl, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="diploma-modal-overlay" onClick={onClose}>
      <motion.div
        className="diploma-modal"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="diploma-modal-close" onClick={onClose}>
          <FiX />
        </button>
        <iframe
          src={`${diplomaUrl}#toolbar=0&navpanes=0&scrollbar=0`}
          className="diploma-iframe"
          title="Diploma"
        />
      </motion.div>
    </div>
  );
};

DiplomaModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  diplomaUrl: PropTypes.string,
  onClose: PropTypes.func.isRequired
};

export default DiplomaModal;
