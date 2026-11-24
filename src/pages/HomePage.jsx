import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle2, Layers, Code, Sparkles,
  Globe, Smartphone, Database, Cloud, TrendingUp, ShieldCheck,
  Star, Award, Users, Clock
} from 'lucide-react';

// Network constellation SVG
function ConstellationBg() {
  return (
    <svg className="absolute top-0 left-0 w-full h-full opacity-20 dark:opacity-30 pointer-events-none" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="hglow" cx="30%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <rect width="1200" height="700" fill="url(#hglow)" />
      {/* Lines */}
      {[[40,80,180,140],[180,140,320,80],[180,140,260,240],[320,80,500,120],
        [260,240,400,300],[400,300,520,220],[520,220,680,180],[680,180,820,250],
        [820,250,960,180],[960,180,1100,230],[1100,230,1160,120],
        [40,80,120,30],[320,80,420,20],[680,180,750,80],[960,180,1050,80]
      ].map(([x1,y1,x2,y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#00d4ff" strokeWidth="0.8" opacity="0.5" />
      ))}
      {/* Nodes */}
      {[[40,80],[180,140],[320,80],[260,240],[400,300],[520,220],[680,180],[820,250],[960,180],[1100,230],[500,120],[750,80],[1050,80],[1160,120]].map(([cx,cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 4 : 3} fill="#00d4ff" opacity="0.7" />
      ))}
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f8faff] dark:bg-[#060b26] text-slate-800 dark:text-slate-100">

      {/* ===== HERO ===== */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-8 pb-16">
        <ConstellationBg />

        {/* Right-side chevrons decoration */}
        <div className="absolute top-16 right-6 sm:right-16 pointer-events-none opacity-25 dark:opacity-35 flex items-center gap-1">
          {[1,2,3,4,5].map(i => (
            <svg key={i} viewBox="0 0 20 36" className="w-4 sm:w-7 h-8 sm:h-14 text-cyan-500" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M4 4L16 18L4 32" />
            </svg>
          ))}
        </div>

        {/* Ambient glows */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              A Reference Based Software Engineering Company
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
              Transforming Vision Into{' '}
              <span className="gradient-text">Scalable Digital Reality</span>
            </h1>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              We engineer <strong>custom enterprise applications</strong>, high-performance <strong>web applications</strong>, and cloud-native solutions that empower modern businesses to outperform the competition — since 2013.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <Link to="/services/custom-application"
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/30 transition-all hover:-translate-y-0.5 flex items-center gap-2 group">
                Explore Custom Applications
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/services/web-application"
                className="px-7 py-3.5 rounded-xl bg-white dark:bg-[#0c1544] border border-slate-300 dark:border-cyan-500/30 text-slate-700 dark:text-cyan-300 font-semibold text-sm hover:border-cyan-500 dark:hover:bg-[#121f66] transition-all flex items-center gap-2">
                Explore Web Applications <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-5 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span className="font-semibold">Clutch 5.0</span>
              </div>
              <div className="w-px h-4 bg-slate-300 dark:bg-slate-700" />
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-500" />
                <span>D-U-N-S® Registered</span>
              </div>
              <div className="w-px h-4 bg-slate-300 dark:bg-slate-700" />
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-emerald-500" />
                <span>500+ Projects Delivered</span>
              </div>
              <div className="w-px h-4 bg-slate-300 dark:bg-slate-700" />
              <div className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-blue-500" />
                <span>19 Countries Served</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== KEY SERVICES CARDS ===== */}
      <section className="py-20 bg-white dark:bg-[#04081c] border-y border-slate-200 dark:border-cyan-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">Our Core Services</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white">Specialized Engineering Offerings</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-3">Two primary pillars of Xpecto® software engineering — precision-built for enterprise needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Custom Application */}
            <div className="group bg-gradient-to-br from-slate-50 to-cyan-50/30 dark:from-[#080f3a] dark:to-[#050926] border-2 border-cyan-500/30 hover:border-cyan-500 dark:hover:border-cyan-400 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-5 group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all duration-300">
                  <Layers className="w-7 h-7 text-cyan-600 dark:text-cyan-400 group-hover:text-white transition-colors" />
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-800 text-[11px] font-semibold mb-4">
                  Enterprise Grade
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                  Custom Application Development
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                  Tailored enterprise software — custom ERP/CRM systems, mobile apps, legacy codebase modernization, automated data processing — built to mirror your exact business workflows.
                </p>
                <div className="space-y-2 mb-6">
                  {[
                    'Mobile Apps (iOS, Android, React Native, Flutter)',
                    'Custom CRM, ERP & Enterprise Portals',
                    'Legacy Codebase Modernization',
                    'AI & Machine Learning Integration',
                    'API & Third-Party Integrations',
                  ].map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" /> {f}
                    </div>
                  ))}
                </div>
              </div>
              <Link to="/services/custom-application"
                className="mt-auto w-full flex items-center justify-between px-5 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm transition-all group/btn">
                <span>View Custom Application Page</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Card 2: Web Application */}
            <div className="group bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-[#080f3a] dark:to-[#050926] border-2 border-blue-500/30 hover:border-blue-500 dark:hover:border-blue-400 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-5 group-hover:bg-blue-500 group-hover:border-blue-500 transition-all duration-300">
                  <Code className="w-7 h-7 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-800 text-[11px] font-semibold mb-4">
                  High-Performance Web
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-3 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                  Web Application Development
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                  Single Page Applications, Progressive Web Apps, multi-tenant SaaS platforms, and secure partner portals — built on React, Next.js, Node.js with 95+ Lighthouse scores.
                </p>
                <div className="space-y-2 mb-6">
                  {[
                    'Progressive Web Apps (PWA) — Offline, Installable',
                    'Multi-Tenant SaaS with Stripe Billing',
                    'Real-Time Dashboards with WebSockets',
                    'eCommerce & PCI-DSS Checkout Platforms',
                    'Secure Customer & Partner Self-Service Portals',
                  ].map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" /> {f}
                    </div>
                  ))}
                </div>
              </div>
              <Link to="/services/web-application"
                className="mt-auto w-full flex items-center justify-between px-5 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold text-sm transition-all group/btn">
                <span>View Web Application Page</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ALL SERVICES GRID ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">Full Service Portfolio</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">Complete IT Solutions</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { icon: Globe, label: 'Website Development', link: '/services/web-application', color: 'text-cyan-500' },
              { icon: Code, label: 'Web Applications', link: '/services/web-application', color: 'text-blue-500' },
              { icon: Layers, label: 'Custom Applications', link: '/services/custom-application', color: 'text-purple-500' },
              { icon: Smartphone, label: 'Mobile Applications', link: '/services/custom-application', color: 'text-pink-500' },
              { icon: TrendingUp, label: 'Digital Marketing', link: '/services/web-application', color: 'text-orange-500' },
              { icon: Cloud, label: 'Cloud & Hosting', link: '/services/custom-application', color: 'text-sky-500' },
              { icon: Database, label: 'CRM & ERP Systems', link: '/services/custom-application', color: 'text-emerald-500' },
              { icon: ShieldCheck, label: 'Security & Compliance', link: '/services/custom-application', color: 'text-rose-500' },
            ].map((svc, i) => {
              const Icon = svc.icon;
              return (
                <Link key={i} to={svc.link}
                  className="flex flex-col items-center gap-3 p-5 bg-white dark:bg-[#070e36] border border-slate-200 dark:border-slate-800 rounded-xl hover:border-cyan-500/40 dark:hover:border-cyan-500/40 transition-all group card-glow text-center">
                  <Icon className={`w-7 h-7 ${svc.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">{svc.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== WHY XPECTO / STATS ===== */}
      <section className="py-20 bg-white dark:bg-[#04081c] border-y border-slate-200 dark:border-cyan-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">Why Xpecto®</p>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
                "A Reference Based Company"
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                Over 85% of our enterprise engagements come directly through client referrals. We don't just deliver code — we build long-term engineering partnerships that protect your technology investments, reduce technical debt, and maintain maximum uptime.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: '98%', label: 'Client Retention Rate' },
                  { val: '500+', label: 'Global Deployments' },
                  { val: '10+', label: 'Years Engineering' },
                  { val: '19', label: 'Countries Served' },
                ].map((s, i) => (
                  <div key={i} className="border-l-4 border-cyan-500 pl-4">
                    <div className="text-2xl font-extrabold text-slate-900 dark:text-white">{s.val}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { emoji: '🎯', title: 'Zero Lock-In Guarantee', desc: 'Clean, standards-compliant code with complete documentation. You own everything.' },
                { emoji: '🔒', title: 'NDA & IP Protection', desc: 'Full intellectual property transfer upon project completion.' },
                { emoji: '👷', title: 'Direct Architect Access', desc: 'Communicate directly with senior technical leads — no middle layers.' },
                { emoji: '📊', title: 'Transparent Reporting', desc: 'Weekly sprint reports, Jira board access, and live staging environments throughout.' },
              ].map((point, i) => (
                <div key={i} className="flex gap-4 p-4 bg-slate-50 dark:bg-[#070e36] border border-slate-200 dark:border-slate-800 rounded-xl">
                  <span className="text-2xl shrink-0">{point.emoji}</span>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-white text-sm mb-1">{point.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA BANNER ===== */}
      <section className="py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 rounded-3xl p-10 text-center shadow-2xl shadow-blue-500/20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '20px 20px'}} />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Ready to Build Something Extraordinary?</h2>
              <p className="text-cyan-100 text-sm mb-8 max-w-xl mx-auto">Get a free technical consultation with our lead architects within 24 hours.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/services/custom-application"
                  className="px-7 py-3.5 bg-white text-cyan-700 font-bold text-sm rounded-xl hover:bg-cyan-50 transition-all shadow-lg">
                  Custom Application
                </Link>
                <Link to="/services/web-application"
                  className="px-7 py-3.5 border-2 border-white/40 text-white font-bold text-sm rounded-xl hover:bg-white/10 transition-all">
                  Web Application
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
