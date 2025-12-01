import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 75 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -75 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 75 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const animationVariants = {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer
};

export default function RevealAnimation({ 
  children, 
  variant = 'fadeInUp', 
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.3,
  className = ''
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  const selectedVariant = animationVariants[variant] || animationVariants.fadeInUp;
  
  const customVariant = {
    hidden: selectedVariant.hidden,
    visible: {
      ...selectedVariant.visible,
      transition: {
        ...selectedVariant.visible.transition,
        delay,
        duration
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={customVariant}
    >
      {children}
    </motion.div>
  );
}

// Stagger children component
export function StaggerChildren({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      transition={{ delayChildren: delay }}
    >
      {children}
    </motion.div>
  );
}

// Individual stagger item
export function StaggerItem({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={fadeInUp}
    >
      {children}
    </motion.div>
  );
}
