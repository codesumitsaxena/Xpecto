import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Sparkles, Sun, Moon, Phone } from 'lucide-react';
import XpectoLogo from './XpectoLogo';
import ServicesMegaMenu from './ServicesMegaMenu';
import { useTheme } from '../../context/ThemeContext';

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [techOpen, setTechOpen] = useState(false);
  const [techActiveTab, setTechActiveTab] = useState('uiux');
  const [industryOpen, setIndustryOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    setServicesOpen(false); setAboutOpen(false); setTechOpen(false);
    setIndustryOpen(false); setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleServicesEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setServicesOpen(true); setAboutOpen(false); setTechOpen(false); setIndustryOpen(false);
  };
  const handleServicesLeave = () => {
    closeTimeoutRef.current = setTimeout(() => setServicesOpen(false), 200);
  };

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 text-xs sm:text-sm font-semibold transition-colors ${
      isActive 
        ? 'text-[#00a3ff] font-bold' 
        : 'text-slate-700 dark:text-slate-200 hover:text-[#00a3ff]'
    }`;

  const dropdownBtn = (open) =>
    `flex items-center gap-1 px-3 py-2 text-xs sm:text-sm font-semibold transition-colors ${
      open 
        ? 'text-[#00a3ff]' 
        : 'text-slate-700 dark:text-slate-200 hover:text-[#00a3ff]'
    }`;

  // Technology subcategories matching Screenshot 2
  const techCategories = [
    { id: 'uiux', label: 'UI/UX', items: [{ name: 'Figma', icon: '/images/1.webp' }] },
    { id: 'frontend', label: 'Frontend', items: [{ name: 'React.js', icon: '/images/brandlogo2.webp' }, { name: 'Next.js', icon: '/images/5.webp' }, { name: 'HTML5', icon: '/images/2.webp' }] },
    { id: 'backend', label: 'Backend', items: [{ name: 'Node.js', icon: '/images/4.webp' }, { name: 'PHP', icon: '/images/21.webp' }] },
    { id: 'ecommerce', label: 'eCommerce', items: [{ name: 'WooCommerce', icon: '/images/24.webp' }, { name: 'Shopify', icon: '/images/23.webp' }] },
    { id: 'framework', label: 'Framework', items: [{ name: 'Bootstrap', icon: '/images/3.webp' }, { name: 'Tailwind CSS', icon: '/images/20.webp' }] },
    { id: 'mobile', label: 'Mobile', items: [{ name: 'React Native', icon: '/images/29.webp' }, { name: 'Android', icon: '/images/25.webp' }] },
    { id: 'database', label: 'Database', items: [{ name: 'MySQL', icon: '/images/7.webp' }, { name: 'PostgreSQL', icon: '/images/28.webp' }] },
    { id: 'cloud', label: 'Cloud', items: [{ name: 'AWS', icon: '/images/15.webp' }, { name: 'Azure', icon: '/images/14.webp' }] }
  ];

  return (
    <nav className={`sticky top-0 z-40 transition-colors duration-200 ${
      scrolled
        ? 'bg-white/95 dark:bg-[#060b26]/95 backdrop-blur-md shadow-md border-b border-slate-200 dark:border-cyan-950/60'
        : 'bg-white dark:bg-[#060b26] border-b border-slate-200 dark:border-cyan-900/30'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-18 py-2">
          {/* Logo */}
          <XpectoLogo />

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>

            {/* 1. About Us Dropdown (Exact Screenshot 4 match) */}
            <div 
              className="relative" 
              onMouseEnter={() => setAboutOpen(true)} 
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button className={dropdownBtn(aboutOpen)}>
                About Us <ChevronDown className={`w-3.5 h-3.5 transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
              </button>
              {aboutOpen && (
                <div className="absolute top-full left-0 w-60 bg-[#070d2b] text-white shadow-2xl border-t-2 border-[#00a3ff] py-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link to="/about" className="block px-5 py-2.5 text-xs font-semibold bg-[#00a3ff] text-white">Who We Are</Link>
                  <Link to="/about#history" className="block px-5 py-2.5 text-xs hover:bg-[#0c1642] text-slate-200 transition-colors">Our History</Link>
                  <Link to="/about#testimonials" className="block px-5 py-2.5 text-xs hover:bg-[#0c1642] text-slate-200 transition-colors">Testimonials</Link>
                  <Link to="/clients" className="block px-5 py-2.5 text-xs hover:bg-[#0c1642] text-slate-200 transition-colors">Clients</Link>
                  <Link to="/we-work-in" className="block px-5 py-2.5 text-xs hover:bg-[#0c1642] text-slate-200 transition-colors">We Work In</Link>
                  <Link to="/about#mission" className="block px-5 py-2.5 text-xs hover:bg-[#0c1642] text-slate-200 transition-colors">Mission/Vission</Link>
                  <Link to="/about#engagement" className="block px-5 py-2.5 text-xs hover:bg-[#0c1642] text-slate-200 transition-colors">Engagement Module</Link>
                  <Link to="/about#methodology" className="block px-5 py-2.5 text-xs hover:bg-[#0c1642] text-slate-200 transition-colors">Project Methodlogy</Link>
                </div>
              )}
            </div>

            {/* 2. Services Dropdown (Mega Menu) */}
            <div 
              className="relative" 
              onMouseEnter={handleServicesEnter} 
              onMouseLeave={handleServicesLeave}
            >
              <button 
                onClick={() => setServicesOpen(!servicesOpen)} 
                className={dropdownBtn(servicesOpen || location.pathname.startsWith('/services') || location.pathname.startsWith('/custom-applications'))}
              >
                Services <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-cyan-500' : ''}`} />
              </button>
            </div>

            {/* 3. Technology Dropdown (Exact Screenshot 2 split mega menu) */}
            <div 
              className="relative" 
              onMouseEnter={() => setTechOpen(true)} 
              onMouseLeave={() => setTechOpen(false)}
            >
              <button className={dropdownBtn(techOpen)}>
                Technology <ChevronDown className={`w-3.5 h-3.5 transition-transform ${techOpen ? 'rotate-180' : ''}`} />
              </button>
              {techOpen && (
                <div className="absolute top-full left-0 w-[500px] bg-white dark:bg-[#070d2b] shadow-2xl border-t-2 border-[#00a3ff] flex z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  {/* Left Tabs */}
                  <div className="w-48 bg-[#050920] text-slate-200 py-1">
                    {techCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onMouseEnter={() => setTechActiveTab(cat.id)}
                        className={`w-full text-left px-5 py-2.5 text-xs font-semibold transition-colors flex items-center justify-between ${
                          techActiveTab === cat.id 
                            ? 'bg-[#00a3ff] text-white' 
                            : 'hover:bg-[#0c1642] text-slate-300'
                        }`}
                      >
                        <span>{cat.label}</span>
                      </button>
                    ))}
                  </div>
                  {/* Right Content */}
                  <div className="flex-1 p-6 bg-white dark:bg-[#070d2b]">
                    <div className="grid grid-cols-2 gap-4">
                      {techCategories.find(c => c.id === techActiveTab)?.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-[#0c1642] cursor-pointer transition-colors">
                          <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                          <span className="text-xs font-bold text-slate-800 dark:text-white">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Industry Dropdown (Exact Screenshot 1 match) */}
            <div 
              className="relative" 
              onMouseEnter={() => setIndustryOpen(true)} 
              onMouseLeave={() => setIndustryOpen(false)}
            >
              <button className={dropdownBtn(industryOpen)}>
                Industry <ChevronDown className={`w-3.5 h-3.5 transition-transform ${industryOpen ? 'rotate-180' : ''}`} />
              </button>
              {industryOpen && (
                <div className="absolute top-full left-0 w-60 bg-[#070d2b] text-white shadow-2xl border-t-2 border-[#00a3ff] py-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link to="/services/custom-application" className="block px-5 py-2.5 text-xs font-semibold bg-[#00a3ff] text-white">Finance</Link>
                  <Link to="/services/web-application" className="block px-5 py-2.5 text-xs hover:bg-[#0c1642] text-slate-200 transition-colors">Ecommerce</Link>
                  <Link to="/services/custom-application" className="block px-5 py-2.5 text-xs hover:bg-[#0c1642] text-slate-200 transition-colors">Manufacturing</Link>
                  <Link to="/services/custom-application" className="block px-5 py-2.5 text-xs hover:bg-[#0c1642] text-slate-200 transition-colors">Media</Link>
                  <Link to="/services/custom-application" className="block px-5 py-2.5 text-xs hover:bg-[#0c1642] text-slate-200 transition-colors">Real State</Link>
                  <Link to="/services/custom-application" className="block px-5 py-2.5 text-xs hover:bg-[#0c1642] text-slate-200 transition-colors">Education</Link>
                </div>
              )}
            </div>

            <NavLink to="/blogs" className={navLinkClass}>Blogs</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink>

            {/* Theme Toggle Button (Light/Dark) */}
            <button
              onClick={toggleTheme}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="ml-2 p-2 rounded-full border border-slate-300 dark:border-cyan-500/40 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-cyan-500/20 transition-all cursor-pointer"
            >
              {isDark
                ? <Sun className="w-4 h-4 text-amber-400" />
                : <Moon className="w-4 h-4 text-slate-700" />
              }
            </button>

            {/* Xpecto AI */}
            <Link
              to="/services/custom-application"
              className="ml-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-xs bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-[0_0_15px_rgba(0,212,255,0.4)] hover:shadow-[0_0_22px_rgba(0,212,255,0.7)] transition-all transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Xpecto AI
            </Link>
          </div>

          {/* Mobile right controls */}
          <div className="lg:hidden flex items-center gap-2">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 cursor-pointer"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Services Mega Menu */}
      {servicesOpen && (
        <div onMouseEnter={handleServicesEnter} onMouseLeave={handleServicesLeave}>
          <ServicesMegaMenu onClose={() => setServicesOpen(false)} />
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#070d2b] border-b border-slate-200 dark:border-cyan-900/40 px-4 pt-2 pb-6 max-h-[80vh] overflow-y-auto shadow-xl">
          <div className="space-y-1 text-sm">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 px-3 rounded-lg text-slate-800 dark:text-slate-200 font-semibold">Home</Link>
            <Link to="/services/custom-application" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-3 rounded-lg text-slate-700 dark:text-slate-300 font-medium">Custom Applications</Link>
            <Link to="/services/web-application" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-3 rounded-lg text-slate-700 dark:text-slate-300 font-medium">Web Applications</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 px-3 rounded-lg text-slate-800 dark:text-slate-200 font-semibold">About Us</Link>
            <Link to="/blogs" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 px-3 rounded-lg text-slate-800 dark:text-slate-200 font-semibold">Blogs</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 px-3 rounded-lg text-slate-800 dark:text-slate-200 font-semibold">Contact Us</Link>
            <a href="tel:+919971392828" className="flex items-center gap-2 mt-3 py-2.5 px-3 rounded-lg bg-cyan-500 text-white font-semibold text-xs">
              <Phone className="w-4 h-4" /> +91 997-139-2828
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
