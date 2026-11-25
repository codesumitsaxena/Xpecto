import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  ChevronLeft,
  Star,
  ArrowRight,
  Award,
  Users,
  CheckCircle2,
  Globe2
} from 'lucide-react';

export default function WebApplicationPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    country: 'India',
    description: ''
  });

  const [partnerIndex, setPartnerIndex] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your quote request has been submitted to Xpecto IT Solutions.');
    setFormData({ name: '', phone: '', email: '', country: 'India', description: '' });
  };

  // Real client images for infinite auto-scrolling marquee
  const clientLogos = [
    { src: '/images/5logo.webp', alt: 'SD Carbons' },
    { src: '/images/1 (1).webp', alt: 'Vision Safe 20 Years' },
    { src: '/images/4 (1).webp', alt: 'Disposafe' },
    { src: '/images/5 (1).webp', alt: 'Vijaya Enterprises' },
    { src: '/images/6 (1).webp', alt: 'KG Group' },
    { src: '/images/7 (1).webp', alt: 'APP Association' },
    { src: '/images/8 (1).webp', alt: 'Infomerics Analytics' },
    { src: '/images/9 (1).webp', alt: 'Penam' },
    { src: '/images/10 (1).webp', alt: 'HBM Gold' },
    { src: '/images/4logo.webp', alt: 'Pikeazy' },
    { src: '/images/2logo.webp', alt: 'RBIQS' }
  ];

  // Exact 7 Solutions matching Screenshot 1 (original website):
  // 1. eCommerce Development
  // 2. Website Development
  // 3. CI Development (Center highlighted dark navy circle)
  // 4. Laravel Devleopment
  // 5. Enterprise Portal Development
  // 6. News Portal Development (Center highlighted dark navy circle)
  // 7. QR Code Development
  const webSolutions = [
    {
      id: 'ecommerce',
      title: 'eCommerce\nDevelopment',
      desc: 'Xpecto is a leading e-commerce app development company specializing in creating high-performance online stores. Our services encompass the creation of custom e-commerce websites, enabling businesses to sell products and services directly to consumers over the internet.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
        </svg>
      ),
      isDarkBadge: false
    },
    {
      id: 'website-dev',
      title: 'Website\nDevelopment',
      desc: 'Xpecto is a leading website development company in India with a proven track record of crafting secure, lightning-fast, and responsive digital presences that convert visitors into loyal clients.',
      badgeText: 'php',
      isDarkBadge: false
    },
    {
      id: 'ci-dev',
      title: 'CI Development',
      desc: 'Continuous Integration (CI) is a software development practice where developers frequently merge their code changes into a central repository, followed by automated builds and testing.',
      badgeText: '</>',
      isDarkBadge: true
    },
    {
      id: 'laravel',
      title: 'Laravel Devleopment',
      desc: 'Xpecto has a team of Laravel developers who build high-grade, scalable web applications with modular MVC architectures, RESTful APIs, and rock-solid database security.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      isDarkBadge: false
    },
    {
      id: 'enterprise-portal',
      title: 'Enterprise Portal\nDevelopment',
      desc: 'Enterprise portal development refers to the creation of secure internal, customer, and supplier transactional platforms that consolidate disparate corporate applications into one interface.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="9" y1="22" x2="9" y2="22.01"/><line x1="15" y1="22" x2="15" y2="22.01"/><line x1="9" y1="6" x2="9" y2="6.01"/><line x1="15" y1="6" x2="15" y2="6.01"/><line x1="9" y1="10" x2="9" y2="10.01"/><line x1="15" y1="10" x2="15" y2="10.01"/><line x1="9" y1="14" x2="9" y2="14.01"/><line x1="15" y1="14" x2="15" y2="14.01"/><line x1="9" y1="18" x2="9" y2="18.01"/><line x1="15" y1="18" x2="15" y2="18.01"/>
        </svg>
      ),
      isDarkBadge: false
    },
    {
      id: 'news-portal',
      title: 'News Portal\nDevelopment',
      desc: 'Xpecto is a well-known news website and media portal development agency, engineering rapid content publishing pipelines, live telemetry, and high-traffic optimization.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"/><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/>
        </svg>
      ),
      isDarkBadge: true
    },
    {
      id: 'qr-code',
      title: 'QR Code\nDevelopment',
      desc: 'Xpecto is a leading IT solutions provider that integrates dynamic QR code generation, contactless digital verification, inventory scanning, and mobile tracking workflows.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
        </svg>
      ),
      isDarkBadge: false
    }
  ];

  const stats = [
    { number: '4000+', label: 'Successful Projects', icon: Award },
    { number: '11+', label: 'Years of Experience', icon: Users },
    { number: '500+', label: 'Satisfied Clients', icon: CheckCircle2 },
    { number: '80%', label: 'From Reference', icon: Globe2 }
  ];

  const allPartners = [
    { name: 'AWS Partner Network', src: '/images/aws-partner.png', fallback: '/images/aws.png', role: 'AWS PARTNER NETWORK ★★★' },
    { name: 'EnKosh', src: '/images/enkash.png', fallback: '/images/enkash.png', role: 'AUTHORIZED PARTNER ★★★' },
    { name: 'Tally Prime', src: '/images/tally.png', fallback: '/images/tally.png', role: 'ASSOCIATE PARTNER ★★★' },
    { name: 'PhonePe', src: '/images/phonepe.png', fallback: '/images/phonepe.png', role: 'PARTNER NETWORK ★★★' },
    { name: 'Microsoft 365', src: '/images/microsoft-365-partner.png', fallback: '/images/microsoft.png', role: 'CLOUD PARTNER ★★★' },
    { name: 'WhatsApp Business API', src: '/images/interkat-whatsapp-business-api-partner.png', fallback: '/images/interkat-whatsapp-business-api-partner.png', role: 'API INTEGRATION PARTNER ★★★' }
  ];

  const nextPartners = () => {
    setPartnerIndex((prev) => (prev + 1 >= allPartners.length - 3 ? 0 : prev + 1));
  };

  const prevPartners = () => {
    setPartnerIndex((prev) => (prev <= 0 ? allPartners.length - 4 : prev - 1));
  };

  return (
    <div className="w-full bg-white text-slate-800">
      
      {/* 1. HERO SECTION */}
      <section 
        className="relative w-full py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden text-white"
        style={{
          background: 'linear-gradient(115deg, #c45494 0%, #a83d7e 30%, #bf4a8f 55%, #e182b8 85%, #f2a6cf 100%)'
        }}
      >
        <div className="absolute -left-20 -top-20 w-[600px] h-[600px] rounded-full border-[40px] border-white/10 pointer-events-none" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/5 blur-2xl pointer-events-none" />

        <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 opacity-90 z-10">
          <div className="w-4 sm:w-6 h-1.5 bg-amber-400 rotate-45 rounded-full" />
          <div className="w-5 sm:w-7 h-1.5 bg-cyan-400 rotate-45 rounded-full" />
          <div className="w-4 sm:w-6 h-1.5 bg-rose-500 rotate-45 rounded-full" />
        </div>

        <div className="absolute right-12 sm:right-28 bottom-12 hidden md:block z-10 opacity-80">
          <svg width="45" height="45" viewBox="0 0 40 40" fill="none">
            <path d="M20 0L23 15L38 20L23 25L20 40L17 25L2 20L17 15L20 0Z" fill="white" />
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 text-white drop-shadow-sm leading-tight">
            Best Web Application<br />Maintenance Service
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-white/95 leading-relaxed max-w-2xl mx-auto font-normal">
            Xpecto is a leading e-commerce app development company specializing in creating high-performance
            online stores. Our services encompass the creation of custom e-commerce websites,
            enabling businesses to sell products and services directly to consumers over the internet.
          </p>
        </div>
      </section>

      {/* 2. CLIENT LOGOS STRIP */}
      <section className="w-full bg-white border-b border-slate-100 py-6 sm:py-8 overflow-hidden">
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

      {/* 3. EXACT SECOND SECTION (Matches original site Screenshot 1 100%) */}
      <section id="solutions" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-[#00a3ff] mb-2 block">
            WHAT WE OFFER
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#071330] tracking-tight">
            We Offer An Effective<br />
            Web Applications solutions
          </h2>
        </div>

        {/* Row 1: 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-10">
          {webSolutions.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 sm:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.05)] border border-slate-100/80 flex flex-col justify-between hover:shadow-[0_10px_35px_rgba(0,0,0,0.08)] transition-all"
            >
              <div>
                {/* Floating circle icon matching exact original screenshot */}
                <div className="flex justify-center -mt-2 mb-6">
                  <div className={`w-13 h-13 rounded-full flex items-center justify-center shadow-xs ${
                    item.isDarkBadge 
                      ? 'bg-[#152347] text-white font-mono font-bold text-sm'
                      : 'bg-[#edf4ff] text-[#00a3ff] font-bold text-sm'
                  }`}>
                    {item.icon ? item.icon : item.badgeText}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#071330] text-center mb-3 leading-snug whitespace-pre-line">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 text-center leading-relaxed font-normal mb-8 line-clamp-4">
                  {item.desc}
                </p>
              </div>

              {/* READ MORE Button matching exact blue button pill */}
              <div className="text-center">
                <a
                  href="#quote-section"
                  className="inline-flex items-center justify-center px-4 py-2 bg-[#f0f6ff] hover:bg-[#00a3ff] text-[#00a3ff] hover:text-white rounded-md text-[11px] font-bold tracking-wider uppercase transition-colors"
                >
                  <span>READ MORE</span>
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: 3 Cards Centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {webSolutions.slice(4, 7).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 sm:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.05)] border border-slate-100/80 flex flex-col justify-between hover:shadow-[0_10px_35px_rgba(0,0,0,0.08)] transition-all"
            >
              <div>
                <div className="flex justify-center -mt-2 mb-6">
                  <div className={`w-13 h-13 rounded-full flex items-center justify-center shadow-xs ${
                    item.isDarkBadge 
                      ? 'bg-[#152347] text-white font-mono font-bold text-sm'
                      : 'bg-[#edf4ff] text-[#00a3ff] font-bold text-sm'
                  }`}>
                    {item.icon ? item.icon : item.badgeText}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#071330] text-center mb-3 leading-snug whitespace-pre-line">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 text-center leading-relaxed font-normal mb-8 line-clamp-4">
                  {item.desc}
                </p>
              </div>

              <div className="text-center">
                <a
                  href="#quote-section"
                  className="inline-flex items-center justify-center px-4 py-2 bg-[#f0f6ff] hover:bg-[#00a3ff] text-[#00a3ff] hover:text-white rounded-md text-[11px] font-bold tracking-wider uppercase transition-colors"
                >
                  <span>READ MORE</span>
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. METRICS / STATS SECTION */}
      <section className="w-full bg-white border-y border-slate-200 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {stats.map((st, idx) => {
              const IconComp = st.icon;
              return (
                <div key={idx} className="flex flex-col items-center p-3">
                  <div className="w-14 h-14 rounded-full bg-[#00a3ff]/10 flex items-center justify-center text-[#00a3ff] mb-4">
                    <IconComp className="w-7 h-7 stroke-[2.2]" />
                  </div>
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-[#071330] tracking-tight">
                    {st.number}
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-2 max-w-[160px]">
                    {st.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. GET A QUOTE & CLIENT TESTIMONIAL */}
      <section id="quote-section" className="w-full bg-[#0b1442] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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

      {/* 6. OUR PARTNERS (Interactive Slider with Left/Right Arrows) */}
      <section className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071330] mb-12 tracking-tight">
            Our Partners
          </h2>

          <div className="relative flex items-center justify-center max-w-5xl mx-auto px-4 sm:px-8">
            <button
              onClick={prevPartners}
              className="absolute left-0 z-10 w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center text-cyan-600 hover:text-white hover:bg-cyan-500 hover:border-cyan-500 transition-all shadow-xs cursor-pointer"
              title="Previous Partner"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 w-full px-6 transition-all duration-300">
              {allPartners.slice(partnerIndex, partnerIndex + 4).map((p, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-slate-200 hover:border-cyan-400 hover:shadow-md transition-all group"
                >
                  <div className="h-24 sm:h-28 w-full flex items-center justify-center p-2">
                    <img 
                      src={p.src} 
                      alt={p.name}
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => {
                        e.target.src = p.fallback;
                      }}
                    />
                  </div>
                  <span className="text-xs font-bold text-slate-800 mt-2 text-center">
                    {p.name}
                  </span>
                  <span className="text-[10px] text-slate-500 text-center">
                    {p.role}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={nextPartners}
              className="absolute right-0 z-10 w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center text-cyan-600 hover:text-white hover:bg-cyan-500 hover:border-cyan-500 transition-all shadow-xs cursor-pointer"
              title="Next Partner"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
