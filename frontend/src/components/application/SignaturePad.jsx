import React, { useRef, useState, useEffect } from 'react';
import { PenTool, RotateCcw, Upload, Check, AlertCircle } from 'lucide-react';

/**
 * SignaturePad component supporting:
 * 1. Smooth freehand drawing on HTML5 Canvas (touch + stylus + mouse).
 * 2. Upload of signature image file (JPG/PNG).
 * 3. Clearing and previewing the signature.
 */
export default function SignaturePad({ value, onChange, label = 'Candidate Signature' }) {
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);
  const [mode, setMode] = useState('draw'); // 'draw' | 'upload'

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#062a36';
  }, [mode]);

  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: (clientX - rect.left) * (canvas.width / rect.width),
      y: (clientY - rect.top) * (canvas.height / rect.height)
    };
  };

  const startDrawing = (e) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const { x, y } = getCoordinates(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
    setHasDrawn(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const { x, y } = getCoordinates(e);
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = (e) => {
    if (!isDrawing) return;
    e.preventDefault();
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    if (onChange) {
      onChange(dataUrl);
    }
  };

  const handleClear = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    setHasDrawn(false);
    if (onChange) {
      onChange('');
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file (PNG/JPG).');
      return;
    }

    if (file.size > 500 * 1024) {
      alert('Signature image file size must be less than 500 KB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result;
      if (typeof dataUrl === 'string' && onChange) {
        onChange(dataUrl);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div style={{
      border: '1.5px solid var(--border-subtle, #d8cebf)',
      borderRadius: 'var(--radius-md, 10px)',
      background: '#ffffff',
      padding: '1rem',
      maxWidth: '460px',
      width: '100%'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '0.65rem',
        flexWrap: 'wrap',
        gap: '0.5rem'
      }}>
        <label style={{
          fontSize: '0.9rem',
          fontWeight: 800,
          color: 'var(--primary-navy-dark, #062a36)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem'
        }}>
          <PenTool size={16} color="var(--primary-navy, #0d5c75)" />
          {label} <span style={{ color: 'var(--danger-red, #ef4444)' }}>*</span>
        </label>

        {/* Mode Toggle */}
        <div style={{ display: 'inline-flex', background: '#f1f5f9', borderRadius: '6px', padding: '2px' }}>
          <button
            type="button"
            onClick={() => setMode('draw')}
            style={{
              padding: '0.25rem 0.65rem',
              fontSize: '0.78rem',
              fontWeight: 700,
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              background: mode === 'draw' ? '#ffffff' : 'transparent',
              color: mode === 'draw' ? 'var(--primary-navy, #0d5c75)' : '#64748b',
              boxShadow: mode === 'draw' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
            }}
          >
            Draw
          </button>
          <button
            type="button"
            onClick={() => setMode('upload')}
            style={{
              padding: '0.25rem 0.65rem',
              fontSize: '0.78rem',
              fontWeight: 700,
              borderRadius: '4px',
              border: 'none',
              cursor: 'pointer',
              background: mode === 'upload' ? '#ffffff' : 'transparent',
              color: mode === 'upload' ? 'var(--primary-navy, #0d5c75)' : '#64748b',
              boxShadow: mode === 'upload' ? '0 1px 3px rgba(0,0,0,0.1)' : 'none'
            }}
          >
            Upload
          </button>
        </div>
      </div>

      {mode === 'draw' ? (
        <div>
          <div style={{
            position: 'relative',
            border: '1.5px dashed #94a3b8',
            borderRadius: '8px',
            background: '#fafafa',
            touchAction: 'none'
          }}>
            <canvas
              ref={canvasRef}
              width={420}
              height={140}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
              style={{
                width: '100%',
                height: '140px',
                display: 'block',
                cursor: 'crosshair',
                borderRadius: '8px'
              }}
            />
            {!hasDrawn && !value && (
              <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#94a3b8',
                fontSize: '0.82rem',
                fontStyle: 'italic',
                pointerEvents: 'none'
              }}>
                Sign inside this box using finger, stylus, or mouse
              </div>
            )}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
            <span style={{ fontSize: '0.75rem', color: '#64748b' }}>
              {value ? '✓ Signature captured' : 'Draw your formal signature'}
            </span>
            <button
              type="button"
              onClick={handleClear}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#64748b',
                background: '#f8fafc',
                border: '1px solid #cbd5e1',
                padding: '0.3rem 0.65rem',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              <RotateCcw size={12} /> Clear
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div style={{
            border: '1.5px dashed #94a3b8',
            borderRadius: '8px',
            padding: '1.25rem',
            textAlign: 'center',
            background: '#fafafa'
          }}>
            {value ? (
              <div>
                <img
                  src={value}
                  alt="Candidate Signature Preview"
                  style={{ maxHeight: '80px', maxWidth: '100%', objectFit: 'contain', marginBottom: '0.5rem' }}
                />
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: 'var(--primary-navy, #0d5c75)',
                      background: '#e0f2fe',
                      border: '1px solid #bae6fd',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '6px',
                      cursor: 'pointer'
                    }}
                  >
                    Replace Image
                  </button>
                  <button
                    type="button"
                    onClick={handleClear}
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: 'var(--danger-red, #ef4444)',
                      background: '#fee2e2',
                      border: '1px solid #fecaca',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '6px',
                      cursor: 'pointer'
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <Upload size={28} color="#64748b" style={{ margin: '0 auto 0.5rem' }} />
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.25rem' }}>
                  Upload scanned signature
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.75rem' }}>
                  JPG or PNG, max 500 KB (black/dark ink on white background)
                </div>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  style={{
                    background: 'var(--primary-navy, #0d5c75)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '0.45rem 1rem',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  Browse Signature File
                </button>
              </div>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              style={{ display: 'none' }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
