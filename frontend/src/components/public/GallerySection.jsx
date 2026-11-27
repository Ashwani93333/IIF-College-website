import React, { useState, useEffect } from 'react';
import { 
  Camera, Image, Sparkles, X, ChevronRight, 
  Building2, Users, Award, BookOpen, Layers 
} from 'lucide-react';

// Import all 27 authentic institutional photos from assets/photo-gallery
import img01 from '../../assets/photo-gallery/20170504_185443.jpg';
import img02 from '../../assets/photo-gallery/20170504_194730.jpg';
import img03 from '../../assets/photo-gallery/20170506_183215 - Copy.jpg';
import img04 from '../../assets/photo-gallery/20171008_131215.jpg';
import img05 from '../../assets/photo-gallery/20171109_203301.jpg';
import img06 from '../../assets/photo-gallery/20180211_204946.jpg';
import img07 from '../../assets/photo-gallery/AA with President Vietnam-DSC_0282_1219x1200.JPG';
import img08 from '../../assets/photo-gallery/AIMA Fellow awardees with HRD mminister-1994IMAG0534.jpg';
import img09 from '../../assets/photo-gallery/AJ1.jpg';
import img10 from '../../assets/photo-gallery/Army Institute Seminar -_DSC0066.JPG';
import img11 from '../../assets/photo-gallery/Award of D.Litt. to JDA by SIAU-Hungary 2008.jpg';
import img12 from '../../assets/photo-gallery/Baku Meeting with Nakao- President ADB- 20150503_195718.jpg';
import img13 from '../../assets/photo-gallery/Baku, Azerbaijan on 4th May, 2015 IIF 00035.jpg';
import img14 from '../../assets/photo-gallery/Baku, Azerbaijan on 5th May, 2015 IIF 00024.jpg';
import img15 from '../../assets/photo-gallery/CIMG0489.JPG';
import img16 from '../../assets/photo-gallery/CIMG0529.JPG';
import img17 from '../../assets/photo-gallery/CIMG0651.JPG';
import img18 from '../../assets/photo-gallery/CIMG0653.JPG';
import img19 from '../../assets/photo-gallery/CIMG0883.JPG';
import img20 from '../../assets/photo-gallery/DSC01317.JPG';
import img21 from '../../assets/photo-gallery/DSC01672.JPG';
import img22 from '../../assets/photo-gallery/DSC01751.JPG';
import img23 from '../../assets/photo-gallery/DSC_0061-With Vice PM mauritius.JPG';
import img24 from '../../assets/photo-gallery/DSC_0108.JPG';
import img25 from '../../assets/photo-gallery/DSC_7816.JPG';
import img26 from '../../assets/photo-gallery/DSC_7830.JPG';
import img27 from '../../assets/photo-gallery/DSC_7837.JPG';

const GALLERY_ITEMS = [
  // 1. Global Dignitaries & Academic Convocations
  {
    id: 1,
    title: "Bilateral Academic Dialogue with President of Vietnam",
    category: "Global Dignitaries",
    caption: "High-level bilateral academic exchange and institutional cooperation with the President of Vietnam.",
    imageUrl: img07
  },
  {
    id: 2,
    title: "AIMA Fellow Awardees with Union HRD Minister",
    category: "Global Dignitaries",
    caption: "Prestigious AIMA Fellowship felicitation ceremony graced by the Union HRD Minister.",
    imageUrl: img08
  },
  {
    id: 3,
    title: "Conferment of Honorary D.Litt. by SIAU Hungary",
    category: "Global Dignitaries",
    caption: "Academic honor and honorary doctorate conferment by State Institute of Public Administration (SIAU), Hungary.",
    imageUrl: img11
  },
  {
    id: 4,
    title: "Global Economic Delegation with President of Asian Development Bank",
    category: "Global Dignitaries",
    caption: "Strategic international economic dialogue with Takehiko Nakao, President of Asian Development Bank (ADB).",
    imageUrl: img12
  },
  {
    id: 5,
    title: "High-Level Conclave with Vice Prime Minister of Mauritius",
    category: "Global Dignitaries",
    caption: "Executive international academic and educational partnership conference with the Vice Prime Minister of Mauritius.",
    imageUrl: img23
  },
  {
    id: 6,
    title: "International Financial Assembly in Baku, Azerbaijan",
    category: "Global Dignitaries",
    caption: "Plenary session participation at the global financial and economic governance assembly.",
    imageUrl: img13
  },
  {
    id: 7,
    title: "World Economic & Academic Forum Assembly",
    category: "Global Dignitaries",
    caption: "Institutional presentation on financial development and commerce education at the World Forum.",
    imageUrl: img14
  },

  // 2. Seminars & Conclaves
  {
    id: 8,
    title: "National Seminar with Army Institute of Management",
    category: "Seminars & Conclaves",
    caption: "Collaborative national defense and management strategy symposium.",
    imageUrl: img10
  },
  {
    id: 9,
    title: "National Commerce & Management Symposia",
    category: "Seminars & Conclaves",
    caption: "Scholarly keynote addresses and panel deliberations on financial markets.",
    imageUrl: img01
  },
  {
    id: 10,
    title: "Distinguished Corporate Leadership Roundtable",
    category: "Seminars & Conclaves",
    caption: "Industry CXOs and senior economists discussing corporate financial governance.",
    imageUrl: img02
  },
  {
    id: 11,
    title: "Executive Academic Assembly & Faculty Dialogue",
    category: "Seminars & Conclaves",
    caption: "Curricular excellence meeting on NEP guidelines and multidisciplinary learning.",
    imageUrl: img03
  },
  {
    id: 12,
    title: "Industry-Academia Panel on Financial Economics",
    category: "Seminars & Conclaves",
    caption: "Interactive forum bridging corporate finance requirements with classroom instruction.",
    imageUrl: img04
  },
  {
    id: 13,
    title: "Corporate Networking & Alumni Conclave",
    category: "Seminars & Conclaves",
    caption: "Alumni leadership interaction with current undergraduate scholars.",
    imageUrl: img05
  },
  {
    id: 14,
    title: "Management Scholars & Researchers Conclave",
    category: "Seminars & Conclaves",
    caption: "Presentation of research working papers on economic modeling and management science.",
    imageUrl: img06
  },
  {
    id: 15,
    title: "Academic Leadership & Strategic Planning Forum",
    category: "Seminars & Conclaves",
    caption: "Senior faculty and directors deliberating on academic quality benchmarks.",
    imageUrl: img09
  },

  // 3. Campus & Architecture
  {
    id: 16,
    title: "Greater Noida Knowledge Park III Academic Block",
    category: "Campus & Architecture",
    caption: "Front elevation of the sprawling academic block situated in the institutional hub.",
    imageUrl: img15
  },
  {
    id: 17,
    title: "Landscaped Campus Courtyard & Architectural Grounds",
    category: "Campus & Architecture",
    caption: "Pollution-free green environment fostering serene academic concentration.",
    imageUrl: img16
  },
  {
    id: 18,
    title: "Main Entrance Facade & Green Lawns",
    category: "Campus & Architecture",
    caption: "Well-maintained 6.47-acre campus grounds with modern educational architecture.",
    imageUrl: img24
  },
  {
    id: 19,
    title: "Campus Walkway & Lush Greenery Environment",
    category: "Campus & Architecture",
    caption: "Pedestrian corridors lined with foliage promoting a healthy collegiate lifestyle.",
    imageUrl: img26
  },
  {
    id: 20,
    title: "Evening Vista of IIFCCMS Greater Noida Campus",
    category: "Campus & Architecture",
    caption: "Illuminated institutional complex under evening lights.",
    imageUrl: img27
  },

  // 4. Academic Facilities & Infrastructure
  {
    id: 21,
    title: "Air-Conditioned Smart Lecture Theatre Complex",
    category: "Academic Facilities",
    caption: "Tiered lecture halls equipped with multimedia audio-visual projectors and acoustic treatment.",
    imageUrl: img17
  },
  {
    id: 22,
    title: "Central Library Reference & Periodical Archives",
    category: "Academic Facilities",
    caption: "Over 55,000 volumes, international finance journals, and digital research terminals.",
    imageUrl: img18
  },
  {
    id: 23,
    title: "Executive Seminar Hall & Multimedia Facility",
    category: "Academic Facilities",
    caption: "Dedicated venue for guest lectures, MDP programs, and corporate seminars.",
    imageUrl: img19
  },
  {
    id: 24,
    title: "Computing Laboratory & Business Analytics Infrastructure",
    category: "Academic Facilities",
    caption: "High-speed internet workstations with financial modeling and business analytics software.",
    imageUrl: img20
  },
  {
    id: 25,
    title: "Student Collaborative Study Rooms & Learning Spaces",
    category: "Academic Facilities",
    caption: "Group discussion suites fostering teamwork, presentation preparation, and case study debates.",
    imageUrl: img21
  },
  {
    id: 26,
    title: "Central Administrative Secretariat & Faculty Chambers",
    category: "Academic Facilities",
    caption: "Administrative offices and faculty cabins providing personalized academic guidance.",
    imageUrl: img22
  },
  {
    id: 27,
    title: "Student Recreation Arena & Outdoor Sports Grounds",
    category: "Academic Facilities",
    caption: "Dedicated spaces for badminton, volleyball, table tennis, and student cultural activities.",
    imageUrl: img25
  }
];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    "All",
    "Global Dignitaries",
    "Seminars & Conclaves",
    "Campus & Architecture",
    "Academic Facilities"
  ];

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  const filteredGallery = GALLERY_ITEMS.filter(item => {
    if (activeCategory === "All") return true;
    return item.category === activeCategory;
  });

  return (
    <div className="tab-content-card" style={{ padding: '2rem' }}>
      {/* Header Info */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.75rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1.25rem' }}>
        <div>
          <div className="content-badge" style={{ marginBottom: '0.4rem' }}>INSTITUTIONAL PHOTO ARCHIVES</div>
          <h2 className="content-heading" style={{ margin: 0 }}>Infrastructure &amp; Campus Life Photo Gallery</h2>
          <p style={{ color: '#64748b', fontSize: '0.9rem', margin: '0.4rem 0 0', maxWidth: '750px', lineHeight: 1.55 }}>
            A curated photographic showcase of our 6.47-acre Greater Noida campus, smart lecture halls, central library, high-level dignitary convocations, and academic seminars.
          </p>
        </div>
        <div style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', padding: '0.4rem 0.85rem', borderRadius: '8px', fontSize: '0.82rem', fontWeight: '700', color: '#062a36', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
          <Image size={15} color="#c59b27" />
          <span>{filteredGallery.length} {filteredGallery.length === 1 ? 'Photograph' : 'Photographs'}</span>
        </div>
      </div>

      {/* Filter Category Pills */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        {categories.map(cat => {
          const count = cat === "All" ? GALLERY_ITEMS.length : GALLERY_ITEMS.filter(i => i.category === cat).length;
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.45rem 1rem',
                borderRadius: '999px',
                fontSize: '0.82rem',
                fontWeight: '700',
                border: '1.5px solid',
                borderColor: isActive ? '#062a36' : '#e2e8f0',
                background: isActive ? '#062a36' : '#ffffff',
                color: isActive ? '#ffffff' : '#334155',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                boxShadow: isActive ? '0 4px 12px rgba(6, 42, 54, 0.2)' : '0 1px 3px rgba(0,0,0,0.02)',
                transition: 'all 0.2s ease'
              }}
            >
              <span>{cat}</span>
              <span style={{
                fontSize: '0.72rem',
                padding: '0.1rem 0.45rem',
                borderRadius: '999px',
                background: isActive ? '#dfb235' : '#f1f5f9',
                color: '#062a36',
                fontWeight: '800'
              }}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Gallery Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
        gap: '1.25rem'
      }}>
        {filteredGallery.map(photo => (
          <div 
            key={photo.id}
            onClick={() => setSelectedImage(photo)}
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.06)',
              height: '240px',
              cursor: 'pointer',
              background: '#062a36',
              border: '1px solid #e2e8f0'
            }}
          >
            <img 
              src={photo.imageUrl} 
              alt={photo.title}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.35s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            />

            {/* Bottom Caption Overlay */}
            <div className="gallery-photo-caption-overlay" style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(180deg, transparent 0%, rgba(6, 42, 54, 0.95) 45%, #062a36 100%)',
              padding: '1.25rem 1rem 0.85rem',
              color: '#ffffff'
            }}>
              <span style={{
                background: '#dfb235',
                color: '#062a36',
                fontSize: '0.68rem',
                fontWeight: '800',
                padding: '0.15rem 0.5rem',
                borderRadius: '4px',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                display: 'inline-block',
                marginBottom: '0.35rem'
              }}>
                {photo.category}
              </span>
              <h4 className="gallery-photo-title" style={{
                color: '#ffffff',
                fontSize: '0.94rem',
                fontWeight: '800',
                marginTop: '0.2rem',
                marginBottom: '0.25rem',
                lineHeight: 1.35,
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap'
              }}>
                {photo.title}
              </h4>
              <p className="gallery-photo-caption" style={{
                fontSize: '0.82rem',
                color: '#ffffff',
                margin: 0,
                lineHeight: 1.45,
                fontWeight: '600',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}>
                {photo.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal (Clean, No colored background box, Full-size Photo, Click outside or X to close) */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.9)',
            zIndex: 999999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            cursor: 'pointer'
          }}
        >
          {/* Top-Right Close Button */}
          <button 
            type="button" 
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            style={{
              position: 'fixed',
              top: '1.5rem',
              right: '1.5rem',
              background: 'rgba(255, 255, 255, 0.25)',
              border: 'none',
              color: '#ffffff',
              cursor: 'pointer',
              borderRadius: '50%',
              width: '46px',
              height: '46px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000000,
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 14px rgba(0,0,0,0.4)'
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.45)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)'}
            aria-label="Close photo"
          >
            <X size={28} strokeWidth={2.5} />
          </button>

          {/* Simple Image Popup Container - No background color */}
          <div 
            onClick={e => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '92vw',
              maxHeight: '92vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'default',
              background: 'transparent'
            }}
          >
            <img 
              src={selectedImage.imageUrl} 
              alt={selectedImage.title} 
              style={{
                maxWidth: '100%',
                maxHeight: '82vh',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.8)',
                display: 'block'
              }}
            />

            {/* Photo Title & Caption */}
            <div className="gallery-modal-text" style={{ marginTop: '0.85rem', textAlign: 'center', color: '#ffffff', maxWidth: '850px', textShadow: '0 2px 6px rgba(0,0,0,0.9)' }}>
              <div className="gallery-photo-title" style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>
                {selectedImage.title}
              </div>
              {selectedImage.caption && (
                <div className="gallery-photo-caption" style={{ fontSize: '1rem', color: '#ffffff', marginTop: '0.4rem', fontWeight: 600, lineHeight: 1.5 }}>
                  {selectedImage.caption}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
