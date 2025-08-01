import React from 'react';
import './styles.css';
import goPremiumIcon from '../assets/go-preiumluter.png';
import Footer from './Footer';

function Premium() {
  return (
    <div className="premium-container">
      <div className="premium-header">
        <h1>Upgrade to Premium</h1>
        <p>Unlock exclusive features and take your experience to the next level.</p>
      </div>

      <div className="premium-content">
        <div className="premium-benefits">
          <h2>Why Go Premium?</h2>
          <ul>
            <li>
              <strong>🚫 Ad-free Experience:</strong> Focus without distractions.
            </li>
            <li>
              <strong>👥 Create Communities (256 Members):</strong> Build large interest-based groups.
            </li>
            <li>
              <strong>📞 Unlimited Call Duration:</strong> No more 1-hour limits.
            </li>
            <li>
              <strong>🏅 Premium Profile Badge:</strong> Stand out and gain credibility.
            </li>
            <li>
              <strong>⚡ Priority Support:</strong> Get faster assistance.
            </li>
            <li>
              <strong>🚀 Early Access:</strong> Be the first to try new features.
            </li>
          </ul>
        </div>

        <div className="premium-image">
          <img src={goPremiumIcon} alt="Premium Benefits Preview" />
        </div>
      </div>

      <div className="premium-pricing">
        <h2>Choose Your Plan</h2>
        <div className="pricing-cards">
          <div className="card">
            <h3>Local Plan (NGN)</h3>
            <p className="price">₦3,499 / month</p>
            <button className="btn"><a href='/'>Pay with Paystack</a></button>
          </div>
          <div className="card">
            <h3>Pay with USD</h3>
            <p className="price">$5 / month</p>
            <button className="btn"><a href='/'>Pay in USD</a></button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Premium;
