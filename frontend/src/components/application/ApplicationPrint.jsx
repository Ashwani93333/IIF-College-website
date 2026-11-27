import React from 'react';
import { iifccmsLogo, ccsuLogo } from '../../assets/assetImages';

/**
 * Standard 11 Weightage Items from Official College Paper Form
 */
export const WEIGHTAGE_OPTIONS = [
  "Certificate of Sports (IOA / SAI / AIU) at Intermediate Level",
  "Ward of University / Affiliated College Staff",
  "NCC C or G-II Certificate",
  "NCC B or G-I Certificate",
  "NSS (Who has worked 240 days and attended 2 Camps of 7 / 10 Days)",
  "NSS (Who has worked 240 days and attended 1 Camp of 7 / 10 Days)",
  "NSS (Who has worked 240 days or 120 days and attended 1 Special Camp)",
  "Scouting & Ranger / Rover (Awarded Second Grade / Dhruvpad in Exam)",
  "Scouting & Ranger / Rover (Awarded Third Grade / Gurupad in Exam)",
  "Scouting & Ranger / Rover (Awarded by Governor / Expert in Exam)",
  "Scouting & Ranger / Rover (Awarded by President of India)"
];

/**
 * ApplicationPrint Component
 * 
 * Generates an isolated, printable 2-page A4 document replicating the paper form.
 * Follows design doc specs:
 * - Pure form document: NO website header, navbar, footer, cookie banner or chat widgets.
 * - Single outer border, A4 dimensions, high contrast monochrome/dark styling.
 * - data === null: renders the blank application form with empty boxes and lines.
 * - data !== null: renders filled applicant records, checks, photos, and signatures.
 * - isDraft === true: displays a light diagonal 'DRAFT' watermark across both pages.
 * - Handles text overflow with an optional Continuation Sheet.
 */
export default function ApplicationPrint({ data = null, isDraft = false }) {
  const isBlank = !data;

  // Mask Aadhaar if provided
  const formatAadhaar = (val) => {
    if (!val) return '—';
    const digits = val.replace(/\D/g, '');
    if (digits.length === 12) {
      return `•••• •••• ${digits.slice(8)}`;
    }
    return val;
  };

  // Check if continuation sheet is needed for overflowing text
  const needsContinuation = Boolean(
    data && (
      (data.extracurricular && data.extracurricular.length > 350) ||
      (data.awards && data.awards.length > 350) ||
      (data.statementOfPurpose && data.statementOfPurpose.length > 350) ||
      (data.additionalInfo && data.additionalInfo.length > 300)
    )
  );

  return (
    <div className="print-root" style={{
      width: '210mm',
      background: '#ffffff',
      color: '#000000',
      fontFamily: 'inherit',
      fontSize: '8pt',
      lineHeight: 1.25,
      margin: '0 auto',
      boxSizing: 'border-box'
    }}>
      {/* ====================================================================
          PAGE 1: PART A
          ==================================================================== */}
      <div className="print-page" style={{
        width: '194mm',
        minHeight: '277mm',
        margin: '0 auto 10mm auto',
        padding: '7mm 8mm',
        border: '1.5px solid #000000',
        boxSizing: 'border-box',
        position: 'relative',
        background: '#ffffff'
      }}>
        {/* Draft Watermark */}
        {isDraft && (
          <div className="draft-watermark" style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: 'rotate(-30deg)',
            fontSize: '92px',
            fontWeight: 900,
            letterSpacing: '0.2em',
            color: '#000000',
            opacity: 0.07,
            pointerEvents: 'none',
            zIndex: 10
          }}>
            DRAFT
          </div>
        )}

        {/* Top Letterhead Box */}
        <div style={{
          border: '1.5px solid #000000',
          padding: '6px 10px',
          marginBottom: '6px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
            {/* Logos */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
              <img
                src={iifccmsLogo}
                alt="IIFCCMS College Crest"
                style={{
                  width: '52px',
                  height: '52px',
                  objectFit: 'contain',
                  borderRadius: '50%',
                  border: '1px solid #000000'
                }}
              />
              <img
                src={ccsuLogo}
                alt="CCS University Logo"
                style={{ width: '46px', height: '46px', objectFit: 'contain' }}
              />
            </div>

            {/* Institution Title */}
            <div style={{ textAlign: 'center', flex: 1, padding: '0 6px' }}>
              <div style={{
                fontSize: '13pt',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '0.03em',
                lineHeight: 1.15
              }}>
                IIF College of Commerce &amp; Management Studies
              </div>
              <div style={{ fontSize: '8.5pt', fontStyle: 'italic', fontWeight: 600, marginTop: '1px' }}>
                (Affiliated to Chaudhary Charan Singh University)
              </div>
              <div style={{ fontSize: '7.8pt', marginTop: '1px' }}>
                45 A, Knowledge Park III, Greater Noida 201308, NCR Delhi
              </div>
              <div style={{ fontSize: '8pt', fontWeight: 700, marginTop: '2px' }}>
                Academic Session: {data?.academicSession || '2026 – 2027'}
              </div>
            </div>

            {/* Enrollment / Office Use Box */}
            <div style={{
              textAlign: 'right',
              flexShrink: 0,
              fontSize: '7.5pt',
              borderLeft: '1px solid #000000',
              paddingLeft: '8px',
              minWidth: '110px'
            }}>
              <div style={{ fontWeight: 700 }}>Enrollment No.</div>
              <div style={{
                display: 'flex',
                gap: '2px',
                marginTop: '2px',
                justifyContent: 'flex-end'
              }}>
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: '12px',
                      height: '14px',
                      border: '1px solid #000000',
                      textAlign: 'center',
                      fontSize: '7.5pt',
                      fontWeight: 800,
                      lineHeight: '13px'
                    }}
                  >
                    {data?.enrollmentNo?.[i] || ''}
                  </div>
                ))}
              </div>
              <div style={{ fontSize: '7pt', color: '#333333', marginTop: '2px' }}>
                [ For Office Use Only ]
              </div>
              {data?.applicationId && (
                <div style={{
                  fontSize: '7pt',
                  fontWeight: 800,
                  border: '1px dashed #000000',
                  padding: '1px 3px',
                  marginTop: '2px',
                  textAlign: 'center'
                }}>
                  Ref: {data.applicationId}
                </div>
              )}
            </div>
          </div>

          {/* Programme Selection Bar */}
          <div style={{
            borderTop: '1px solid #000000',
            marginTop: '5px',
            paddingTop: '4px',
            fontSize: '8pt',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap'
          }}>
            <div>
              <strong>Regular UG Programme(s) :</strong> &nbsp;&nbsp;
              <span style={{ fontWeight: data?.programme === 'BBA' ? 800 : 400 }}>
                [{data?.programme === 'BBA' ? '✓' : ' '}] 1. Bachelor of Business Administration (BBA) (Code 454)
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span style={{ fontWeight: data?.programme === 'B.Com' ? 800 : 400 }}>
                [{data?.programme === 'B.Com' ? '✓' : ' '}] 2. Bachelor of Commerce (B.Com) (Code 472)
              </span>
            </div>
          </div>
        </div>

        {/* Sub-header instruction */}
        <div style={{ fontSize: '7pt', fontStyle: 'italic', marginBottom: '4px' }}>
          * Please read the instructions before submitting the application form. Fill in CAPITAL letters.
        </div>

        {/* Main Body Grid: 2 Columns */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.95fr 1fr', gap: '6px' }}>
          {/* Left Column Table */}
          <table style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '7.6pt',
            border: '1px solid #000000'
          }}>
            <tbody>
              {/* 1. Name */}
              <tr style={{ borderBottom: '1px solid #000000' }}>
                <td style={{ width: '28%', padding: '2.5px 4px', fontWeight: 'bold', borderRight: '1px solid #000000', background: '#fafafa' }}>
                  1. Name (In Capitals):
                </td>
                <td style={{ padding: '2.5px 4px' }}>
                  {isBlank ? (
                    <div style={{ display: 'flex', gap: '2px' }}>
                      {[...Array(24)].map((_, i) => (
                        <span key={i} style={{ display: 'inline-block', width: '10px', height: '12px', border: '1px solid #999' }} />
                      ))}
                    </div>
                  ) : (
                    <strong>
                      {data.candidateTitle} {data.fullName?.toUpperCase()}
                    </strong>
                  )}
                </td>
              </tr>

              {/* 2. Father's / Husband's Details */}
              <tr style={{ borderBottom: '1px solid #000000' }}>
                <td style={{ padding: '2.5px 4px', fontWeight: 'bold', borderRight: '1px solid #000000', background: '#fafafa' }}>
                  2. Father's / Husband's:
                </td>
                <td style={{ padding: '2.5px 4px' }}>
                  {isBlank ? (
                    'Name: ______________________ Designation: ______________ Address: ____________'
                  ) : (
                    <div>
                      <strong>{data.fatherName?.toUpperCase() || '—'}</strong>
                      {data.fatherDesignation && <span> • Desig: {data.fatherDesignation}</span>}
                      {data.fatherAddress && <div style={{ fontSize: '7pt', color: '#222' }}>Addr: {data.fatherAddress}</div>}
                    </div>
                  )}
                </td>
              </tr>

              {/* 3. Mother's Details */}
              <tr style={{ borderBottom: '1px solid #000000' }}>
                <td style={{ padding: '2.5px 4px', fontWeight: 'bold', borderRight: '1px solid #000000', background: '#fafafa' }}>
                  3. Mother's Details:
                </td>
                <td style={{ padding: '2.5px 4px' }}>
                  {isBlank ? (
                    'Name: ______________________ Profession: __________________________________'
                  ) : (
                    <div>
                      <strong>{data.motherName?.toUpperCase() || '—'}</strong>
                      {data.motherProfession && <span> • Profession: {data.motherProfession}</span>}
                    </div>
                  )}
                </td>
              </tr>

              {/* 4. Nationality & Status */}
              <tr style={{ borderBottom: '1px solid #000000' }}>
                <td style={{ padding: '2.5px 4px', fontWeight: 'bold', borderRight: '1px solid #000000', background: '#fafafa' }}>
                  4. Nationality &amp; Status:
                </td>
                <td style={{ padding: '2.5px 4px' }}>
                  {isBlank ? (
                    'Nationality: Indian [ ] Other [ ]   |   Marital: Unmarried [ ] Married [ ]'
                  ) : (
                    <span>
                      Nationality: <strong>{data.nationality || 'Indian'}</strong> &nbsp;|&nbsp;
                      Marital Status: <strong>{data.maritalStatus || 'Unmarried'}</strong>
                    </span>
                  )}
                </td>
              </tr>

              {/* 5. DOB, Age, Gender */}
              <tr style={{ borderBottom: '1px solid #000000' }}>
                <td style={{ padding: '2.5px 4px', fontWeight: 'bold', borderRight: '1px solid #000000', background: '#fafafa' }}>
                  5. Date of Birth &amp; Age:
                </td>
                <td style={{ padding: '2.5px 4px' }}>
                  {isBlank ? (
                    'DOB: DD / MM / YYYY   |   Age: ____ Yrs   |   Gender: Male [ ] Female [ ]'
                  ) : (
                    <span>
                      DOB: <strong>{data.dob || '—'}</strong> &nbsp;|&nbsp;
                      Age: <strong>{data.age ? `${data.age} Yrs` : '—'}</strong> &nbsp;|&nbsp;
                      Gender: <strong>{data.gender || '—'}</strong>
                    </span>
                  )}
                </td>
              </tr>

              {/* 6. Mailing Address */}
              <tr style={{ borderBottom: '1px solid #000000' }}>
                <td style={{ padding: '2.5px 4px', fontWeight: 'bold', borderRight: '1px solid #000000', background: '#fafafa' }}>
                  6. Mailing Address:
                </td>
                <td style={{ padding: '2.5px 4px' }}>
                  {isBlank ? (
                    'Address: _________________________________________________________________\nMobile: ____________________ Email: __________________ Phone: ____________'
                  ) : (
                    <div>
                      <div>{data.mailingAddress?.toUpperCase() || '—'}</div>
                      <div style={{ marginTop: '1px', fontSize: '7pt' }}>
                        Mobile: <strong>{data.mobile || '—'}</strong> &nbsp;|&nbsp;
                        Email: <strong>{data.email || '—'}</strong>
                        {data.alternatePhone && <span> &nbsp;|&nbsp; Alt: {data.alternatePhone}</span>}
                      </div>
                    </div>
                  )}
                </td>
              </tr>

              {/* 7. Permanent Address */}
              <tr style={{ borderBottom: '1px solid #000000' }}>
                <td style={{ padding: '2.5px 4px', fontWeight: 'bold', borderRight: '1px solid #000000', background: '#fafafa' }}>
                  7. Permanent Address:
                </td>
                <td style={{ padding: '2.5px 4px' }}>
                  {isBlank ? (
                    'Address: _________________________________________________________________\n[ ] Same as mailing address'
                  ) : (
                    <div>{data.permanentAddress?.toUpperCase() || data.mailingAddress?.toUpperCase() || '—'}</div>
                  )}
                </td>
              </tr>

              {/* 8. Examinations Passed Header */}
              <tr style={{ borderBottom: '1px solid #000000' }}>
                <td colSpan="2" style={{ padding: '3px 4px', fontWeight: 'bold', background: '#eeeeee' }}>
                  8. Examinations Passed (Academic Record):
                </td>
              </tr>

              {/* Examinations Table */}
              <tr style={{ borderBottom: '1px solid #000000' }}>
                <td colSpan="2" style={{ padding: 0 }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '7pt' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid #000000', background: '#f5f5f5' }}>
                        <th style={{ borderRight: '1px solid #000000', padding: '2px 4px', textAlign: 'left', width: '22%' }}>Exam</th>
                        <th style={{ borderRight: '1px solid #000000', padding: '2px 4px', textAlign: 'left' }}>Board / School</th>
                        <th style={{ borderRight: '1px solid #000000', padding: '2px 4px', width: '38px', textAlign: 'center' }}>Year</th>
                        <th style={{ borderRight: '1px solid #000000', padding: '2px 4px', width: '38px', textAlign: 'center' }}>Div</th>
                        <th style={{ padding: '2px 4px', width: '42px', textAlign: 'center' }}>% Marks</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(isBlank || !data.examinations || data.examinations.length === 0) ? (
                        <>
                          <tr style={{ borderBottom: '1px solid #ccc', height: '15px' }}>
                            <td style={{ borderRight: '1px solid #000', padding: '2px 4px', fontWeight: 'bold' }}>10th / Secondary</td>
                            <td style={{ borderRight: '1px solid #000' }}></td>
                            <td style={{ borderRight: '1px solid #000' }}></td>
                            <td style={{ borderRight: '1px solid #000' }}></td>
                            <td></td>
                          </tr>
                          <tr style={{ borderBottom: '1px solid #ccc', height: '15px' }}>
                            <td style={{ borderRight: '1px solid #000', padding: '2px 4px', fontWeight: 'bold' }}>12th / Sr. Sec.</td>
                            <td style={{ borderRight: '1px solid #000' }}></td>
                            <td style={{ borderRight: '1px solid #000' }}></td>
                            <td style={{ borderRight: '1px solid #000' }}></td>
                            <td></td>
                          </tr>
                          <tr style={{ height: '15px' }}>
                            <td style={{ borderRight: '1px solid #000', padding: '2px 4px', fontWeight: 'bold' }}>Other / Diploma</td>
                            <td style={{ borderRight: '1px solid #000' }}></td>
                            <td style={{ borderRight: '1px solid #000' }}></td>
                            <td style={{ borderRight: '1px solid #000' }}></td>
                            <td></td>
                          </tr>
                        </>
                      ) : (
                        data.examinations.map((ex, exIdx) => (
                          <tr key={exIdx} style={{ borderBottom: exIdx < data.examinations.length - 1 ? '1px solid #ccc' : 'none' }}>
                            <td style={{ borderRight: '1px solid #000', padding: '2px 4px', fontWeight: 'bold' }}>
                              {ex.exam || '—'}
                            </td>
                            <td style={{ borderRight: '1px solid #000', padding: '2px 4px' }}>
                              {ex.board || '—'}
                            </td>
                            <td style={{ borderRight: '1px solid #000', padding: '2px 4px', textAlign: 'center' }}>
                              {ex.year || '—'}
                            </td>
                            <td style={{ borderRight: '1px solid #000', padding: '2px 4px', textAlign: 'center' }}>
                              {ex.division || '—'}
                            </td>
                            <td style={{ padding: '2px 4px', textAlign: 'center' }}>
                              {ex.percentage ? `${ex.percentage}%` : '—'}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </td>
              </tr>

              {/* 9. Occupation */}
              <tr style={{ borderBottom: '1px solid #000000' }}>
                <td style={{ padding: '2.5px 4px', fontWeight: 'bold', borderRight: '1px solid #000000', background: '#fafafa' }}>
                  9. Occupation (If any):
                </td>
                <td style={{ padding: '2.5px 4px' }}>
                  {isBlank ? (
                    'Employer: ________________ Designation: ____________ Period: ___________'
                  ) : (
                    data.occupations && data.occupations[0]?.employer ? (
                      <div>
                        {data.occupations.map((occ, oIdx) => (
                          <div key={oIdx}>
                            <strong>{occ.employer}</strong> | {occ.designation} ({occ.period})
                          </div>
                        ))}
                      </div>
                    ) : (
                      'None (Fresher / Student)'
                    )
                  )}
                </td>
              </tr>

              {/* 10. Written Exam / Entrance */}
              <tr style={{ borderBottom: '1px solid #000000' }}>
                <td style={{ padding: '2.5px 4px', fontWeight: 'bold', borderRight: '1px solid #000000', background: '#fafafa' }}>
                  10. Written Exam:
                </td>
                <td style={{ padding: '2.5px 4px' }}>
                  {isBlank ? (
                    '[ ] AIMA (UGAT)    [ ] AIMS (UGAT)    [ ] Direct Admission / Merit'
                  ) : (
                    <span>
                      [{data.writtenExam === 'AIMA (UGAT)' ? '✓' : ' '}] AIMA (UGAT) &nbsp;&nbsp;
                      [{data.writtenExam === 'AIMS (UGAT)' ? '✓' : ' '}] AIMS (UGAT) &nbsp;&nbsp;
                      [{data.writtenExam === 'DIRECT' || !data.writtenExam ? '✓' : ' '}] Direct Admission
                      {data.examRollNo && <span> &nbsp;| Roll: {data.examRollNo}</span>}
                      {data.examScore && <span> &nbsp;| Score: {data.examScore}</span>}
                    </span>
                  )}
                </td>
              </tr>

              {/* 11. Remittance */}
              <tr style={{ borderBottom: '1px solid #000000' }}>
                <td style={{ padding: '2.5px 4px', fontWeight: 'bold', borderRight: '1px solid #000000', background: '#fafafa' }}>
                  11. Remittance Details:
                </td>
                <td style={{ padding: '2.5px 4px' }}>
                  {isBlank ? (
                    'Mode: DD [ ] Online [ ]  Date: _______ Bank: ____________ Branch: ________ Amount: Rs. 1000'
                  ) : (
                    <span>
                      Mode: <strong>{data.paymentMode || 'Online'}</strong> &nbsp;|&nbsp;
                      Bank: <strong>{data.bankName || 'N/A'}</strong> &nbsp;|&nbsp;
                      Txn/Ref: <strong>{data.txnRefNumber || 'N/A'}</strong> &nbsp;|&nbsp;
                      Date: <strong>{data.paymentDate || '—'}</strong> &nbsp;|&nbsp;
                      Amt: <strong>₹{data.amountPaid || '1000'}</strong>
                    </span>
                  )}
                </td>
              </tr>

              {/* 12. Aadhaar & Category */}
              <tr>
                <td style={{ padding: '2.5px 4px', fontWeight: 'bold', borderRight: '1px solid #000000', background: '#fafafa' }}>
                  12. Aadhaar &amp; Category:
                </td>
                <td style={{ padding: '2.5px 4px' }}>
                  {isBlank ? (
                    'Aadhaar No: ____________   Category: SC [ ] ST [ ] OBC [ ] GEN [ ]   Sponsored/NRI: [ ]'
                  ) : (
                    <span>
                      Aadhaar: <strong>{formatAadhaar(data.aadharNumber)}</strong> &nbsp;|&nbsp;
                      Category: <strong>[{data.category || 'GEN'}]</strong> &nbsp;|&nbsp;
                      Sponsored: <strong>{data.isSponsored ? 'Yes' : 'No'}</strong>
                    </span>
                  )}
                </td>
              </tr>
            </tbody>
          </table>

          {/* Right Column: Photo Box + Weightage Claimed Box */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {/* Photograph Box */}
            <div style={{
              border: '1.5px dashed #000000',
              height: '118px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              fontSize: '7pt',
              background: '#fcfcfc',
              overflow: 'hidden',
              padding: '2px'
            }}>
              {data?.photoUrl ? (
                <img
                  src={data.photoUrl}
                  alt="Candidate Photograph"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <div style={{ padding: '6px', color: '#444444' }}>
                  <div style={{ fontWeight: 'bold', marginBottom: '3px' }}>PASSPORT PHOTO</div>
                  Affix recent colour passport size photograph here (3.5 cm × 4.5 cm)
                </div>
              )}
            </div>

            {/* Weightage Claimed Box */}
            <div style={{
              border: '1px solid #000000',
              padding: '3px 4px',
              flex: 1,
              fontSize: '6.5pt',
              background: '#ffffff'
            }}>
              <div style={{
                fontWeight: 'bold',
                textAlign: 'center',
                borderBottom: '1px solid #000000',
                paddingBottom: '2px',
                marginBottom: '3px',
                fontSize: '6.8pt',
                letterSpacing: '0.02em'
              }}>
                WEIGHTAGE CLAIMED (Kindly Tick)
              </div>
              {WEIGHTAGE_OPTIONS.map((opt, wIdx) => {
                const isChecked = Boolean(data?.weightage && data.weightage.includes(opt));
                return (
                  <div key={wIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '3px', marginBottom: '2.5px' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '7pt', lineHeight: 1 }}>
                      [{isChecked ? '✓' : ' '}]
                    </span>
                    <span style={{ lineHeight: 1.15 }}>
                      {wIdx + 1}. {opt}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Page 1 Bottom Signature Strip */}
        <div style={{
          marginTop: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          fontSize: '7.8pt',
          paddingTop: '6px',
          borderTop: '1px solid #000000'
        }}>
          <div>
            Date: <strong>{data?.declarationDate || '____ / ____ / 2026'}</strong>
          </div>
          <div style={{ textAlign: 'center', fontSize: '7pt', color: '#555' }}>
            Page 1 of {needsContinuation ? '3' : '2'}
          </div>
          <div style={{ textAlign: 'right' }}>
            {data?.signatureUrl ? (
              <img
                src={data.signatureUrl}
                alt="Candidate Signature"
                style={{ maxHeight: '30px', maxWidth: '140px', objectFit: 'contain', display: 'block', margin: '0 0 2px auto' }}
              />
            ) : (
              <div style={{ marginBottom: '2px' }}>____________________________________</div>
            )}
            <div style={{ fontSize: '7pt', fontWeight: 600 }}>(Signature of the Candidate)</div>
          </div>
        </div>
      </div>

      {/* ====================================================================
          PAGE 2: PART B (SUPPLEMENTARY DETAILS & DECLARATION)
          ==================================================================== */}
      <div className="print-page print-page-break" style={{
        width: '194mm',
        minHeight: '277mm',
        margin: '0 auto 10mm auto',
        padding: '7mm 8mm',
        border: '1.5px solid #000000',
        boxSizing: 'border-box',
        position: 'relative',
        background: '#ffffff',
        pageBreakBefore: 'always'
      }}>
        {/* Draft Watermark */}
        {isDraft && (
          <div className="draft-watermark" style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: 'rotate(-30deg)',
            fontSize: '92px',
            fontWeight: 900,
            letterSpacing: '0.2em',
            color: '#000000',
            opacity: 0.07,
            pointerEvents: 'none',
            zIndex: 10
          }}>
            DRAFT
          </div>
        )}

        {/* Page 2 Header */}
        <div style={{
          textAlign: 'center',
          borderBottom: '1.5px solid #000000',
          paddingBottom: '5px',
          marginBottom: '8px'
        }}>
          <div style={{
            fontSize: '11pt',
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '0.03em'
          }}>
            IIF College of Commerce &amp; Management Studies
          </div>
          <div style={{ fontSize: '8pt', fontStyle: 'italic', fontWeight: 600 }}>
            Official Application Dossier • Supplementary Details (Part B)
          </div>
        </div>

        {/* 14. Major Extracurricular Activities */}
        <div style={{ border: '1px solid #000000', marginBottom: '7px', padding: '5px 6px', fontSize: '7.8pt' }}>
          <strong>14. Major Extracurricular Activities :</strong>
          <div style={{
            minHeight: '38px',
            marginTop: '3px',
            lineHeight: 1.3,
            color: isBlank ? '#666' : '#000'
          }}>
            {isBlank ? (
              '(Please mention sports, cultural events, debate, music, theatre, leadership positions held)'
            ) : (
              (data.extracurricular && data.extracurricular.length > 350)
                ? `${data.extracurricular.slice(0, 320)}... [See Continuation Sheet for full details]`
                : (data.extracurricular || 'None reported.')
            )}
          </div>
        </div>

        {/* 15. Distinctions and Awards */}
        <div style={{ border: '1px solid #000000', marginBottom: '7px', padding: '5px 6px', fontSize: '7.8pt' }}>
          <strong>15. Distinctions and Awards :</strong>
          <div style={{
            minHeight: '38px',
            marginTop: '3px',
            lineHeight: 1.3,
            color: isBlank ? '#666' : '#000'
          }}>
            {isBlank ? (
              '(Academic prizes, olympiads, state/national championships, scholarships)'
            ) : (
              (data.awards && data.awards.length > 350)
                ? `${data.awards.slice(0, 320)}... [See Continuation Sheet for full details]`
                : (data.awards || 'None reported.')
            )}
          </div>
        </div>

        {/* 16. Why do you wish to join this programme (100 words) */}
        <div style={{ border: '1px solid #000000', marginBottom: '7px', padding: '5px 6px', fontSize: '7.8pt' }}>
          <strong>16. Why do you wish to join this programme? (Maximum 100 words) :</strong>
          <div style={{
            minHeight: '52px',
            marginTop: '3px',
            lineHeight: 1.35,
            textAlign: 'justify'
          }}>
            {isBlank ? (
              'Explain your academic interest, career aspirations, and motivations for pursuing this regular degree under IIFCCMS...'
            ) : (
              (data.statementOfPurpose && data.statementOfPurpose.length > 350)
                ? `${data.statementOfPurpose.slice(0, 320)}... [See Continuation Sheet for full essay]`
                : (data.statementOfPurpose || 'To acquire foundational knowledge in commerce, business governance, and managerial competencies under the academic guidance of IIFCCMS core faculty.')
            )}
          </div>
        </div>

        {/* 17. Additional Information */}
        <div style={{ border: '1px solid #000000', marginBottom: '7px', padding: '5px 6px', fontSize: '7.8pt' }}>
          <strong>17. Any additional information you wish to furnish :</strong>
          <div style={{
            minHeight: '32px',
            marginTop: '3px',
            lineHeight: 1.3
          }}>
            {isBlank ? (
              'Any other relevant information regarding academic accomplishments, gap years, or background...'
            ) : (
              (data.additionalInfo && data.additionalInfo.length > 300)
                ? `${data.additionalInfo.slice(0, 270)}... [See Continuation Sheet]`
                : (data.additionalInfo || 'All certificates, credentials, and marksheets presented for evaluation are authentic and verified.')
            )}
          </div>
        </div>

        {/* 18. References (2) */}
        <div style={{ border: '1px solid #000000', marginBottom: '8px', padding: '5px 6px', fontSize: '7.8pt' }}>
          <strong>18. References (Two reference contacts from Professor / Employer) :</strong>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginTop: '4px' }}>
            <div style={{ border: '1px dashed #666', padding: '4px', background: '#fafafa' }}>
              <strong>Reference 1:</strong>
              {isBlank ? (
                <div style={{ marginTop: '2px', lineHeight: 1.4 }}>
                  Name: ________________________________<br />
                  Designation &amp; Org: ____________________<br />
                  Contact (Email/Phone): _________________
                </div>
              ) : (
                <div style={{ marginTop: '2px', lineHeight: 1.3 }}>
                  <div><strong>{data.ref1Name || 'Name & Designation'}</strong></div>
                  <div>{data.ref1Designation} {data.ref1Org && `• ${data.ref1Org}`}</div>
                  <div>Contact: {data.ref1Contact || '—'}</div>
                </div>
              )}
            </div>

            <div style={{ border: '1px dashed #666', padding: '4px', background: '#fafafa' }}>
              <strong>Reference 2:</strong>
              {isBlank ? (
                <div style={{ marginTop: '2px', lineHeight: 1.4 }}>
                  Name: ________________________________<br />
                  Designation &amp; Org: ____________________<br />
                  Contact (Email/Phone): _________________
                </div>
              ) : (
                <div style={{ marginTop: '2px', lineHeight: 1.3 }}>
                  <div><strong>{data.ref2Name || 'Name & Designation'}</strong></div>
                  <div>{data.ref2Designation} {data.ref2Org && `• ${data.ref2Org}`}</div>
                  <div>Contact: {data.ref2Contact || '—'}</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Student's Declaration Box */}
        <div style={{
          border: '1.5px solid #000000',
          padding: '7px 8px',
          marginTop: '6px',
          fontSize: '7.5pt',
          background: '#fcfcfc'
        }}>
          <div style={{
            fontWeight: 'bold',
            textDecoration: 'underline',
            marginBottom: '4px',
            fontSize: '8pt'
          }}>
            Student's Declaration :
          </div>
          <p style={{ margin: '0 0 6px 0', lineHeight: 1.4, textAlign: 'justify' }}>
            I declare that all information given by me in the application form is true and correct to the best of my knowledge and belief. I agree to deposit the prescribed institutional fees and adhere strictly to the admission regulations and academic policies of IIF College of Commerce &amp; Management Studies and CCS University. I agree to comply with any code of conduct formulated by the College Principal and Management. I undertake to maintain a minimum attendance of 75% in classes, failing which the college reserves the right to debar me from university examinations or cancel my admission.
          </p>

          <div style={{
            marginTop: '16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            paddingTop: '6px'
          }}>
            <div>
              Date: <strong>{data?.declarationDate || '____ / ____ / 2026'}</strong>
            </div>

            <div style={{ textAlign: 'center', fontSize: '7pt', color: '#555' }}>
              Page 2 of {needsContinuation ? '3' : '2'}
            </div>

            <div style={{ textAlign: 'right' }}>
              {data?.signatureUrl ? (
                <img
                  src={data.signatureUrl}
                  alt="Candidate Signature"
                  style={{ maxHeight: '34px', maxWidth: '140px', objectFit: 'contain', display: 'block', margin: '0 0 2px auto' }}
                />
              ) : (
                <div style={{ marginBottom: '2px' }}>____________________________________</div>
              )}
              <div style={{ fontSize: '7pt', fontWeight: 600 }}>(Signature of the Student)</div>
            </div>
          </div>
        </div>
      </div>

      {/* ====================================================================
          PAGE 3: CONTINUATION SHEET (ONLY IF OVERFLOW OCCURS)
          ==================================================================== */}
      {needsContinuation && (
        <div className="print-page print-page-break" style={{
          width: '194mm',
          minHeight: '277mm',
          margin: '0 auto 10mm auto',
          padding: '7mm 8mm',
          border: '1.5px solid #000000',
          boxSizing: 'border-box',
          position: 'relative',
          background: '#ffffff',
          pageBreakBefore: 'always'
        }}>
          {isDraft && (
            <div className="draft-watermark" style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transform: 'rotate(-30deg)',
              fontSize: '92px',
              fontWeight: 900,
              letterSpacing: '0.2em',
              color: '#000000',
              opacity: 0.07,
              pointerEvents: 'none',
              zIndex: 10
            }}>
              DRAFT
            </div>
          )}

          <div style={{
            textAlign: 'center',
            borderBottom: '1.5px solid #000000',
            paddingBottom: '5px',
            marginBottom: '10px'
          }}>
            <div style={{ fontSize: '11pt', fontWeight: 900, textTransform: 'uppercase' }}>
              IIF College of Commerce &amp; Management Studies
            </div>
            <div style={{ fontSize: '8.5pt', fontStyle: 'italic', fontWeight: 700 }}>
              Continuation Sheet • Supplementary Information (Page 3 of 3)
            </div>
            <div style={{ fontSize: '7.8pt', marginTop: '2px' }}>
              Candidate: <strong>{data?.fullName?.toUpperCase()}</strong> &nbsp;|&nbsp;
              Course: <strong>{data?.programme}</strong> &nbsp;|&nbsp;
              Ref: <strong>{data?.applicationId || 'N/A'}</strong>
            </div>
          </div>

          {data.statementOfPurpose && data.statementOfPurpose.length > 350 && (
            <div style={{ border: '1px solid #000', padding: '8px', marginBottom: '10px', fontSize: '8pt' }}>
              <strong>16. Why do you wish to join this programme? (Full Response) :</strong>
              <p style={{ marginTop: '4px', lineHeight: 1.45, textAlign: 'justify' }}>
                {data.statementOfPurpose}
              </p>
            </div>
          )}

          {data.extracurricular && data.extracurricular.length > 350 && (
            <div style={{ border: '1px solid #000', padding: '8px', marginBottom: '10px', fontSize: '8pt' }}>
              <strong>14. Major Extracurricular Activities (Full Details) :</strong>
              <p style={{ marginTop: '4px', lineHeight: 1.45 }}>
                {data.extracurricular}
              </p>
            </div>
          )}

          {data.awards && data.awards.length > 350 && (
            <div style={{ border: '1px solid #000', padding: '8px', marginBottom: '10px', fontSize: '8pt' }}>
              <strong>15. Distinctions and Awards (Full Details) :</strong>
              <p style={{ marginTop: '4px', lineHeight: 1.45 }}>
                {data.awards}
              </p>
            </div>
          )}

          {data.additionalInfo && data.additionalInfo.length > 300 && (
            <div style={{ border: '1px solid #000', padding: '8px', marginBottom: '10px', fontSize: '8pt' }}>
              <strong>17. Additional Information (Full Details) :</strong>
              <p style={{ marginTop: '4px', lineHeight: 1.45 }}>
                {data.additionalInfo}
              </p>
            </div>
          )}

          <div style={{
            marginTop: '25px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            fontSize: '7.8pt',
            borderTop: '1px solid #000',
            paddingTop: '6px'
          }}>
            <div>Date: <strong>{data?.declarationDate}</strong></div>
            <div style={{ textAlign: 'right' }}>
              {data?.signatureUrl ? (
                <img
                  src={data.signatureUrl}
                  alt="Candidate Signature"
                  style={{ maxHeight: '30px', maxWidth: '140px', objectFit: 'contain', display: 'block', margin: '0 0 2px auto' }}
                />
              ) : (
                <div>____________________________________</div>
              )}
              <div style={{ fontSize: '7pt' }}>(Signature of the Candidate)</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
