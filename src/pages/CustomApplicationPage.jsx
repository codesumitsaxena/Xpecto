import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  ChevronLeft,
  Star,
  ArrowRight,
  Shield,
  Award,
  Users,
  CheckCircle2,
  Globe2,
  Sparkles,
  Building2,
  Cpu,
  Settings,
  Cloud
} from 'lucide-react';

export default function CustomApplicationPage() {
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

  const clientLogos = [
    { src: '/images/4logo.webp', alt: 'Pikeazy' },
    { src: '/images/5logo.webp', alt: 'SD Carbons' },
    { src: '/images/1 (1).webp', alt: 'Vision Safe' },
    { src: '/images/4 (1).webp', alt: 'Disposafe' },
    { src: '/images/5 (1).webp', alt: 'Vijaya Enterprises' },
    { src: '/images/6 (1).webp', alt: 'KG Group' },
    { src: '/images/7 (1).webp', alt: 'APP Association' },
    { src: '/images/8 (1).webp', alt: 'Infomerics Analytics' },
    { src: '/images/9 (1).webp', alt: 'Penam' },
    { src: '/images/10 (1).webp', alt: 'HBM Gold' },
    { src: '/images/11 (1).webp', alt: 'Hygiene Plus' },
    { src: '/images/14 (1).webp', alt: 'Grow Money' },
    { src: '/images/15 (1).webp', alt: 'Milestone' },
    { src: '/images/16 (1).webp', alt: 'Hitkari' },
    { src: '/images/17 (1).webp', alt: 'Kedia' },
    { src: '/images/18 (1).webp', alt: 'NSN Healthcare' }
  ];

  const solutions = [
    {
      id: 'custom-app',
      title: 'Custom Applications Development',
      desc: 'Xpecto is a leading custom application development company with skilled developers who specialize in crafting innovative and efficient software solutions. We use the latest technologies to deliver high-quality applications that are both functional and user-friendly.',
      icon: Settings,
      accentColor: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'crm-app',
      title: 'Crm Application Development',
      desc: 'Xpecto is a best CRM development company in India that delivers enterprise CRM solutions tailored to streamline sales pipelines, automated workflow, customer lifecycle handling, and team collaboration.',
      icon: Users,
      accentColor: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'erp-app',
      title: 'ERP Application Development',
      desc: 'Xpecto is a prominent player in the field of custom ERP software development, helping businesses unify disparate supply chain, inventory, procurement, and accounting workflows into one unified engine.',
      icon: Building2,
      accentColor: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'iot-app',
      title: 'IOT Application Development',
      desc: 'Xpecto is a leading provider of IoT application development services, enabling smart device telemetry, sensor data streams, cloud sync, and real-time dashboard monitoring for modern connected industries.',
      icon: Cpu,
      accentColor: 'from-teal-500 to-emerald-500'
    },
    {
      id: 'saas-app',
      title: 'SAAS Application Development',
      desc: "Xpecto's SaaS application development services engineer high-uptime, multi-tenant cloud architectures featuring automated billing, enterprise authentication, and elastic scaling capabilities.",
      icon: Cloud,
      accentColor: 'from-sky-500 to-cyan-500'
    }
  ];

  const partners = [
    { name: 'AWS Partner Network', src: '/images/aws.png', role: 'AWS PARTNER NETWORK ★★★' },
    { name: 'EnKosh', src: '/images/enkash.png', role: 'AUTHORIZED PARTNER ★★★' },
    { name: 'Tally Prime', src: '/images/tally.png', role: 'ASSOCIATE PARTNER ★★★' },
    { name: 'PhonePe', src: '/images/phonepe.png', role: 'PARTNER NETWORK ★★★' }
  ];

  return (
    <div className="w-full bg-[#f8faff] dark:bg-[#060b26] text-slate-800 dark:text-slate-100 transition-colors duration-200">
      
      {/* 1. HERO SECTION */}
      <section 
        className="relative w-full py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden text-white bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(7, 11, 36, 0.72), rgba(7, 11, 36, 0.85)), url('/images/customapp_bg.png')`,
          backgroundColor: '#070b24'
        }}
      >
        <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 opacity-90">
          <div className="w-4 sm:w-6 h-1.5 bg-amber-400 rotate-45 rounded-full" />
          <div className="w-5 sm:w-7 h-1.5 bg-cyan-400 rotate-45 rounded-full" />
          <div className="w-4 sm:w-6 h-1.5 bg-rose-500 rotate-45 rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 text-white drop-shadow-md">
            Custom Applications
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-200/90 leading-relaxed max-w-2xl mx-auto font-normal">
            Xpecto is a leading custom application development company with skilled developers who specialize
            in crafting innovative and efficient software solutions. We use the latest technologies to deliver
            high-quality applications that are both functional and user-friendly.
          </p>
        </div>
      </section>

      {/* 2. INFINITE AUTO-SCROLLING CLIENT LOGOS STRIP */}
      <section className="w-full bg-white dark:bg-[#080d28] border-b border-slate-200 dark:border-slate-800 py-6 overflow-hidden shadow-sm">
        <div className="w-full overflow-hidden">
          <div className="animate-marquee flex items-center gap-10 sm:gap-14">
            {clientLogos.map((client, idx) => (
              <div 
                key={`client-1-${idx}`}
                className="shrink-0 flex items-center justify-center px-4 py-2 hover:scale-110 transition-transform"
              >
                <img 
                  src={client.src} 
                  alt={client.alt}
                  className="h-9 sm:h-11 md:h-12 w-auto object-contain max-w-[140px]"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            ))}
            {clientLogos.map((client, idx) => (
              <div 
                key={`client-2-${idx}`}
                className="shrink-0 flex items-center justify-center px-4 py-2 hover:scale-110 transition-transform"
              >
                <img 
                  src={client.src} 
                  alt={client.alt}
                  className="h-9 sm:h-11 md:h-12 w-auto object-contain max-w-[140px]"
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
              Custom Applications solutions
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Row 1: 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {solutions.slice(0, 4).map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-white dark:bg-[#0a1236] border border-slate-200/90 dark:border-cyan-500/25 rounded-2xl p-7 shadow-sm hover:shadow-2xl dark:shadow-cyan-950/40 hover:border-cyan-400/60 dark:hover:border-cyan-400/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accentColor} opacity-70 group-hover:opacity-100 transition-opacity`} />
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform pointer-events-none" />

                <div>
                  <div className="w-13 h-13 rounded-xl bg-slate-50 dark:bg-[#070e2d] border border-slate-200/80 dark:border-cyan-500/30 flex items-center justify-center text-cyan-500 group-hover:scale-110 group-hover:border-cyan-400 transition-all shadow-xs mb-6">
                    <IconComponent className="w-6 h-6 stroke-[1.8]" />
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

        {/* Row 2: Center 5th Card */}
        <div className="flex justify-center">
          <div className="w-full sm:w-2/3 lg:w-1/3">
            {(() => {
              const saas = solutions[4];
              const IconComponent = saas.icon;
              return (
                <div className="group relative bg-white dark:bg-[#0a1236] border border-slate-200/90 dark:border-cyan-500/25 rounded-2xl p-7 shadow-sm hover:shadow-2xl dark:shadow-cyan-950/40 hover:border-cyan-400/60 dark:hover:border-cyan-400/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${saas.accentColor} opacity-70 group-hover:opacity-100 transition-opacity`} />
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform pointer-events-none" />

                  <div>
                    <div className="w-13 h-13 rounded-xl bg-slate-50 dark:bg-[#070e2d] border border-slate-200/80 dark:border-cyan-500/30 flex items-center justify-center text-cyan-500 group-hover:scale-110 group-hover:border-cyan-400 transition-all shadow-xs mb-6">
                      <IconComponent className="w-6 h-6 stroke-[1.8]" />
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3 leading-snug group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {saas.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-6">
                      {saas.desc}
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
            })()}
          </div>
        </div>
      </section>

      {/* 4. METRICS / STATS SECTION */}
      <section className="w-full bg-white dark:bg-[#070d2b] border-y border-slate-200 dark:border-slate-800/80 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="flex flex-col items-center p-3">
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 dark:bg-cyan-950/60 flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-3 border border-cyan-500/20">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-3xl sm:text-4xl md:text-5xl font-black text-cyan-600 dark:text-cyan-400 tracking-tight">
                0+
              </span>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mt-2 max-w-[160px]">
                Successfully Completed Projects
              </p>
            </div>

            <div className="flex flex-col items-center p-3">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 dark:bg-blue-950/60 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3 border border-blue-500/20">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-3xl sm:text-4xl md:text-5xl font-black text-cyan-600 dark:text-cyan-400 tracking-tight">
                0+
              </span>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mt-2 max-w-[160px]">
                Years of Experiences To Run This Company
              </p>
            </div>

            <div className="flex flex-col items-center p-3">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-3 border border-emerald-500/20">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <span className="text-3xl sm:text-4xl md:text-5xl font-black text-cyan-600 dark:text-cyan-400 tracking-tight">
                0+
              </span>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mt-2 max-w-[160px]">
                Satisfied 100% Our Clients
              </p>
            </div>

            <div className="flex flex-col items-center p-3">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 dark:bg-indigo-950/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-3 border border-indigo-500/20">
                <Globe2 className="w-6 h-6" />
              </div>
              <span className="text-3xl sm:text-4xl md:text-5xl font-black text-cyan-600 dark:text-cyan-400 tracking-tight">
                0%
              </span>
              <p className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mt-2 max-w-[160px]">
                All Reference
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GET A QUOTE & CLIENT TESTIMONIAL SECTION */}
      <section id="quote-section" className="w-full bg-[#0a123d] dark:bg-[#04081c] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
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
                  placeholder="Tell us about your project requirements..."
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

      {/* 6. OUR PARTNERS */}
      <section className="w-full bg-white dark:bg-[#070b22] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-10 tracking-tight">
            Our Partners
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 w-full max-w-4xl mx-auto px-4">
            {partners.map((p, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-4 bg-white dark:bg-[#0c1544]/60 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-cyan-400 transition-all shadow-sm"
              >
                <div className="h-20 sm:h-24 w-full flex items-center justify-center p-2">
                  <img 
                    src={p.src} 
                    alt={p.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-2">
                  {p.name}
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">
                  {p.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
