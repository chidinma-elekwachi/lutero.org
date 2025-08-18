import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import googlePlay from '../assets/google-play-store logo.png';
import appStore from '../assets/app-store-logo.png';
import { FaLinkedin, FaMailBulk, FaTwitter } from 'react-icons/fa';


function Footer() {
  return (
    <footer className="footer">

      <div className="footer-row">
        <div className="footer-logo-container">
            <img src='/lutero-icon.png' alt="Logo" className="footer-logo" />
        {/* <h2>Lutero</h2> */}
        </div>
        <Link 
          to="/"
        >
          Home
        </Link>
        <Link 
          to="/premium"
        >
          Premium
        </Link>
        <Link 
          to="/terms"
        >
          Terms
        </Link>
        <Link 
          to="/privacy"
        >
          Privacy policy
        </Link>
        <Link 
          to="/contact"
        >
          Contact Us
        </Link>
    
      </div>

      <div className="footer-row">

        <a href="mailto:support@lutero.org"><FaMailBulk size={24} /> Contact Support</a>
        
        <a href="https://x.com/lutero999" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /> X (Twitter)</a>

        <p className="footer-text">Developer: <a href="mailto:developer@lutero.org">developer@lutero.org</a></p>
        <a
                  href="https://www.linkedin.com/company/elexistech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-link"
                >
                  <FaLinkedin size={24} color="#0A66C2" />
                  Connect with ElexisTech
                </a>
      </div>

      <div className="footer-row app-badges">
        <a href="/" target="_blank" rel="noreferrer">
          <img src={googlePlay} alt="Google Play" className="store-badge" />
        </a>
        <a href="/" target="_blank" rel="noreferrer">
          <img src={appStore} alt="App Store" className="store-badge" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
