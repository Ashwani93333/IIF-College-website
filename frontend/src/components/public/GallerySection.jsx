import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';

export default function GallerySection() {
  const { gallery } = useApp();
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Campus", "Library", "Labs", "Sports", "Cultural"];

  const filteredGallery = gallery.filter(item => {
    if (!item.isActive) return false;
    return activeCategory === "All" || item.category.toLowerCase() === activeCategory.toLowerCase();
  });

  return (
    <section className="section section-bg-white" id="gallery">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Campus Life & Spaces</span>
          <h2>Campus Infrastructure Showcase</h2>
          <p>
            Experience our 6.47-acre environment built for holistic learning, intellectual discovery, 
            and vibrant student life.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`pill-filter-btn ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {filteredGallery.map(photo => (
            <div 
              key={photo.id}
              style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', position: 'relative', boxShadow: 'var(--shadow-md)', height: '260px' }}
            >
              <img 
                src={photo.imageUrl} 
                alt={photo.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(11,37,69,0.95))', padding: '1.25rem', color: '#fff' }}>
                <span style={{ background: 'var(--accent-gold)', color: 'var(--primary-navy)', fontSize: '0.7rem', fontWeight: '800', padding: '0.15rem 0.5rem', borderRadius: 'var(--radius-sm)', textTransform: 'uppercase' }}>
                  {photo.category}
                </span>
                <h4 style={{ color: '#fff', fontSize: '1rem', marginTop: '0.4rem', marginBottom: '0.2rem' }}>
                  {photo.title}
                </h4>
                <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.8)' }}>
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
