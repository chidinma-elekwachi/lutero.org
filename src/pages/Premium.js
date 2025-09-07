import React from 'react';
import './Premium.css';
import goPremiumIcon from '../assets/go-preiumluter.png';
import Footer from './Footer';
import { FaCrown, FaAd, FaUsers, FaPhone, FaStar, FaHeadset, FaRocket } from 'react-icons/fa';

function Premium() {
  return (
    <div className="premium-page">
      <div className="premium-container">
        <div className="premium-header">
          <div className="premium-icon">
            <FaCrown />
          </div>
          <h1>Upgrade to Premium</h1>
          <p>Unlock exclusive features and take your Lutero experience to the next level.</p>
        </div>

        <div className="premium-content">
          <div className="premium-benefits">
            <h2>Why Go Premium?</h2>
            <ul className="benefits-list">
              <li>
                <div className="benefit-icon">
                  <FaAd />
                </div>
                <div className="benefit-text">
                  <strong>Ad-free Experience</strong>
                  <p>Focus without distractions in a clean messaging environment.</p>
                </div>
              </li>
              <li>
                <div className="benefit-icon">
                  <FaUsers />
                </div>
                <div className="benefit-text">
                  <strong>Create Communities (256 Members)</strong>
                  <p>Build large interest-based groups and manage them with ease.</p>
                </div>
              </li>
              <li>
                <div className="benefit-icon">
                  <FaPhone />
                </div>
                <div className="benefit-text">
                  <strong>Unlimited Call Duration</strong>
                  <p>No more 1-hour limits on your voice and video calls.</p>
                </div>
              </li>
              <li>
                <div className="benefit-icon">
                  <FaStar />
                </div>
                <div className="benefit-text">
                  <strong>Premium Profile Badge</strong>
                  <p>Stand out and gain credibility with an exclusive badge.</p>
                </div>
              </li>
              <li>
                <div className="benefit-icon">
                  <FaHeadset />
                </div>
                <div className="benefit-text">
                  <strong>Priority Support</strong>
                  <p>Get faster assistance from our dedicated support team.</p>
                </div>
              </li>
              <li>
                <div className="benefit-icon">
                  <FaRocket />
                </div>
                <div className="benefit-text">
                  <strong>Early Access</strong>
                  <p>Be the first to try new features before everyone else.</p>
                </div>
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
            <div className="pricing-card">
              <div className="card-header">
                <h3>Local Plan (NGN)</h3>
                <p className="price">₦3,499 <span>/month</span></p>
              </div>
              <ul className="plan-features">
                <li>All Premium Features</li>
                <li>Local Currency Payment</li>
                <li>Auto-renewal</li>
              </ul>
              <a href='/' className="pricing-btn">
                Pay with Paystack
              </a>
            </div>
            
            <div className="pricing-card featured">
              <div className="card-badge">Popular</div>
              <div className="card-header">
                <h3>Global Plan (USD)</h3>
                <p className="price">$5 <span>/month</span></p>
              </div>
              <ul className="plan-features">
                <li>All Premium Features</li>
                <li>International Payment</li>
                <li>Auto-renewal</li>
              </ul>
              <a href='/' className="pricing-btn">
                Pay in USD
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Premium;