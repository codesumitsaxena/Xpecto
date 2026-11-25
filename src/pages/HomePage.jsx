import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle2, Layers, Code, Globe,
  Smartphone, Database, Cloud, TrendingUp, ShieldCheck,
  Star, Award, Users, Cpu, Settings, Zap, Monitor
} from 'lucide-react';

const clientLogos = [
  '/images/5logo.webp', '/images/1 (1).webp', '/images/4 (1).webp',
  '/images/5 (1).webp', '/images/6 (1).webp', '/images/7 (1).webp',
  '/images/8 (1).webp', '/images/9 (1).webp', '/images/10 (1).webp',
  '/images/4logo.webp', '/images/2logo.webp', '/images/1logo.webp',
  '/images/3logo.webp', '/images/5logo.webp',
];

export default function HomePage() {
  return (
    <div className="w-full bg-white text-slate-800 overflow-x-hidden">

      {/* ===================== HERO SECTION ===================== */}
      <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-[#06112a]">
        {/* Animated gradient blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[450px] sm:w-[600px] h-[450px] sm:h-[600px] rounded-full bg-cyan-500/10 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] rounded-full bg-blue-600/15 blur-[110px]" />
          <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full bg-indigo-500/10 blur-[80px]" />
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(#00d4ff 1px, transparent 1px), linear-gradient(90deg, #00d4ff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Decorative colored pills left */}
        <div className="hidden sm:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 flex-col gap-2 opacity-80">
          <div className="w-6 h-1.5 bg-amber-400 rotate-45 rounded-full" />
          <div className="w-8 h-1.5 bg-cyan-400 rotate-45 rounded-full" />
          <div className="w-6 h-1.5 bg-rose-500 rotate-45 rounded-full" />
        </div>

        {/* Star sparkle */}
        <div className="absolute top-16 right-16 hidden xl:block opacity-60">
          <svg width="42" height="42" viewBox="0 0 40 40" fill="none">
            <path d="M20 0L23 15L38 20L23 25L20 40L17 25L2 20L17 15L20 0Z" fill="#00d4ff" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 py-14 sm:py-20 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left: Text */}
            <div className="lg:col-span-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-6">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                A Reference Based Software Engineering Company
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-[56px] font-black text-white leading-[1.12] mb-6">
                Building{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Digital Solutions
                </span>
                <br />
                That Drive Real Growth
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Xpecto® is a leading IT solutions company with 11+ years of experience delivering
                custom applications, web development, mobile apps, and enterprise software to
                businesses across 19+ countries.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-9">
                <Link
                  to="/services/custom-application"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/30 transition-all hover:-translate-y-0.5"
                >
                  Custom Applications <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services/web-application"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 border border-white/20 hover:bg-white/10 text-white font-semibold text-sm transition-all"
                >
                  Web Applications <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Trust row */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="text-white font-semibold">Clutch 5.0</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-slate-700" />
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>D-U-N-S® Registered</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-slate-700" />
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-emerald-400" />
                  <span>500+ Clients</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-slate-700" />
                <div className="flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span>19 Countries</span>
                </div>
              </div>
            </div>

            {/* Right: Consultant Portrait + Concentric Rings + Floating Badges */}
            <div className="lg:col-span-6 relative flex justify-center items-center mt-6 lg:mt-0 py-4">
              <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[440px] lg:h-[440px] flex items-center justify-center">
                {/* Concentric Glowing Cyan/Blue Rings (ProVice style) */}
                <div className="absolute inset-0 rounded-full border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-600/5" />
                <div className="absolute inset-6 sm:inset-8 rounded-full border border-cyan-400/25 bg-gradient-to-tr from-cyan-500/15 via-blue-500/10 to-transparent" />
                <div className="absolute inset-12 sm:inset-16 rounded-full bg-gradient-to-b from-cyan-400/25 to-blue-600/20 blur-[1px] border border-cyan-300/30" />

                {/* Portrait Image */}
                <div className="relative w-[220px] h-[220px] sm:w-[290px] sm:h-[290px] lg:w-[320px] lg:h-[320px] rounded-full overflow-hidden border-2 border-cyan-400/40 shadow-[0_0_50px_rgba(0,163,255,0.28)] bg-[#06112a]">
                  <img
                    src="/images/hero-consultant.jpg"
                    alt="Xpecto Tech Consultation Expert"
                    className="w-full h-full object-cover object-top scale-105"
                    onError={(e) => {
                      e.target.src = '/images/consulting_img.jpg';
                    }}
                  />
                </div>

                {/* Floating Card 1: Left — 4000+ Projects Delivered */}
                <div className="absolute -left-2 sm:-left-6 top-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-md text-[#071330] rounded-2xl p-2.5 sm:p-3.5 shadow-2xl border border-white/60 flex items-center gap-2.5 sm:gap-3 z-20 max-w-[175px] sm:max-w-[210px]">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#00a3ff]" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-lg font-black leading-none text-[#071330]">4000+</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                      Projects Delivered with Satisfaction
                    </div>
                  </div>
                </div>

                {/* Floating Badge 2: Top Right — Growth Icon */}
                <div className="absolute right-2 sm:right-6 top-6 sm:top-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-xl border-4 border-cyan-400/30 flex items-center justify-center z-20">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>

                {/* Floating Card 3: Bottom Right — Our Experts */}
                <div className="absolute -right-1 sm:-right-4 bottom-4 sm:bottom-8 bg-white/95 backdrop-blur-md text-[#071330] rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-2xl border border-white/60 z-20">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-5 h-5 rounded-full bg-rose-500 flex items-center justify-center">
                      <Zap className="w-3 h-3 text-white fill-white" />
                    </div>
                    <span className="text-xs sm:text-sm font-extrabold text-[#071330]">Our Experts</span>
                  </div>
                  <div className="flex items-center -space-x-2">
                    <div className="w-7 h-7 rounded-full bg-cyan-600 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">AK</div>
                    <div className="w-7 h-7 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">RS</div>
                    <div className="w-7 h-7 rounded-full bg-indigo-600 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">PM</div>
                    <div className="w-7 h-7 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-[#071330]">+25</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CLIENT LOGOS MARQUEE ===================== */}
      <section className="w-full bg-white border-b border-slate-100 py-7 overflow-hidden">
        <div className="text-center mb-4 px-4">
          <p className="text-xs font-bold tracking-widest uppercase text-slate-400">
            Trusted By Leading Businesses Worldwide
          </p>
        </div>
        <div className="w-full overflow-hidden">
          <div className="animate-marquee flex items-center gap-10 sm:gap-16">
            {[...clientLogos, ...clientLogos].map((src, idx) => (
              <div key={idx} className="shrink-0 flex items-center justify-center px-3 sm:px-4 py-2">
                <img
                  src={src}
                  alt="client"
                  className="h-8 sm:h-11 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SERVICES SECTION ===================== */}
      <section className="w-full py-14 sm:py-20 px-4 sm:px-8 lg:px-16 bg-[#f4f7ff]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-cyan-600 mb-2 block">
              Our Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#071330]">
              Complete IT Solutions Under One Roof
            </h2>
            <p className="text-sm text-slate-500 mt-3 max-w-xl mx-auto">
              From web and mobile apps to enterprise software and digital marketing — we cover everything.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5">
            {[
              { icon: Globe, label: 'Website Development', link: '/services/web-application', color: 'text-cyan-600', bg: 'bg-cyan-50', border: 'hover:border-cyan-400' },
              { icon: Monitor, label: 'Web Applications', link: '/services/web-application', color: 'text-blue-600', bg: 'bg-blue-50', border: 'hover:border-blue-400' },
              { icon: Layers, label: 'Custom Applications', link: '/services/custom-application', color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'hover:border-indigo-400' },
              { icon: Smartphone, label: 'Mobile Applications', link: '/services/custom-application', color: 'text-pink-600', bg: 'bg-pink-50', border: 'hover:border-pink-400' },
              { icon: TrendingUp, label: 'Digital Marketing', link: '/services/web-application', color: 'text-orange-600', bg: 'bg-orange-50', border: 'hover:border-orange-400' },
              { icon: Cloud, label: 'Cloud & Hosting', link: '/services/custom-application', color: 'text-sky-600', bg: 'bg-sky-50', border: 'hover:border-sky-400' },
              { icon: Database, label: 'CRM & ERP Systems', link: '/services/custom-application', color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'hover:border-emerald-400' },
              { icon: ShieldCheck, label: 'Security & Compliance', link: '/services/custom-application', color: 'text-rose-600', bg: 'bg-rose-50', border: 'hover:border-rose-400' },
            ].map(({ icon: Icon, label, link, color, bg, border }, i) => (
              <Link
                key={i}
                to={link}
                className={`flex flex-col items-center gap-3 p-4 sm:p-6 bg-white rounded-2xl border-2 border-transparent ${border} shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-all group text-center`}
              >
                <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${color}`} />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#071330]">{label}</span>
                <ArrowRight className={`w-3.5 h-3.5 ${color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CUSTOM + WEB APP FEATURE CARDS ===================== */}
      <section className="w-full py-14 sm:py-20 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-cyan-600 mb-2 block">
              Our Core Expertise
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#071330]">
              Specialized Engineering Offerings
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Card 1: Custom Application */}
            <div className="group relative bg-[#06112a] rounded-3xl p-6 sm:p-9 overflow-hidden border border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center mb-5 group-hover:bg-cyan-500/25 transition-all">
                  <Settings className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400" />
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[11px] font-semibold mb-4 self-start">
                  Enterprise Grade
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3">
                  Custom Application Development
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  Tailored enterprise software — custom ERP, CRM, mobile apps, and intelligent
                  automation — built to match your exact business workflows and goals.
                </p>
                <div className="space-y-2.5 mb-7 flex-1">
                  {[
                    'Mobile Apps (iOS, Android, React Native)',
                    'Custom CRM, ERP & Enterprise Portals',
                    'IoT & SaaS Application Development',
                    'AI & Machine Learning Integration',
                  ].map((f, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" /> {f}
                    </div>
                  ))}
                </div>
                <Link
                  to="/services/custom-application"
                  className="mt-auto w-full flex items-center justify-between px-5 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm transition-all group/btn"
                >
                  <span>Explore Custom Applications</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 2: Web Application */}
            <div className="group relative bg-[#06112a] rounded-3xl p-6 sm:p-9 overflow-hidden border border-blue-500/20 hover:border-blue-500/50 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center mb-5 group-hover:bg-blue-500/25 transition-all">
                  <Code className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" />
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-semibold mb-4 self-start">
                  High-Performance Web
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3">
                  Web Application Development
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  Responsive, fast, and scalable web applications — eCommerce platforms, SaaS
                  products, portals, and progressive web apps built with modern technologies.
                </p>
                <div className="space-y-2.5 mb-7 flex-1">
                  {[
                    'eCommerce & Multi-Vendor Platforms',
                    'Laravel, PHP, CI Development',
                    'React / Next.js SPAs & PWAs',
                    'News & Enterprise Portal Development',
                  ].map((f, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" /> {f}
                    </div>
                  ))}
                </div>
                <Link
                  to="/services/web-application"
                  className="mt-auto w-full flex items-center justify-between px-5 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-bold text-sm transition-all group/btn"
                >
                  <span>Explore Web Applications</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== WHY XPECTO ===================== */}
      <section className="w-full py-14 sm:py-20 px-4 sm:px-8 lg:px-16 bg-[#06112a]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left */}
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-cyan-400 mb-2 block">
                Why Xpecto®
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-5">
                "A Reference Based Company"
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
                Over 80% of our engagements come directly through client referrals. We build
                long-term technology partnerships — not just one-time deliveries.
              </p>
              {/* Stats */}
              <div className="grid grid-cols-2 gap-5">
                {[
                  { val: '4000+', label: 'Projects Delivered' },
                  { val: '500+', label: 'Happy Clients' },
                  { val: '11+', label: 'Years Experience' },
                  { val: '19+', label: 'Countries Served' },
                ].map(({ val, label }, i) => (
                  <div key={i} className="border-l-4 border-cyan-500 pl-4">
                    <div className="text-2xl sm:text-3xl font-black text-white">{val}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: feature list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {[
                { icon: ShieldCheck, title: 'Zero Lock-In Guarantee', desc: 'Clean, standards-compliant code with full documentation — you own everything.', color: 'text-cyan-400' },
                { icon: Cpu, title: 'Direct Architect Access', desc: 'Communicate directly with senior technical leads — no middle layers.', color: 'text-blue-400' },
                { icon: Zap, title: 'On-Time Delivery', desc: 'Agile sprints with weekly progress reports and live staging environments.', color: 'text-amber-400' },
                { icon: Globe, title: 'Global Reach', desc: '19+ countries served with 24/7 support and multilingual communication.', color: 'text-emerald-400' },
              ].map(({ icon: Icon, title, desc, color }, i) => (
                <div key={i} className="flex gap-4 p-4 sm:p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/[0.08] transition-all">
                  <div className={`w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 ${color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">{title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== INDUSTRIES ===================== */}
      <section className="w-full py-14 sm:py-20 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-cyan-600 mb-2 block">
              Industries We Serve
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#071330]">
              Serving Every Industry
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
            {[
              { label: 'Finance', icon: TrendingUp },
              { label: 'eCommerce', icon: Globe },
              { label: 'Manufacturing', icon: Settings },
              { label: 'Healthcare', icon: ShieldCheck },
              { label: 'Education', icon: Award },
              { label: 'Real Estate', icon: Database },
            ].map(({ label, icon: Icon }, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 p-5 bg-[#f4f7ff] rounded-2xl hover:bg-cyan-50 hover:shadow-sm border border-transparent hover:border-cyan-200 transition-all group text-center"
              >
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-cyan-500 transition-colors">
                  <Icon className="w-5 h-5 text-cyan-600 group-hover:text-white transition-colors" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#071330]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA BANNER ===================== */}
      <section className="w-full py-12 sm:py-16 px-4 sm:px-8 lg:px-16 bg-[#f4f7ff]">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-r from-[#1a2d6b] via-[#06112a] to-[#1a2d6b] rounded-3xl p-8 sm:p-14 text-center overflow-hidden shadow-2xl">
            {/* Dot pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(white 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            />
            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan-500/20 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <span className="text-xs font-bold tracking-widest uppercase text-cyan-400 mb-3 block">
                Get In Touch
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
                Ready to Build Something Extraordinary?
              </h2>
              <p className="text-slate-300 text-sm mb-8 max-w-xl mx-auto">
                Get a free technical consultation with our lead architects within 24 hours. No commitments.
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <Link
                  to="/services/custom-application"
                  className="px-6 sm:px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-cyan-500/30 transition-all hover:-translate-y-0.5 flex items-center gap-2"
                >
                  Custom Application <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/services/web-application"
                  className="px-6 sm:px-7 py-3.5 border-2 border-white/30 text-white font-bold text-sm rounded-xl hover:bg-white/10 transition-all flex items-center gap-2"
                >
                  Web Application <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
