import React from 'react';
import { Camera, Star } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="logo">
              Rajdhani<span className="text-accent">Chatkare</span>
            </a>
            <p className="footer-tagline">Trusted by IIT Delhi students</p>
            
            <div className="footer-rating">
              <Star className="text-accent" size={18} fill="var(--color-accent)" />
              <span>3.7 from 2800+ users</span>
            </div>
          </div>
          
          <div className="footer-links-group">
            <h4>Quick Links</h4>
            <div className="footer-links">
              <a href="#menu">Menu</a>
              <a href="#testimonials">Reviews</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          
          <div className="footer-social">
            <h4>Follow Us</h4>
            <a href="#" className="social-icon">
              <Camera size={24} />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Rajdhani Chatkare Foods. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
