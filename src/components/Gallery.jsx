import React from 'react';
import './Gallery.css';
import galleryVibe from '../assets/gallery_vibe_1777805127715.png';

const Gallery = () => {
  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Campus Energy</h2>
          <div className="accent-line mx-auto"></div>
        </div>

        <div className="gallery-grid">
          {/* We'll duplicate the gallery vibe image or just use it as a large feature */}
          <div className="gallery-item large">
            <img src={galleryVibe} alt="Terrace seating at night" />
            <div className="gallery-overlay">
              <span>Open Seating Terrace</span>
            </div>
          </div>
          <div className="gallery-item">
            <img src={galleryVibe} alt="IIT campus vibe" />
            <div className="gallery-overlay">
              <span>Night-time Crowd Energy</span>
            </div>
          </div>
          <div className="gallery-item">
            <img src={galleryVibe} alt="Food shots" />
            <div className="gallery-overlay">
              <span>Premium Food</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
