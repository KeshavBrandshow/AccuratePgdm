import { useRef, useState } from "react";
import Link from "next/link";

const specializationsData = [
  {
    id: "marketing",
    category: "Core Business",
    title: "PGDM in Marketing Management",
    description: "Focuses on digital marketing, brand strategy, consumer behavior, and sales management with hands-on live corporate projects.",
    image: "/programs/one.webp",
    format: "On Campus (Full-time)",
    eligibility: "Graduation (Min 50%) + Entrance",
    duration: "2 Years (Including Internship)",
    training: "3-Month Capstone Project",
  },
  {
    id: "finance",
    category: "Finance & Tech",
    title: "PGDM in Financial Management",
    description: "Covers corporate finance, investment banking, fintech, portfolio management, and financial analysis with live trading simulations.",
    image: "/programs/two.webp",
    format: "On Campus (Full-time)",
    eligibility: "Graduation (Min 50%) + Entrance",
    duration: "2 Years (Including Internship)",
    training: "Live FinTech Simulations",
  },
  {
    id: "banking",
    category: "Finance & Tech",
    title: "PGDM in Banking & Financial Services",
    description: "Covers banking operations, financial systems, wealth management, commercial lending, risk assessment, and fintech platforms.",
    image: "/programs/mba.webp",
    format: "On Campus (Full-time)",
    eligibility: "Graduation (Min 50%) + Entrance",
    duration: "2 Years (Including Internship)",
    training: "Finacle & Core Banking Labs",
  },
  {
    id: "hr",
    category: "Core Business",
    title: "PGDM in Human Resource Management",
    description: "Prepares future HR leaders in strategic HRM, talent acquisition, organizational behavior, industrial relations, and HR analytics.",
    image: "/programs/three.webp",
    format: "On Campus (Full-time)",
    eligibility: "Graduation (Min 50%) + Entrance",
    duration: "2 Years (Including Internship)",
    training: "SHRM Aligned Projects",
  },
  {
    id: "analytics",
    category: "Finance & Tech",
    title: "PGDM in Business Analytics",
    description: "Equips students with data driven tools, predictive modeling, statistical analysis, database management, and business intelligence (BI) software.",
    image: "/programs/four.webp",
    format: "On Campus (Full-time)",
    eligibility: "Graduation (Min 50%) + Entrance",
    duration: "2 Years (Including Internship)",
    training: "Advanced Excel, Python & Tableau Labs",
  },
  {
    id: "ib",
    category: "Core Business",
    title: "PGDM in International Business",
    description: "Tailored for global careers, exploring international trade policies, cross-border logistics, and global supply chain strategies.",
    image: "/programs/five.webp",
    format: "On Campus (Full-time)",
    eligibility: "Graduation (Min 50%) + Entrance",
    duration: "2 Years (Including Internship)",
    training: "Global Port & Logistics Visit",
  },
  {
    id: "ops",
    category: "Operations & Supply",
    title: "PGDM in Operations & Supply Chain Management",
    description: "Trains students in logistics optimization, lean manufacturing systems, inventory control, and six-sigma quality standards.",
    image: "/programs/six.webp",
    format: "On Campus (Full-time)",
    eligibility: "Graduation (Min 50%) + Entrance",
    duration: "2 Years (Including Internship)",
    training: "Lean Six-Sigma Certifications",
  },
];

export default function Programmes() {
  const scrollRef = useRef(null);
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Core Business", "Finance & Tech", "Operations & Supply"];

  // Filter data based on selected tab
  const filteredData = activeTab === "All"
    ? specializationsData
    : specializationsData.filter(item => item.category === activeTab);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section id="programmes-section" className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8 relative border-t border-zinc-200 overflow-hidden">

      {/* Background Flow SVG */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <svg className="w-full h-full min-h-[700px]" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M-100,80 C200,100 500,550 900,480 C1200,430 1350,650 1500,750" stroke="url(#prog-flow-grad-1)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="6 8" opacity="0.75" className="flow-dash" />
          <path d="M-100,100 C200,120 500,570 900,500 C1200,450 1350,670 1500,770" stroke="url(#prog-flow-grad-2)" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
          <circle cx="520" cy="450" r="4" fill="#064ca2" opacity="0.9" className="pulse-node" />
          <circle cx="520" cy="450" r="8" stroke="#064ca2" strokeWidth="1" fill="none" opacity="0.55" className="pulse-ring" />
          <circle cx="950" cy="480" r="4" fill="#e6a600" opacity="0.9" className="pulse-node" />
          <circle cx="950" cy="480" r="8" stroke="#e6a600" strokeWidth="1" fill="none" opacity="0.55" className="pulse-ring" />
          <defs>
            <linearGradient id="prog-flow-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#064ca2" />
              <stop offset="50%" stopColor="#e6a600" />
              <stop offset="100%" stopColor="#064ca2" />
            </linearGradient>
            <linearGradient id="prog-flow-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e6a600" />
              <stop offset="60%" stopColor="#064ca2" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
            <style>{`
              @keyframes flow {
                from { stroke-dashoffset: 28; }
                to { stroke-dashoffset: 0; }
              }
              @keyframes pulse {
                0% { transform: scale(1); opacity: 0.9; }
                50% { transform: scale(1.25); opacity: 1; }
                100% { transform: scale(1); opacity: 0.9; }
              }
              @keyframes pulseRing {
                0% { transform: scale(1); opacity: 0.55; }
                50% { transform: scale(1.4); opacity: 0.15; }
                100% { transform: scale(1); opacity: 0.55; }
              }
              .flow-dash {
                animation: flow 8s linear infinite;
              }
              .pulse-node {
                transform-box: fill-box;
                transform-origin: center;
                animation: pulse 3s ease-in-out infinite;
              }
              .pulse-ring {
                transform-box: fill-box;
                transform-origin: center;
                animation: pulseRing 3s ease-in-out infinite;
              }
            `}</style>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header with Slider Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight flex items-baseline gap-x-2">
              Our <span className="font-serif italic font-bold text-[#064ca2]">Specialization</span>
            </h2>
            <p className="text-zinc-500 mt-2 text-sm font-medium">
              Choose a specialization that aligns with your professional aspiration.
            </p>
          </div>

          {/* Slider Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-zinc-300 hover:border-zinc-500 flex items-center justify-center text-zinc-700 hover:bg-zinc-50 transition cursor-pointer"
              aria-label="Scroll left"
            >
              <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-zinc-300 hover:border-zinc-500 flex items-center justify-center text-zinc-700 hover:bg-zinc-50 transition cursor-pointer"
              aria-label="Scroll right"
            >
              <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-zinc-100">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wide transition duration-300 cursor-pointer ${activeTab === tab
                  ? "bg-zinc-900 text-white shadow-xs"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Horizontal Slider Layout */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {filteredData.map((spec) => (
            <div
              key={spec.id}
              className="min-w-[320px] sm:min-w-[380px] md:min-w-[420px] bg-zinc-50 border border-zinc-200/85 rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition duration-300 flex flex-col"
            >

              {/* Cover Image & Video Overlay Icon */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-200 group">
                <img
                  src={spec.image}
                  alt={spec.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Visual Glassmorphic play button */}
                {/* <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-lg group-hover:scale-110 group-hover:bg-white/45 transition duration-300">
                    <svg className="w-3.5 h-3.5 text-white fill-current translate-x-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div> */}

                {/* Badge Category */}
                <span className="absolute top-4 left-4 bg-white/80 backdrop-blur-xs text-zinc-800 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-md border border-white/20">
                  {spec.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-xl font-extrabold text-[#064ca2] tracking-tight leading-snug">
                    {spec.title}
                  </h3>
                  <p className="text-zinc-500 text-xs mt-2 leading-relaxed">
                    {spec.description}
                  </p>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-200/50">
                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#064ca2]/10 flex items-center justify-center text-[#064ca2] shrink-0 mt-0.5">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </span>
                    <div>
                      <span className="text-[9px] font-bold text-zinc-400 uppercase leading-none block">Format</span>
                      <span className="text-[11px] font-black text-zinc-800 leading-tight block mt-0.5">{spec.format}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#064ca2]/10 flex items-center justify-center text-[#064ca2] shrink-0 mt-0.5">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <div>
                      <span className="text-[9px] font-bold text-zinc-400 uppercase leading-none block">Eligibility</span>
                      <span className="text-[11px] font-black text-zinc-800 leading-tight block mt-0.5 truncate max-w-[130px]">{spec.eligibility}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#064ca2]/10 flex items-center justify-center text-[#064ca2] shrink-0 mt-0.5">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <div>
                      <span className="text-[9px] font-bold text-zinc-400 uppercase leading-none block">Duration</span>
                      <span className="text-[11px] font-black text-zinc-800 leading-tight block mt-0.5">{spec.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#064ca2]/10 flex items-center justify-center text-[#064ca2] shrink-0 mt-0.5">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </span>
                    <div>
                      <span className="text-[9px] font-bold text-zinc-400 uppercase leading-none block">Corporate Focus</span>
                      <span className="text-[11px] font-black text-zinc-800 leading-tight block mt-0.5 truncate max-w-[130px]">{spec.training}</span>
                    </div>
                  </div>
                </div>

                {/* Explore CTA Button */}
                <Link
                  href={`/specializations/${spec.id}`}
                  className="w-full py-3.5 border border-[#064ca2] text-[#064ca2] font-extrabold text-xs rounded-xl hover:bg-[#064ca2] hover:text-white transition duration-300 flex items-center justify-center gap-2 group cursor-pointer text-center no-underline"
                >
                  <span>Explore Specialization</span>
                  <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
