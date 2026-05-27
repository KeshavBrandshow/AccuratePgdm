import Head from "next/head";

export default function WhyAccuratePage() {
  const recruitmentPartners = [
    { name: "Amazon", color: "#ff9900", role: "E-Commerce Operations" },
    { name: "Capgemini", color: "#0070ad", role: "Consulting & Tech" },
    { name: "TCS", color: "#1a0dab", role: "Software Solutions" },
    { name: "Wipro", color: "#000000", role: "Digital Strategy" },
    { name: "HDFC Bank", color: "#004c8f", role: "Retail & Commercial Banking" },
    { name: "ICICI Bank", color: "#f37021", role: "Wealth Management" },
    { name: "Lenskart", color: "#000000", role: "Supply Chain & Ops" },
    { name: "Genpact", color: "#005fbc", role: "Process Automation" },
    { name: "Tech Mahindra", color: "#e21936", role: "Enterprise Software" },
    { name: "LG Electronics", color: "#a50034", role: "Product Marketing" }
  ];

  const scholarships = [
    {
      title: "Academic Merit Scholarship",
      benefit: "Up to 100% Tuition Waiver",
      condition: "Based on CAT/MAT/CMAT percentiles or graduation GPA excellence.",
      color: "#064ca2",
      badge: "Academic Excellence"
    },
    {
      title: "Defense Wards Scholarship",
      benefit: "10% to 25% Tuition Waiver",
      condition: "Dedicated to the children of active, retired, or martyred defense personnel.",
      color: "#e6a600",
      badge: "National Service"
    },
    {
      title: "Sports Achievement Waiver",
      benefit: "Up to 50% Tuition Waiver",
      condition: "Awarded to athletes who represented at State, National, or International levels.",
      color: "#10b981",
      badge: "Athletic Excellence"
    },
    {
      title: "Need-Based Financial Aid",
      benefit: "Flexible Tuition Support",
      condition: "Assisting deserving candidates from economically challenged backgrounds.",
      color: "#8b5cf6",
      badge: "Inclusive Access"
    }
  ];

  const facultyHighlights = [
    {
      group: "IIM & IIT Alumni",
      desc: "Core academic courses led by professors from India's premier institutes, bringing strategic frameworks and analytical rigor to classrooms.",
      badge: "Academic Rigor",
      color: "#064ca2",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      )
    },
    {
      group: "Industry CXOs & Mentors",
      desc: "Regular workshop modules, masterclasses, and corporate case discussions conducted by active industry leaders and executive directors.",
      badge: "Corporate Connect",
      color: "#e6a600",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      group: "Ph.D. Research Scholars",
      desc: "In-house research guides leading consulting assignments, case writing, and analytics scripts development in Python & R.",
      badge: "Research & Analytics",
      color: "#10b981",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  return (
    <>
      <Head>
        <title>Why Accurate PGDM | Top Placements, Scholarships & Elite Faculty</title>
        <meta 
          name="description" 
          content="Discover why Accurate Institute is the top PGDM college in Greater Noida. 7.0 LPA average package, up to 100% scholarships, corporate alliances, and IIM/IIT alumni mentors." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-zinc-50 font-sans pt-20">
        
        {/* SECTION 1: HERO (Asymmetric Split Layout) */}
        <section className="relative w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-100 overflow-hidden">
          {/* Floating abstract glowing orbs for depth */}
          <div className="absolute top-1/4 left-[-10%] w-[400px] h-[400px] bg-[#064ca2]/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-[#e6a600]/5 rounded-full blur-[120px] pointer-events-none" />

          {/* Future SVG Background Image aligned to the right */}
          <div 
            className="absolute inset-y-0 right-0 w-full lg:w-[65%] pointer-events-none select-none z-0 opacity-100"
            style={{
              backgroundImage: "url('/svgs/future.svg')",
              backgroundPosition: "right center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat"
            }}
          />

          <div className="max-w-[1350px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 text-left space-y-6">
              <span className="inline-flex items-center gap-1.5 bg-[#064ca2]/8 border border-[#064ca2]/15 text-[#064ca2] text-[10px] font-black tracking-widest uppercase px-3.5 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e6a600] animate-pulse" />
                Accurate Advantage
              </span>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-zinc-900 tracking-tight leading-tight">
                Transforming Ambition into <span className="font-serif italic font-bold text-[#064ca2]">Industry Leadership</span>
              </h1>
              <p className="text-zinc-500 text-sm sm:text-base md:text-lg leading-relaxed font-medium max-w-xl">
                Combining a data-backed curriculum, experiential corporate immersions, and an extensive global alumni network, Accurate PGDM prepares you to lead at the highest corporate levels.
              </p>
              
              <div className="pt-4 flex flex-wrap gap-4">
                <a 
                  href="#placement-dashboard" 
                  className="px-6 py-3 rounded-full bg-[#064ca2] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#04336c] hover:shadow-[0_6px_20px_rgba(6,76,162,0.25)] transition-all duration-300 shadow-md"
                >
                  Placement Records
                </a>
                <a 
                  href="#scholarships-board" 
                  className="px-6 py-3 rounded-full border border-zinc-300 text-zinc-700 bg-white font-bold text-xs uppercase tracking-wider hover:bg-zinc-50 transition duration-200"
                >
                  View Scholarships
                </a>
              </div>
            </div>

            {/* Right Overlapping Cards */}
            <div className="lg:col-span-5 relative w-full h-[320px] md:h-[400px] flex items-center justify-center">
              {/* Box 1 (Blue Card - Avg Placement) */}
              <div className="absolute top-6 left-6 w-[70%] h-[75%] rounded-2xl shadow-xl overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform duration-500 z-10">
                <img 
                  src="/programs/pgdm.webp" 
                  alt="Average Placement" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#064ca2]/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                  <span className="text-[10px] font-black uppercase tracking-wider text-cyan-300">Cohort Package</span>
                  <div>
                    <h3 className="text-3xl font-black tracking-tight text-white leading-none">7.0 LPA</h3>
                    <h4 className="text-sm font-bold text-cyan-200 mt-2">Average Package</h4>
                    <p className="text-xs text-white/90 mt-1 font-medium">The benchmark of corporate readiness at Accurate.</p>
                  </div>
                </div>
              </div>
              
              {/* Box 2 (Gold Card - Top 10%) */}
              <div className="absolute bottom-6 right-6 w-[70%] h-[70%] rounded-2xl shadow-2xl overflow-hidden transform rotate-6 hover:rotate-0 transition-transform duration-500 z-20">
                <img 
                  src="/programs/mba.webp" 
                  alt="Top 10% Placement" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#e6a600]/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#e6a600]">Elite Performers</span>
                  <div>
                    <h3 className="text-3xl font-black tracking-tight text-[#e6a600] leading-none">15.0 LPA</h3>
                    <h4 className="text-sm font-bold text-white mt-2">Top 10% Average Package</h4>
                    <p className="text-xs text-white/90 mt-1 font-medium">Proving high-potential growth tracks for ambitious leaders.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: PLACEMENT & RECRUITERS SHOWCASE */}
        <section id="placement-dashboard" className="w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#064ca2] via-[#04336c] to-[#03234d] text-white border-b border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute top-[-30%] left-[-20%] w-[600px] h-[600px] bg-[#e6a600]/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-[1350px] mx-auto w-full relative z-10">
            {/* Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
              <div className="lg:col-span-8 text-left space-y-4">
                <span className="text-[10px] font-black uppercase text-[#e6a600] tracking-widest bg-[#e6a600]/10 border border-[#e6a600]/25 px-4 py-1.5 rounded-full">
                  100% Placements
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                  Where Global Brands Recruited <span className="font-serif italic font-bold text-[#e6a600]">Talent</span>
                </h2>
                <p className="text-zinc-200 text-sm sm:text-base font-medium max-w-xl">
                  Our rigorous training structures ensure that placement pathways align seamlessly with leading corporate demands in technology, consulting, and finance.
                </p>
              </div>

              {/* Stats Highlight Panel */}
              <div className="lg:col-span-4 grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-left">
                  <span className="text-xs font-bold text-zinc-300 block">Highest Package</span>
                  <span className="text-2xl sm:text-3xl font-black text-[#e6a600] mt-1 block">85.0 LPA</span>
                  <span className="text-[10px] text-zinc-400 mt-1 block">International placement</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-left">
                  <span className="text-xs font-bold text-zinc-300 block">Recruiting Partners</span>
                  <span className="text-2xl sm:text-3xl font-black text-cyan-300 mt-1 block">250+</span>
                  <span className="text-[10px] text-zinc-400 mt-1 block">Active yearly alliances</span>
                </div>
              </div>
            </div>

            {/* Recruiter Logos Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {recruitmentPartners.map((partner, idx) => (
                <div 
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-center gap-1.5 mb-4">
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: partner.color }} />
                    <span className="font-bold text-base tracking-tight text-white group-hover:scale-105 transition-transform duration-300">{partner.name}</span>
                  </div>
                  <span className="text-[10px] uppercase font-black tracking-wider text-zinc-400 block">{partner.role}</span>
                </div>
              ))}
            </div>

            {/* Sector-wise Placement Matrix */}
            <div className="mt-16 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 text-left">
              <h3 className="text-xl font-bold mb-8 text-white border-b border-white/10 pb-4">Sector-Wise Placement Distribution</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { sector: "Financial Services", pct: "34%", role: "Portfolio Analyst, Wealth Associate" },
                  { sector: "IT & Digital Strategy", pct: "28%", role: "Business Consultant, ERP Lead" },
                  { sector: "E-Commerce & Marketing", pct: "20%", role: "Brand Manager, Performance Marketer" },
                  { sector: "Operations & Logistics", pct: "18%", role: "Supply Chain Analyst, Lean Six Sigma Associate" }
                ].map((sec, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-baseline justify-between border-b border-white/5 pb-2">
                      <span className="text-sm font-semibold text-zinc-300">{sec.sector}</span>
                      <span className="text-xl font-black text-cyan-300">{sec.pct}</span>
                    </div>
                    <p className="text-xs text-zinc-400 font-medium pt-1">{sec.role}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 3: MERITORIOUS SCHOLARSHIPS BOARD */}
        <section id="scholarships-board" className="w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-200 relative">
          <div className="max-w-[1350px] mx-auto w-full">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] font-black uppercase text-[#e6a600] tracking-wider bg-[#e6a600]/10 px-4 py-1.5 rounded-full border border-[#e6a600]/20">
                Tuition Assistance
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mt-5 tracking-tight">
                Meritorious Scholarships & <span className="font-serif italic font-bold text-[#064ca2]">Waivers</span>
              </h2>
              <p className="text-zinc-500 mt-3 text-sm md:text-base font-medium">
                Accurate promotes academic excellence and inclusivity by rewarding high achievers and supporting service family candidates.
              </p>
            </div>

            {/* Scholarships Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {scholarships.map((s, idx) => (
                <div 
                  key={idx}
                  className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 shadow-xs hover:shadow-md hover:border-zinc-300 transition duration-300 flex flex-col justify-between"
                  style={{ borderTop: `4px solid ${s.color}` }}
                >
                  <div className="space-y-4">
                    <span 
                      className="text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md border"
                      style={{ color: s.color, borderColor: `${s.color}30`, backgroundColor: `${s.color}08` }}
                    >
                      {s.badge}
                    </span>
                    <h3 className="text-lg font-bold text-zinc-900 pt-2">{s.title}</h3>
                    <p className="text-zinc-500 text-xs leading-relaxed">{s.condition}</p>
                  </div>
                  
                  <div className="mt-8 pt-4 border-t border-zinc-200/60 flex items-center justify-between text-zinc-900">
                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-wider">Benefit</span>
                    <span className="text-xs font-black tracking-tight" style={{ color: s.color }}>{s.benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: ELITE FACULTY & MENTORS */}
        <section id="faculty-board" className="w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-zinc-50 border-b border-zinc-200 relative">
          <div className="max-w-[1350px] mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Sticky Left Column */}
              <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-5">
                <span className="text-[10px] font-black uppercase text-[#064ca2] tracking-wider bg-[#064ca2]/10 px-4 py-1.5 rounded-full border border-[#064ca2]/20">
                  Elite Mentors
                </span>
                <h2 className="text-3xl font-extrabold text-zinc-900 tracking-tight leading-tight">
                  Guided By Global Academicians & <span className="font-serif italic font-bold text-[#e6a600] block">Leaders</span>
                </h2>
                <p className="text-zinc-500 text-xs sm:text-sm font-medium leading-relaxed">
                  Our classroom pedagogy is designed and implemented by a 30+ strong core faculty cohort from top global research and corporate backgrounds.
                </p>
                <div className="pt-4 space-y-3">
                  <div className="flex items-center gap-3 text-xs font-semibold text-zinc-700">
                    <span className="w-2 h-2 rounded-full bg-[#064ca2]" />
                    Case-based learning methodologies
                  </div>
                  <div className="flex items-center gap-3 text-xs font-semibold text-zinc-700">
                    <span className="w-2 h-2 rounded-full bg-[#e6a600]" />
                    Individual corporate mentorship slots
                  </div>
                  <div className="flex items-center gap-3 text-xs font-semibold text-zinc-700">
                    <span className="w-2 h-2 rounded-full bg-[#064ca2]" />
                    Real-time research project papers
                  </div>
                </div>
              </div>

              {/* Faculty Group Cards */}
              <div className="lg:col-span-8 space-y-6">
                {facultyHighlights.map((f, idx) => (
                  <div 
                    key={idx}
                    className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-xs hover:shadow-md transition duration-300 flex flex-col md:flex-row gap-6 items-start"
                  >
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0"
                      style={{ backgroundColor: f.color }}
                    >
                      {f.icon}
                    </div>
                    <div className="text-left space-y-2">
                      <span className="text-[9px] font-black uppercase text-zinc-400 tracking-widest">{f.badge}</span>
                      <h3 className="text-xl font-bold text-zinc-900 mt-1">{f.group}</h3>
                      <p className="text-zinc-500 text-xs leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: INTERACTIVE BENTO HIGHLIGHTS */}
        <section id="highlights-bento" className="w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-200 relative">
          <div className="max-w-[1350px] mx-auto w-full">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] font-black uppercase text-[#e6a600] tracking-wider bg-[#e6a600]/10 px-4 py-1.5 rounded-full border border-[#e6a600]/20">
                Core Differentiators
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mt-5 tracking-tight">
                Accurate At A <span className="font-serif italic font-bold text-[#064ca2]">Glance</span>
              </h2>
              <p className="text-zinc-500 mt-3 text-sm md:text-base font-medium">
                Pioneering credentials, incubation ecosystems, and global footprints making our PGDM pathway top-tier.
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              
              {/* Card 1: 100+ Startup Ideas */}
              <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 hover:border-[#064ca2]/30 hover:bg-white hover:shadow-md transition duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#e6a600]/10 border border-[#e6a600]/20 text-[#e6a600] flex items-center justify-center mb-6">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#e6a600] bg-[#e6a600]/8 px-2.5 py-1 rounded-md border border-[#e6a600]/15">
                    Incubation Ecosystem
                  </span>
                  <h3 className="text-2xl font-black text-zinc-900 mt-5">100+ Startups</h3>
                  <p className="text-zinc-500 text-xs mt-3 leading-relaxed">
                    Accurate Business Incubator (ABI) offers state-recognized incubation facilities, Government MSME support grants, and active seed fund access.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-zinc-200/60 flex items-center justify-between text-[10px] font-black uppercase text-zinc-400">
                  <span>ABI Incubator cell</span>
                  <a href="/ecosystem" className="text-[#e6a600] hover:text-[#c48d00] transition">Pitch Idea &rarr;</a>
                </div>
              </div>

              {/* Card 2: 20,000+ Alumni Network */}
              <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 hover:border-[#064ca2]/30 hover:bg-white hover:shadow-md transition duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#064ca2]/10 border border-[#064ca2]/20 text-[#064ca2] flex items-center justify-center mb-6">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#064ca2] bg-[#064ca2]/8 px-2.5 py-1 rounded-md border border-[#064ca2]/15">
                    Global Network
                  </span>
                  <h3 className="text-2xl font-black text-zinc-900 mt-5">20,000+ Alumni</h3>
                  <p className="text-zinc-500 text-xs mt-3 leading-relaxed">
                    Our extensive alumni network spans major global corporations, corporate hubs, and startup corridors across the Middle East, Europe, and Asia.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-zinc-200/60 flex justify-between items-center text-[10px] font-black uppercase text-zinc-400">
                  <span>Accurate Legacy</span>
                  <span>Connect Profile</span>
                </div>
              </div>

              {/* Card 3: 50+ Corporate Alliances */}
              <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 hover:border-[#064ca2]/30 hover:bg-white hover:shadow-md transition duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#10b981]/10 border border-[#10b981]/20 text-[#10b981] flex items-center justify-center mb-6">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0V9a2 2 0 012-2h2a2 2 0 012 2v12m-6 0h6" />
                    </svg>
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#10b981] bg-[#10b981]/8 px-2.5 py-1 rounded-md border border-[#10b981]/15">
                    Strategic Alliances
                  </span>
                  <h3 className="text-2xl font-black text-zinc-900 mt-5">50+ Alliances</h3>
                  <p className="text-zinc-500 text-xs mt-3 leading-relaxed">
                    Formal partnership grids with leading corporates to facilitate 2-month summer internships, live research projects, and corporate tours.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-zinc-200/60 flex justify-between items-center text-[10px] font-black uppercase text-zinc-400">
                  <span>Partnerships Hub</span>
                  <span>Explore Alliances</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 6: ADMISSIONS 2026 CTA */}
        <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
          {/* Subtle background warm circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#e6a600]/5 rounded-full blur-[110px] pointer-events-none" />

          <div className="max-w-[1150px] mx-auto bg-zinc-50 border border-zinc-200 rounded-3xl p-8 md:p-12 shadow-xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Text side */}
              <div className="lg:col-span-8 text-left space-y-4">
                <span className="text-[10px] font-black uppercase text-[#064ca2] tracking-widest bg-[#064ca2]/10 border border-[#064ca2]/15 px-4 py-1.5 rounded-full">
                  Admissions Open 2026
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight">
                  Start Your Leadership Journey. <br className="hidden sm:block" />
                  <span className="font-serif italic font-bold text-[#e6a600]">Submit Your Application.</span>
                </h2>
                <p className="text-zinc-500 text-xs sm:text-sm font-medium leading-relaxed max-w-xl">
                  Connect with our counselors, resolve registration details, and lock your GD & Interview slots today to secure your PGDM seat.
                </p>
              </div>

              {/* Action buttons side */}
              <div className="lg:col-span-4 flex flex-col gap-3 w-full sm:w-auto">
                <a 
                  href="/#admission-query-section" 
                  className="w-full text-center px-6 py-3.5 rounded-full bg-[#064ca2] hover:bg-[#04336c] text-white font-black text-xs uppercase tracking-wider transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Apply Online Now
                </a>
                <a 
                  href="mailto:admissions@accurate.in" 
                  className="w-full text-center px-6 py-3.5 rounded-full border border-zinc-300 text-zinc-700 bg-white hover:bg-zinc-50 font-black text-xs uppercase tracking-wider transition duration-300 shadow-xs hover:border-zinc-400"
                >
                  Email Admissions Office
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
