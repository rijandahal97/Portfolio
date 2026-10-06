import React from 'react';
import './About.css';

const About = () => {
  const highlights = [
    { title: '7+ Projects', desc: 'Practical implementations' },
    { title: 'Full-Stack Journey', desc: 'End-to-end development' },
    { title: 'Backend Focus', desc: '.NET & Architecture' },
    { title: 'AI Enthusiast', desc: 'Intelligent systems' },
  ];

  return (
    <section id="about" className="section">
      <h2 className="section-title">Who I Am</h2>
      
      <div className="about-content animate-on-scroll">
        <div className="about-text">
          <p>
            I am a BSc (Hons) Computing student at Itahari International College affiliated with London Metropolitan University.
          </p>
          <p>
            I have built multiple practical software projects using Java, Python, JavaScript, HTML, and CSS, and I am currently expanding into modern backend development with .NET.
          </p>
          <p>
            My current interests lie in building real-world software, robust backend systems, full-stack applications, and exploring AI-powered solutions.
          </p>
        </div>

        <div className="highlights-grid">
          {highlights.map((item, index) => (
            <div key={index} className="highlight-card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
