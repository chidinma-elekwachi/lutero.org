import React from 'react';
import './styles.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <div className="contact-container">
      <img src="/lutero-icon.png" alt="Lutero Icon" className="logo" />
      
      <h1>Who We Are</h1>
      <p className="section-title">🔹 About the App</p>
      <p>
        This is a secure and easy-to-use mobile application designed for instant messaging and high-quality voice/video calls.
        Built with privacy and simplicity at its core, the app offers a smooth communication experience for individuals, groups,
        and communities. Whether users are chatting casually or organizing discussions, the app is built to support meaningful,
        real-time connection.
      </p>

      <p className="section-title">🔹 What It Plans to Achieve</p>
      <ul>
        <li>• Provide a private and secure space where users can communicate freely without external interference or surveillance.</li>
        <li>• Build a digital environment that’s fun and engaging, with a user-friendly interface that works for all age groups.</li>
        <li>• Lay the foundation for long-term growth, where advanced features and premium tools can be introduced later without disrupting the core experience.</li>
        <li>• Empower users to stay connected through fast, reliable messaging and calling — anytime, anywhere.</li>
      </ul>

      <p className="section-title">🔹 How It Can Help Users</p>
      <ul>
        <li>✅ <strong>True Privacy:</strong> Messages and calls are fully encrypted, giving users complete control over their communications.</li>
        <li>✅ <strong>Crystal-Clear Calls:</strong> High-quality voice and video, even with limited internet connectivity.</li>
        <li>✅ <strong>Effortless Messaging:</strong> Chat one-on-one or in groups, share media, voice notes, and more.</li>
        <li>✅ <strong>Designed for Everyone:</strong> Simple enough for casual users, yet powerful enough for more organized conversations.</li>
        <li>✅ <strong>Future-Ready:</strong> Built to grow — with plans to introduce useful features and premium tools over time, based on user feedback and needs.</li>
      </ul>

      <h2>Need a website or mobile app?</h2>
      <p>
        Get in touch with the developers at <a href="mailto:developer@lutero.org">developer@lutero.org</a><br />
        Built by <strong>ElexisTech</strong>, specialists in high-performance web and mobile applications.
      </p>

      <a href="https://www.linkedin.com/company/elexistech/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
        <FaLinkedin name="linkedin-square" size={24} color="#0A66C2" /> Connect with us on LinkedIn
      </a>
    </div>
  );
}

export default Contact;
