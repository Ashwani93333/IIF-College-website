import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, ArrowRight, CheckCircle2, Sparkles, Plane } from 'lucide-react';

export default function FeeCalculator({ onSelectScholarship }) {
  const navigate = useNavigate();

  // Official Institutional Course Structure & Fee Data
  const programData = [
    {
      id: 1,
      short: 'BBA',
      title: 'Bachelor of Business Administration (BBA)',
      dept: 'MANAGEMENT',
      deptBg: '#e0f2fe',
      deptColor: '#0369a1',
      duration: '3 Years Full Time Regular Program • 6 Semesters',
      category: 'Direct Admission / Sponsored Category',
      annualFee: 80000,
      perSemester: 40000,
      tourTitle: 'BBA++ (With Domestic Tour)',
      tourNote: '1st Year & 3rd Year Additional Fee will be ₹ 50,000/-'
    },
    {
      id: 2,
      short: 'B.Com',
      title: 'Bachelor of Commerce (B.Com)',
      dept: 'COMMERCE',
      deptBg: '#fef3c7',
      deptColor: '#92400e',
      duration: '3 Years Full Time Regular Program • 6 Semesters',
      category: 'Direct Admission / Sponsored Category',
      annualFee: 50000,
      perSemester: 25000,
      tourTitle: 'BCom++ (With Domestic Tour)',
      tourNote: '1st Year & 3rd Year Additional Fee will be ₹ 30,000/-'
    },
    {
      id: 3,
      short: 'B.A.',
      title: 'Bachelor of Arts (B.A.)',
      dept: 'HUMANITIES',
      deptBg: '#f3e8ff',
      deptColor: '#7e22ce',
      duration: '3 Years Full Time Regular Program • 6 Semesters',
      category: 'Direct Admission / Regular Category',
      annualFee: 35000,
      perSemester: 17500,
      tourTitle: null,
      tourNote: null
    }
  ];

  const [selectedCourseId, setSelectedCourseId] = useState(1);
  const [percentage, setPercentage] = useState(82);

  const selectedProg = programData.find(p => p.id === Number(selectedCourseId)) || programData[0];

  // Dynamic Scholarship & Fee Concession Calculation as per Official Slab Matrix:
  // 80% and above -> 25% Tuition Fee Waiver (Topper / High Merit)
  // 70% to 79.9% -> 15% Tuition Fee Waiver
  // 60% to 69.9% -> 10% Tuition Fee Waiver
  // Below 60% -> 0% Waiver (Standard Tuition)
  let scholarshipPercent = 0;
  let slabTier = "none";
  let slabName = "Standard Tuition Fee (No Waiver)";

  if (percentage >= 80) {
    scholarshipPercent = 25;
    slabTier = "tier1";
    slabName = "Topper / Distinction Concession (25% Waiver)";
  } else if (percentage >= 70) {
    scholarshipPercent = 15;
    slabTier = "tier2";
    slabName = "Academic Merit Concession (15% Waiver)";
  } else if (percentage >= 60) {
    scholarshipPercent = 10;
    slabTier = "tier3";
    slabName = "Merit / Means Concession (10% Waiver)";
  }

  const baseAnnualTuition = selectedProg.annualFee;
  const discountAmount = Math.round((baseAnnualTuition * scholarshipPercent) / 100);
  const finalAnnualTuition = baseAnnualTuition - discountAmount;
  const finalSemesterFee = Math.round(finalAnnualTuition / 2);

  const handleApplyNow = () => {
    if (onSelectScholarship) {
      onSelectScholarship({
        courseId: selectedProg.id,
        courseCode: selectedProg.short,
        courseTitle: selectedProg.title,
        twelfthPercentage: percentage,
        scholarshipTier: slabName,
        scholarshipPercent,
        calculatedFee: finalAnnualTuition
      });
    }
    navigate('/application-form');
  };

  return (
    <div className="calc-wrapper" style={{ marginTop: '2.5rem', border: '2px solid #cbd5e1', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>
      {/* Left: Interactive Controls */}
      <div className="calc-inputs-pane" style={{ padding: '2.25rem', background: '#ffffff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
          <Sparkles size={24} style={{ color: '#c59b27' }} />
          <h3 style={{ fontSize: '1.45rem', margin: 0, color: '#000000', fontWeight: 900 }}>
            Estimate Your Concession
          </h3>
        </div>

        {/* Course Selector */}
        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
          <label style={{ fontSize: '1.05rem', fontWeight: 800, color: '#000000', marginBottom: '0.5rem' }}>
            Select Desired Academic Program:
          </label>
          <select 
            className="form-control"
            value={selectedCourseId}
            onChange={e => setSelectedCourseId(e.target.value)}
            style={{ fontSize: '1.05rem', fontWeight: 800, color: '#000000', padding: '0.85rem 1rem', border: '2px solid #94a3b8', borderRadius: '6px', background: '#f8fafc' }}
          >
            {programData.map(p => (
              <option key={p.id} value={p.id}>
                {p.title}
              </option>
            ))}
          </select>
        </div>

        {/* Selected Course Quick Meta Card */}
        <div style={{ background: '#f8fafc', border: '1.5px solid #cbd5e1', borderLeft: `5px solid #062a36`, borderRadius: '6px', padding: '1rem 1.25rem', marginBottom: '1.75rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
            <span style={{ background: selectedProg.deptBg, color: selectedProg.deptColor, fontSize: '0.78rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
              {selectedProg.dept}
            </span>
            <span style={{ background: '#f0fdf4', color: '#166534', fontSize: '0.78rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: '4px' }}>
              DIRECT ADMISSION
            </span>
          </div>
          <h4 style={{ margin: '0 0 0.25rem', fontSize: '1.15rem', fontWeight: 900, color: '#000000' }}>
            {selectedProg.title}
          </h4>
          <p style={{ margin: '0 0 0.5rem', fontSize: '0.92rem', color: '#475569', fontWeight: 700 }}>
            {selectedProg.duration}
          </p>
          <div style={{ fontSize: '0.96rem', color: '#000000', fontWeight: 800 }}>
            Standard Fee: <strong>₹ {selectedProg.annualFee.toLocaleString()}/- per year</strong> (Payable as ₹ {selectedProg.perSemester.toLocaleString()} per semester)
          </div>

          {selectedProg.tourNote && (
            <div style={{ marginTop: '0.65rem', paddingTop: '0.65rem', borderTop: '1px dashed #cbd5e1', fontSize: '0.88rem', color: '#854d0e', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <Plane size={16} />
              <span>{selectedProg.tourNote}</span>
            </div>
          )}
        </div>

        {/* Percentage Slider */}
        <div className="form-group slider-group" style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
            <label style={{ fontSize: '1.08rem', fontWeight: 800, color: '#000000', margin: 0 }}>
              Your 10+2 Aggregate Percentage:
            </label>
            <span style={{ background: '#062a36', color: '#ffffff', fontSize: '1.15rem', fontWeight: 900, padding: '0.3rem 0.85rem', borderRadius: '6px' }}>
              {percentage}%
            </span>
          </div>

          <input 
            type="range" 
            min="50" 
            max="99" 
            step="1"
            value={percentage} 
            onChange={e => setPercentage(Number(e.target.value))}
            className="percentage-range-slider"
            style={{ width: '100%', height: '8px', cursor: 'pointer', accentColor: '#c59b27' }}
          />
          <div className="slider-val-display" style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', color: '#000000', fontWeight: 800, marginTop: '0.45rem' }}>
            <span>50% (Eligibility)</span>
            <span>60% (10% Waiver)</span>
            <span>70% (15% Waiver)</span>
            <span>80%+ (25% Waiver)</span>
          </div>
        </div>

        {/* Concession Badge */}
        <div>
          <div style={{ fontSize: '0.92rem', fontWeight: 800, color: '#000000', marginBottom: '0.45rem' }}>
            Eligible Scholarship Concession:
          </div>
          <div className={`scholarship-slab-badge slab-${slabTier}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.75rem 1.25rem', borderRadius: '6px', fontSize: '1.02rem', fontWeight: 900 }}>
            <Award size={20} />
            <span>{slabName} ({scholarshipPercent}% Concession)</span>
          </div>
        </div>
      </div>

      {/* Right: Transparent Fee Breakdown */}
      <div className="calc-results-pane" style={{ padding: '2.25rem', background: 'linear-gradient(135deg, #062a36 0%, #031820 100%)', color: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: '0.88rem', textTransform: 'uppercase', letterSpacing: '1.2px', color: '#fbbf24', fontWeight: 900, marginBottom: '0.5rem' }}>
            Net Payable Calculation
          </div>
          <h3 style={{ fontSize: '1.65rem', color: '#ffffff', fontWeight: 900, margin: '0 0 0.5rem' }}>
            {selectedProg.title}
          </h3>
          <div style={{ margin: '0 0 1.35rem' }}>
            <span style={{ 
              background: 'rgba(244, 182, 56, 0.18)', 
              color: '#f4b638', 
              border: '1.5px solid #f4b638', 
              padding: '0.3rem 0.75rem', 
              borderRadius: '4px', 
              fontSize: '0.9rem', 
              fontWeight: 800,
              display: 'inline-block'
            }}>
              {selectedProg.category}
            </span>
          </div>

          <table className="calc-breakdown-table" style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1.5rem' }}>
            <tbody>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.15)' }}>
                <td style={{ padding: '0.85rem 0', fontSize: '1.05rem', color: '#f8fafc', fontWeight: 700 }}>Standard Yearly Tuition Fee</td>
                <td style={{ textAlign: 'right', fontWeight: 900, fontSize: '1.15rem', color: '#ffffff' }}>
                  ₹ {baseAnnualTuition.toLocaleString()}/-
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.15)' }}>
                <td style={{ padding: '0.85rem 0', fontSize: '1.05rem', color: '#fde047', fontWeight: 800 }}>
                  Institutional Concession ({scholarshipPercent}%)
                </td>
                <td style={{ textAlign: 'right', fontWeight: 900, fontSize: '1.15rem', color: '#fde047' }}>
                  - ₹ {discountAmount.toLocaleString()}/-
                </td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.15)' }}>
                <td style={{ padding: '0.85rem 0', fontSize: '0.92rem', color: '#cbd5e1', fontWeight: 600 }}>University Exam &amp; Viva-Voce Fee</td>
                <td style={{ textAlign: 'right', fontWeight: 700, fontSize: '0.85rem', color: '#cbd5e1' }}>Charged by CCSU Directly</td>
              </tr>
              <tr className="total-row" style={{ borderBottom: 'none' }}>
                <td style={{ padding: '1.15rem 0 0', fontSize: '1.25rem', fontWeight: 900, color: '#fbbf24' }}>
                  Effective Net Annual Tuition
                </td>
                <td style={{ textAlign: 'right', padding: '1.15rem 0 0', fontSize: '1.75rem', fontWeight: 900, color: '#fbbf24' }}>
                  ₹ {finalAnnualTuition.toLocaleString()}/-
                </td>
              </tr>
            </tbody>
          </table>

          {/* Semester Split Box */}
          <div style={{ background: 'rgba(255, 255, 255, 0.09)', border: '1px solid rgba(255, 255, 255, 0.18)', padding: '1rem 1.25rem', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.95rem', color: '#f8fafc', fontWeight: 700 }}>Payable in 2 Easy Semester Splits:</span>
            <span style={{ fontSize: '1.35rem', fontWeight: 900, color: '#fbbf24' }}>
              ₹ {finalSemesterFee.toLocaleString()}<span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#cbd5e1' }}> / sem</span>
            </span>
          </div>

          {/* Tour Option Note */}
          {selectedProg.tourNote && (
            <div style={{ background: 'rgba(245, 182, 56, 0.15)', border: '1px solid rgba(245, 182, 56, 0.35)', padding: '0.75rem 1rem', borderRadius: '6px', fontSize: '0.88rem', color: '#fde047', fontWeight: 700 }}>
              <strong>{selectedProg.tourTitle}:</strong> {selectedProg.tourNote}
            </div>
          )}
        </div>

        <div style={{ marginTop: '1.75rem' }}>
          <button 
            onClick={handleApplyNow}
            className="btn-primary-gold"
            style={{ width: '100%', justifyContent: 'center', fontWeight: 900, padding: '0.9rem', fontSize: '1.02rem', boxShadow: '0 4px 14px rgba(212, 175, 55, 0.35)' }}
          >
            Apply with this Scholarship Concession <ArrowRight size={18} />
          </button>
          <div style={{ textAlign: 'center', marginTop: '0.65rem', fontSize: '0.8rem', color: '#cbd5e1', opacity: 0.9 }}>
            *Subject to marksheet verification during campus document scrutiny.
          </div>
        </div>
      </div>
    </div>
  );
}
