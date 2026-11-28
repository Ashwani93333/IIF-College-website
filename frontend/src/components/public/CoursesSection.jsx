import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, ArrowRight, TrendingUp, Calculator, 
  BookOpen, Clock, Sparkles, GraduationCap 
} from 'lucide-react';

import { postCardBba, postCardBcom, postCardBa } from '../../assets/assetImages';

const COURSE_PHOTOS = {
  bba: postCardBba,
  bcom: postCardBcom,
  ba: postCardBa
};

const COURSES_DATA = [
  {
    id: 1,
    key: "bba",
    shortName: "BBA",
    title: "Bachelor of Business Administration (BBA)",
    tabLabel: "Bachelor of Business Administration",
    icon: TrendingUp,
    badgeMeta: "3 Years Full-Time • CCSU Affiliated",
    acClassroom: "100% AC Classrooms",
    description: "An intensive, industry-centric undergraduate degree designed to develop managerial acumen, strategic decision-making, and entrepreneurial leadership. Equipped with modern case studies, financial analysis, marketing simulations, and guest sessions by corporate veterans.",
    duration: "3 Years (6 Semesters)",
    annualFee: 80000,
    eligibility: "10+2 with min 50% (45% for SC/ST/OBC). Final year students can apply.",
    university: "Ch. Charan Singh University (CCSU Meerut)",
    subjects: [
      "Principles of Management",
      "Financial & Cost Accounting",
      "Business Economics",
      "Marketing Management",
      "Human Resource Management",
      "Financial Management",
      "Business Law & Ethics",
      "Production & Operations",
      "Digital Business Analytics",
      "Entrepreneurship & Project Viva"
    ],
    whyPoints: [
      "Mentored by faculty from SRCC, FMS, IIT Delhi & Columbia University.",
      "Direct access to IIF Central Library with 55,000+ volumes & global journals.",
      "Guaranteed Government University Degree from NAAC A++ CCS University.",
      "Dedicated Corporate Training, Resume Building & Campus Placement drives.",
      "Regular Personality Development & Civil Services mentorship cells."
    ]
  },
  {
    id: 2,
    key: "bcom",
    shortName: "B.Com",
    title: "Bachelor of Commerce (B.Com)",
    tabLabel: "Bachelor of Commerce",
    icon: Calculator,
    badgeMeta: "3 Years Full-Time • CCSU Affiliated",
    acClassroom: "100% AC Classrooms",
    description: "The B.Com curriculum blends core accounting principles, GST and corporate taxation laws, auditing standards, and modern banking methodologies. Designed for students aspiring for CA, CS, Banking, and Corporate Financial Secretariat careers.",
    duration: "3 Years (6 Semesters)",
    annualFee: 50000,
    eligibility: "10+2 with min 50% (45% for SC/ST/OBC). Final year students can apply.",
    university: "Ch. Charan Singh University (CCSU Meerut)",
    subjects: [
      "Financial Accounting & Tally",
      "Business Regulatory Framework",
      "Microeconomics for Business",
      "Business Mathematics",
      "Corporate Accounting",
      "Company Law & Secretarial Practice",
      "Income Tax Law & Accounts",
      "Business Statistics",
      "Auditing & Corporate Governance",
      "Goods & Services Tax (GST)"
    ],
    whyPoints: [
      "CA / CS foundation integrated mentorship by practicing Chartered Accountants.",
      "Specialized hands-on corporate taxation & GST training laboratory.",
      "Direct access to IIF Central Library with 55,000+ volumes & financial databases.",
      "Internship opportunities with premier accounting & consulting firms.",
      "Seminars on stock markets, financial modeling, and corporate valuation."
    ]
  },
  {
    id: 3,
    key: "ba",
    shortName: "B.A.",
    title: "Bachelor of Arts (B.A.)",
    tabLabel: "Bachelor of Arts",
    icon: BookOpen,
    badgeMeta: "3 Years Full-Time • CCSU Affiliated",
    acClassroom: "100% AC Classrooms",
    description: "B.A. at IIFCCMS provides versatile choices in Economics, Political Science, English Literature, and History under CCSU guidelines, fostering critical analysis, civil services preparation, and intellectual breadth.",
    duration: "3 Years (6 Semesters)",
    annualFee: 35000,
    eligibility: "10+2 from recognized board in any stream with passing marks",
    university: "Ch. Charan Singh University (CCSU Meerut)",
    subjects: [
      "English Language & Communication",
      "Principles of Microeconomics",
      "Political Theory & Institutions",
      "History of Modern India",
      "Macroeconomic Analysis",
      "Public Administration",
      "Indian Government & Politics",
      "World History & Civilization",
      "Social Research Methods",
      "Environmental Ethics & Society"
    ],
    whyPoints: [
      "Dedicated Civil Services (UPSC / State PSC) foundation mentorship cell.",
      "Interactive seminars on public policy, international relations, and economic history.",
      "Focus on creative writing, debate, analytical thinking, and presentation skills.",
      "Renowned faculty mentors from Delhi University and central research institutes.",
      "Comprehensive library access with research archives and competitive exam resources."
    ]
  }
];

export default function CoursesSection() {
  const [activeCourseKey, setActiveCourseKey] = useState("bba");

  const currentCourse = COURSES_DATA.find(c => c.key === activeCourseKey) || COURSES_DATA[0];

  return (
    <section className="section course-split-section" id="programs">
      <div className="container">
        {/* Section Header (Centered Flanked Design matching benchmark) */}
        <div className="landing-section-header">
          <div className="landing-section-title-wrap">
            <h2 className="landing-section-title">Undergraduate Degree Programs (NEP 2020)</h2>
          </div>
          <p className="landing-section-subtitle">
            <span className="affiliation-highlight-badge">
              Affiliated to Chaudhary Charan Singh University, Meerut (UGC Category-1 NAAC A++)
            </span>
          </p>
        </div>

        {/* Top Program Navigation Tabs */}
        <div className="course-nav-tabs-wrapper">
          <div className="course-nav-tabs">
            {COURSES_DATA.map(course => {
              const IconComp = course.icon;
              const isActive = course.key === activeCourseKey;
              return (
                <button
                  key={course.key}
                  type="button"
                  onClick={() => setActiveCourseKey(course.key)}
                  className={`course-nav-tab-btn ${isActive ? 'active' : ''}`}
                >
                  <span className="tab-btn-icon"><IconComp size={16} /></span>
                  <span className="tab-btn-title">{course.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Master Course Showcase Split Card */}
        <div className="course-showcase-card">
          {/* Left Column: Academic Specs, Description & Subjects */}
          <div className="course-showcase-left">
            {/* Top Pill Badges */}
            <div className="course-showcase-pill-row">
              <span className="course-showcase-pill meta-pill">
                <Clock size={13} /> {currentCourse.badgeMeta}
              </span>
              <span className="course-showcase-pill ac-pill">
                <Sparkles size={13} /> {currentCourse.acClassroom}
              </span>
            </div>

            {/* Course Heading */}
            <h3 className="course-showcase-title">{currentCourse.title}</h3>

            {/* Lead Description */}
            <p className="course-showcase-desc">{currentCourse.description}</p>

            {/* Key Academic Specs 2x2 Box */}
            <div className="course-specs-grid-box">
              <div className="spec-grid-item">
                <span className="spec-grid-label">COURSE DURATION</span>
                <span className="spec-grid-val">{currentCourse.duration}</span>
              </div>
              <div className="spec-grid-item">
                <span className="spec-grid-label">ANNUAL TUITION FEE</span>
                <span className="spec-grid-val fee-val">
                  ₹ {currentCourse.annualFee.toLocaleString()}/- per year
                </span>
              </div>
              <div className="spec-grid-item">
                <span className="spec-grid-label">ELIGIBILITY CRITERIA</span>
                <span className="spec-grid-val">{currentCourse.eligibility}</span>
              </div>
              <div className="spec-grid-item">
                <span className="spec-grid-label">AWARDING UNIVERSITY</span>
                <span className="spec-grid-val">{currentCourse.university}</span>
              </div>
            </div>

            {/* Curriculum Subjects Cloud */}
            <div className="course-curriculum-block">
              <h4 className="curriculum-heading">Key Curriculum Subjects &amp; Modules</h4>
              <div className="curriculum-tag-cloud">
                {currentCourse.subjects.map((sub, i) => (
                  <span key={i} className="curriculum-tag">
                    <GraduationCap size={13} className="tag-ico" /> {sub}
                  </span>
                ))}
              </div>
            </div>

            {/* Interactive CTAs */}
            <div className="course-showcase-actions">
              <Link 
                to="/application-form"
                className="btn-course-apply"
              >
                <GraduationCap size={16} /> Apply Online
              </Link>
            </div>
          </div>

          {/* Right Column: Only Course Postcard Photo */}
          <div className="course-showcase-right">
            <div className="course-template-photo-wrapper">
              <img 
                src={COURSE_PHOTOS[currentCourse.key]} 
                alt={`${currentCourse.title} Information Template`}
                className="course-template-full-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
