import React from "react";
import "./styles.css";
import Footer from "./Footer";

function DataDeletion() {
  return (
    <div className="data-deletion-container">
      <header className="data-deletion-header">
        <h1>Data Deletion Policy</h1>
        <p>
          This page explains how users of <strong>Lutero Chat</strong> can
          request deletion of their personal data.
        </p>
      </header>

     <section className="data-deletion-section">
        <h2>How to Delete Your Data</h2>
        <ol>
          <li>Open the Lutero Chat app.</li>
          <li>
            To delete your message: go to <strong>chat bubble</strong> &gt; select it and choose <strong>Delete</strong>.
          </li>
          <li>
            To delete a chat: go to chats, hold on the chat and select <strong> &gt; Delete</strong>.
          </li>
        </ol>
      </section>

      <section className="data-deletion-section">
        <h2>What Data Can Be Deleted?</h2>
        <ul>
          <li>Messages you have sent</li>
          <li>Chats and groups you created</li>
          <li>Your account details</li>
        </ul>
        <p>
          Some technical logs may be retained for up to 90 days for security and
          compliance before being permanently removed.
        </p>
      </section>

      <section className="data-deletion-section">
        <h2>Request Data Deletion</h2>
        <p>
          To request account deletion, please fill out the form below. Our team
          will process your request within <strong>7 business days</strong>.
        </p>

        <form
          className="data-deletion-form"
          action="mailto:support@lutero.org"
          method="POST"
          encType="text/plain"
        >
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="Email"
            placeholder="Enter your registered email"
            required
          />

          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="Username"
            placeholder="Enter your username"
            required
          />

          <label htmlFor="reason">Reason for Deletion:</label>
          <textarea
            id="reason"
            name="Reason"
            rows="4"
            placeholder="Tell us why you want to delete your account"
            required
          ></textarea>

          <button type="submit">Submit Request</button>
        </form>
      </section>

     
        <Footer />
    </div>
  );
}

export default DataDeletion;
