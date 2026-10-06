import React from 'react';
import './About.css';

const About = () => {
  const highlights = [
    { title: '7+ Projects', desc: 'Practical implementations built from the ground up.' },
    { title: 'Full-Stack Journey', desc: 'End-to-end development bridging frontend and backend.' },
    { title: 'Backend Focus', desc: 'Active learning in modern .NET architecture.' },
    { title: 'AI Enthusiast', desc: 'Exploring and integrating intelligent systems.' },
  ];

  return (
    <section id="about" className="section">
      <h2 className="section-title">Who I Am</h2>
      
      <div className="about-content animate-on-scroll">
        <div className="about-text-wrapper">
          <div className="about-text">
            <p>
              I am a BSc (Hons) Computing student at Itahari International College, affiliated with London Metropolitan University. 
            </p>
            <p>
              My journey involves building practical, problem-solving software. I've developed multiple projects using Java, Python, JavaScript, HTML, and CSS, and I am actively expanding my expertise into modern backend systems using <strong>.NET</strong>.
            </p>
            <p>
              My core interests revolve around architecting clean backend solutions, delivering robust full-stack applications, and exploring the potential of AI-powered integrations in real-world scenarios.
            </p>
          </div>
        </div>

        <div className="highlights-grid">
          {highlights.map((item, index) => (
            <div key={index} className="highlight-card" style={{ animationDelay: `${index * 0.1}s` }}>
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
