import React, { createContext, useContext, useState, useEffect } from 'react';

// Demo Credentials Configuration
export const DEMO_ACCOUNTS = [
  {
    email: "admin@iifccms.edu.in",
    password: "Admin@2026!Secure",
    name: "Principal / Executive Secretariat",
    role: "ROLE_SUPER_ADMIN",
    roleLabel: "Super Administrator"
  },
  {
    email: "academics@iifccms.edu.in",
    password: "Academic@2026!",
    name: "Prof. Ritu Saxena (Academic Cell)",
    role: "ROLE_ACADEMIC_ADMIN",
    roleLabel: "Academic Administrator"
  },
  {
    email: "admissions@iifccms.edu.in",
    password: "Admission@2026!",
    name: "Counseling & Admissions Desk",
    role: "ROLE_ADMISSION_OFFICER",
    roleLabel: "Admission Officer"
  }
];

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const stored = localStorage.getItem('iifccms_auth_user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const [authError, setAuthError] = useState("");

  const login = (email, password) => {
    setAuthError("");
    const matched = DEMO_ACCOUNTS.find(
      acc => acc.email.toLowerCase() === email.trim().toLowerCase() && acc.password === password
    );

    if (matched) {
      const userData = {
        email: matched.email,
        name: matched.name,
        role: matched.role,
        roleLabel: matched.roleLabel,
        token: "demo-jwt-token-" + Date.now()
      };
      setCurrentUser(userData);
      localStorage.setItem('iifccms_auth_user', JSON.stringify(userData));
      return { success: true };
    } else {
      const err = "Invalid credentials. Please verify your email & password, or use the one-click demo login buttons below.";
      setAuthError(err);
      return { success: false, error: err };
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('iifccms_auth_user');
  };

  const hasRole = (requiredRoles) => {
    if (!currentUser) return false;
    if (currentUser.role === 'ROLE_SUPER_ADMIN') return true;
    if (Array.isArray(requiredRoles)) {
      return requiredRoles.includes(currentUser.role);
    }
    return currentUser.role === requiredRoles;
  };

  return (
    <AuthContext.Provider value={{
      currentUser,
      isAuthenticated: !!currentUser,
      login,
      logout,
      hasRole,
      authError,
      setAuthError,
      demoAccounts: DEMO_ACCOUNTS
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
