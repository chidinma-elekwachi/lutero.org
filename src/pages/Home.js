import React from 'react';
import './styles.css';
import googlePlay from '../assets/google-play-store logo.png';
import appStore from '../assets/app-store-logo.png';
import handMockup from '../assets/chatscreen-iphonemockup.png';

import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
     

      <header className="hero">
        <h1>Lutero Chat. Connect Freely.</h1>
        <p>The secure, private chat app with calling, video, and communities.</p>
        <div className="store-links">
          <a href="/"><img src={appStore} alt="App Store" /></a>
          <a href="/"><img src={googlePlay} alt="Google Play" /></a>
        </div>
        <img className="mockup" src={handMockup} alt="App Screenshot" />
      </header>

      <section className="features">
        <h2>Core Features</h2>
        <ul>
          <li>✓ Private and secure messaging</li>
          <li>✓ End-to-end encryption</li>
          <li>✓ Audio & video calls</li>
          <li>✓ Read receipts</li>
          <li>✓ Privacy-first design</li>
          <li>✓ Chat backups</li>
        </ul>
      </section>

      <section className="premium-highlight">
        <h2>Upgrade to Premium</h2>
        <p>Get more out of Lutero with our premium subscription:</p>
        <ul>
          <li>✓ Ad-free experience</li>
          <li>✓ Create communities (256 members)</li>
          <li>✓ Unlimited call duration</li>
          <li>✓ Premium badge in profile</li>
          <li>✓ Priority customer support</li>
          <li>✓ Early access to new features</li>
        </ul>
        <Link to="/premium" className="btn">View Premium Details</Link>
      </section>
    </div>
  );
}

export default Home;