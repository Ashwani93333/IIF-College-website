# Project Workflow Document (PWD)

**Project Name:** Enterprise College Web Portal & Administrative Management System  
**Client Institution:** IIF College of Commerce and Management Studies (IIFCCMS)  
**Governing Body:** IIF Trust | CCSU Affiliated  
**Technical Architecture:** React 18 + Vite | Java 21 & Spring Boot 3.x | PostgreSQL 16  
**Document Version:** 1.0.0  
**Target Audience:** Engineering Leads, Full-Stack Developers, QA Engineers, DevOps  

---

## 1. Architectural System Overview

The system adopts a decoupled **Client-Server Architecture** featuring two distinct frontend application layers (Public Portal and Admin Panel) powered by a unified, high-performance Spring Boot 3.x REST API backed by PostgreSQL.

```
                              ┌───────────────────────────────────┐
                              │     Client Browser / Mobile       │
                              └─────────────────┬─────────────────┘
                                                │
                      ┌─────────────────────────┴─────────────────────────┐
                      ▼                                                   ▼
        ┌───────────────────────────┐                       ┌───────────────────────────┐
        │       Public Portal       │                       │   Secured Admin Portal    │
        │   (React 18 + Vite SPA)   │                       │   (React 18 + Vite SPA)   │
        │  * Public Information     │                       │  * CMS & Content Editor   │
        │  * Admissions Application │                       │  * Lead & Application CRM │
        │  * Fee & Scholarship Calc │                       │  * RBAC & Site Config     │
        └─────────────┬─────────────┘                       └─────────────┬─────────────┘
                      │                                                   │
                      │ REST / JSON (HTTP Public)                         │ REST / JSON (JWT Bearer)
                      ▼                                                   ▼
        ┌───────────────────────────────────────────────────────────────────────────────┐
        │                     Spring Boot 3.x Backend (Java 21)                         │
        │                                                                               │
        │  ┌───────────────────────┐ ┌───────────────────────┐ ┌─────────────────────┐  │
        │  │  Spring Security 6    │ │   REST Controllers    │ │   Global Handler    │  │
        │  │  (JWT Filter & CORS)  │ │ (Public & Admin APIs) │ │   & Validation      │  │
        │  └──────────┬────────────┘ └──────────┬────────────┘ └──────────┬──────────┘  │
        │             │                         │                         │             │
        │             ▼                         ▼                         ▼             │
        │  ┌─────────────────────────────────────────────────────────────────────────┐  │
        │  │                        Service Layer (Business Logic)                   │  │
        │  │  * AdmissionService  * NoticeService  * CourseService  * AuthService    │  │
        │  │  * EmailService      * StorageService * MediaService   * UserService    │  │
        │  └────────────────────────────────────┬────────────────────────────────────┘  │
        │                                       │                                       │
        │                                       ▼                                       │
        │  ┌─────────────────────────────────────────────────────────────────────────┐  │
        │  │                 Data Access Layer (Spring Data JPA / Hibernate)         │  │
        │  │                       Hikari Connection Pool                            │  │
        │  └────────────────────────────────────┬────────────────────────────────────┘  │
        └───────────────────────────────────────┼───────────────────────────────────────┘
                                                │
                                                ▼ (JDBC over TLS)
        ┌───────────────────────────────────────────────────────────────────────────────┐
        │                          PostgreSQL 16 Relational DB                          │
        │  * users / roles       * notices / circulars       * courses / syllabi        │
        │  * applications        * inquiries                 * faculty / departments    │
        │  * media_gallery       * scholarship_rules         * audit_logs               │
        └───────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. PostgreSQL Relational Database Schema & Data Dictionary

The persistence tier relies on a 3rd Normal Form (3NF) relational design in PostgreSQL with foreign key constraints, composite indexing for fast lookups, and audit timestamps.

### 2.1 Entity Relationship Model

```
   ┌───────────┐         ┌───────────────┐         ┌──────────────┐
   │   roles   │◄───────►│  user_roles   │◄───────►│    users     │
   └───────────┘         └───────────────┘         └──────┬───────┘
                                                          │ 1
                                                          │ creates
                                                          ▼ *
   ┌───────────────────────┐                       ┌──────────────┐
   │      categories       │◄─────────────────────►│   notices    │
   └───────────────────────┘                       └──────────────┘
                                                          
   ┌───────────────────────┐                       ┌──────────────┐
   │     departments       │◄─────────────────────►│   faculty    │
   └───────────────────────┘                       └──────────────┘
                                                          
   ┌───────────────────────┐         1 : N         ┌──────────────┐
   │        courses        │──────────────────────►│   subjects   │
   └──────────┬────────────┘                       └──────────────┘
              │ 1
              │ receives
              ▼ *
   ┌───────────────────────┐                       ┌──────────────┐
   │     applications      │                       │  inquiries   │
   └───────────────────────┘                       └──────────────┘
                                                          
   ┌───────────────────────┐                       ┌──────────────┐
   │     media_gallery     │                       │  audit_logs  │
   └───────────────────────┘                       └──────────────┘
```

### 2.2 Table Definitions (DDL)

```sql
-- 1. Users and Authentication
CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL -- 'ROLE_SUPER_ADMIN', 'ROLE_ACADEMIC_ADMIN', 'ROLE_ADMISSION_OFFICER'
);

CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE user_roles (
    user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    role_id INT NOT NULL REFERENCES roles(id) ON DELETE CASCADE,
    PRIMARY KEY (user_id, role_id)
);

-- 2. Academic Programs & Courses
CREATE TABLE courses (
    id BIGSERIAL PRIMARY KEY,
    course_code VARCHAR(20) UNIQUE NOT NULL, -- e.g., 'BBA-454', 'BCOM-472', 'BA-478'
    title VARCHAR(150) NOT NULL,             -- e.g., 'Bachelor of Business Administration (BBA)'
    short_description TEXT,
    full_description TEXT NOT NULL,
    duration_years INT NOT NULL DEFAULT 3,
    total_semesters INT NOT NULL DEFAULT 6,
    eligibility_criteria TEXT NOT NULL,
    seat_intake INT NOT NULL,
    annual_tuition_fee NUMERIC(10, 2) NOT NULL,
    other_charges NUMERIC(10, 2) DEFAULT 0.00,
    syllabus_pdf_url VARCHAR(500),
    is_admissions_open BOOLEAN DEFAULT TRUE NOT NULL,
    display_order INT DEFAULT 0 NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE subjects (
    id BIGSERIAL PRIMARY KEY,
    course_id BIGINT NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    semester_number INT NOT NULL,
    subject_code VARCHAR(30) NOT NULL,
    subject_name VARCHAR(150) NOT NULL,
    subject_type VARCHAR(50) NOT NULL, -- 'CORE', 'ELECTIVE', 'PRACTICAL', 'VALUE_ADDED'
    credits INT NOT NULL DEFAULT 4
);

-- 3. Admissions & Applications
CREATE TABLE applications (
    id BIGSERIAL PRIMARY KEY,
    application_id VARCHAR(50) UNIQUE NOT NULL, -- e.g., 'IIFCCMS-2026-7841'
    course_id BIGINT NOT NULL REFERENCES courses(id),
    full_name VARCHAR(120) NOT NULL,
    gender VARCHAR(20) NOT NULL,
    date_of_birth DATE NOT NULL,
    category VARCHAR(30) NOT NULL, -- 'GEN', 'OBC', 'SC', 'ST', 'EWS'
    email VARCHAR(120) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    parent_name VARCHAR(120) NOT NULL,
    parent_phone VARCHAR(15) NOT NULL,
    address_line TEXT NOT NULL,
    city VARCHAR(80) NOT NULL,
    state VARCHAR(80) NOT NULL,
    pincode VARCHAR(10) NOT NULL,
    tenth_school VARCHAR(150) NOT NULL,
    tenth_percentage NUMERIC(5, 2) NOT NULL,
    twelfth_school VARCHAR(150) NOT NULL,
    twelfth_board VARCHAR(100) NOT NULL,
    twelfth_percentage NUMERIC(5, 2) NOT NULL,
    twelfth_stream VARCHAR(50) NOT NULL,
    scholarship_applied VARCHAR(50),
    scholarship_percentage NUMERIC(5, 2) DEFAULT 0.00,
    status VARCHAR(30) DEFAULT 'SUBMITTED' NOT NULL, -- 'SUBMITTED', 'UNDER_REVIEW', 'DOCS_VERIFIED', 'APPROVED', 'REJECTED', 'ADMITTED'
    counselor_notes TEXT,
    marksheet_document_url VARCHAR(500),
    submitted_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- 4. Circulars & Real-Time Notices
CREATE TABLE notice_categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL -- 'Examination', 'Academic', 'Admission', 'General', 'Events'
);

CREATE TABLE notices (
    id BIGSERIAL PRIMARY KEY,
    category_id INT NOT NULL REFERENCES notice_categories(id),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(300) UNIQUE NOT NULL,
    content TEXT NOT NULL,
    attachment_url VARCHAR(500),
    attachment_type VARCHAR(50), -- 'PDF', 'IMAGE', 'EXTERNAL_LINK'
    is_pinned BOOLEAN DEFAULT FALSE NOT NULL,
    is_active BOOLEAN DEFAULT TRUE NOT NULL,
    publish_date DATE NOT NULL,
    expiry_date DATE,
    created_by BIGINT REFERENCES users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- 5. Faculty & Staff Directory
CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL, -- 'Commerce', 'Management', 'Arts & Humanities'
    head_of_department VARCHAR(100)
);

CREATE TABLE faculty (
    id BIGSERIAL PRIMARY KEY,
    department_id INT NOT NULL REFERENCES departments(id),
    full_name VARCHAR(120) NOT NULL,
    designation VARCHAR(100) NOT NULL, -- 'Professor & Dean', 'Associate Professor', 'Assistant Professor'
    qualifications VARCHAR(255) NOT NULL, -- 'Ph.D., M.Com, UGC NET'
    experience_years INT NOT NULL DEFAULT 0,
    email VARCHAR(120),
    phone VARCHAR(20),
    bio TEXT,
    photo_url VARCHAR(500),
    display_priority INT DEFAULT 0 NOT NULL,
    is_active BOOLEAN DEFAULT TRUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- 6. Media Gallery & Campus Life
CREATE TABLE media_gallery (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    category VARCHAR(50) NOT NULL, -- 'Campus', 'Computer_Lab', 'Library', 'Sports', 'Cultural', 'Seminars'
    image_url VARCHAR(500) NOT NULL,
    thumbnail_url VARCHAR(500),
    caption TEXT,
    display_order INT DEFAULT 0 NOT NULL,
    is_active BOOLEAN DEFAULT TRUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- 7. Public Inquiries & Lead Desk
CREATE TABLE inquiries (
    id BIGSERIAL PRIMARY KEY,
    full_name VARCHAR(120) NOT NULL,
    email VARCHAR(120) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    interested_course VARCHAR(50),
    subject VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(30) DEFAULT 'NEW' NOT NULL, -- 'NEW', 'CONTACTED', 'RESOLVED'
    assigned_to BIGINT REFERENCES users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- 8. System Settings & Configuration
CREATE TABLE site_configurations (
    config_key VARCHAR(100) PRIMARY KEY,
    config_value TEXT NOT NULL,
    description VARCHAR(255),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- 9. Audit Logs
CREATE TABLE audit_logs (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT REFERENCES users(id),
    action VARCHAR(100) NOT NULL,
    entity_name VARCHAR(50) NOT NULL,
    entity_id BIGINT,
    details JSONB,
    ip_address VARCHAR(50),
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Performance Indexes
CREATE INDEX idx_applications_course ON applications(course_id);
CREATE INDEX idx_applications_status ON applications(status);
CREATE INDEX idx_applications_email_phone ON applications(email, phone_number);
CREATE INDEX idx_notices_active_date ON notices(is_active, publish_date DESC);
CREATE INDEX idx_faculty_dept ON faculty(department_id, display_priority);
```

---

## 3. End-to-End Core Workflows

### 3.1 Online Admission Application & Lead Routing Workflow

This sequence traces a prospective candidate submitting an application through the Public React Portal to confirmation, database persistence, and administrative review.

```
Candidate (Browser)        Public Portal (React)         Spring Boot (Java 21)         PostgreSQL DB        Admission Counselor (Admin)
      │                            │                              │                          │                         │
      │── 1. Fills 4-Step Form ───►│                              │                          │                         │
      │                            │── 2. Client-side Validate ──►│                          │                         │
      │                            │                              │                          │                         │
      │                            │── 3. POST /api/v1/admissions─│                          │                         │
      │                            │      (Payload with marks)    │                          │                         │
      │                            │                              │── 4. Verify & Calculate ─│                         │
      │                            │                              │      Scholarship %       │                         │
      │                            │                              │                          │                         │
      │                            │                              │── 5. Generate Unique ID ─│                         │
      │                            │                              │      (IIFCCMS-2026-XXXX) │                         │
      │                            │                              │                          │                         │
      │                            │                              │── 6. INSERT application ─►│                         │
      │                            │                              │◄── 7. Stored Successfully ──│                         │
      │                            │                              │                          │                         │
      │                            │                              │── 8. Async Email Trigger─┼────────┐ (SMTP Dispatch)
      │                            │                              │                          │        ▼
      │                            │◄── 9. Return 201 Created ────│                          │  Student Email Inbox
      │                            │       (App ID, Slip Details) │                          │  & Staff Alert
      │                            │                              │                          │                         │
      │◄── 10. Render Slip & QR ───│                              │                          │                         │
      │    (Print / Download PDF)  │                              │                          │                         │
      │                            │                              │                          │                         │
      │                            │                              │                          │── 11. New App Detected ─►│
      │                            │                              │                          │       (Admin Dashboard) │
      │                            │                              │                          │                         │
      │                            │                              │                          │   12. Reviews marks &  │
      │                            │                              │                          │       updates status to │
      │                            │                              │                          │       'DOCS_VERIFIED'   │
```

### 3.2 Content Publishing Workflow (Admin CMS to Public Site)

How an Academic Admin posts an urgent semester exam notice with a PDF attachment.

```
Admin Staff (Admin Panel)       React Admin App              Spring Boot Controller          File System / S3       PostgreSQL
          │                            │                               │                         │                     │
          │── 1. Create Notice Form ──►│                               │                         │                     │
          │      (Title, Dates, PDF)   │── 2. Multipart POST ─────────►│                         │                     │
          │                            │      /api/v1/admin/notices    │                         │                     │
          │                            │      (Form + File + JWT)      │                         │                     │
          │                            │                               │── 3. Authorize Role ───►│                     │
          │                            │                               │      (ROLE_ACADEMIC)    │                     │
          │                            │                               │                         │                     │
          │                            │                               │── 4. Upload File ──────►│                     │
          │                            │                               │◄── 5. Return File URL ──│                     │
          │                            │                               │                                               │
          │                            │                               │── 6. Save Record with URL & is_pinned ───────►│
          │                            │                               │◄── 7. Return Persisted Notice Entity ─────────│
          │                            │                               │                                               │
          │                            │◄── 8. HTTP 201 Response ──────│                                               │
          │◄── 9. Success Toast ───────│                               │                                               │
          │                                                                                                            │
          │============================ Real-time Public Access =======================================================│
          │                                                                                                            │
Public Visitor Browser ────────► GET /api/v1/public/notices ──────────► Query Active & Pinned ────────────────────────►│
                       ◄──────── Fast JSON Cache / Response ───────────◄───────────────────────────────────────────────│
```

### 3.3 Application Lifecycle State Machine

Each admission application progresses through defined state transitions with audit traceability:

```
  ┌───────────────┐
  │   SUBMITTED   │  (Default state upon candidate online submission)
  └───────┬───────┘
          │
          ▼
  ┌───────────────┐
  │ UNDER_REVIEW  │  (Admission team opened and inspected marksheet)
  └───────┬───────┘
          ├─────────────────────────────────────────┐
          │ (If documents valid)                    │ (If counterfeit / ineligible)
          ▼                                         ▼
  ┌───────────────┐                         ┌───────────────┐
  │ DOCS_VERIFIED │                         │   REJECTED    │
  └───────┬───────┘                         └───────────────┘
          │
          ▼
  ┌───────────────┐
  │   APPROVED    │  (Provisional seat allocation confirmed)
  └───────┬───────┘
          │
          ▼ (Upon registration fee deposit at campus)
  ┌───────────────┐
  │   ADMITTED    │  (Permanent Roll Number / Scholar Number issued)
  └───────────────┘
```

---

## 4. RESTful API Endpoint Specifications

All endpoints use standard HTTP verbs and return JSON payloads. Admin routes require an `Authorization: Bearer <JWT>` header.

### 4.1 Public Endpoints (Accessible without authentication)

| Method | Endpoint | Description | Request / Query Parameters |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/v1/public/courses` | Fetch all active academic programs | Optional `?department=BBA` |
| `GET` | `/api/v1/public/courses/{courseCode}` | Get course detail & semester syllabus | Path: `courseCode` (e.g. `BBA-454`) |
| `POST` | `/api/v1/public/admissions/apply` | Submit new admission application | JSON: Candidate & Academic payload |
| `GET` | `/api/v1/public/admissions/status/{appId}`| Track application status | Path: `appId` |
| `GET` | `/api/v1/public/notices` | List active notices (paginated) | `?page=0&size=10&category=Exam` |
| `GET` | `/api/v1/public/notices/pinned` | Fetch high-priority pinned notices | None |
| `GET` | `/api/v1/public/faculty` | List faculty by department | `?departmentId=1` |
| `GET` | `/api/v1/public/gallery` | Retrieve media gallery photos | `?category=Campus` |
| `POST` | `/api/v1/public/inquiries` | Submit general or contact inquiry | JSON: Name, Email, Phone, Message |
| `GET` | `/api/v1/public/configurations` | Fetch public college info/helpline | None |

### 4.2 Authentication & Security Endpoints

| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/v1/auth/login` | Authenticate user & return JWT tokens | Public |
| `POST` | `/api/v1/auth/refresh-token` | Renew expired Access Token | Valid Refresh Token |
| `GET` | `/api/v1/auth/me` | Fetch authenticated user profile & roles | Bearer Token |
| `POST` | `/api/v1/auth/logout` | Invalidate active user session | Bearer Token |

### 4.3 Admin CMS Endpoints (Secured by Role)

| Method | Endpoint | Description | Permitted Roles |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/v1/admin/dashboard/stats` | High-level KPI metrics & chart data | All Admins |
| `GET` | `/api/v1/admin/admissions` | Filter & paginate all applications | `SUPER_ADMIN`, `ADMISSION_OFFICER` |
| `GET` | `/api/v1/admin/admissions/{id}`| Detailed candidate profile view | `SUPER_ADMIN`, `ADMISSION_OFFICER` |
| `PATCH`| `/api/v1/admin/admissions/{id}/status`| Update application status & remarks | `SUPER_ADMIN`, `ADMISSION_OFFICER` |
| `GET` | `/api/v1/admin/admissions/export`| Export filtered list to Excel/CSV | `SUPER_ADMIN`, `ADMISSION_OFFICER` |
| `POST` | `/api/v1/admin/courses` | Create new course/program | `SUPER_ADMIN`, `ACADEMIC_ADMIN` |
| `PUT` | `/api/v1/admin/courses/{id}` | Update course, fees, or seat intake | `SUPER_ADMIN`, `ACADEMIC_ADMIN` |
| `DELETE`| `/api/v1/admin/courses/{id}` | Deactivate or remove course | `SUPER_ADMIN` |
| `POST` | `/api/v1/admin/notices` | Publish circular (with file upload)| `SUPER_ADMIN`, `ACADEMIC_ADMIN` |
| `PUT` | `/api/v1/admin/notices/{id}` | Edit notice title, date, or pin status| `SUPER_ADMIN`, `ACADEMIC_ADMIN` |
| `DELETE`| `/api/v1/admin/notices/{id}` | Archive / delete notice | `SUPER_ADMIN`, `ACADEMIC_ADMIN` |
| `POST` | `/api/v1/admin/faculty` | Add new faculty profile with photo | `SUPER_ADMIN`, `ACADEMIC_ADMIN` |
| `PUT` | `/api/v1/admin/faculty/{id}` | Update faculty details | `SUPER_ADMIN`, `ACADEMIC_ADMIN` |
| `POST` | `/api/v1/admin/gallery` | Upload media photos to gallery | `SUPER_ADMIN`, `ACADEMIC_ADMIN` |
| `GET` | `/api/v1/admin/inquiries` | View all public inquiries | `SUPER_ADMIN`, `ADMISSION_OFFICER` |
| `PUT` | `/api/v1/admin/configurations` | Update institutional contact/helpline| `SUPER_ADMIN` |
| `GET` | `/api/v1/admin/audit-logs` | Review security and change logs | `SUPER_ADMIN` |

---

## 5. Project Directory & Code Structure

### 5.1 Backend: Spring Boot 3.x (Java 21)

```
backend/
├── pom.xml (or build.gradle)
├── src/
│   ├── main/
│   │   ├── java/com/iifccms/portal/
│   │   │   ├── PortalApplication.java
│   │   │   ├── config/
│   │   │   │   ├── SecurityConfig.java
│   │   │   │   ├── JwtAuthenticationFilter.java
│   │   │   │   ├── CorsConfig.java
│   │   │   │   └── WebMvcConfig.java
│   │   │   ├── controller/
│   │   │   │   ├── AuthController.java
│   │   │   │   ├── PublicCourseController.java
│   │   │   │   ├── PublicAdmissionController.java
│   │   │   │   ├── PublicNoticeController.java
│   │   │   │   ├── AdminDashboardController.java
│   │   │   │   ├── AdminAdmissionController.java
│   │   │   │   ├── AdminNoticeController.java
│   │   │   │   └── AdminFacultyController.java
│   │   │   ├── dto/
│   │   │   │   ├── request/
│   │   │   │   │   ├── LoginRequest.java
│   │   │   │   │   ├── AdmissionApplicationRequest.java
│   │   │   │   │   └── NoticeCreateRequest.java
│   │   │   │   └── response/
│   │   │   │       ├── JwtAuthResponse.java
│   │   │   │       ├── AdmissionSummaryResponse.java
│   │   │   │       └── DashboardStatsResponse.java
│   │   │   ├── entity/
│   │   │   │   ├── User.java
│   │   │   │   ├── Role.java
│   │   │   │   ├── Course.java
│   │   │   │   ├── Subject.java
│   │   │   │   ├── Application.java
│   │   │   │   ├── Notice.java
│   │   │   │   ├── Faculty.java
│   │   │   │   └── Inquiry.java
│   │   │   ├── repository/
│   │   │   │   ├── UserRepository.java
│   │   │   │   ├── CourseRepository.java
│   │   │   │   ├── ApplicationRepository.java
│   │   │   │   ├── NoticeRepository.java
│   │   │   │   └── FacultyRepository.java
│   │   │   ├── service/
│   │   │   │   ├── AuthService.java
│   │   │   │   ├── AdmissionService.java
│   │   │   │   ├── CourseService.java
│   │   │   │   ├── NoticeService.java
│   │   │   │   ├── EmailNotificationService.java
│   │   │   │   └── FileStorageService.java
│   │   │   └── exception/
│   │   │       ├── GlobalExceptionHandler.java
│   │   │       └── ResourceNotFoundException.java
│   │   └── resources/
│   │       ├── application.yml
│   │       ├── application-dev.yml
│   │       ├── application-prod.yml
│   │       └── db/migration/ (Flyway schema scripts V1, V2...)
│   └── test/
```

### 5.2 Frontend: React + Vite (Monorepo or Client Folder)

```
frontend/
├── package.json
├── vite.config.js
├── tailwind.config.js
├── index.html
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── routes/
│   │   ├── AppRoutes.jsx
│   │   └── ProtectedRoute.jsx
│   ├── api/
│   │   ├── axiosClient.js
│   │   ├── publicApi.js
│   │   └── adminApi.js
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── NotificationContext.jsx
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Button.jsx
│   │   │   └── Modal.jsx
│   │   ├── public/
│   │   │   ├── HeroBanner.jsx
│   │   │   ├── CourseCard.jsx
│   │   │   ├── FeeCalculator.jsx
│   │   │   ├── AdmissionFormSteps/
│   │   │   │   ├── StepPersonal.jsx
│   │   │   │   ├── StepAcademic.jsx
│   │   │   │   └── StepSlipModal.jsx
│   │   │   └── NoticeBoard.jsx
│   │   └── admin/
│   │       ├── AdminSidebar.jsx
│   │       ├── AdminHeader.jsx
│   │       ├── MetricCard.jsx
│   │       ├── DataTable.jsx
│   │       └── StatusBadge.jsx
│   ├── pages/
│   │   ├── public/
│   │   │   ├── HomePage.jsx
│   │   │   ├── AboutPage.jsx
│   │   │   ├── CoursesPage.jsx
│   │   │   ├── AdmissionsPage.jsx
│   │   │   ├── NoticesPage.jsx
│   │   │   ├── FacultyPage.jsx
│   │   │   └── ContactPage.jsx
│   │   └── admin/
│   │       ├── AdminLoginPage.jsx
│   │       ├── AdminDashboardPage.jsx
│   │       ├── ApplicationsManagerPage.jsx
│   │       ├── CoursesManagerPage.jsx
│   │       ├── NoticesManagerPage.jsx
│   │       ├── FacultyManagerPage.jsx
│   │       └── SiteSettingsPage.jsx
│   └── utils/
│       ├── formatters.js
│       └── validationSchemas.js
```

---

## 6. Work Breakdown Structure (WBS) & Implementation Milestones

```
WBS 1.0: Environment & Foundation
├── 1.1 Setup PostgreSQL 16 local & cloud instances
├── 1.2 Initialize Spring Boot 3.x project (Java 21, JPA, Security, Lombok, Flyway)
└── 1.3 Initialize React + Vite project with TailwindCSS and Lucide icons

WBS 2.0: Authentication & Security Engine
├── 2.1 Implement User, Role, and UserDetails entity models
├── 2.2 Configure Spring Security 6 with JWT token generation and validation filter
├── 2.3 Build Admin Login UI in React with AuthContext & token auto-refresh
└── 2.4 Seed Super Admin and default role credentials

WBS 3.0: Core Dynamic Modules (Backend + Admin CMS)
├── 3.1 Course Management: CRUD APIs, Syllabus file upload, and Admin Course Table
├── 3.2 Notice Board: Category entity, Notice CRUD, PDF attachment handler
├── 3.3 Faculty Directory: Department entity, Faculty CRUD, photo uploader
└── 3.4 Media Gallery: Multi-photo uploader with categorization

WBS 4.0: Public Portal Development
├── 4.1 Header, Navigation, Institutional Branding, and Responsive Footer
├── 4.2 Hero Section with dynamic statistics and announcement ticker
├── 4.3 Academic Programs grid with interactive Syllabus modal & NEP 2020 sheets
├── 4.4 Real-time Notice Board with search, category filtering & download buttons
├── 4.5 Dynamic Merit Scholarship & Fee Calculator
└── 4.6 Campus Showcase, Faculty grid, and Contact/Inquiry forms

WBS 5.0: Online Admissions Desk & CRM Pipeline
├── 5.1 Build 4-step interactive Application Form in React
├── 5.2 Server-side validation, duplicate email/phone check, scholarship calculation
├── 5.3 Application ID generator (`IIFCCMS-2026-XXXX`) & Printable Slip component
├── 5.4 Asynchronous email dispatcher (Student confirmation & Admin lead alert)
└── 5.5 Admin Application Review Desk: Status updating, filtering, notes & Excel export

WBS 6.0: Testing, Hardening & Deployment
├── 6.1 Backend unit & integration tests with MockMvc and Testcontainers
├── 6.2 Frontend cross-browser, responsive, and accessibility audits
├── 6.3 Performance optimization (Gzip, Hikari pool sizing, Vite build chunking)
└── 6.4 Production Dockerization (Dockerfile for Spring Boot, Nginx for Vite build)
```

---

## 7. Quality Assurance, Test Strategy & Validation Matrix

| Test Level | Scope | Tools / Frameworks | Success Criteria |
| :--- | :--- | :--- | :--- |
| **Unit Testing** | Services, business calculations (scholarships), JWT utils | JUnit 5, Mockito, AssertJ | Code coverage >= 80% on core services |
| **API Integration** | Controllers, DB persistence, validation constraints | Spring Boot Test, MockMvc, H2 / Testcontainers | 100% endpoints return expected HTTP status codes |
| **E2E UI Testing** | Admission form submission, Admin login & notice publishing | Playwright / Cypress | Zero unhandled runtime exceptions |
| **Security Audit** | SQL Injection, XSS, Unauthorized endpoint access | OWASP ZAP, SonarQube | Zero critical or high vulnerabilities |
| **Performance** | API response times, Concurrent submission load | Apache JMeter / k6 | 200 concurrent users with < 300ms latency |

---

*Authored by:* Technical Lead & Full-Stack Systems Architect  
*Approved by:* Project Secretariat, IIFCCMS Greater Noida