import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Calculator, Award, CheckCircle2, ArrowRight, ShieldAlert } from 'lucide-react';

export default function FeeCalculator({ onSelectScholarship }) {
  const { courses } = useApp();
  const [selectedCourseId, setSelectedCourseId] = useState(courses[0]?.id || 1);
  const [percentage, setPercentage] = useState(82);

  const selectedCourse = courses.find(c => c.id === Number(selectedCourseId)) || courses[0];

  // Calculate Scholarship Slab according to Institutional guidelines:
  // Tier 1: >= 85% -> 25% waiver
  // Tier 2: 75% - 84.9% -> 15% waiver
  // Tier 3: 65% - 74.9% -> 10% waiver
  // < 65% -> 0%
  let scholarshipPercent = 0;
  let slabTier = "none";
  let slabName = "Standard Tuition Fee";

  if (percentage >= 85) {
    scholarshipPercent = 25;
    slabTier = "tier1";
    slabName = "Tier 1: 25% Institutional Merit Scholarship";
  } else if (percentage >= 75) {
    scholarshipPercent = 15;
    slabTier = "tier2";
    slabName = "Tier 2: 15% Institutional Merit Scholarship";
  } else if (percentage >= 65) {
    scholarshipPercent = 10;
    slabTier = "tier3";
    slabName = "Tier 3: 10% Institutional Merit Scholarship";
  }

  const baseAnnualTuition = selectedCourse.annualFee;
  const discountAmount = Math.round((baseAnnualTuition * scholarshipPercent) / 100);
  const finalAnnualTuition = baseAnnualTuition - discountAmount;
  const finalSemesterFee = Math.round(finalAnnualTuition / 2);

  const handleApplyNow = () => {
    if (onSelectScholarship) {
      onSelectScholarship({
        courseId: selectedCourse.id,
        courseCode: selectedCourse.code,
        courseTitle: selectedCourse.title,
        twelfthPercentage: percentage,
        scholarshipTier: slabName,
        scholarshipPercent,
        calculatedFee: finalAnnualTuition
      });
    }
    const el = document.getElementById('admissions');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section section-bg-white" id="fee-calculator">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Transparent Academic Investment</span>
          <h2>Merit Fee & Scholarship Estimator</h2>
          <p>
            Recognizing academic talent. Check your eligible tuition fee concession under 
            merit schemes with zero hidden capitation charges.
          </p>
        </div>

        <div className="calc-wrapper">
          {/* Left: Interactive Controls */}
          <div className="calc-inputs-pane">
            <h3 style={{ fontSize: '1.35rem', marginBottom: '1.25rem', color: 'var(--primary-navy)' }}>
              Estimate Your Concession
            </h3>

            <div className="form-group">
              <label>Select Desired Academic Program</label>
              <select 
                className="form-control"
                value={selectedCourseId}
                onChange={e => setSelectedCourseId(e.target.value)}
              >
                {courses.map(c => (
                  <option key={c.id} value={c.id}>
                    {c.title} (Code: {c.collegeCode})
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group slider-group">
              <label>
                Your 10+2 Class XII Aggregate Percentage: <strong>{percentage}%</strong>
              </label>
              <input 
                type="range" 
                min="50" 
                max="99" 
                step="1"
                value={percentage} 
                onChange={e => setPercentage(Number(e.target.value))}
                className="percentage-range-slider"
              />
              <div className="slider-val-display">
                <span>50% Minimum</span>
                <span>75% (Tier 2)</span>
                <span>85%+ (Tier 1)</span>
              </div>
            </div>

            <div style={{ marginTop: '1.25rem' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)' }}>
                Applicable Concession Scheme:
              </div>
              <div className={`scholarship-slab-badge slab-${slabTier}`}>
                <Award size={18} />
                <span>{slabName} ({scholarshipPercent}% Concession)</span>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', background: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <strong>Slab Matrix:</strong>
              <ul style={{ paddingLeft: '1.2rem', marginTop: '0.4rem' }}>
                <li><strong>85% and above:</strong> 25% Tuition Fee Waiver</li>
                <li><strong>75% to 84.9%:</strong> 15% Tuition Fee Waiver</li>
                <li><strong>65% to 74.9%:</strong> 10% Tuition Fee Waiver</li>
              </ul>
            </div>
          </div>

          {/* Right: Transparent Fee Breakdown */}
          <div className="calc-results-pane">
            <div>
              <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--accent-gold-light)', fontWeight: '700', marginBottom: '0.5rem' }}>
                Net Payable Calculation
              </div>
              <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '1.25rem' }}>
                {selectedCourse.title.split('(')[0]}
              </h3>

              <table className="calc-breakdown-table">
                <tbody>
                  <tr>
                    <td>Standard Annual Tuition Fee</td>
                    <td style={{ textAlign: 'right', fontWeight: '700' }}>₹{baseAnnualTuition.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td>
                      Institutional Merit Waiver ({scholarshipPercent}%)
                    </td>
                    <td style={{ textAlign: 'right', fontWeight: '700', color: 'var(--accent-gold-light)' }}>
                      - ₹{discountAmount.toLocaleString()}
                    </td>
                  </tr>
                  <tr>
                    <td>Standard CCSU Exam & University Fees</td>
                    <td style={{ textAlign: 'right', fontWeight: '700' }}>₹{selectedCourse.examFee.toLocaleString()}</td>
                  </tr>
                  <tr className="total-row">
                    <td>Effective Net Annual Fee</td>
                    <td style={{ textAlign: 'right' }}>
                      ₹{(finalAnnualTuition + selectedCourse.examFee).toLocaleString()}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div style={{ background: 'rgba(255, 255, 255, 0.08)', padding: '0.85rem', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.88rem' }}>Payable in 2 Easy Semester Splits:</span>
                <span style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--accent-gold-light)' }}>
                  ₹{finalSemesterFee.toLocaleString()} / sem
                </span>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <button 
                onClick={handleApplyNow}
                className="btn-primary-gold"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Apply with this Scholarship Concession <ArrowRight size={18} />
              </button>
              <div style={{ textAlign: 'center', marginTop: '0.65rem', fontSize: '0.75rem', opacity: 0.8 }}>
                *Subject to marksheet verification during campus document scrutiny.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
