// Mock Initial Data for IIFCCMS College Portal & Admin Panel
import {
  facChairman,
  facRkAgarwal,
  facDeepakBansal,
  facManjuAgarwal,
  facPadmaMishra,
  facUmangGupta,
  facGouthamSandilya,
  infraMainBuilding,
  library1,
  infraClassroom,
  infraComputerCentre,
  imgPgCulturalEvents,
  imgPgGraduates,
  banner1,
  banner2,
  banner3,
  banner4,
  bannerPresidentVisit,
  student1,
  student3,
  student5,
  student7,
  student10,
  student12,
  student15,
  student20,
  mcPhoto,
  imgPgDignitaryMeeting,
  imgPgFacultyCouncil,
  imgPgAcademicMOU,
  imgPgConclaveStage,
  media1,
  media2,
  media3,
  media4,
  media5,
  media7
} from '../assets/assetImages';

export const INITIAL_SETTINGS = {
  collegeName: "IIF College of Commerce and Management Studies",
  shortName: "IIFCCMS",
  parentTrust: "Indian Institute of Finance (Estd. 1987)",
  affiliatedUniversity: "Chaudhary Charan Singh University, Meerut (NAAC A++ Accredited)",
  campusAddress: "Plot No. 45A, Knowledge Park III, Greater Noida, Delhi NCR - 201310",
  phonePrimary: "+91 98119 71002",
  phoneSecondary: "+91 98115 37057",
  emailGeneral: "info@iifccms.edu.in",
  emailAdmissions: "admission@iifccms.edu.in",
  antiRaggingHelpline: "1800-180-5522 / +91 98119 71002",
  ccsuPortalUrl: "https://www.ccsuniversity.ac.in",
  announcementTicker: "📢 Admissions Open (BBA / B.Com / B.A.) | Up to 25% Institutional Merit Scholarships | 100% Air-Conditioned Knowledge Park III Campus | Direct Helpline: +91 98119 71002"
};

export const INITIAL_COURSES = [
  {
    id: 1,
    code: "BBA",
    title: "Bachelor of Business Administration (BBA)",
    degree: "Undergraduate (3 Years / 6 Semesters)",
    collegeCode: "",
    eligibility: "50% for General (45% for SC/ST/OBC) in 12th Class. Final Year Students can Apply.",
    seatIntake: 60,
    annualFee: 80000,
    perSemesterFee: 40000,
    examFee: 4500,
    isAdmissionsOpen: true,
    syllabusUrl: "#",
    tagline: "Premier Management Education with Corporate Internship Tracks",
    description: "The BBA program at IIFCCMS is meticulously designed under CCSU Meerut guidelines and aligned with NEP 2020. Students develop managerial acumen, financial modeling skills, entrepreneurial leadership, and practical case-study problem solving on our 6.47-acre campus.",
    careerScope: ["Corporate Management Trainee", "Financial Analyst", "Business Development Executive", "Digital Marketing Specialist", "Higher Studies (MBA / PGDM)"],
    semesters: [
      {
        sem: 1,
        subjects: [
          { code: "BBA-101", name: "Principles of Management", type: "Core" },
          { code: "BBA-102", name: "Business Economics", type: "Core" },
          { code: "BBA-103", name: "Financial Accounting", type: "Core" },
          { code: "BBA-104", name: "Business Communication & Soft Skills", type: "Ability Enhancement" },
          { code: "BBA-105", name: "Computer Applications in Business", type: "Practical" }
        ]
      },
      {
        sem: 2,
        subjects: [
          { code: "BBA-201", name: "Organizational Behavior", type: "Core" },
          { code: "BBA-202", name: "Business Environment", type: "Core" },
          { code: "BBA-203", name: "Business Statistics", type: "Core" },
          { code: "BBA-204", name: "Cost Accounting", type: "Core" },
          { code: "BBA-205", name: "Environmental Studies", type: "Value Added" }
        ]
      },
      {
        sem: 3,
        subjects: [
          { code: "BBA-301", name: "Marketing Management", type: "Core" },
          { code: "BBA-302", name: "Financial Management", type: "Core" },
          { code: "BBA-303", name: "Human Resource Management", type: "Core" },
          { code: "BBA-304", name: "Business Law", type: "Core" },
          { code: "BBA-305", name: "Summer Internship Project - I", type: "Practical / Viva" }
        ]
      }
    ]
  },
  {
    id: 2,
    code: "B.Com",
    title: "Bachelor of Commerce (B.Com)",
    degree: "Undergraduate (3 Years / 6 Semesters)",
    collegeCode: "",
    eligibility: "50% for General (45% for SC/ST/OBC) in 12th Class. Final Year Students can Apply.",
    seatIntake: 80,
    annualFee: 50000,
    perSemesterFee: 25000,
    examFee: 4000,
    isAdmissionsOpen: true,
    syllabusUrl: "#",
    tagline: "Rigorous Accounting, Taxation & Corporate Finance Foundation",
    description: "The B.Com curriculum blends core accounting principles, GST and taxation laws, corporate reporting, and modern banking methodologies. Designed for students aspiring for CA, CS, Banking, and Corporate Financial Secretariat careers.",
    careerScope: ["Accountant & Tax Consultant", "Banking Associate", "Financial Audit Assistant", "Stock Market / Investment Analyst", "CA/CS Professional Foundation"],
    semesters: [
      {
        sem: 1,
        subjects: [
          { code: "BC-101", name: "Financial Accounting & Tally", type: "Core" },
          { code: "BC-102", name: "Business Regulatory Framework", type: "Core" },
          { code: "BC-103", name: "Microeconomics for Business", type: "Core" },
          { code: "BC-104", name: "Business Mathematics", type: "Core" }
        ]
      },
      {
        sem: 2,
        subjects: [
          { code: "BC-201", name: "Corporate Accounting", type: "Core" },
          { code: "BC-202", name: "Company Law & Secretarial Practice", type: "Core" },
          { code: "BC-203", name: "Income Tax Law & Accounts", type: "Core" },
          { code: "BC-204", name: "Business Statistics", type: "Core" }
        ]
      }
    ]
  },
  {
    id: 3,
    code: "B.A.",
    title: "Bachelor of Arts (B.A.)",
    degree: "Undergraduate (3 Years / 6 Semesters)",
    collegeCode: "",
    eligibility: "10+2 from recognized secondary board in any stream with passing marks.",
    seatIntake: 120,
    annualFee: 35000,
    perSemesterFee: 17500,
    examFee: 3500,
    isAdmissionsOpen: true,
    syllabusUrl: "#",
    tagline: "Broad-Based Humanities, Civil Services & Social Science Foundation",
    description: "B.A. at IIFCCMS provides versatile choices in Economics, Political Science, English Literature, and History under CCSU guidelines, fostering critical analysis, civil services preparation, and intellectual breadth.",
    careerScope: ["Civil Services & Public Administration", "Content Writing & Journalism", "Public Relations Officer", "Social Work & Policy Research", "Higher Academics (M.A. / B.Ed)"],
    semesters: [
      {
        sem: 1,
        subjects: [
          { code: "BA-101", name: "English Language & Communication", type: "Core" },
          { code: "BA-102", name: "Principles of Microeconomics", type: "Elective" },
          { code: "BA-103", name: "Political Theory & Institutions", type: "Elective" },
          { code: "BA-104", name: "History of Modern India", type: "Elective" }
        ]
      }
    ]
  }
];

export const INITIAL_NOTICES = [
  {
    id: 1,
    title: "CCSU Odd Semester 2026 Examination Schedule & Form Submission Notice",
    slug: "ccsu-odd-semester-2026-exam-schedule",
    category: "Examination",
    publishDate: "2026-11-20",
    content: "Chaudhary Charan Singh University (CCSU) Meerut has officially released the schedule for Odd Semester Examination Form submission. All enrolled BBA, B.Com, and B.A. students must complete online form filling and submit hard copies to the college secretariat before the notified deadline.",
    isPinned: true,
    isActive: true,
    attachmentUrl: "https://www.ccsuniversity.ac.in",
    attachmentLabel: "Official Circular PDF"
  },
  {
    id: 2,
    title: "Admissions Open under Institutional Merit Scholarships",
    slug: "admissions-open-merit-scholarships",
    category: "Admission",
    publishDate: "2026-11-18",
    content: "Provisional admissions for BBA, B.Com, and B.A. are now open. Merit scholarship concessions up to 25% on annual tuition fees are available for meritorious candidates securing above 85% in Class 12th board examinations.",
    isPinned: true,
    isActive: true,
    attachmentUrl: "#admissions",
    attachmentLabel: "Apply Online Slip"
  },
  {
    id: 3,
    title: "National Conference on AI in Corporate Finance & Governance (NC-AICFG 2026)",
    slug: "national-conference-ai-corporate-finance",
    category: "Academic",
    publishDate: "2026-11-12",
    content: "The Department of Management Studies invites research papers from academicians, scholars, and industry leaders for the upcoming National Conference scheduled in December 2026 at the Main Auditorium, Knowledge Park III campus.",
    isPinned: false,
    isActive: true,
    attachmentUrl: "#",
    attachmentLabel: "Brochure & Call for Papers"
  },
  {
    id: 4,
    title: "Campus Corporate Placement & Internship Drive 2026 - Registration Guidelines",
    slug: "campus-placement-drive-2026",
    category: "General",
    publishDate: "2026-11-08",
    content: "Final year BBA and B.Com students are notified that leading banking, fintech, and business analytics recruiters will be conducting on-campus recruitment in January 2026. Submit updated resumes to the Training and Placement Cell.",
    isPinned: false,
    isActive: true,
    attachmentUrl: "#",
    attachmentLabel: "Company List & Roles"
  },
  {
    id: 5,
    title: "Mandatory Anti-Ragging Affidavit & 24x7 Helpline Protocol",
    slug: "anti-ragging-affidavit-protocol-2026",
    category: "General",
    publishDate: "2026-10-30",
    content: "In compliance with UGC and CCSU regulations, zero-tolerance policy against ragging is strictly enforced on campus. All students and parents are required to submit the anti-ragging undertaking online.",
    isPinned: false,
    isActive: true,
    attachmentUrl: "https://www.antiragging.in",
    attachmentLabel: "UGC Anti-Ragging Portal"
  }
];

export const INITIAL_APPLICATIONS = [
  {
    id: 1,
    applicationId: "IIFCCMS-2026-7841",
    courseId: 1,
    courseCode: "BBA",
    courseTitle: "Bachelor of Business Administration (BBA)",
    fullName: "Aarav Sharma",
    gender: "Male",
    dob: "2007-04-15",
    category: "General",
    email: "aarav.sharma@example.com",
    phone: "9876543210",
    parentName: "Rajesh Sharma",
    parentPhone: "9876543211",
    address: "B-42, Sector 62, Noida, Uttar Pradesh",
    city: "Noida",
    state: "Uttar Pradesh",
    pincode: "201301",
    tenthPercentage: 88.4,
    twelfthBoard: "CBSE",
    twelfthPercentage: 89.2,
    twelfthStream: "Commerce with Maths",
    scholarshipTier: "Tier 1 (25% Tuition Waiver)",
    scholarshipPercent: 25,
    calculatedFee: 48750,
    status: "DOCS_VERIFIED",
    counselorNotes: "Class 12th marksheet verified. Eligible for 25% Institutional Merit scholarship. Invited for seat allotment on 28th Nov.",
    submittedAt: "2026-11-19 14:32"
  },
  {
    id: 2,
    applicationId: "IIFCCMS-2026-7842",
    courseId: 2,
    courseCode: "B.Com",
    courseTitle: "Bachelor of Commerce (B.Com)",
    fullName: "Sneha Patel",
    gender: "Female",
    dob: "2007-09-22",
    category: "OBC",
    email: "sneha.patel@example.com",
    phone: "9812345678",
    parentName: "Manoj Patel",
    parentPhone: "9812345679",
    address: "Flat 402, Alpha 1, Greater Noida",
    city: "Greater Noida",
    state: "Uttar Pradesh",
    pincode: "201308",
    tenthPercentage: 81.0,
    twelfthBoard: "CBSE",
    twelfthPercentage: 78.5,
    twelfthStream: "Commerce",
    scholarshipTier: "Tier 2 (15% Tuition Waiver)",
    scholarshipPercent: 15,
    calculatedFee: 38250,
    status: "UNDER_REVIEW",
    counselorNotes: "Application received. Waiting for verification of migration certificate.",
    submittedAt: "2026-11-20 11:15"
  },
  {
    id: 3,
    applicationId: "IIFCCMS-2026-7843",
    courseId: 1,
    courseCode: "BBA",
    courseTitle: "Bachelor of Business Administration (BBA)",
    fullName: "Rohan Varma",
    gender: "Male",
    dob: "2006-12-05",
    category: "General",
    email: "rohan.varma@example.com",
    phone: "9711223344",
    parentName: "Sanjay Varma",
    parentPhone: "9711223355",
    address: "House 12, Gamma 2, Greater Noida",
    city: "Greater Noida",
    state: "Uttar Pradesh",
    pincode: "201310",
    tenthPercentage: 74.5,
    twelfthBoard: "UP Board",
    twelfthPercentage: 71.2,
    twelfthStream: "Science",
    scholarshipTier: "Tier 3 (10% Tuition Waiver)",
    scholarshipPercent: 10,
    calculatedFee: 58500,
    status: "SUBMITTED",
    counselorNotes: "New application scheduled for counselor telephonic review.",
    submittedAt: "2026-11-21 09:40"
  },
  {
    id: 4,
    applicationId: "IIFCCMS-2026-7844",
    courseId: 3,
    courseCode: "B.A.",
    courseTitle: "Bachelor of Arts (B.A.)",
    fullName: "Ananya Dixit",
    gender: "Female",
    dob: "2007-02-18",
    category: "General",
    email: "ananya.dixit@example.com",
    phone: "9654123456",
    parentName: "K. K. Dixit",
    parentPhone: "9654123457",
    address: "C-14, Swarna Nagari, Greater Noida",
    city: "Greater Noida",
    state: "Uttar Pradesh",
    pincode: "201315",
    tenthPercentage: 92.0,
    twelfthBoard: "ICSE",
    twelfthPercentage: 91.5,
    twelfthStream: "Humanities",
    scholarshipTier: "Tier 1 (25% Tuition Waiver)",
    scholarshipPercent: 25,
    calculatedFee: 26250,
    counselorNotes: "Provisional seat confirmed. Awaiting payment of university registration token.",
    submittedAt: "2026-11-21 16:20"
  }
];

export const INITIAL_FACULTY = [
  {
    id: 1,
    name: "Dr. J. D. Agarwal",
    designation: "Founder Chairman & Chief Mentor",
    department: "Executive Academic Council",
    qualifications: "Ph.D. (Economics), Eminent Economist & Author",
    experience: "45+ Years",
    email: "chairman@iifccms.edu.in",
    photoUrl: facChairman,
    bio: "Pioneer in financial education in India. Founder of Indian Institute of Finance (Estd. 1987). Consulted for global bodies and central government ministries."
  },
  {
    id: 2,
    name: "Prof. Aman Agarwal",
    designation: "Professor of Finance & Director",
    department: "Department of Management Studies",
    qualifications: "Ph.D. in Finance, M.S. (USA)",
    experience: "25+ Years",
    email: "aman@iifccms.edu.in",
    photoUrl: facRkAgarwal,
    bio: "Renowned scholar in macro-finance and corporate strategy with extensive research publications in international journals of repute."
  },
  {
    id: 3,
    name: "Dr. Ritu Saxena",
    designation: "Associate Professor & HOD Commerce",
    department: "Department of Commerce",
    qualifications: "Ph.D. (Commerce), M.Com, UGC-NET",
    experience: "16+ Years",
    email: "ritu.saxena@iifccms.edu.in",
    photoUrl: facManjuAgarwal,
    bio: "Expertise in Corporate Accounting, Auditing Standards, and GST Framework. Actively mentors students for competitive commerce examinations."
  },
  {
    id: 4,
    name: "Prof. Sandeep Sharma",
    designation: "Assistant Professor - Marketing & HR",
    department: "Department of Management Studies",
    qualifications: "MBA (Marketing), UGC-NET",
    experience: "9+ Years",
    email: "sandeep.sharma@iifccms.edu.in",
    photoUrl: facDeepakBansal,
    bio: "Specializes in Consumer Behavior, Brand Strategy, and Digital Business Channels. Leads the campus corporate placement and internship cell."
  },
  {
    id: 5,
    name: "Dr. Priya Verma",
    designation: "Assistant Professor - Humanities & Economics",
    department: "Department of Arts & Humanities",
    qualifications: "Ph.D. (Economics), M.A. Economics",
    experience: "7+ Years",
    email: "priya.verma@iifccms.edu.in",
    photoUrl: facPadmaMishra,
    bio: "Focused on Development Economics, Public Finance, and NEP 2020 multidisciplinary curriculum implementation."
  }
];

export const INITIAL_GALLERY = [
  {
    id: 1,
    title: "Expansive 6.47-Acre Green Academic Campus",
    category: "Campus",
    imageUrl: infraMainBuilding,
    caption: "Lush green campus located strategically in Knowledge Park III, Greater Noida."
  },
  {
    id: 2,
    title: "IIF Central Library (55,000+ Volumes)",
    category: "Library",
    imageUrl: library1,
    caption: "State-of-the-art academic library with DELNET, EBSCO research databases, and reading hall."
  },
  {
    id: 3,
    title: "100% Air-Conditioned Smart Lecture Hall",
    category: "Campus",
    imageUrl: infraClassroom,
    caption: "Amphitheatre-style air-conditioned classrooms equipped with audio-visual smart projectors."
  },
  {
    id: 4,
    title: "Advanced Computer & Financial Analytics Lab",
    category: "Labs",
    imageUrl: infraComputerCentre,
    caption: "Gigabit fiber connected high-speed computer terminals for statistical and accounting training."
  },
  {
    id: 5,
    title: "Annual Sports Meet & Cultural Celebrations",
    category: "Sports",
    imageUrl: imgPgCulturalEvents,
    caption: "Vibrant extracurricular celebrations, athletic meets, and student talent showcases."
  },
  {
    id: 6,
    title: "Annual Convocation & Degree Distribution",
    category: "Cultural",
    imageUrl: imgPgGraduates,
    caption: "Celebrating student milestones in the presence of distinguished dignitaries and economists."
  }
];

export const INITIAL_INQUIRIES = [
  {
    id: 1,
    name: "Vikram Malhotra",
    email: "vikram.m@gmail.com",
    phone: "9820011223",
    course: "BBA",
    subject: "Hostel facility and bus transport from Delhi",
    message: "Does the college provide daily bus pick and drop from Akshardham / Mayur Vihar metro station? Also please confirm hostel charges.",
    status: "NEW",
    submittedAt: "2026-11-21 17:05"
  },
  {
    id: 2,
    name: "Meenakshi Gupta",
    email: "meenakshi.g@yahoo.com",
    phone: "9899001122",
    course: "B.Com",
    subject: "12th mark criterion for Institutional Merit scholarship",
    message: "I scored 87% in Class 12 CBSE Commerce. Am I eligible for 25% tuition fee waiver in all 3 years?",
    status: "CONTACTED",
    submittedAt: "2026-11-20 15:40"
  }
];


// 8. Hero Landing Banner Slides (Admin Point 1)
export const INITIAL_HERO_SLIDES = [
  {
    id: 1,
    bgImage: banner1,
    tag: "CAMPUS OVERVIEW",
    caption: "IIFCCMS • Greater Noida (College Code: 472)",
    order: 1,
    isActive: true
  },
  {
    id: 2,
    bgImage: banner2,
    tag: "SMART INFRASTRUCTURE",
    caption: "Expansive 6.47-Acre Lush Green Campus & Modern Academic Blocks",
    order: 2,
    isActive: true
  },
  {
    id: 3,
    bgImage: banner3,
    tag: "ACADEMIC OFFERINGS",
    caption: "Undergraduate Degree Programs • B.Com | B.B.A | B.A (NEP 2020)",
    order: 3,
    isActive: true
  },
  {
    id: 4,
    bgImage: banner4,
    tag: "CAREER LAUNCHPAD",
    caption: "Corporate Resource Centre & Marquee Industry Recruitment Partnerships",
    order: 4,
    isActive: true
  },
  {
    id: 5,
    bgImage: bannerPresidentVisit,
    tag: "GLOBAL ENGAGEMENT",
    caption: "Distinguished Academic Leadership with President of India – China Visit",
    order: 5,
    isActive: true
  }
];

// 9. Campus Highlights by Category (Admin Point 4)
export const INITIAL_HIGHLIGHTS = [
  {
    id: 1,
    category: "Students Activity",
    title: "Annual Sports & Plantation Drive",
    badge: "Students Activity",
    photoUrl: media1,
    description: "Annual intra-collegiate athletics, badminton tournaments, and student green campus tree plantation."
  },
  {
    id: 2,
    category: "Seminars",
    title: "National Economic & Finance Conclave",
    badge: "Seminars",
    photoUrl: media2,
    description: "Distinguished academic symposium addressing GST, capital markets, and corporate governance."
  },
  {
    id: 3,
    category: "Infrastructure",
    title: "6.47-Acre Modern Greater Noida Campus",
    badge: "Infrastructure",
    photoUrl: infraMainBuilding,
    description: "Strategically located campus in Knowledge Park III featuring smart lecture halls and student centres."
  },
  {
    id: 4,
    category: "Library",
    title: "Central Knowledge Resource Centre",
    badge: "Library",
    photoUrl: library1,
    description: "Rich institutional repository housing over 55,000 reference volumes, DELNET and EBSCO research access."
  },
  {
    id: 5,
    category: "Foreign Dignitary",
    title: "International Bilateral Academic Delegations",
    badge: "Foreign Dignitary",
    photoUrl: media3,
    description: "Global academic exchanges with visiting professors, international scholars, and economic leaders."
  },
  {
    id: 6,
    category: "Official Dignitary",
    title: "Union Ministers & Regulatory Board Leaders",
    badge: "Official Dignitary",
    photoUrl: media4,
    description: "Keynote addresses and convocations presided by central government officials and university mentors."
  },
  {
    id: 7,
    category: "MoU Signing",
    title: "Industry & Academic Collaboration MoUs",
    badge: "MoU Signing",
    photoUrl: media5,
    description: "Bilateral agreements signed with financial institutions and corporate partners for live training."
  }
];

// 10. Testimonials & Student Voices (Admin Point 6)
export const INITIAL_TESTIMONIALS = [
  {
    id: 1,
    category: "Student",
    name: "Yashi",
    designation: "B.Com Honors Scholar",
    tag: "Student • Academic Excellence",
    photo: student1,
    quote: "The personalized mentorship, smart finance labs, and dedicated faculty have exceeded all my academic expectations."
  },
  {
    id: 2,
    category: "Alumni",
    name: "Hemant Katyal",
    designation: "Founder Dhangaurd, Dubai",
    tag: "Alumni • FinTech Entrepreneur",
    photo: student3,
    quote: "IIFCCMS provides an exceptional learning ecosystem that instills corporate leadership and global financial acumen."
  },
  {
    id: 3,
    category: "Dignitary",
    name: "D. Sankaran",
    designation: "Head HR – Grindwell Norton (Saint-Gobain)",
    tag: "Corporate Recruiter Partner",
    photo: student5,
    quote: "We deeply appreciate the high caliber, disciplined professional conduct, and analytical rigor of IIFCCMS scholars."
  },
  {
    id: 4,
    category: "Employer",
    name: "Reshmi Menon",
    designation: "Early Talent Lead – Palo Alto",
    tag: "Corporate Talent Lead",
    photo: student7,
    quote: "Students are trained in the latest accounting and management methodologies, making them immediate industry contributors."
  },
  {
    id: 5,
    category: "Alumni",
    name: "Nitin Sharma",
    designation: "Sr. Director & Solutions Architect, USA",
    tag: "Alumni • Tech & Strategy",
    photo: student10,
    quote: "I attribute much of my international career trajectory to the sound fundamentals and research-oriented pedagogy here."
  },
  {
    id: 6,
    category: "Student",
    name: "Rohan Varma",
    designation: "BBA Final Year Scholar",
    tag: "Student • Corporate Internship Track",
    photo: student12,
    quote: "The real-world case discussions and regular corporate speaker sessions helped me secure my pre-placement offer."
  }
];

// 11. Board of Governors (Admin Point 7)
export const INITIAL_GOVERNORS = [
  {
    id: 1,
    name: "Prof. (Dr.) J. D. Agarwal",
    designation: "Founder Chairman & Chief Mentor",
    photo: facChairman,
    description: "Eminent Economist, Senior Professor of Finance, and author of over 18 academic books and 200+ research papers."
  },
  {
    id: 2,
    name: "Prof. (Dr.) Manju Agarwal",
    designation: "Senior Governor & Executive Mentor",
    photo: facManjuAgarwal,
    description: "Ph.D. from Delhi School of Economics, ITP London Business School, specialist in Monetary Economics & Banking."
  },
  {
    id: 3,
    name: "Prof. (Dr.) Sudhir K. Jain",
    designation: "Senior Academic Governor",
    photo: facUmangGupta,
    description: "Former Professor & Head, Department of Management Studies, IIT Delhi; eminent authority on managerial economics."
  },
  {
    id: 4,
    name: "Shri Ashok Kumar",
    designation: "Member, Board of Governors",
    photo: facPadmaMishra,
    description: "Senior Legal and Corporate Affairs Consultant guiding statutory governance and regulatory compliance."
  },
  {
    id: 5,
    name: "Prof. (Dr.) Aman Agarwal",
    designation: "Professor & Strategic Advisor",
    photo: facGouthamSandilya,
    description: "Senior Professor of Finance, distinguished economic researcher, and advisor to international trade organizations."
  }
];

// 12. Managing Committee (Admin Point 8)
export const INITIAL_MANAGING_COMMITTEE = [
  {
    id: 1,
    name: "Prof. (Dr.) J. D. Agarwal",
    designation: "President & Founder Chairman",
    photo: facChairman,
    description: "President of the Society & College Governing Secretariat providing institutional leadership and academic vision."
  },
  {
    id: 2,
    name: "Prof. (Dr.) Manju Agarwal",
    designation: "Vice President & Dean of Academics",
    photo: facManjuAgarwal,
    description: "Oversees multidisciplinary pedagogy, academic curriculum compliance, and student mentorship committees."
  },
  {
    id: 3,
    name: "Prof. R. K. Agarwal",
    designation: "Secretary & Financial Comptroller",
    photo: facRkAgarwal,
    description: "Fellow Chartered Accountant (FCA), FCS, overseeing institutional finances, audit standards, and statutory filings."
  },
  {
    id: 4,
    name: "Mr. Sunil Goel",
    designation: "Joint Secretary & Corporate Liaison",
    photo: facGouthamSandilya,
    description: "Managing Director of Global Hunt, driving corporate relations, campus internship opportunities, and industry MoUs."
  },
  {
    id: 5,
    name: "Prof. Deepak Bansal",
    designation: "Member Secretariat & IT Head",
    photo: facDeepakBansal,
    description: "Overseeing digital infrastructure, online portal integration, and computer lab modernizations."
  }
];

// 13. Advisory Council (Admin Point 9)
export const INITIAL_ADVISORY_COUNCIL = [
  {
    id: 1,
    name: "Dr. B. L. Maheshwari",
    designation: "Senior Academic Counselor",
    photo: facChairman,
    description: "Eminent management scholar and former Director of Center for Organization Development, Hyderabad."
  },
  {
    id: 2,
    name: "Shri T. N. Pandey",
    designation: "Former Chairman, CBDT",
    photo: facRkAgarwal,
    description: "Former Chairman of Central Board of Direct Taxes, providing expert guidance on fiscal law and taxation curricula."
  },
  {
    id: 3,
    name: "Prof. M. Rammohan Rao",
    designation: "Distinguished Academic Advisor",
    photo: facUmangGupta,
    description: "Former Director of IIM Bangalore and Dean Emeritus of Indian School of Business (ISB), Hyderabad."
  },
  {
    id: 4,
    name: "Dr. D. V. Kapoor",
    designation: "Corporate Strategy Advisor",
    photo: facPadmaMishra,
    description: "Founding Chairman of NTPC, leading industrialist advising campus innovation and corporate linkages."
  }
];

// 14. Approvals & Affiliations (Admin Point 10)
export const INITIAL_APPROVALS = [
  {
    id: 1,
    title: "CCSU Meerut College Affiliation Letter (College Code: 472)",
    category: "University Affiliation",
    fileUrl: "#",
    refCode: "CCSU/AFFIL/472",
    date: "2024-06-15"
  },
  {
    id: 2,
    title: "NCTE Regulatory Recognition & Approval Dossier",
    category: "Statutory Approvals",
    fileUrl: "#",
    refCode: "NCTE/NRC/RECOG/2024",
    date: "2024-05-10"
  },
  {
    id: 3,
    title: "UGC Section 2(f) Institutional Pedigree Certificate",
    category: "UGC Recognition",
    fileUrl: "#",
    refCode: "UGC/2F/IIFCCMS/2023",
    date: "2023-11-28"
  },
  {
    id: 4,
    title: "Govt. of Uttar Pradesh NOC for Higher Education Programs",
    category: "State Government NOC",
    fileUrl: "#",
    refCode: "UP-GOVT/HE/NOC/472",
    date: "2023-08-19"
  }
];

// 15. Public Disclosures (Admin Point 11)
export const INITIAL_PUBLIC_DISCLOSURES = [
  {
    id: 1,
    title: "Mandatory Public Disclosure (Affidavit & Compliance Form)",
    fileUrl: "#",
    refCode: "DOC-DISC-01",
    date: "2024-07-01"
  },
  {
    id: 2,
    title: "Land Title & 6.47-Acre Greater Noida Campus Certificate",
    fileUrl: "#",
    refCode: "DOC-LAND-02",
    date: "2024-06-20"
  },
  {
    id: 3,
    title: "Building Safety & Structural Engineering Fitness Certificate",
    fileUrl: "#",
    refCode: "DOC-SAFE-03",
    date: "2024-06-18"
  },
  {
    id: 4,
    title: "Fire Safety & Emergency Exit Compliance Certificate",
    fileUrl: "#",
    refCode: "DOC-FIRE-04",
    date: "2024-05-25"
  },
  {
    id: 5,
    title: "Clean Water & Environmental Sanitization Certificate",
    fileUrl: "#",
    refCode: "DOC-SANI-05",
    date: "2024-05-20"
  },
  {
    id: 6,
    title: "Institutional Fee Structure & Regulatory Fee Committee Clearance",
    fileUrl: "#",
    refCode: "DOC-FEES-06",
    date: "2024-04-12"
  }
];

// 16. Social Initiatives (Admin Point 12)
export const INITIAL_SOCIAL_INITIATIVES = [
  {
    id: 1,
    title: "Knowledge Park III Green Campus & Tree Plantation Drive",
    date: "2024-08-15",
    photoUrl: media1,
    description: "Scholars and faculty planted over 350 saplings across the 6.47-acre campus in Greater Noida promoting environmental stewardship."
  },
  {
    id: 2,
    title: "Annual Community Blood Donation & Health Checkup Camp",
    date: "2024-04-07",
    photoUrl: media2,
    description: "Organized in association with Rotary Blood Bank, collecting over 210 blood units with active participation of scholars and faculty."
  },
  {
    id: 3,
    title: "Financial Literacy & Digital Banking Workshop for Rural Youth",
    date: "2024-02-20",
    photoUrl: media3,
    description: "Faculty and student volunteers conducted free workshops on UPI security, savings bank accounts, and micro-investment awareness."
  },
  {
    id: 4,
    title: "Swachh Bharat Cleanliness & Waste Segregation Drive",
    date: "2023-10-02",
    photoUrl: media4,
    description: "Institutional awareness drive encouraging single-use plastic reduction and campus composting programs."
  }
];

// 17. Official Downloadable Assets (Admin Points 14, 15, 16)
export const INITIAL_DOWNLOAD_ASSETS = {
  brochure: {
    title: "Official Information Brochure 2026–2027",
    fileUrl: "#",
    fileName: "IIFCCMS_Information_Brochure_2026_2027.pdf",
    fileSize: "4.8 MB",
    lastUpdated: "2026-11-20"
  },
  presentation: {
    title: "IIFCCMS Institutional Video Tour & Academic Presentation",
    fileUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    fileName: "IIFCCMS_Institutional_Presentation.mp4",
    fileSize: "18.4 MB",
    type: "Video / Audio-Visual Deck",
    lastUpdated: "2026-11-20"
  },
  applicationForm: {
    title: "Official Blank Offline Admission Application Form (2-Page A4)",
    fileUrl: "#",
    fileName: "IIFCCMS_Blank_Application_Form_Offline.pdf",
    fileSize: "1.2 MB",
    lastUpdated: "2026-11-20"
  }
};

// 18. Scholarship Schemes (Admin Point 18)
export const INITIAL_SCHOLARSHIPS = [
  {
    id: 1,
    schemeName: "Merit Tier 1 (90%+ in 12th Board)",
    percentage: 25,
    eligibility: "Aggregate 90.0% and above in Class 12 CBSE / ICSE / Recognized State Board.",
    description: "25% tuition fee waiver applicable in the academic year. Renewable based on minimum 75% semester attendance and first division.",
    isActive: true
  },
  {
    id: 2,
    schemeName: "Merit Tier 2 (80% – 89.9% in 12th Board)",
    percentage: 15,
    eligibility: "Aggregate 80.0% to 89.9% in Class 12th qualifying examination.",
    description: "15% tuition fee waiver for academic high achievers pursuing BBA, B.Com, or B.A.",
    isActive: true
  },
  {
    id: 3,
    schemeName: "Merit Tier 3 (70% – 79.9% in 12th Board)",
    percentage: 10,
    eligibility: "Aggregate 70.0% to 79.9% in Class 12th qualifying examination.",
    description: "10% tuition fee waiver encouraging academic diligence and consistent performance.",
    isActive: true
  },
  {
    id: 4,
    schemeName: "Special Wards of Defense & Police Personnel",
    percentage: 10,
    eligibility: "Valid identity proof / service book certificate of defense, paramilitary, or police parent.",
    description: "Special honorarium grant of 10% fee concession honoring service to the nation.",
    isActive: true
  },
  {
    id: 5,
    schemeName: "Beti Padhao - Single Girl Child / Sister Concession",
    percentage: 10,
    eligibility: "Single girl child or female siblings enrolling together at IIFCCMS.",
    description: "Institutional grant to empower female commerce and leadership education.",
    isActive: true
  }
];
