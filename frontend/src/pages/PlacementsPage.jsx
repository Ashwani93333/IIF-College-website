import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/public/Navbar';
import MarqueeAlert from '../components/public/MarqueeAlert';
import Footer from '../components/public/Footer';
import PlacementSection from '../components/public/PlacementSection';

export default function PlacementsPage() {
  return (
    <div className="inner-page-root">
      <Navbar />
      <MarqueeAlert />

      <div className="page-hero-banner">
        <div className="container">
          <div className="hero-breadcrumbs">
            <Link to="/">Home</Link> <span>/</span> <span className="active">Placements</span>
          </div>
          <h1 className="page-main-heading">Corporate Placements &amp; Careers</h1>
          <p className="page-sub-lead">
            Dedicated Corporate Resource Center driving career opportunities and placement assistance for BBA and B.Com graduates.
          </p>
        </div>
      </div>

      <div className="container page-content-container" style={{ paddingBottom: '3.5rem' }}>
        <PlacementSection />
      </div>

      <Footer />
    </div>
  );
}
