import React from 'react';
import './Hero.css';
import profileImg from '../../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        
        <div className="hero-content animate-on-scroll">
          <div className="hero-label">
            <span className="sparkle">✨</span> FULL-STACK DEVELOPER &middot; .NET BACKEND &middot; AI ENTHUSIAST
          </div>
          
          <h1 className="hero-title">
            Hi, I'm Rijan.<br />
            Building Digital Experiences<br />
            That Solve <span className="highlight">Real Problems.</span>
          </h1>
          
          <p className="hero-description">
            I build practical web applications and intelligent systems while continuously expanding my expertise in modern backend and AI technologies.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Let's Connect</a>
          </div>
          
          <div className="hero-socials">
            <a href="https://github.com/rijandahal97" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="https://linkedin.com/in/rijan-dahal" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper animate-on-scroll" style={{animationDelay: '0.2s'}}>
          <div className="hero-image-glow"></div>
          <div className="hero-image-container">
            <img src={profileImg} alt="Rijan Dahal - Full Stack Developer" className="hero-image" />
            
            <div className="tech-badge react" title="React">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" width="20" height="20">
                <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
                <g stroke="#61dafb" strokeWidth="1" fill="none">
                  <ellipse rx="11" ry="4.2"/>
                  <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                  <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                </g>
              </svg>
            </div>
            <div className="tech-badge dotnet" title=".NET">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="20" height="20">
                <path fill="#512BD4" d="M125.7 65c0 30-22.1 55.4-51.5 59-21 .1-40.4-8.8-54.3-25.1-4.7-6.2-9-16.1-9-24v-6.9C9.7 67 10.4 66 11.5 66h16.2c1.1 0 1.8 1 1.8 2.1v6c0 14.1 6.8 27.5 19.3 34.6 20.5 10 46-3 48.6-26 .5-4.8.4-10.3-.6-15.1-3.6-18.7-19-32.9-37.8-34H58V62c0-7.8-1.5-12.8-5.3-19H62c14.2 0 28.1 6 36.8 17.5 8.4 10.9 10 24.3 8.3 37.8z"/>
              </svg>
              <span>.NET</span>
            </div>
            
          </div>
        </div>
        
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;
