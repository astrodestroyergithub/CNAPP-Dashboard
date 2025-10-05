import React, { useState } from 'react';
import './NewsletterSection.scss';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // @Todo: write form submission logic here
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <h2 className="newsletter-heading">Subscribe to our Newsletter</h2>
        <p className="newsletter-description">
          Stay updated with the latest news, offers, and insights.
        </p>
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="newsletter-input"
          />
          <button type="submit" className="submit-button">
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
