import React from 'react';
import './Home.css';
import googlePlay from '../assets/google-play-store logo.png';
import appStore from '../assets/app-store-logo.png';
import handMockup from '../assets/chatscreen-iphonemockup.png';
import Footer from './Footer';
import {FaShieldAlt } from 'react-icons/fa';

function Home() {
  return (
    <div className="home-page">
      <div className="home-container">
        <header className="hero-section">
          <div className="hero-content">
            <h1>Lutero Chat. Connect Freely.</h1>
            <p className="hero-subtitle">The secure, private chat app with calling, video, and communities.</p>
            
            <div className="store-links">
              <a href="https://apps.apple.com/us/app/lutero/id6749874059"><img src={appStore} alt="App Store" /></a>
              <a href="https://play.google.com/store/apps/details?id=com.elexistech.lutero"><img src={googlePlay} alt="Google Play" /></a>
            </div>
            
            <p className="hero-quote">
              <em>"Experience a secure, and modern messaging platform that puts your privacy first. Connect with friends, family, or your community through instant messaging, crystal-clear audio calls, video calls, and exclusive member groups — all in one powerful app."</em>
            </p>
          </div>
          
          <div className="mockup-container">
            <img className="mockup" src={handMockup} alt="App Screenshot" />
          </div>
        </header>

        <section className="core-section">
          <div className="vision-block">
            <div className="logo-circle">
              <img src='/lutero-icon.png' alt="App Logo" />
            </div>
            <div className="vision-text">
              <h2>Our Vision</h2>
              <p>
              "At Lutero, we're redefining private communication by building a community-powered messaging app that puts security, freedom, and connection at the forefront."
              </p>

              <p>
              "Our goal is to give people around the world—especially in underserved region. the ability to chat, call, and build communities without limitations."
              </p>
            </div>
          </div>

          <div className="features-block">
            <div className="section-header">
              <FaShieldAlt className="section-icon" />
              <h2>Core Features</h2>
            </div>
            <ul className="features-list">
              <li><span className="checkmark">✓</span>Private and secure messaging</li>
              <li><span className="checkmark">✓</span>End-to-end encryption</li>
              <li><span className="checkmark">✓</span>Audio & video calls</li>
              <li><span className="checkmark">✓</span>Read receipts</li>
              <li><span className="checkmark">✓</span>Privacy-first design</li>
              <li><span className="checkmark">✓</span>Chat backups</li>
            </ul>
          </div>
        </section>

        {/* <section className="premium-section">
          <div className="section-header">
            <FaCrown className="section-icon" />
            <h2>Upgrade to Premium</h2>
          </div>
          <p className="premium-subtitle">Get more out of Lutero with our premium subscription:</p>
          <ul className="premium-features">
            <li><span className="checkmark">✓</span>Ad-free experience</li>
            <li><span className="checkmark">✓</span>Create larger communities</li>
            <li><span className="checkmark">✓</span>Unlimited call duration</li>
            <li><span className="checkmark">✓</span>Premium badge in profile</li>
            <li><span className="checkmark">✓</span>Priority customer support</li>
            <li><span className="checkmark">✓</span>Early access to new features</li>
          </ul>
          <Link to="/premium" className="premium-btn">View Premium Details</Link>
        </section> */}
      </div>

      <Footer />
    </div>
  );
}

export default Home;