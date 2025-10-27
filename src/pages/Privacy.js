import React from 'react';
import './styles.css';
import Footer from './Footer';

function Privacy() {
  return (
    <div className='container'>
      <div className="privacy-container">
        <h1 className="main-title">Lutero Privacy Policy</h1>
        <p className="last-updated">Last Updated: 1st February, 2025</p>

        <section className="policy-section">
          <h2>1. Information We Collect</h2>
          <p><strong>a) Information You Provide:</strong></p>
          <ul>
            <li>Account details (username, email address)</li>
            <li>Messages and media you send</li>
          </ul>
          <p><strong>b) Automatic Information:</strong></p>
          <ul>
            <li>Device information (model, OS version)</li>
            <li>Usage data (features accessed, session length)</li>
          </ul>
          <p><strong>c) Advertising Data (via AdMob):</strong></p>
          <ul>
            <li>Advertising identifiers</li>
            <li>IP address (for geo-targeting)</li>
            <li>Interaction data with ads</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>2. How We Use Information</h2>
          <ul>
            <li>Provide and improve the App</li>
            <li>Display relevant ads via AdMob</li>
            <li>Ensure security and prevent abuse</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>3. Data Sharing</h2>
          <ul>
            <li>Google AdMob: For ad personalization</li>
            <li>Law enforcement: When legally required</li>
            <li>Service providers: For essential App operations</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. Your Choices</h2>
          <ul>
            <li>Opt-out of personalized ads via device settings</li>
            <li>Request account deletion by contacting us</li>
            <li>Disable certain data collection in App settings</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>5. Data Security</h2>
          <ul>
            <li>End-to-end encryption for messages</li>
            <li>Regular security audits</li>
            <li>Access controls for staff</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>6. Children's Privacy</h2>
          <p>
            Lutero is not intended for users under the age of 13. We do not knowingly collect data from children.
          </p>
        </section>

        <section className="policy-section">
          <h2>7. Changes to This Policy</h2>
          <p>
            We will notify users of significant changes through the App.
          </p>
        </section>

        <section className="policy-section">
          <h2>8. Terms of Use & User Conduct</h2>
          <p>To ensure a safe and respectful platform, all users must follow these rules:</p>

          <p><strong> Allowed:</strong></p>
          <ul>
            <li>Friendly and respectful conversation</li>
            <li>Helpful interactions and positive engagement</li>
          </ul>

          <p><strong>Not Allowed:</strong></p>
          <ul>
            <li>Bullying, harassment, hate speech, or discrimination</li>
            <li>Sexual content, nudity, sexually suggestive messages</li>
            <li>Violence, threats, or encouragement of harm</li>
            <li>Illegal activities including fraud or drug-related content</li>
            <li>Spam, fake profiles, or misleading information</li>
          </ul>

          <p>If any rule is violated, Lutero may remove content or restrict access to the platform.</p>
        </section>

        <section className="policy-section">
          <h2>9. Safety, Reporting & Moderation</h2>
          <p>
            We take user safety seriously. If you encounter abusive or harmful behavior, you can report or block the user directly from their profile or messages.
          </p>

          <ul>
            <li>Reported content is reviewed within 24 hours</li>
            <li>We may remove harmful or illegal material to protect the community</li>
            <li>Serious or repeated violations may lead to account suspension or permanent removal</li>
          </ul>

          <p>
            By using Lutero, you agree to help keep the community safe and respectful for everyone.
          </p>
        </section>


      </div>
      <Footer />
    </div>
  )
}

export default Privacy;
