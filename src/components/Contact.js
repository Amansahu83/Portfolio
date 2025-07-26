import React, { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const contactRef = useRef(null);

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

    const elements = contactRef.current?.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const subject = `Portfolio Contact: Message from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const mailtoLink = `mailto:amangupta83a@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    window.open(mailtoLink);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="section" ref={contactRef}>
      <div className="container">
        <h2 className="section-title fade-in">Get In Touch</h2>
        <div className="contact-content">
          <p className="fade-in">I'm always interested in new opportunities and collaborations. Let's discuss your project!</p>
          
          <form className="contact-form slide-in-left" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn" disabled={isSubmitting}>
              {isSubmitting ? 'Opening Email...' : 'Send Message'}
            </button>
            
          </form>

          <div className="contact-info slide-in-right">
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>amangupta83a@gmail.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+91-83549-83504</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Pratapgarh, Uttar Pradesh, India</span>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/Amansahu83" target="_blank" rel="noopener noreferrer" title="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://leetcode.com/u/amanguptaa/" target="_blank" rel="noopener noreferrer" title="LeetCode">
                <i className="fas fa-code"></i>
              </a>
              <a href="https://www.geeksforgeeks.org/user/amanu123" target="_blank" rel="noopener noreferrer" title="GeeksforGeeks">
                <i className="fas fa-laptop-code"></i>
              </a>
              <a href="https://www.hackerrank.com/profile/Amangupta83a" target="_blank" rel="noopener noreferrer" title="HackerRank">
                <i className="fab fa-hackerrank"></i>
              </a>
              <a href="mailto:amangupta83a@gmail.com" title="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;