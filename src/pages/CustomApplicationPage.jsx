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

  const [partnerIndex, setPartnerIndex] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your quote request has been submitted to Xpecto IT Solutions.');
    setFormData({ name: '', phone: '', email: '', country: 'India', description: '' });
  };

  const clientLogos = [
    { src: '/images/5logo.webp', alt: 'SD Carbons' },
    { src: '/images/1 (1).webp', alt: 'Vision Safe' },
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

  const solutions = [
    {
      id: 'custom-app',
      title: 'Custom Applications Development',
      desc: 'Xpecto is a leading custom application development company with skilled developers who specialize in crafting innovative and efficient software solutions. We use the latest technologies to deliver high-quality applications that are both functional and user-friendly.',
      icon: Settings
    },
    {
      id: 'crm-app',
      title: 'Crm Application Development',
      desc: 'Xpecto is a best CRM development company in India that delivers enterprise CRM solutions tailored to streamline sales pipelines, automated workflow, customer lifecycle handling, and team collaboration.',
      icon: Users
    },
    {
      id: 'erp-app',
      title: 'ERP Application Development',
      desc: 'Xpecto is a prominent player in the field of custom ERP software development, helping businesses unify disparate supply chain, inventory, procurement, and accounting workflows into one unified engine.',
      icon: Building2
    },
    {
      id: 'iot-app',
      title: 'IOT Application Development',
      desc: 'Xpecto is a leading provider of IoT application development services, enabling smart device telemetry, sensor data streams, cloud sync, and real-time dashboard monitoring for modern connected industries.',
      icon: Cpu
    },
    {
      id: 'saas-app',
      title: 'SAAS Application Development',
      desc: "Xpecto's SaaS application development services engineer high-uptime, multi-tenant cloud architectures featuring automated billing, enterprise authentication, and elastic scaling capabilities.",
      icon: Cloud
    }
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
    <div className="w-full bg-white text-slate-800 transition-colors duration-200">
      
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
      <section className="w-full bg-white border-b border-slate-100 py-6 sm:py-8 overflow-hidden shadow-xs">
        <div className="w-full overflow-hidden">
          <div className="animate-marquee flex items-center gap-12 sm:gap-16">
            {clientLogos.map((client, idx) => (
              <div 
                key={`client-1-${idx}`}
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
                key={`client-2-${idx}`}
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

      {/* 3. "WHAT WE OFFER" & "Custom Applications solutions" */}
      <section id="solutions" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
        <div className="text-center mb-14 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-cyan-600 mb-2 block">
            WHAT WE OFFER
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#071330] tracking-tight">
            We Offer An Effective<br />
            <span className="text-[#071330]">Custom Applications solutions</span>
          </h2>
        </div>

        {/* Row 1: 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {solutions.slice(0, 4).map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-7 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.12)] border border-slate-100 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex justify-center mb-6">
                    <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center font-bold text-sm shadow-xs">
                      <IconComponent className="w-6 h-6 stroke-[1.8]" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#071330] text-center mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 text-center leading-relaxed font-normal mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="text-center pt-2">
                  <a
                    href="#quote-section"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00a3ff] hover:text-blue-700 uppercase tracking-wider transition-colors"
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
                <div className="bg-white rounded-2xl p-7 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.12)] border border-slate-100 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5">
                  <div>
                    <div className="flex justify-center mb-6">
                      <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center font-bold text-sm shadow-xs">
                        <IconComponent className="w-6 h-6 stroke-[1.8]" />
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#071330] text-center mb-3 leading-snug">
                      {saas.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 text-center leading-relaxed font-normal mb-6">
                      {saas.desc}
                    </p>
                  </div>

                  <div className="text-center pt-2">
                    <a
                      href="#quote-section"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00a3ff] hover:text-blue-700 uppercase tracking-wider transition-colors"
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
      <section className="w-full bg-white border-y border-slate-200 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="flex flex-col items-center p-3">
              <div className="w-14 h-14 rounded-full bg-[#00a3ff]/10 flex items-center justify-center text-[#00a3ff] mb-4">
                <Award className="w-7 h-7 stroke-[2.2]" />
              </div>
              <span className="text-3xl sm:text-4xl md:text-5xl font-black text-[#071330] tracking-tight">
                4000+
              </span>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-2 max-w-[160px]">
                Successfully Completed Projects
              </p>
            </div>

            <div className="flex flex-col items-center p-3">
              <div className="w-14 h-14 rounded-full bg-[#00a3ff]/10 flex items-center justify-center text-[#00a3ff] mb-4">
                <Users className="w-7 h-7 stroke-[2.2]" />
              </div>
              <span className="text-3xl sm:text-4xl md:text-5xl font-black text-[#071330] tracking-tight">
                11+
              </span>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-2 max-w-[160px]">
                Years of Experiences To Run This Company
              </p>
            </div>

            <div className="flex flex-col items-center p-3">
              <div className="w-14 h-14 rounded-full bg-[#00a3ff]/10 flex items-center justify-center text-[#00a3ff] mb-4">
                <CheckCircle2 className="w-7 h-7 stroke-[2.2]" />
              </div>
              <span className="text-3xl sm:text-4xl md:text-5xl font-black text-[#071330] tracking-tight">
                500+
              </span>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-2 max-w-[160px]">
                Satisfied 100% Our Clients
              </p>
            </div>

            <div className="flex flex-col items-center p-3">
              <div className="w-14 h-14 rounded-full bg-[#00a3ff]/10 flex items-center justify-center text-[#00a3ff] mb-4">
                <Globe2 className="w-7 h-7 stroke-[2.2]" />
              </div>
              <span className="text-3xl sm:text-4xl md:text-5xl font-black text-[#071330] tracking-tight">
                80%
              </span>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-2 max-w-[160px]">
                All Reference
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GET A QUOTE & CLIENT TESTIMONIAL SECTION */}
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
