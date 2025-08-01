import React from 'react';
import './styles.css';
import { FaLinkedin } from 'react-icons/fa';
import Footer from './Footer';

function Contact() {
  return (
    <div className="container">
    <div className="contact-container">

      <div className="logo-circle">
        <img src="/lutero-icon.png" alt="Lutero Icon" />
      </div>

      <h1 className="page-title">Who We Are</h1>

      <section className="section">
        <h2>🔹 About the App</h2>
        <p>
          Lutero is a secure and easy-to-use mobile application designed for instant messaging and high-quality voice/video calls.
          Built with privacy and simplicity at its core, it offers a smooth communication experience for individuals, groups, and communities.
        </p>
      </section>

      <section className="section">
        <h2>🔹 What It Plans to Achieve</h2>
        <ul>
          <li>• Provide a private and secure space free from surveillance.</li>
          <li>• Create a fun, intuitive interface suitable for all ages.</li>
          <li>• Evolve without disrupting user experience.</li>
          <li>• Deliver fast, reliable real-time communication globally.</li>
        </ul>
      </section>

      <section className="section">
        <h2>🔹 How It Helps Users</h2>
        <ul>
          <li>✅ <strong>True Privacy:</strong> Fully encrypted messages and calls.</li>
          <li>✅ <strong>Crystal-Clear Calls:</strong> High-quality even with low internet.</li>
          <li>✅ <strong>Effortless Messaging:</strong> Share media, voice notes & more.</li>
          <li>✅ <strong>Designed for Everyone:</strong> Intuitive for both casual and power users.</li>
          <li>✅ <strong>Future-Ready:</strong> Regular updates & premium expansions coming.</li>
        </ul>
      </section>

      <section className="contact-info">
        <h2>Contact Support</h2>
        <p>
          For support or general inquiries, email us at <a href="mailto:support@lutero.org">support@lutero.org</a>
        </p>
      </section>

      <section className="developer-section">
        <div className="dev-header">
          <img src="/elexistech.png" alt="ElexisTech Logo" className="elexis-logo" />
          <div>
            <h2>Need a Website or Mobile App?</h2>
            <p>
              Built by <strong>ElexisTech</strong> — specialists in high-performance web and mobile applications.
              Let us bring your digital ideas to life with clean code, scalable design, and performance-driven development.
            </p>
          </div>
        </div>

        <p className="dev-contact">
          Get in touch: <a href="mailto:developer@lutero.org">developer@lutero.org</a>
        </p>

        <a
          href="https://www.linkedin.com/company/elexistech/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          <FaLinkedin size={24} color="#0A66C2" />
          Connect with ElexisTech on LinkedIn
        </a>
      </section>
</div>

      <Footer />
    </div>
  );
}

export default Contact;
