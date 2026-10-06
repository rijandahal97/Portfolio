import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      
      <div className="timeline-container animate-on-scroll">
        
        <div className="timeline-item">
          <div className="timeline-marker">
            <div className="timeline-dot pulse-blue"></div>
            <div className="timeline-line"></div>
          </div>
          
          <div className="timeline-content">
            <div className="timeline-header">
              <div className="role-company">
                <h3>Backend Developer Intern</h3>
                <span className="timeline-date">Present</span>
              </div>
              <span className="learning-badge">Learning / Mentorship</span>
            </div>
            
            <p className="timeline-description">
              Actively learning and building backend services using Microsoft technologies. Focusing on clean architecture and scalable API development.
            </p>
            
            <div className="timeline-tech">
              <span>C#</span>
              <span>.NET / ASP.NET Core</span>
              <span>Web API</span>
              <span>SQL Server</span>
              <span>Entity Framework Core</span>
              <span>JWT Authentication</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
