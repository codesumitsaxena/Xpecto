import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Bot, 
  Send, 
  MessageSquare, 
  Sparkles,
  ArrowRight,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon, YouTubeIcon } from '../common/SocialIcons';

export default function FloatingWidgets() {
  const [meetingBannerVisible, setMeetingBannerVisible] = useState(true);
  const [meetingModalOpen, setMeetingModalOpen] = useState(false);
  const [aiAssistantOpen, setAiAssistantOpen] = useState(false);

  // AI Chat simulation state
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: 'Hello! Welcome to Xpecto® IT Solutions. How can I assist you with your Custom Application or Web Development project today?'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userText = inputMessage;
    setMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setInputMessage('');

    setTimeout(() => {
      let reply = 'Thank you for your interest! Our technical team can tailor custom software, ERP/CRM, and web applications for your exact business requirements. You can also book a meeting or explore our service pages!';
      if (userText.toLowerCase().includes('custom') || userText.toLowerCase().includes('software')) {
        reply = 'For Custom Application Development, we offer tailored enterprise workflows, legacy modernization, and AI integration. Check out our Custom Application page!';
      } else if (userText.toLowerCase().includes('web') || userText.toLowerCase().includes('site')) {
        reply = 'For Web Applications, we build high-performance Single Page Applications (SPAs), SaaS platforms, and Progressive Web Apps (PWAs).';
      }
      setMessages((prev) => [...prev, { sender: 'ai', text: reply }]);
    }, 600);
  };

  return (
    <>
      {/* 1. Right Sticky Vertical "FOLLOW US" Bar (Exactly as shown in Screenshot 1) */}
      <aside 
        aria-label="Social media links"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center bg-white/90 dark:bg-[#060b26]/90 backdrop-blur-md border-l border-y border-slate-200 dark:border-cyan-500/20 py-3 px-1.5 rounded-l-lg shadow-xl shadow-black/20 dark:shadow-black/60"
      >
        <span className="text-[10px] font-bold tracking-widest text-cyan-500 dark:text-cyan-400 uppercase [writing-mode:vertical-lr] rotate-180 mb-3 select-none">
          • FOLLOW US
        </span>
        <div className="flex flex-col gap-2.5 text-slate-400">
          <a href="#" className="hover:text-cyan-400 transition-colors" title="Facebook">
            <FacebookIcon className="w-3.5 h-3.5" />
          </a>
          <a href="#" className="hover:text-cyan-400 transition-colors" title="Twitter">
            <TwitterIcon className="w-3.5 h-3.5" />
          </a>
          <a href="#" className="hover:text-cyan-400 transition-colors" title="LinkedIn">
            <LinkedInIcon className="w-3.5 h-3.5" />
          </a>
          <a href="#" className="hover:text-cyan-400 transition-colors" title="Instagram">
            <InstagramIcon className="w-3.5 h-3.5" />
          </a>
          <a href="#" className="hover:text-cyan-400 transition-colors" title="YouTube">
            <YouTubeIcon className="w-3.5 h-3.5" />
          </a>
        </div>
      </aside>

      {/* 2. Floating Bottom Pill Banner (Exact Replica from Screenshot 1) */}
      {meetingBannerVisible && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-30 w-[92%] sm:w-auto max-w-2xl bg-white text-slate-900 rounded-full py-2.5 px-4 sm:px-6 shadow-[0_10px_35px_rgba(0,0,0,0.5)] border border-slate-200 flex items-center justify-between gap-3 sm:gap-6 animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Cyan X Icon */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#0c1544] flex items-center justify-center shrink-0">
              <span className="text-cyan-400 font-bold text-sm">✕</span>
            </div>
            <div className="text-left">
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                Your Business Needs the Right Technology
              </h4>
              <p className="text-[10px] sm:text-xs text-slate-500 hidden sm:block">
                Let's find the solution that works for you.
              </p>
            </div>
          </div>

          {/* Book A Meeting Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMeetingModalOpen(true)}
              className="px-4 py-2 bg-[#553c9a] hover:bg-[#44307d] text-white text-xs font-semibold rounded-full shadow-md hover:shadow-lg transition-all shrink-0 cursor-pointer"
            >
              Book A Meeting
            </button>
            <button
              onClick={() => setMeetingBannerVisible(false)}
              className="text-slate-400 hover:text-slate-600 p-1"
              title="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* 3. Floating Bottom-Right "AI Assistant" (Exact Replica from Screenshot 1 & 2) */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end">
        <button
          onClick={() => setAiAssistantOpen(!aiAssistantOpen)}
          className="relative group flex items-center gap-2.5 bg-white dark:bg-[#08113b] hover:bg-slate-50 dark:hover:bg-[#0c1a59] text-slate-900 dark:text-white border-2 border-cyan-400/80 rounded-full px-4 py-2.5 shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:shadow-[0_0_30px_rgba(0,212,255,0.8)] transition-all cursor-pointer transform hover:scale-105"
        >
          {/* Animated glow ring */}
          <span className="absolute -inset-0.5 rounded-full bg-cyan-400 opacity-30 group-hover:opacity-60 blur-xs transition duration-300 animate-pulse"></span>

          <div className="relative w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center text-[#060b26] font-black text-xs">
            ✕
          </div>
          <span className="relative text-xs font-bold tracking-wide text-cyan-300 group-hover:text-white">
            AI Assistant
          </span>
        </button>

        {/* AI Assistant Chat Modal */}
        {aiAssistantOpen && (
          <div className="mt-3 w-80 sm:w-96 bg-white dark:bg-[#070d2b] border border-slate-200 dark:border-cyan-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[460px] animate-in fade-in slide-in-from-bottom-2 duration-200">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0b164a] to-[#04081c] p-4 border-b border-cyan-500/20 flex items-center justify-between">              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    Xpecto AI Bot
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
                  </h4>
                  <p className="text-[10px] text-cyan-300/80">Software & Solutions Consultant</p>
                </div>
              </div>
              <button
                onClick={() => setAiAssistantOpen(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 ${
                      m.sender === 'user'
                        ? 'bg-cyan-600 text-white rounded-br-none'
                        : 'bg-slate-100 dark:bg-[#0f1d5e] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-cyan-500/20 rounded-bl-none'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Action Chips */}
            <div className="px-3 py-2 bg-[#050920] border-t border-slate-800 flex gap-1.5 overflow-x-auto text-[10px]">
              <Link
                to="/services/custom-application"
                onClick={() => setAiAssistantOpen(false)}
                className="px-2 py-1 rounded bg-[#0b164a] text-cyan-300 hover:bg-cyan-900/40 whitespace-nowrap border border-cyan-500/20"
              >
                Custom App Info
              </Link>
              <Link
                to="/services/web-application"
                onClick={() => setAiAssistantOpen(false)}
                className="px-2 py-1 rounded bg-[#0b164a] text-cyan-300 hover:bg-cyan-900/40 whitespace-nowrap border border-cyan-500/20"
              >
                Web App Info
              </Link>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="p-3 bg-[#050920] border-t border-slate-800 flex gap-2">
              <input
                type="text"
                placeholder="Ask about our services, stacks..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1 bg-[#091136] text-xs text-white rounded-lg px-3 py-2 border border-cyan-900/60 focus:border-cyan-400 focus:outline-none"
              />
              <button
                type="submit"
                className="p-2 bg-cyan-500 hover:bg-cyan-400 text-[#060b26] rounded-lg transition-colors font-bold"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Book A Meeting Modal */}
      {meetingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#070d2b] border border-cyan-500/30 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setMeetingModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Book A Technical Consultation</h3>
                <p className="text-xs text-slate-400">Speak directly with our senior software architects</p>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you! Our technical architect will contact you shortly.');
                setMeetingModalOpen(false);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="block text-slate-300 font-medium mb-1">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-[#0b1442] border border-slate-700 rounded-lg px-3 py-2 text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Work Email</label>
                <input
                  required
                  type="email"
                  placeholder="john@company.com"
                  className="w-full bg-[#0b1442] border border-slate-700 rounded-lg px-3 py-2 text-white focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Project Category</label>
                <select className="w-full bg-[#0b1442] border border-slate-700 rounded-lg px-3 py-2 text-white focus:border-cyan-400 focus:outline-none">
                  <option>Custom Application Development</option>
                  <option>Web Application Development</option>
                  <option>Enterprise ERP / CRM</option>
                  <option>Cloud Architecture & DevOps</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Project Brief</label>
                <textarea
                  rows="3"
                  placeholder="Tell us about your timeline, expected scope, or key challenges..."
                  className="w-full bg-[#0b1442] border border-slate-700 rounded-lg px-3 py-2 text-white focus:border-cyan-400 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-lg shadow-lg shadow-cyan-500/20 transition-all text-xs"
              >
                Confirm Consultation Request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
