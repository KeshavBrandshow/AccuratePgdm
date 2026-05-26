import { useRef } from "react";

export default function Certifications() {
  const specCertifications = [
    {
      label: "Design Thinking",
      icon: (
        <svg className="w-4.5 h-4.5 text-[#e6a600]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      colorClass: "bg-[#e6a600]/10 border-[#e6a600]/20",
    },
    {
      label: "R and Python",
      icon: (
        <svg className="w-4.5 h-4.5 text-[#064ca2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      colorClass: "bg-[#064ca2]/10 border-[#064ca2]/20",
    },
    {
      label: "Human Values",
      icon: (
        <svg className="w-4.5 h-4.5 text-[#e6a600]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m11 17 2 2a1 1 0 10 3-3" />
          <path d="m14 14 2 2a1 1 0 10 3-3" />
          <path d="M2 13a2 2 0 012-2h7" />
          <path d="M9 11a2 2 0 012-2h7" />
          <path d="M18 11a2 2 0 012 2v2a2 2 0 01-2 2H6" />
          <path d="M6 13a2 2 0 012-2" />
          <path d="M6 17a2 2 0 01-2-2v-2" />
        </svg>
      ),
      colorClass: "bg-[#e6a600]/10 border-[#e6a600]/20",
    },
    {
      label: "Financial Planning",
      icon: (
        <svg className="w-4.5 h-4.5 text-[#064ca2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21h8M12 17v4M3 4h18M4 4h16v12H4V4z" />
        </svg>
      ),
      colorClass: "bg-[#064ca2]/10 border-[#064ca2]/20",
    },
    {
      label: "Digital Marketing",
      icon: (
        <svg className="w-4.5 h-4.5 text-[#e6a600]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.003 9.003 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
      colorClass: "bg-[#e6a600]/10 border-[#e6a600]/20",
    },
    {
      label: "Advance Excel",
      icon: (
        <svg className="w-4.5 h-4.5 text-[#064ca2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      colorClass: "bg-[#064ca2]/10 border-[#064ca2]/20",
    },
    {
      label: "NISM (National Institute of Stock Market)",
      icon: (
        <svg className="w-4.5 h-4.5 text-[#e6a600]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      colorClass: "bg-[#e6a600]/10 border-[#e6a600]/20",
    },
    {
      label: "Entrepreneurship",
      icon: (
        <svg className="w-4.5 h-4.5 text-[#064ca2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      colorClass: "bg-[#064ca2]/10 border-[#064ca2]/20",
    },
  ];

  return (
    <section id="certifications-section" className="w-full bg-[#f8fafc] py-24 px-4 sm:px-6 lg:px-8 relative border-t border-zinc-200 overflow-hidden">
      {/* Premium Dot Grid Pattern with smooth border fade masks */}
      {/* Premium Organic Flowing Waves Background */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <svg className="w-full h-full min-h-[800px] opacity-55" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M-100,220 C350,120 650,450 950,320 C1250,190 1380,360 1500,460 L1500,800 L-100,800 Z" fill="url(#cert-wave-grad-1)" />
          <path d="M-100,320 C380,240 680,480 980,410 C1280,340 1390,520 1500,620 L1500,800 L-100,800 Z" fill="url(#cert-wave-grad-2)" />
          <defs>
            <linearGradient id="cert-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#064ca2" stopOpacity="0.28" />
              <stop offset="50%" stopColor="#e6a600" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#f8fafc" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="cert-wave-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e6a600" stopOpacity="0.20" />
              <stop offset="60%" stopColor="#064ca2" stopOpacity="0.11" />
              <stop offset="100%" stopColor="#f8fafc" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Ambient background glows */}
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#064ca2] text-xs font-black uppercase tracking-widest block mb-2">INDUSTRY READINESS</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight leading-[1.1]">
            Value Added <span className="font-serif italic font-bold text-[#064ca2]">Certification Programmes</span>
          </h2>
          <p className="text-zinc-500 mt-4 text-sm md:text-base font-medium">
            Equip yourself with globally recognized professional credentials and industry-driven training modules.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: 3 Core Certification Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            
            {/* Card 1: IBM Certification */}
            <div className="bg-white border border-zinc-200/80 rounded-3xl p-6 flex gap-5 items-start hover:shadow-md hover:border-[#064ca2]/30 transition duration-300">
              <div className="w-12 h-12 rounded-full bg-[#e6a600]/10 border border-[#e6a600]/20 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#e6a600]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div className="text-left space-y-1">
                <h3 className="text-lg font-extrabold text-zinc-900 tracking-tight">IBM Certification</h3>
                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                  Earn credentials in Artificial Intelligence, Cloud Solutions, and Analytics, co-delivered directly on-campus by certified IBM mentors.
                </p>
              </div>
            </div>

            {/* Card 2: IOVA */}
            <div className="bg-white border border-zinc-200/80 rounded-3xl p-6 flex gap-5 items-start hover:shadow-md hover:border-[#064ca2]/30 transition duration-300">
              <div className="w-12 h-12 rounded-full bg-[#10b981]/10 border border-[#10b981]/20 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#10b981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="text-left space-y-1">
                <h3 className="text-lg font-extrabold text-zinc-900 tracking-tight">Industry Oriented Value Adds (IOVA)</h3>
                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                  Bridge the classroom-to-boardroom gap through case competitions, corporate readiness workshops, and masterclasses led by executives.
                </p>
              </div>
            </div>

            {/* Card 3: IO-SEP */}
            <div className="bg-white border border-zinc-200/80 rounded-3xl p-6 flex gap-5 items-start hover:shadow-md hover:border-[#064ca2]/30 transition duration-300">
              <div className="w-12 h-12 rounded-full bg-[#064ca2]/10 border border-[#064ca2]/20 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#064ca2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <div className="text-left space-y-1">
                <h3 className="text-lg font-extrabold text-zinc-900 tracking-tight">Industry Oriented Skill Enhancement (IO-SEP)</h3>
                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed">
                  Build strong leadership traits, negotiation skills, emotional intelligence, and business-focused communication excellence.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Specialization-based Certifications */}
          <div className="lg:col-span-7 bg-white border border-zinc-200/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-md hover:border-[#064ca2]/30 transition duration-300">
            
            <div className="text-left space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#064ca2]/10 border border-[#064ca2]/20 flex items-center justify-center">
                  <svg className="w-5.5 h-5.5 text-[#064ca2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-extrabold text-zinc-900 tracking-tight">Certification based on Specialization</h3>
              </div>
              <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed max-w-xl">
                Earn domain-specific certifications aligned directly to your elective choice to become job-ready in your core specialization.
              </p>

              {/* Specializations subgrid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                {specCertifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-zinc-50 border border-zinc-200/50 rounded-2xl p-3.5 hover:bg-white hover:border-[#064ca2]/25 hover:shadow-xs transition duration-200 group text-left"
                  >
                    <div className={`w-8.5 h-8.5 rounded-full flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${cert.colorClass}`}>
                      {cert.icon}
                    </div>
                    <span className="text-xs font-bold text-zinc-700 leading-tight group-hover:text-zinc-900 transition-colors">
                      {cert.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
