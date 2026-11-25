import React, { useState } from 'react';
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
  Cloud,
  GraduationCap,
  Headphones,
  MessageCircle,
  Handshake,
  BookOpen,
  Lock,
  Layers,
  Link,
  TrendingUp,
  LifeBuoy
} from 'lucide-react';

export default function CustomApplicationPage() {
  const [activeTab, setActiveTab] = useState('tailored');
  const [partnerIndex, setPartnerIndex] = useState(0);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', country: 'India', description: '' });
  const [techTab, setTechTab] = useState('frontend');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will get back to you shortly.');
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
    { src: '/images/2logo.webp', alt: 'RBIQS' },
    { src: '/images/1logo.webp', alt: 'Client 12' },
    { src: '/images/3logo.webp', alt: 'Client 13' },
  ];

  // Section 3 — right side service cards
  const serviceItems = [
    {
      id: 'mobile-app',
      title: 'Custom Mobile App Development',
      desc: 'We specialize in building mobile applications that are functional, user-friendly, and optimized for performance across all platforms.',
    },
    {
      id: 'crm',
      title: 'Customer Support and Service',
      desc: "Our CRM solutions develop customer support by providing tools for ticket management, inquiries, and service tracking to resolve issues promptly.",
    },
    {
      id: 'web-dev',
      title: 'Custom Website Development',
      desc: 'We create visually appealing, brand-reflective websites that are optimized for search engines and built to convert visitors.',
    },
    {
      id: 'bpm',
      title: 'Custom Business Process Management (BPM)',
      desc: 'Our BPM solutions streamline operations by automating workflows, analyzing processes, and implementing custom productivity solutions.',
    },
    {
      id: 'crm-system',
      title: 'Custom CRM Development',
      desc: 'Custom CRM systems tailored to your business — enabling better data management, customer lifecycle handling, and engagement.',
    },
    {
      id: 'erp',
      title: 'Custom Enterprise Resource Planning (ERP)',
      desc: 'We integrate business functions into a single ERP system for better data flow, decision-making, and operational efficiency.',
    },
    {
      id: 'saas',
      title: 'Custom SAAS Application Development',
      desc: 'Scalable SaaS applications with multi-tenant cloud architecture, automated billing, and enterprise-grade authentication.',
    },
    {
      id: 'iot',
      title: 'Custom IOT Application Development',
      desc: 'IoT applications that connect smart devices, gather real-time sensor data, and enable intelligent decision-making at scale.',
    },
  ];

  // Section 4 — Tabbed Roles section
  const roleTabs = [
    {
      id: 'tailored',
      label: 'Tailored Solutions',
      icon: BookOpen,
      heading: 'Tailored Solutions',
      content: 'Custom application development allows businesses to create solutions designed for their unique challenges. Unlike generic software, custom apps are built from the ground up to align with your goals, ensuring seamless integration with existing workflows.',
      points: [
        { bold: 'Increased Efficiency:', text: 'Streamline specific pain points to enhance productivity.' },
        { bold: 'Enhanced User Adoption:', text: 'Employees are more likely to use tools tailored to their needs.' },
        { bold: 'Scalability and Flexibility:', text: 'Apps can be adapted as your business evolves.' },
        { bold: 'Competitive Advantage:', text: 'Operate more efficiently and make data-driven decisions.' },
      ],
    },
    {
      id: 'security',
      label: 'Enhanced Security',
      icon: Lock,
      heading: 'Enhanced Security',
      content: 'Custom applications can be developed with advanced security features tailored to your specific risks — including encryption, user authentication, and secure data storage.',
      points: [
        { bold: 'Reduced Risk:', text: 'Tailored security measures safeguard sensitive information.' },
        { bold: 'Compliance Assurance:', text: 'Designed to meet industry-specific compliance standards.' },
        { bold: 'Robust Data Protection:', text: 'Multi-factor authentication and role-based access controls.' },
        { bold: 'Continuous Enhancements:', text: 'Real-time security upgrades based on emerging threats.' },
      ],
    },
    {
      id: 'scalability',
      label: 'Improved Scalability',
      icon: Layers,
      heading: 'Improved Scalability',
      content: 'Custom applications are designed with scalability in mind, allowing businesses to grow without being hindered by technological constraints.',
      points: [
        { bold: 'Future-Proofing:', text: 'Avoid costly upgrades by investing in scalable solutions.' },
        { bold: 'Cost Efficiency:', text: 'Reduce the need for frequent system changes.' },
        { bold: 'Seamless Expansion:', text: 'Handle increased workloads and larger datasets.' },
        { bold: 'Optimized Performance:', text: 'Maintain speed and efficiency as demands increase.' },
      ],
    },
    {
      id: 'integration',
      label: 'Integration',
      icon: Link,
      heading: 'Integration',
      content: 'Custom application development allows for smooth integration of new software with existing systems, essential for businesses that rely on multiple technologies.',
      points: [
        { bold: 'Streamlined Operations:', text: 'Improved data flow leads to enhanced productivity.' },
        { bold: 'Maximized ROI:', text: 'Get maximum value from existing technology investments.' },
        { bold: 'System Compatibility:', text: 'Works alongside legacy systems, cloud platforms, and APIs.' },
        { bold: 'Real-Time Data Sync:', text: 'Accurate, up-to-date data across all platforms.' },
      ],
    },
    {
      id: 'advantage',
      label: 'Competitive Advantage',
      icon: TrendingUp,
      heading: 'Competitive Advantage',
      content: 'Investing in custom development helps businesses differentiate themselves by offering innovative features and unique value propositions.',
      points: [
        { bold: 'Enhanced Customer Experience:', text: 'Tailored solutions meet specific customer needs.' },
        { bold: 'Increased Market Share:', text: 'Unique offerings help capture new markets.' },
        { bold: 'Operational Excellence:', text: 'Reduce inefficiencies and respond faster to market demands.' },
        { bold: 'Scalability & Innovation:', text: 'Integrate AI, ML, and predictive analytics with ease.' },
      ],
    },
    {
      id: 'support',
      label: 'Ongoing support',
      icon: LifeBuoy,
      heading: 'Ongoing support',
      content: 'Custom application development comes with dedicated support and maintenance, ensuring optimal performance and continuous improvements over time.',
      points: [
        { bold: 'Minimized Downtime:', text: 'Quick issue resolution reduces business disruptions.' },
        { bold: 'Adaptability:', text: 'Ongoing updates keep the application relevant and effective.' },
        { bold: 'Proactive Security:', text: 'Regular patches tailored to specific security threats.' },
        { bold: 'Performance Enhancements:', text: 'Seamless scalability as business needs grow.' },
      ],
    },
  ];

  // Section 5 — Why Choose Us cards
  const whyUsCards = [
    {
      id: 'experience',
      icon: GraduationCap,
      title: 'Experience',
      desc: 'We have worked with a wide range of clients, from small ecommerce websites to large multinational corporations, healthcare providers, and more.',
    },
    {
      id: 'fullservice',
      icon: Headphones,
      title: 'Full Service Capabilities',
      desc: 'We offer full-service website design, development, online marketing, and web hosting, which can streamline the entire process.',
    },
    {
      id: 'customercentric',
      icon: MessageCircle,
      title: 'Customer-Centric',
      desc: 'We prioritize customer service and aim to empower business growth through superior digital marketing solutions and building lasting relationships.',
    },
    {
      id: 'commitment',
      icon: Handshake,
      title: 'Commitment',
      desc: 'We are committed to our clients and offer great services in design, development, programming, and marketing fields.',
    },
  ];

  // Tech logos by tab
  const techLogos = {
    frontend: [
      { src: '/images/Htmlnew.png', label: 'HTML5' },
      { src: '/images/cssNew.png', label: 'CSS3' },
      { src: '/images/javascript.png', label: 'Javascript' },
      { src: '/images/bootstrap.png', label: 'Bootstrap' },
      { src: '/images/reactjs.png', label: 'ReactJs' },
      { src: '/images/nextjsl.png', label: 'Next.js' },
    ],
    backend: [
      { src: '/images/phpNew.png', label: 'PHP' },
      { src: '/images/Codeigniter.png', label: 'CodeIgniter' },
      { src: '/images/laravel.jpg', label: 'Laravel' },
      { src: '/images/nodeNew.png', label: 'Node.js' },
    ],
    database: [
      { src: '/images/mysql.png', label: 'MySQL' },
      { src: '/images/mongodb.png', label: 'MongoDB' },
    ],
  };

  const allPartners = [
    { name: 'AWS Partner Network', src: '/images/aws-partner.png', fallback: '/images/aws.png', role: 'AWS PARTNER NETWORK' },
    { name: 'EnKash', src: '/images/enkash.png', fallback: '/images/enkash.png', role: 'AUTHORIZED PARTNER' },
    { name: 'Tally Prime', src: '/images/tally.png', fallback: '/images/tally.png', role: 'ASSOCIATE PARTNER' },
    { name: 'PhonePe', src: '/images/phonepe.png', fallback: '/images/phonepe.png', role: 'PARTNER NETWORK' },
    { name: 'Microsoft 365', src: '/images/microsoft-365-partner.png', fallback: '/images/microsoft.png', role: 'CLOUD PARTNER' },
    { name: 'WhatsApp Business API', src: '/images/interkat-whatsapp-business-api-partner.png', fallback: '/images/interkat-whatsapp-business-api-partner.png', role: 'API INTEGRATION PARTNER' },
  ];

  const nextPartners = () => setPartnerIndex((p) => (p + 1 >= allPartners.length - 3 ? 0 : p + 1));
  const prevPartners = () => setPartnerIndex((p) => (p <= 0 ? allPartners.length - 4 : p - 1));

  const activeRole = roleTabs.find((t) => t.id === activeTab);

  return (
    <div className="w-full bg-white text-slate-800">

      {/* ======================== SECTION 1: HERO ======================== */}
      <section
        className="relative w-full py-20 sm:py-28 lg:py-36 px-4 overflow-hidden text-white"
        style={{ background: 'linear-gradient(135deg, #c45494 0%, #9b3a7d 40%, #d060a0 70%, #f2a6cf 100%)' }}
      >
        {/* Decorative circle */}
        <div className="absolute -left-32 -top-32 w-[500px] h-[500px] rounded-full border-[50px] border-white/10 pointer-events-none" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-white/5 blur-2xl pointer-events-none" />

        {/* Colored pill decorations */}
        <div className="absolute left-4 sm:left-10 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 opacity-90">
          <div className="w-5 h-1.5 bg-amber-400 rotate-45 rounded-full" />
          <div className="w-6 h-1.5 bg-cyan-400 rotate-45 rounded-full" />
          <div className="w-5 h-1.5 bg-rose-500 rotate-45 rounded-full" />
        </div>

        {/* Star sparkle */}
        <div className="absolute right-16 bottom-10 hidden md:block opacity-80">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 0L23 15L38 20L23 25L20 40L17 25L2 20L17 15L20 0Z" fill="white" />
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-5 text-white drop-shadow-sm leading-tight">
            Custom Application Development
          </h1>
          <p className="text-sm sm:text-base text-white/85 leading-relaxed max-w-2xl mx-auto font-normal">
            Xpecto is a leading custom application development company, specializing in innovative,
            high-performance software solutions. Our skilled developers leverage the latest technologies
            to build secure, scalable, and user-friendly applications, ensuring seamless functionality
            and an exceptional user experience tailored to diverse business needs.
          </p>
        </div>
      </section>

      {/* ======================== SECTION 1b: CLIENT LOGOS MARQUEE ======================== */}
      <section className="w-full bg-white border-b border-slate-100 py-6 overflow-hidden">
        <div className="w-full overflow-hidden">
          <div className="animate-marquee flex items-center gap-10 sm:gap-16">
            {[...clientLogos, ...clientLogos].map((client, idx) => (
              <div key={idx} className="shrink-0 flex items-center justify-center px-4 py-2">
                <img
                  src={client.src}
                  alt={client.alt}
                  className="h-10 sm:h-12 w-auto object-contain max-w-[140px]"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== SECTION 2: TRUSTED / 11+ CONSULTING ======================== */}
      <section className="w-full py-14 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#1a2d6b] rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-xl">
            {/* Left content */}
            <div className="flex-1 p-8 sm:p-10 lg:p-12 flex flex-col justify-center relative">
              {/* Colored pill decoration */}
              <div className="absolute bottom-6 left-6 flex flex-col gap-1 opacity-80">
                <div className="w-5 h-1.5 bg-amber-400 rotate-45 rounded-full" />
                <div className="w-6 h-1.5 bg-cyan-400 rotate-45 rounded-full" />
                <div className="w-4 h-1.5 bg-rose-400 rotate-45 rounded-full" />
              </div>

              <div className="flex items-start gap-6 mb-5">
                {/* 11+ badge */}
                <div className="shrink-0 w-20 h-24 bg-cyan-500 rounded-xl flex flex-col items-center justify-center text-white shadow-lg">
                  <span className="text-3xl font-black leading-none">11+</span>
                  <span className="text-[10px] font-bold text-center leading-tight mt-1 px-1">Consulting<br />Experience</span>
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3">
                    Trusted, Happy &amp; Satisfied Businesses
                  </h2>
                  <p className="text-sm text-slate-300 leading-relaxed max-w-lg">
                    At Xpecto, we have been in business for more than 11 years providing website developer
                    services and helping small and even big level businesses establish their name in the
                    market. Our approach focuses on propelling the growth and sales of your website.
                  </p>
                </div>
              </div>
            </div>
            {/* Right image */}
            <div className="w-full md:w-80 lg:w-96 h-56 md:h-auto relative overflow-hidden">
              <img
                src="/images/consulting_img.jpg"
                alt="Business consulting"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ======================== SECTION 3: TECHNOLOGIES WE UTILIZE ======================== */}
      <section className="w-full py-14 px-4 sm:px-8 lg:px-16 bg-[#f4f7ff]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-stretch">
          {/* Left image */}
          <div className="w-full lg:w-2/5 rounded-2xl overflow-hidden shadow-lg min-h-[300px]">
            <img
              src="/images/choose_bg.jpg"
              alt="Technologies"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.style.background = '#1a2d6b'; }}
            />
          </div>
          {/* Right content */}
          <div className="flex-1 flex flex-col justify-center">
            <span className="text-xs font-bold tracking-widest uppercase text-cyan-600 mb-2 block">
              TECHNOLOGIES AND TOOLS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#071330] mb-4 leading-tight">
              Innovative Technologies and<br />Platforms We Utilize
            </h2>
            <p className="text-sm text-slate-500 mb-6 max-w-lg leading-relaxed">
              We have developers who specialize in researching new trends and building websites that are
              engaging and results-oriented. We use different languages and technologies, here are some of them:
            </p>

            {/* Tabs */}
            <div className="flex gap-0 border-b border-slate-200 mb-6">
              {['frontend', 'backend', 'database'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setTechTab(tab)}
                  className={`px-5 py-2 text-sm font-semibold capitalize transition-colors border-b-2 -mb-px ${
                    techTab === tab
                      ? 'border-cyan-500 text-cyan-600'
                      : 'border-transparent text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Tech logos grid */}
            <div className="flex flex-wrap gap-4">
              {techLogos[techTab].map((tech, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1.5 w-14 sm:w-16">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center p-1.5">
                    <img
                      src={tech.src}
                      alt={tech.label}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  </div>
                  <span className="text-[10px] sm:text-xs text-slate-600 font-medium text-center leading-tight">
                    {tech.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================== SECTION 4a: WHY CHOOSE US FOR CUSTOM APP DEV ======================== */}
      <section className="w-full py-14 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: text + heading */}
          <div className="w-full lg:w-2/5">
            <span className="text-xs font-bold tracking-widest uppercase text-cyan-600 mb-2 block">
              SERVICES OFFERED
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#071330] mb-5 leading-tight">
              Why Choose Us for Custom<br />Application Development?
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">
              Custom application development services can be customized to assist any business in
              streamlining their operations, enhancing customer experience, and winning against
              the competition. We incorporate recent technologies, ensuring maximum strength and
              security along with adaptability according to your business models and workflow streams.
            </p>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">
              We pride ourselves on an accomplished team of developers, designers, and consultants
              who bring expertise to every project we undertake. Our solutions not only fill your
              business needs but have been constructed with the latest technology to ensure great
              performance, high scalability, and security.
            </p>
            <a href="#quote-section" className="text-sm font-bold text-cyan-600 hover:text-cyan-700 underline underline-offset-2">
              Contact us
            </a>
            <span className="text-sm text-slate-500"> today to know more about how we can help you.</span>
          </div>

          {/* Right: service item cards (dark navy) */}
          <div className="flex-1 flex flex-col gap-3">
            {serviceItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#1a2d6b] rounded-xl px-5 py-4 hover:bg-[#1f3580] transition-colors"
              >
                <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== SECTION 4b: ROLES / TABBED SECTION ======================== */}
      <section className="w-full py-14 px-4 sm:px-8 lg:px-16 bg-[#1a2d6b]">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-bold tracking-widest uppercase text-cyan-400 mb-2 block">
            WHAT WE OFFER
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-10 leading-tight max-w-2xl">
            Roles of Custom Application Development<br />in Digital Landscape and Business Benefits
          </h2>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Tab list */}
            <div className="w-full lg:w-56 shrink-0 flex flex-col gap-2">
              {roleTabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-left text-sm font-semibold transition-all ${
                      activeTab === tab.id
                        ? 'bg-cyan-500 text-white shadow-lg'
                        : 'bg-white/10 text-slate-200 hover:bg-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 shrink-0" />
                      <span>{tab.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 shrink-0 opacity-70" />
                  </button>
                );
              })}
            </div>

            {/* Tab content */}
            {activeRole && (
              <div className="flex-1 bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#071330] mb-3">
                  {activeRole.heading}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">
                  {activeRole.content}
                </p>
                <ul className="space-y-3">
                  {activeRole.points.map((pt, idx) => (
                    <li key={idx} className="text-sm text-slate-600 leading-relaxed">
                      <span className="font-bold text-slate-800">{pt.bold}</span> {pt.text}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ======================== SECTION 5: WHY CHOOSE US? ======================== */}
      <section className="w-full py-14 px-4 sm:px-8 lg:px-16 bg-[#f4f7ff] relative overflow-hidden">
        {/* Decorative stars */}
        <div className="absolute top-6 right-16 opacity-20">
          <svg width="30" height="30" viewBox="0 0 40 40" fill="none">
            <path d="M20 0L23 15L38 20L23 25L20 40L17 25L2 20L17 15L20 0Z" fill="#00a3ff" />
          </svg>
        </div>
        <div className="absolute bottom-6 left-10 opacity-20">
          <svg width="20" height="20" viewBox="0 0 40 40" fill="none">
            <path d="M20 0L23 15L38 20L23 25L20 40L17 25L2 20L17 15L20 0Z" fill="#00a3ff" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <span className="text-xs font-bold tracking-widest uppercase text-cyan-600 mb-2 block">
            WHY CHOOSE US?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#071330] mb-10">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUsCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md border border-slate-100 flex flex-col items-center text-center transition-all"
                >
                  <div className="relative mb-5">
                    <div className="w-16 h-16 rounded-full bg-cyan-50 border-2 border-cyan-100 flex items-center justify-center text-cyan-600 relative z-10">
                      <Icon className="w-7 h-7 stroke-[1.8]" />
                    </div>
                    {/* + dot decorations */}
                    <span className="absolute -top-1 -right-1 text-cyan-400 text-xs font-bold">+</span>
                  </div>
                  <h3 className="text-base font-extrabold text-[#071330] mb-3 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================== SECTION 6: STATS ======================== */}
      <section className="w-full bg-white border-y border-slate-200 py-12 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: '4000+', label: 'Successful Projects', Icon: Award },
            { num: '11+', label: 'Years of Experience', Icon: Users },
            { num: '500+', label: 'Satisfied Clients', Icon: CheckCircle2 },
            { num: '80%', label: 'From Reference', Icon: Globe2 },
          ].map(({ num, label, Icon }, idx) => (
            <div key={idx} className="flex flex-col items-center p-3">
              <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600 mb-3">
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-3xl sm:text-4xl font-black text-[#071330]">{num}</span>
              <p className="text-xs font-semibold text-slate-600 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ======================== SECTION 7: GET A QUOTE + TESTIMONIAL ======================== */}
      <section id="quote-section" className="w-full bg-[#0b1442] text-white py-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Form */}
          <div className="lg:col-span-5 bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <h3 className="text-xl font-black text-slate-900 mb-6 text-center">Get A Quote</h3>
            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              {[
                { label: '* Your Name', key: 'name', type: 'text', placeholder: 'Your Name' },
                { label: '* Phone Number', key: 'phone', type: 'tel', placeholder: 'Phone Number' },
                { label: '* Email Address', key: 'email', type: 'email', placeholder: 'Email Address' },
              ].map(({ label, key, type, placeholder }) => (
                <div key={key}>
                  <label className="block font-semibold text-slate-700 mb-1">{label}</label>
                  <input
                    type={type}
                    required
                    placeholder={placeholder}
                    value={formData[key]}
                    onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-cyan-500 outline-none text-slate-900"
                  />
                </div>
              ))}
              <div>
                <label className="block font-semibold text-slate-700 mb-1">* Country</label>
                <select
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-cyan-500 outline-none text-slate-900 bg-white"
                >
                  {['India', 'United States', 'United Kingdom', 'Canada', 'Australia', 'Mexico', 'UAE'].map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">* Description</label>
                <textarea
                  rows="3"
                  required
                  placeholder="Tell us about your project..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-cyan-500 outline-none text-slate-900 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold rounded-lg text-sm uppercase tracking-wider transition-all"
              >
                Submit Quote Request
              </button>
            </form>
          </div>

          {/* Testimonial */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h4 className="text-xl font-bold text-white">Dean Roberts</h4>
            <p className="text-sm text-cyan-400 font-medium mt-0.5">VisionSafe</p>
            <div className="flex items-center gap-1 text-amber-400 my-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <blockquote className="text-sm sm:text-base text-slate-200/90 italic leading-relaxed mb-6 font-light">
              "I could not recommend the team at Xpecto IT Solutions more highly for their work.
              Although we have only been working with them for a few months, we have been greatly
              impressed with their professionalism and most importantly their customer service.
              It is really refreshing to be communicating with a team that knows what they are
              doing and deals with any inquiries quickly and effectively."
            </blockquote>
            <div className="flex items-center gap-3">
              <button onClick={() => {}} className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={() => {}} className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== SECTION 8: OUR PARTNERS SLIDER ======================== */}
      <section className="w-full bg-white py-14 px-4 sm:px-8 lg:px-16 border-b border-slate-200">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071330] mb-10">Our Partners</h2>
          <div className="relative flex items-center justify-center max-w-5xl mx-auto px-6">
            <button
              onClick={prevPartners}
              className="absolute left-0 z-10 w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center text-cyan-600 hover:text-white hover:bg-cyan-500 hover:border-cyan-500 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 w-full px-6 transition-all duration-300">
              {allPartners.slice(partnerIndex, partnerIndex + 4).map((p, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-slate-200 hover:border-cyan-400 hover:shadow-md transition-all">
                  <div className="h-20 w-full flex items-center justify-center p-2">
                    <img
                      src={p.src}
                      alt={p.name}
                      className="max-h-full max-w-full object-contain"
                      onError={(e) => { e.target.src = p.fallback; }}
                    />
                  </div>
                  <span className="text-xs font-bold text-slate-800 mt-2 text-center">{p.name}</span>
                  <span className="text-[10px] text-slate-500 text-center">{p.role}</span>
                </div>
              ))}
            </div>
            <button
              onClick={nextPartners}
              className="absolute right-0 z-10 w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center text-cyan-600 hover:text-white hover:bg-cyan-500 hover:border-cyan-500 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
