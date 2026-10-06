import React from 'react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend only for Day 1
    alert('Thank you for your message! This is a frontend demo for Day 1.');
  };

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Let's Build Something Meaningful.</h2>
      
      <div className="contact-container animate-on-scroll">
        <div className="contact-info">
          <p className="contact-desc">
            Have a project, opportunity, or idea? Let's connect. I'm currently looking for new opportunities in backend and full-stack development.
          </p>
          
          <div className="contact-details">
            <div className="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <span>rijandahal97@gmail.com</span>
            </div>
            
            <a href="https://github.com/rijandahal97" target="_blank" rel="noopener noreferrer" className="contact-item link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              <span>github.com/rijandahal97</span>
            </a>
            
            <a href="https://linkedin.com/in/rijan-dahal" target="_blank" rel="noopener noreferrer" className="contact-item link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              <span>linkedin.com/in/rijan-dahal</span>
            </a>
          </div>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required placeholder="John Doe" />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required placeholder="john@example.com" />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" required placeholder="Your message here..."></textarea>
          </div>
          
          <button type="submit" className="btn btn-primary submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
