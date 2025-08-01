import React from 'react';
import './styles.css';
import Footer from './Footer';

function Terms() {
  return (
    <div className="container">
      <div className="terms-container">
  <h1>Lutero Terms of Service</h1>
  <p className="last-updated">Last Updated: 1st February, 2025</p>

  <section className="term-section">
    <h2><span className="term-number">1.</span> Acceptance of Terms</h2>
    <p>
      By accessing or using Lutero ("the App"), you agree to be bound by these Terms of Service ("Terms") and our Privacy Policy. If you do not agree, you must discontinue use immediately. We reserve the right to modify these Terms at any time, with changes effective upon posting. Continued use constitutes acceptance of revised Terms.
    </p>
  </section>

  <section className="term-section">
    <h2><span className="term-number">2.</span> Eligibility & Account Security</h2>
    <p>You must be at least 13 years old (or the legal age in your jurisdiction) to use Lutero.</p>
    <p>You are solely responsible for:</p>
    <ul>
      <li>Maintaining the confidentiality of your login credentials.</li>
      <li>All activities under your account.</li>
      <li>Compliance with applicable laws and these Terms.</li>
    </ul>
    <p>Notify us immediately of unauthorized access or security breaches.</p>
  </section>

  <section className="term-section">
    <h2><span className="term-number">3.</span> Acceptable Use Policy</h2>
    <p>You agree not to:</p>
    <ul>
      <li>Use Lutero for illegal, fraudulent, or harmful activities.</li>
      <li>Transmit viruses, malware, or spam.</li>
      <li>Reverse-engineer, decompile, or modify the App's code.</li>
      <li>Harass, impersonate, or violate others' rights.</li>
      <li>Bypass security measures or exploit vulnerabilities.</li>
    </ul>
    <p>Violations may result in termination of access and legal action.</p>
  </section>

  <section className="term-section">
    <h2><span className="term-number">4.</span> Intellectual Property & Licenses</h2>
    <p>Lutero retains ownership of all software, trademarks, and proprietary content.</p>
    <p>You retain ownership of user-generated content (UGC), but grant Lutero a non-exclusive, worldwide, royalty-free license to host, display, and process UGC solely to operate and improve the App.</p>
  </section>

  <section className="term-section">
    <h2><span className="term-number">5.</span> Disclaimers & Limitations of Liability</h2>
    <p>Lutero is provided "as-is" without warranties of merchantability, fitness, or non-infringement.</p>
    <p>We do not guarantee:</p>
    <ul>
      <li>Uninterrupted, error-free service.</li>
      <li>Timely message delivery.</li>
      <li>Accuracy of third-party services (e.g., AdMob ads).</li>
    </ul>
    <p>To the fullest extent permitted by law, Lutero is not liable for indirect, incidental, or consequential damages.</p>
  </section>

  <section className="term-section">
    <h2><span className="term-number">6.</span> Termination</h2>
    <p>We may suspend or terminate your access without notice for violations of these Terms or harmful behavior.</p>
  </section>

  <section className="term-section">
    <h2><span className="term-number">7.</span> Contact</h2>
    <p>For questions, contact: <a href="mailto:support@lutero.org">support@lutero.org</a></p>
  </section>
</div>

<div className="privacy-container">
  <h1>Lutero Privacy Policy</h1>
  <p className="last-updated">Last Updated: 1st February, 2025</p>
    <p>This Privacy Policy explains how Lutero ("the App") collects, uses, and shares your data. By using Lutero, you consent to the practices described in this policy.</p>        
  <section className="policy-section">
    <h2><span className="policy-number">1.</span> Information We Collect</h2>
    
    <h3>a: User-Provided Data:</h3>
    <ul>
      <li>Account details (email, username).</li>
      <li>Messages, media, and shared content.</li>
    </ul>
    
    <h3>b: Automatically Collected Data:</h3>
    <ul>
      <li>Device info (OS, model, IP address).</li>
      <li>Usage analytics (session duration, features used).</li>
      <li>
        Advertising data (via AdMob):
        <ul>
          <li>Ad identifiers, interactions</li>
          <li>Approximate location</li>
        </ul>
      </li>
    </ul>
  </section>

  <section className="policy-section">
    <h2><span className="policy-number">2.</span> How We Use Data</h2>
    <ul>
      <li>Provide, secure, and improve Lutero.</li>
      <li>Personalize ads via AdMob (Google's policies apply).</li>
      <li>Prevent fraud and comply with laws.</li>
    </ul>
  </section>

  <section className="policy-section">
    <h2><span className="policy-number">3.</span> Data Sharing & Third Parties</h2>
    <p>We share data only when necessary with:</p>
    <ul>
      <li><strong>AdMob:</strong> For ad personalization (opt-out via device settings).</li>
      <li><strong>Service Providers:</strong> For hosting, analytics, and security.</li>
      <li><strong>Legal Authorities:</strong> If required by law.</li>
    </ul>
  </section>

  <section className="policy-section">
    <h2><span className="policy-number">4.</span> User Rights & Choices</h2>
    <ul>
      <li>Opt-out of personalized ads (device settings).</li>
      <li>Delete account/data by contacting us.</li>
      <li>Disable cookies/tracking (may limit functionality).</li>
    </ul>
  </section>

  <section className="policy-section">
    <h2><span className="policy-number">5.</span> Security Measures</h2>
    <ul>
      <li>End-to-end encryption for messages.</li>
      <li>Regular security audits.</li>
      <li>Strict access controls for employees.</li>
    </ul>
  </section>

  <section className="policy-section">
    <h2><span className="policy-number">6.</span> Children's Privacy</h2>
    <p>Lutero is not for users under 13. We do not knowingly collect their data.</p>
  </section>

  <section className="policy-section">
    <h2><span className="policy-number">7.</span> Policy Updates</h2>
    <p>Changes will be notified via the App or email. Continued use signifies acceptance.</p>
  </section>

  <section className="policy-section">
    <h2><span className="policy-number">8.</span> Contact Us</h2>
    <p>For data requests or concerns: <a href="mailto:support@lutero.org">support@lutero.org</a></p>
  </section>
</div>

    <Footer />
    
    </div>
  );
}

export default Terms;