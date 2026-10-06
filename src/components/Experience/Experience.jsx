import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>
      
      <div className="timeline-container animate-on-scroll">
        
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-header">
              <h3>Backend Developer Intern (.NET)</h3>
              <span className="timeline-date">Present</span>
            </div>
            
            <p className="timeline-description">
              Currently working as a backend developer intern, focusing on building scalable systems using Microsoft technologies.
            </p>
            
            <div className="timeline-tech">
              <span>C#</span>
              <span>.NET / ASP.NET Core</span>
              <span>Web API</span>
              <span>SQL Server</span>
              <span>Entity Framework Core</span>
              <span>JWT authentication</span>
              <span>Backend architecture</span>
            </div>
          </div>
        </div>

        {/* Placeholder for future experiences */}
        {/*
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            ...
          </div>
        </div>
        */}

      </div>
    </section>
  );
};

export default Experience;
