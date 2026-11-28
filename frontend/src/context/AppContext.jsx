import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  INITIAL_SETTINGS,
  INITIAL_COURSES,
  INITIAL_NOTICES,
  INITIAL_APPLICATIONS,
  INITIAL_FACULTY,
  INITIAL_GALLERY,
  INITIAL_INQUIRIES,
  INITIAL_HERO_SLIDES,
  INITIAL_HIGHLIGHTS,
  INITIAL_TESTIMONIALS,
  INITIAL_GOVERNORS,
  INITIAL_MANAGING_COMMITTEE,
  INITIAL_ADVISORY_COUNCIL,
  INITIAL_APPROVALS,
  INITIAL_PUBLIC_DISCLOSURES,
  INITIAL_SOCIAL_INITIATIVES,
  INITIAL_DOWNLOAD_ASSETS,
  INITIAL_SCHOLARSHIPS
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

  // 8. Hero Slides State (Item 1)
  const [heroSlides, setHeroSlides] = useState(() => {
    const saved = localStorage.getItem('iifccms_hero_slides');
    return saved ? JSON.parse(saved) : INITIAL_HERO_SLIDES;
  });

  // 9. Campus Highlights State (Item 4)
  const [highlights, setHighlights] = useState(() => {
    const saved = localStorage.getItem('iifccms_highlights');
    return saved ? JSON.parse(saved) : INITIAL_HIGHLIGHTS;
  });

  // 10. Testimonials State (Item 6)
  const [testimonials, setTestimonials] = useState(() => {
    const saved = localStorage.getItem('iifccms_testimonials');
    return saved ? JSON.parse(saved) : INITIAL_TESTIMONIALS;
  });

  // 11. Board of Governors (Item 7)
  const [governors, setGovernors] = useState(() => {
    const saved = localStorage.getItem('iifccms_governors');
    return saved ? JSON.parse(saved) : INITIAL_GOVERNORS;
  });

  // 12. Managing Committee (Item 8)
  const [managingCommittee, setManagingCommittee] = useState(() => {
    const saved = localStorage.getItem('iifccms_managing_committee');
    return saved ? JSON.parse(saved) : INITIAL_MANAGING_COMMITTEE;
  });

  // 13. Advisory Council (Item 9)
  const [advisoryCouncil, setAdvisoryCouncil] = useState(() => {
    const saved = localStorage.getItem('iifccms_advisory_council');
    return saved ? JSON.parse(saved) : INITIAL_ADVISORY_COUNCIL;
  });

  // 14. Approvals & Affiliations (Item 10)
  const [approvals, setApprovals] = useState(() => {
    const saved = localStorage.getItem('iifccms_approvals');
    return saved ? JSON.parse(saved) : INITIAL_APPROVALS;
  });

  // 15. Public Disclosures (Item 11)
  const [publicDisclosures, setPublicDisclosures] = useState(() => {
    const saved = localStorage.getItem('iifccms_public_disclosures');
    return saved ? JSON.parse(saved) : INITIAL_PUBLIC_DISCLOSURES;
  });

  // 16. Social Initiatives (Item 12)
  const [socialInitiatives, setSocialInitiatives] = useState(() => {
    const saved = localStorage.getItem('iifccms_social_initiatives');
    return saved ? JSON.parse(saved) : INITIAL_SOCIAL_INITIATIVES;
  });

  // 17. Downloadable Assets (Items 14, 15, 16)
  const [downloadAssets, setDownloadAssets] = useState(() => {
    const saved = localStorage.getItem('iifccms_download_assets');
    return saved ? JSON.parse(saved) : INITIAL_DOWNLOAD_ASSETS;
  });

  // 18. Scholarships (Item 18)
  const [scholarships, setScholarships] = useState(() => {
    const saved = localStorage.getItem('iifccms_scholarships');
    return saved ? JSON.parse(saved) : INITIAL_SCHOLARSHIPS;
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

  useEffect(() => {
    localStorage.setItem('iifccms_hero_slides', JSON.stringify(heroSlides));
  }, [heroSlides]);

  useEffect(() => {
    localStorage.setItem('iifccms_highlights', JSON.stringify(highlights));
  }, [highlights]);

  useEffect(() => {
    localStorage.setItem('iifccms_testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  useEffect(() => {
    localStorage.setItem('iifccms_governors', JSON.stringify(governors));
  }, [governors]);

  useEffect(() => {
    localStorage.setItem('iifccms_managing_committee', JSON.stringify(managingCommittee));
  }, [managingCommittee]);

  useEffect(() => {
    localStorage.setItem('iifccms_advisory_council', JSON.stringify(advisoryCouncil));
  }, [advisoryCouncil]);

  useEffect(() => {
    localStorage.setItem('iifccms_approvals', JSON.stringify(approvals));
  }, [approvals]);

  useEffect(() => {
    localStorage.setItem('iifccms_public_disclosures', JSON.stringify(publicDisclosures));
  }, [publicDisclosures]);

  useEffect(() => {
    localStorage.setItem('iifccms_social_initiatives', JSON.stringify(socialInitiatives));
  }, [socialInitiatives]);

  useEffect(() => {
    localStorage.setItem('iifccms_download_assets', JSON.stringify(downloadAssets));
  }, [downloadAssets]);

  useEffect(() => {
    localStorage.setItem('iifccms_scholarships', JSON.stringify(scholarships));
  }, [scholarships]);

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

  // Hero Slides Actions (Item 1)
  const addHeroSlide = (slide) => {
    const item = { ...slide, id: Date.now(), order: heroSlides.length + 1, isActive: true };
    setHeroSlides(prev => [...prev, item]);
    showToast("Landing banner photo added!");
  };

  const updateHeroSlide = (id, fields) => {
    setHeroSlides(prev => prev.map(s => s.id === id ? { ...s, ...fields } : s));
    showToast("Landing banner slide updated!");
  };

  const deleteHeroSlide = (id) => {
    setHeroSlides(prev => prev.filter(s => s.id !== id));
    showToast("Banner slide removed.", "info");
  };

  // Highlights Actions (Item 4)
  const addHighlight = (hl) => {
    const item = { ...hl, id: Date.now() };
    setHighlights(prev => [item, ...prev]);
    showToast("Campus highlight added!");
  };

  const updateHighlight = (id, fields) => {
    setHighlights(prev => prev.map(h => h.id === id ? { ...h, ...fields } : h));
    showToast("Campus highlight updated!");
  };

  const deleteHighlight = (id) => {
    setHighlights(prev => prev.filter(h => h.id !== id));
    showToast("Highlight removed.", "info");
  };

  // Testimonials Actions (Item 6)
  const addTestimonial = (t) => {
    const item = { ...t, id: Date.now() };
    setTestimonials(prev => [item, ...prev]);
    showToast("Testimonial added successfully!");
  };

  const updateTestimonial = (id, fields) => {
    setTestimonials(prev => prev.map(t => t.id === id ? { ...t, ...fields } : t));
    showToast("Testimonial updated!");
  };

  const deleteTestimonial = (id) => {
    setTestimonials(prev => prev.filter(t => t.id !== id));
    showToast("Testimonial removed.", "info");
  };

  // Governance Actions (Items 7, 8, 9)
  const addGovernor = (g) => {
    const item = { ...g, id: Date.now() };
    setGovernors(prev => [...prev, item]);
    showToast("Governor profile added!");
  };

  const updateGovernor = (id, fields) => {
    setGovernors(prev => prev.map(g => g.id === id ? { ...g, ...fields } : g));
    showToast("Governor profile updated!");
  };

  const deleteGovernor = (id) => {
    setGovernors(prev => prev.filter(g => g.id !== id));
    showToast("Governor profile removed.", "info");
  };

  const addCommitteeMember = (m) => {
    const item = { ...m, id: Date.now() };
    setManagingCommittee(prev => [...prev, item]);
    showToast("Managing Committee member added!");
  };

  const updateCommitteeMember = (id, fields) => {
    setManagingCommittee(prev => prev.map(m => m.id === id ? { ...m, ...fields } : m));
    showToast("Managing Committee member updated!");
  };

  const deleteCommitteeMember = (id) => {
    setManagingCommittee(prev => prev.filter(m => m.id !== id));
    showToast("Committee member removed.", "info");
  };

  const addAdvisoryMember = (a) => {
    const item = { ...a, id: Date.now() };
    setAdvisoryCouncil(prev => [...prev, item]);
    showToast("Advisory Council member added!");
  };

  const updateAdvisoryMember = (id, fields) => {
    setAdvisoryCouncil(prev => prev.map(a => a.id === id ? { ...a, ...fields } : a));
    showToast("Advisory Council member updated!");
  };

  const deleteAdvisoryMember = (id) => {
    setAdvisoryCouncil(prev => prev.filter(a => a.id !== id));
    showToast("Advisory member removed.", "info");
  };

  // Regulatory & Disclosures Actions (Items 10, 11)
  const addApproval = (a) => {
    const item = { ...a, id: Date.now() };
    setApprovals(prev => [item, ...prev]);
    showToast("Regulatory approval document registered!");
  };

  const updateApproval = (id, fields) => {
    setApprovals(prev => prev.map(a => a.id === id ? { ...a, ...fields } : a));
    showToast("Approval document updated!");
  };

  const deleteApproval = (id) => {
    setApprovals(prev => prev.filter(a => a.id !== id));
    showToast("Approval document removed.", "info");
  };

  const addPublicDisclosure = (p) => {
    const item = { ...p, id: Date.now() };
    setPublicDisclosures(prev => [...prev, item]);
    showToast("Mandatory disclosure entry added!");
  };

  const updatePublicDisclosure = (id, fields) => {
    setPublicDisclosures(prev => prev.map(p => p.id === id ? { ...p, ...fields } : p));
    showToast("Mandatory disclosure updated!");
  };

  const deletePublicDisclosure = (id) => {
    setPublicDisclosures(prev => prev.filter(p => p.id !== id));
    showToast("Disclosure entry removed.", "info");
  };

  // Social Initiatives Actions (Item 12)
  const addSocialInitiative = (si) => {
    const item = { ...si, id: Date.now() };
    setSocialInitiatives(prev => [item, ...prev]);
    showToast("Social initiative event recorded!");
  };

  const updateSocialInitiative = (id, fields) => {
    setSocialInitiatives(prev => prev.map(s => s.id === id ? { ...s, ...fields } : s));
    showToast("Social initiative updated!");
  };

  const deleteSocialInitiative = (id) => {
    setSocialInitiatives(prev => prev.filter(s => s.id !== id));
    showToast("Social initiative removed.", "info");
  };

  // Official Downloads Actions (Items 14, 15, 16)
  const updateDownloadAsset = (key, data) => {
    setDownloadAssets(prev => ({
      ...prev,
      [key]: { ...prev[key], ...data, lastUpdated: new Date().toISOString().split('T')[0] }
    }));
    showToast(`Official ${key} asset updated!`);
  };

  // Scholarships Actions (Item 18)
  const addScholarship = (sc) => {
    const item = { ...sc, id: Date.now(), isActive: true };
    setScholarships(prev => [...prev, item]);
    showToast("Scholarship scheme created!");
  };

  const updateScholarship = (id, fields) => {
    setScholarships(prev => prev.map(s => s.id === id ? { ...s, ...fields } : s));
    showToast("Scholarship scheme updated!");
  };

  const deleteScholarship = (id) => {
    setScholarships(prev => prev.filter(s => s.id !== id));
    showToast("Scholarship scheme removed.", "info");
  };

  // Course Subjects & Curriculum Update (Item 13)
  const updateCourseSemesterSubjects = (courseId, semesterNumber, newSubjects) => {
    setCourses(prev => prev.map(c => {
      if (c.id === courseId) {
        const existingSemesters = c.semesters || [];
        const semIdx = existingSemesters.findIndex(s => s.sem === semesterNumber);
        let updatedSemesters;
        if (semIdx >= 0) {
          updatedSemesters = existingSemesters.map(s => s.sem === semesterNumber ? { ...s, subjects: newSubjects } : s);
        } else {
          updatedSemesters = [...existingSemesters, { sem: semesterNumber, subjects: newSubjects }];
        }
        return { ...c, semesters: updatedSemesters };
      }
      return c;
    }));
    showToast(`Curriculum subjects for Semester ${semesterNumber} updated!`);
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
    setHeroSlides(INITIAL_HERO_SLIDES);
    setHighlights(INITIAL_HIGHLIGHTS);
    setTestimonials(INITIAL_TESTIMONIALS);
    setGovernors(INITIAL_GOVERNORS);
    setManagingCommittee(INITIAL_MANAGING_COMMITTEE);
    setAdvisoryCouncil(INITIAL_ADVISORY_COUNCIL);
    setApprovals(INITIAL_APPROVALS);
    setPublicDisclosures(INITIAL_PUBLIC_DISCLOSURES);
    setSocialInitiatives(INITIAL_SOCIAL_INITIATIVES);
    setDownloadAssets(INITIAL_DOWNLOAD_ASSETS);
    setScholarships(INITIAL_SCHOLARSHIPS);
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
      heroSlides,
      highlights,
      testimonials,
      governors,
      managingCommittee,
      advisoryCouncil,
      approvals,
      publicDisclosures,
      socialInitiatives,
      downloadAssets,
      scholarships,
      addHeroSlide,
      updateHeroSlide,
      deleteHeroSlide,
      addHighlight,
      updateHighlight,
      deleteHighlight,
      addTestimonial,
      updateTestimonial,
      deleteTestimonial,
      addGovernor,
      updateGovernor,
      deleteGovernor,
      addCommitteeMember,
      updateCommitteeMember,
      deleteCommitteeMember,
      addAdvisoryMember,
      updateAdvisoryMember,
      deleteAdvisoryMember,
      addApproval,
      updateApproval,
      deleteApproval,
      addPublicDisclosure,
      updatePublicDisclosure,
      deletePublicDisclosure,
      addSocialInitiative,
      updateSocialInitiative,
      deleteSocialInitiative,
      updateDownloadAsset,
      addScholarship,
      updateScholarship,
      deleteScholarship,
      updateCourseSemesterSubjects,
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
