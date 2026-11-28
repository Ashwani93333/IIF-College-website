import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  UserCheck, CheckCircle, FileText, ArrowRight, ArrowLeft, 
  Printer, Download, ShieldCheck, QrCode, Sparkles 
} from 'lucide-react';

export default function AdmissionsSection({ prefillData }) {
  const { courses, submitApplication } = useApp();

  const [step, setStep] = useState(1);
  const [submittedApp, setSubmittedApp] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    courseId: courses[0]?.id || 1,
    fullName: "",
    gender: "Male",
    dob: "2007-01-01",
    category: "General",
    email: "",
    phone: "",
    parentName: "",
    parentPhone: "",
    address: "",
    city: "Greater Noida",
    state: "Uttar Pradesh",
    pincode: "201310",
    tenthPercentage: 80,
    twelfthBoard: "CBSE",
    twelfthPercentage: 80,
    twelfthStream: "Commerce",
    scholarshipTier: "Standard",
    scholarshipPercent: 0,
    calculatedFee: 80000
  });

  // Handle pre-fill from fee calculator or course card
  useEffect(() => {
    if (prefillData) {
      setFormData(prev => ({
        ...prev,
        courseId: prefillData.courseId || prev.courseId,
        twelfthPercentage: prefillData.twelfthPercentage !== undefined ? prefillData.twelfthPercentage : prev.twelfthPercentage,
        scholarshipTier: prefillData.scholarshipTier || prev.scholarshipTier,
        scholarshipPercent: prefillData.scholarshipPercent !== undefined ? prefillData.scholarshipPercent : prev.scholarshipPercent,
        calculatedFee: prefillData.calculatedFee || prev.calculatedFee
      }));
    }
  }, [prefillData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const selectedCourse = courses.find(c => c.id === Number(formData.courseId)) || courses[0];

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step === 1) {
      if (!formData.fullName || !formData.email || !formData.phone) {
        alert("Please provide candidate full name, email, and active WhatsApp phone number.");
        return;
      }
    }
    if (step === 2) {
      if (!formData.twelfthPercentage || formData.twelfthPercentage < 33) {
        alert("Please enter a valid Class 12th board percentage.");
        return;
      }
    }
    setStep(prev => prev + 1);
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    const finalCourse = courses.find(c => c.id === Number(formData.courseId)) || courses[0];
    const payload = {
      ...formData,
      courseCode: finalCourse.code,
      courseTitle: finalCourse.title
    };
    const createdApp = submitApplication(payload);
    setSubmittedApp(createdApp);
    setStep(4);
  };

  const handlePrintSlip = () => {
    window.print();
  };

  return (
    <section className="section" id="admissions" style={{ background: '#eaffef' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Admissions Desk</span>
          <h2>Digital Provisional Application Form</h2>
          <p>
            Complete your online enrollment in 3 quick steps to receive an instant Provisional Registration Slip with unique Application ID.
          </p>
        </div>

        <div className="admission-desk-card">
          {/* Step Indicator */}
          <div className="step-indicator-bar">
            <div className={`step-item ${step === 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
              <span className="step-number">1</span>
              <span>Candidate Details</span>
            </div>
            <div className={`step-item ${step === 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
              <span className="step-number">2</span>
              <span>Academic Scores</span>
            </div>
            <div className={`step-item ${step === 3 ? 'active' : ''} ${step > 3 ? 'completed' : ''}`}>
              <span className="step-number">3</span>
              <span>Program & Verification</span>
            </div>
            <div className={`step-item ${step === 4 ? 'active completed' : ''}`}>
              <span className="step-number">4</span>
              <span>Provisional Slip</span>
            </div>
          </div>

          <div className="admission-form-content">
            {/* Step 1: Personal Details */}
            {step === 1 && (
              <form onSubmit={handleNextStep}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', color: 'var(--primary-navy)' }}>
                  Step 1: Candidate Personal & Contact Information
                </h3>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Full Legal Name (as per 10th marksheet) *</label>
                    <input 
                      type="text" 
                      name="fullName" 
                      required 
                      className="form-control"
                      placeholder="e.g. Aarav Sharma"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Gender *</label>
                    <select name="gender" className="form-control" value={formData.gender} onChange={handleChange}>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-grid-3">
                  <div className="form-group">
                    <label>Date of Birth *</label>
                    <input 
                      type="date" 
                      name="dob" 
                      required 
                      className="form-control"
                      value={formData.dob}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Social Category *</label>
                    <select name="category" className="form-control" value={formData.category} onChange={handleChange}>
                      <option value="General">General</option>
                      <option value="OBC">OBC</option>
                      <option value="SC">SC</option>
                      <option value="ST">ST</option>
                      <option value="EWS">EWS</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Candidate Mobile / WhatsApp *</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required 
                      className="form-control"
                      placeholder="10-digit number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Candidate Email Address *</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      className="form-control"
                      placeholder="candidate@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Father / Guardian Name *</label>
                    <input 
                      type="text" 
                      name="parentName" 
                      required 
                      className="form-control"
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.parentName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Full Residential Address *</label>
                  <textarea 
                    name="address" 
                    rows="2" 
                    required 
                    className="form-control"
                    placeholder="House/Street, Sector, Locality"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-grid-3">
                  <div className="form-group">
                    <label>City *</label>
                    <input type="text" name="city" required className="form-control" value={formData.city} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>State *</label>
                    <input type="text" name="state" required className="form-control" value={formData.state} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Pincode *</label>
                    <input type="text" name="pincode" required className="form-control" value={formData.pincode} onChange={handleChange} />
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
                  <button type="submit" className="btn-primary-gold">
                    Next: Academic Qualifications <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            )}

            {/* Step 2: Academic Qualifications */}
            {step === 2 && (
              <form onSubmit={handleNextStep}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', color: 'var(--primary-navy)' }}>
                  Step 2: Previous Board Qualifications & Marks
                </h3>

                <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', border: '1px solid var(--border-light)' }}>
                  <h4 style={{ fontSize: '1rem', color: 'var(--primary-navy)', marginBottom: '0.85rem' }}>
                    Class 12th Senior Secondary Details
                  </h4>
                  <div className="form-grid-3">
                    <div className="form-group">
                      <label>12th Board / Council *</label>
                      <select name="twelfthBoard" className="form-control" value={formData.twelfthBoard} onChange={handleChange}>
                        <option value="CBSE">CBSE (Central Board)</option>
                        <option value="ICSE">CISCE / ISC</option>
                        <option value="UP Board">UP State Board</option>
                        <option value="Other Board">Other State / Recognized Board</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>12th Stream *</label>
                      <select name="twelfthStream" className="form-control" value={formData.twelfthStream} onChange={handleChange}>
                        <option value="Commerce">Commerce with Mathematics</option>
                        <option value="Commerce without Maths">Commerce without Maths</option>
                        <option value="Science PCM">Science (PCM)</option>
                        <option value="Science PCB">Science (PCB)</option>
                        <option value="Humanities / Arts">Humanities / Arts</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Aggregate Percentage (%) *</label>
                      <input 
                        type="number" 
                        name="twelfthPercentage" 
                        step="0.1" 
                        min="33" 
                        max="100" 
                        required 
                        className="form-control"
                        value={formData.twelfthPercentage}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', border: '1px solid var(--border-light)' }}>
                  <h4 style={{ fontSize: '1rem', color: 'var(--primary-navy)', marginBottom: '0.85rem' }}>
                    Class 10th High School Details
                  </h4>
                  <div className="form-grid-2">
                    <div className="form-group">
                      <label>10th Aggregate Percentage (%) *</label>
                      <input 
                        type="number" 
                        name="tenthPercentage" 
                        step="0.1" 
                        min="33" 
                        max="100" 
                        required 
                        className="form-control"
                        value={formData.tenthPercentage}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>10th School / Institution Name</label>
                      <input 
                        type="text" 
                        name="tenthSchool" 
                        className="form-control" 
                        placeholder="e.g. Modern School" 
                      />
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
                  <button type="button" onClick={() => setStep(1)} className="btn-outline-white" style={{ color: 'var(--primary-navy)', borderColor: 'var(--border-subtle)' }}>
                    <ArrowLeft size={16} /> Back
                  </button>
                  <button type="submit" className="btn-primary-gold">
                    Next: Program Confirmation <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            )}

            {/* Step 3: Program & Verification */}
            {step === 3 && (
              <form onSubmit={handleFinalSubmit}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', color: 'var(--primary-navy)' }}>
                  Step 3: Program Selection & Submission
                </h3>

                <div className="form-group">
                  <label>Selected Program</label>
                  <select 
                    name="courseId" 
                    className="form-control" 
                    value={formData.courseId} 
                    onChange={handleChange}
                  >
                    {courses.map(c => (
                      <option key={c.id} value={c.id}>
                        {c.title} (College Code: {c.collegeCode}) — ₹{c.annualFee.toLocaleString()}/yr
                      </option>
                    ))}
                  </select>
                </div>

                <div style={{ background: '#f1f5f9', padding: '1.25rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '1rem', color: 'var(--primary-navy)', marginBottom: '0.5rem' }}>
                    Application Summary
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-dark)' }}>
                    <strong>Applicant:</strong> {formData.fullName} ({formData.gender})<br />
                    <strong>12th Score:</strong> {formData.twelfthPercentage}% ({formData.twelfthBoard})<br />
                    <strong>Program:</strong> {selectedCourse.title}<br />
                    <strong>Parent Contact:</strong> {formData.parentName} ({formData.phone})
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <input type="checkbox" id="consent" required style={{ width: '18px', height: '18px', accentColor: 'var(--primary-navy)' }} />
                  <label htmlFor="consent" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    I solemnly declare that the information provided above is true and authentic to the best of my knowledge. I agree to present original marksheets during campus physical document verification.
                  </label>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
                  <button type="button" onClick={() => setStep(2)} className="btn-outline-white" style={{ color: 'var(--primary-navy)', borderColor: 'var(--border-subtle)' }}>
                    <ArrowLeft size={16} /> Back
                  </button>
                  <button type="submit" className="btn-primary-gold">
                    Submit & Generate Registration Slip <ShieldCheck size={18} />
                  </button>
                </div>
              </form>
            )}

            {/* Step 4: Instant Provisional Slip */}
            {step === 4 && submittedApp && (
              <div>
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#dcfce7', color: '#166534', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                    <CheckCircle size={36} />
                  </div>
                  <h3 style={{ fontSize: '1.6rem', color: 'var(--primary-navy)' }}>
                    Provisional Admission Application Registered!
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                    Your application has been received by the Secretariat. Download or print this voucher for campus verification.
                  </p>
                </div>

                {/* Printable Slip Component */}
                <div className="provisional-slip-container" id="printable-voucher">
                  <div className="slip-header">
                    <h3>IIF COLLEGE OF COMMERCE AND MANAGEMENT STUDIES</h3>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      Affiliated to CCS University, Meerut (NAAC A++) | Knowledge Park III, Greater Noida
                    </div>
                    <div className="slip-id-banner">
                      APPLICATION ID: {submittedApp.applicationId}
                    </div>
                  </div>

                  <div className="slip-details-grid">
                    <div className="slip-detail-cell">
                      <div className="label">Candidate Name</div>
                      <div className="value">{submittedApp.fullName}</div>
                    </div>
                    <div className="slip-detail-cell">
                      <div className="label">Applied Program</div>
                      <div className="value">{submittedApp.courseTitle}</div>
                    </div>
                    <div className="slip-detail-cell">
                      <div className="label">Class XII Marks</div>
                      <div className="value">{submittedApp.twelfthPercentage}% ({submittedApp.twelfthBoard})</div>
                    </div>
                    <div className="slip-detail-cell">
                      <div className="label">Contact / WhatsApp</div>
                      <div className="value">{submittedApp.phone}</div>
                    </div>
                    <div className="slip-detail-cell">
                      <div className="label">Parent / Guardian</div>
                      <div className="value">{submittedApp.parentName}</div>
                    </div>
                    <div className="slip-detail-cell">
                      <div className="label">Status</div>
                      <div className="value" style={{ color: '#0369a1' }}>
                        ENROLLMENT ACTIVE
                      </div>
                    </div>
                  </div>

                  <div style={{ borderTop: '1px dashed var(--border-subtle)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                      <strong>Required at Campus:</strong> 10th & 12th marksheets, Transfer Certificate, 4 passport photos, and Aadhaar card copy.
                    </div>
                    <div style={{ textAlign: 'center', opacity: 0.8 }}>
                      <QrCode size={48} color="var(--primary-navy)" />
                      <div style={{ fontSize: '0.65rem', fontWeight: 'bold' }}>VERIFIED</div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
                  <button onClick={handlePrintSlip} className="btn-primary-gold">
                    <Printer size={18} /> Print Application Slip
                  </button>
                  <button 
                    onClick={() => {
                      setStep(1);
                      setSubmittedApp(null);
                    }} 
                    className="btn-outline-white"
                    style={{ color: 'var(--primary-navy)', borderColor: 'var(--border-subtle)' }}
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
