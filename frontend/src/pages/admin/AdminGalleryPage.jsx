import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Plus, Trash2, Image } from 'lucide-react';

export default function AdminGalleryPage() {
  const { gallery, addGalleryItem, deleteGalleryItem } = useApp();
  const [modalOpen, setModalOpen] = useState(false);

  const [form, setForm] = useState({
    title: "",
    category: "Campus",
    caption: "",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    isActive: true
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addGalleryItem(form);
    setModalOpen(false);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--primary-navy)' }}>
            Campus Life &amp; Infrastructure Media CMS
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Upload and manage photo assets for the public campus showcase.
          </p>
        </div>

        <button onClick={() => setModalOpen(true)} className="btn-primary-gold" style={{ fontSize: '0.85rem', padding: '0.55rem 1rem' }}>
          <Plus size={16} /> Add Campus Photo
        </button>
      </div>

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
                style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(239,68,68,0.9)', color: '#fff', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                title="Delete Photo"
              >
                <Trash2 size={15} />
              </button>
            </div>
            <div style={{ padding: '1rem' }}>
              <span className="code-tag" style={{ fontSize: '0.7rem' }}>{img.category}</span>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--primary-navy)', marginTop: '0.35rem' }}>{img.title}</h4>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{img.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-dialog" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)' }}>Add Campus Media Image</h3>
              <button onClick={() => setModalOpen(false)} style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>&times;</button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="form-group">
                  <label>Title *</label>
                  <input type="text" required className="form-control" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
                </div>
                <div className="form-group">
                  <label>Category *</label>
                  <select className="form-control" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })}>
                    <option value="Campus">Campus</option>
                    <option value="Library">Library</option>
                    <option value="Labs">Labs</option>
                    <option value="Sports">Sports</option>
                    <option value="Cultural">Cultural</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Image URL *</label>
                  <input type="text" required className="form-control" value={form.imageUrl} onChange={e => setForm({ ...form, imageUrl: e.target.value })} />
                </div>
                <div className="form-group">
                  <label>Caption / Notes</label>
                  <input type="text" className="form-control" value={form.caption} onChange={e => setForm({ ...form, caption: e.target.value })} />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" onClick={() => setModalOpen(false)} className="btn-outline-white" style={{ color: 'var(--primary-navy)', borderColor: 'var(--border-subtle)', fontSize: '0.85rem' }}>Cancel</button>
                <button type="submit" className="btn-primary-gold" style={{ fontSize: '0.85rem' }}>Save Image</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
