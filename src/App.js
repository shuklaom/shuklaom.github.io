import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import SimpleBackground from './components/SimpleBackground/SimpleBackground';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';

// Configuration
import { sections } from './config/sections';

// Styles
import './App.css';

// Component mapping - Maps section IDs to their React components
const componentMap = {
  hero: Hero,
  education: Education,
  experience: Experience,
  skills: Skills,
  projects: Projects,
  contact: Contact
};

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <SimpleBackground />
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/" element={
              <>
                {sections.map(({ id }) => {
                  const Component = componentMap[id];
                  return Component ? <Component key={id} /> : null;
                })}
              </>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;