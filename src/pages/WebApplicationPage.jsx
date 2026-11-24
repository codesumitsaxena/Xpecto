import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  ChevronLeft,
  Star,
  ArrowRight,
  ShoppingCart,
  Building,
  Radio,
  QrCode,
  Award,
  Users,
  CheckCircle2,
  Globe2,
  Code2,
  Sparkles,
  Terminal,
  Cpu
} from 'lucide-react';

export default function WebApplicationPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    country: 'India',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your quote request has been submitted to Xpecto IT Solutions.');
    setFormData({ name: '', phone: '', email: '', country: 'India', description: '' });
  };

  // Real client images for infinite auto-scrolling marquee
  const clientLogos = [
    { src: '/images/2logo.webp', alt: 'RBIQS' },
    { src: '/images/9 (1).webp', alt: 'Penam' },
    { src: '/images/4logo.webp', alt: 'Pikeazy' },
    { src: '/images/5logo.webp', alt: 'SD Carbons' },
    { src: '/images/1 (1).webp', alt: 'Vision Safe' },
    { src: '/images/4 (1).webp', alt: 'Disposafe' },
    { src: '/images/5 (1).webp', alt: 'Vijaya Enterprises' },
    { src: '/images/6 (1).webp', alt: 'KG Group' },
    { src: '/images/7 (1).webp', alt: 'APP Association' },
    { src: '/images/8 (1).webp', alt: 'Infomerics Analytics' }
  ];

  // 7 Solutions with custom colors and modern styling
  const webSolutions = [
    {
      id: 'ecommerce',
      title: 'eCommerce Development',
      desc: 'Xpecto is a leading e-commerce app development company specializing in creating high-performance online stores. Our services encompass the creation of custom e-commerce websites, enabling businesses to sell products and services directly to consumers over the internet.',
      icon: ShoppingCart,
      accentColor: 'from-blue-500 to-cyan-500',
      badgeBg: 'bg-blue-500/10 text-blue-500 border-blue-500/20'
    },
    {
      id: 'website-dev',
      title: 'Website Development',
      desc: 'Xpecto is a leading website development company in India with a proven track record of crafting secure, lightning-fast, and responsive digital presences that convert visitors into loyal clients.',
      badgeText: 'PHP',
      icon: Code2,
      accentColor: 'from-indigo-500 to-blue-500',
      badgeBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
    },
    {
      id: 'ci-dev',
      title: 'CI Development',
      desc: 'Continuous Integration (CI) is a software development practice where developers frequently merge their code changes into a central repository, followed by automated builds and testing.',
      badgeText: '</>',
      icon: Terminal,
      accentColor: 'from-cyan-500 to-teal-500',
      badgeBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
    },
    {
      id: 'laravel',
      title: 'Laravel Devleopment',
      desc: 'Xpecto has a team of Laravel developers who build high-grade, scalable web applications with modular MVC architectures, RESTful APIs, and rock-solid database security.',
      badgeText: 'Laravel',
      icon: Cpu,
      accentColor: 'from-rose-500 to-orange-500',
      badgeBg: 'bg-rose-500/10 text-rose-400 border-rose-500/20'
    },
    {
      id: 'enterprise-portal',
      title: 'Enterprise Portal Development',
      desc: 'Enterprise portal development refers to the creation of secure internal, customer, and supplier transactional platforms that consolidate disparate corporate applications into one interface.',
      icon: Building,
      accentColor: 'from-blue-600 to-indigo-600',
      badgeBg: 'bg-blue-500/10 text-blue-400 border-blue-500/20'
    },
    {
      id: 'news-portal',
      title: 'News Portal Development',
      desc: 'Xpecto is a well-known news website and media portal development agency, engineering rapid content publishing pipelines, live telemetry, and high-traffic optimization.',
      icon: Radio,
      accentColor: 'from-teal-500 to-emerald-500',
      badgeBg: 'bg-teal-500/10 text-teal-400 border-teal-500/20'
    },
    {
      id: 'qr-code',
      title: 'QR Code Development',
      desc: 'Xpecto is a leading IT solutions provider that integrates dynamic QR code generation, contactless digital verification, inventory scanning, and mobile tracking workflows.',
      icon: QrCode,
      accentColor: 'from-purple-500 to-indigo-500',
      badgeBg: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
    }
  ];

  const stats = [
    { number: '4000+', label: 'Successful Projects', icon: Award },
    { number: '11+', label: 'Years of Experience', icon: Users },
    { number: '500+', label: 'Satisfied Clients', icon: CheckCircle2 },
    { number: '80%', label: 'From Reference', icon: Globe2 }
  ];

  return (
    <div className="w-full bg-[#f8faff] dark:bg-[#060b26] text-slate-800 dark:text-slate-100 transition-colors duration-200">
      
      {/* 1. HERO SECTION */}
      <section 
        className="relative w-full py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden text-white"
        style={{
          background: 'linear-gradient(115deg, #c45494 0%, #a83d7e 30%, #bf4a8f 55%, #e182b8 85%, #f2a6cf 100%)'
        }}
      >
        <div className="absolute -left-20 -top-20 w-[600px] h-[600px] rounded-full border-[40px] border-white/10 pointer-events-none" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/5 blur-2xl pointer-events-none" />

        {/* Left colored angled accent pills */}
        <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 opacity-90 z-10">
          <div className="w-4 sm:w-6 h-1.5 bg-amber-400 rotate-45 rounded-full" />
          <div className="w-5 sm:w-7 h-1.5 bg-cyan-400 rotate-45 rounded-full" />
          <div className="w-4 sm:w-6 h-1.5 bg-rose-500 rotate-45 rounded-full" />
        </div>

        {/* Twinkle star */}
        <div className="absolute right-12 sm:right-28 bottom-12 hidden md:block z-10 opacity-80">
          <svg width="45" height="45" viewBox="0 0 40 40" fill="none">
            <path d="M20 0L23 15L38 20L23 25L20 40L17 25L2 20L17 15L20 0Z" fill="white" />
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 text-white drop-shadow-sm leading-tight">
            Best Web Application Maintenance<br />Service
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-white/95 leading-relaxed max-w-2xl mx-auto font-normal">
            Xpecto is a leading e-commerce app development company specializing in creating high-performance
            online stores. Our services encompass the creation of custom e-commerce websites,
            enabling businesses to sell products and services directly to consumers over the internet.
          </p>
        </div>
      </section>

      {/* 2. CLIENT LOGOS STRIP */}
      <section className="w-full bg-white dark:bg-[#080d28] border-b border-slate-200 dark:border-slate-800 py-6 sm:py-8 overflow-hidden shadow-xs">
        <div className="w-full overflow-hidden">
          <div className="animate-marquee flex items-center gap-12 sm:gap-16">
            {clientLogos.map((client, idx) => (
              <div 
                key={`client-w1-${idx}`}
                className="shrink-0 flex items-center justify-center px-4 py-2 hover:scale-105 transition-transform"
              >
                <img 
                  src={client.src} 
                  alt={client.alt}
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain max-w-[160px]"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            ))}
            {clientLogos.map((client, idx) => (
              <div 
                key={`client-w2-${idx}`}
                className="shrink-0 flex items-center justify-center px-4 py-2 hover:scale-105 transition-transform"
              >
                <img 
                  src={client.src} 
                  alt={client.alt}
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain max-w-[160px]"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. "WHAT WE OFFER" & BEAUTIFULLY REDESIGNED SOLUTION CARDS */}
      <section id="solutions" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14 sm:mb-20">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold tracking-widest uppercase bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 mb-3">
            <Sparkles className="w-3 h-3" />
            WHAT WE OFFER
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            We Offer An Effective<br />
            <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Web Applications solutions
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Row 1: 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {webSolutions.slice(0, 4).map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-white dark:bg-[#0a1236] border border-slate-200/90 dark:border-cyan-500/25 rounded-2xl p-7 shadow-sm hover:shadow-2xl dark:shadow-cyan-950/40 hover:border-cyan-400/60 dark:hover:border-cyan-400/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 overflow-hidden"
              >
                {/* Top Subtle Color Accent Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accentColor} opacity-70 group-hover:opacity-100 transition-opacity`} />
                
                {/* Background ambient glow on hover */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform pointer-events-none" />

                <div>
                  {/* Icon / Badge Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-xl bg-slate-50 dark:bg-[#070e2d] border border-slate-200/80 dark:border-cyan-500/30 flex items-center justify-center text-cyan-500 group-hover:scale-110 group-hover:border-cyan-400 transition-all shadow-xs">
                      <IconComponent className="w-6 h-6 stroke-[1.8]" />
                    </div>
                    {item.badgeText && (
                      <span className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-md border ${item.badgeBg}`}>
                        {item.badgeText}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3 leading-snug group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <a
                    href="#quote-section"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:text-blue-600 dark:hover:text-cyan-300 uppercase tracking-wider group-hover:gap-2.5 transition-all"
                  >
                    <span>READ MORE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Row 2: 3 Cards Centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {webSolutions.slice(4, 7).map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-white dark:bg-[#0a1236] border border-slate-200/90 dark:border-cyan-500/25 rounded-2xl p-7 shadow-sm hover:shadow-2xl dark:shadow-cyan-950/40 hover:border-cyan-400/60 dark:hover:border-cyan-400/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accentColor} opacity-70 group-hover:opacity-100 transition-opacity`} />
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-xl bg-slate-50 dark:bg-[#070e2d] border border-slate-200/80 dark:border-cyan-500/30 flex items-center justify-center text-cyan-500 group-hover:scale-110 group-hover:border-cyan-400 transition-all shadow-xs">
                      <IconComponent className="w-6 h-6 stroke-[1.8]" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3 leading-snug group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <a
                    href="#quote-section"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:text-blue-600 dark:hover:text-cyan-300 uppercase tracking-wider group-hover:gap-2.5 transition-all"
                  >
                    <span>READ MORE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. METRICS / STATS SECTION */}
      <section className="w-full bg-white dark:bg-[#070d2b] border-y border-slate-200 dark:border-slate-800/80 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {stats.map((st, idx) => {
              const IconComp = st.icon;
              return (
                <div key={idx} className="flex flex-col items-center p-3">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 dark:bg-cyan-950/60 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-3 border border-cyan-500/20">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-cyan-600 dark:text-cyan-400 tracking-tight">
                    {st.number}
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mt-2 max-w-[160px]">
                    {st.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. GET A QUOTE & CLIENT TESTIMONIAL */}
      <section id="quote-section" className="w-full bg-[#0a123d] dark:bg-[#04081c] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Quote Form Card */}
          <div className="lg:col-span-5 bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-200">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 text-center">
              Get A Quote
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  * Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none text-slate-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  * Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none text-slate-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  * Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none text-slate-900"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  * Country
                </label>
                <select
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none text-slate-900 bg-white"
                >
                  <option value="India">India</option>
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Mexico">Mexico</option>
                  <option value="UAE">UAE</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  * Description
                </label>
                <textarea
                  rows="3"
                  required
                  placeholder="Tell us about your web application requirements..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none text-slate-900 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all text-sm uppercase tracking-wider"
              >
                Submit Quote Request
              </button>
            </form>
          </div>

          {/* Testimonial from Dean Roberts / VisionSafe */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="mb-4">
              <h4 className="text-xl sm:text-2xl font-bold text-white">
                Dean Roberts
              </h4>
              <p className="text-sm text-cyan-400 font-medium">
                VisionSafe
              </p>
              <div className="flex items-center gap-1 text-amber-400 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            <blockquote className="text-sm sm:text-base md:text-lg text-slate-200/90 italic leading-relaxed mb-6 font-light">
              "I Couldn't Recommend The Team At Xpecto IT Solutions More Highly For Their Work.
              Although We Have Only Been Working With Them At Vision Safe For A Few Months,
              In That Time We Have Been Greatly Impressed With Their Professionalism And
              Most Importantly Their Customer Service. After Having Some Difficulties Dealing With IT
              Companies And Developers In The Past It's Really Refreshing To Be Communicating
              With A Team That Knows What They're Doing And Deals With Any Inquiries Quickly And Effectively.
              We Look Forward To Our Continued Relationship With Xpecto IT Solutions And Would
              Recommend Them To Anyone Else In Need Of High Quality And Affordable IT Solutions."
            </blockquote>

            <div className="flex items-center gap-3">
              <button 
                onClick={() => alert('Showing previous client review')}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer"
                title="Previous Review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={() => alert('Showing next client review')}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer"
                title="Next Review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
