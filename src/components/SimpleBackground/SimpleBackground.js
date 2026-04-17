import React from 'react';
import { motion } from 'framer-motion';
import { DURATION } from '../../constants/animations';
import './SimpleBackground.css';

export default function SimpleBackground({ variant = 'default' }) {
  return (
    <div className="simple-background">
      {/* Animated gradient orbs */}
      <motion.div
        className="orb orb-1"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: DURATION.BG_MEDIUM,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="orb orb-2"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: DURATION.BG_VERY_SLOW,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="orb orb-3"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: DURATION.BG_FAST,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {variant === 'hero' && (
        <>
          <motion.div
            className="orb orb-4"
            animate={{
              x: [0, -80, 0],
              y: [0, 80, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: DURATION.BG_SLOW,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </>
      )}
    </div>
  );
}
