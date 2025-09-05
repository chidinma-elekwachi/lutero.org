import React from 'react';
import './styles.css';
import { FaLinkedin, FaShieldAlt, FaRocket, FaUsers, FaComments, FaEnvelope } from 'react-icons/fa';
import Footer from './Footer';

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="header-section">
          <div className="logo-circle">
            <img src="/lutero-icon.png" alt="Lutero Icon" />
          </div>
          <h1 className="page-title">Who We Are</h1>
          <p className="page-subtitle">Reimagining Connection, Grounded in Privacy</p>
        </div>

        <section className="about-section">
          <div className="section-header">
            <FaShieldAlt className="section-icon" />
            <h2>About the App</h2>
          </div>
          <p>
            Lutero is more than a messaging app; it's your sanctuary for connection. We provide a secure platform for instant messaging and high-definition voice and video calls, designed to protect your conversations without complicating your connection. Built on a foundation of privacy-first principles, we deliver a smooth and reliable experience that empowers individuals, groups, and communities to communicate with confidence.
          </p>
        </section>

        <section className="goals-section">
          <div className="section-header">
            <FaRocket className="section-icon" />
            <h2>What We Plan to Achieve</h2>
          </div>
          <ul className="goals-list">
            <li>Establish a trusted space for communication, completely free from surveillance and data mining.</li>
            <li>Offer a powerfully simple and intuitive interface that delights users of all ages and technical skill.</li>
            <li>Innovate thoughtfully, ensuring the app evolves without ever disrupting the user experience.</li>
            <li>Guarantee fast, dependable real-time communication for a global audience.</li>
          </ul>
        </section>

        <section className="benefits-section">
          <div className="section-header">
            <FaUsers className="section-icon" />
            <h2>How Lutero Helps You</h2>
          </div>
          <ul className="benefits-list">
            <li>
              <span className="checkmark">✓</span>
              <div className="benefit-content">
                <h3>Guaranteed Privacy</h3>
                <p>Every message and call is secured with automatic end-to-end encryption.</p>
              </div>
            </li>
            <li>
              <span className="checkmark">✓</span>
              <div className="benefit-content">
                <h3>Uncompromised Call Quality</h3>
                <p>Experience exceptional clarity and stability on voice and video calls.</p>
              </div>
            </li>
            <li>
              <span className="checkmark">✓</span>
              <div className="benefit-content">
                <h3>Seamless Messaging</h3>
                <p>Enjoy effortless one-on-one and group chats with media sharing.</p>
              </div>
            </li>
            <li>
              <span className="checkmark">✓</span>
              <div className="benefit-content">
                <h3>Inclusive by Design</h3>
                <p>An intuitive interface crafted for both everyday use and community organizing.</p>
              </div>
            </li>
            <li>
              <span className="checkmark">✓</span>
              <div className="benefit-content">
                <h3>Preserve Your Conversations</h3>
                <p>Rest easy with secure chat backups for your valuable messages.</p>
              </div>
            </li>
          </ul>
        </section>

        <section className="contact-info">
          <div className="section-header">
            <FaEnvelope className="section-icon" />
            <h2>Contact Support</h2>
          </div>
          <p>
            For support or general inquiries, email us at <a href="mailto:support@lutero.org">support@lutero.org</a>
          </p>
        </section>

        <section className="developer-section">
          <div className="section-header">
            <FaComments className="section-icon" />
            <h2>Need a Website or Mobile App?</h2>
          </div>
          <div className="dev-content">
            <img src="/elexistech.png" alt="ElexisTech Logo" className="elexis-logo" />
            <p>
              Built by <strong>ElexisTech</strong> — specialists in high-performance web and mobile applications.
              Let us bring your digital ideas to life with clean code and scalable design.
            </p>
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
            <FaLinkedin className="linkedin-icon" />
            Connect with ElexisTech on LinkedIn
          </a>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;