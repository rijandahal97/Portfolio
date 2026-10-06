import React from 'react';
import { experiencedSkills, learningSkills } from '../../data/skills';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Technical Expertise</h2>
      
      <div className="skills-container animate-on-scroll">
        
        <div className="skill-category">
          <div className="category-header">
            <h3>EXPERIENCED / WORKED WITH</h3>
            <div className="line"></div>
          </div>
          <div className="skills-grid">
            {experiencedSkills.map((skill, index) => (
              <div key={`exp-${index}`} className="skill-item experienced">
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <div className="category-header">
            <h3>CURRENTLY LEARNING / BUILDING WITH</h3>
            <div className="line"></div>
          </div>
          <div className="skills-grid">
            {learningSkills.map((skill, index) => (
              <div key={`learn-${index}`} className="skill-item learning">
                {skill}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
