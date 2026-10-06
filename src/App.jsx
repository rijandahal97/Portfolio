import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import LearningJourney from './components/LearningJourney/LearningJourney';
import GithubSection from './components/GithubSection/GithubSection';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            // Once played, we can unobserve if we want it to only play once
            // observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => {
      el.style.animationPlayState = 'paused';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <GithubSection />
      <LearningJourney />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
