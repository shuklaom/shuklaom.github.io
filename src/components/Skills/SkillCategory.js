import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { DURATION } from '../../constants/animations';

const SkillCategory = ({ category, variants }) => {
  return (
    <motion.div
      className="skill-category"
      variants={variants}
    >
      <h3 className="category-title">{category.title}</h3>
      <div className="skill-tags">
        {category.skills.map((skill, skillIndex) => (
          <motion.span
            key={skillIndex}
            className="skill-tag"
            whileHover={{ y: -2 }}
            transition={{ duration: DURATION.INSTANT }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

SkillCategory.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  variants: PropTypes.object.isRequired
};

export default SkillCategory;
