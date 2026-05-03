import React from 'react';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const reviews = [
  {
    text: "If your mess is off, this is the best option. Loved the noodles and naan.",
    author: "IIT Delhi Student",
    rating: 4
  },
  {
    text: "Good place for meals, especially inside campus. Always reliable when working late.",
    author: "Campus Resident",
    rating: 5
  },
  {
    text: "Food is decent, but service can be slow sometimes during peak hours. Otherwise great.",
    author: "M.Tech Student",
    rating: 3
  }
];

const Testimonials = () => {
  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Real Words from Real Students</h2>
          <div className="accent-line mx-auto"></div>
        </div>

        <div className="testimonials-grid">
          {reviews.map((review, idx) => (
            <div key={idx} className="testimonial-card glass-card">
              <Quote className="quote-icon text-accent" size={40} />
              <p className="testimonial-text">"{review.text}"</p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>{review.author}</h4>
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < review.rating ? "star filled" : "star"}>★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
