import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingWidgets from './components/layout/FloatingWidgets';
import HomePage from './pages/HomePage';
import CustomApplicationPage from './pages/CustomApplicationPage';
import WebApplicationPage from './pages/WebApplicationPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppShell() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8faff] dark:bg-[#060b26] transition-colors duration-300">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/custom-application" element={<CustomApplicationPage />} />
          <Route path="/custom-applications" element={<CustomApplicationPage />} />
          <Route path="/services/web-application" element={<WebApplicationPage />} />
          <Route path="/web-applications" element={<WebApplicationPage />} />
          <Route path="/static-website" element={<WebApplicationPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <FloatingWidgets />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppShell />
      </BrowserRouter>
    </ThemeProvider>
  );
}
