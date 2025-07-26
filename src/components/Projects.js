import React, { useEffect, useRef } from 'react';

const Projects = () => {
  const projectsRef = useRef(null);
  const projects = [
    {
      title: 'Teamsuit Project',
      description: 'Comprehensive team management platform with project tracking, collaboration tools, and real-time updates.',
      technologies: ['Next.js', 'PostgreSQL', 'Node.js', 'Tailwind CSS'],
      icon: '👥',
      github: '#',
      live: '#'
    },
    {
      title: 'Instagram Clone',
      description: 'Full-featured Instagram clone with photo sharing, stories, real-time messaging, and social interactions.',
      technologies: ['React.js', 'Firestore', 'Firebase Auth', 'CSS3'],
      icon: '📸',
      github: '#',
      live: '#'
    },
    {
      title: 'Face Recognition System',
      description: 'AI-powered face recognition system with real-time detection, identification, and security features.',
      technologies: ['Flask', 'Python', 'OpenCV', 'OpenAI', 'AI/ML'],
      icon: '🤖',
      github: '#',
      live: '#'
    },
    {
      title: 'Cloth Store Website',
      description: 'E-commerce platform for clothing with product catalog, shopping cart, and secure payment integration.',
      technologies: ['Next.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      icon: '👕',
      github: '#',
      live: 'https://amanclothstore.vercel.app'
    },
    {
      title: 'Gupta Kirana Store',
      description: 'Local grocery store website with inventory management, online ordering, and delivery tracking system.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express'],
      icon: '🏪',
      github: '#',
      live: '#'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, index * 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectCards = projectsRef.current?.querySelectorAll('.project-card');
    projectCards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title fade-in">Featured Projects</h2>
        <div className="projects-grid" ref={projectsRef}>
          {projects.map((project, index) => (
            <div key={index} className="project-card fade-in">
              <div className="project-image">
                <span>{project.icon}</span>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;