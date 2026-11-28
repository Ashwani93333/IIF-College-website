import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Image, Plus, Trash2, Edit3, Eye, Upload, 
  Layers, Sparkles, Check, CheckCircle2 
} from 'lucide-react';

export default function AdminLandingMediaPage() {
  const { 
    heroSlides, addHeroSlide, updateHeroSlide, deleteHeroSlide,
    highlights, addHighlight, updateHighlight, deleteHighlight,
    gallery, addGalleryItem, deleteGalleryItem 
  } = useApp();

  const [activeTab, setActiveTab] = useState('hero'); // 'hero' | 'highlights' | 'gallery'

  // Modal States
  const [heroModalOpen, setHeroModalOpen] = useState(false);
  const [editingHero, setEditingHero] = useState(null);
  const [heroForm, setHeroForm] = useState({
    tag: "",
    caption: "",
    bgImage: "",
    order: 1,
    isActive: true
  });

  const [highlightModalOpen, setHighlightModalOpen] = useState(false);
  const [editingHighlight, setEditingHighlight] = useState(null);
  const [highlightForm, setHighlightForm] = useState({
    category: "Students Activity",
    title: "",
    badge: "Students Activity",
    photoUrl: "",
    description: ""
  });

  const [galleryModalOpen, setGalleryModalOpen] = useState(false);
  const [galleryForm, setGalleryForm] = useState({
    title: "",
    category: "Campus",
    caption: "",
    imageUrl: ""
  });

  // Image File Reader Helper
  const handleFileChange = (e, callback) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        callback(uploadEvent.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Hero Handlers
  const handleOpenHeroModal = (slide = null) => {
    if (slide) {
      setEditingHero(slide);
      setHeroForm({
        tag: slide.tag || "",
        caption: slide.caption || "",
        bgImage: slide.bgImage || "",
        order: slide.order || 1,
        isActive: slide.isActive !== false
      });
    } else {
      setEditingHero(null);
      setHeroForm({
        tag: "CAMPUS OVERVIEW",
        caption: "IIFCCMS • Greater Noida (College Code: 472)",
        bgImage: "",
        order: heroSlides.length + 1,
        isActive: true
      });
    }
    setHeroModalOpen(true);
  };

  const handleSaveHero = (e) => {
    e.preventDefault();
    if (!heroForm.bgImage) {
      alert("Please upload or provide an image URL for the banner slide.");
      return;
    }
    if (editingHero) {
      updateHeroSlide(editingHero.id, heroForm);
    } else {
      addHeroSlide(heroForm);
    }
    setHeroModalOpen(false);
  };

  // Highlight Handlers
  const handleOpenHighlightModal = (hl = null) => {
    if (hl) {
      setEditingHighlight(hl);
      setHighlightForm({
        category: hl.category || "Students Activity",
        title: hl.title || "",
        badge: hl.badge || hl.category || "Students Activity",
        photoUrl: hl.photoUrl || "",
        description: hl.description || ""
      });
    } else {
      setEditingHighlight(null);
      setHighlightForm({
        category: "Students Activity",
        title: "",
        badge: "Students Activity",
        photoUrl: "",
        description: ""
      });
    }
    setHighlightModalOpen(true);
  };

  const handleSaveHighlight = (e) => {
    e.preventDefault();
    if (!highlightForm.photoUrl) {
      alert("Please upload or provide an image URL for the campus highlight.");
      return;
    }
    if (editingHighlight) {
      updateHighlight(editingHighlight.id, highlightForm);
    } else {
      addHighlight(highlightForm);
    }
    setHighlightModalOpen(false);
  };

  // Gallery Handlers
  const handleSaveGallery = (e) => {
    e.preventDefault();
    if (!galleryForm.imageUrl) {
      alert("Please upload or provide a photo URL.");
      return;
    }
    addGalleryItem(galleryForm);
    setGalleryModalOpen(false);
    setGalleryForm({ title: "", category: "Campus", caption: "", imageUrl: "" });
  };

  const HIGHLIGHT_CATEGORIES = [
    "Students Activity",
    "Seminars",
    "Infrastructure",
    "Library",
    "Foreign Dignitary",
    "Official Dignitary",
    "MoU Signing"
  ];

  return (
    <div>
      {/* Page Header */}
      <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--primary-navy)' }}>
            Landing Page &amp; Media CMS
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Update landing page hero slider photos, categorized campus highlights, and public photo gallery.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.65rem' }}>
          {activeTab === 'hero' && (
            <button onClick={() => handleOpenHeroModal()} className="btn-primary-gold" style={{ fontSize: '0.85rem' }}>
              <Plus size={16} /> Add Landing Banner Slide
            </button>
          )}
          {activeTab === 'highlights' && (
            <button onClick={() => handleOpenHighlightModal()} className="btn-primary-gold" style={{ fontSize: '0.85rem' }}>
              <Plus size={16} /> Add Campus Highlight
            </button>
          )}
          {activeTab === 'gallery' && (
            <button onClick={() => setGalleryModalOpen(true)} className="btn-primary-gold" style={{ fontSize: '0.85rem' }}>
              <Plus size={16} /> Add Photo to Gallery
            </button>
          )}
        </div>
      </div>

      {/* Tabs Bar */}
      <div style={{ display: 'flex', gap: '0.5rem', borderBottom: '2px solid #e2e8f0', marginBottom: '1.5rem' }}>
        <button
          onClick={() => setActiveTab('hero')}
          style={{
            padding: '0.75rem 1.25rem',
            fontWeight: 800,
            fontSize: '0.9rem',
            border: 'none',
            borderBottom: activeTab === 'hero' ? '3px solid #dfb235' : '3px solid transparent',
            color: activeTab === 'hero' ? '#062a36' : '#64748b',
            background: 'none',
            cursor: 'pointer'
          }}
        >
          1. Landing Page Photo Update (Hero Slider) ({heroSlides?.length || 0})
        </button>

        <button
          onClick={() => setActiveTab('highlights')}
          style={{
            padding: '0.75rem 1.25rem',
            fontWeight: 800,
            fontSize: '0.9rem',
            border: 'none',
            borderBottom: activeTab === 'highlights' ? '3px solid #dfb235' : '3px solid transparent',
            color: activeTab === 'highlights' ? '#062a36' : '#64748b',
            background: 'none',
            cursor: 'pointer'
          }}
        >
          4. Campus Highlights by Category ({highlights?.length || 0})
        </button>

        <button
          onClick={() => setActiveTab('gallery')}
          style={{
            padding: '0.75rem 1.25rem',
            fontWeight: 800,
            fontSize: '0.9rem',
            border: 'none',
            borderBottom: activeTab === 'gallery' ? '3px solid #dfb235' : '3px solid transparent',
            color: activeTab === 'gallery' ? '#062a36' : '#64748b',
            background: 'none',
            cursor: 'pointer'
          }}
        >
          19. Campus Photo Gallery ({gallery?.length || 0})
        </button>
      </div>

      {/* TAB 1: HERO SLIDER PHOTOS */}
      {activeTab === 'hero' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {heroSlides.map((slide, idx) => (
            <div key={slide.id} className="data-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '180px', position: 'relative', background: '#062a36' }}>
                <img 
                  src={slide.bgImage} 
                  alt={slide.tag} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <span style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  background: 'rgba(6, 42, 54, 0.85)',
                  color: '#fde047',
                  padding: '0.2rem 0.55rem',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: 800
                }}>
                  Slide #{idx + 1} • {slide.tag}
                </span>

                <div style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', gap: '0.4rem' }}>
                  <button
                    onClick={() => handleOpenHeroModal(slide)}
                    style={{ background: '#ffffff', color: '#062a36', borderRadius: '4px', padding: '0.35rem 0.6rem', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.75rem', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
                    title="Edit Slide"
                  >
                    <Edit3 size={13} /> Edit
                  </button>
                  <button
                    onClick={() => {
                      if (window.confirm(`Delete slide: "${slide.caption}"?`)) {
                        deleteHeroSlide(slide.id);
                      }
                    }}
                    style={{ background: '#ef4444', color: '#ffffff', borderRadius: '4px', padding: '0.35rem 0.5rem', border: 'none', cursor: 'pointer' }}
                    title="Delete Slide"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              </div>

              <div style={{ padding: '1rem', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--accent-gold-dark)', textTransform: 'uppercase' }}>
                    {slide.tag}
                  </div>
                  <h4 style={{ fontSize: '0.98rem', color: 'var(--primary-navy)', margin: '0.3rem 0 0.5rem' }}>
                    {slide.caption}
                  </h4>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid #e2e8f0', fontSize: '0.8rem', color: '#64748b' }}>
                  <span>Status: <strong style={{ color: slide.isActive !== false ? '#16a34a' : '#dc2626' }}>{slide.isActive !== false ? 'Live on Landing' : 'Hidden'}</strong></span>
                  <button
                    onClick={() => updateHeroSlide(slide.id, { isActive: slide.isActive === false ? true : false })}
                    style={{ background: 'none', border: 'none', color: '#0d5c75', cursor: 'pointer', fontWeight: 700 }}
                  >
                    {slide.isActive !== false ? 'Disable' : 'Enable'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 2: CAMPUS HIGHLIGHTS BY CATEGORY */}
      {activeTab === 'highlights' && (
        <div>
          <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #cbd5e1', marginBottom: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#334155', alignSelf: 'center', marginRight: '0.5rem' }}>
              Categories:
            </span>
            {HIGHLIGHT_CATEGORIES.map(cat => (
              <span key={cat} style={{ background: '#ffffff', border: '1px solid #cbd5e1', padding: '0.25rem 0.65rem', borderRadius: '4px', fontSize: '0.78rem', fontWeight: 700, color: '#0f172a' }}>
                {cat} ({highlights.filter(h => h.category === cat).length})
              </span>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {highlights.map(hl => (
              <div key={hl.id} className="data-card" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '175px', position: 'relative', background: '#0f172a' }}>
                  <img src={hl.photoUrl} alt={hl.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', top: '10px', left: '10px', background: '#062a36', color: '#dfb235', padding: '0.2rem 0.55rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 800 }}>
                    {hl.category}
                  </span>
                  <div style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', gap: '0.35rem' }}>
                    <button
                      onClick={() => handleOpenHighlightModal(hl)}
                      style={{ background: '#ffffff', color: '#062a36', borderRadius: '4px', padding: '0.3rem 0.55rem', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.75rem' }}
                    >
                      <Edit3 size={13} /> Edit
                    </button>
                    <button
                      onClick={() => {
                        if (window.confirm(`Delete highlight "${hl.title}"?`)) {
                          deleteHighlight(hl.id);
                        }
                      }}
                      style={{ background: '#ef4444', color: '#fff', borderRadius: '4px', padding: '0.3rem 0.5rem', border: 'none', cursor: 'pointer' }}
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>

                <div style={{ padding: '1rem', flexGrow: 1 }}>
                  <h4 style={{ fontSize: '1rem', color: 'var(--primary-navy)', margin: '0 0 0.4rem' }}>{hl.title}</h4>
                  <p style={{ fontSize: '0.82rem', color: '#64748b', margin: 0, lineHeight: 1.45 }}>{hl.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: CAMPUS PHOTO GALLERY */}
      {activeTab === 'gallery' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {gallery.map(img => (
            <div key={img.id} className="data-card" style={{ overflow: 'hidden' }}>
              <div style={{ height: '180px', position: 'relative' }}>
                <img src={img.imageUrl} alt={img.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <button
                  onClick={() => {
                    if (window.confirm(`Remove image: "${img.title}"?`)) {
                      deleteGalleryItem(img.id);
                    }
                  }}
                  style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(239,68,68,0.95)', color: '#fff', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer' }}
                  title="Delete Photo"
                >
                  <Trash2 size={15} />
                </button>
              </div>
              <div style={{ padding: '1rem' }}>
                <span className="code-tag" style={{ fontSize: '0.72rem' }}>{img.category}</span>
                <h4 style={{ fontSize: '0.98rem', color: 'var(--primary-navy)', marginTop: '0.35rem' }}>{img.title}</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* HERO SLIDE MODAL */}
      {heroModalOpen && (
        <div className="modal-overlay" onClick={() => setHeroModalOpen(false)}>
          <div className="modal-dialog" onClick={e => e.stopPropagation()} style={{ maxWidth: '600px' }}>
            <div className="modal-header">
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)' }}>
                {editingHero ? 'Edit Landing Banner Photo' : 'Upload New Landing Banner Photo'}
              </h3>
              <button onClick={() => setHeroModalOpen(false)} style={{ fontSize: '1.5rem', color: 'var(--text-muted)', border: 'none', background: 'none', cursor: 'pointer' }}>&times;</button>
            </div>
            <form onSubmit={handleSaveHero}>
              <div className="modal-body">
                <div className="form-group">
                  <label>Banner Category Tag (e.g. CAMPUS OVERVIEW, CAREER LAUNCHPAD) *</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    value={heroForm.tag}
                    onChange={e => setHeroForm({ ...heroForm, tag: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Banner Main Caption / Heading *</label>
                  <textarea
                    rows="2"
                    required
                    className="form-control"
                    value={heroForm.caption}
                    onChange={e => setHeroForm({ ...heroForm, caption: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Upload Banner Image File *</label>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={e => handleFileChange(e, (dataUrl) => setHeroForm({ ...heroForm, bgImage: dataUrl }))}
                  />
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>
                    *Recommended size: 1920x800px. High resolution JPG or PNG.
                  </div>
                </div>

                <div className="form-group">
                  <label>Or Paste Image URL</label>
                  <input
                    type="text"
                    placeholder="https://..."
                    className="form-control"
                    value={heroForm.bgImage}
                    onChange={e => setHeroForm({ ...heroForm, bgImage: e.target.value })}
                  />
                </div>

                {heroForm.bgImage && (
                  <div style={{ marginTop: '1rem', borderRadius: '8px', overflow: 'hidden', height: '140px', border: '1px solid #cbd5e1' }}>
                    <img src={heroForm.bgImage} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                )}
              </div>

              <div className="modal-footer">
                <button type="button" onClick={() => setHeroModalOpen(false)} className="btn-outline-white" style={{ color: 'var(--primary-navy)', borderColor: 'var(--border-subtle)' }}>
                  Cancel
                </button>
                <button type="submit" className="btn-primary-gold">
                  {editingHero ? 'Update Slide' : 'Publish Slide'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* HIGHLIGHT MODAL */}
      {highlightModalOpen && (
        <div className="modal-overlay" onClick={() => setHighlightModalOpen(false)}>
          <div className="modal-dialog" onClick={e => e.stopPropagation()} style={{ maxWidth: '600px' }}>
            <div className="modal-header">
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)' }}>
                {editingHighlight ? 'Edit Campus Highlight Photo' : 'Add Campus Highlight Photo'}
              </h3>
              <button onClick={() => setHighlightModalOpen(false)} style={{ fontSize: '1.5rem', color: 'var(--text-muted)', border: 'none', background: 'none', cursor: 'pointer' }}>&times;</button>
            </div>
            <form onSubmit={handleSaveHighlight}>
              <div className="modal-body">
                <div className="form-group">
                  <label>Select Highlight Category *</label>
                  <select
                    className="form-control"
                    value={highlightForm.category}
                    onChange={e => setHighlightForm({ ...highlightForm, category: e.target.value, badge: e.target.value })}
                  >
                    {HIGHLIGHT_CATEGORIES.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Title / Event Name *</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    value={highlightForm.title}
                    onChange={e => setHighlightForm({ ...highlightForm, title: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Event Description / Remarks *</label>
                  <textarea
                    rows="3"
                    required
                    className="form-control"
                    value={highlightForm.description}
                    onChange={e => setHighlightForm({ ...highlightForm, description: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Upload Highlight Photo *</label>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={e => handleFileChange(e, (dataUrl) => setHighlightForm({ ...highlightForm, photoUrl: dataUrl }))}
                  />
                </div>

                <div className="form-group">
                  <label>Or Paste Image URL</label>
                  <input
                    type="text"
                    placeholder="https://..."
                    className="form-control"
                    value={highlightForm.photoUrl}
                    onChange={e => setHighlightForm({ ...highlightForm, photoUrl: e.target.value })}
                  />
                </div>

                {highlightForm.photoUrl && (
                  <div style={{ marginTop: '0.75rem', borderRadius: '8px', overflow: 'hidden', height: '140px', border: '1px solid #cbd5e1' }}>
                    <img src={highlightForm.photoUrl} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                )}
              </div>

              <div className="modal-footer">
                <button type="button" onClick={() => setHighlightModalOpen(false)} className="btn-outline-white" style={{ color: 'var(--primary-navy)', borderColor: 'var(--border-subtle)' }}>
                  Cancel
                </button>
                <button type="submit" className="btn-primary-gold">
                  Save Highlight
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* GALLERY MODAL */}
      {galleryModalOpen && (
        <div className="modal-overlay" onClick={() => setGalleryModalOpen(false)}>
          <div className="modal-dialog" onClick={e => e.stopPropagation()} style={{ maxWidth: '600px' }}>
            <div className="modal-header">
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)' }}>
                Add New Photo to Public Gallery
              </h3>
              <button onClick={() => setGalleryModalOpen(false)} style={{ fontSize: '1.5rem', color: 'var(--text-muted)', border: 'none', background: 'none', cursor: 'pointer' }}>&times;</button>
            </div>
            <form onSubmit={handleSaveGallery}>
              <div className="modal-body">
                <div className="form-group">
                  <label>Photo Title *</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    value={galleryForm.title}
                    onChange={e => setGalleryForm({ ...galleryForm, title: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Category (e.g. Campus, Library, Labs, Sports, Cultural)</label>
                  <input
                    type="text"
                    className="form-control"
                    value={galleryForm.category}
                    onChange={e => setGalleryForm({ ...galleryForm, category: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Caption / Location Details</label>
                  <textarea
                    rows="2"
                    className="form-control"
                    value={galleryForm.caption}
                    onChange={e => setGalleryForm({ ...galleryForm, caption: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Upload Image File *</label>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control"
                    onChange={e => handleFileChange(e, (dataUrl) => setGalleryForm({ ...galleryForm, imageUrl: dataUrl }))}
                  />
                </div>

                <div className="form-group">
                  <label>Or Paste Image URL</label>
                  <input
                    type="text"
                    placeholder="https://..."
                    className="form-control"
                    value={galleryForm.imageUrl}
                    onChange={e => setGalleryForm({ ...galleryForm, imageUrl: e.target.value })}
                  />
                </div>

                {galleryForm.imageUrl && (
                  <div style={{ marginTop: '0.75rem', borderRadius: '8px', overflow: 'hidden', height: '140px', border: '1px solid #cbd5e1' }}>
                    <img src={galleryForm.imageUrl} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                )}
              </div>

              <div className="modal-footer">
                <button type="button" onClick={() => setGalleryModalOpen(false)} className="btn-outline-white" style={{ color: 'var(--primary-navy)', borderColor: 'var(--border-subtle)' }}>
                  Cancel
                </button>
                <button type="submit" className="btn-primary-gold">
                  Upload Photo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
