import React, { useState, useEffect } from 'react';
import { Camera, Sparkles, Layers, Award, X, ZoomIn } from 'lucide-react';

// Import all 20 authentic campus highlights photos from assets/campus-highlights
import img01 from '../../assets/campus-highlights/10497848_10153201089727160_4160586009382009716_o.jpg';
import img02 from '../../assets/campus-highlights/10559703_1461113560822892_2612771016800970954_n.jpg';
import img03 from '../../assets/campus-highlights/10609637_1461114300822818_5962398583195555547_n.jpg';
import img04 from '../../assets/campus-highlights/11.jpg';
import img05 from '../../assets/campus-highlights/11998836_1013005795396509_4569425140603221888_n.jpg';
import img06 from '../../assets/campus-highlights/12-r.JPG';
import img07 from '../../assets/campus-highlights/12.jpg';
import img08 from '../../assets/campus-highlights/15-r.JPG';
import img09 from '../../assets/campus-highlights/15.jpg';
import img10 from '../../assets/campus-highlights/1525323_1461114877489427_1394504976652724377_n.jpg';
import img11 from '../../assets/campus-highlights/2002 March 25th IIF 0012.jpg';
import img12 from '../../assets/campus-highlights/20070223-AA02-ASM Seminar.JPG';
import img13 from '../../assets/campus-highlights/2015-03-13 17.59.31.jpg';
import img14 from '../../assets/campus-highlights/2015-05-03 15.59.03.jpg';
import img15 from '../../assets/campus-highlights/2015-05-03 18.40.37.jpg';
import img16 from '../../assets/campus-highlights/2015-05-04 13.24.08.jpg';
import img17 from '../../assets/campus-highlights/2015-05-10 20.50.13.jpg';
import img18 from '../../assets/campus-highlights/21st March 2002 IIF 0010.jpg';
import img19 from '../../assets/campus-highlights/21st March 2002 IIF 0011.jpg';
import img20 from '../../assets/campus-highlights/21st March 2002 IIF 0016.jpg';

export default function HighlightsSection() {
  // Auto-rotating indices for sliding cells
  const [slideIdx1, setSlideIdx1] = useState(0);
  const [slideIdx3, setSlideIdx3] = useState(0);
  const [slideIdx5, setSlideIdx5] = useState(0);
  const [slideIdx8, setSlideIdx8] = useState(0);
  const [activeLightboxImg, setActiveLightboxImg] = useState(null);

  // Grouped sets utilizing authentic campus highlight assets
  const cell1Images = [
    { url: img01, label: "Annual Convocation & Degree Ceremony", category: "Academic Honors" },
    { url: img11, label: "Academic Eminence & Dignitary Honors", category: "Academic Honors" },
    { url: img18, label: "Institutional Foundation Felicitations", category: "Institutional Legacy" },
    { url: img06, label: "Distinguished Academic Assemblies", category: "Academic Honors" }
  ];

  const cell3Images = [
    { url: img02, label: "Corporate Leadership Conclave", category: "Innovation & Industry" },
    { url: img03, label: "Finance & Commerce Roundtables", category: "Academic Symposia" },
    { url: img19, label: "Executive Management Symposium", category: "Leadership Conclave" },
    { url: img08, label: "Corporate Strategy Discussions", category: "Executive Dialogue" }
  ];

  const cell5Images = [
    { url: img05, label: "Industry Mentorship & Student Dialogue", category: "Industry Mentorship" },
    { url: img10, label: "Corporate CXO Masterclass Series", category: "Leadership Series" },
    { url: img20, label: "Distinguished Faculty & Scholars Meet", category: "Academic Pedigree" },
    { url: img09, label: "Student Career Mentorship Sessions", category: "Student Growth" }
  ];

  const cell8Images = [
    { url: img14, label: "Campus Greenery & Open-Air Amphitheatre", category: "Campus Environment" },
    { url: img15, label: "Evening Campus Activities & Gatherings", category: "Campus Life" },
    { url: img16, label: "Student Personality Development Forum", category: "Personality Growth" },
    { url: img17, label: "Knowledge Park III Campus Infrastructure", category: "Campus Grounds" }
  ];

  // Static cells definitions
  const cell2Data = { url: img12, label: "National Management & Finance Seminar", category: "Academic Forum", badge: "Seminars" };
  const cell4Data = { url: img04, label: "Smart Lecture Theatre & Modern Campus", category: "Campus Life", badge: "Infrastructure" };
  const cell6Data = { url: img07, label: "Greater Noida Knowledge Park III Campus", category: "Campus Grounds", badge: "Academic Block" };
  const cell7Data = { url: img13, label: "Student Commerce & Management Workshop", category: "Workshops", badge: "Student Activity" };
  const cell9Data = { url: img17, label: "State-of-the-Art Greater Noida Campus", category: "Campus Grounds", badge: "Campus View" };

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
          <span className="section-tag">CAMPUS LIFE &amp; CHRONICLES</span>
          <h2 style={{ fontSize: '2.3rem', color: 'var(--primary-navy-dark)' }}>
            CAMPUS HIGHLIGHTS
          </h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)' }}>
            A vibrant tapestry of academic symposiums, corporate leadership conclaves, 
            convocations, and collegiate life unfolding across our Greater Noida campus.
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
                <span className="dot-pulse"></span> Auto-Sliding
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
                <span className="dot-pulse"></span> Auto-Sliding
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
                <span className="dot-pulse"></span> Auto-Sliding
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
                <span className="dot-pulse"></span> Auto-Sliding
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
