// Animation Constants
// Centralized configuration for all animation timings and behaviors

// ============================================================================
// DURATIONS (in seconds)
// ============================================================================
export const DURATION = {
  // Component transitions
  INSTANT: 0.2,      // Quick hover effects, button presses
  FAST: 0.3,         // Navigation items, theme toggle
  MEDIUM: 0.5,       // Card animations, skill categories
  STANDARD: 0.6,     // Default component animations
  SLOW: 0.8,         // Section reveals, page transitions
  
  // Background animations (longer durations)
  BG_FAST: 15,       // Quick background movements
  BG_MEDIUM: 20,     // Standard background animations
  BG_SLOW: 22,       // Slow background movements
  BG_VERY_SLOW: 25,  // Very slow background animations
};

// ============================================================================
// DELAYS (in seconds)
// ============================================================================
export const DELAY = {
  NONE: 0,
  TINY: 0.2,
  SMALL: 0.4,
  MEDIUM: 0.5,
  LARGE: 0.7,
  X_LARGE: 0.9,
  XX_LARGE: 1.1,
  XXX_LARGE: 1.5,
};

// ============================================================================
// STAGGER (in seconds)
// ============================================================================
export const STAGGER = {
  FAST: 0.1,      // Skills grid
  STANDARD: 0.15, // Projects, Experience cards
};

// ============================================================================
// VIEWPORT SETTINGS
// ============================================================================
export const VIEWPORT = {
  ONCE: true,              // Trigger animation only once
  MARGIN: '-100px',        // Start animation 100px before element enters viewport
  MARGIN_SMALL: '-50px',   // Alternative smaller margin
};

// ============================================================================
// TRANSFORM VALUES
// ============================================================================
export const TRANSFORM = {
  // Y-axis movements
  Y_SMALL: 20,
  Y_STANDARD: 30,
  
  // Scale
  SCALE_UP: 1.05,
  SCALE_DOWN: 0.95,
  
  // Rotation
  ROTATE_HALF: -180,
  
  // X-axis movements
  X_TOGGLE: 24,  // Theme toggle switch movement
};

// ============================================================================
// EASING FUNCTIONS
// ============================================================================
export const EASING = {
  SMOOTH: [0.6, 0.05, 0.01, 0.9],  // Cubic bezier for smooth animations
};

// ============================================================================
// COMMON ANIMATION VARIANTS
// ============================================================================
export const fadeInUp = {
  hidden: { opacity: 0, y: TRANSFORM.Y_STANDARD },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: DURATION.SLOW }
  }
};

export const fadeInUpSmall = {
  hidden: { opacity: 0, y: TRANSFORM.Y_SMALL },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: DURATION.MEDIUM }
  }
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: DURATION.SLOW }
  }
};

export const staggerContainer = (staggerDelay = STAGGER.STANDARD) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay
    }
  }
});

export const cardVariants = {
  hidden: { opacity: 0, y: TRANSFORM.Y_STANDARD },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.STANDARD }
  }
};

// ============================================================================
// VIEWPORT CONFIGURATION OBJECT
// ============================================================================
export const viewportConfig = {
  once: VIEWPORT.ONCE,
  margin: VIEWPORT.MARGIN
};
