import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { specializationsData } from "@/data/specializationsData";

// Helper to render high-quality SVGs for the dynamic sections
function renderSVGIcon(name) {
  const size = "w-6 h-6 stroke-current text-[#064ca2] group-hover:text-[#e6a600] transition-colors duration-300";

  switch (name) {
    case "target":
      return (
        <svg className={size} fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case "briefcase":
      return (
        <svg className={size} fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
    case "store":
      return (
        <svg className={size} fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    case "chart":
      return (
        <svg className={size} fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      );
    case "computer":
      return (
        <svg className={size} fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="2" y1="20" x2="22" y2="20" />
          <line x1="12" y1="17" x2="12" y2="20" />
        </svg>
      );
    case "trophy":
      return (
        <svg className={size} fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
          <path d="M12 2a6 6 0 0 1 6 6v5a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z" />
        </svg>
      );
    case "bank":
      return (
        <svg className={size} fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="3 22 21 22" />
          <polyline points="6 18 6 11" />
          <polyline points="10 18 10 11" />
          <polyline points="14 18 14 11" />
          <polyline points="18 18 18 11" />
          <polygon points="12 2 20 7 4 7" />
        </svg>
      );
    case "credit":
      return (
        <svg className={size} fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      );
    case "chart-pie":
      return (
        <svg className={size} fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2v10l8.5 6" />
        </svg>
      );
    case "handshake":
      return (
        <svg className={size} fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 11h-2a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2H5" />
          <path d="M16 9V5a3 3 0 0 0-6 0v4" />
          <rect x="3" y="11" width="18" height="10" rx="2" />
        </svg>
      );
    case "globe":
      return (
        <svg className={size} fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10" />
        </svg>
      );
    case "tech":
      return (
        <svg className={size} fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="3" />
          <circle cx="5" cy="19" r="3" />
          <circle cx="19" cy="19" r="3" />
          <line x1="6.7" y1="16.8" x2="10.3" y2="7.2" />
          <line x1="17.3" y1="16.8" x2="13.7" y2="7.2" />
        </svg>
      );
    case "database":
      return (
        <svg className={size} fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      );
    case "rocket":
      return (
        <svg className={size} fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 2l-7.4 7.4A5.9 5.9 0 0 0 12 8a6 6 0 0 0-4.3 1.7L3.5 14c-1.3 1.3-1.3 3.5 0 4.8l2.7 2.7c1.3 1.3 3.5 1.3 4.8 0l4.3-4.3A5.9 5.9 0 0 0 17 12a6 6 0 0 0-1.4-2.6L22 2z" />
          <path d="M14 11l-5 5" />
        </svg>
      );
    case "ship":
      return (
        <svg className={size} fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 17l1.5-3h17l1.5 3c.5.9-.2 2-1.2 2H3.2c-1 0-1.7-1.1-1.2-2z" />
          <path d="M12 14V3l4 1-4 1" />
        </svg>
      );
    case "map":
      return (
        <svg className={size} fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="1 6 8 2 16 6 23 2 23 18 16 14 8 18 1 14" />
          <line x1="8" y1="2" x2="8" y2="18" />
        </svg>
      );
    case "translate":
      return (
        <svg className={size} fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M10 7.5h4M12 6v5" />
        </svg>
      );
    case "award":
      return (
        <svg className={size} fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      );
    case "factory":
      return (
        <svg className={size} fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 20V10l5 3V10l5 3V10l10 5v5H2z" />
          <line x1="17" y1="18" x2="17" y2="20" />
        </svg>
      );
    case "truck":
      return (
        <svg className={size} fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" rx="2" ry="2" />
          <polygon points="16 8 20 8 23 11 23 16 16 16" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      );

    // Admission Requirement Icons
    case "calendar":
      return (
        <svg className={size} fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );
    case "graduation":
      return (
        <svg className={size} fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2.7 3.5 6 3.5s6-1.5 6-3.5v-5" />
        </svg>
      );
    case "seat":
      return (
        <svg className={size} fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.66 0 3-1.34 3-3V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6c0 1.66 1.34 3 3 3" />
          <path d="M4 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        </svg>
      );
    case "document":
      return (
        <svg className={size} fill="none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      );

    default:
      return null;
  }
}

export default function SpecializationPage({ spec }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  // Fallback loader
  if (router.isFallback || !spec || !spec.title) {
    return (
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center text-zinc-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#064ca2]"></div>
      </div>
    );
  }

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", message: "" });
        setFormSubmitted(false);
      }, 5000);
    }
  };

  return (
    <>
      <Head>
        <title>{`${spec.title} | Accurate Group of Institutions`}</title>
        <meta name="description" content={spec.subtitle} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div
        className="min-h-screen bg-zinc-50 text-zinc-900 font-sans overflow-x-hidden pt-32 relative"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(6, 76, 162, 0.04) 1.2px, transparent 1.2px)",
          backgroundSize: "32px 32px"
        }}
      >
        {/* Ambient floating blur design layers */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#064ca2]/7 rounded-full blur-3xl pointer-events-none z-0 orb-active-1" />
        <div className="absolute top-[1100px] left-[-150px] w-96 h-96 bg-[#e6a600]/6 rounded-full blur-3xl pointer-events-none z-0 orb-active-2" />
        <div className="absolute top-[2300px] right-[-150px] w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none z-0 orb-active-1" />

        {/* Dynamic Vector grid lines divider flow */}
        <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 4000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="beam-grad-1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#064ca2" />
                <stop offset="50%" stopColor="#e6a600" />
                <stop offset="100%" stopColor="#064ca2" />
              </linearGradient>
              <linearGradient id="beam-grad-2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#e6a600" />
                <stop offset="50%" stopColor="#064ca2" />
                <stop offset="100%" stopColor="#e6a600" />
              </linearGradient>
              <style>{`
                @keyframes pulse-beam {
                  from { stroke-dashoffset: 800; }
                  to { stroke-dashoffset: 0; }
                }
                @keyframes float-orb-1 {
                  0% { transform: translate(0px, 0px) scale(1); }
                  50% { transform: translate(45px, -50px) scale(1.08); }
                  100% { transform: translate(0px, 0px) scale(1); }
                }
                @keyframes float-orb-2 {
                  0% { transform: translate(0px, 0px) scale(1); }
                  50% { transform: translate(-35px, 45px) scale(0.96); }
                  100% { transform: translate(0px, 0px) scale(1); }
                }
                .beam-active-1 {
                  animation: pulse-beam 14s linear infinite;
                }
                .beam-active-2 {
                  animation: pulse-beam 18s linear infinite;
                }
                .orb-active-1 {
                  animation: float-orb-1 22s infinite ease-in-out;
                }
                .orb-active-2 {
                  animation: float-orb-2 18s infinite ease-in-out;
                }
              `}</style>
            </defs>

            {/* Graphic dividers connecting sections */}
            <line x1="0" y1="850" x2="1440" y2="850" stroke="#064ca2" strokeWidth="0.8" opacity="0.08" />
            <line x1="0" y1="1750" x2="1440" y2="1750" stroke="#e6a600" strokeWidth="0.8" opacity="0.08" />
            <line x1="0" y1="2655" x2="1440" y2="2655" stroke="#064ca2" strokeWidth="0.8" opacity="0.08" />
            <line x1="0" y1="3400" x2="1440" y2="3400" stroke="#e6a600" strokeWidth="0.8" opacity="0.08" />

            {/* Dual animated glow paths */}
            <path
              d="M 120,60 C 600,180 1250,550 1250,1150 C 1250,1750 180,2150 180,2750 C 180,3350 950,3550 1280,4000"
              stroke="url(#beam-grad-1)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="160 320"
              opacity="0.3"
              className="beam-active-1"
            />
            <path
              d="M 1320,120 C 950,580 180,880 180,1480 C 180,2080 1250,2480 1250,3080 C 1250,3580 380,3780 120,4000"
              stroke="url(#beam-grad-2)"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeDasharray="100 250"
              opacity="0.2"
              className="beam-active-2"
            />

            {/* Plus visual markup signals */}
            <text x="120" y="480" fill="#064ca2" opacity="0.25" fontSize="20" fontWeight="bold">+</text>
            <text x="1310" y="1120" fill="#e6a600" opacity="0.3" fontSize="20" fontWeight="bold">+</text>
            <text x="220" y="2150" fill="#064ca2" opacity="0.25" fontSize="20" fontWeight="bold">+</text>
            <text x="1220" y="2920" fill="#e6a600" opacity="0.3" fontSize="20" fontWeight="bold">+</text>
          </svg>
        </div>

        {/* Back Link Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-6">
          <Link
            href="/#programmes-section"
            className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold text-zinc-500 hover:text-[#064ca2] transition-colors duration-300 no-underline group"
          >
            <span className="w-6 h-6 rounded-full bg-white border border-zinc-200 flex items-center justify-center shadow-xs transform group-hover:-translate-x-1.5 transition-transform duration-300">
              ←
            </span>
            <span className="border-b border-zinc-300 group-hover:border-[#064ca2]">Back to Specializations</span>
          </Link>
        </div>

        {/* Section 1: Hero */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Hero Headers */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div>
                <span className="inline-flex items-center gap-1.5 bg-[#064ca2]/8 border border-[#064ca2]/15 text-[#064ca2] text-[10px] font-black tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e6a600] animate-pulse" />
                  {spec.badge}
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-zinc-900">
                  PGDM in <br />
                  <span className="relative inline-block mt-2">
                    <span className="bg-gradient-to-r from-[#064ca2] via-[#0556b8] to-[#e6a600] bg-clip-text text-transparent">
                      {spec.title.replace("PGDM in ", "")}
                    </span>
                    {/* Wavy accent vector under title */}
                    {/* <svg className="absolute -bottom-3 left-0 w-full h-3" viewBox="0 0 100 10" fill="none" preserveAspectRatio="none">
                      <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="#e6a600" strokeWidth="2.5" strokeLinecap="round" />
                    </svg> */}
                  </span>
                </h1>
              </div>

              <p className="text-zinc-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-medium">
                {spec.subtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#inquiry"
                  className="h-13 px-8 bg-gradient-to-r from-[#064ca2] to-[#04336c] hover:shadow-[0_8px_20px_rgba(6,76,162,0.3)] text-white font-extrabold text-xs uppercase tracking-wider rounded-full flex items-center justify-center shadow-lg transition-all duration-300 no-underline cursor-pointer"
                >
                  Apply Online Now ↗
                </a>
                <a
                  href="#curriculum"
                  className="h-13 px-8 border border-zinc-300 hover:border-[#064ca2] bg-white text-zinc-700 hover:text-[#064ca2] font-extrabold text-xs uppercase tracking-wider rounded-full flex items-center justify-center transition duration-300 no-underline cursor-pointer shadow-xs"
                >
                  View Curriculum ↓
                </a>
              </div>

              {/* Stats capsules grid (Glassmorphism layout) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 mt-4 border-t border-zinc-200/80">
                {spec.heroStats.map((stat, i) => (
                  <div
                    key={i}
                    className="p-4 bg-white/70 backdrop-blur-md border border-zinc-200/60 rounded-2xl shadow-xs hover:shadow-md hover:border-[#064ca2]/30 transition-all duration-300 text-left"
                  >
                    <span className="text-xl sm:text-2xl font-black text-[#064ca2] block leading-tight">
                      {stat.value}
                    </span>
                    <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest block mt-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Hero Visual Cover */}
            <div className="lg:col-span-5 relative w-full aspect-video sm:aspect-square rounded-[36px] rounded-tr-none overflow-hidden border border-zinc-200/80 shadow-2xl group bg-zinc-100 p-2">
              <div className="w-full h-full rounded-[28px] rounded-tr-none overflow-hidden relative">
                <img
                  src={spec.image}
                  alt={spec.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-left">
                  <span className="text-[9px] font-black text-[#e6a600] tracking-widest uppercase block">Corporate Advantage</span>
                  <span className="text-md font-bold text-white mt-1 block font-serif italic">Experiential Learning Ecosystem</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section 2: Overview & Why Choose */}
        <section className="bg-white border-y border-zinc-200/85 py-24 relative z-10 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

              {/* Left Column: Description & Accent Panel */}
              <div className="lg:col-span-5 text-left space-y-8 relative">
                {/* Large quote watermark */}
                <div className="absolute -top-16 -left-6 text-9xl font-serif text-[#064ca2]/5 select-none pointer-events-none">“</div>

                <div className="space-y-3 relative z-10">
                  <span className="text-xs font-black tracking-widest text-[#e6a600] uppercase block">
                    Core Focus
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-snug">
                    Overview of the <br />
                    <span className="font-serif italic font-bold text-[#064ca2]">Specialization track</span>
                  </h2>
                </div>

                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed relative z-10 font-medium">
                  {spec.description} Our program balances theoretical depth with continuous exposure to realistic industrial projects, preparing students to take up immediate operational leadership duties in their respective tracks.
                </p>

                <div className="p-6 bg-zinc-50 border-l-4 border-[#064ca2] rounded-r-3xl text-left shadow-xs relative z-10">
                  <h4 className="text-xs font-black uppercase text-zinc-900 tracking-wider">Industry Alignment Matrix</h4>
                  <p className="text-zinc-555 text-xs mt-2 leading-relaxed">
                    Designed in consultation with top business leaders to include modern analytical tools, hands-on labs, and strategic case competitions.
                  </p>
                </div>
              </div>

              {/* Right Column: Why Choose cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {spec.whyChoose.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-zinc-50 border border-zinc-200/70 rounded-[28px] rounded-bl-none flex flex-col justify-between hover:border-[#064ca2]/30 hover:shadow-xl hover:bg-white transition-all duration-300 text-left group min-h-[220px]"
                  >
                    <div className="space-y-4">
                      {/* Custom styled icon box */}
                      <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-[#064ca2] group-hover:bg-[#064ca2] group-hover:text-white group-hover:border-[#064ca2] transition-all duration-300 shadow-xs shrink-0">
                        {renderSVGIcon(item.icon)}
                      </div>
                      <h3 className="text-sm font-black text-zinc-850 leading-tight group-hover:text-[#064ca2] transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-zinc-500 text-xs leading-relaxed mt-4 border-t border-zinc-200/50 pt-3">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* Section 3: Curriculum - Visual Timeline */}
        <section id="curriculum" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-black tracking-widest text-[#064ca2] uppercase block">
              Syllabus Blueprint
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
              Curriculum & Course <span className="font-serif italic font-bold text-[#064ca2]">Roadmap</span>
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm">
              Our curriculum is structured to support sequential development, moving from fundamental management to specialized applications.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Column: Tab Selectors */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto gap-2 lg:gap-3 pb-4 lg:pb-0 border-b lg:border-b-0 lg:border-l-2 border-zinc-200 scrollbar-none">
              {spec.curriculum.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-5 py-3.5 text-xs sm:text-sm font-bold rounded-lg lg:rounded-l-none lg:rounded-r-lg text-left whitespace-nowrap transition-all duration-300 border-b-2 lg:border-b-0 lg:border-l-2 cursor-pointer ${activeTab === idx
                    ? "bg-[#064ca2]/8 text-[#064ca2] border-[#e6a600] font-black"
                    : "text-zinc-500 hover:text-[#064ca2] border-transparent hover:bg-zinc-100"
                    }`}
                >
                  {item.title}
                </button>
              ))}
            </div>

            {/* Right Column: Visual timeline of subjects */}
            <div className="lg:col-span-8 p-8 bg-white border border-zinc-200/95 shadow-lg rounded-[32px] text-left relative overflow-hidden">
              <div className="absolute right-0 top-0 w-32 h-32 bg-radial from-[#064ca2]/5 to-transparent pointer-events-none" />

              <h3 className="text-md font-black text-zinc-900 mb-8 border-b border-zinc-100 pb-4 flex items-center justify-between">
                <span>{spec.curriculum[activeTab].title} Focus Modules</span>
                <span className="text-[9px] font-black text-[#e6a600] uppercase tracking-widest bg-[#e6a600]/8 px-2.5 py-1 rounded border border-[#e6a600]/25">
                  Academic Standard
                </span>
              </h3>

              <div className="relative pl-6 sm:pl-8 border-l border-zinc-200 space-y-6">
                {spec.curriculum[activeTab].subjects.map((sub, i) => (
                  <div
                    key={i}
                    className="relative group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4.5 bg-zinc-50 border border-zinc-200/60 rounded-2xl hover:bg-white hover:border-[#064ca2]/30 hover:shadow-md transition-all duration-350"
                  >

                    {/* Node on vertical timeline */}
                    <span className="absolute -left-[31px] sm:-left-[39px] top-4.5 sm:top-1/2 sm:-translate-y-1/2 w-5.5 h-5.5 rounded-full bg-white border border-zinc-300 flex items-center justify-center text-[10px] font-black text-zinc-400 group-hover:border-[#064ca2] group-hover:text-[#064ca2] group-hover:scale-110 transition-all duration-300 shadow-xs z-10">
                      {i + 1}
                    </span>

                    {/* Subject info */}
                    <div className="space-y-1">
                      <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider block">Course {i + 1}</span>
                      <h4 className="text-zinc-800 text-sm sm:text-md font-bold group-hover:text-[#064ca2] transition-colors leading-tight">
                        {sub}
                      </h4>
                    </div>

                    {/* Quick status label */}
                    <div className="flex items-center">
                      <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500 bg-white border border-zinc-200 px-3 py-1 rounded-md">
                        {i % 2 === 0 ? "Core module" : "Practical Lab"}
                      </span>
                    </div>

                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Section 4: Tools Showcase - Visual skill dashboard layout */}
        <section className="bg-white border-y border-zinc-200/85 py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-black tracking-widest text-[#e6a600] uppercase block">
                Technical Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Software & Industry <span className="font-serif italic font-bold text-[#064ca2]">Labs</span>
              </h2>
              <p className="text-zinc-500 text-xs sm:text-sm">
                Acquire hands-on mastery over core tools demanded by recruiters globally.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {spec.tools.map((tool, index) => (
                <div
                  key={index}
                  className="p-6 bg-zinc-50 border border-zinc-200/70 rounded-3xl hover:border-[#064ca2] hover:shadow-xl hover:bg-white transition-all duration-300 flex flex-col justify-between text-left group relative overflow-hidden min-h-[180px]"
                >
                  {/* Glowing dynamic top hover lines */}
                  <div className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#064ca2] to-[#e6a600] group-hover:w-full transition-all duration-550" />

                  <div className="flex items-start gap-4">
                    {/* Visual custom tool circle */}
                    <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-[#064ca2] font-black text-xs shrink-0 group-hover:bg-gradient-to-br group-hover:from-[#064ca2] group-hover:to-[#04336c] group-hover:text-white group-hover:border-[#064ca2] transition-all duration-300 shadow-xs">
                      {tool.name.substring(0, 2).toUpperCase()}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-black text-zinc-900 group-hover:text-[#064ca2] transition-colors">
                        {tool.name}
                      </h4>
                      <p className="text-zinc-500 text-xs leading-relaxed mt-1">
                        {tool.desc}
                      </p>
                    </div>
                  </div>

                  {/* Skill Badge footer */}
                  <div className="pt-4 border-t border-zinc-200/60 flex items-center justify-between text-[9px] font-black text-zinc-400 mt-4 uppercase tracking-widest">
                    <span>Expert Certification</span>
                    <span className="text-[#e6a600] opacity-0 group-hover:opacity-100 transition-opacity duration-300">Active Lab →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Career Opportunities */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-black tracking-widest text-[#064ca2] uppercase block">
              Placement Paths
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
              Target Career <span className="font-serif italic font-bold text-[#064ca2]">Opportunities</span>
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm">
              Prepare yourself for niche, high-demand managerial designations across sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {spec.careerRoles.map((role, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-zinc-200/80 rounded-[32px] rounded-br-none flex flex-col justify-between hover:border-[#064ca2]/40 hover:shadow-xl hover:bg-zinc-50 transition-all duration-300 text-left group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Pathway {idx + 1}</span>
                    <span className={`text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-md ${role.demand === "Critical"
                      ? "bg-rose-50 text-rose-600 border border-rose-100"
                      : "bg-[#e6a600]/10 text-[#a87900] border border-[#e6a600]/20"
                      }`}>
                      {role.demand} Demand
                    </span>
                  </div>
                  <h3 className="text-md font-bold text-zinc-800 group-hover:text-[#064ca2] transition-colors duration-300 pt-1 leading-snug">
                    {role.title}
                  </h3>
                </div>
                <p className="text-zinc-500 text-xs leading-relaxed mt-5 pt-4 border-t border-zinc-100">
                  {role.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Admissions Info & Inquiry Form */}
        <section id="inquiry" className="bg-white border-t border-zinc-200/85 py-24 relative z-10 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

              {/* Left Column: Requirements visual timeline roadmap */}
              <div className="lg:col-span-5 text-left space-y-8">
                <div className="space-y-2">
                  <span className="text-xs font-black tracking-widest text-[#e6a600] uppercase block">
                    Admission details
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-snug">
                    Program Requirements <br />& <span className="font-serif italic font-bold text-[#064ca2]">Admissions Rules</span>
                  </h2>
                </div>

                <div className="space-y-6 text-sm text-zinc-700 relative pl-6 border-l-2 border-dashed border-zinc-200">

                  {/* Duration with custom SVG */}
                  <div className="flex gap-4 p-4 bg-zinc-50 border border-zinc-200/80 rounded-2xl shadow-xs items-center relative group hover:border-[#064ca2]/40 transition duration-300">
                    <span className="absolute -left-[31px] w-2.5 h-2.5 rounded-full bg-zinc-300 border-2 border-white group-hover:bg-[#064ca2] group-hover:scale-110 transition duration-300" />
                    <div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center shrink-0 shadow-xs">
                      {renderSVGIcon("calendar")}
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase text-zinc-850 tracking-wider">Duration</h4>
                      <p className="text-zinc-550 text-xs mt-0.5">{spec.admissionInfo.duration}</p>
                    </div>
                  </div>

                  {/* Eligibility with custom SVG */}
                  <div className="flex gap-4 p-4 bg-zinc-50 border border-zinc-200/80 rounded-2xl shadow-xs items-center relative group hover:border-[#064ca2]/40 transition duration-300">
                    <span className="absolute -left-[31px] w-2.5 h-2.5 rounded-full bg-zinc-300 border-2 border-white group-hover:bg-[#064ca2] group-hover:scale-110 transition duration-300" />
                    <div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center shrink-0 shadow-xs">
                      {renderSVGIcon("graduation")}
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase text-zinc-850 tracking-wider">Eligibility Criteria</h4>
                      <p className="text-zinc-555 text-xs mt-0.5">{spec.admissionInfo.eligibility}</p>
                    </div>
                  </div>

                  {/* Intake with custom SVG */}
                  <div className="flex gap-4 p-4 bg-zinc-50 border border-zinc-200/80 rounded-2xl shadow-xs items-center relative group hover:border-[#064ca2]/40 transition duration-300">
                    <span className="absolute -left-[31px] w-2.5 h-2.5 rounded-full bg-zinc-300 border-2 border-white group-hover:bg-[#064ca2] group-hover:scale-110 transition duration-300" />
                    <div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center shrink-0 shadow-xs">
                      {renderSVGIcon("seat")}
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase text-zinc-850 tracking-wider">Approved Intake</h4>
                      <p className="text-zinc-555 text-xs mt-0.5">{spec.admissionInfo.intake}</p>
                    </div>
                  </div>

                  {/* Selection Process with custom SVG */}
                  <div className="flex gap-4 p-4 bg-zinc-50 border border-zinc-200/80 rounded-2xl shadow-xs items-center relative group hover:border-[#064ca2]/40 transition duration-300">
                    <span className="absolute -left-[31px] w-2.5 h-2.5 rounded-full bg-zinc-300 border-2 border-white group-hover:bg-[#064ca2] group-hover:scale-110 transition duration-300" />
                    <div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center shrink-0 shadow-xs">
                      {renderSVGIcon("document")}
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase text-zinc-850 tracking-wider">Selection Process</h4>
                      <p className="text-zinc-555 text-xs mt-0.5">{spec.admissionInfo.selection}</p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Column: Dynamic Inquiry Form Card */}
              <div className="lg:col-span-7 bg-zinc-50 border border-zinc-200/80 rounded-[36px] rounded-tl-none p-8 md:p-10 relative overflow-hidden shadow-xl text-left">
                {formSubmitted ? (
                  <div className="absolute inset-0 bg-zinc-50 flex flex-col items-center justify-center p-8 text-center animate-fadeIn z-20">
                    <span className="text-5xl mb-4">🎉</span>
                    <h3 className="text-xl font-bold text-[#064ca2]">Inquiry Submitted Successfully!</h3>
                    <p className="text-zinc-500 text-xs max-w-sm mt-2 leading-relaxed font-medium">
                      Thank you for your interest in the {spec.title}. Our admissions cell will contact you shortly on your provided email or phone number.
                    </p>
                  </div>
                ) : null}

                <div className="space-y-2 mb-8">
                  <h3 className="text-xl font-black text-zinc-900 uppercase tracking-wide">Admissions Request Info</h3>
                  <p className="text-zinc-500 text-xs font-medium">
                    Please submit the details below and an admissions counselor will reach out.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleFormChange}
                        className="w-full bg-white border border-zinc-250 focus:bg-white focus:border-[#064ca2] focus:ring-1 focus:ring-[#064ca2]/20 text-xs text-zinc-900 rounded-xl px-4 py-3 outline-hidden transition duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleFormChange}
                        className="w-full bg-white border border-zinc-250 focus:bg-white focus:border-[#064ca2] focus:ring-1 focus:ring-[#064ca2]/20 text-xs text-zinc-900 rounded-xl px-4 py-3 outline-hidden transition duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Contact Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="w-full bg-white border border-zinc-250 focus:bg-white focus:border-[#064ca2] focus:ring-1 focus:ring-[#064ca2]/20 text-xs text-zinc-900 rounded-xl px-4 py-3 outline-hidden transition duration-300"
                      placeholder="+91 99999 99999"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] font-black uppercase tracking-widest text-zinc-500">Additional Message / Question</label>
                    <textarea
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleFormChange}
                      className="w-full bg-white border border-zinc-250 focus:bg-white focus:border-[#064ca2] focus:ring-1 focus:ring-[#064ca2]/20 text-xs text-zinc-900 rounded-xl px-4 py-3 outline-hidden transition duration-300 resize-none"
                      placeholder="Ask about admissions, fees structure, next batch dates, etc..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#e6a600] hover:bg-[#cca300] hover:shadow-[0_8px_20px_rgba(230,166,0,0.25)] text-zinc-950 font-black text-xs uppercase tracking-wider rounded-xl transition duration-300 cursor-pointer shadow-md"
                  >
                    Submit Admissions Inquiry ↗
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// Next.js dynamic routing path mapping
export async function getStaticPaths() {
  const paths = Object.keys(specializationsData).map((id) => ({
    params: { id },
  }));

  return {
    paths,
    fallback: false, // Return 404 for unmapped paths
  };
}

// Fetch single specialization's data based on route param id
export async function getStaticProps({ params }) {
  const spec = specializationsData[params.id] || null;

  return {
    props: {
      spec,
    },
  };
}
