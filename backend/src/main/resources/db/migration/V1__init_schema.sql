-- =========================================================================
-- IIFCCMS College Portal & Secretariat Schema Initializer (V1)
-- Database: PostgreSQL 16+
-- =========================================================================

-- Roles & Users
CREATE TABLE IF NOT EXISTS roles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS user_roles (
    user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    role_id INT NOT NULL REFERENCES roles(id) ON DELETE CASCADE,
    PRIMARY KEY (user_id, role_id)
);

-- Academic Courses & Syllabi
CREATE TABLE IF NOT EXISTS courses (
    id BIGSERIAL PRIMARY KEY,
    course_code VARCHAR(20) UNIQUE NOT NULL,
    title VARCHAR(150) NOT NULL,
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

-- Admissions Applications
CREATE TABLE IF NOT EXISTS applications (
    id BIGSERIAL PRIMARY KEY,
    application_id VARCHAR(50) UNIQUE NOT NULL,
    course_id BIGINT NOT NULL REFERENCES courses(id),
    full_name VARCHAR(120) NOT NULL,
    gender VARCHAR(20) NOT NULL,
    date_of_birth DATE NOT NULL,
    category VARCHAR(30) NOT NULL,
    email VARCHAR(120) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    parent_name VARCHAR(120) NOT NULL,
    parent_phone VARCHAR(15) NOT NULL,
    address_line TEXT NOT NULL,
    city VARCHAR(80) NOT NULL,
    state VARCHAR(80) NOT NULL,
    pincode VARCHAR(10) NOT NULL,
    tenth_percentage NUMERIC(5, 2) NOT NULL,
    twelfth_board VARCHAR(100) NOT NULL,
    twelfth_percentage NUMERIC(5, 2) NOT NULL,
    twelfth_stream VARCHAR(50) NOT NULL,
    scholarship_applied VARCHAR(50),
    scholarship_percentage NUMERIC(5, 2) DEFAULT 0.00,
    status VARCHAR(30) DEFAULT 'SUBMITTED' NOT NULL,
    counselor_notes TEXT,
    submitted_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Real-Time Notices & Circulars
CREATE TABLE IF NOT EXISTS notice_categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS notices (
    id BIGSERIAL PRIMARY KEY,
    category_id INT NOT NULL REFERENCES notice_categories(id),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(300) UNIQUE NOT NULL,
    content TEXT NOT NULL,
    attachment_url VARCHAR(500),
    is_pinned BOOLEAN DEFAULT FALSE NOT NULL,
    is_active BOOLEAN DEFAULT TRUE NOT NULL,
    publish_date DATE NOT NULL,
    expiry_date DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Faculty Directory
CREATE TABLE IF NOT EXISTS departments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS faculty (
    id BIGSERIAL PRIMARY KEY,
    department_id INT NOT NULL REFERENCES departments(id),
    full_name VARCHAR(120) NOT NULL,
    designation VARCHAR(100) NOT NULL,
    qualifications VARCHAR(255) NOT NULL,
    email VARCHAR(120),
    bio TEXT,
    photo_url VARCHAR(500),
    display_priority INT DEFAULT 0 NOT NULL,
    is_active BOOLEAN DEFAULT TRUE NOT NULL
);

-- Inquiries Desk
CREATE TABLE IF NOT EXISTS inquiries (
    id BIGSERIAL PRIMARY KEY,
    full_name VARCHAR(120) NOT NULL,
    email VARCHAR(120) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    subject VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(30) DEFAULT 'NEW' NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);
