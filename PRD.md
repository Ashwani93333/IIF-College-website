# Product Requirements Document (PRD)

**Project Name:** Enterprise College Web Portal & Administrative Management System  
**Institution:** IIF College of Commerce and Management Studies (IIFCCMS)  
**Parent Trust:** IIF Trust / Indian Institute of Finance  
**Affiliated Body:** Chaudhary Charan Singh University (CCSU), Meerut  
**Document Version:** 1.0.0  
**Status:** Approved for Implementation  
**Tech Stack:** React + Vite (Frontend), Java 21 & Spring Boot 3.x (Backend), PostgreSQL (Database)

---

## 1. Executive Summary & Vision

### 1.1 Objective
The purpose of this project is to architect, develop, and deploy a modern, high-performance, responsive institutional portal accompanied by a robust, secure Administrative Panel. The system serves two primary functions:
1. **Public Panel**: Delivers a rich, authoritative, and engaging digital front door for prospective students, parents, alumni, and regulatory bodies (CCSU, UGC, NAAC), featuring course catalogs, dynamic fee and scholarship calculators, interactive notices, campus showcase, and online admission desk.
2. **Admin Panel**: Acts as an intuitive Content Management System (CMS) and operations portal that empowers college administrators, academic staff, and admission officers to dynamically update, modify, and monitor every piece of content shown on the public site without writing a single line of code.

### 1.2 Tech Stack Validation
- **Frontend**: React 18+ bundled with Vite (Lightning-fast HMR, component modularity, client-side routing with React Router, state management, and modern responsive CSS/Tailwind).
- **Backend**: Java 21 with Spring Boot 3.x (Enterprise-grade stability, virtual threads for high throughput, Spring Security 6 with stateless JWT, Spring Data JPA/Hibernate, Bean Validation, and RESTful APIs).
- **Database**: PostgreSQL 16+ (ACID-compliant relational database, structured JSONB support for dynamic metadata, indexed query performance, robust foreign-key integrity).

---

## 2. Target Personas & Stakeholders

| Persona | Role | Primary Goals & Behaviors |
| :--- | :--- | :--- |
| **Prospective Student** | Visitor / Applicant | Explores BBA, B.Com, and B.A. courses, syllabus schemes, calculates scholarship eligibility, submits admission applications, downloads confirmation receipts. |
| **Parent / Guardian** | Visitor | Verifies institutional credibility, affiliation codes (CCSU BBA: 454, B.Com: 472, B.A.: 478), fee breakdowns, safety/anti-ragging compliance, and campus facilities. |
| **Enrolled Student** | Internal User | Checks real-time circulars, examination timetables, holiday schedules, academic calendar, and university result redirects. |
| **College Admin / Staff** | System Operator | Publishes notices, updates fee structures, edits course syllabi, updates faculty profiles, manages image galleries, and posts event circulars. |
| **Admission Counselor** | Lead / Application Reviewer | Reviews submitted admission applications in real time, verifies candidate marks, updates admission application status (Pending, Under Review, Approved, Rejected), and exports lead records. |
| **Super Administrator** | IT / Systems Lead | Manages role-based access control (RBAC), monitors system audit logs, configures system settings, and manages administrative users. |

---

## 3. High-Level System Scope & Core Modules

```
                           ┌───────────────────────────┐
                           │    PostgreSQL Database    │
                           └─────────────▲─────────────┘
                                         │ (JPA/Hibernate)
                           ┌─────────────┴─────────────┐
                           │  Spring Boot REST Backend  │
                           │     (Java 21, Security)   │
                           └──────▲─────────────▲──────┘
                                  │             │
                Public REST APIs  │             │ Secured JWT APIs
            (Read / Submit Apps)  │             │ (Full CRUD & Operations)
                                  │             │
                    ┌─────────────┴───┐     ┌───┴─────────────┐
                    │  Public Portal  │     │   Admin Panel   │
                    │  (React + Vite) │     │  (React + Vite) │
                    └─────────────────┘     └─────────────────┘
```

---

## 4. Functional Requirements: Public Panel

The Public Portal must provide high speed, accessible design, and responsive layouts across all device form factors (mobile, tablet, desktop).

### 4.1 Header & Institutional Identity
- **FR-PUB-01**: Display official branding, logo, NAAC A++ affiliation badge, and college codes (**BBA: 454, B.Com: 472, B.A.: 478**).
- **FR-PUB-02**: Display quick action bar: Emergency contact, 24x7 Anti-Ragging helpline, WhatsApp admission helpline, and CCSU student portal redirects.
- **FR-PUB-03**: Responsive navigation bar with links: *About Us, Academics/Courses, Admissions, Fee & Scholarships, Campus Life, Notice Board, Faculty, Contact Us*, and a direct *Apply Online* CTA button.

### 4.2 Hero Section & Highlights
- **FR-PUB-04**: Dynamic banner carousel/hero showcasing campus imagery, key achievements, admissions open announcements, and quick statistical counters (35+ years heritage, 55k+ central library books, 6.47-acre lush green campus).

### 4.3 Academic Programs & Course Catalog
- **FR-PUB-05**: Dynamic course cards for BBA, B.Com, and B.A. programs fetched from the backend database.
- **FR-PUB-06**: Each program page/modal must display:
  - Program Overview, Duration, and Eligibility criteria (e.g., 10+2 passing percentage).
  - Semester-wise NEP 2020 aligned course curriculum breakdown (Core, Elective, Practical papers).
  - Direct syllabus download link (PDF document stored and served via backend).
  - Career scope, specializations, and affiliated CCSU degree validation.

### 4.4 Merit Scholarship & Dynamic Fee Calculator
- **FR-PUB-07**: Interactive calculator that accepts prospective student's 10+2 aggregate percentage and desired program.
- **FR-PUB-08**: Computes transparent semester fee breakdown and applies Institutional Merit scholarship slabs:
  - **Tier 1 (>=85%)**: 25% Tuition Fee Waiver.
  - **Tier 2 (75% - 84.9%)**: 15% Tuition Fee Waiver.
  - **Tier 3 (65% - 74.9%)**: 10% Tuition Fee Waiver.
- **FR-PUB-09**: Displays zero hidden charges disclaimer, installment payment plans, and direct "Proceed to Apply with this Scholarship" button.

### 4.5 Digital Admissions Desk (Application Engine)
- **FR-PUB-10**: Multi-step online application form:
  - Step 1: Personal Details (Full name, DOB, Gender, Category, Email, WhatsApp Phone, Address).
  - Step 2: Academic Qualifications (10th & 12th Board, Passing Year, Roll No, Percentage/CGPA, Stream).
  - Step 3: Program Selection (BBA / B.Com / B.A., Choice of Shift/Specialization).
  - Step 4: Verification & Document Upload (Optional marksheet/ID upload).
- **FR-PUB-11**: Form validation on both client (Vite/React) and server (Spring Boot Hibernate Validator).
- **FR-PUB-12**: Upon successful submission:
  - Generates a unique, non-repeating Application ID (e.g., `IIFCCMS-2026-XXXX`).
  - Renders a printable/downloadable Provisional Application Slip with QR code/barcode.
  - Dispatches an asynchronous email confirmation to the student and instant notification alert to the admission desk.

### 4.6 Real-Time Notice Board & Circulars
- **FR-PUB-13**: Dynamic notice list with categorizations (*Exam, Academic, Admission, General, Sports/Events*).
- **FR-PUB-14**: Instant search bar by keywords and date range filtering.
- **FR-PUB-15**: Sticky / Pinned urgent announcements badge on the homepage (e.g., "Admissions Open for Batch 2026-27", "Semester Exam Date Sheet Announced").
- **FR-PUB-16**: Downloadable official circular attachments (PDF/Images).

### 4.7 Campus Showcase & Infrastructure
- **FR-PUB-17**: Interactive media gallery for campus facilities (Air-conditioned Smart Classrooms, High-tech Computer Labs, 55,000+ volume Central Library, Sports Arena, Cafeteria, Auditorium).
- **FR-PUB-18**: Tab-based category filters (*Campus, Labs, Sports, Events, Seminars*).

### 4.8 Faculty & Department Directory
- **FR-PUB-19**: Searchable faculty profiles: Photo, Full Name, Designation, Department, Qualifications, Areas of Expertise, and Professional Email.

### 4.9 Institutional Governance, Accreditations & Mandatory Disclosures
- **FR-PUB-20**: Dedicated sections for Institutional history, Governing Council, Anti-Ragging Committee details, Internal Complaints Committee (ICC), RTI, and NEP 2020 compliance certificates.

### 4.10 Contact Desk & Location
- **FR-PUB-21**: Interactive Google Maps pinpointing Plot 45A, Knowledge Park III, Greater Noida.
- **FR-PUB-22**: Direct click-to-call telephony links (`+91 98119 71002`, `+91 98115 37057`) and official email routing.
- **FR-PUB-23**: General inquiry form with captcha/spam protection that saves inquiries directly into the database.

---

## 5. Functional Requirements: Admin Panel

The Admin Panel is a password-protected, role-restricted dashboard (`/admin`) allowing administrators to control all data driving the Public Panel.

### 5.1 Authentication & Security (RBAC)
- **FR-ADM-01**: Secure login with Email/Username and Password using Spring Security with BCrypt password hashing.
- **FR-ADM-02**: JWT-based stateless session management with Access Token and Refresh Token rotation.
- **FR-ADM-03**: Role-Based Access Control:
  - `SUPER_ADMIN`: Full access (Users, Content, Admissions, Settings, Logs).
  - `ACADEMIC_ADMIN`: Manage Courses, Syllabi, Faculty, Notices, and Events.
  - `ADMISSION_OFFICER`: Manage and process Student Applications, Inquiries, and Scholarship rules.
- **FR-ADM-04**: Password reset, session expiration, and audit logging of all write operations.

### 5.2 Dashboard Overview & Metrics
- **FR-ADM-05**: High-level statistical cards:
  - Total Applications Received (Daily, Weekly, Overall).
  - Applications by Status (Pending, Under Review, Approved, Rejected).
  - Total Active Notices & Announcements.
  - Active Courses & Faculty count.
  - Recent Inquiries & Lead Conversion rate.
- **FR-ADM-06**: Recent activity stream and quick action shortcuts.

### 5.3 Notice & Circular Management
- **FR-ADM-07**: Notice CRUD operations (Create, Read, Update, Delete).
- **FR-ADM-08**: Form fields: Title, Category, Content/Description, Effective Date, Expiry Date, Is Pinned (Sticky), Is Active, Attachment File (PDF/Image upload).
- **FR-ADM-09**: Instant status toggle (Publish / Unpublish) reflecting immediately on the public website.

### 5.4 Academic Course & Curriculum Management
- **FR-ADM-10**: Course CRUD:
  - Program Title, Code, Short Description, Detailed Description.
  - Eligibility Rules, Duration (Years/Semesters), Total Seat Intake.
  - Tuition Fee, Examination Fee, Other Charges.
  - Syllabus PDF document upload and Semester-wise Subject list manager.
- **FR-ADM-11**: Ability to reorder course listings and mark programs as "Admissions Open" or "Intake Full".

### 5.5 Online Admissions & Lead Management
- **FR-ADM-12**: Centralized table of all submitted student applications.
- **FR-ADM-13**: Advanced filtering by Course, Application Status, Date Range, 12th Percentage bracket, and Search by Application ID / Name / Mobile / Email.
- **FR-ADM-14**: Application Detail View:
  - Full personal, contact, and academic profile.
  - Uploaded marksheets and verification documents preview.
  - Status updater: `SUBMITTED`, `UNDER_REVIEW`, `DOCS_VERIFIED`, `APPROVED`, `REJECTED`, `ADMITTED`.
  - Internal remarks/counselor notes log.
- **FR-ADM-15**: Export applications to CSV / Excel for offline secretariat records.
- **FR-ADM-16**: One-click email/WhatsApp trigger to notify applicants about document verification dates.

### 5.6 Scholarship Rules & Fee Structure Management
- **FR-ADM-17**: Configurable scholarship percentage slabs and minimum marks thresholds.
- **FR-ADM-18**: Updating base tuition fees, hostel fees, and bus transport fee charts without requiring frontend code edits.

### 5.7 Events & Campus Gallery Management
- **FR-ADM-19**: Event CRUD: Title, Event Date, Venue, Description, Cover Image, Associated Album.
- **FR-ADM-20**: Gallery Asset Manager: Upload multiple high-resolution photos, assign tags/categories (*Campus, Sports, Labs, Cultural*), set display order, and delete obsolete media.

### 5.8 Faculty & Staff Directory Management
- **FR-ADM-21**: Add, update, and deactivate faculty profiles.
- **FR-ADM-22**: Profile fields: Name, Designation, Department (Management, Commerce, Humanities), Qualifications, Bio, Profile Image, Email, LinkedIn/Research link, Display Priority.

### 5.9 General Inquiry & Lead Desk
- **FR-ADM-23**: Review inquiries submitted via the Contact Us page.
- **FR-ADM-24**: Mark inquiries as `New`, `Contacted`, or `Resolved`. Assign counselor ownership.

### 5.10 Site Configuration & Content Management
- **FR-ADM-25**: Update global site information: Emergency Helpline numbers, Anti-Ragging Officer contact, Official Email addresses, College Codes, Social Media links.
- **FR-ADM-26**: Banner and marquee announcement editor (e.g., flashing alert ticker at top of page).

---

## 6. Non-Functional Requirements (NFR)

### 6.1 Performance & Latency
- **NFR-01**: Public portal pages must achieve First Contentful Paint (FCP) in under 1.2s and Time to Interactive (TTI) in under 1.8s on standard broadband.
- **NFR-02**: Backend REST API response times must average under 100ms for read requests and under 250ms for write requests under standard load.
- **NFR-03**: Static asset compression (Gzip/Brotli) and caching headers for images and compiled JavaScript.

### 6.2 Security & Compliance
- **NFR-04**: HTTPS mandatory everywhere with strict Transport Security (HSTS).
- **NFR-05**: Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF) protection; strict Content Security Policy (CSP).
- **NFR-06**: SQL injection prevention guaranteed via Spring Data JPA Parameterized queries.
- **NFR-07**: Rate-limiting on public admission submission and login endpoints (e.g., max 5 submissions/minute per IP) to prevent spam attacks.
- **NFR-08**: Storage of passwords using BCrypt with salt factor 12.

### 6.3 Scalability & Reliability
- **NFR-09**: PostgreSQL connection pooling managed via HikariCP for concurrency handling.
- **NFR-10**: System designed for 99.9% uptime with graceful error handling and zero data loss on failed transactions.

### 6.4 Usability & Accessibility (a11y)
- **NFR-11**: Compliance with WCAG 2.1 Level AA standards (adequate color contrast, ARIA landmarks, screen-reader friendly tables).
- **NFR-12**: 100% responsive fluid UI supporting screens from 320px (mobile) up to 4K desktop screens.

---

## 7. Success Metrics & Key Performance Indicators (KPIs)

1. **Admissions Efficiency**: 75% reduction in manual data entry time by migrating paper inquiries to the digital admissions desk.
2. **Lead Response Time**: Average counselor contact turnaround reduced from 48 hours to under 30 minutes.
3. **Portal Velocity**: Google Lighthouse score >= 90 across Performance, Accessibility, Best Practices, and SEO.
4. **Administrative Autonomy**: 100% of routine content updates (notices, fees, faculty, events) executed by college staff via Admin Panel without developer involvement.

---

## 8. Milestone Roadmap

| Milestone | Deliverables | Target Completion |
| :--- | :--- | :--- |
| **Phase 1: Architecture & Foundations** | Database Schema, Spring Boot API Skeleton, React+Vite Scaffold, Auth/JWT engine | Week 1 |
| **Phase 2: Core Admin CMS & Public APIs** | Notices, Courses, Syllabi, Faculty, and Gallery backend & admin screens | Week 2 |
| **Phase 3: Public Portal UI & Integration** | Responsive frontend pages, Course catalog, Fee calculator, Notice board | Week 3 |
| **Phase 4: Admissions Engine & Lead Workflow** | Multi-step form, Application slip generator, Admin application review desk | Week 4 |
| **Phase 5: Testing, Hardening & Go-Live** | Load testing, security audit, user acceptance testing (UAT), staff training | Week 5 |

---

*Authored by:* Technical Architecture & Web Development Cell  
*Approved by:* College Governing Secretariat, IIFCCMS Greater Noida