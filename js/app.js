/**
 * IIF College of Commerce and Management Studies (IIFCCMS)
 * Interactive Application & Campus Portal Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
  initStatsCounter();
  initProgramTabs();
  initFeeCalculator();
  initGalleryFilter();
  initNoticeBoard();
  initAdmissionModal();
  initQuickInquiry();
  initMobileNav();
  initSmoothScroll();
});

/* ==========================================================================
   1. HERO SLIDER
   ========================================================================== */
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slider-dot');
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const targetIndex = parseInt(e.target.dataset.slide, 10);
      showSlide(targetIndex);
      resetInterval();
    });
  });

  function startInterval() {
    slideInterval = setInterval(nextSlide, 6000);
  }

  function resetInterval() {
    clearInterval(slideInterval);
    startInterval();
  }

  if (slides.length > 0) {
    startInterval();
  }
}

/* ==========================================================================
   2. STATS COUNTER ANIMATION
   ========================================================================== */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.counter-val');
  if (!statNumbers.length) return;
  let animated = false;

  function animateCounters() {
    statNumbers.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-target'));
      if (isNaN(target)) return;
      const isDecimal = target % 1 !== 0;
      const duration = 1600;
      const start = 0;
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 4);
        const current = start + (target - start) * ease;

        counter.textContent = isDecimal ? current.toFixed(2) : Math.floor(current).toLocaleString('en-IN');

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          counter.textContent = isDecimal ? target.toFixed(2) : target.toLocaleString('en-IN');
        }
      }

      requestAnimationFrame(update);
    });
  }

  const statsSection = document.querySelector('.stats-bar');
  if (!statsSection) {
    animateCounters();
    return;
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          animateCounters();
          observer.unobserve(statsSection);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(statsSection);
  } else {
    animateCounters();
  }
}

/* ==========================================================================
   3. ACADEMIC PROGRAM TABS & SYLLABUS MODAL
   ========================================================================== */
const programData = {
  bba: {
    code: 'College Code: 454',
    title: 'Bachelor of Business Administration (BBA)',
    badge: '3 Years Full-Time • CCSU Affiliated',
    desc: 'An intensive, industry-centric undergraduate degree designed to develop managerial acumen, strategic decision-making, and entrepreneurial leadership. Equipped with modern case studies, financial analysis, marketing simulations, and guest sessions by corporate veterans.',
    duration: '3 Years (6 Semesters)',
    eligibility: '10+2 with min 45% (40% for SC/ST)',
    annualFee: '₹ 80,000/- per year',
    degree: 'Ch. Charan Singh University (CCSU Meerut)',
    curriculum: [
      'Principles of Management',
      'Financial & Cost Accounting',
      'Business Economics',
      'Marketing Management',
      'Human Resource Management',
      'Financial Management',
      'Business Law & Ethics',
      'Production & Operations',
      'Digital Business Analytics',
      'Entrepreneurship & Project Viva'
    ],
    careers: ['Management Trainee', 'Investment Analyst', 'Brand Manager', 'Banking Officer', 'Pathway to IIM MBA / Top Global Universities']
  },
  bcom: {
    code: 'College Code: 472',
    title: 'Bachelor of Commerce (B.Com)',
    badge: '3 Years Full-Time • CCSU Affiliated',
    desc: 'A robust, rigorous curriculum covering corporate accounting, direct & indirect taxation (GST), audit, corporate finance, and commercial jurisprudence. Prepares aspirants for Chartered Accountancy (CA), Company Secretary (CS), banking, and public finance careers.',
    duration: '3 Years (6 Semesters)',
    eligibility: '10+2 in Commerce/Science/Arts with min 45%',
    annualFee: '₹ 50,000/- per year',
    degree: 'Ch. Charan Singh University (CCSU Meerut)',
    curriculum: [
      'Financial Accounting',
      'Corporate Accounting & Auditing',
      'Business Regulatory Framework',
      'Direct Taxes & GST Laws',
      'Cost Accounting',
      'Business Mathematics & Statistics',
      'Money & Financial Systems',
      'E-Commerce & Cyber Law',
      'Financial Institutions & Markets',
      'Applied Corporate Project'
    ],
    careers: ['Chartered Accountancy (CA)', 'Company Secretary (CS)', 'Auditor / Tax Consultant', 'Commercial Banker', 'Corporate Accountant']
  },
  ba: {
    code: 'College Code: 478',
    title: 'Bachelor of Arts (B.A.)',
    badge: '3 Years Full-Time • CCSU Affiliated',
    desc: 'A versatile humanities and social sciences program emphasizing critical thinking, analytical reasoning, communication, and governance studies. Designed for students preparing for Civil Services (UPSC/UPPSC), public administration, research, and journalism.',
    duration: '3 Years (6 Semesters)',
    eligibility: '10+2 in any discipline with min 45%',
    annualFee: '₹ 35,000/- per year',
    degree: 'Ch. Charan Singh University (CCSU Meerut)',
    curriculum: [
      'Indian Governance & Politics',
      'Macro & Micro Economics',
      'English Literature & Communication',
      'Sociology of Development',
      'Modern Indian History',
      'Public Administration Principles',
      'Environmental Studies',
      'Research Methodology & Seminar'
    ],
    careers: ['Civil Services (UPSC / State PCS)', 'Public Policy Analyst', 'Journalism & Mass Media', 'Higher Research (M.A. / Ph.D.)', 'NGO & Social Sector']
  }
};

function initProgramTabs() {
  const tabBtns = document.querySelectorAll('.program-tab-btn');
  const detailsContainer = document.getElementById('programDetailsContainer');

  function renderProgram(programKey) {
    const p = programData[programKey];
    if (!p || !detailsContainer) return;

    detailsContainer.innerHTML = `
      <div class="program-content-card">
        <div class="program-details">
          <div class="program-badge-group">
            <span class="program-badge"><i class="fas fa-university"></i> ${p.code}</span>
            <span class="program-badge"><i class="fas fa-clock"></i> ${p.badge}</span>
            <span class="program-badge" style="background:#fef3c7; color:#92400e;"><i class="fas fa-snowflake"></i> 100% AC Classrooms</span>
          </div>

          <h3>${p.title}</h3>
          <p class="program-desc">${p.desc}</p>

          <div class="program-specs-grid">
            <div class="spec-box">
              <div class="label">Course Duration</div>
              <div class="value">${p.duration}</div>
            </div>
            <div class="spec-box">
              <div class="label">Annual Tuition Fee</div>
              <div class="value fee-highlight">${p.annualFee}</div>
            </div>
            <div class="spec-box">
              <div class="label">Eligibility Criteria</div>
              <div class="value" style="font-size:0.9rem;">${p.eligibility}</div>
            </div>
            <div class="spec-box">
              <div class="label">Awarding University</div>
              <div class="value" style="font-size:0.9rem;">${p.degree}</div>
            </div>
          </div>

          <div class="program-curriculum-list">
            <h4>Key Curriculum Subjects & Modules</h4>
            <div class="curriculum-tags">
              ${p.curriculum.map(subject => `<span class="curriculum-tag"><i class="fas fa-book-reader" style="color:var(--color-secondary);margin-right:4px;"></i> ${subject}</span>`).join('')}
            </div>
          </div>

          <div class="program-actions">
            <button class="btn-primary" onclick="openAdmissionModal('${programKey.toUpperCase()}')">
              <i class="fas fa-user-graduate"></i> Apply for ${programKey.toUpperCase()}
            </button>
            <button class="btn-syllabus" style="width:auto; padding:0.8rem 1.4rem; border:1px solid var(--color-border); background:var(--color-surface);" onclick="openSyllabusModal('${programKey}')">
              <i class="fas fa-file-pdf" style="color:#dc2626;"></i> View Syllabus Structure
            </button>
          </div>
        </div>

        <div class="program-sidebar">
          <div>
            <h4>Why Study ${programKey.toUpperCase()} at IIFCCMS?</h4>
            <ul class="sidebar-perks">
              <li><i class="fas fa-check-circle"></i> Mentored by faculty from SRCC, FMS, IIT Delhi & Columbia University.</li>
              <li><i class="fas fa-check-circle"></i> Direct access to IIF Central Library with 55,000+ volumes & global journals.</li>
              <li><i class="fas fa-check-circle"></i> Guaranteed Government University Degree from NAAC A++ CCS University.</li>
              <li><i class="fas fa-check-circle"></i> Dedicated Corporate Training, Resume Building & Campus Placement drives.</li>
              <li><i class="fas fa-check-circle"></i> Regular Personality Development & Civil Services mentorship cells.</li>
            </ul>
          </div>

          <div class="curriculum-download-box">
            <p><strong>Approved by CCSU Meerut</strong><br>Curriculum aligns with National Education Policy (NEP 2020).</p>
            <button class="btn-syllabus" onclick="downloadSyllabusScheme('${programKey}')">
              <i class="fas fa-download"></i> Download Full Scheme (HTML/PDF)
            </button>
          </div>
        </div>
      </div>
    `;
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProgram(btn.dataset.program);
    });
  });

  window.selectProgramTab = function(programKey) {
    const targetBtn = document.querySelector(`.program-tab-btn[data-program="${programKey}"]`);
    if (targetBtn) {
      targetBtn.click();
    }
  };

  // Program links in navbar dropdown
  document.querySelectorAll('[data-program-select]').forEach(el => {
    el.addEventListener('click', (e) => {
      const pKey = el.getAttribute('data-program-select');
      if (pKey) window.selectProgramTab(pKey);
    });
  });

  // Initial render
  renderProgram('bba');
}

/* Helper to download genuine syllabus scheme document */
window.downloadSyllabusScheme = function(programKey) {
  const p = programData[programKey] || programData['bba'];
  const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${p.title} - Official Syllabus Scheme | IIFCCMS</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; padding: 40px; max-width: 800px; margin: auto; }
    .header { text-align: center; border-bottom: 2px solid #0b2545; padding-bottom: 20px; margin-bottom: 25px; }
    h1 { color: #0b2545; margin: 0 0 5px 0; font-size: 22px; }
    .sub { color: #64748b; font-size: 14px; margin: 0; }
    .badge { display: inline-block; background: #c59b27; color: #fff; padding: 4px 12px; border-radius: 4px; font-weight: bold; font-size: 13px; margin-top: 10px; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 25px 0; }
    .box { background: #f8fafc; border: 1px solid #e2e8f0; padding: 15px; border-radius: 6px; }
    .label { font-size: 12px; text-transform: uppercase; color: #64748b; font-weight: bold; }
    .val { font-size: 15px; font-weight: bold; color: #0b2545; margin-top: 4px; }
    .subjects { margin-top: 25px; }
    .subject-item { background: #ffffff; border: 1px solid #cbd5e1; padding: 10px 15px; margin-bottom: 8px; border-radius: 4px; display: flex; justify-content: space-between; }
    .footer { margin-top: 40px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 15px; }
  </style>
</head>
<body>
  <div class="header">
    <h1>IIF COLLEGE OF COMMERCE & MANAGEMENT STUDIES</h1>
    <p class="sub">Affiliated to CCS University, Meerut (NAAC A++ Accredited) • Plot 45A, Knowledge Park III, Greater Noida</p>
    <span class="badge">${p.title} (${p.code})</span>
  </div>
  <div class="grid">
    <div class="box"><div class="label">Course Duration</div><div class="val">${p.duration}</div></div>
    <div class="box"><div class="label">Awarding University</div><div class="val">${p.degree}</div></div>
    <div class="box"><div class="label">Annual Approved Fee</div><div class="val">${p.annualFee}</div></div>
    <div class="box"><div class="label">Eligibility Criteria</div><div class="val">${p.eligibility}</div></div>
  </div>
  <div class="subjects">
    <h3 style="color:#0b2545; border-bottom:1px solid #cbd5e1; padding-bottom:8px;">Curriculum Paper Scheme (NEP 2020 Aligned)</h3>
    ${p.curriculum.map((sub, idx) => `<div class="subject-item"><span><strong>Paper ${idx + 1}:</strong> ${sub}</span><span style="color:#64748b; font-size:13px;">70 Theory + 30 Internal</span></div>`).join('')}
  </div>
  <div class="footer">
    Official curriculum approved by Academic Council, Chaudhary Charan Singh University, Meerut.<br>
    Downloaded from IIFCCMS Official Portal | Contact: info@iifccms.edu.in
  </div>
</body>
</html>`;
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `IIFCCMS_${programKey.toUpperCase()}_Syllabus_Scheme.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast(`${p.title} syllabus scheme downloaded successfully!`, 'success');
};

/* ==========================================================================
   4. INTERACTIVE FEE & MERIT SCHOLARSHIP CALCULATOR
   ========================================================================== */
function initFeeCalculator() {
  const courseSelect = document.getElementById('calcCourse');
  const scoreSlider = document.getElementById('calcScore');
  const scoreValDisplay = document.getElementById('calcScoreVal');

  const baseFeeDisplay = document.getElementById('calcBaseFee');
  const waiverTierDisplay = document.getElementById('calcWaiverTier');
  const waiverAmtDisplay = document.getElementById('calcWaiverAmt');
  const netFeeDisplay = document.getElementById('calcNetFee');
  const semInstallmentDisplay = document.getElementById('calcSemInstallment');

  const fees = {
    bba: 80000,
    bcom: 50000,
    ba: 35000
  };

  function calculate() {
    if (!courseSelect || !scoreSlider) return;
    const selectedCourse = courseSelect.value;
    const score = parseInt(scoreSlider.value, 10);
    scoreValDisplay.textContent = `${score}%`;

    const base = fees[selectedCourse] || 80000;
    let waiverPercent = 0;
    let waiverTier = 'Standard Merit (No Waiver)';

    if (score >= 90) {
      waiverPercent = 25;
      waiverTier = 'Tier 1: Jyoti Foundation Excellence (25% Waiver)';
    } else if (score >= 80) {
      waiverPercent = 15;
      waiverTier = 'Tier 2: High Achiever Merit (15% Waiver)';
    } else if (score >= 70) {
      waiverPercent = 10;
      waiverTier = 'Tier 3: Early Bird Academic Merit (10% Waiver)';
    }

    const waiverAmount = Math.round((base * waiverPercent) / 100);
    const netAnnual = base - waiverAmount;
    const semInstallment = Math.round(netAnnual / 2);

    baseFeeDisplay.textContent = `₹ ${base.toLocaleString('en-IN')}/-`;
    waiverTierDisplay.textContent = waiverTier;
    waiverAmtDisplay.textContent = `- ₹ ${waiverAmount.toLocaleString('en-IN')}/- (${waiverPercent}%)`;
    netFeeDisplay.textContent = `₹ ${netAnnual.toLocaleString('en-IN')}/-`;
    semInstallmentDisplay.textContent = `₹ ${semInstallment.toLocaleString('en-IN')}/- per semester`;
  }

  if (courseSelect && scoreSlider) {
    courseSelect.addEventListener('change', calculate);
    scoreSlider.addEventListener('input', calculate);
    calculate();
  }
}

/* ==========================================================================
   5. CAMPUS INFRASTRUCTURE GALLERY FILTER
   ========================================================================== */
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.gallery-btn');
  const cards = document.querySelectorAll('.infra-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ==========================================================================
   6. NOTICE BOARD SEARCH & FILTER
   ========================================================================== */
function initNoticeBoard() {
  const searchInput = document.getElementById('noticeSearchInput');
  const noticeItems = document.querySelectorAll('.notice-item');

  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    noticeItems.forEach(item => {
      const text = item.innerText.toLowerCase();
      if (text.includes(query)) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  });
}

/* ==========================================================================
   7. ADMISSION APPLICATION MULTI-STEP MODAL
   ========================================================================== */
function initAdmissionModal() {
  const modal = document.getElementById('admissionModal');
  const openBtns = document.querySelectorAll('.trigger-admission-modal');
  const closeBtn = document.getElementById('closeAdmissionModal');

  const stepViews = document.querySelectorAll('.app-step-view');
  const stepDots = document.querySelectorAll('.step-dot');
  let currentStep = 1;

  window.openAdmissionModal = function(preferredCourse = 'BBA') {
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      const courseSelect = document.getElementById('appCourse');
      if (courseSelect && preferredCourse) {
        courseSelect.value = preferredCourse.toUpperCase();
      }
      goToStep(1);
    }
  };

  window.closeAdmissionModal = function() {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  };

  if (closeBtn) closeBtn.addEventListener('click', window.closeAdmissionModal);

  openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      window.openAdmissionModal(btn.dataset.course || 'BBA');
    });
  });

  // Step Navigation
  function goToStep(step) {
    currentStep = step;
    stepViews.forEach((view, idx) => {
      view.classList.toggle('active', (idx + 1) === step);
    });
    stepDots.forEach((dot, idx) => {
      dot.classList.toggle('active', (idx + 1) === step);
      dot.classList.toggle('done', (idx + 1) < step);
    });
  }

  window.nextAdmissionStep = function(fromStep) {
    if (fromStep === 1) {
      const name = document.getElementById('appName').value.trim();
      const phone = document.getElementById('appPhone').value.trim();
      const email = document.getElementById('appEmail').value.trim();

      if (!name || !phone || !email) {
        showToast('Please fill in your name, mobile number and email.', 'warning');
        return;
      }
      goToStep(2);
    } else if (fromStep === 2) {
      const course = document.getElementById('appCourse').value;
      const score = document.getElementById('appScore').value;

      if (!score || score < 33 || score > 100) {
        showToast('Please provide a valid 10+2 percentage score (33-100%).', 'warning');
        return;
      }

      // Populate summary in Step 3
      document.getElementById('summaryName').textContent = document.getElementById('appName').value;
      document.getElementById('summaryPhone').textContent = document.getElementById('appPhone').value;
      document.getElementById('summaryEmail').textContent = document.getElementById('appEmail').value;
      document.getElementById('summaryCourse').textContent = course;
      document.getElementById('summaryScore').textContent = `${score}%`;

      goToStep(3);
    }
  };

  window.prevAdmissionStep = function(toStep) {
    goToStep(toStep);
  };

  window.submitAdmissionApplication = function() {
    const agree = document.getElementById('appAgreeCheck');
    if (agree && !agree.checked) {
      showToast('Please accept the declaration to proceed.', 'warning');
      return;
    }

    const regId = 'IIFCCMS-' + Math.floor(1000 + Math.random() * 9000);
    const candidateName = document.getElementById('appName').value;
    const selectedCourse = document.getElementById('appCourse').value;

    const slipContainer = document.getElementById('receiptContainer');
    if (slipContainer) {
      slipContainer.innerHTML = `
        <div class="printable-receipt" style="border:2px solid var(--color-primary); padding:2rem; border-radius:12px; background:#fff; margin-top:1rem;">
          <div style="text-align:center; border-bottom:2px solid #e2e8f0; padding-bottom:1rem; margin-bottom:1.5rem;">
            <h3 style="font-family:var(--font-heading); color:var(--color-primary); font-size:1.35rem; margin-bottom:4px;">IIF COLLEGE OF COMMERCE & MANAGEMENT STUDIES</h3>
            <p style="font-size:0.8rem; color:#64748b; margin:0;">Affiliated to CCS University, Meerut (NAAC A++ Accredited) | Plot 45A, Knowledge Park III, Greater Noida</p>
            <div style="margin-top:8px;"><span class="badge-naac"><i class="fas fa-check-circle"></i> PROVISIONAL REGISTRATION ACKNOWLEDGEMENT</span></div>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.25rem; font-size:0.9rem; margin-bottom:1.5rem;">
            <div><span style="color:#64748b; font-size:0.75rem; text-transform:uppercase; font-weight:700; display:block;">Application ID</span><strong>${regId}</strong></div>
            <div><span style="color:#64748b; font-size:0.75rem; text-transform:uppercase; font-weight:700; display:block;">Application Date</span><strong>${new Date().toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' })}</strong></div>
            <div><span style="color:#64748b; font-size:0.75rem; text-transform:uppercase; font-weight:700; display:block;">Applicant Name</span><strong>${candidateName}</strong></div>
            <div><span style="color:#64748b; font-size:0.75rem; text-transform:uppercase; font-weight:700; display:block;">Program Applied</span><strong style="color:var(--color-primary);">${selectedCourse}</strong></div>
            <div><span style="color:#64748b; font-size:0.75rem; text-transform:uppercase; font-weight:700; display:block;">Contact Mobile</span><strong>${document.getElementById('appPhone').value}</strong></div>
            <div><span style="color:#64748b; font-size:0.75rem; text-transform:uppercase; font-weight:700; display:block;">Email</span><strong>${document.getElementById('appEmail').value}</strong></div>
          </div>

          <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:6px; padding:1rem; font-size:0.82rem; color:#334155; margin-bottom:1.5rem;">
            <strong>Next Steps:</strong> Please visit the Admission Office at 45A Knowledge Park III, Greater Noida along with original 10th & 12th Marksheets, Transfer Certificate, and 4 passport size photographs for document verification within 7 working days.
          </div>

          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem;">
            <button class="btn-primary" onclick="window.print()"><i class="fas fa-print"></i> Print / Save Acknowledgement Slip</button>
            <button class="btn-syllabus" style="width:auto; padding:0.7rem 1.2rem;" onclick="window.closeAdmissionModal()"><i class="fas fa-check"></i> Done</button>
          </div>
        </div>
      `;
    }

    goToStep(4);
    showToast(`Application successfully generated! ID: ${regId}`, 'success');
  };
}

/* ==========================================================================
   9. SYLLABUS PREVIEW MODAL
   ========================================================================== */
window.openSyllabusModal = function(programKey) {
  const p = programData[programKey] || programData['bba'];
  const modal = document.getElementById('syllabusModal');
  const title = document.getElementById('syllabusModalTitle');
  const body = document.getElementById('syllabusModalBody');

  if (!modal || !body) return;

  title.textContent = `${p.title} • Syllabus & Paper Scheme`;
  body.innerHTML = `
    <div style="margin-bottom:1.25rem;">
      <p style="font-size:0.9rem; color:#475569;">${p.desc}</p>
      <div style="margin-top:0.75rem; display:flex; gap:0.5rem; flex-wrap:wrap;">
        <span class="program-badge"><i class="fas fa-graduation-cap"></i> CCSU University Degree</span>
        <span class="program-badge"><i class="fas fa-calendar-alt"></i> 6 Semesters Scheme</span>
        <span class="program-badge"><i class="fas fa-certificate"></i> NEP 2020 Aligned</span>
      </div>
    </div>

    <h4 style="font-size:1rem; font-weight:800; color:var(--color-primary); margin-bottom:0.75rem;">Subject Syllabus Modules:</h4>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; margin-bottom:1.5rem;">
      ${p.curriculum.map((sub, i) => `
        <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:6px; padding:0.75rem; font-size:0.85rem;">
          <div style="font-size:0.7rem; color:var(--color-secondary-dark); font-weight:700;">PAPER ${i + 1}</div>
          <strong style="color:var(--color-primary);">${sub}</strong>
          <div style="font-size:0.75rem; color:#64748b; margin-top:2px;">Theory (70 Marks) + Internal Assessment (30 Marks)</div>
        </div>
      `).join('')}
    </div>

    <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid #e2e8f0; padding-top:1rem;">
      <button class="btn-primary" onclick="downloadSyllabusScheme('${programKey}')"><i class="fas fa-file-download"></i> Download Scheme (HTML/PDF)</button>
      <button class="btn-syllabus" style="width:auto; padding:0.6rem 1rem;" onclick="closeSyllabusModal()">Close</button>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeSyllabusModal = function() {
  const modal = document.getElementById('syllabusModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
};

/* ==========================================================================
   10. QUICK INQUIRY FORM
   ========================================================================== */
function initQuickInquiry() {
  const inquiryForm = document.getElementById('heroInquiryForm');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = inquiryForm.querySelector('input[type="text"]').value;
      const phone = inquiryForm.querySelector('input[type="tel"]').value;
      const course = inquiryForm.querySelector('select').value;

      if (!name || !phone) {
        showToast('Please fill in required fields.', 'warning');
        return;
      }

      showToast(`Thank you ${name}! Our Admission Officer will call you shortly regarding ${course}.`, 'success');
      inquiryForm.reset();
    });
  }

  const contactForm = document.getElementById('contactUsForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Message sent to IIFCCMS Admissions Desk. We will respond within 24 hours.', 'success');
      contactForm.reset();
    });
  }
}

/* ==========================================================================
   11. MOBILE NAVIGATION & SMOOTH SCROLL
   ========================================================================== */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      toggleBtn.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
  }
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId.startsWith('#')) return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = document.querySelector('.navbar')?.offsetHeight || 70;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ==========================================================================
   12. TOAST NOTIFICATION HELPER
   ========================================================================== */
window.showToast = function(message, type = 'info') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;

  const iconClass = type === 'success' ? 'fa-check-circle' : type === 'warning' ? 'fa-exclamation-triangle' : 'fa-info-circle';
  const iconColor = type === 'success' ? '#16a34a' : type === 'warning' ? '#ea580c' : '#0b2545';

  toast.innerHTML = `
    <i class="fas ${iconClass}" style="color:${iconColor}; font-size:1.15rem;"></i>
    <div style="flex:1;">${message}</div>
    <button onclick="this.parentElement.remove()" style="background:none; border:none; cursor:pointer; color:#94a3b8;"><i class="fas fa-times"></i></button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    if (toast.parentElement) {
      toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 400);
    }
  }, 4500);
};
