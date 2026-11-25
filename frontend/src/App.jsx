import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { AppProvider } from './context/AppContext';

// Public Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import AdmissionsPage from './pages/AdmissionsPage';
import FacilitiesPage from './pages/FacilitiesPage';
import FacultyPage from './pages/FacultyPage';
import CcsuWeblinksPage from './pages/CcsuWeblinksPage';
import PlacementsPage from './pages/PlacementsPage';
import LatestUpdatesPage from './pages/LatestUpdatesPage';

// Admin Components & Pages
import ProtectedRoute from './components/admin/ProtectedRoute';
import AdminLayout from './components/admin/AdminLayout';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminAdmissionsPage from './pages/admin/AdminAdmissionsPage';
import AdminNoticesPage from './pages/admin/AdminNoticesPage';
import AdminCoursesPage from './pages/admin/AdminCoursesPage';
import AdminFacultyPage from './pages/admin/AdminFacultyPage';
import AdminGalleryPage from './pages/admin/AdminGalleryPage';
import AdminSettingsPage from './pages/admin/AdminSettingsPage';

export default function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            {/* Public Institutional Portal & Dedicated Category Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/facilities" element={<FacilitiesPage />} />
            <Route path="/faculty" element={<FacultyPage />} />
            <Route path="/ccsu-weblinks" element={<CcsuWeblinksPage />} />
            <Route path="/placements" element={<PlacementsPage />} />
            <Route path="/latest-updates" element={<LatestUpdatesPage />} />

            {/* Admin Authentication */}
            <Route path="/admin/login" element={<AdminLoginPage />} />

            {/* Protected Admin Console */}
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="/admin/dashboard" replace />} />
              <Route path="dashboard" element={<AdminDashboardPage />} />
              <Route path="admissions" element={<AdminAdmissionsPage />} />
              <Route path="notices" element={<AdminNoticesPage />} />
              <Route path="courses" element={<AdminCoursesPage />} />
              <Route path="faculty" element={<AdminFacultyPage />} />
              <Route path="gallery" element={<AdminGalleryPage />} />
              <Route path="settings" element={<AdminSettingsPage />} />
            </Route>

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </AuthProvider>
  );
}
