// Mock Initial Data for IIFCCMS College Portal & Admin Panel

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
  announcementTicker: "📢 Admissions Open for Academic Session 2026-27 (BBA / B.Com / B.A.) | Up to 25% Institutional Merit Scholarships | 100% Air-Conditioned Knowledge Park III Campus | Direct Helpline: +91 98119 71002",
  collegeCodes: {
    bba: "454",
    bcom: "472",
    ba: "478"
  }
};

export const INITIAL_COURSES = [
  {
    id: 1,
    code: "BBA-454",
    title: "Bachelor of Business Administration (BBA)",
    degree: "Undergraduate (3 Years / 6 Semesters)",
    collegeCode: "454",
    eligibility: "10+2 from recognized board (CBSE / ICSE / UP Board / Other) with minimum 45% aggregate (40% for SC/ST).",
    seatIntake: 60,
    annualFee: 65000,
    perSemesterFee: 32500,
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
    code: "BCOM-472",
    title: "Bachelor of Commerce (B.Com)",
    degree: "Undergraduate (3 Years / 6 Semesters)",
    collegeCode: "472",
    eligibility: "10+2 with Commerce or Science/Arts with Mathematics/Economics with minimum 40% aggregate.",
    seatIntake: 80,
    annualFee: 45000,
    perSemesterFee: 22500,
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
    code: "BA-478",
    title: "Bachelor of Arts (B.A.)",
    degree: "Undergraduate (3 Years / 6 Semesters)",
    collegeCode: "478",
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
    title: "Admissions Open for Academic Session 2026-27 under Institutional Merit Scholarships",
    slug: "admissions-open-2026-27-scholarships",
    category: "Admission",
    publishDate: "2026-11-18",
    content: "Provisional admissions for BBA (Code 454), B.Com (Code 472), and B.A. (Code 478) are now open. Merit scholarship concessions up to 25% on annual tuition fees are available for meritorious candidates securing above 85% in Class 12th board examinations.",
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
    title: "Mandatory Anti-Ragging Affidavit & 24x7 Helpline Protocol 2026-27",
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
    courseCode: "BBA-454",
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
    courseCode: "BCOM-472",
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
    courseCode: "BBA-454",
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
    courseCode: "BA-478",
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
    photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
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
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
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
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
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
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
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
    photoUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    bio: "Focused on Development Economics, Public Finance, and NEP 2020 multidisciplinary curriculum implementation."
  }
];

export const INITIAL_GALLERY = [
  {
    id: 1,
    title: "Expansive 6.47-Acre Green Academic Campus",
    category: "Campus",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    caption: "Lush green campus located strategically in Knowledge Park III, Greater Noida."
  },
  {
    id: 2,
    title: "IIF Central Library (55,000+ Volumes)",
    category: "Library",
    imageUrl: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
    caption: "State-of-the-art academic library with DELNET, EBSCO research databases, and reading hall."
  },
  {
    id: 3,
    title: "100% Air-Conditioned Smart Lecture Hall",
    category: "Campus",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    caption: "Amphitheatre-style air-conditioned classrooms equipped with audio-visual smart projectors."
  },
  {
    id: 4,
    title: "Advanced Computer & Financial Analytics Lab",
    category: "Labs",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    caption: "Gigabit fiber connected high-speed computer terminals for statistical and accounting training."
  },
  {
    id: 5,
    title: "Annual Sports Meet & Athletic Ground",
    category: "Sports",
    imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
    caption: "Full-sized playground for cricket, football, basketball, badminton, and track athletics."
  },
  {
    id: 6,
    title: "Annual Convocation & Degree Distribution",
    category: "Cultural",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    caption: "Celebrating student milestones in the presence of distinguished dignitaries and economists."
  }
];

export const INITIAL_INQUIRIES = [
  {
    id: 1,
    name: "Vikram Malhotra",
    email: "vikram.m@gmail.com",
    phone: "9820011223",
    course: "BBA-454",
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
    course: "BCOM-472",
    subject: "12th mark criterion for Institutional Merit scholarship",
    message: "I scored 87% in Class 12 CBSE Commerce. Am I eligible for 25% tuition fee waiver in all 3 years?",
    status: "CONTACTED",
    submittedAt: "2026-11-20 15:40"
  }
];
