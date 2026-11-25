import React from 'react';
import { useApp } from '../../context/AppContext';
import { Bell } from 'lucide-react';

export default function MarqueeAlert() {
  const { settings } = useApp();

  return (
    <div className="announcement-marquee-wrapper">
      <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
        <div className="marquee-badge">
          <Bell size={13} style={{ display: 'inline', marginRight: '4px' }} />
          LATEST ALERTS
        </div>
        <div className="marquee-scroller">
          <span className="marquee-text">{settings.announcementTicker}</span>
        </div>
      </div>
    </div>
  );
}
