import React, { useEffect, useRef } from 'react';

const Experience = () => {
  const experienceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = experienceRef.current?.querySelectorAll('.fade-in, .slide-in-left');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="section" ref={experienceRef}>
      <div className="container">
        <h2 className="section-title fade-in">Professional Experience</h2>
        
        <div className="experience-timeline">
          <div className="experience-item slide-in-left">
            <div className="experience-header">
              <h3>Full-Stack Developer</h3>
              <span className="company">Wingman Partners Solution Pvt Ltd</span>
              <span className="duration">2023 - Present</span>
            </div>
            <ul className="experience-details">
              <li>Built and maintained reusable React components, improving development speed by 30%</li>
              <li>Developed full-stack leave management system using Next.js, Redux, Node.js, and MongoDB</li>
              <li>Created dynamic tab filters and optimized Redux state handling</li>
              <li>Integrated secure API services with pixel-perfect UI implementation</li>
              <li>Collaborated cross-functionally with designers and backend engineers</li>
            </ul>
          </div>
        </div>

        <div className="education-section fade-in">
          <h3>Education</h3>
          <div className="education-grid">
            <div className="education-item">
              <h4>Bachelor of Technology</h4>
              <p>Computer Science and Engineering</p>
              <span>ABES Institute of Technology, Ghaziabad</span>
            </div>
            <div className="education-item">
              <h4>Intermediate</h4>
              <span>Shiv Ganga Vidya Mandir, Prayagraj</span>
            </div>
          </div>
        </div>

        <div className="certifications-section fade-in">
          <h3>Certifications & Achievements</h3>
          <div className="cert-grid">
            <div className="cert-item">
              <i className="fas fa-certificate"></i>
              <span>React Native Certification</span>
            </div>
            <div className="cert-item">
              <i className="fas fa-certificate"></i>
              <span>C++ Certification</span>
            </div>
            <div className="cert-item">
              <i className="fas fa-certificate"></i>
              <span>React.js Certification</span>
            </div>
            <div className="cert-item">
              <i className="fas fa-certificate"></i>
              <span>HackerRank Problem Solving</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;