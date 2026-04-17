import React from 'react';
import { motion } from 'framer-motion';
import { DURATION, TRANSFORM } from '../../constants/animations';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <section className="privacy-policy section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: TRANSFORM.Y_STANDARD }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.SLOW }}
          className="privacy-content"
        >
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="last-updated">Last Updated: January 8, 2026</p>

          <div className="policy-section">
            <h2>1. Introduction</h2>
            <p>
              Welcome to my portfolio website. I am committed to protecting your privacy and 
              ensuring you have a positive experience on my site. This Privacy Policy explains 
              how I collect, use, and protect information from visitors.
            </p>
          </div>

          <div className="policy-section">
            <h2>2. Information I Collect</h2>
            <p>When you visit my website, I automatically collect the following information:</p>
            <ul>
              <li><strong>Timestamp:</strong> The date and time of your visit</li>
              <li><strong>Page URL/Path:</strong> Which page(s) you visited on my site</li>
              <li><strong>Browser Type:</strong> Chrome, Firefox, Safari, Edge, or other</li>
              <li><strong>Device Type:</strong> Whether you're visiting on Mobile or Desktop</li>
              <li><strong>Referrer:</strong> Where you came from (e.g., Google search, direct link)</li>
            </ul>
            <p>
              <strong>What I do NOT collect:</strong> I do not collect your IP address, 
              location data, personal information (name, email, phone), or any identifying information 
              without your explicit consent through a contact form.
            </p>
          </div>

          <div className="policy-section">
            <h2>3. How I Use This Information</h2>
            <p>I use the collected information to:</p>
            <ul>
              <li>Understand visitor patterns and traffic to my site</li>
              <li>Identify which pages are most popular or need improvement</li>
              <li>Improve user experience and site functionality</li>
              <li>Track the effectiveness of my portfolio in attracting visitors</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>4. Data Storage and Security</h2>
            <p>
              Visit information is stored in a private Discord server that only I have access to. 
              Discord retains this data indefinitely unless I manually delete messages. 
              I do not share this information with third parties.
            </p>
          </div>

          <div className="policy-section">
            <h2>5. Cookies and Tracking</h2>
            <p>
              I use browser session storage to prevent duplicate visit logging. 
              This is stored locally on your device and does not identify you personally.
            </p>
          </div>

          <div className="policy-section">
            <h2>6. Contact Form Data</h2>
            <p>
              If you submit the contact form on my website, the information you provide 
              (name, email, message) will be sent to my email address. 
              I will only use this information to respond to your inquiry.
            </p>
          </div>

          <div className="policy-section">
            <h2>7. Your Rights</h2>
            <p>
              Since the visit tracking is anonymous and does not personally identify you, 
              there is no opt-out mechanism. However, you can:
            </p>
            <ul>
              <li>Disable JavaScript in your browser to prevent visit logging</li>
              <li>Use privacy-focused browser extensions</li>
              <li>Contact me directly if you have concerns about data collection</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>8. Third-Party Links</h2>
            <p>
              My website may contain links to external websites. I am not responsible for 
              the privacy practices of third-party sites. Please review their privacy policies 
              before sharing any information.
            </p>
          </div>

          <div className="policy-section">
            <h2>9. Policy Changes</h2>
            <p>
              I may update this Privacy Policy from time to time. 
              Changes will be posted on this page with an updated "Last Updated" date.
            </p>
          </div>

          <div className="policy-section">
            <h2>10. Contact</h2>
            <p>
              If you have questions about this Privacy Policy or my data practices, 
              please contact me through the contact form on my website.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
