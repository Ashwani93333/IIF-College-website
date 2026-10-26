/**
 * IIF College of Commerce and Management Studies (IIFCCMS)
 * Interactive Application & Campus ERP Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
  initStatsCounter();
  initProgramTabs();
  initFeeCalculator();
  initGalleryFilter();
  initNoticeBoard();
  initAdmissionModal();
  initErpPortal();
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
  let animated = false;

  function animateCounters() {
    statNumbers.forEach(counter => {
      const target = parseFloat(counter.getAttribute('data-target'));
      const isDecimal = target % 1 !== 0;
      const duration = 1800;
      const start = 0;
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutQuart
        const ease = 1 - Math.pow(1 - progress, 4);
        const current = start + (target - start) * ease;

        counter.textContent = isDecimal ? current.toFixed(2) : Math.floor(current).toLocaleString();

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          counter.textContent = isDecimal ? target.toFixed(2) : target.toLocaleString();
        }
      }

      requestAnimationFrame(update);
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        animateCounters();
      }
    });
  }, { threshold: 0.2 });

  const statsSection = document.querySelector('.stats-bar');
  if (statsSection) {
    observer.observe(statsSection);
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
            <button class="btn-syllabus" onclick="showToast('Syllabus PDF downloaded successfully!', 'success')">
              <i class="fas fa-download"></i> Download Full Scheme PDF
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

  // Initial render
  renderProgram('bba');
}

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
   7. CAMPUS ERP DEMO PORTAL (Student, Faculty & Admin Views)
   ========================================================================== */
const erpDemoData = {
  student: {
    role: 'Student Portal',
    name: 'Rahul Sharma',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
    meta: 'Roll No: 21BBA042 | BBA Sem IV | Section A',
    email: 'rahul.bba@iifccms.edu.in',
    menu: [
      { id: 'dash', label: 'Academic Dashboard', icon: 'fa-tachometer-alt' },
      { id: 'attendance', label: 'Attendance Records', icon: 'fa-calendar-check' },
      { id: 'timetable', label: 'Class Timetable', icon: 'fa-clock' },
      { id: 'fees', label: 'Fee Receipts', icon: 'fa-receipt' },
      { id: 'admitcard', label: 'CCSU Admit Card', icon: 'fa-id-card' }
    ]
  },
  faculty: {
    role: 'Faculty Portal',
    name: 'Prof. Vandana Sharma',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    meta: 'Assistant Professor | Dept of Commerce & Mgt | ID: FAC-018',
    email: 'vandana.sharma@iifccms.edu.in',
    menu: [
      { id: 'fac_dash', label: 'Faculty Overview', icon: 'fa-chart-pie' },
      { id: 'fac_attendance', label: 'Mark Class Attendance', icon: 'fa-user-check' },
      { id: 'fac_marks', label: 'Internal Assessment Entry', icon: 'fa-pen-fancy' },
      { id: 'fac_roster', label: 'Student Batch Roster', icon: 'fa-users' }
    ]
  },
  admin: {
    role: 'Administration Desk',
    name: 'Registrar Office',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    meta: 'Admissions & Academic Secretariat | Knowledge Park III',
    email: 'registrar@iifccms.edu.in',
    menu: [
      { id: 'adm_inquiries', label: 'Admission Applications', icon: 'fa-file-invoice' },
      { id: 'adm_notices', label: 'Publish Campus Notice', icon: 'fa-bullhorn' },
      { id: 'adm_stats', label: 'Institutional Metrics', icon: 'fa-university' }
    ]
  }
};

let currentErpRole = 'student';
let currentErpTab = 'dash';

function initErpPortal() {
  const roleButtons = document.querySelectorAll('.btn-demo-pill');
  const userAvatar = document.getElementById('erpUserAvatar');
  const userName = document.getElementById('erpUserName');
  const userRole = document.getElementById('erpUserRole');
  const userMeta = document.getElementById('erpUserMeta');
  const menuContainer = document.getElementById('erpMenuContainer');
  const mainView = document.getElementById('erpMainView');

  function renderRole(roleKey) {
    currentErpRole = roleKey;
    const data = erpDemoData[roleKey];
    if (!data) return;

    // Update Profile Header
    if (userAvatar) userAvatar.src = data.avatar;
    if (userName) userName.textContent = data.name;
    if (userRole) userRole.textContent = data.role;
    if (userMeta) userMeta.textContent = data.meta;

    // Render Menu Items
    if (menuContainer) {
      menuContainer.innerHTML = data.menu.map((item, idx) => `
        <li class="erp-menu-item ${idx === 0 ? 'active' : ''}" data-tab="${item.id}">
          <i class="fas ${item.icon}"></i>
          <span>${item.label}</span>
        </li>
      `).join('');

      // Add click listener to menu items
      menuContainer.querySelectorAll('.erp-menu-item').forEach(btn => {
        btn.addEventListener('click', () => {
          menuContainer.querySelectorAll('.erp-menu-item').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          renderTabView(roleKey, btn.dataset.tab);
        });
      });
    }

    // Default to first tab
    renderTabView(roleKey, data.menu[0].id);
  }

  function renderTabView(role, tabId) {
    if (!mainView) return;

    if (role === 'student') {
      if (tabId === 'dash') {
        mainView.innerHTML = `
          <div class="erp-view-header">
            <h4>Student Academic Summary • Spring 2025</h4>
            <span class="badge-naac"><i class="fas fa-check-circle"></i> Active Enrollment</span>
          </div>
          <div class="erp-stats-row">
            <div class="erp-widget-card">
              <div class="erp-widget-label">Overall Attendance</div>
              <div class="erp-widget-val" style="color:#16a34a;">88.4%</div>
              <div class="erp-progress-bar"><div class="erp-progress-fill" style="width:88.4%;"></div></div>
              <small style="color:#64748b; margin-top:4px; display:block;">Safe threshold (min. 75% required by CCSU)</small>
            </div>
            <div class="erp-widget-card">
              <div class="erp-widget-label">Cumulative CGPA</div>
              <div class="erp-widget-val" style="color:var(--color-primary);">8.42</div>
              <small style="color:#64748b; margin-top:4px; display:block;">Rank: 4th in BBA Batch 2021-24</small>
            </div>
            <div class="erp-widget-card">
              <div class="erp-widget-label">Tuition Fee Status</div>
              <div class="erp-widget-val" style="color:#15803d; font-size:1.35rem;"><i class="fas fa-check-circle"></i> Cleared</div>
              <small style="color:#64748b; margin-top:4px; display:block;">Next installment due: Nov 2025</small>
            </div>
          </div>

          <h5 style="margin-top:1.5rem; font-size:1rem; color:var(--color-primary);">Current Semester Course Papers & Internal Marks</h5>
          <table class="erp-table">
            <thead>
              <tr>
                <th>Subject Code</th>
                <th>Subject Title</th>
                <th>Attendance</th>
                <th>Mid-Term (20)</th>
                <th>Assignment (10)</th>
                <th>Total Internal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>BBA-401</strong></td>
                <td>Financial Management</td>
                <td><span class="status-badge present">92%</span></td>
                <td>18/20</td>
                <td>9/10</td>
                <td><strong>27/30</strong></td>
              </tr>
              <tr>
                <td><strong>BBA-402</strong></td>
                <td>Human Resource Management</td>
                <td><span class="status-badge present">86%</span></td>
                <td>17/20</td>
                <td>8.5/10</td>
                <td><strong>25.5/30</strong></td>
              </tr>
              <tr>
                <td><strong>BBA-403</strong></td>
                <td>Business Research Methods</td>
                <td><span class="status-badge present">88%</span></td>
                <td>16/20</td>
                <td>9/10</td>
                <td><strong>25/30</strong></td>
              </tr>
              <tr>
                <td><strong>BBA-404</strong></td>
                <td>Operations Management</td>
                <td><span class="status-badge present">85%</span></td>
                <td>19/20</td>
                <td>9/10</td>
                <td><strong>28/30</strong></td>
              </tr>
            </tbody>
          </table>
        `;
      } else if (tabId === 'attendance') {
        mainView.innerHTML = `
          <div class="erp-view-header">
            <h4>Detailed Subject-wise Attendance</h4>
            <button class="btn-syllabus" style="width:auto; padding:0.4rem 0.8rem;" onclick="showToast('Attendance report exported to PDF!', 'success')"><i class="fas fa-file-export"></i> Export Report</button>
          </div>
          <table class="erp-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Conducted</th>
                <th>Attended</th>
                <th>Percentage</th>
                <th>Eligibility Status</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Financial Management</td><td>48</td><td>44</td><td><strong>91.6%</strong></td><td><span class="status-badge paid">Eligible for Exam</span></td></tr>
              <tr><td>Human Resource Management</td><td>42</td><td>36</td><td><strong>85.7%</strong></td><td><span class="status-badge paid">Eligible for Exam</span></td></tr>
              <tr><td>Business Research Methods</td><td>44</td><td>39</td><td><strong>88.6%</strong></td><td><span class="status-badge paid">Eligible for Exam</span></td></tr>
              <tr><td>Operations Management</td><td>40</td><td>34</td><td><strong>85.0%</strong></td><td><span class="status-badge paid">Eligible for Exam</span></td></tr>
              <tr><td>Income Tax Laws</td><td>46</td><td>43</td><td><strong>93.4%</strong></td><td><span class="status-badge paid">Eligible for Exam</span></td></tr>
            </tbody>
          </table>
        `;
      } else if (tabId === 'timetable') {
        mainView.innerHTML = `
          <div class="erp-view-header">
            <h4>Weekly Class Timetable (All Rooms 100% Air Conditioned)</h4>
            <span style="font-size:0.8rem; color:#64748b;">Academic Year 2024-25</span>
          </div>
          <table class="erp-table">
            <thead>
              <tr><th>Day</th><th>09:30 - 10:30 AM</th><th>10:30 - 11:30 AM</th><th>11:30 - 12:30 PM</th><th>01:15 - 02:15 PM</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Monday</strong></td><td>Financial Mgt (Room AC-201)</td><td>HRM (Room AC-201)</td><td>Business Economics (AC-104)</td><td>Computer Lab Session</td></tr>
              <tr><td><strong>Tuesday</strong></td><td>Operations Mgt (Room AC-201)</td><td>Taxation Laws (Room AC-201)</td><td>Business Comm (AC-201)</td><td>Library Self Study</td></tr>
              <tr><td><strong>Wednesday</strong></td><td>Financial Mgt (Room AC-201)</td><td>Business Research (Lab 2)</td><td>Corporate Seminar</td><td>Personality Dev Session</td></tr>
              <tr><td><strong>Thursday</strong></td><td>Operations Mgt (Room AC-201)</td><td>HRM (Room AC-201)</td><td>Cost Accounting (AC-201)</td><td>Sports / Extracurricular</td></tr>
              <tr><td><strong>Friday</strong></td><td>Guest Lecture / Industry Expert</td><td>Financial Mgt (Room AC-201)</td><td>Viva Prep (Room AC-201)</td><td>Weekly Quiz & Doubt Class</td></tr>
            </tbody>
          </table>
        `;
      } else if (tabId === 'fees') {
        mainView.innerHTML = `
          <div class="erp-view-header">
            <h4>Fee Payment Ledger & Downloadable Official Receipts</h4>
          </div>
          <table class="erp-table">
            <thead>
              <tr><th>Receipt No.</th><th>Academic Term</th><th>Amount</th><th>Payment Date</th><th>Mode</th><th>Action</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>IIF/REC/2024/0981</strong></td>
                <td>Year 2 (Sem III & IV)</td>
                <td>₹ 80,000/-</td>
                <td>12 Aug 2024</td>
                <td>Online Net Banking</td>
                <td><button class="btn-syllabus" style="width:auto; padding:0.3rem 0.6rem; font-size:0.75rem;" onclick="showToast('Downloading Official Fee Receipt IIF-0981...', 'success')"><i class="fas fa-file-pdf"></i> Download</button></td>
              </tr>
              <tr>
                <td><strong>IIF/REC/2023/0412</strong></td>
                <td>Year 1 (Sem I & II)</td>
                <td>₹ 80,000/-</td>
                <td>18 Jul 2023</td>
                <td>HDFC Bank Gateway</td>
                <td><button class="btn-syllabus" style="width:auto; padding:0.3rem 0.6rem; font-size:0.75rem;" onclick="showToast('Downloading Official Fee Receipt IIF-0412...', 'success')"><i class="fas fa-file-pdf"></i> Download</button></td>
              </tr>
            </tbody>
          </table>
        `;
      } else if (tabId === 'admitcard') {
        mainView.innerHTML = `
          <div class="erp-view-header">
            <h4>CCSU Meerut Semester Examination Admit Card</h4>
            <button class="btn-primary" style="padding:0.4rem 0.9rem; font-size:0.8rem;" onclick="window.print()"><i class="fas fa-print"></i> Print Admit Card</button>
          </div>
          <div style="border:2px solid var(--color-primary); padding:1.5rem; border-radius:8px; background:#fff;">
            <div style="display:flex; justify-content:space-between; border-bottom:2px solid #e2e8f0; padding-bottom:1rem; margin-bottom:1rem;">
              <div>
                <h4 style="color:var(--color-primary); font-size:1.1rem; margin:0;">Chaudhary Charan Singh University, Meerut</h4>
                <p style="margin:2px 0 0 0; font-size:0.8rem; color:#64748b;">Examination Center: IIF College of Commerce & Management Studies (Code 454)</p>
              </div>
              <span class="badge-naac">VERIFIED FOR EXAM</span>
            </div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; font-size:0.85rem;">
              <div><strong>Student Name:</strong> Rahul Sharma</div>
              <div><strong>Roll Number:</strong> 21BBA042</div>
              <div><strong>Father Name:</strong> Sh. Rajesh Sharma</div>
              <div><strong>Course:</strong> BBA Semester IV (Regular)</div>
              <div><strong>Exam Center:</strong> 45A Knowledge Park III, Greater Noida</div>
              <div><strong>Status:</strong> Approved by University Examination Cell</div>
            </div>
          </div>
        `;
      }
    } else if (role === 'faculty') {
      if (tabId === 'fac_dash') {
        mainView.innerHTML = `
          <div class="erp-view-header">
            <h4>Faculty Teaching Portfolio & Quick Actions</h4>
            <span class="badge-naac">Spring Semester 2025</span>
          </div>
          <div class="erp-stats-row">
            <div class="erp-widget-card">
              <div class="erp-widget-label">Assigned Courses</div>
              <div class="erp-widget-val">2 Courses</div>
              <small style="color:#64748b;">Financial Mgt (BBA) & Corporate Tax (B.Com)</small>
            </div>
            <div class="erp-widget-card">
              <div class="erp-widget-label">Total Students</div>
              <div class="erp-widget-val">114 Students</div>
              <small style="color:#64748b;">BBA Sec A & B.Com Sec A</small>
            </div>
            <div class="erp-widget-card">
              <div class="erp-widget-label">Lectures Conducted</div>
              <div class="erp-widget-val" style="color:#16a34a;">48 / 52</div>
              <small style="color:#64748b;">92.3% Syllabus Completed</small>
            </div>
          </div>
          <h5 style="margin-top:1.5rem; font-size:1rem; color:var(--color-primary);">Upcoming Faculty Schedule Today</h5>
          <table class="erp-table">
            <thead>
              <tr><th>Time</th><th>Class</th><th>Topic</th><th>Venue</th><th>Action</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>10:30 AM</td>
                <td>BBA IV Sem</td>
                <td>Capital Budgeting & NPV Methods</td>
                <td>AC Lecture Hall 201</td>
                <td><button class="btn-syllabus" style="width:auto; padding:0.25rem 0.6rem; font-size:0.75rem;" onclick="showToast('Attendance window opened for Hall 201', 'success')">Open Register</button></td>
              </tr>
              <tr>
                <td>01:15 PM</td>
                <td>B.Com II Sem</td>
                <td>GST Input Tax Credit Rules</td>
                <td>AC Lecture Hall 102</td>
                <td><button class="btn-syllabus" style="width:auto; padding:0.25rem 0.6rem; font-size:0.75rem;" onclick="showToast('Class material uploaded to student portal', 'success')">Upload Notes</button></td>
              </tr>
            </tbody>
          </table>
        `;
      } else if (tabId === 'fac_attendance') {
        mainView.innerHTML = `
          <div class="erp-view-header">
            <h4>Daily Attendance Marker • BBA IV Sem (Room AC-201)</h4>
            <button class="btn-primary" style="padding:0.4rem 0.8rem; font-size:0.8rem;" onclick="showToast('Today attendance saved and synced to CCSU database!', 'success')"><i class="fas fa-save"></i> Save Attendance</button>
          </div>
          <table class="erp-table">
            <thead>
              <tr><th>Roll No</th><th>Student Name</th><th>Attendance Status</th><th>Remarks</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>21BBA001</strong></td>
                <td>Aakash Verma</td>
                <td><button class="status-badge paid" onclick="toggleAtt(this)">Present (P)</button></td>
                <td>On time</td>
              </tr>
              <tr>
                <td><strong>21BBA002</strong></td>
                <td>Ananya Srivastava</td>
                <td><button class="status-badge paid" onclick="toggleAtt(this)">Present (P)</button></td>
                <td>On time</td>
              </tr>
              <tr>
                <td><strong>21BBA003</strong></td>
                <td>Arjun Rathore</td>
                <td><button class="status-badge" style="background:#fee2e2; color:#b91c1c;" onclick="toggleAtt(this)">Absent (A)</button></td>
                <td>Medical leave requested</td>
              </tr>
              <tr>
                <td><strong>21BBA042</strong></td>
                <td>Rahul Sharma</td>
                <td><button class="status-badge paid" onclick="toggleAtt(this)">Present (P)</button></td>
                <td>Active in discussion</td>
              </tr>
            </tbody>
          </table>
        `;
      } else {
        mainView.innerHTML = `
          <div class="erp-view-header">
            <h4>Internal Assessment Marks Submission</h4>
            <button class="btn-syllabus" style="width:auto; padding:0.4rem 0.8rem;" onclick="showToast('Marks submitted to Examination Office!', 'success')"><i class="fas fa-check"></i> Submit to CCSU</button>
          </div>
          <p style="font-size:0.85rem; color:#64748b; margin-bottom:1rem;">Final internal assessment out of 30 marks (20 Mid-term + 10 Attendance & Assignments).</p>
          <table class="erp-table">
            <thead><tr><th>Roll</th><th>Name</th><th>Mid-Term (20)</th><th>Assignment (10)</th><th>Final Marks</th></tr></thead>
            <tbody>
              <tr><td>21BBA001</td><td>Aakash Verma</td><td><input type="number" value="17" style="width:50px; padding:2px;" /></td><td><input type="number" value="8" style="width:50px; padding:2px;" /></td><td><strong>25 / 30</strong></td></tr>
              <tr><td>21BBA042</td><td>Rahul Sharma</td><td><input type="number" value="19" style="width:50px; padding:2px;" /></td><td><input type="number" value="9" style="width:50px; padding:2px;" /></td><td><strong>28 / 30</strong></td></tr>
            </tbody>
          </table>
        `;
      }
    } else if (role === 'admin') {
      mainView.innerHTML = `
        <div class="erp-view-header">
          <h4>Admissions 2025-2026 Secretariat Desk</h4>
          <span class="badge-naac">Academic Year 2025-26</span>
        </div>
        <div class="erp-stats-row">
          <div class="erp-widget-card">
            <div class="erp-widget-label">New Applications Today</div>
            <div class="erp-widget-val" style="color:var(--color-primary);">14 Leads</div>
            <small style="color:#64748b;">Direct merit inquiries</small>
          </div>
          <div class="erp-widget-card">
            <div class="erp-widget-label">BBA Seats Booked</div>
            <div class="erp-widget-val" style="color:#15803d;">84 / 120</div>
            <small style="color:#64748b;">70% Capacity Full</small>
          </div>
          <div class="erp-widget-card">
            <div class="erp-widget-label">B.Com Seats Booked</div>
            <div class="erp-widget-val" style="color:#15803d;">92 / 120</div>
            <small style="color:#64748b;">76% Capacity Full</small>
          </div>
        </div>
        <h5 style="margin-top:1.5rem; font-size:1rem; color:var(--color-primary);">Recent Candidate Online Inquiries</h5>
        <table class="erp-table">
          <thead>
            <tr><th>App ID</th><th>Candidate Name</th><th>Course</th><th>12th %</th><th>Contact</th><th>Action</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>IIFCCMS-7841</strong></td>
              <td>Priya Chawla</td>
              <td>BBA (Code 454)</td>
              <td>88.6% (Merit)</td>
              <td>+91 98112XXXXX</td>
              <td><span class="status-badge paid">Document Verified</span></td>
            </tr>
            <tr>
              <td><strong>IIFCCMS-7842</strong></td>
              <td>Aman Preet Singh</td>
              <td>B.Com (Code 472)</td>
              <td>82.4%</td>
              <td>+91 99531XXXXX</td>
              <td><button class="btn-syllabus" style="width:auto; padding:0.2rem 0.5rem; font-size:0.75rem;" onclick="showToast('Admission offer sent via SMS & Email!', 'success')">Issue Offer</button></td>
            </tr>
            <tr>
              <td><strong>IIFCCMS-7843</strong></td>
              <td>Rohan Malhotra</td>
              <td>BBA (Code 454)</td>
              <td>79.0%</td>
              <td>+91 98710XXXXX</td>
              <td><button class="btn-syllabus" style="width:auto; padding:0.2rem 0.5rem; font-size:0.75rem;" onclick="showToast('Candidate contacted for counseling session.', 'success')">Schedule Counseling</button></td>
            </tr>
          </tbody>
        </table>
      `;
    }
  }

  // Bind role switcher buttons
  roleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      roleButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderRole(btn.dataset.role);
    });
  });

  // Initial load
  renderRole('student');
}

// Global helper to toggle attendance button status in faculty view
window.toggleAtt = function(btn) {
  if (btn.innerText.includes('Present')) {
    btn.innerText = 'Absent (A)';
    btn.style.background = '#fee2e2';
    btn.style.color = '#b91c1c';
  } else {
    btn.innerText = 'Present (P)';
    btn.style.background = '#dcfce7';
    btn.style.color = '#15803d';
  }
};

/* ==========================================================================
   8. ADMISSION APPLICATION MULTI-STEP MODAL
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
      <button class="btn-primary" onclick="showToast('Official CCSU Syllabus PDF Downloaded!', 'success')"><i class="fas fa-file-download"></i> Download Full Scheme PDF</button>
      <button class="btn-syllabus" style="width:auto; padding:0.6rem 1rem;" onclick="document.getElementById('syllabusModal').classList.remove('active'); document.body.style.overflow='auto';">Close</button>
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
