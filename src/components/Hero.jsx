import React from 'react';
import { Star, Clock, ChefHat, PhoneCall, ArrowRight } from 'lucide-react';
import './Hero.css';
import heroBg from '../assets/hero_background_1777805034580.png';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-background" style={{ backgroundImage: `url(${heroBg})` }}></div>
      
      <div className="container hero-content">
        <div className="hero-text-content">
          <div className="badge glass-card">
            <Star size={16} className="text-accent" />
            <span>3.7 Rating • 2800+ Reviews</span>
          </div>
          
          <h1 className="hero-title">
            Your Go-To Comfort Food Spot Inside <span className="text-accent">IIT Delhi</span>
          </h1>
          
          <p className="hero-subtitle">
            Late-night cravings? Missed mess food? We've got you covered with fresh, fast, and flavorful meals.
          </p>
          
          <div className="hero-ctas">
            <a href="#menu" className="btn btn-primary">
              Order Now <ArrowRight size={20} />
            </a>
            <a href="tel:07678659909" className="btn btn-outline">
              <PhoneCall size={20} /> Call Now
            </a>
          </div>
          
          <div className="trust-badges">
            <div className="trust-badge glass-card">
              <Clock size={24} className="text-accent" />
              <div>
                <h4>Fast Service</h4>
                <p>5-10 mins typical</p>
              </div>
            </div>
            <div className="trust-badge glass-card">
              <ChefHat size={24} className="text-accent" />
              <div>
                <h4>Separate Kitchens</h4>
                <p>Veg & Non-Veg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
