import Head from "next/head";
import { useState } from "react";

export default function Ecosystem() {
  const [activeTimeline, setActiveTimeline] = useState(0);

  const incubationSteps = [
    {
      step: "01",
      title: "Ideation & Pitching",
      desc: "Submit your business proposal to the ABI selection committee during our bi-annual Pitch Challenges.",
    },
    {
      step: "02",
      title: "Mentorship Matching",
      desc: "Get paired with top industry mentors, domain experts, and academic guides to refine your business model.",
    },
    {
      step: "03",
      title: "Prototyping & MVP",
      desc: "Use campus incubation labs, hardware/software resources, and infrastructure to build your Minimum Viable Product.",
    },
    {
      step: "04",
      title: "Seed Capital & Funding",
      desc: "Secure seed funding from our ₹10 Lakhs incubator pool and get access to MSME & startup government schemes.",
    },
    {
      step: "05",
      title: "Launch & Scale",
      desc: "Incorporate your venture, set up operations, and leverage the 20,000+ alumni network for market entry.",
    },
  ];

  const studentStartups = [
    {
      name: "ShipKart Logistics",
      founder: "Incubated 2021 (PGDM Alumni)",
      desc: "An AI-powered logistics aggregator automating e-commerce shipments across 26,000+ pin codes in India.",
      tag: "Logistics Tech",
      color: "#0284c7",
    },
    {
      name: "EduPulse Learning",
      founder: "Incubated 2022 (PGDM Alumni)",
      desc: "Interactive gamified training portals for corporate human resource development and employee training assessments.",
      tag: "EdTech Systems",
      color: "#8b5cf6",
    },
    {
      name: "Agrinex Organic",
      founder: "Incubated 2023 (Incubated Venture)",
      desc: "Direct farm-to-business organic supply chain portal empowering 500+ regional farmers with fair pricing grids.",
      tag: "AgriTech/Retail",
      color: "#10b981",
    },
  ];

  const mentors = [
    {
      name: "Dr. Apoorva Sharma",
      role: "Co-Founder, Venture Catalysts",
      desc: "Recognized as a leading angel investor and startup mentor in India. Specializes in early-stage validation and pitch refinement.",
      specialty: "Seed Funding",
      initials: "AS",
      color: "#064ca2"
    },
    {
      name: "Vikram Gupta",
      role: "Founder & Managing Partner, IvyCap Ventures",
      desc: "Over 20+ years of venture capital and corporate scaling experience. Mentors students on GTM strategy and Series A preparation.",
      specialty: "Venture Scale",
      initials: "VG",
      color: "#e6a600"
    },
    {
      name: "Shruti Bhatia",
      role: "IPR Attorney & Legal Consultant",
      desc: "Expert in patent filing, trademark protection, and structuring founder agreements. Ensures corporate compliance for ABI incubates.",
      specialty: "IPR & Legal",
      initials: "SB",
      color: "#10b981"
    }
  ];

  return (
    <>
      <Head>
        <title>Corporate & Startup Ecosystem | Accurate PGDM Greater Noida</title>
        <meta 
          name="description" 
          content="Explore the innovation ecosystem at Accurate Institute. Featuring the Accurate Business Incubator (ABI), seed capital challenges, MSME support, and student startup showcases." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main Container converted to Premium Light Theme */}
      <main className="min-h-screen bg-zinc-50 overflow-x-clip font-sans pt-20">
        
        {/* SECTION 1: HERO (Light Theme) */}
        <section className="relative w-full py-20 lg:py-32 px-4 sm:px-6 lg:px-8 border-b border-zinc-200 flex flex-col justify-center items-center text-center overflow-hidden bg-white">
          
          {/* Constellation SVG Network Background */}
          <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden opacity-[0.25]">
            <svg className="w-full h-full min-h-[600px]" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="200" cy="150" r="4" fill="#064ca2" />
              <circle cx="500" cy="80" r="5" fill="#e6a600" />
              <circle cx="900" cy="220" r="6" fill="#064ca2" />
              <circle cx="1200" cy="120" r="4" fill="#e6a600" />
              <line x1="200" y1="150" x2="500" y2="80" stroke="#064ca2" strokeWidth="1" />
              <line x1="500" y1="80" x2="900" y2="220" stroke="#e6a600" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="900" y1="220" x2="1200" y2="120" stroke="#064ca2" strokeWidth="1" />
              
              <circle cx="350" cy="450" r="5" fill="#e6a600" />
              <circle cx="800" cy="500" r="6" fill="#064ca2" />
              <circle cx="1100" cy="420" r="4" fill="#e6a600" />
              <line x1="350" y1="450" x2="800" y2="500" stroke="#064ca2" strokeWidth="1" />
              <line x1="800" y1="500" x2="1100" y2="420" stroke="#e6a600" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
          </div>

          <div className="max-w-4xl mx-auto relative z-10 w-full">
            <span className="text-[10px] font-black uppercase text-[#064ca2] tracking-widest bg-[#064ca2]/10 px-4 py-1.5 rounded-full border border-[#064ca2]/20 shadow-xs">
              Accurate Business Incubator
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-zinc-900 mt-6 tracking-tight leading-none">
              The Innovation & Corporate <span className="font-serif italic font-bold text-[#064ca2] block sm:inline">Ecosystem</span>
            </h1>
            <p className="text-zinc-500 mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              Bridging academic excellence with business incubation and corporate partnerships. We provide PGDM students the tools to incubate ideas, secure seed funding, and scale real ventures.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <a 
                href="#incubator" 
                className="px-6 py-3 rounded-full bg-[#064ca2] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#064ca2]/95 transition duration-200 shadow-md hover:shadow-lg"
              >
                Explore ABI Incubator
              </a>
              <a 
                href="#startups" 
                className="px-6 py-3 rounded-full border border-zinc-300 text-zinc-600 bg-white font-bold text-xs uppercase tracking-wider hover:bg-zinc-50 transition duration-200 shadow-xs"
              >
                Incubated Startups
              </a>
            </div>
          </div>
        </section>

        {/* Floating Stats Ribbon */}
        <section className="relative z-20 -mt-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-zinc-200/80 rounded-2xl shadow-lg p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-zinc-100">
            <div className="text-center p-2">
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#064ca2]">15+</span>
              <span className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mt-1">Active Incubates</span>
            </div>
            <div className="text-center p-2 pt-6 md:pt-2">
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#e6a600]">₹50L+</span>
              <span className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mt-1">Seed Fund Disbursed</span>
            </div>
            <div className="text-center p-2 pt-6 md:pt-2">
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#064ca2]">12+</span>
              <span className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mt-1">Patents & IPRs Filed</span>
            </div>
            <div className="text-center p-2 pt-6 md:pt-2">
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#e6a600]">100+</span>
              <span className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mt-1">Mentor Hours / Month</span>
            </div>
          </div>
        </section>

        {/* SECTION 2: BENTO HUB (Light Theme) */}
        <section id="incubator" className="w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-zinc-200 relative bg-zinc-50">
          <div className="max-w-[1350px] mx-auto w-full">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Our Incubation <span className="font-serif italic font-bold text-[#064ca2]">Infrastructure</span>
              </h2>
              <p className="text-zinc-500 mt-3 text-sm md:text-base font-medium">
                Incubation, government support, and mentors integrated into the PGDM learning track.
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {/* Card 1 */}
              <div className="bg-white border border-zinc-200/80 rounded-2xl p-8 hover:border-[#064ca2]/45 transition duration-300 flex flex-col justify-between shadow-xs hover:shadow-md">
                <div>
                  <div className="w-fit px-4 h-10 rounded-xl bg-[#064ca2]/10 border border-[#064ca2]/20 flex items-center justify-center font-bold text-base text-[#064ca2] mb-6 tracking-wide">
                    ₹10L
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900">Incubation Seed Pool</h3>
                  <p className="text-zinc-500 text-xs mt-3 leading-relaxed">
                    Exclusive seed support funding pool set aside to back promising student startups during regional pitching challenges and business events.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-zinc-100 flex items-center justify-between text-[11px] font-black uppercase text-[#e6a600] tracking-wider">
                  <span>Funding Track Enabled</span>
                  <span>ABI Cell</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-zinc-200/80 rounded-2xl p-8 hover:border-[#e6a600]/45 transition duration-300 flex flex-col justify-between shadow-xs hover:shadow-md">
                <div>
                  <div className="w-fit px-4 h-10 rounded-xl bg-[#e6a600]/10 border border-[#e6a600]/30 flex items-center justify-center font-bold text-base text-[#b27a00] mb-6 tracking-wide">
                    MSME
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900">Government Recognition</h3>
                  <p className="text-zinc-500 text-xs mt-3 leading-relaxed">
                    Registered under the MSME schemes and supported by Startup India, giving student entrepreneurs access to government grants, tax reliefs, and filing supports.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-zinc-100 flex items-center justify-between text-[11px] font-black uppercase text-[#e6a600] tracking-wider">
                  <span>Govt. Approved schemes</span>
                  <span>MSME Support</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white border border-zinc-200/80 rounded-2xl p-8 hover:border-[#064ca2]/45 transition duration-300 flex flex-col justify-between shadow-xs hover:shadow-md">
                <div>
                  <div className="w-fit px-4 h-10 rounded-xl bg-[#064ca2]/10 border border-[#064ca2]/20 flex items-center justify-center font-bold text-base text-[#064ca2] mb-6 tracking-wide">
                    50+
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900">Corporate Advisors</h3>
                  <p className="text-zinc-500 text-xs mt-3 leading-relaxed">
                    Over 50+ industry guides, angel investors, venture capitalists, and corporate leaders actively mentor PGDM projects throughout the year.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-zinc-100 flex items-center justify-between text-[11px] font-black uppercase text-[#e6a600] tracking-wider">
                  <span>Mentorship Network</span>
                  <span>Advisory Board</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 3: ROADMAP STEPS (Light Theme) */}
        <section className="w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-zinc-200 bg-white relative">
          <div className="max-w-[1350px] mx-auto w-full">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
                The Incubation <span className="font-serif italic font-bold text-[#e6a600]">Pipeline</span>
              </h2>
              <p className="text-zinc-500 mt-3 text-sm md:text-base font-medium">
                How we nurture raw student concepts into operational, revenue-generating entities.
              </p>
            </div>

            {/* Stepper Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
              {incubationSteps.map((item, idx) => {
                const isSelected = idx <= activeTimeline;

                return (
                  <div 
                    key={item.step}
                    onClick={() => setActiveTimeline(idx)}
                    className={`bg-zinc-50 border rounded-2xl p-6 flex flex-col justify-between cursor-pointer transition duration-300 relative group shadow-xs hover:shadow-md overflow-hidden ${
                      isSelected ? "border-[#064ca2]/80 bg-white" : "border-zinc-200 hover:border-zinc-300"
                    }`}
                  >
                    <div>
                      <span className={`text-2xl font-black transition duration-300 ${isSelected ? "text-[#064ca2]" : "text-zinc-300"}`}>
                        {item.step}
                      </span>
                      <h3 className="text-base font-bold text-zinc-800 mt-4 leading-tight group-hover:text-[#064ca2] transition duration-150">
                        {item.title}
                      </h3>
                      <p className="text-zinc-500 text-[11px] mt-3 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-[9px] uppercase tracking-widest font-black text-zinc-400">
                      <span>Accurate ABI</span>
                      <span>Step {idx + 1}</span>
                    </div>

                    {/* Highlight indicator bar */}
                    <div 
                      className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition duration-300 ${
                        idx === activeTimeline ? "bg-[#e6a600]" : isSelected ? "bg-[#064ca2]/50" : "bg-transparent"
                      }`} 
                    />
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* SECTION: INCUBATOR FACILITIES & RESOURCES */}
        <section className="w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-zinc-200 bg-white relative">
          <div className="max-w-[1350px] mx-auto w-full">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] font-black uppercase text-[#064ca2] tracking-wider bg-[#064ca2]/10 px-4 py-1.5 rounded-full border border-[#064ca2]/20">
                Workspace & Infrastructure
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mt-5 tracking-tight">
                Premium Incubator <span className="font-serif italic font-bold text-[#e6a600]">Facilities</span>
              </h2>
              <p className="text-zinc-500 mt-3 text-sm md:text-base font-medium">
                Everything student startup teams need to build, test, and launch their products.
              </p>
            </div>

            {/* Facilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 shadow-xs hover:shadow-md hover:border-[#064ca2]/30 transition duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#064ca2]/10 flex items-center justify-center text-[#064ca2] mb-5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-zinc-900">24/7 Co-working Lab</h4>
                <p className="text-zinc-500 text-xs mt-2 leading-relaxed">
                  Dedicated desk spaces, high-speed WiFi, conference rooms, and interactive brainstorming walls.
                </p>
              </div>

              <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 shadow-xs hover:shadow-md hover:border-[#e6a600]/30 transition duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#e6a600]/10 flex items-center justify-center text-[#e6a600] mb-5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-zinc-900">Maker & Prototyping Lab</h4>
                <p className="text-zinc-500 text-xs mt-2 leading-relaxed">
                  Access to 3D printers, design software, hardware tools, and technical testing benches.
                </p>
              </div>

              <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 shadow-xs hover:shadow-md hover:border-[#064ca2]/30 transition duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#064ca2]/10 flex items-center justify-center text-[#064ca2] mb-5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-zinc-900">IPR & Legal Support</h4>
                <p className="text-zinc-500 text-xs mt-2 leading-relaxed">
                  Dedicated Intellectual Property Rights Cell helping student founders with patent filing, copywrites, and company registration.
                </p>
              </div>

              <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 shadow-xs hover:shadow-md hover:border-[#e6a600]/30 transition duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#e6a600]/10 flex items-center justify-center text-[#e6a600] mb-5">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-zinc-900">Venture Pitching</h4>
                <p className="text-zinc-500 text-xs mt-2 leading-relaxed">
                  Regular demo days, pitching sessions directly with angel syndicates, venture fund partners, and corporate sponsors.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION: ADVISORY BOARD & MENTORS */}
        <section className="w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-zinc-200 bg-zinc-50 relative">
          <div className="max-w-[1350px] mx-auto w-full">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] font-black uppercase text-[#e6a600] tracking-wider bg-[#e6a600]/10 px-4 py-1.5 rounded-full border border-[#e6a600]/20">
                Advisory Board
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mt-5 tracking-tight">
                Industry Mentors & <span className="font-serif italic font-bold text-[#064ca2]">Advisors</span>
              </h2>
              <p className="text-zinc-500 mt-3 text-sm md:text-base font-medium">
                Venture capitalists, legal counselors, and industry mentors directly guiding PGDM student entrepreneurs.
              </p>
            </div>

            {/* Mentors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mentors.map((mentor, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-zinc-200/85 rounded-2xl p-8 hover:border-zinc-300 transition duration-300 flex flex-col justify-between shadow-xs hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center gap-4">
                      {/* Stylized Avatar Icon */}
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm text-white font-sans"
                        style={{ backgroundColor: mentor.color }}
                      >
                        {mentor.initials}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-zinc-900">{mentor.name}</h4>
                        <p className="text-zinc-400 text-xs font-semibold mt-0.5">{mentor.role}</p>
                      </div>
                    </div>
                    <p className="text-zinc-500 text-xs mt-6 leading-relaxed font-medium">
                      {mentor.desc}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-zinc-100 flex items-center justify-between">
                    <span 
                      className="text-[9px] font-black uppercase px-2.5 py-1 rounded-full border tracking-wider" 
                      style={{ color: mentor.color, borderColor: `${mentor.color}40`, backgroundColor: `${mentor.color}10` }}
                    >
                      {mentor.specialty}
                    </span>
                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                      ABI Mentor
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 4: STUDENT STARTUPS SHOWCASE (Light Theme) */}
        <section id="startups" className="w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-zinc-200 relative bg-zinc-50">
          <div className="max-w-[1350px] mx-auto w-full">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Incubated <span className="font-serif italic font-bold text-[#064ca2]">Ventures</span>
              </h2>
              <p className="text-zinc-500 mt-3 text-sm md:text-base font-medium">
                Vibrant operational startups conceived and supported inside the campus.
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {studentStartups.map((startup, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-zinc-200/80 rounded-2xl p-6 hover:border-zinc-300 transition duration-300 flex flex-col justify-between shadow-xs hover:shadow-md"
                >
                  <div>
                    <span 
                      className="text-[9px] font-black uppercase px-2.5 py-1 rounded-full border tracking-wider" 
                      style={{ color: startup.color, borderColor: `${startup.color}40`, backgroundColor: `${startup.color}10` }}
                    >
                      {startup.tag}
                    </span>
                    <h3 className="text-xl font-bold text-zinc-800 mt-5">
                      {startup.name}
                    </h3>
                    <p className="text-zinc-400 text-[11px] mt-1 font-medium italic">
                      {startup.founder}
                    </p>
                    <p className="text-zinc-500 text-xs mt-4 leading-relaxed font-medium">
                      {startup.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-zinc-100 flex items-center justify-between text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                    <span>Incubator Alumni</span>
                    <svg className="w-4 h-4 text-[#e6a600]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION: INCUBATION CTA */}
        <section className="w-full py-20 bg-gradient-to-br from-[#064ca2] via-[#04336c] to-zinc-950 text-white relative overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-[#e6a600]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-20%] left-[-10%] w-96 h-96 bg-[#064ca2]/40 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
            <span className="text-[10px] font-black uppercase text-[#e6a600] tracking-widest bg-[#e6a600]/10 border border-[#e6a600]/25 px-4 py-1.5 rounded-full">
              Join the cohort 2026
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold mt-6 tracking-tight leading-tight">
              Have a Groundbreaking <span className="font-serif italic font-bold text-[#e6a600]">Startup Idea?</span>
            </h2>
            <p className="text-zinc-300 mt-4 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-medium">
              Accurate Business Incubator cell is accepting startup proposals. Pitch your idea, receive mentoring, and get allocated up to ₹10 Lakhs seed capital.
            </p>
            <div className="mt-8 flex justify-center">
              <a 
                href="mailto:incubator@accurate.in" 
                className="px-8 py-3.5 rounded-full bg-[#e6a600] hover:bg-[#c28c00] text-zinc-950 font-black text-xs uppercase tracking-wider transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer no-underline"
              >
                Pitch Your Idea Now
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 5: PARTNER LOGOS (Light Theme) */}
        <section className="w-full py-16 px-4 sm:px-6 lg:px-8 relative bg-white">
          <div className="max-w-[1350px] mx-auto w-full text-center">
            <span className="text-[10px] font-black uppercase text-[#064ca2] tracking-wider">Corporate Alliances</span>
            <h3 className="text-2xl font-bold text-zinc-900 mt-3">Prominent Recruitment & Synergy Partners</h3>
            
            {/* Logo grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 mt-10">
              {[
                "Capgemini", "TCS", "Wipro", "HDFC Bank", "ICICI Bank", "Genpact", 
                "Lenskart", "Tech Mahindra", "Amazon", "Infosys", "Byju's", "LG"
              ].map((brand, i) => (
                <div 
                  key={i} 
                  className="bg-zinc-50 border border-zinc-200 rounded-xl py-3 px-4 text-center text-xs font-black text-zinc-600 select-none shadow-xs hover:border-zinc-300 hover:text-zinc-900 transition duration-200"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
