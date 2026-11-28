import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  INITIAL_SETTINGS,
  INITIAL_COURSES,
  INITIAL_NOTICES,
  INITIAL_APPLICATIONS,
  INITIAL_FACULTY,
  INITIAL_GALLERY,
  INITIAL_INQUIRIES
} from '../data/mockData';

const AppContext = createContext();

export function AppProvider({ children }) {
  // 1. Settings State
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('iifccms_settings');
    return saved ? JSON.parse(saved) : INITIAL_SETTINGS;
  });

  // 2. Courses State
  const [courses, setCourses] = useState(() => {
    const saved = localStorage.getItem('iifccms_courses');
    return saved ? JSON.parse(saved) : INITIAL_COURSES;
  });

  // 3. Notices State
  const [notices, setNotices] = useState(() => {
    const saved = localStorage.getItem('iifccms_notices');
    return saved ? JSON.parse(saved) : INITIAL_NOTICES;
  });

  // 4. Applications State
  const [applications, setApplications] = useState(() => {
    const saved = localStorage.getItem('iifccms_applications');
    return saved ? JSON.parse(saved) : INITIAL_APPLICATIONS;
  });

  // 5. Faculty State
  const [faculty, setFaculty] = useState(() => {
    const saved = localStorage.getItem('iifccms_faculty');
    return saved ? JSON.parse(saved) : INITIAL_FACULTY;
  });

  // 6. Gallery State
  const [gallery, setGallery] = useState(() => {
    const saved = localStorage.getItem('iifccms_gallery');
    return saved ? JSON.parse(saved) : INITIAL_GALLERY;
  });

  // 7. Inquiries State
  const [inquiries, setInquiries] = useState(() => {
    const saved = localStorage.getItem('iifccms_inquiries');
    return saved ? JSON.parse(saved) : INITIAL_INQUIRIES;
  });

  // 8. Accessibility Font Size Scaling System (A+, A, A-)
  const [fontSizeIndex, setFontSizeIndex] = useState(() => {
    const saved = localStorage.getItem('iifccms_font_level');
    if (saved !== null) {
      const idx = parseInt(saved, 10);
      if (!isNaN(idx) && idx >= 0 && idx <= 5) {
        return idx;
      }
    }
    return 2; // Default 14.5px (level 0: 100%)
  });

  // Global Toast / Flash Alert
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message, type = "success") => {
    setToastMessage({ message, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const FONT_SCALING_LEVELS = [
    { level: -2, size: 12.5, label: "86%" },
    { level: -1, size: 13.5, label: "93%" },
    { level: 0, size: 14.5, label: "100% Normal" },
    { level: 1, size: 16.0, label: "110%" },
    { level: 2, size: 17.5, label: "120%" },
    { level: 3, size: 19.0, label: "131%" }
  ];

  const increaseFontSize = () => {
    setFontSizeIndex(prev => {
      const next = Math.min(prev + 1, FONT_SCALING_LEVELS.length - 1);
      if (next !== prev) {
        showToast(`Font Size: ${FONT_SCALING_LEVELS[next].label}`, "info");
      }
      return next;
    });
  };

  const resetFontSize = () => {
    setFontSizeIndex(2);
    showToast("Font Size: Standard (100%)", "info");
  };

  const decreaseFontSize = () => {
    setFontSizeIndex(prev => {
      const next = Math.max(prev - 1, 0);
      if (next !== prev) {
        showToast(`Font Size: ${FONT_SCALING_LEVELS[next].label}`, "info");
      }
      return next;
    });
  };

  // Sync font size to document root across every page
  useEffect(() => {
    const current = FONT_SCALING_LEVELS[fontSizeIndex] || FONT_SCALING_LEVELS[2];
    document.documentElement.style.fontSize = `${current.size}px`;
    localStorage.setItem('iifccms_font_level', fontSizeIndex.toString());
  }, [fontSizeIndex]);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('iifccms_settings', JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem('iifccms_courses', JSON.stringify(courses));
  }, [courses]);

  useEffect(() => {
    localStorage.setItem('iifccms_notices', JSON.stringify(notices));
  }, [notices]);

  useEffect(() => {
    localStorage.setItem('iifccms_applications', JSON.stringify(applications));
  }, [applications]);

  useEffect(() => {
    localStorage.setItem('iifccms_faculty', JSON.stringify(faculty));
  }, [faculty]);

  useEffect(() => {
    localStorage.setItem('iifccms_gallery', JSON.stringify(gallery));
  }, [gallery]);

  useEffect(() => {
    localStorage.setItem('iifccms_inquiries', JSON.stringify(inquiries));
  }, [inquiries]);

  // Notice Actions
  const addNotice = (newNotice) => {
    const notice = {
      ...newNotice,
      id: Date.now(),
      slug: newNotice.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      publishDate: newNotice.publishDate || new Date().toISOString().split('T')[0],
      isActive: true
    };
    setNotices(prev => [notice, ...prev]);
    showToast("Notice circular successfully published to Public Board!");
    return notice;
  };

  const updateNotice = (id, updatedFields) => {
    setNotices(prev => prev.map(n => n.id === id ? { ...n, ...updatedFields } : n));
    showToast("Notice updated successfully!");
  };

  const deleteNotice = (id) => {
    setNotices(prev => prev.filter(n => n.id !== id));
    showToast("Notice circular removed from system.", "info");
  };

  const toggleNoticePin = (id) => {
    setNotices(prev => prev.map(n => n.id === id ? { ...n, isPinned: !n.isPinned } : n));
    showToast("Notice priority pinned status toggled!");
  };

  // Course Actions
  const updateCourse = (id, updatedFields) => {
    setCourses(prev => prev.map(c => c.id === id ? { ...c, ...updatedFields } : c));
    showToast("Course details and fee structure updated!");
  };

  const toggleCourseAdmission = (id) => {
    setCourses(prev => prev.map(c => c.id === id ? { ...c, isAdmissionsOpen: !c.isAdmissionsOpen } : c));
    showToast("Course admission status updated!");
  };

  // Admission Actions
  const submitApplication = (formData) => {
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newAppId = `IIFCCMS-2026-${randomSuffix}`;
    const now = new Date();
    const submittedAt = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const newApp = {
      ...formData,
      id: Date.now(),
      applicationId: newAppId,
      status: "SUBMITTED",
      counselorNotes: "Application submitted online by candidate. Initial documents attached.",
      submittedAt
    };

    setApplications(prev => [newApp, ...prev]);
    showToast(`Application successfully registered! ID: ${newAppId}`);
    return newApp;
  };

  const updateApplicationStatus = (id, newStatus, counselorNotes) => {
    setApplications(prev => prev.map(app => {
      if (app.id === id) {
        return {
          ...app,
          status: newStatus,
          counselorNotes: counselorNotes !== undefined ? counselorNotes : app.counselorNotes
        };
      }
      return app;
    }));
    showToast(`Application status updated to ${newStatus}`);
  };

  // Faculty Actions
  const addFaculty = (facultyMember) => {
    const item = {
      ...facultyMember,
      id: Date.now()
    };
    setFaculty(prev => [item, ...prev]);
    showToast("Faculty profile added to public directory!");
  };

  const deleteFaculty = (id) => {
    setFaculty(prev => prev.filter(f => f.id !== id));
    showToast("Faculty profile removed.", "info");
  };

  // Gallery Actions
  const addGalleryItem = (galleryItem) => {
    const item = {
      ...galleryItem,
      id: Date.now()
    };
    setGallery(prev => [item, ...prev]);
    showToast("Campus media image added to gallery!");
  };

  const deleteGalleryItem = (id) => {
    setGallery(prev => prev.filter(g => g.id !== id));
    showToast("Media photo removed from gallery.", "info");
  };

  // Inquiries Actions
  const submitInquiry = (inquiryData) => {
    const now = new Date();
    const submittedAt = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const newInquiry = {
      ...inquiryData,
      id: Date.now(),
      status: "NEW",
      submittedAt
    };
    setInquiries(prev => [newInquiry, ...prev]);
    showToast("Inquiry delivered to admission desk! We will contact you shortly.");
    return newInquiry;
  };

  const updateInquiryStatus = (id, status) => {
    setInquiries(prev => prev.map(inq => inq.id === id ? { ...inq, status } : inq));
    showToast(`Inquiry marked as ${status}`);
  };

  // Settings Actions
  const updateSettings = (newSettings) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
    showToast("System configuration and site contacts saved!");
  };

  // Reset to initial demo data
  const resetToFactoryDefaults = () => {
    setSettings(INITIAL_SETTINGS);
    setCourses(INITIAL_COURSES);
    setNotices(INITIAL_NOTICES);
    setApplications(INITIAL_APPLICATIONS);
    setFaculty(INITIAL_FACULTY);
    setGallery(INITIAL_GALLERY);
    setInquiries(INITIAL_INQUIRIES);
    showToast("System reset to clean initial demo data!", "info");
  };

  return (
    <AppContext.Provider value={{
      settings,
      courses,
      notices,
      applications,
      faculty,
      gallery,
      inquiries,
      toastMessage,
      showToast,
      addNotice,
      updateNotice,
      deleteNotice,
      toggleNoticePin,
      updateCourse,
      toggleCourseAdmission,
      submitApplication,
      updateApplicationStatus,
      addFaculty,
      deleteFaculty,
      addGalleryItem,
      deleteGalleryItem,
      submitInquiry,
      updateInquiryStatus,
      updateSettings,
      resetToFactoryDefaults,
      fontSizeIndex,
      increaseFontSize,
      resetFontSize,
      decreaseFontSize
    }}>
      {children}
      {toastMessage && (
        <div className={`global-toast-notification ${toastMessage.type}`}>
          <span>{toastMessage.message}</span>
          <button onClick={() => setToastMessage(null)}>&times;</button>
        </div>
      )}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
