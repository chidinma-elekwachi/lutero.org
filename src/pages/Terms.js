import React from 'react';
import './styles.css';
import Footer from './Footer';

function Terms() {
  return (
    <div className="container">
      <div className="terms-container">
        <h1 className="main-title">Lutero Terms of Service</h1>
        <p className="last-updated">Last Updated: 1st February, 2025</p>

        {/* 1. General Terms */}
        <section className="term-section">
          <h2><span className="term-number">1.</span> General Terms</h2>
          <p>
            The general terms and conditions set out the terms applying to and governing the usage of the Lutero app and how users can interact with the chat app.
          </p>
          <p>
            The term “us” or “we” refers to Lutero App – a technology that allows the electronic conversation between two or more people.
          </p>
          <p>
            By using Lutero ("the App"), you conﬁrm that you have read, understood, and accept these Terms and agree to comply with them. If you do not agree, please do not use the App.
          </p>
        </section>

        {/* 2. Your Account */}
        <section className="term-section">
          <h2><span className="term-number">2.</span> Your Account</h2>
          <p>
            You agree to provide true, accurate and complete information about yourself. If you provide any fraudulent or untrue information, we reserve the right to suspend or terminate your account and refuse any current or future use of the Lutero services.
          </p>
          <p>You are responsible for:</p>
          <ul>
            <li>Keeping your login details secure</li>
            <li>All activities under your account</li>
            <li>Ensuring your use complies with all applicable laws</li>
          </ul>
          <p><strong>Access to Information:</strong> To modify or delete your personal information, please adjust your account settings.</p>
        </section>

        {/* 3. Acceptable Use */}
        <section className="term-section">
          <h2><span className="term-number">3.</span> Acceptable Use</h2>
          <p>You must not:</p>
          <ul>
            <li>Use Lutero for illegal activities or to share unlawful content</li>
            <li>Attempt to gain unauthorized access to the App or its systems</li>
            <li>Spam other users or distribute malware</li>
            <li>Reverse-engineer or modify the App's code</li>
          </ul>
          <p><strong>Your obligation:</strong> Use Lutero services only for lawful purposes. Any conduct that interferes with other users’ ability to enjoy the service will not be tolerated.</p>
          <p>You agree not to use the services for purposes that:</p>
          <ul>
            <li>Breach any applicable laws</li>
            <li>Are defamatory, pornographic, incite crime, terrorism, or other offenses</li>
            <li>Are misleading or impersonate someone else</li>
            <li>Violate intellectual property rights</li>
          </ul>
        </section>

        {/* Limitation of Liability */}
        <section className="term-section">
          <h2>Limitation of Liability</h2>
          <p>
            Lutero shall not be liable for any direct, indirect, incidental, or special damages including lost profits, data, or other losses. The remedy for any claim is to stop using the Lutero app.
          </p>
          <p>
            If we are found liable, our liability will not exceed the amounts you paid to us for our services.
          </p>
        </section>

        {/* 4. Content Ownership */}
        <section className="term-section">
          <h2><span className="term-number">4.</span> Content Ownership</h2>
          <p>
            You retain ownership of all content you create in Lutero. By using the App, you grant us a worldwide license to store, display, and distribute this content solely to operate and improve the service.
          </p>
          <p>
            Lutero owns all the contents on the app as well as the design, coordination, and arrangement.
          </p>
          <p>
            Unauthorized copying, publishing, broadcasting, or commercial use without prior written consent is prohibited.
          </p>
        </section>

        {/* 5. Service Limitations */}
        <section className="term-section">
          <h2><span className="term-number">5.</span> Service Limitations</h2>
          <p>We do not guarantee that:</p>
          <ul>
            <li>The App will always be available or error-free</li>
            <li>Messages will be delivered without delay</li>
            <li>Third-party services will meet expectations</li>
          </ul>
        </section>

        {/* Indemnity & Warranty Disclaimer */}
        <section className="term-section">
          <h2>Indemnity</h2>
          <p>
            You agree to indemnify and hold harmless Lutero from all claims arising from your use of the services.
          </p>
          <h2>Warranty Disclaimer</h2>
          <p>
            The services are provided without warranties of any kind. You use Lutero at your own risk.
          </p>
        </section>

        {/* 6. Termination */}
        <section className="term-section">
          <h2><span className="term-number">6.</span> Termination</h2>
          <p>
            We may terminate or restrict access to the App for any user who violates these Terms.
          </p>
        </section>
      </div>

      {/* Privacy Policy */}
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
      </div>

      <Footer />
    </div>
  );
}

export default Terms;
