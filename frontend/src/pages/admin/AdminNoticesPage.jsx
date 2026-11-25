import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Plus, Pin, Trash2, Edit3, FileText } from 'lucide-react';

export default function AdminNoticesPage() {
  const { notices, addNotice, updateNotice, deleteNotice, toggleNoticePin } = useApp();

  const [modalOpen, setModalOpen] = useState(false);
  const [editingNotice, setEditingNotice] = useState(null);

  const [form, setForm] = useState({
    title: "",
    category: "Examination",
    publishDate: new Date().toISOString().split('T')[0],
    content: "",
    attachmentUrl: "",
    attachmentLabel: "Official Circular PDF",
    isPinned: false
  });

  const handleOpenAdd = () => {
    setEditingNotice(null);
    setForm({
      title: "",
      category: "Examination",
      publishDate: new Date().toISOString().split('T')[0],
      content: "",
      attachmentUrl: "",
      attachmentLabel: "Official Circular PDF",
      isPinned: false
    });
    setModalOpen(true);
  };

  const handleOpenEdit = (notice) => {
    setEditingNotice(notice);
    setForm({
      title: notice.title,
      category: notice.category,
      publishDate: notice.publishDate,
      content: notice.content,
      attachmentUrl: notice.attachmentUrl || "",
      attachmentLabel: notice.attachmentLabel || "Attachment",
      isPinned: notice.isPinned
    });
    setModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingNotice) {
      updateNotice(editingNotice.id, form);
    } else {
      addNotice(form);
    }
    setModalOpen(false);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--primary-navy)' }}>
            Official Circulars &amp; Notice Board CMS
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Publish examination routines, university notifications, and administrative circulars. Changes reflect immediately on the public website.
          </p>
        </div>

        <button onClick={handleOpenAdd} className="btn-primary-gold" style={{ fontSize: '0.85rem', padding: '0.55rem 1rem' }}>
          <Plus size={16} /> Publish New Notice
        </button>
      </div>

      <div className="data-card">
        <div className="data-table-wrapper">
          <table className="admin-data-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Category</th>
                <th>Title &amp; Excerpt</th>
                <th>Priority (Pinned)</th>
                <th>Manage</th>
              </tr>
            </thead>
            <tbody>
              {notices.map(notice => (
                <tr key={notice.id}>
                  <td style={{ whiteSpace: 'nowrap', fontWeight: '600' }}>
                    {notice.publishDate}
                  </td>
                  <td>
                    <span style={{ background: '#f1f5f9', padding: '0.2rem 0.5rem', borderRadius: 'var(--radius-sm)', fontSize: '0.78rem', fontWeight: '700' }}>
                      {notice.category}
                    </span>
                  </td>
                  <td>
                    <div style={{ fontWeight: '700', color: 'var(--primary-navy)', marginBottom: '0.2rem' }}>
                      {notice.title}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', maxWidth: '500px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {notice.content}
                    </div>
                  </td>
                  <td>
                    <button
                      onClick={() => toggleNoticePin(notice.id)}
                      style={{
                        padding: '0.2rem 0.6rem',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        background: notice.isPinned ? '#fee2e2' : '#f1f5f9',
                        color: notice.isPinned ? '#b91c1c' : 'var(--text-muted)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.25rem'
                      }}
                    >
                      <Pin size={12} /> {notice.isPinned ? "Pinned" : "Standard"}
                    </button>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button
                        onClick={() => handleOpenEdit(notice)}
                        style={{ color: 'var(--primary-navy)', padding: '0.3rem', borderRadius: 'var(--radius-sm)', background: '#f1f5f9' }}
                        title="Edit Notice"
                      >
                        <Edit3 size={15} />
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm(`Delete notice: "${notice.title}"?`)) {
                            deleteNotice(notice.id);
                          }
                        }}
                        style={{ color: '#dc2626', padding: '0.3rem', borderRadius: 'var(--radius-sm)', background: '#fee2e2' }}
                        title="Delete Notice"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Notice Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-dialog" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-navy)' }}>
                {editingNotice ? "Edit Notice Circular" : "Publish New Official Notice"}
              </h3>
              <button onClick={() => setModalOpen(false)} style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>
                &times;
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <div className="form-group">
                  <label>Notice Title / Subject *</label>
                  <input 
                    type="text" 
                    required 
                    className="form-control"
                    placeholder="e.g. CCSU Odd Semester Examination Schedule"
                    value={form.title}
                    onChange={e => setForm({ ...form, title: e.target.value })}
                  />
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Notice Category *</label>
                    <select 
                      className="form-control"
                      value={form.category}
                      onChange={e => setForm({ ...form, category: e.target.value })}
                    >
                      <option value="Examination">Examination</option>
                      <option value="Admission">Admission</option>
                      <option value="Academic">Academic</option>
                      <option value="General">General</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Publish Date *</label>
                    <input 
                      type="date" 
                      required 
                      className="form-control"
                      value={form.publishDate}
                      onChange={e => setForm({ ...form, publishDate: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Circular Content / Official Instructions *</label>
                  <textarea 
                    rows="4" 
                    required 
                    className="form-control"
                    placeholder="Enter the official details of the notice..."
                    value={form.content}
                    onChange={e => setForm({ ...form, content: e.target.value })}
                  />
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Attachment Link / PDF URL (optional)</label>
                    <input 
                      type="text" 
                      className="form-control"
                      placeholder="https://... or #admissions"
                      value={form.attachmentUrl}
                      onChange={e => setForm({ ...form, attachmentUrl: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label>Attachment Button Label</label>
                    <input 
                      type="text" 
                      className="form-control"
                      placeholder="e.g. Official Circular PDF"
                      value={form.attachmentLabel}
                      onChange={e => setForm({ ...form, attachmentLabel: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '0.5rem' }}>
                  <input 
                    type="checkbox" 
                    id="isPinned" 
                    checked={form.isPinned}
                    onChange={e => setForm({ ...form, isPinned: e.target.checked })}
                    style={{ width: '18px', height: '18px', accentColor: 'var(--primary-navy)' }}
                  />
                  <label htmlFor="isPinned" style={{ fontSize: '0.88rem', fontWeight: '700', color: 'var(--primary-navy)' }}>
                    Pin this notice as high-priority alert (flashing badge on home board)
                  </label>
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" onClick={() => setModalOpen(false)} className="btn-outline-white" style={{ color: 'var(--primary-navy)', borderColor: 'var(--border-subtle)', fontSize: '0.85rem' }}>
                  Cancel
                </button>
                <button type="submit" className="btn-primary-gold" style={{ fontSize: '0.85rem' }}>
                  {editingNotice ? "Save Updates" : "Publish to Board"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
