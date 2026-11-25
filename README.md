# Institutional College Web Portal & Administrative Management System

[![Java](https://img.shields.io/badge/Java-21-orange.svg?logo=openjdk)](https://openjdk.org/projects/jdk/21/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2+-brightgreen.svg?logo=springboot)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/React-18+-blue.svg?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5+-purple.svg?logo=vite)](https://vitejs.dev/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16+-blue.svg?logo=postgresql)](https://www.postgresql.org/)
[![License](https://img.shields.io/badge/License-Proprietary-red.svg)](LICENSE)

An enterprise-grade, high-performance web portal and comprehensive Content Management & Admissions Secretariat System engineered for **IIF College of Commerce and Management Studies (IIFCCMS)** (Affiliated to Chaudhary Charan Singh University, Meerut; NAAC A++ Accredited; Governing Body: IIF Trust).

---

## 🛠 Technology Stack

### Frontend (Client Tier)
- **Framework & Bundler:** **React 18** powered by **Vite** (Ultra-fast Hot Module Replacement, optimized ES module compilation, minimal bundle size).
- **Styling & UI Components:** Tailwind CSS, PostCSS, Lucide React Icons.
- **Routing:** React Router DOM v6 (declarative client-side routing with protected admin layouts).
- **HTTP Client:** Axios with centralized interceptors for automatic JWT authentication and token refresh handling.
- **Form Handling & Validation:** Formik / React Hook Form with Yup schema validation.

### Backend (Server Tier)
- **Runtime & Language:** **Java 21 (LTS)** leveraging modern language features and virtual threads for high throughput.
- **Framework:** **Spring Boot 3.x**
  - **Spring Security 6:** Stateless JWT (JSON Web Token) authentication with BCrypt password hashing.
  - **Spring Data JPA & Hibernate:** Object-Relational Mapping (ORM) and dynamic criteria queries.
  - **HikariCP:** Ultra-fast, low-overhead database connection pooling.
  - **Hibernate Validator:** Comprehensive JSR-380 bean validation.
  - **Spring Mail / JavaMailSender:** Asynchronous email dispatch pipeline.
- **Database Migrations:** Flyway / Liquibase.
- **Documentation:** Springdoc-OpenAPI / Swagger UI.

### Persistence Tier (Database)
- **Database:** **PostgreSQL 16+** (Relational, ACID-compliant, robust indexing, and JSONB document support for flexible audit records).

---

## 🌐 System Architecture & Portals

The application features a decoupled architecture operating on a single unified backend API:

```
                            ┌───────────────────────────────────┐
                            │    PostgreSQL 16 Database         │
                            └─────────────────▲─────────────────┘
                                              │ (JDBC / Hibernate)
                            ┌─────────────────┴─────────────────┐
                            │   Spring Boot 3 REST API (Java 21)│
                            │      Port: 8080 | Stateless JWT   │
                            └───────▲───────────────────▲───────┘
                                    │                   │
               Public Endpoints     │                   │ Secured JWT Endpoints
            (Read data, submit app) │                   │ (Full CRUD & Lead Admin)
                                    │                   │
                      ┌─────────────┴─────┐       ┌─────┴─────────────┐
                      │   Public Portal   │       │    Admin Panel    │
                      │   (React + Vite)  │       │   (React + Vite)  │
                      │     Port: 5173    │       │     Port: 5173    │
                      │  Path: /          │       │  Path: /admin     │
                      └───────────────────┘       └───────────────────┘
```

### 1. Public Portal (Visitor Interface)
- **Institutional Heritage & Governance:** Showcases 35+ years legacy of Indian Institute of Finance (Estd. 1987), IIF Trust, CCSU Affiliation codes (**BBA: 454, B.Com: 472, B.A.: 478**), and NAAC A++ accreditation.
- **Academic Program Catalog:** Interactive course breakdowns (BBA, B.Com, B.A.), eligibility norms, duration, and one-click NEP 2020 syllabus downloads.
- **Dynamic Fee & Merit Scholarship Calculator:** Instant calculation of tuition fee concessions (Tier 1: 25%, Tier 2: 15%, Tier 3: 10%) based on 10+2 marksheet aggregates.
- **Digital Admissions Desk:** 4-step responsive application form generating a downloadable Provisional Slip with a unique tracking code (e.g., `IIFCCMS-2026-7841`).
- **Live Notice Board & Circulars:** Searchable and filterable announcements, university notifications, and exam schedules with direct PDF attachments.
- **Campus Life Showcase:** Photo gallery of the 6.47-acre lush green campus, air-conditioned lecture theatres, IT labs, and 55,000+ volume central library.
- **Faculty & Staff Directory:** Searchable departmental profiles with qualifications and designations.
- **Contact & 24x7 Helplines:** Integrated Anti-Ragging helpline, WhatsApp admission helpline, and interactive Google Maps location (Plot 45A, Knowledge Park III, Greater Noida).

### 2. Admin Panel (Secure Operations & Dynamic CMS)
> **Zero Code Maintenance:** Every piece of information shown on the public panel can be edited, published, or removed via this administrative dashboard.

- **Role-Based Access Control (RBAC):** Distinct roles for `SUPER_ADMIN`, `ACADEMIC_ADMIN`, and `ADMISSION_OFFICER`.
- **Real-Time Notice Manager:** Publish, update, pin, unpublish, or attach PDF circulars that reflect immediately on the public website.
- **Academic Programs & Syllabus CMS:** Update course descriptions, annual fees, seat intakes, eligibility, and upload new syllabus documents.
- **Admissions Lead & Application CRM:**
  - View, search, and filter student applications by course, status, date, or percentage.
  - Detailed applicant inspection with marksheet verification.
  - Multi-state workflow transitions (`SUBMITTED` ➔ `UNDER_REVIEW` ➔ `DOCS_VERIFIED` ➔ `APPROVED` / `REJECTED` ➔ `ADMITTED`).
  - One-click export to CSV / Excel for physical counseling records.
- **Faculty Directory CMS:** Add, edit, or deactivate professors and department heads.
- **Campus Gallery CMS:** Upload, categorize, and reorder campus photos.
- **Site Configuration:** Modify college contact numbers, emergency helplines, social media links, and marquee alerts.
- **Audit Logs:** Full traceability of administrative changes with timestamps and IP logging.

---

## 📋 Prerequisites

Before setting up the project locally, ensure you have the following installed:

| Tool | Required Version | Verification Command |
| :--- | :--- | :--- |
| **Java Development Kit (JDK)** | **21 LTS** | `java -version` |
| **Node.js** | **18.x or 20.x LTS** | `node -v` |
| **npm** / **pnpm** | **9.x+** | `npm -v` |
| **PostgreSQL** | **15.x or 16.x** | `psql -V` |
| **Maven** (optional, wrapper included) | **3.9+** | `mvn -v` |

---

## 🚀 Quick Start & Local Setup

### Step 1: Database Setup (PostgreSQL)

1. Open your terminal or `psql` console:
   ```sql
   CREATE DATABASE iifccms_db;
   CREATE USER iif_admin WITH ENCRYPTED PASSWORD 'postgres_secure_password';
   GRANT ALL PRIVILEGES ON DATABASE iifccms_db TO iif_admin;
   ```
2. Enable necessary extensions (optional):
   ```sql
   \c iifccms_db
   CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
   ```

---

### Step 2: Backend Setup (Java 21 & Spring Boot)

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Configure environment properties in `src/main/resources/application.yml` (or create an `application-dev.yml`):
   ```yaml
   server:
     port: 8080

   spring:
     application:
       name: college-portal-backend
     datasource:
       url: jdbc:postgresql://localhost:5432/iifccms_db
       username: iif_admin
       password: postgres_secure_password
       driver-class-name: org.postgresql.Driver
       hikari:
         maximum-pool-size: 15
         minimum-idle: 5
     jpa:
       hibernate:
         ddl-auto: update # Use 'validate' in production with Flyway
       show-sql: false
       properties:
         hibernate:
           dialect: org.hibernate.dialect.PostgreSQLDialect
           format_sql: true
     servlet:
       multipart:
         max-file-size: 15MB
         max-request-size: 15MB

   # JWT Security Configuration
   jwt:
     secret: 404E635266556A586E3272357538782F413F4428472B4B6250645367566B5970
     access-token-expiration-ms: 86400000   # 24 Hours
     refresh-token-expiration-ms: 604800000 # 7 Days

   # CORS Configuration
   app:
     cors:
       allowed-origins: "http://localhost:5173,http://localhost:3000"
   ```

3. Build and launch the Spring Boot application:
   ```bash
   # Using Maven Wrapper (Linux / macOS)
   ./mvnw clean spring-boot:run

   # Using Maven Wrapper (Windows PowerShell)
   .\mvnw.cmd clean spring-boot:run
   ```
   *The backend will boot up on port `8080`.*

---

### Step 3: Frontend Setup (React + Vite)

1. Open a new terminal session and navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `frontend` root:
   ```env
   VITE_API_BASE_URL=http://localhost:8080/api/v1
   VITE_COLLEGE_NAME="IIF College of Commerce and Management Studies"
   VITE_CAMPUS_LOCATION="Knowledge Park III, Greater Noida"
   ```

4. Launch the Vite development server:
   ```bash
   npm run dev
   ```
   *The client application will start at `http://localhost:5173`.*

---

## 🔐 Default Administrative Credentials

Upon initial startup with automatic seeding enabled:

| Account Role | Username / Email | Default Password | Access Level |
| :--- | :--- | :--- | :--- |
| **Super Admin** | `admin@iifccms.edu.in` | `Admin@2026!Secure` | Full Access (Users, Settings, CMS, Admissions) |
| **Academic Admin** | `academics@iifccms.edu.in` | `Academic@2026!` | Notices, Courses, Syllabi, Faculty, Events |
| **Admission Officer** | `admissions@iifccms.edu.in` | `Admission@2026!` | Student Applications, Inquiries, Status Updates |

> **Security Warning:** Change default passwords immediately upon deploying to any staging or production environment.

---

## 📡 Core API Reference Summary

The full Swagger/OpenAPI interactive interface is available at `http://localhost:8080/swagger-ui.html`.

### Key Public Endpoints
- `GET  /api/v1/public/courses` — Retrieve active courses with fees & syllabus info.
- `GET  /api/v1/public/notices` — Fetch categorized circulars (with pagination & search).
- `POST /api/v1/public/admissions/apply` — Submit candidate admission form & generate application slip.
- `GET  /api/v1/public/admissions/status/{appId}` — Check admission application status.
- `POST /api/v1/public/inquiries` — Submit general contact inquiry.

### Key Admin Endpoints (Requires `Authorization: Bearer <token>`)
- `POST  /api/v1/auth/login` — Authenticate and receive JWT access token.
- `GET   /api/v1/admin/dashboard/stats` — High-level metrics for dashboard charts.
- `GET   /api/v1/admin/admissions` — Search, filter, and paginate applicant records.
- `PATCH /api/v1/admin/admissions/{id}/status` — Update applicant status and counselor notes.
- `GET   /api/v1/admin/admissions/export` — Export applicant leads to Excel / CSV.
- `POST  /api/v1/admin/notices` — Upload and publish new circular (with PDF attachment).
- `PUT   /api/v1/admin/courses/{id}` — Modify course fees, eligibility, or intake.
- `POST  /api/v1/admin/faculty` — Add/edit faculty profiles with photo upload.

---

## 📁 Repository Directory Structure

```
clg-website/
├── PRD.md                     # Product Requirements Document
├── PWD.md                     # Project Workflow & Architecture Document
├── README.md                  # Master Project Documentation & Quickstart
├── proposal.md                # Institutional Pitch & Client Proposal
├── backend/                   # Spring Boot 3.x (Java 21) REST Backend
│   ├── src/main/java/         # Controllers, Entities, Services, Security
│   ├── src/main/resources/    # application.yml, DB migrations
│   └── pom.xml                # Maven Dependencies & Plugins
└── frontend/                  # React 18 + Vite Frontend Application
    ├── src/
    │   ├── api/               # Axios REST Clients (Public & Admin)
    │   ├── components/        # Reusable UI, Forms, Slips, Tables
    │   ├── context/           # Auth and Notification Context
    │   ├── pages/
    │   │   ├── public/        # Home, Courses, Admissions, Notices, Faculty
    │   │   └── admin/         # Login, Dashboard, CMS & Application Manager
    │   └── routes/            # React Router Routes & Protected Guards
    ├── package.json
    └── vite.config.js
```

---

## 🚢 Production Deployment Guide

### Option A: Docker Compose Deployment

The project can be booted with a single command using Docker:

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:16-alpine
    container_name: iif_postgres
    environment:
      POSTGRES_DB: iifccms_db
      POSTGRES_USER: iif_admin
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  backend:
    build: ./backend
    container_name: iif_backend
    depends_on:
      - postgres
    environment:
      SPRING_DATASOURCE_URL: jdbc:postgresql://postgres:5432/iifccms_db
      SPRING_DATASOURCE_USERNAME: iif_admin
      SPRING_DATASOURCE_PASSWORD: ${DB_PASSWORD}
    ports:
      - "8080:8080"

  frontend:
    build: ./frontend
    container_name: iif_frontend
    ports:
      - "80:80"

volumes:
  postgres_data:
```

Execute:
```bash
docker compose up -d --build
```

### Option B: Cloud VM Deployment (Hostinger / DigitalOcean / AWS)
1. **Database:** Provision a managed PostgreSQL instance or install PostgreSQL 16 on Ubuntu.
2. **Backend:** Package the Spring Boot app into a production jar:
   ```bash
   ./mvnw clean package -DskipTests
   java -jar target/college-portal-backend-1.0.0.jar --spring.profiles.active=prod
   ```
   Run as a `systemd` daemon.
3. **Frontend:** Build the production bundle:
   ```bash
   npm run build
   ```
   Serve the `dist/` directory via **Nginx** with reverse-proxy configurations pointing `/api` to `http://localhost:8080`.
4. **SSL Security:** Provision free automated SSL certificates using Let's Encrypt Certbot:
   ```bash
   sudo certbot --nginx -d iifccms.edu.in -d www.iifccms.edu.in
   ```

---

## 📄 Documentation Links

- [Product Requirements Document (PRD.md)](file:///d:/Personal%20Projects/clg-website/PRD.md) — Feature specifications, personas, and NFRs.
- [Project Workflow Document (PWD.md)](file:///d:/Personal%20Projects/clg-website/PWD.md) — System architecture, DB schema DDL, REST specs, and state diagrams.
- [Institutional Proposal (proposal.md)](file:///d:/Personal%20Projects/clg-website/proposal.md) — Pitch deck, costing, and legal accreditations.

---

## 👥 Contributors & Maintainers

- **Technical Development Cell:** IIF College of Commerce and Management Studies
- **Campus:** Plot No. 45A, Knowledge Park III, Greater Noida, Delhi NCR - 201310
- **Official Inquiries:** info@iifccms.edu.in | admission@iifccms.edu.in  
- **Helplines:** +91 98119 71002 | +91 98115 37057

*Copyright © 2026 IIF Trust / IIFCCMS. All Rights Reserved.*