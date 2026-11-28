import React, { useState, useEffect } from 'react';
import { Camera, Sparkles, Layers, Award, X, ZoomIn } from 'lucide-react';

// Authentic Campus Highlights Photos by Folder from web photographs/Campus highlights
// 1. Students Activity
import sa1 from '../../assets/web photographs/Campus highlights/Students Activity/10559703_1461113560822892_2612771016800970954_n.jpg';
import sa2 from '../../assets/web photographs/Campus highlights/Students Activity/10609637_1461114300822818_5962398583195555547_n.jpg';
import sa3 from '../../assets/web photographs/Campus highlights/Students Activity/15-r.JPG';
import sa4 from '../../assets/web photographs/Campus highlights/Students Activity/PLANTATION.jfif';

// 2. Seminars
import sem1 from '../../assets/web photographs/Campus highlights/Seminars/11.jpg';
import sem2 from '../../assets/web photographs/Campus highlights/Seminars/12.jpg';
import sem3 from '../../assets/web photographs/Campus highlights/Seminars/20070223-AA02-ASM Seminar.JPG';
import sem4 from '../../assets/web photographs/Campus highlights/Seminars/Army Institute Seminar -_DSC0066.JPG';

// 3. Infrastructure
import infra1 from '../../assets/web photographs/Campus highlights/Infrastructure/Institute MAIN BUILDING.jfif';
import infra2 from '../../assets/web photographs/Campus highlights/Infrastructure/Classrooms.jfif';
import infra3 from '../../assets/web photographs/Campus highlights/Infrastructure/ComputerCentre.jfif';
import infra4 from '../../assets/web photographs/Campus highlights/Infrastructure/Institute1.jfif';

// 4. Library
import lib1 from '../../assets/web photographs/Campus highlights/Library/Library1.jfif';
import lib2 from '../../assets/web photographs/Campus highlights/Library/Library2.jfif';
import lib3 from '../../assets/web photographs/Campus highlights/Library/Library3.jfif';

// 5. Foreign Dignitary
import fd1 from '../../assets/web photographs/Campus highlights/Foregin dignitary/2015-05-03 15.59.03.jpg';
import fd2 from '../../assets/web photographs/Campus highlights/Foregin dignitary/2015-05-03 18.40.37.jpg';
import fd3 from '../../assets/web photographs/Campus highlights/Foregin dignitary/2015-05-10 20.50.13.jpg';
import fd4 from '../../assets/web photographs/Campus highlights/Foregin dignitary/20070506-AA12-KayoK.JPG';

// 6. Official Dignitary
import od1 from '../../assets/web photographs/Campus highlights/official Dignitary/2015-03-13 17.59.31.jpg';
import od2 from '../../assets/web photographs/Campus highlights/official Dignitary/21st March 2002 IIF 0010.jpg';
import od3 from '../../assets/web photographs/Campus highlights/official Dignitary/21st March 2002 IIF 0011.jpg';
import od4 from '../../assets/web photographs/Campus highlights/official Dignitary/21st March 2002 IIF 0016.jpg';

// 7. MoU Signing
import mou1 from '../../assets/web photographs/Campus highlights/Mou signing/Baku, Azerbaijan on 4th May, 2015 IIF 00035.jpg';
import mou2 from '../../assets/web photographs/Campus highlights/Mou signing/Baku, Azerbaijan on 5th May, 2015 IIF 00024.jpg';

export default function HighlightsSection() {
  // Auto-rotating indices for sliding cells
  const [slideIdx1, setSlideIdx1] = useState(0);
  const [slideIdx3, setSlideIdx3] = useState(0);
  const [slideIdx5, setSlideIdx5] = useState(0);
  const [slideIdx8, setSlideIdx8] = useState(0);
  const [activeLightboxImg, setActiveLightboxImg] = useState(null);

  // Grouped sets utilizing authentic folder-based campus highlight assets
  // Cell 1: Students Activity (Sliding)
  const cell1Images = [
    { url: sa1, label: "Students Activity", category: "Campus Highlights", badge: "Students Activity" },
    { url: sa2, label: "Students Activity", category: "Campus Highlights", badge: "Students Activity" },
    { url: sa3, label: "Students Activity", category: "Campus Highlights", badge: "Students Activity" },
    { url: sa4, label: "Students Activity", category: "Campus Highlights", badge: "Students Activity" }
  ];

  // Cell 3: Official Dignitary (Sliding)
  const cell3Images = [
    { url: od1, label: "Official Dignitary", category: "Campus Highlights", badge: "Official Dignitary" },
    { url: od2, label: "Official Dignitary", category: "Campus Highlights", badge: "Official Dignitary" },
    { url: od3, label: "Official Dignitary", category: "Campus Highlights", badge: "Official Dignitary" },
    { url: od4, label: "Official Dignitary", category: "Campus Highlights", badge: "Official Dignitary" }
  ];

  // Cell 5: Foreign Dignitary (Sliding)
  const cell5Images = [
    { url: fd1, label: "Foreign Dignitary", category: "Campus Highlights", badge: "Foreign Dignitary" },
    { url: fd2, label: "Foreign Dignitary", category: "Campus Highlights", badge: "Foreign Dignitary" },
    { url: fd3, label: "Foreign Dignitary", category: "Campus Highlights", badge: "Foreign Dignitary" },
    { url: fd4, label: "Foreign Dignitary", category: "Campus Highlights", badge: "Foreign Dignitary" }
  ];

  // Cell 8: Seminars (Sliding)
  const cell8Images = [
    { url: sem1, label: "Seminars", category: "Campus Highlights", badge: "Seminars" },
    { url: sem2, label: "Seminars", category: "Campus Highlights", badge: "Seminars" },
    { url: sem4, label: "Seminars", category: "Campus Highlights", badge: "Seminars" },
    { url: sem3, label: "Seminars", category: "Campus Highlights", badge: "Seminars" }
  ];

  // Static cells definitions based on folder naming
  const cell2Data = { url: sem3, label: "Seminars", category: "Campus Highlights", badge: "Seminars" };
  const cell4Data = { url: infra2, label: "Infrastructure", category: "Campus Highlights", badge: "Infrastructure" };
  const cell6Data = { url: lib1, label: "Library", category: "Campus Highlights", badge: "Library" };
  const cell7Data = { url: mou1, label: "MoU Signing", category: "Campus Highlights", badge: "MoU Signing" };
  const cell9Data = { url: infra3, label: "Infrastructure", category: "Campus Highlights", badge: "Infrastructure" };

  useEffect(() => {
    const timer1 = setInterval(() => {
      setSlideIdx1(prev => (prev + 1) % cell1Images.length);
    }, 3200);
    const timer3 = setInterval(() => {
      setSlideIdx3(prev => (prev + 1) % cell3Images.length);
    }, 3800);
    const timer5 = setInterval(() => {
      setSlideIdx5(prev => (prev + 1) % cell5Images.length);
    }, 3500);
    const timer8 = setInterval(() => {
      setSlideIdx8(prev => (prev + 1) % cell8Images.length);
    }, 4000);

    return () => {
      clearInterval(timer1);
      clearInterval(timer3);
      clearInterval(timer5);
      clearInterval(timer8);
    };
  }, [cell1Images.length, cell3Images.length, cell5Images.length, cell8Images.length]);

  return (
    <section className="section section-bg-light highlights-section" id="highlights">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <span className="section-tag">CAMPUS HIGHLIGHTS</span>
          <h2 style={{ fontSize: '2.3rem', color: 'var(--primary-navy-dark)' }}>
            CAMPUS HIGHLIGHTS
          </h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)' }}>
            Glimpses of vibrant life across Students Activity, Seminars, Infrastructure, Library, Foreign Dignitaries, Official Dignitaries, and MoU Signing.
          </p>
        </div>

        {/* 3x3 Photo Matrix */}
        <div className="highlights-3x3-matrix">
          {/* Cell 1: CONSTANTLY SLIDING */}
          <div 
            className="matrix-cell sliding-cell" 
            onClick={() => setActiveLightboxImg(cell1Images[slideIdx1])}
            style={{ cursor: 'pointer' }}
          >
            <div className="sliding-image-container">
              {cell1Images.map((img, i) => (
                <img 
                  key={i} 
                  src={img.url} 
                  alt={img.label} 
                  className={`matrix-slide-img ${i === slideIdx1 ? 'active' : ''}`}
                  loading="lazy"
                />
              ))}
              <div className="cell-overlay"></div>
              <div className="cell-badge sliding-badge">
                <span className="dot-pulse"></span> {cell1Images[slideIdx1].badge}
              </div>
              <div className="cell-caption">
                <span className="cell-cat">{cell1Images[slideIdx1].category}</span>
                <h4>{cell1Images[slideIdx1].label}</h4>
              </div>
            </div>
          </div>

          {/* Cell 2: Static with Zoom */}
          <div 
            className="matrix-cell"
            onClick={() => setActiveLightboxImg(cell2Data)}
            style={{ cursor: 'pointer' }}
          >
            <div className="cell-img-wrap">
              <img 
                src={cell2Data.url} 
                alt={cell2Data.label} 
                className="matrix-static-img"
                loading="lazy"
              />
              <div className="cell-overlay"></div>
              <div className="cell-badge">{cell2Data.badge}</div>
              <div className="cell-caption">
                <span className="cell-cat">{cell2Data.category}</span>
                <h4>{cell2Data.label}</h4>
              </div>
            </div>
          </div>

          {/* Cell 3: CONSTANTLY SLIDING */}
          <div 
            className="matrix-cell sliding-cell"
            onClick={() => setActiveLightboxImg(cell3Images[slideIdx3])}
            style={{ cursor: 'pointer' }}
          >
            <div className="sliding-image-container">
              {cell3Images.map((img, i) => (
                <img 
                  key={i} 
                  src={img.url} 
                  alt={img.label} 
                  className={`matrix-slide-img ${i === slideIdx3 ? 'active' : ''}`}
                  loading="lazy"
                />
              ))}
              <div className="cell-overlay"></div>
              <div className="cell-badge sliding-badge">
                <span className="dot-pulse"></span> {cell3Images[slideIdx3].badge}
              </div>
              <div className="cell-caption">
                <span className="cell-cat">{cell3Images[slideIdx3].category}</span>
                <h4>{cell3Images[slideIdx3].label}</h4>
              </div>
            </div>
          </div>

          {/* Cell 4: Static with Zoom */}
          <div 
            className="matrix-cell"
            onClick={() => setActiveLightboxImg(cell4Data)}
            style={{ cursor: 'pointer' }}
          >
            <div className="cell-img-wrap">
              <img 
                src={cell4Data.url} 
                alt={cell4Data.label} 
                className="matrix-static-img"
                loading="lazy"
              />
              <div className="cell-overlay"></div>
              <div className="cell-badge">{cell4Data.badge}</div>
              <div className="cell-caption">
                <span className="cell-cat">{cell4Data.category}</span>
                <h4>{cell4Data.label}</h4>
              </div>
            </div>
          </div>

          {/* Cell 5: CONSTANTLY SLIDING */}
          <div 
            className="matrix-cell sliding-cell"
            onClick={() => setActiveLightboxImg(cell5Images[slideIdx5])}
            style={{ cursor: 'pointer' }}
          >
            <div className="sliding-image-container">
              {cell5Images.map((img, i) => (
                <img 
                  key={i} 
                  src={img.url} 
                  alt={img.label} 
                  className={`matrix-slide-img ${i === slideIdx5 ? 'active' : ''}`}
                  loading="lazy"
                />
              ))}
              <div className="cell-overlay"></div>
              <div className="cell-badge sliding-badge">
                <span className="dot-pulse"></span> {cell5Images[slideIdx5].badge}
              </div>
              <div className="cell-caption">
                <span className="cell-cat">{cell5Images[slideIdx5].category}</span>
                <h4>{cell5Images[slideIdx5].label}</h4>
              </div>
            </div>
          </div>

          {/* Cell 6: Static with Zoom */}
          <div 
            className="matrix-cell"
            onClick={() => setActiveLightboxImg(cell6Data)}
            style={{ cursor: 'pointer' }}
          >
            <div className="cell-img-wrap">
              <img 
                src={cell6Data.url} 
                alt={cell6Data.label} 
                className="matrix-static-img"
                loading="lazy"
              />
              <div className="cell-overlay"></div>
              <div className="cell-badge">{cell6Data.badge}</div>
              <div className="cell-caption">
                <span className="cell-cat">{cell6Data.category}</span>
                <h4>{cell6Data.label}</h4>
              </div>
            </div>
          </div>

          {/* Cell 7: Static with Zoom */}
          <div 
            className="matrix-cell"
            onClick={() => setActiveLightboxImg(cell7Data)}
            style={{ cursor: 'pointer' }}
          >
            <div className="cell-img-wrap">
              <img 
                src={cell7Data.url} 
                alt={cell7Data.label} 
                className="matrix-static-img"
                loading="lazy"
              />
              <div className="cell-overlay"></div>
              <div className="cell-badge">{cell7Data.badge}</div>
              <div className="cell-caption">
                <span className="cell-cat">{cell7Data.category}</span>
                <h4>{cell7Data.label}</h4>
              </div>
            </div>
          </div>

          {/* Cell 8: CONSTANTLY SLIDING */}
          <div 
            className="matrix-cell sliding-cell"
            onClick={() => setActiveLightboxImg(cell8Images[slideIdx8])}
            style={{ cursor: 'pointer' }}
          >
            <div className="sliding-image-container">
              {cell8Images.map((img, i) => (
                <img 
                  key={i} 
                  src={img.url} 
                  alt={img.label} 
                  className={`matrix-slide-img ${i === slideIdx8 ? 'active' : ''}`}
                  loading="lazy"
                />
              ))}
              <div className="cell-overlay"></div>
              <div className="cell-badge sliding-badge">
                <span className="dot-pulse"></span> {cell8Images[slideIdx8].badge}
              </div>
              <div className="cell-caption">
                <span className="cell-cat">{cell8Images[slideIdx8].category}</span>
                <h4>{cell8Images[slideIdx8].label}</h4>
              </div>
            </div>
          </div>

          {/* Cell 9: Static with Zoom */}
          <div 
            className="matrix-cell"
            onClick={() => setActiveLightboxImg(cell9Data)}
            style={{ cursor: 'pointer' }}
          >
            <div className="cell-img-wrap">
              <img 
                src={cell9Data.url} 
                alt={cell9Data.label} 
                className="matrix-static-img"
                loading="lazy"
              />
              <div className="cell-overlay"></div>
              <div className="cell-badge">{cell9Data.badge}</div>
              <div className="cell-caption">
                <span className="cell-cat">{cell9Data.category}</span>
                <h4>{cell9Data.label}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Preview Modal */}
      {activeLightboxImg && (
        <div 
          className="modal-overlay" 
          onClick={() => setActiveLightboxImg(null)}
          style={{ background: 'rgba(6, 42, 54, 0.92)', zIndex: 99999 }}
        >
          <div 
            className="modal-dialog" 
            onClick={e => e.stopPropagation()}
            style={{ maxWidth: '850px', padding: '1rem', background: '#062a36', border: '1px solid #c59b27' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#dfb235', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {activeLightboxImg.category || "Campus Highlights"}
                </span>
                <h3 style={{ margin: '0.2rem 0 0', color: '#ffffff', fontSize: '1.2rem' }}>
                  {activeLightboxImg.label}
                </h3>
              </div>
              <button 
                type="button" 
                onClick={() => setActiveLightboxImg(null)}
                style={{ background: 'none', border: 'none', color: '#ffffff', fontSize: '1.5rem', cursor: 'pointer', padding: '0.25rem 0.5rem' }}
                aria-label="Close Preview"
              >
                &times;
              </button>
            </div>
            <div style={{ maxHeight: '70vh', overflow: 'hidden', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img 
                src={activeLightboxImg.url} 
                alt={activeLightboxImg.label} 
                style={{ maxWidth: '100%', maxHeight: '68vh', objectFit: 'contain', borderRadius: '6px' }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
