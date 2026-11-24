import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2
} from 'lucide-react';
import XpectoLogo from './XpectoLogo';
import { FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon, YouTubeIcon } from '../common/SocialIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Country Flags using real downloaded ff images from Downloads
  const countryFlags = [
    { name: 'India', src: '/images/ff1.png' },
    { name: 'USA', src: '/images/ff2.png' },
    { name: 'Canada', src: '/images/ff3.png' },
    { name: 'Mexico', src: '/images/ff4.png' },
    { name: 'UK', src: '/images/ff5.png' },
    { name: 'France', src: '/images/ff6.png' },
    { name: 'Sweden', src: '/images/ff7.png' },
    { name: 'Switzerland', src: '/images/ff8.png' },
    { name: 'Germany', src: '/images/ff9.png' },
    { name: 'UAE', src: '/images/ff10.png' },
    { name: 'Singapore', src: '/images/ff11.png' },
    { name: 'Thailand', src: '/images/ff12.png' },
    { name: 'China', src: '/images/ff13.png' },
    { name: 'Japan', src: '/images/ff14.png' },
    { name: 'Australia', src: '/images/ff15.png' },
    { name: 'Sri Lanka', src: '/images/ff16.png' },
    { name: 'South Africa', src: '/images/ff17.png' },
    { name: 'Nigeria', src: '/images/ff18.png' },
    { name: 'Tanzania', src: '/images/ff19.png' },
    { name: 'Ghana', src: '/images/ff20.png' }
  ];

  return (
    <footer className="w-full bg-[#04081c] border-t border-cyan-950/60 text-slate-300 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Banner section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-14 pb-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Xpecto<span className="text-cyan-400 font-semibold align-super text-sm">®</span> IT Solutions Pvt Ltd
          </h2>
          <p className="text-cyan-400/90 text-sm sm:text-base font-medium tracking-wide mt-1.5">
            A Reference Based Company
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mt-3 rounded-full" />
        </div>

        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-xs sm:text-sm mb-14">
          {/* Column 1: Expertise */}
          <div>
            <h3 className="text-white font-bold text-sm sm:text-base mb-4 pb-1 border-b border-cyan-500/30 inline-block">
              Expertise
            </h3>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <Link to="/services/web-application" className="hover:text-cyan-400 transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link to="/services/web-application" className="hover:text-cyan-400 transition-colors">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link to="/services/custom-application" className="text-cyan-300 hover:text-white font-medium flex items-center gap-1">
                  <span>Custom Applications</span>
                  <span className="text-[10px] bg-cyan-950 text-cyan-300 px-1.5 py-0.2 rounded border border-cyan-800">Featured</span>
                </Link>
              </li>
              <li>
                <Link to="/services/custom-application" className="hover:text-cyan-400 transition-colors">
                  Mobile Applications
                </Link>
              </li>
              <li>
                <Link to="/services/web-application" className="hover:text-cyan-400 transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/custom-application" className="hover:text-cyan-400 transition-colors">
                  Cloud / Hosting
                </Link>
              </li>
              <li>
                <Link to="/services/custom-application" className="hover:text-cyan-400 transition-colors">
                  Email Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/web-application" className="hover:text-cyan-400 transition-colors">
                  Web / Mobile Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Consulting */}
          <div>
            <h3 className="text-white font-bold text-sm sm:text-base mb-4 pb-1 border-b border-cyan-500/30 inline-block">
              Consulting
            </h3>
            <ul className="space-y-2.5 text-slate-400">
              <li><Link to="/services/custom-application" className="hover:text-cyan-400 transition-colors">Blockchain</Link></li>
              <li><Link to="/services/custom-application" className="hover:text-cyan-400 transition-colors">Artificial Intelligence</Link></li>
              <li><Link to="/services/custom-application" className="hover:text-cyan-400 transition-colors">Information of Technology (IOT)</Link></li>
              <li><Link to="/services/custom-application" className="hover:text-cyan-400 transition-colors">NFT</Link></li>
              <li><Link to="/services/custom-application" className="hover:text-cyan-400 transition-colors">Digital Transformation</Link></li>
              <li><Link to="/services/custom-application" className="hover:text-cyan-400 transition-colors">ChatBot</Link></li>
              <li><Link to="/services/custom-application" className="hover:text-cyan-400 transition-colors">Web 3.0</Link></li>
            </ul>
          </div>

          {/* Column 3: Hire */}
          <div>
            <h3 className="text-white font-bold text-sm sm:text-base mb-4 pb-1 border-b border-cyan-500/30 inline-block">
              Hire
            </h3>
            <ul className="space-y-2.5 text-slate-400">
              <li><Link to="/services/custom-application" className="hover:text-cyan-400 transition-colors">Full Stack Developers</Link></li>
              <li><Link to="/services/web-application" className="hover:text-cyan-400 transition-colors">Web Developers</Link></li>
              <li><Link to="/services/web-application" className="hover:text-cyan-400 transition-colors">MERN Stack Developers</Link></li>
              <li><Link to="/services/web-application" className="hover:text-cyan-400 transition-colors">UI/UX Designers</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Others</Link></li>
            </ul>
          </div>

          {/* Column 4: Informations */}
          <div>
            <h3 className="text-white font-bold text-sm sm:text-base mb-4 pb-1 border-b border-cyan-500/30 inline-block">
              Informations
            </h3>
            <ul className="space-y-2.5 text-slate-400">
              <li><Link to="/about" className="hover:text-cyan-400 transition-colors">Who We Are</Link></li>
              <li><Link to="/clients" className="hover:text-cyan-400 transition-colors">Clients</Link></li>
              <li><Link to="/we-work-in" className="hover:text-cyan-400 transition-colors">We Work In</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Trust Badges & Global Reach Section */}
        <div className="border-t border-slate-800/80 pt-8 pb-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* White Trust Badge Card */}
          <div className="bg-white rounded-2xl px-6 py-4 shadow-xl flex flex-wrap items-center justify-center gap-6 sm:gap-8 border border-slate-200">
            {/* Dun & Bradstreet */}
            <div className="flex items-center gap-2 border-r border-slate-200 pr-4 sm:pr-6">
              <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-cyan-400 text-xs font-bold">
                D&B
              </div>
              <div className="text-left">
                <span className="block text-[11px] font-bold text-slate-800 leading-tight">D-U-N-S®</span>
                <span className="block text-[9px] text-slate-500 uppercase tracking-tighter">Registered</span>
              </div>
            </div>

            {/* Clutch */}
            <div className="flex items-center gap-2 border-r border-slate-200 pr-4 sm:pr-6">
              <img 
                src="/images/clutch-co-vector-logo.png" 
                alt="Clutch"
                className="h-6 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="flex flex-col text-[10px] text-amber-500 font-bold">
                <span>★★★★★</span>
                <span className="text-[8px] text-slate-500">5.0 RATED</span>
              </div>
            </div>

            {/* Top Software Developers */}
            <div className="flex items-center gap-2 border-r border-slate-200 pr-4 sm:pr-6">
              <Award className="w-6 h-6 text-blue-600" />
              <div className="text-left">
                <span className="block text-[10px] font-bold text-slate-800 leading-tight uppercase">Top ★★★</span>
                <span className="block text-[9px] text-blue-700 font-bold uppercase">Software Developers</span>
              </div>
            </div>

            {/* Top Custom Software Development */}
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-cyan-600" />
              <div className="text-left">
                <span className="block text-[10px] font-bold text-slate-800 leading-tight uppercase">Top Custom</span>
                <span className="block text-[9px] text-cyan-700 font-bold uppercase">Software Company</span>
              </div>
            </div>
          </div>

          {/* Right Side: Follow Us & We Work In Flags */}
          <div className="flex flex-col items-center lg:items-end gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-400 font-medium">Follow Us On:</span>
              <div className="flex items-center gap-2">
                {[
                  { component: FacebookIcon, href: '#' },
                  { component: TwitterIcon, href: '#' },
                  { component: LinkedInIcon, href: '#' },
                  { component: InstagramIcon, href: '#' },
                  { component: YouTubeIcon, href: '#' },
                ].map((item, idx) => {
                  const Comp = item.component;
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      className="w-7 h-7 rounded-full bg-[#0c1544] border border-cyan-500/20 hover:border-cyan-400 hover:bg-cyan-500 hover:text-[#060b26] flex items-center justify-center text-slate-300 transition-all text-xs"
                    >
                      <Comp className="w-3.5 h-3.5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* We Work In: Country Flags Grid with real images */}
            <div className="flex flex-col items-center lg:items-end gap-1.5">
              <span className="text-xs text-slate-400 font-medium">We Work In:</span>
              <div className="flex flex-wrap items-center justify-center lg:justify-end gap-1.5 max-w-sm">
                {countryFlags.map((c, idx) => (
                  <img
                    key={idx}
                    src={c.src}
                    alt={c.name}
                    title={c.name}
                    className="w-5 h-3.5 object-cover rounded-xs hover:scale-125 transition-transform cursor-default shadow-xs"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="w-full bg-[#020512] border-t border-slate-900 py-6 px-4 sm:px-6 lg:px-12 text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <XpectoLogo />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] text-slate-400">
            <Link to="/privacy-policy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link to="/terms-conditions" className="hover:text-cyan-400 transition-colors">Terms & Conditions</Link>
            <span>|</span>
            <Link to="/trademark-policy" className="hover:text-cyan-400 transition-colors">Trademark Policy</Link>
            <span>|</span>
            <Link to="/gdpr-policy" className="hover:text-cyan-400 transition-colors">GDPR Policy</Link>
            <span>|</span>
            <Link to="/cookie-policy" className="hover:text-cyan-400 transition-colors">Cookie Policy</Link>
          </div>

          <div className="flex flex-col md:items-end items-center gap-1.5 text-[11px]">
            <p className="text-slate-400">
              Copyright © 2013-{currentYear} <span className="text-slate-200 font-semibold">Xpecto® IT Solutions Pvt Ltd</span>. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <img 
                src="/images/dmca-badge-w150-5x1-07.png" 
                alt="DMCA Protected"
                className="h-4 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <img 
                src="/images/copyscape-banner-blue-200x25.png" 
                alt="Copyscape Protected"
                className="h-4 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
