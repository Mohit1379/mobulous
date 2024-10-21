import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard'; // Import your Dashboard component
import SideSection from '../../components/SideSection';
import Logo from '../../components/Logo';

export default function AppRoute() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation(); // Get current location

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const shouldDisplaySideSection = ![ '/dashboard'].includes(location.pathname);

  return (
    <div className={`${!isMobile && "d-flex"}`}>
      {shouldDisplaySideSection ? (isMobile ? <Logo isMobile={isMobile}/> : <SideSection />) : null}
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect to login by default */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup isMobile={isMobile} />} />
          <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard route */}
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </div>
  );
}
