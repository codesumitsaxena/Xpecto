import React from 'react';
import { Link } from 'react-router-dom';

export default function XpectoLogo({ className = "h-8", showTagline = false }) {
  return (
    <Link to="/" className="inline-flex items-center gap-1.5 group select-none">
      <div className="relative flex items-center">
        {/* Exact Xpecto stylized curved icon */}
        <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mr-0.5">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 sm:w-8 sm:h-8 filter drop-shadow-[0_0_6px_rgba(0,180,255,0.5)]">
            <path
              d="M10 32C13 28 20 18 29 8C31 6 33 6 34 8C35 10 33 13 28 19L21 27C17 31 13 33 10 32Z"
              fill="url(#xp-cyan)"
            />
            <path
              d="M30 32C27 28 20 18 11 8C9 6 7 6 6 8C5 10 7 13 12 19L19 27C23 31 27 33 30 32Z"
              fill="url(#xp-blue)"
            />
            <defs>
              <linearGradient id="xp-cyan" x1="10" y1="32" x2="34" y2="8" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00d4ff" />
                <stop offset="1" stopColor="#0099ff" />
              </linearGradient>
              <linearGradient id="xp-blue" x1="6" y1="8" x2="30" y2="32" gradientUnits="userSpaceOnUse">
                <stop stopColor="#38bdf8" />
                <stop offset="1" stopColor="#0284c7" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Wordmark: exact 'pecto' text */}
        <div className="flex items-baseline tracking-tight">
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
            pecto
          </span>
          <span className="text-[9px] text-[#00a3ff] font-bold ml-0.5 align-super">®</span>
        </div>
      </div>
    </Link>
  );
}
