import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Bell, Search, Pin, ExternalLink, Calendar, FileText } from 'lucide-react';

export default function NoticeBoard() {
  const { notices } = useApp();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Examination", "Admission", "Academic", "General"];

  const filteredNotices = notices.filter(notice => {
    if (!notice.isActive) return false;
    const matchesCategory = activeCategory === "All" || notice.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch = notice.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          notice.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="section section-bg-white" id="notices">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Institutional Secretariat</span>
          <h2>Official Notices & University Circulars</h2>
          <p>
            Real-time announcements, CCS University Meerut exam schedules, and academic circulars.
          </p>
        </div>

        <div className="notice-board-container">
          {/* Filter & Search Bar */}
          <div className="notice-filter-bar">
            <div className="category-pills">
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

            <div className="search-input-wrapper">
              <Search size={16} className="search-icon-pos" />
              <input 
                type="text" 
                placeholder="Search circulars by keyword..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Notices List */}
          <div className="notice-list-content">
            {filteredNotices.length === 0 ? (
              <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                No circulars match the selected filter criteria.
              </div>
            ) : (
              filteredNotices.map(notice => {
                const dateObj = new Date(notice.publishDate);
                const day = dateObj.getDate() || 20;
                const month = dateObj.toLocaleString('default', { month: 'short' }).toUpperCase() || "NOV";

                return (
                  <div key={notice.id} className="notice-item-row">
                    <div className="notice-item-left">
                      <div className="notice-date-badge">
                        <div className="day">{day}</div>
                        <div className="month">{month}</div>
                      </div>

                      <div>
                        <div className="notice-meta-line">
                          {notice.isPinned && (
                            <span className="badge-pinned">
                              <Pin size={11} /> Urgent / Pinned
                            </span>
                          )}
                          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                            {notice.category}
                          </span>
                        </div>
                        <h4 className="notice-item-title">{notice.title}</h4>
                        <p className="notice-item-desc">{notice.content}</p>
                      </div>
                    </div>

                    {notice.attachmentUrl && (
                      <div style={{ flexShrink: 0 }}>
                        <a 
                          href={notice.attachmentUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn-view-syllabus"
                          style={{ fontSize: '0.8rem', padding: '0.4rem 0.75rem' }}
                        >
                          <FileText size={14} /> {notice.attachmentLabel || "Attachment"}
                        </a>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
