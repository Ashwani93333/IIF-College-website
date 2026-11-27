import React from 'react';
import { 
  MapPin, Phone, Mail, ExternalLink, Navigation, 
  Clock, ArrowUpRight 
} from 'lucide-react';

export default function CampusLocationSection() {
  const googleMapsUrl = "https://maps.google.com/?q=Indian+Institute+of+Finance+45A+Knowledge+Park+III+Greater+Noida";
  const googleDirectionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Indian+Institute+of+Finance+45A+Knowledge+Park+III+Greater+Noida";

  return (
    <section className="section campus-location-unified-section" id="location" style={{ background: '#C1E1C1' }}>
      <div className="container">
        {/* Section Header */}
        <div className="location-section-header">
          <span className="location-pre-tag">Campus Location</span>
          <h2 className="location-main-title">Visit Our Greater Noida Campus</h2>
          <p className="location-sub-text">
            Conveniently situated in the educational hub of Knowledge Park III
          </p>
        </div>

        {/* 2-Column Split: Left (Secretariat Desk Details) | Right (Interactive Google Map) */}
        <div className="location-split-grid">
          {/* Left Column: Admission Secretariat & Campus Desk Card */}
          <div className="secretariat-desk-card">
            <div>
              <h3 className="secretariat-card-title">Admission Secretariat &amp; Campus Desk</h3>
              <p className="secretariat-intro-text">
                Visit us for in-person counseling, guided campus tours, document verification, and admissions assistance.
              </p>
            </div>

            <div className="secretariat-contact-list">
              {/* Row 1: Campus Address */}
              <div className="contact-info-row">
                <div className="info-icon-pill">
                  <MapPin size={20} />
                </div>
                <div className="info-details-block">
                  <span className="info-sup-label">CAMPUS ADDRESS</span>
                  <p className="info-main-val">
                    Plot No. 45A, Knowledge Park III, Greater Noida, Delhi NCR – 201310, India
                  </p>
                </div>
              </div>

              {/* Row 2: Admission Helpline Numbers */}
              <div className="contact-info-row">
                <div className="info-icon-pill">
                  <Phone size={20} />
                </div>
                <div className="info-details-block">
                  <span className="info-sup-label">ADMISSION HELPLINE NUMBERS</span>
                  <p className="info-main-val">
                    <a href="tel:+919811971002">+91 98119 71002</a> / <a href="tel:+919811537057">+91 98115 37057</a> / 0120-2323683, 2323687
                  </p>
                </div>
              </div>

              {/* Row 3: Official Email Inquiries */}
              <div className="contact-info-row">
                <div className="info-icon-pill">
                  <Mail size={20} />
                </div>
                <div className="info-details-block">
                  <span className="info-sup-label">OFFICIAL EMAIL INQUIRIES</span>
                  <p className="info-main-val">
                    <a href="mailto:info@iifccms.edu.in">info@iifccms.edu.in</a> / <a href="mailto:admission@iifccms.edu.in">admission@iifccms.edu.in</a> / <a href="mailto:iifccms@gmail.com">iifccms@gmail.com</a>
                  </p>
                </div>
              </div>

              {/* Row 4: Visiting Hours & Days */}
              <div className="contact-info-row">
                <div className="info-icon-pill">
                  <Clock size={20} />
                </div>
                <div className="info-details-block">
                  <span className="info-sup-label">OFFICE VISITING HOURS</span>
                  <p className="info-main-val">
                    Monday through Saturday: 09:00 AM – 05:00 PM <span style={{ color: '#64748b', fontSize: '0.84rem' }}>(Sunday Closed)</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Navigation Button */}
            <div className="secretariat-quick-bar">
              <a 
                href={googleDirectionsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secretariat-cta primary"
              >
                <Navigation size={15} />
                <span>Get Driving Directions</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive View with Overlay Badge */}
          <div className="campus-map-card">
            {/* Embedded Live Google Map Centered on Plot 45A, Knowledge Park III */}
            <iframe 
              className="google-map-iframe"
              src="https://maps.google.com/maps?q=Indian+Institute+of+Finance,+45A,+Knowledge+Park+III,+Greater+Noida,+Uttar+Pradesh+201310&t=&z=15&ie=UTF8&iwloc=&output=embed"
              title="IIFCCMS Campus Location Map"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Top-Left Floating Google Maps Badge */}
            <div className="map-floating-overlay-card">
              <h4 className="overlay-inst-title">IIFCCMS - Greater Noida Campus</h4>
              <p className="overlay-inst-address">
                IIFCCMS, Plot No. 45A, Knowledge Park III, Greater Noida, Delhi NCR – 201310, Uttar Pradesh, India
              </p>
              <div className="overlay-btns-row">
                <a 
                  href={googleMapsUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-open-maps"
                >
                  <ExternalLink size={14} />
                  <span>Open in Maps</span>
                </a>
                <a 
                  href={googleDirectionsUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-directions-circle"
                  title="Directions"
                  aria-label="Directions"
                >
                  <Navigation size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
