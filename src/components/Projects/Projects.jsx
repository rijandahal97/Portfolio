import React, { useState } from 'react';
import { projects } from '../../data/projects';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Full Stack', 'Backend', 'AI', 'Java', 'Python', 'Frontend'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Featured Projects</h2>
      
      <div className="filter-container animate-on-scroll">
        {categories.map(cat => (
          <button 
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid animate-on-scroll" style={{animationDelay: '0.2s'}}>
        {filteredProjects.map(project => (
          <div key={project.id} className={`project-card ${project.title === 'CareerMind' ? 'featured-highlight' : ''}`}>
            
            <div className="project-content">
              <div className="project-header">
                <div className="project-top">
                  <span className="project-category">{project.category}</span>
                  {project.featured && <span className="featured-badge">Featured</span>}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              <div className="project-footer">
                <div className="project-tech">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                  {project.technologies.length > 4 && <span>+{project.technologies.length - 4}</span>}
                </div>
                
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub Repository">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
