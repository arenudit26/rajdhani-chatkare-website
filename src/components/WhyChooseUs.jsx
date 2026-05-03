import React from 'react';
import { Clock, Utensils, ShieldCheck, Moon, Coins } from 'lucide-react';
import './WhyChooseUs.css';

const features = [
  {
    icon: <Clock size={32} />,
    title: 'Quick Service',
    desc: 'Meals served in ~5–10 minutes',
  },
  {
    icon: <Utensils size={32} />,
    title: 'Wide Variety',
    desc: 'Indian + Chinese + Snacks + Shakes',
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'Separate Kitchens',
    desc: 'Veg & Non-Veg - Huge trust factor',
  },
  {
    icon: <Moon size={32} />,
    title: 'Late Night Availability',
    desc: 'Perfect for hostel cravings till midnight',
  },
  {
    icon: <Coins size={32} />,
    title: 'Affordable Pricing',
    desc: 'Good food without burning your wallet',
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section why-us" id="why-us">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Why Students Keep Coming Back</h2>
          <div className="accent-line mx-auto"></div>
        </div>

        <div className="features-grid">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card glass-card">
              <div className="feature-icon text-accent">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
