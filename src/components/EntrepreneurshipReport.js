import { useState, useEffect } from "react";

const pagesData = [
  {
    id: 1,
    type: "cover",
    bgClass: "bg-zinc-950 text-white",
    content: (
      <div className="h-full flex flex-col justify-between p-6 relative overflow-hidden select-none">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl" />

        {/* Top Header */}
        <div className="z-10 flex items-center justify-between border-b border-zinc-800 pb-3">
          <span className="text-[9px] font-black tracking-widest text-[#e6a600]">ACCURATE INCUBATION</span>
          <span className="text-[9px] font-bold text-zinc-500">COHORT IV</span>
        </div>

        {/* Title */}
        <div className="z-10 my-auto text-center space-y-4">
          <h4 className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">Inception to Scale</h4>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-none text-white">
            ENTREPRENEURSHIP<br />
            <span className="font-serif italic font-normal text-[#e6a600]">REPORT</span>
          </h2>
          <div className="w-10 h-0.5 bg-gradient-to-r from-[#e6a600] to-[#064ca2] mx-auto rounded-full" />
          <p className="text-zinc-400 text-[10px] font-medium max-w-xs mx-auto leading-normal">
            Uncovering the 0-1 journey of top student startups incubated at Accurate.
          </p>
        </div>

        {/* Cover Graphic / Photo */}
        <div className="z-10 relative h-32 rounded-xl overflow-hidden border border-zinc-800 shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800"
            alt="Accurate Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
          <div className="absolute bottom-2.5 left-3 text-left">
            <span className="text-[9px] font-extrabold text-zinc-300 block">YEAR 2024 - 2025</span>
            <span className="text-[8px] font-bold text-zinc-500">ACCURATE BUSINESS SCHOOL</span>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="z-10 pt-3 border-t border-zinc-800 flex items-center justify-between text-zinc-500 text-[8px] font-bold">
          <span>ALL RIGHTS RESERVED</span>
          <span>VOLUME 01</span>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    type: "metrics",
    bgClass: "bg-white text-zinc-900 border border-zinc-200",
    content: (
      <div className="h-full flex flex-col justify-between p-6 select-none relative">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-zinc-100 pb-2.5 mb-4">
            <span className="text-[8px] font-black tracking-widest text-[#064ca2] uppercase">Key Metrics</span>
            <span className="text-[8px] font-extrabold text-zinc-400">PAGE 02</span>
          </div>

          <h3 className="text-xl font-extrabold tracking-tight text-zinc-900 leading-tight mb-1.5">
            Incubator <span className="font-serif italic font-normal text-[#064ca2]">Achievements</span>
          </h3>
          <p className="text-zinc-500 text-[10px] leading-relaxed mb-4">
            A glance at the collective valuation, jobs created, and funding raised by our student-led startups.
          </p>

          {/* Bento Stats Grid */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="bg-zinc-50 border border-zinc-200/60 rounded-xl p-3 text-left space-y-0.5">
              <span className="text-[8px] text-zinc-400 font-extrabold uppercase tracking-wider block">Valuation</span>
              <span className="text-lg font-black text-zinc-900 block leading-none">₹250Cr+</span>
              <span className="text-[7.5px] font-bold text-emerald-600 block">↑ 140% YoY Growth</span>
            </div>

            <div className="bg-zinc-50 border border-zinc-200/60 rounded-xl p-3 text-left space-y-0.5">
              <span className="text-[8px] text-zinc-400 font-extrabold uppercase tracking-wider block">Funding</span>
              <span className="text-lg font-black text-zinc-900 block leading-none">₹35Cr+</span>
              <span className="text-[7.5px] font-bold text-zinc-500 block">Secure Seed Capital</span>
            </div>

            <div className="bg-zinc-50 border border-zinc-200/60 rounded-xl p-3 text-left space-y-0.5">
              <span className="text-[8px] text-zinc-400 font-extrabold uppercase tracking-wider block">Ventures</span>
              <span className="text-lg font-black text-[#064ca2] block leading-none">20+</span>
              <span className="text-[7.5px] font-bold text-zinc-500 block">Active Startups</span>
            </div>

            <div className="bg-zinc-50 border border-zinc-200/60 rounded-xl p-3 text-left space-y-0.5">
              <span className="text-[8px] text-zinc-400 font-extrabold uppercase tracking-wider block">Employment</span>
              <span className="text-lg font-black text-zinc-900 block leading-none">500+</span>
              <span className="text-[7.5px] font-bold text-emerald-600 block">High-Value Jobs</span>
            </div>
          </div>
        </div>

        {/* Footer info graph */}
        <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-2.5 text-left flex items-center justify-between mt-4">
          <div>
            <span className="text-[8px] font-extrabold text-[#064ca2] block">SECTOR DIVERSIFICATION</span>
            <span className="text-[7.5px] text-zinc-500 block">EdTech, FinTech, EV, CleanTech & SaaS</span>
          </div>
          <span className="text-[10px] font-black text-[#064ca2]">Accurate AI</span>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    type: "ventures",
    bgClass: "bg-white text-zinc-900 border border-zinc-200",
    content: (
      <div className="h-full flex flex-col justify-between p-6 select-none relative">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-zinc-100 pb-2.5 mb-4">
            <span className="text-[8px] font-black tracking-widest text-[#059669] uppercase">Featured Startups</span>
            <span className="text-[8px] font-extrabold text-zinc-400">PAGE 03</span>
          </div>

          <h3 className="text-xl font-extrabold tracking-tight text-zinc-900 leading-tight mb-1.5">
            Top Incubated <span className="font-serif italic font-normal text-emerald-600">Ventures</span>
          </h3>
          <p className="text-zinc-500 text-[10px] leading-relaxed mb-4">
            Our student founders are building scalable solutions targeting real industry gaps.
          </p>

          {/* Ventures List */}
          <div className="space-y-2">
            {/* Venture 1 */}
            <div className="flex items-center justify-between p-2.5 bg-zinc-50 border border-zinc-200/50 rounded-xl">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px]">
                  EV
                </div>
                <div className="text-left">
                  <span className="text-[11px] font-extrabold text-zinc-800 block leading-tight">GreenDrive</span>
                  <span className="text-[8px] text-zinc-400 block leading-none">EV Fleet Solutions</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[11px] font-black text-zinc-950 block">₹32Cr</span>
                <span className="text-[7.5px] text-zinc-400 font-bold block uppercase tracking-wider">VALUATION</span>
              </div>
            </div>

            {/* Venture 2 */}
            <div className="flex items-center justify-between p-2.5 bg-zinc-50 border border-zinc-200/50 rounded-xl">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-100 text-[#064ca2] flex items-center justify-center font-bold text-[10px]">
                  AI
                </div>
                <div className="text-left">
                  <span className="text-[11px] font-extrabold text-zinc-800 block leading-tight">FinFlow</span>
                  <span className="text-[8px] text-zinc-400 block leading-none">AI Payments Platform</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[11px] font-black text-zinc-950 block">₹60Cr</span>
                <span className="text-[7.5px] text-zinc-400 font-bold block uppercase tracking-wider">VALUATION</span>
              </div>
            </div>

            {/* Venture 3 */}
            <div className="flex items-center justify-between p-2.5 bg-zinc-50 border border-zinc-200/50 rounded-xl">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-[10px]">
                  ED
                </div>
                <div className="text-left">
                  <span className="text-[11px] font-extrabold text-zinc-800 block leading-tight">EduVantage</span>
                  <span className="text-[8px] text-zinc-400 block leading-none">Vernacular Learning LMS</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[11px] font-black text-zinc-950 block">₹45Cr</span>
                <span className="text-[7.5px] text-zinc-400 font-bold block uppercase tracking-wider">VALUATION</span>
              </div>
            </div>
          </div>
        </div>

        {/* Growth Label */}
        <div className="text-center text-[8px] font-bold text-zinc-400 mt-4">
          All incubated ventures undergo rigorous board audits.
        </div>
      </div>
    ),
  },
  {
    id: 4,
    type: "journey",
    bgClass: "bg-white text-zinc-900 border border-zinc-200",
    content: (
      <div className="h-full flex flex-col justify-between p-6 select-none relative">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-zinc-100 pb-2.5 mb-4">
            <span className="text-[8px] font-black tracking-widest text-amber-600 uppercase">Founder Journey</span>
            <span className="text-[8px] font-extrabold text-zinc-400">PAGE 04</span>
          </div>

          <h3 className="text-xl font-extrabold tracking-tight text-zinc-900 leading-tight mb-1.5">
            Incubation <span className="font-serif italic font-normal text-amber-500">Timeline</span>
          </h3>
          <p className="text-zinc-500 text-[10px] leading-relaxed mb-4">
            Our structured 4-stage path that turns raw concepts into market-validated companies.
          </p>

          {/* Timeline Nodes */}
          <div className="relative pl-5 space-y-3 border-l-2 border-zinc-100 text-left">
            {/* Node 1 */}
            <div className="relative">
              <div className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-amber-500 border-2 border-white shadow-sm" />
              <span className="text-[9px] font-black text-[#e6a600] uppercase tracking-wider block">Phase 1: Bootstrapping</span>
              <span className="text-[10px] text-zinc-600 block leading-snug mt-0.5">Forming teams and building MVP during the Startup Bootcamp.</span>
            </div>

            {/* Node 2 */}
            <div className="relative">
              <div className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-blue-600 border-2 border-white shadow-sm" />
              <span className="text-[9px] font-black text-[#064ca2] uppercase tracking-wider block">Phase 2: Seed Grant</span>
              <span className="text-[10px] text-zinc-600 block leading-snug mt-0.5">Up to ₹10 Lakhs seed capital injected for initial market validation.</span>
            </div>

            {/* Node 3 */}
            <div className="relative">
              <div className="absolute -left-[27px] top-1 w-3 h-3 rounded-full bg-emerald-600 border-2 border-white shadow-sm" />
              <span className="text-[9px] font-black text-emerald-600 uppercase tracking-wider block">Phase 3: Scale & Mentor</span>
              <span className="text-[10px] text-zinc-600 block leading-snug mt-0.5">Custom mentoring by 80+ global CXOs and industry veterans.</span>
            </div>
          </div>
        </div>

        <div className="text-center text-[8px] font-bold text-zinc-400 mt-4">
          Duration: 12-Month Co-Working & Acceleration Program
        </div>
      </div>
    ),
  },
  {
    id: 5,
    type: "partners",
    bgClass: "bg-white text-zinc-900 border border-zinc-200",
    content: (
      <div className="h-full flex flex-col justify-between p-6 select-none relative">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between border-b border-zinc-100 pb-2.5 mb-4">
            <span className="text-[8px] font-black tracking-widest text-[#064ca2] uppercase">Investor Network</span>
            <span className="text-[8px] font-extrabold text-zinc-400">PAGE 05</span>
          </div>

          <h3 className="text-xl font-extrabold tracking-tight text-zinc-900 leading-tight mb-1.5">
            Ecosystem <span className="font-serif italic font-normal text-[#064ca2]">Partners</span>
          </h3>
          <p className="text-zinc-500 text-[10px] leading-relaxed mb-4">
            Collaborating with leading venture funds and angel networks to finance and accelerate scale.
          </p>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 gap-2">
            <div className="border border-zinc-100 rounded-xl p-2.5 bg-zinc-50 text-center flex flex-col justify-center items-center h-12">
              <span className="text-[10px] font-black tracking-wider text-zinc-700 block leading-none">ACCEL INDIA</span>
              <span className="text-[7px] font-bold text-zinc-400 uppercase mt-0.5">VENTURE PARTNER</span>
            </div>
            <div className="border border-zinc-100 rounded-xl p-2.5 bg-zinc-50 text-center flex flex-col justify-center items-center h-12">
              <span className="text-[10px] font-black tracking-wider text-zinc-700 block leading-none">SEQUOIA CAP</span>
              <span className="text-[7px] font-bold text-zinc-400 uppercase mt-0.5">SEED NETWORK</span>
            </div>
            <div className="border border-zinc-100 rounded-xl p-2.5 bg-zinc-50 text-center flex flex-col justify-center items-center h-12">
              <span className="text-[10px] font-black tracking-wider text-zinc-700 block leading-none">MATRIX PARTNERS</span>
              <span className="text-[7px] font-bold text-zinc-400 uppercase mt-0.5">ECOSYSTEM CAP</span>
            </div>
            <div className="border border-zinc-100 rounded-xl p-2.5 bg-zinc-50 text-center flex flex-col justify-center items-center h-12">
              <span className="text-[10px] font-black tracking-wider text-zinc-700 block leading-none">BLUME VENTURES</span>
              <span className="text-[7px] font-bold text-zinc-400 uppercase mt-0.5">MENTOR CAPITAL</span>
            </div>
          </div>
        </div>

        {/* Demo Day Tag */}
        <div className="bg-zinc-900 text-white rounded-xl p-2.5 flex items-center justify-between text-left mt-4">
          <div>
            <span className="text-[8px] font-bold text-zinc-400 block uppercase leading-none mb-0.5">Annual Showcase</span>
            <span className="text-[11px] font-extrabold text-white block leading-tight">Accurate Demo Day</span>
          </div>
          <span className="text-[8px] font-bold text-[#e6a600] uppercase tracking-wider">Pitch to 50+ VCs</span>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    type: "back",
    bgClass: "bg-[#064ca2] text-white",
    content: (
      <div className="h-full flex flex-col justify-between p-6 relative overflow-hidden select-none">
        {/* Glow effect */}
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl" />

        {/* Top Header */}
        <div className="z-10 flex items-center justify-between border-b border-white/10 pb-3">
          <span className="text-[9px] font-black tracking-widest text-[#e6a600]">ACCURATE PGDM</span>
          <span className="text-[9px] font-bold text-white/50">PAGE 06</span>
        </div>

        {/* Title */}
        <div className="z-10 my-auto text-center space-y-4">
          <h2 className="text-2xl font-extrabold tracking-tight leading-none text-white">
            BUILD YOUR<br />
            <span className="font-serif italic font-normal text-[#e6a600]">VISION</span>
          </h2>
          <div className="w-10 h-0.5 bg-white/30 mx-auto rounded-full" />
          <p className="text-white/80 text-[10px] font-medium max-w-xs mx-auto leading-normal">
            Join the next incubation cohort and start building your real business.
          </p>

          <button className="h-9 px-5 bg-white hover:bg-zinc-100 text-[#064ca2] text-[9px] font-black tracking-widest uppercase rounded-full shadow-lg transition duration-300 mx-auto block cursor-pointer">
            Apply Now
          </button>
        </div>

        {/* Contact info */}
        <div className="z-10 pt-3 border-t border-white/10 text-center space-y-0.5">
          <span className="text-[8px] font-extrabold text-[#e6a600] uppercase tracking-wider block">Accurate Incubation Centre</span>
          <span className="text-[8px] text-white/60 block">incubation@accurate.edu.in  |  accurate.edu.in</span>
        </div>
      </div>
    ),
  }
];

// Double Page Sheets Mapping for Desktop view
const sheetsData = [
  {
    front: pagesData[0], // Page 1: Cover
    back: pagesData[1],  // Page 2: Metrics
  },
  {
    front: pagesData[2], // Page 3: Ventures
    back: pagesData[3],  // Page 4: Journey
  },
  {
    front: pagesData[4], // Page 5: Partners
    back: pagesData[5],  // Page 6: Back Cover
  }
];

export default function EntrepreneurshipReport() {
  const [currentPage, setCurrentPage] = useState(0); // for Mobile (0 to 5)
  const [currentSheet, setCurrentSheet] = useState(0); // for Desktop (0 to 3)
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState("next"); // "next" or "prev"
  const [isMobile, setIsMobile] = useState(false);

  const totalPages = pagesData.length;
  const totalSheets = sheetsData.length;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px for desktop double spread space
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mobile Handlers
  const handleMobileNext = () => {
    if (currentPage < totalPages - 1 && !isFlipping) {
      setFlipDirection("next");
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1);
        setIsFlipping(false);
      }, 500);
    }
  };

  const handleMobilePrev = () => {
    if (currentPage > 0 && !isFlipping) {
      setFlipDirection("prev");
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev - 1);
        setIsFlipping(false);
      }, 500);
    }
  };

  // Desktop Handlers
  const handleDesktopNext = () => {
    if (currentSheet < totalSheets && !isFlipping) {
      setFlipDirection("next");
      setIsFlipping(true);
      setCurrentSheet((prev) => prev + 1);
      setTimeout(() => {
        setIsFlipping(false);
      }, 800);
    }
  };

  const handleDesktopPrev = () => {
    if (currentSheet > 0 && !isFlipping) {
      setFlipDirection("prev");
      setIsFlipping(true);
      setCurrentSheet((prev) => prev - 1);
      setTimeout(() => {
        setIsFlipping(false);
      }, 800);
    }
  };

  const handleSliderChange = (e) => {
    if (isFlipping) return;
    const targetVal = parseInt(e.target.value);
    
    if (isMobile) {
      if (targetVal !== currentPage) {
        setFlipDirection(targetVal > currentPage ? "next" : "prev");
        setIsFlipping(true);
        setTimeout(() => {
          setCurrentPage(targetVal);
          setIsFlipping(false);
          // Wait additional brief timeout to prevent double inputs
        }, 500);
      }
    } else {
      if (targetVal !== currentSheet) {
        setFlipDirection(targetVal > currentSheet ? "next" : "prev");
        setIsFlipping(true);
        setCurrentSheet(targetVal);
        setTimeout(() => {
          setIsFlipping(false);
        }, 800);
      }
    }
  };

  return (
    <section 
      className="w-full pt-20 pb-24 px-4 sm:px-6 lg:px-8 relative text-center border-t border-zinc-200 overflow-visible"
      style={{
        background: "linear-gradient(to bottom, #ffffff 520px, #064ca2 520px)"
      }}
    >
      {/* Ambient lighting glows inside the section */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Part Content (Headers) */}
        <div className="space-y-5 pb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight max-w-3xl mx-auto">
            Building Real Startups, <span className="font-serif italic font-normal text-zinc-800">Not Just Projects</span>
          </h2>
          <p className="text-zinc-500 text-sm md:text-base font-medium max-w-xl mx-auto">
            A data-backed report on student startups, covering valuation, revenue, funding, and market traction.
          </p>
          <div className="pt-2">
            <button className="h-12 px-6 bg-white hover:bg-zinc-50 border border-zinc-300 hover:border-zinc-500 text-zinc-800 text-xs font-extrabold rounded-full flex items-center gap-2.5 mx-auto transition duration-300 cursor-pointer group shadow-sm">
              <span>Download Entrepreneurship Report</span>
              <svg className="w-4 h-4 text-zinc-500 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          </div>
        </div>

        {/* Flipbook Container Box - reduced max-width and paddings */}
        <div className="w-full max-w-4xl mx-auto bg-[#031d3d]/95 border border-[#064ca2]/30 rounded-[32px] p-4 sm:p-6 md:p-8 shadow-2xl relative z-20 mt-2">
          
          {/* Flipbook Custom Header */}
          <div className="absolute top-4 left-6 flex items-center gap-2 select-none">
            <div className="w-2.5 h-2.5 rounded-full bg-[#e6a600] animate-pulse" />
            <span className="text-[10px] text-blue-200/60 font-extrabold tracking-widest uppercase">ACCURATE FLIPBOOK V2</span>
          </div>

          <div className="absolute top-4 right-6 text-[10px] text-blue-200/60 font-bold select-none">
            3D INTERACTIVE SPREAD
          </div>

          {/* Book Mockup Canvas Wrapper - reduced height & spacing */}
          <div className="my-6 flex items-center justify-center relative min-h-[400px] lg:min-h-[450px]">
            
            {/* Navigation Arrows */}
            {/* Left Prev Arrow */}
            <button
              onClick={isMobile ? handleMobilePrev : handleDesktopPrev}
              disabled={isMobile ? (currentPage === 0 || isFlipping) : (currentSheet === 0 || isFlipping)}
              className="absolute left-0 lg:-left-4 z-40 w-12 h-12 rounded-full bg-[#031d3d]/90 border border-[#064ca2]/30 hover:bg-[#042d5e] hover:border-[#064ca2]/60 text-white flex items-center justify-center shadow-lg transition duration-200 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5 text-blue-200 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Next Arrow */}
            <button
              onClick={isMobile ? handleMobileNext : handleDesktopNext}
              disabled={isMobile ? (currentPage === totalPages - 1 || isFlipping) : (currentSheet === totalSheets || isFlipping)}
              className="absolute right-0 lg:-right-4 z-40 w-12 h-12 rounded-full bg-[#031d3d]/90 border border-[#064ca2]/30 hover:bg-[#042d5e] hover:border-[#064ca2]/60 text-white flex items-center justify-center shadow-lg transition duration-200 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5 text-blue-200 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Book Content Spread Render */}
            {isMobile ? (
              /* Mobile View: Single Page Flip */
              <div 
                className="relative w-[270px] sm:w-[320px] h-[370px] sm:h-[430px] shadow-2xl rounded-2xl overflow-visible"
                style={{
                  perspective: "1200px",
                  transformStyle: "preserve-3d"
                }}
              >
                {currentPage < totalPages - 1 && (
                  <div 
                    className="absolute inset-0 rounded-2xl overflow-hidden shadow-inner bg-white select-none z-10"
                    style={{
                      transform: "rotateY(0deg) scale(0.97)",
                      opacity: 0.95,
                      filter: "brightness(0.95)",
                      transition: "all 0.5s ease"
                    }}
                  >
                    {pagesData[currentPage + 1].content}
                  </div>
                )}

                <div 
                  className={`absolute inset-0 rounded-2xl overflow-hidden shadow-2xl z-20 ${
                    pagesData[currentPage].bgClass
                  } ${
                    isFlipping && flipDirection === "next" 
                      ? "animate-flip-left" 
                      : isFlipping && flipDirection === "prev"
                      ? "animate-flip-right"
                      : ""
                  }`}
                  style={{
                    transformOrigin: "left center",
                    transformStyle: "preserve-3d",
                    transition: isFlipping ? "transform 0.5s ease-in-out, opacity 0.5s ease-in-out" : "none"
                  }}
                >
                  {isFlipping && (
                    <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/5 z-30 pointer-events-none" />
                  )}
                  {pagesData[currentPage].content}
                </div>
              </div>
            ) : (
              /* Desktop View: Double Page 3D Flipbook - scaled down dimensions */
              <div 
                className="relative w-[660px] h-[420px] rounded-2xl shadow-2xl bg-[#020e1e]/20 overflow-visible flex items-center justify-between border border-[#064ca2]/30"
                style={{
                  perspective: "2000px",
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Book Spine Overlay Shadow */}
                <div className="absolute left-1/2 -translate-x-1/2 w-6 bg-gradient-to-r from-black/25 via-black/45 to-black/25 h-full z-40 pointer-events-none shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] border-l border-r border-black/30" />

                {/* Left Side Base Layer */}
                <div className="w-1/2 h-full rounded-l-2xl bg-[#020e1e] flex items-center justify-center text-blue-300/40 text-[9px] select-none font-bold">
                  ACCURATE AIC
                </div>

                {/* Right Side Base Layer */}
                <div className="w-1/2 h-full rounded-r-2xl bg-[#020e1e] flex items-center justify-center text-blue-300/40 text-[9px] select-none font-bold">
                  STARTUP REPORT
                </div>

                {/* Double Sheets Rendering */}
                {sheetsData.map((sheet, index) => {
                  const isFlipped = index < currentSheet;
                  
                  // Compute dynamic layered 3D Z-index values
                  let zIndex = 0;
                  if (isFlipped) {
                    zIndex = index;
                  } else {
                    zIndex = 10 - index;
                  }

                  return (
                    <div
                      key={index}
                      className="absolute top-0 right-0 w-1/2 h-full transition-transform duration-[800ms] ease-in-out"
                      style={{
                        transformStyle: "preserve-3d",
                        WebkitTransformStyle: "preserve-3d",
                        transformOrigin: "left center",
                        transform: isFlipped ? "rotateY(-180deg)" : "rotateY(0deg)",
                        zIndex: zIndex
                      }}
                    >
                      {/* Front Side page (shown on the right side) */}
                      <div 
                        className={`absolute inset-0 rounded-r-2xl overflow-hidden shadow-l ${sheet.front.bgClass}`}
                        style={{
                          backfaceVisibility: "hidden",
                          WebkitBackfaceVisibility: "hidden",
                          transform: "rotateY(0deg)"
                        }}
                      >
                        {/* Page Shadow curl near spine */}
                        <div className="absolute left-0 top-0 w-6 h-full bg-gradient-to-r from-black/15 via-transparent to-transparent pointer-events-none z-30" />
                        {sheet.front.content}
                      </div>

                      {/* Back Side page (shown on the left side when flipped) */}
                      <div 
                        className={`absolute inset-0 rounded-l-2xl overflow-hidden shadow-r ${sheet.back.bgClass}`}
                        style={{
                          backfaceVisibility: "hidden",
                          WebkitBackfaceVisibility: "hidden",
                          transform: "rotateY(180deg)"
                        }}
                      >
                        {/* Page Shadow curl near spine */}
                        <div className="absolute right-0 top-0 w-6 h-full bg-gradient-to-l from-black/15 via-transparent to-transparent pointer-events-none z-30" />
                        {sheet.back.content}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

          </div>

          {/* Book Bottom Progress Seek-bar */}
          <div className="w-full max-w-md mx-auto pt-6 border-t border-[#064ca2]/20 flex flex-col sm:flex-row items-center gap-4 justify-between select-none">
            {/* Page / Spread Count */}
            <span className="text-blue-200/60 font-extrabold text-xs tracking-wider uppercase">
              {isMobile ? (
                `PAGE ${currentPage + 1} / ${totalPages}`
              ) : (
                currentSheet === 0 ? "COVER PAGE" :
                currentSheet === totalSheets ? "BACK COVER" :
                `SPREAD ${currentSheet} / ${totalSheets - 1}`
              )}
            </span>

            {/* Seek Slider Bar */}
            <div className="flex-1 w-full relative group">
              <input
                type="range"
                min="0"
                max={isMobile ? totalPages - 1 : totalSheets}
                value={isMobile ? currentPage : currentSheet}
                onChange={handleSliderChange}
                disabled={isFlipping}
                className="w-full h-1 bg-blue-950 rounded-lg appearance-none cursor-pointer accent-[#e6a600] group-hover:bg-blue-900 transition duration-200"
              />
            </div>

            {/* Return to Cover */}
            <button
              onClick={() => {
                if (!isFlipping) {
                  setFlipDirection("prev");
                  setIsFlipping(true);
                  if (isMobile) {
                    setCurrentPage(0);
                    setTimeout(() => setIsFlipping(false), 500);
                  } else {
                    setCurrentSheet(0);
                    setTimeout(() => setIsFlipping(false), 800);
                  }
                }
              }}
              className="text-blue-300 hover:text-white transition duration-200 cursor-pointer"
              title="Return to Cover"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.334 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
              </svg>
            </button>
          </div>

        </div>

      </div>

      {/* Tailwind CSS Flip Keyframes & Animations inside style tag */}
      <style jsx global>{`
        @keyframes flipLeft {
          0% {
            transform: rotateY(0deg) scale(1);
            opacity: 1;
          }
          50% {
            transform: rotateY(-90deg) scale(0.98);
            opacity: 0.5;
          }
          100% {
            transform: rotateY(-180deg) scale(0.95);
            opacity: 0;
          }
        }

        @keyframes flipRight {
          0% {
            transform: rotateY(-180deg) scale(0.95);
            opacity: 0;
          }
          50% {
            transform: rotateY(-90deg) scale(0.98);
            opacity: 0.5;
          }
          100% {
            transform: rotateY(0deg) scale(1);
            opacity: 1;
          }
        }

        .animate-flip-left {
          animation: flipLeft 0.5s forwards ease-in-out;
        }

        .animate-flip-right {
          animation: flipRight 0.5s forwards ease-in-out;
        }
      `}</style>
    </section>
  );
}
