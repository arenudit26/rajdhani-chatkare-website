import React from 'react';
import { MapPin, Phone, Clock, Wallet, PhoneCall } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-wrapper glass-card">
          <div className="contact-info">
            <h2 className="section-title">Visit Us</h2>
            <div className="accent-line"></div>
            
            <div className="info-list">
              <div className="info-item">
                <MapPin className="text-accent" size={24} />
                <div>
                  <h4>Location</h4>
                  <p>IIT Delhi, Hauz Khas, New Delhi</p>
                </div>
              </div>
              
              <div className="info-item">
                <Phone className="text-accent" size={24} />
                <div>
                  <h4>Phone</h4>
                  <p>076786 59909</p>
                </div>
              </div>
              
              <div className="info-item">
                <Clock className="text-accent" size={24} />
                <div>
                  <h4>Hours</h4>
                  <p>Open till 12 AM</p>
                </div>
              </div>
              
              <div className="info-item">
                <Wallet className="text-accent" size={24} />
                <div>
                  <h4>Average Cost</h4>
                  <p>₹100–200 per person</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="map-container">
            {/* Using an iframe embed for Google Maps as requested */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.38246416629!2d77.18525049999999!3d28.54425615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1df6b841dc33%3A0xcb06886edb071e72!2sIIT%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      
      {/* Sticky Bottom CTA for Mobile */}
      <div className="sticky-cta-mobile">
        <a href="tel:07678659909" className="btn btn-primary full-width">
          <PhoneCall size={20} /> Call Now
        </a>
      </div>
    </section>
  );
};

export default Contact;
