import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Code, 
  Layers, 
  Smartphone, 
  TrendingUp, 
  Cloud, 
  Briefcase, 
  Wrench, 
  Cpu, 
  ArrowRight, 
  ExternalLink 
} from 'lucide-react';

export const servicesData = {
  website: {
    id: 'website',
    name: 'Website',
    icon: Globe,
    overview: 'High-performing responsive websites designed to drive engagement and brand authority.',
    route: '/services/web-application',
    items: [
      {
        title: 'Static Website',
        desc: 'Static websites are simple, fast, secure, non-interactive, and require minimal updates.',
        link: '/services/web-application',
        badge: 'Lightning Fast'
      },
      {
        title: 'HTML5 Development',
        desc: 'HTML5 development creates interactive, multimedia-rich, and responsive websites for all devices.',
        link: '/services/web-application',
        badge: 'Modern Standards'
      },
      {
        title: 'Bootstrap Development',
        desc: 'Emphasizes responsive design, mobile accessibility, and rapid prototyping.',
        link: '/services/web-application',
        badge: 'Responsive'
      },
      {
        title: 'WordPress Website',
        desc: 'Focus on creating customizable, user-friendly websites with plugins and CMS.',
        link: '/services/web-application',
        badge: 'CMS Driven'
      },
      {
        title: 'Dynamic Website',
        desc: 'A dynamic website generates real-time content, personalized for users, by interacting with databases.',
        link: '/services/web-application',
        badge: 'Data Powered'
      },
      {
        title: 'PHP Development',
        desc: 'Dynamic, server-side scripting for interactive web applications efficiently.',
        link: '/services/web-application',
        badge: 'Server-Side'
      }
    ]
  },
  webApp: {
    id: 'webApp',
    name: 'Web Application',
    icon: Code,
    overview: 'Scalable cloud-ready web applications engineered for seamless UX and business automation.',
    route: '/services/web-application',
    items: [
      {
        title: 'Progressive Web Apps (PWA)',
        desc: 'App-like speed, offline capabilities, and cross-platform push notifications on any browser.',
        link: '/services/web-application',
        badge: 'High Performance'
      },
      {
        title: 'Single Page Applications (SPA)',
        desc: 'Dynamic, fluid client-side rendering with React and modern reactive JavaScript frameworks.',
        link: '/services/web-application',
        badge: 'React & Vue'
      },
      {
        title: 'SaaS Platform Development',
        desc: 'Multi-tenant cloud platforms featuring subscription billing, role hierarchies, and telemetry.',
        link: '/services/web-application',
        badge: 'SaaS Ready'
      },
      {
        title: 'Enterprise Customer Portals',
        desc: 'Secure portals allowing clients, vendors, and partners to conduct self-service transactions.',
        link: '/services/web-application',
        badge: 'Enterprise'
      },
      {
        title: 'Real-Time Web Systems',
        desc: 'WebSocket enabled systems for financial dashboards, live updates, and collaborative workspaces.',
        link: '/services/web-application',
        badge: 'WebSockets'
      },
      {
        title: 'Full Stack MERN / PERN',
        desc: 'End-to-end full stack architecture leveraging modern relational and document databases.',
        link: '/services/web-application',
        badge: 'Full Stack'
      }
    ]
  },
  customApp: {
    id: 'customApp',
    name: 'Custom Application',
    icon: Layers,
    overview: 'Bespoke software tailored around your unique operations, internal workflows, and compliance.',
    route: '/services/custom-application',
    items: [
      {
        title: 'Tailored Enterprise Software',
        desc: 'Purpose-built systems customized to solve unique bottlenecks without generic software constraints.',
        link: '/services/custom-application',
        badge: 'Bespoke'
      },
      {
        title: 'Custom CRM & ERP Systems',
        desc: 'Unified business operations including leads, inventory, accounting, and role permissions.',
        link: '/services/custom-application',
        badge: 'Operations'
      },
      {
        title: 'Legacy Modernization',
        desc: 'Re-architecting outdated monolithic legacy platforms into high-speed microservices and cloud.',
        link: '/services/custom-application',
        badge: 'Migration'
      },
      {
        title: 'Workflow Automation Engines',
        desc: 'Eliminating repetitive operations with intelligent triggers, approval flows, and bot integrations.',
        link: '/services/custom-application',
        badge: 'Automation'
      },
      {
        title: 'Custom AI & Data Pipelines',
        desc: 'Embedding predictive machine learning models and intelligent processing into internal software.',
        link: '/services/custom-application',
        badge: 'AI Integrated'
      },
      {
        title: 'High-Throughput API Gateways',
        desc: 'Secure REST and GraphQL middle-tier services interconnecting internal and third-party systems.',
        link: '/services/custom-application',
        badge: 'Microservices'
      }
    ]
  },
  mobileApp: {
    id: 'mobileApp',
    name: 'Mobile Application',
    icon: Smartphone,
    overview: 'Native iOS & Android and cross-platform apps that enchant users and boost mobility.',
    route: '/services/custom-application',
    items: [
      {
        title: 'React Native Apps',
        desc: 'Cross-platform native performance from a single shared high-efficiency codebase.',
        link: '/services/custom-application',
        badge: 'Cross-Platform'
      },
      {
        title: 'Flutter App Development',
        desc: 'Expressive UIs with 60fps rendering across Android, iOS, and desktop platforms.',
        link: '/services/custom-application',
        badge: 'Google Flutter'
      },
      {
        title: 'Native Android (Kotlin)',
        desc: 'Tailored for deep OS hardware integration and optimal Android ecosystem performance.',
        link: '/services/custom-application',
        badge: 'Android Native'
      },
      {
        title: 'Native iOS (Swift)',
        desc: 'Premium Apple ecosystem apps crafted with Swift, CoreData, and SwiftUI.',
        link: '/services/custom-application',
        badge: 'Apple iOS'
      },
      {
        title: 'Hybrid Mobile Apps',
        desc: 'Budget-friendly rapid mobile rollouts using modern responsive web technologies.',
        link: '/services/custom-application',
        badge: 'Fast Delivery'
      },
      {
        title: 'Mobile App Maintenance',
        desc: 'Continuous store compliance, OS compatibility updates, performance tuning and patches.',
        link: '/services/custom-application',
        badge: '24/7 SLA'
      }
    ]
  },
  digitalMarketing: {
    id: 'digitalMarketing',
    name: 'Digital Marketing',
    icon: TrendingUp,
    overview: 'Data-driven growth, technical SEO, and conversion rate optimization campaigns.',
    route: '/services/web-application',
    items: [
      {
        title: 'Search Engine Optimization (SEO)',
        desc: 'Technical site audits, on-page optimizations, and high-authority link strategy.',
        link: '/services/web-application',
        badge: 'Rank #1'
      },
      {
        title: 'Pay-Per-Click Advertising (PPC)',
        desc: 'Targeted Google Ads and Meta campaigns maximizing ROAS and lead conversions.',
        link: '/services/web-application',
        badge: 'High ROAS'
      },
      {
        title: 'Social Media Marketing',
        desc: 'Engaging content distribution and brand narrative across LinkedIn, Instagram, and Twitter.',
        link: '/services/web-application',
        badge: 'Brand Growth'
      },
      {
        title: 'Content & Copywriting',
        desc: 'Authoritative technical whitepapers, blogs, and conversion-focused copy.',
        link: '/services/web-application',
        badge: 'Content'
      },
      {
        title: 'Conversion Rate Optimization',
        desc: 'A/B testing, heatmap analysis, and checkout funnel optimization.',
        link: '/services/web-application',
        badge: 'Conversion'
      },
      {
        title: 'Reputation Management',
        desc: 'Proactive review monitoring and executive brand positioning across digital platforms.',
        link: '/services/web-application',
        badge: 'Authority'
      }
    ]
  },
  cloudDomain: {
    id: 'cloudDomain',
    name: 'Cloud | Domain',
    icon: Cloud,
    overview: 'Scalable cloud architecture, domain management, and high-availability hosting.',
    route: '/services/custom-application',
    items: [
      {
        title: 'AWS Cloud Architecture',
        desc: 'Auto-scaling EC2, serverless Lambda, RDS databases, and S3 storage configurations.',
        link: '/services/custom-application',
        badge: 'Amazon AWS'
      },
      {
        title: 'Microsoft Azure Services',
        desc: 'Enterprise hybrid cloud deployments and Active Directory integration.',
        link: '/services/custom-application',
        badge: 'MS Azure'
      },
      {
        title: 'DevOps & CI/CD Pipelines',
        desc: 'Automated testing and zero-downtime deployment pipelines with GitHub Actions and Docker.',
        link: '/services/custom-application',
        badge: 'Docker & K8s'
      },
      {
        title: 'High Availability Hosting',
        desc: '99.99% uptime guarantee with multi-region redundancy and failover routing.',
        link: '/services/custom-application',
        badge: '99.99% Uptime'
      },
      {
        title: 'Domain & DNS Security',
        desc: 'DNSSEC, SSL/TLS certificates, and Cloudflare DDoS mitigation infrastructure.',
        link: '/services/custom-application',
        badge: 'Cybersecurity'
      },
      {
        title: 'Cloud Cost Optimization',
        desc: 'Auditing resource utilization to slash unnecessary infrastructure overhead.',
        link: '/services/custom-application',
        badge: 'Cost Saver'
      }
    ]
  },
  collaboration: {
    id: 'collaboration',
    name: 'Collaboration & Productivity',
    icon: Briefcase,
    overview: 'Workplace productivity suites, unified communications, and team collaboration tools.',
    route: '/services/custom-application',
    items: [
      {
        title: 'Google Workspace Setup',
        desc: 'Secure enterprise email, Drive storage, and document collaboration deployment.',
        link: '/services/custom-application',
        badge: 'Google Suite'
      },
      {
        title: 'Microsoft 365 Migration',
        desc: 'Seamless migration of enterprise mailboxes, Teams, and SharePoint document libraries.',
        link: '/services/custom-application',
        badge: 'Office 365'
      },
      {
        title: 'Slack & Chat Integrations',
        desc: 'Custom bots connecting your internal databases directly to company messaging.',
        link: '/services/custom-application',
        badge: 'Productivity'
      },
      {
        title: 'Project Management Workflows',
        desc: 'Jira, Asana, and ClickUp customization to boost software development velocity.',
        link: '/services/custom-application',
        badge: 'Agile'
      },
      {
        title: 'Document Management Systems',
        desc: 'Encrypted document vaults with digital signatures and version histories.',
        link: '/services/custom-application',
        badge: 'Secure'
      },
      {
        title: 'Virtual Desktop Infrastructure',
        desc: 'Remote work virtualization ensuring corporate data never leaves encrypted instances.',
        link: '/services/custom-application',
        badge: 'Remote Work'
      }
    ]
  },
  maintenance: {
    id: 'maintenance',
    name: 'Maintenance',
    icon: Wrench,
    overview: 'Continuous website & application monitoring, performance patching, and 24/7 technical support.',
    route: '/services/web-application',
    items: [
      {
        title: '24/7 Server Monitoring',
        desc: 'Real-time alert systems tracking memory, CPU loads, and service responsiveness.',
        link: '/services/web-application',
        badge: 'Real-Time'
      },
      {
        title: 'Security Audits & Patching',
        desc: 'Vulnerability scans, dependency updates, and zero-day patch deployments.',
        link: '/services/web-application',
        badge: 'Security'
      },
      {
        title: 'Database Backup & Recovery',
        desc: 'Automated hourly offsite backups and tested disaster recovery failover protocols.',
        link: '/services/web-application',
        badge: 'Disaster Recovery'
      },
      {
        title: 'Speed & Core Web Vitals Tuning',
        desc: 'Asset minification, image compression, and edge caching for sub-second page loads.',
        link: '/services/web-application',
        badge: 'Speed Boost'
      },
      {
        title: 'Bug Fixing & Incident Response',
        desc: 'Guaranteed SLA response times for unexpected application exceptions and outages.',
        link: '/services/web-application',
        badge: 'Fast SLA'
      },
      {
        title: 'Ongoing Feature Enhancements',
        desc: 'Dedicated developer hours each month for iterative UI improvements and minor features.',
        link: '/services/web-application',
        badge: 'Monthly Dev'
      }
    ]
  },
  integration: {
    id: 'integration',
    name: 'Integration',
    icon: Cpu,
    overview: 'Seamlessly connect disparate third-party platforms, payment gateways, and CRM/ERP data.',
    route: '/services/custom-application',
    items: [
      {
        title: 'Payment Gateway Integration',
        desc: 'Stripe, PayPal, Razorpay, and authorize.net secure checkout workflows.',
        link: '/services/custom-application',
        badge: 'PCI-DSS'
      },
      {
        title: 'CRM & Marketing Sync',
        desc: 'Two-way synchronization between web applications, HubSpot, Salesforce, and Zoho.',
        link: '/services/custom-application',
        badge: 'CRM Sync'
      },
      {
        title: 'Third-Party REST / GraphQL APIs',
        desc: 'Integrating mapping services, SMS providers, logistics tracking, and weather feeds.',
        link: '/services/custom-application',
        badge: 'Custom APIs'
      },
      {
        title: 'ERP Accounting Integration',
        desc: 'Automating invoice generation and ledger sync with QuickBooks, Xero, and SAP.',
        link: '/services/custom-application',
        badge: 'Accounting'
      },
      {
        title: 'Single Sign-On (SSO / OAuth)',
        desc: 'Google, Microsoft, Okta, and Auth0 secure user authentication pipelines.',
        link: '/services/custom-application',
        badge: 'SSO & OAuth'
      },
      {
        title: 'Webhook & Event Brokers',
        desc: 'Event-driven architectures using Kafka, RabbitMQ, and resilient webhook handlers.',
        link: '/services/custom-application',
        badge: 'Event-Driven'
      }
    ]
  }
};

export default function ServicesMegaMenu({ onClose }) {
  const [activeTab, setActiveTab] = useState('website');
  const currentCategory = servicesData[activeTab] || servicesData.website;

  return (
    <div className="absolute top-full left-0 w-full bg-white dark:bg-[#070d2b] border-t border-slate-200 dark:border-cyan-500/20 shadow-2xl shadow-black/20 dark:shadow-black/80 z-50 text-slate-700 dark:text-slate-200 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="max-w-7xl mx-auto flex min-h-[460px]">
        {/* Left Side: Category Tabs (Exactly matching Screenshot 3) */}
        <div className="w-64 sm:w-72 border-r border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-[#050922] py-4 shrink-0 flex flex-col justify-between">
          <div className="space-y-0.5">
            {Object.values(servicesData).map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onMouseEnter={() => setActiveTab(cat.id)}
                  onClick={() => setActiveTab(cat.id)}
                  className={`w-full text-left px-5 py-3 text-sm font-medium flex items-center justify-between transition-all duration-150 ${
                    isActive
                      ? 'bg-[#00a3ff] text-white shadow-md shadow-blue-500/20 border-l-4 border-cyan-200'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#0b1340] hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3 truncate">
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-cyan-500 dark:text-cyan-400'}`} />
                    <span className="truncate">{cat.name}</span>
                  </div>
                  {isActive && <ArrowRight className="w-4 h-4 shrink-0 text-white" />}
                </button>
              );
            })}
          </div>

          {/* Quick Page Navigators for the 2 Service Pages */}
          <div className="px-5 pt-4 mt-2 border-t border-slate-200 dark:border-slate-800/80 text-xs">
            <p className="text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider mb-2 text-[10px]">
              Direct Page Links
            </p>
            <div className="space-y-1.5">
              <Link
                to="/services/custom-application"
                onClick={onClose}
                className="flex items-center justify-between text-cyan-400 hover:text-cyan-300 py-1 font-medium group"
              >
                <span>Custom Application Page</span>
                <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/services/web-application"
                onClick={onClose}
                className="flex items-center justify-between text-cyan-400 hover:text-cyan-300 py-1 font-medium group"
              >
                <span>Web Application Page</span>
                <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side: Dynamic Grid Cards matching Screenshot 3 */}
        <div className="flex-1 p-6 lg:p-8 flex flex-col justify-between bg-slate-50/80 dark:bg-[#080e33]/90">
          <div>
            {/* Category Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800/80">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="text-cyan-400 font-mono text-base">/</span>
                  {currentCategory.name} Services
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
                  {currentCategory.overview}
                </p>
              </div>

              <Link
                to={currentCategory.route}
                onClick={onClose}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-semibold rounded-md shadow-md shadow-cyan-500/20 transition-all"
              >
                <span>View Full Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 6 Grid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentCategory.items.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.link}
                  onClick={onClose}
                  className="group relative bg-slate-100 dark:bg-[#0c1544]/80 hover:bg-slate-200 dark:hover:bg-[#111e5c] border border-slate-200 dark:border-slate-800/80 hover:border-cyan-400/50 dark:hover:border-cyan-500/50 rounded-lg p-4 transition-all duration-200 shadow-sm hover:shadow-cyan-500/10 hover:-translate-y-0.5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h4>
                      {item.badge && (
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-cyan-50 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/50 shrink-0">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-end text-[11px] text-cyan-600 dark:text-cyan-400/80 group-hover:text-cyan-500 dark:group-hover:text-cyan-300 font-medium">
                    <span className="group-hover:mr-1 transition-all">Learn more</span>
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Footer banner inside mega menu */}
          <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Engineering teams available for immediate project onboarding
            </span>
            <Link
              to="/contact"
              onClick={onClose}
              className="text-cyan-400 hover:text-cyan-300 font-semibold underline underline-offset-4"
            >
              Get Free Architecture Consultation →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
