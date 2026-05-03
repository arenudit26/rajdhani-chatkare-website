import React from 'react';
import { MapPin, Heart, Wallet } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title">More Than a Canteen — It's a Campus Lifeline</h2>
            <div className="accent-line"></div>
            
            <p className="about-text">
              When the mess is closed or cravings hit late, Rajdhani Chatkare Foods becomes the go-to place for students and locals alike. 
              Located inside IIT Delhi, we serve a mix of comforting North Indian dishes and quick Chinese favorites — fast, fresh, and satisfying.
            </p>
            
            <div className="credibility-points">
              <div className="point">
                <div className="icon-wrapper">
                  <MapPin size={24} className="text-accent" />
                </div>
                <div>
                  <h4>Inside IIT Delhi Campus</h4>
                  <p>Easy access for all residents</p>
                </div>
              </div>
              
              <div className="point">
                <div className="icon-wrapper">
                  <Heart size={24} className="text-accent" />
                </div>
                <div>
                  <h4>Serving Students for Years</h4>
                  <p>A trusted part of campus life</p>
                </div>
              </div>
              
              <div className="point">
                <div className="icon-wrapper">
                  <Wallet size={24} className="text-accent" />
                </div>
                <div>
                  <h4>Affordable Pricing</h4>
                  <p>₹100–200 average order value</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-image-wrapper">
            <div className="glass-card image-card">
               {/* Using a placeholder aesthetic div if we don't have a specific image for this */}
               <div className="aesthetic-placeholder">
                 <h3>Rajdhani<br/>Chatkare<br/><span className="text-accent">Foods</span></h3>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
