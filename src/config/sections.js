/**
 * Sections Configuration
 * 
 * This file defines the order and properties of all sections in the portfolio.
 * Both the App component and Navigation automatically sync with this configuration.
 * 
 * HOW TO REORDER SECTIONS:
 * Simply rearrange the items in the 'sections' array below. The portfolio will update automatically.
 * 
 * HOW TO ADD A NEW SECTION:
 * 1. Add a new entry to the 'sections' array below with:
 *    - id: lowercase section name (must match the component's ID in JSX)
 *    - label: Display name for navigation
 *    - showInNav: true if it should appear in the navigation menu
 * 
 * 2. In App.js, add your component to the componentMap object:
 *    import YourComponent from './components/YourComponent/YourComponent';
 *    const componentMap = {
 *      ...existing,
 *      yourcomponent: YourComponent  // key must match the 'id' below
 *    };
 * 
 * 3. Create your component with id="yourcomponent" on the root element
 * 
 * That's it! Navigation will automatically include the new section.
 */

export const sections = [
  {
    id: 'hero',
    label: 'Home',
    showInNav: false // Hero is accessed via logo click
  },
  {
    id: 'experience',
    label: 'Experience',
    showInNav: true
  },
  {
    id: 'projects',
    label: 'Projects',
    showInNav: true
  },
  {
    id: 'education',
    label: 'Education',
    showInNav: true
  },
  {
    id: 'skills',
    label: 'Skills',
    showInNav: true
  },
  {
    id: 'contact',
    label: 'Contact',
    showInNav: true
  }
];

// Helper to get navigation items only
export const getNavItems = () => sections.filter(section => section.showInNav);

// Helper to get all section IDs in order
export const getSectionIds = () => sections.map(section => section.id);
