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
        <h2> About the App</h2>
        <p>
          Lutero is more than a messaging app; it's your private digital commons. We provide a secure platform for instant messaging and high-definition voice and video calls, designed to protect your conversations without complicating your connection. Built on a foundation of privacy-first principles, we deliver a smooth and reliable experience that empowers individuals, groups, and communities to communicate with confidence.
        </p>
      </section>

      <section className="section">
        <h2> What It Plans to Achieve</h2>
        <ul>
          <li>• Establish a trusted space for communication, completely free from surveillance and data mining.</li>
          <li>• Offer a powerfully simple and intuitive interface that delights users of all ages and technical skill.</li>
          <li>• Innovate thoughtfully, ensuring the app evolves without ever disrupting the user experience.</li>
          <li>• Guarantee fast, dependable real-time communication for a global audience.</li>
        </ul>
      </section>

      <section className="section">
        <h2> How It Helps Users</h2>
        <ul>
          <li> <strong>Guaranteed Privacy:</strong> Every message and call is secured with automatic end-to-end encryption, ensuring your conversations remain exclusively yours.</li>
          <li><strong>Uncompromised Call Quality:</strong> Experience exceptional clarity and stability on voice and video calls, optimized to perform even on slower networks.</li>
          <li><strong>Seamless Messaging:</strong> Enjoy effortless one-on-one and group chats, complete with media sharing and read receipts.</li>
          <li><strong>Inclusive by Design:</strong> An intuitive, accessible interface crafted for both everyday use and advanced community organizing.</li>
          <li><strong>Preserve Your Conversations:</strong> Rest easy with secure chat backups, ensuring your valuable memories and messages are never lost.</li>
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
