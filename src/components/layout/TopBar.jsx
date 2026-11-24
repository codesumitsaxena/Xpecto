import React from 'react';
import { Phone, Mail, UserCheck, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TopBar() {
  return (
    <div className="w-full bg-slate-900 dark:bg-[#030616] border-b border-slate-700 dark:border-cyan-950/40 text-slate-300 text-[11px] sm:text-xs py-1.5 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-1">
        {/* Contact Numbers */}
        <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6">
          <a href="tel:+919971392828" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors group">
            <span title="India">🇮🇳</span>
            <span className="text-slate-400 group-hover:text-white">Sales:</span>
            <span className="font-semibold text-slate-200">+91 997-139-2828</span>
          </a>
          <a href="tel:+919971888346" className="hidden sm:flex items-center gap-1.5 hover:text-cyan-400 transition-colors group">
            <span title="India">🇮🇳</span>
            <span className="text-slate-400 group-hover:text-white">Support:</span>
            <span className="font-semibold text-slate-200">+91 997-188-8346</span>
          </a>
          <a href="tel:+529842788753" className="hidden md:flex items-center gap-1.5 hover:text-cyan-400 transition-colors group">
            <span title="Mexico">🇲🇽</span>
            <span className="font-semibold text-slate-200">+52-984-278-8753</span>
          </a>
        </div>

        {/* Portal Links */}
        <div className="flex items-center gap-3 sm:gap-5">
          <Link to="/internship" className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
            <Mail className="w-3 h-3 text-cyan-400" /><span className="hidden sm:inline">Internship</span>
          </Link>
          <span className="text-slate-700">|</span>
          <Link to="/support" className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
            <ShieldCheck className="w-3 h-3 text-cyan-400" /><span className="hidden sm:inline">Support</span>
          </Link>
          <span className="text-slate-700">|</span>
          <Link to="/client-login" className="flex items-center gap-1 hover:text-cyan-400 font-medium text-slate-200 transition-colors">
            <UserCheck className="w-3 h-3 text-cyan-400" /><span>Client Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
