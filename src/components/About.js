import React, { useEffect, useRef } from 'react';

const About = () => {
  const skillsRef = useRef(null);
  const skills = [
    { name: 'React.js', level: 95 },
    { name: 'Next.js', level: 90 },
    { name: 'Node.js', level: 88 },
    { name: 'Express.js', level: 85 },
    { name: 'MongoDB', level: 85 },
    { name: 'Redux', level: 90 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'MySQL', level: 78 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'Material UI', level: 88 },
    { name: 'AWS', level: 75 },
    { name: 'Docker', level: 70 },
    { name: 'REST APIs', level: 90 },
    { name: 'GraphQL', level: 75 },
    { name: 'Git', level: 95 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillItems = skillsRef.current?.querySelectorAll('.skill-item');
    skillItems?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title fade-in">About Me</h2>
        
        <div className="professional-summary fade-in">
          <p>
            Full-stack developer with 2 years of experience in designing, developing, and deploying scalable web applications. 
            Proficient in React, Next.js, Node.js, Express, MongoDB, and SQL with strong focus on performance, security, and clean architecture.
          </p>
          <p>
            Currently at Wingman Partners Solution Pvt Ltd, I've built reusable React components improving development speed by 30%, 
            developed full-stack leave management systems, and collaborated cross-functionally to ensure seamless product delivery.
          </p>
        </div>
        
        <div className="about-content">
          <div className="slide-in-left">
            <div className="about-text">
              <div className="experience-highlight">
                <h4>Key Achievements:</h4>
                <ul>
                  <li>Solved 1500+ DSA problems</li>
                  <li>Winner of TechKnow'23</li>
                  <li>3rd Rank in Terror of Error coding competition</li>
                </ul>
              </div>
              
              <div className="coding-profiles">
                <h4>Coding Profiles:</h4>
                <div className="profile-links">
                  <a href="https://leetcode.com/u/amanguptaa/" target="_blank" rel="noopener noreferrer" className="profile-link">
                    <i className="fas fa-code"></i>
                    <span>LeetCode</span>
                  </a>
                  <a href="https://www.geeksforgeeks.org/user/amanu123" target="_blank" rel="noopener noreferrer" className="profile-link">
                    <i className="fas fa-laptop-code"></i>
                    <span>GeeksforGeeks</span>
                  </a>
                  <a href="https://www.hackerrank.com/profile/Amangupta83a" target="_blank" rel="noopener noreferrer" className="profile-link">
                    <i className="fab fa-hackerrank"></i>
                    <span>HackerRank</span>
                  </a>
                  <a href="https://github.com/Amansahu83" target="_blank" rel="noopener noreferrer" className="profile-link">
                    <i className="fab fa-github"></i>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-in-right">
            <h3>Technical Skills</h3>
            <div className="skills-grid" ref={skillsRef}>
              {skills.map((skill, index) => (
                <div key={index} className="skill-item stagger-animation" style={{'--progress': `${skill.level}%`}}>
                  <span>{skill.name}</span>
                  <div className="skill-progress">
                    <div className="skill-progress-bar"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;