import React from 'react';
import './LearningJourney.css';

const LearningJourney = () => {
  const steps = [
    { title: 'Programming Foundations', active: false },
    { title: 'Web Development', active: false },
    { title: 'Full-Stack Projects', active: false },
    { title: 'Backend Development', active: true },
    { title: '.NET / ASP.NET Core', active: true },
    { title: 'AI-Powered Applications', active: true }
  ];

  return (
    <section className="section">
      <h2 className="section-title">My Growth Journey</h2>
      
      <div className="journey-container animate-on-scroll">
        <div className="journey-track"></div>
        
        {steps.map((step, index) => (
          <div key={index} className={`journey-step ${step.active ? 'active-step' : ''}`}>
            <div className={`step-dot ${step.active ? 'pulse' : ''}`}></div>
            <div className="step-content">
              <h4>{step.title}</h4>
            </div>
          </div>
        ))}
        
      </div>
    </section>
  );
};

export default LearningJourney;
