import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
          Rajdhani<span className="text-accent">Chatkare</span>
        </a>

        <div className="desktop-menu">
          <a href="#about" className="nav-link">About</a>
          <a href="#menu" className="nav-link">Menu</a>
          <a href="#why-us" className="nav-link">Why Us</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="#menu" className="btn btn-primary nav-btn">Order Now</a>
        </div>

        <button 
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#menu" onClick={() => setIsMobileMenuOpen(false)}>Menu</a>
          <a href="#why-us" onClick={() => setIsMobileMenuOpen(false)}>Why Us</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          <a href="#menu" className="btn btn-primary" onClick={() => setIsMobileMenuOpen(false)}>Order Now</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
