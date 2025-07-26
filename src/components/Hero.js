import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Aman Gupta - Full Stack Developer';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-photo">
            <img 
              src="/images/IMG_20240801_110054082~2.jpg" 
              alt="Aman Gupta - Full Stack Developer"
              className="profile-image"
            />
          </div>
          <h1 className="typing-animation">{displayText}</h1>
          <p>2+ years experience in scalable web applications • React • Next.js • Node.js • PostgreSQL</p>
          <div className="hero-contact">
            <span>📍 Pratapgarh, UP, India</span>
            <span>📧 amangupta83a@gmail.com</span>
            <span>📞 +91-8354983504</span>
          </div>
          <div>
            <button className="btn" onClick={scrollToProjects}>View My Work</button>
            <button className="btn btn-outline" onClick={scrollToContact}>Get In Touch</button>
            <a 
              href="https://drive.google.com/uc?export=download&id=1D2Wpv3j3Jh7EcSspUX6UrstwcgeToO8z" 
              className="btn-resume"
              title="Download Resume"
            >
              <i className="fas fa-download"></i> Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;