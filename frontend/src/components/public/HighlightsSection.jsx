import React, { useState, useEffect } from 'react';
import { Camera, Sparkles, Layers, Award } from 'lucide-react';

export default function HighlightsSection() {
  // Auto-rotating indices for sliding cells
  const [slideIdx1, setSlideIdx1] = useState(0);
  const [slideIdx3, setSlideIdx3] = useState(0);
  const [slideIdx5, setSlideIdx5] = useState(0);
  const [slideIdx8, setSlideIdx8] = useState(0);

  // Images for sliding cells
  const cell1Images = [
    { url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=700&q=80", label: "Annual Convocation 2026" },
    { url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=700&q=80", label: "Gold Medalist Felicitations" },
    { url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=700&q=80", label: "Dignitary Degree Presentation" }
  ];

  const cell3Images = [
    { url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=700&q=80", label: "FinTech Hackathon Sprint" },
    { url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=700&q=80", label: "Business Prototype Pitch" },
    { url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80", label: "Coding & Analytics Sprint" }
  ];

  const cell5Images = [
    { url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=700&q=80", label: "CXO Masterclass Series" },
    { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=700&q=80", label: "Investment Banking Panel" },
    { url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=700&q=80", label: "Corporate HR Interaction" }
  ];

  const cell8Images = [
    { url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=700&q=80", label: "Annual Cultural Fest Tarang" },
    { url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=700&q=80", label: "Music & Theatre Festival" },
    { url: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=700&q=80", label: "Youth Creative Expressions" }
  ];

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
  }, []);

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
            A vibrant tapestry of academic symposiums, national hackathons, cultural jubilees, 
            and corporate leadership conclaves unfolding across our Greater Noida campus.
          </p>
        </div>

        {/* 3x3 Photo Matrix */}
        <div className="highlights-3x3-matrix">
          {/* Cell 1: CONSTANTLY SLIDING */}
          <div className="matrix-cell sliding-cell">
            <div className="sliding-image-container">
              {cell1Images.map((img, i) => (
                <img 
                  key={i} 
                  src={img.url} 
                  alt={img.label} 
                  className={`matrix-slide-img ${i === slideIdx1 ? 'active' : ''}`}
                />
              ))}
              <div className="cell-overlay"></div>
              <div className="cell-badge sliding-badge">
                <span className="dot-pulse"></span> Auto-Sliding
              </div>
              <div className="cell-caption">
                <span className="cell-cat">Academic Honors</span>
                <h4>{cell1Images[slideIdx1].label}</h4>
              </div>
            </div>
          </div>

          {/* Cell 2: Static with Zoom */}
          <div className="matrix-cell">
            <div className="cell-img-wrap">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=80" 
                alt="Corporate FinTech Lab" 
                className="matrix-static-img"
              />
              <div className="cell-overlay"></div>
              <div className="cell-badge">Infrastructure</div>
              <div className="cell-caption">
                <span className="cell-cat">High-Tech Labs</span>
                <h4>Corporate FinTech &amp; Trading Lab</h4>
              </div>
            </div>
          </div>

          {/* Cell 3: CONSTANTLY SLIDING */}
          <div className="matrix-cell sliding-cell">
            <div className="sliding-image-container">
              {cell3Images.map((img, i) => (
                <img 
                  key={i} 
                  src={img.url} 
                  alt={img.label} 
                  className={`matrix-slide-img ${i === slideIdx3 ? 'active' : ''}`}
                />
              ))}
              <div className="cell-overlay"></div>
              <div className="cell-badge sliding-badge">
                <span className="dot-pulse"></span> Auto-Sliding
              </div>
              <div className="cell-caption">
                <span className="cell-cat">Innovation</span>
                <h4>{cell3Images[slideIdx3].label}</h4>
              </div>
            </div>
          </div>

          {/* Cell 4: Static with Zoom */}
          <div className="matrix-cell">
            <div className="cell-img-wrap">
              <img 
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=700&q=80" 
                alt="National Management Conclave" 
                className="matrix-static-img"
              />
              <div className="cell-overlay"></div>
              <div className="cell-badge">Conferences</div>
              <div className="cell-caption">
                <span className="cell-cat">Leadership</span>
                <h4>National Management Conclave 2026</h4>
              </div>
            </div>
          </div>

          {/* Cell 5: CONSTANTLY SLIDING */}
          <div className="matrix-cell sliding-cell">
            <div className="sliding-image-container">
              {cell5Images.map((img, i) => (
                <img 
                  key={i} 
                  src={img.url} 
                  alt={img.label} 
                  className={`matrix-slide-img ${i === slideIdx5 ? 'active' : ''}`}
                />
              ))}
              <div className="cell-overlay"></div>
              <div className="cell-badge sliding-badge">
                <span className="dot-pulse"></span> Auto-Sliding
              </div>
              <div className="cell-caption">
                <span className="cell-cat">Industry Mentorship</span>
                <h4>{cell5Images[slideIdx5].label}</h4>
              </div>
            </div>
          </div>

          {/* Cell 6: Static with Zoom */}
          <div className="matrix-cell">
            <div className="cell-img-wrap">
              <img 
                src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=700&q=80" 
                alt="Sports & Athletic Tournament" 
                className="matrix-static-img"
              />
              <div className="cell-overlay"></div>
              <div className="cell-badge">Athletics</div>
              <div className="cell-caption">
                <span className="cell-cat">Sports Guild</span>
                <h4>Inter-College Sports &amp; Athletics</h4>
              </div>
            </div>
          </div>

          {/* Cell 7: Static with Zoom */}
          <div className="matrix-cell">
            <div className="cell-img-wrap">
              <img 
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=700&q=80" 
                alt="Central Library Research Symposia" 
                className="matrix-static-img"
              />
              <div className="cell-overlay"></div>
              <div className="cell-badge">Research</div>
              <div className="cell-caption">
                <span className="cell-cat">Knowledge Base</span>
                <h4>Central Library Research Symposia</h4>
              </div>
            </div>
          </div>

          {/* Cell 8: CONSTANTLY SLIDING */}
          <div className="matrix-cell sliding-cell">
            <div className="sliding-image-container">
              {cell8Images.map((img, i) => (
                <img 
                  key={i} 
                  src={img.url} 
                  alt={img.label} 
                  className={`matrix-slide-img ${i === slideIdx8 ? 'active' : ''}`}
                />
              ))}
              <div className="cell-overlay"></div>
              <div className="cell-badge sliding-badge">
                <span className="dot-pulse"></span> Auto-Sliding
              </div>
              <div className="cell-caption">
                <span className="cell-cat">Cultural</span>
                <h4>{cell8Images[slideIdx8].label}</h4>
              </div>
            </div>
          </div>

          {/* Cell 9: Static with Zoom */}
          <div className="matrix-cell">
            <div className="cell-img-wrap">
              <img 
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=700&q=80" 
                alt="Community Outreach & Financial Literacy" 
                className="matrix-static-img"
              />
              <div className="cell-overlay"></div>
              <div className="cell-badge">Social Impact</div>
              <div className="cell-caption">
                <span className="cell-cat">Rotaract &amp; CSR</span>
                <h4>Financial Literacy &amp; Rural Outreach</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
