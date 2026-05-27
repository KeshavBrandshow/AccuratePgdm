export default function WhyAccurate() {
  return (
    <section id="why-accurate-section" className="w-full bg-zinc-50 py-12 lg:py-20 px-4 sm:px-6 lg:px-8 relative border-t border-zinc-200 lg:min-h-screen flex flex-col justify-center overflow-hidden">

      {/* Background Accent Glows */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Background Flow SVG */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <svg className="w-full h-full min-h-[800px]" viewBox="0 0 1440 1000" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M1500,80 C1100,100 800,450 400,500 C150,520 -50,750 -100,850" stroke="url(#why-flow-grad-1)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="6 8" opacity="0.75" className="flow-dash" />
          <path d="M1500,100 C1100,120 800,470 400,520 C150,540 -50,770 -100,870" stroke="url(#why-flow-grad-2)" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
          <circle cx="780" cy="400" r="4" fill="#e6a600" opacity="0.9" className="pulse-node" />
          <circle cx="780" cy="400" r="8" stroke="#e6a600" strokeWidth="1" fill="none" opacity="0.55" className="pulse-ring" />
          <circle cx="360" cy="510" r="4" fill="#064ca2" opacity="0.9" className="pulse-node" />
          <circle cx="360" cy="510" r="8" stroke="#064ca2" strokeWidth="1" fill="none" opacity="0.55" className="pulse-ring" />
          <defs>
            <linearGradient id="why-flow-grad-1" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e6a600" />
              <stop offset="50%" stopColor="#064ca2" />
              <stop offset="100%" stopColor="#e6a600" />
            </linearGradient>
            <linearGradient id="why-flow-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#064ca2" />
              <stop offset="60%" stopColor="#e6a600" />
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

      <div className="max-w-[1350px] mx-auto relative z-10 w-full">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight">
            Why Accurate <span className="font-serif italic font-bold text-[#064ca2]">PGDM</span>
          </h2>
          <p className="text-zinc-500 mt-4 text-sm md:text-base font-medium">
            A data-backed approach to experiential education.
          </p>
        </div>

        {/* Bento Grid Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-4 gap-6 items-stretch w-full">

          {/* LEFT CONTAINER: Columns 1-3 */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 lg:gap-4 gap-6">

            {/* CARD 5: Average CTC (Col 1, Row 1) */}
            <div className="bg-white border border-zinc-200/80 rounded-2xl lg:p-4 p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl lg:text-3.5xl font-black text-[#064ca2] tracking-tight leading-none">7.0 LPA</h3>
                <h4 className="text-xs lg:text-sm font-bold text-zinc-800 lg:mt-2 mt-3">Average CTC</h4>
                <p className="text-zinc-500 text-[11px] mt-0.5">in PGDM Cohort</p>
              </div>

              <div className="lg:mt-3 lg:pt-3 mt-4 pt-4 border-t border-zinc-200/60 flex items-center justify-between">
                <span className="text-[9px] text-zinc-400 font-extrabold uppercase tracking-wider">Top 10% Average</span>
                <span className="text-xs font-black text-zinc-800">15.0 LPA</span>
              </div>
            </div>

            {/* CARD 1: Scholarships (Col 2, Row 1) */}
            <div className="bg-white border border-zinc-200/80 rounded-2xl lg:p-4 p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl lg:text-3.5xl font-black text-[#064ca2] tracking-tight leading-none">100%</h3>
                <h4 className="text-xs lg:text-sm font-bold text-zinc-800 lg:mt-2 mt-3">Scholarships</h4>
                <p className="text-zinc-500 text-[11px] mt-0.5">To Meritorious Students</p>
              </div>

              {/* Logo grid */}
              <div className="grid grid-cols-2 gap-1.5 lg:mt-3 mt-5">
                {["Academic", "Sports", "Defense", "Need-Based"].map((logo, i) => (
                  <div key={i} className="bg-zinc-50 border border-zinc-200/50 rounded-xl lg:py-2 py-3 px-1 text-center text-[10px] font-black text-zinc-700 select-none shadow-xs hover:bg-zinc-100 hover:border-zinc-300 transition duration-150">
                    {logo}
                  </div>
                ))}
              </div>
            </div>

            {/* CARD 2: ED-Cell Incubation (Col 3, Row 1) */}
            <div className="bg-white border border-zinc-200/80 rounded-2xl lg:p-4 p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl lg:text-3.5xl font-black text-[#e6a600] tracking-tight leading-none">100+</h3>
                <h4 className="text-xs lg:text-sm font-bold text-zinc-800 lg:mt-2 mt-3">Startup Ideas</h4>
                <p className="text-zinc-500 text-[11px] mt-0.5">Mentored by ED Cell & ABI</p>
              </div>

              {/* Venture logos */}
              <div className="grid grid-cols-2 gap-1.5 lg:mt-3 mt-5">
                {["ABI Incubator", "MSME Support", "IPR Cell", "Seed Capital"].map((logo, i) => (
                  <div key={i} className="bg-zinc-50 border border-zinc-200/50 rounded-xl lg:py-2 py-3 px-1 text-center text-[10px] font-black text-zinc-700 select-none shadow-xs hover:bg-zinc-100 hover:border-zinc-300 transition duration-150">
                    {logo}
                  </div>
                ))}
              </div>
            </div>

            {/* CARD 6: Corporate Leaders (Col 1 & 2, Row 2 - Spans 2 Columns) */}
            <div className="md:col-span-2 bg-white border border-zinc-200/80 rounded-2xl lg:p-4 p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl lg:text-3.5xl font-black text-[#e6a600] tracking-tight leading-none">150+</h3>
                <h4 className="text-xs lg:text-sm font-bold text-zinc-800 lg:mt-2 mt-3">Corporate Speakers</h4>
                <p className="text-zinc-500 text-[11px] mt-0.5">from Diverse Industries</p>
              </div>

              {/* Brands grid (8 logos in a 4x2 grid) */}
              <div className="grid grid-cols-4 gap-1.5 lg:mt-3 mt-5">
                {[
                  { name: "Capgemini", color: "#0070ad" },
                  { name: "Infosys", color: "#007cc3" },
                  { name: "TCS", color: "#1a0dab" },
                  { name: "Wipro", color: "#000000" },
                  { name: "Byju's", color: "#800080" },
                  { name: "ICICI Bank", color: "#f37021" },
                  { name: "HDFC Bank", color: "#004c8f" },
                  { name: "LG", color: "#a50034" }
                ].map((logo, i) => (
                  <div key={i} className="bg-zinc-50 border border-zinc-200/50 rounded-xl lg:py-2 py-3 px-1 text-center text-[9px] font-black text-zinc-700 select-none shadow-xs hover:bg-zinc-100 hover:border-zinc-300 transition duration-150 flex items-center justify-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: logo.color }} />
                    <span className="truncate">{logo.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CARD 3: Alumni Network (Col 3, Row 2) */}
            <div className="bg-white border border-zinc-200/80 rounded-2xl lg:p-4 p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl lg:text-3.5xl font-black text-[#064ca2] tracking-tight leading-none">20,000+</h3>
                <h4 className="text-xs lg:text-sm font-bold text-zinc-800 lg:mt-2 mt-3">Alumni Network</h4>
                <p className="text-zinc-500 text-[11px] mt-0.5">Across Top Global Corporate Hubs</p>
              </div>

              {/* Global Brand logos */}
              <div className="grid grid-cols-2 gap-1.5 lg:mt-3 mt-5">
                {["HDFC Bank", "TCS", "ICICI Bank", "Genpact"].map((logo, i) => (
                  <div key={i} className="bg-zinc-50 border border-zinc-200/50 rounded-xl lg:py-2 py-3 px-1 text-center text-[10px] font-black text-zinc-700 select-none shadow-xs hover:bg-zinc-100 hover:border-zinc-300 transition duration-150">
                    {logo}
                  </div>
                ))}
              </div>
            </div>

            {/* CARD 8: Recruitment Partners (Col 1, 2, 3, Row 3 - Spans 3 Columns) */}
            <div className="md:col-span-3 bg-white border border-zinc-200/80 rounded-2xl lg:p-4 p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl lg:text-3.5xl font-black text-[#064ca2] tracking-tight leading-none">100% Placements</h3>
                <h4 className="text-xs lg:text-sm font-bold text-zinc-800 lg:mt-1 mt-3">Prominent Recruitment & Corporate Partners</h4>
              </div>

              {/* Immersion Logos */}
              <div className="flex flex-wrap gap-1.5 lg:mt-3 mt-5">
                {[
                  { name: "Capgemini", color: "#0070ad" },
                  { name: "TCS", color: "#1a0dab" },
                  { name: "Wipro", color: "#000000" },
                  { name: "HDFC Bank", color: "#004c8f" },
                  { name: "ICICI Bank", color: "#f37021" },
                  { name: "Lenskart", color: "#000000" },
                  { name: "Genpact", color: "#005fbc" },
                  { name: "Tech Mahindra", color: "#e21936" },
                  { name: "Amazon", color: "#ff9900" }
                ].map((logo, i) => (
                  <span key={i} className="bg-zinc-50 border border-zinc-200/50 text-zinc-800 text-[9px] font-black lg:px-2.5 lg:py-1.5 px-4 py-2.5 rounded-xl select-none shadow-xs hover:bg-zinc-100 hover:border-zinc-300 transition duration-150 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: logo.color }} />
                    {logo.name}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT CONTAINER: Column 4 */}
          <div className="lg:col-span-1 flex flex-col lg:gap-4 gap-6 h-full">

            {/* CARD 4: Experienced Faculty (Col 4, Row 1 & 2 - Tall Card) */}
            <div className="flex-1 bg-white border border-zinc-200/80 rounded-2xl lg:p-4 p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl lg:text-3.5xl font-black text-[#064ca2] tracking-tight leading-none">30+</h3>
                <h4 className="text-xs lg:text-sm font-bold text-zinc-800 lg:mt-2 mt-3">Experienced Faculty</h4>
                <p className="text-zinc-500 text-[11px] mt-0.5">from Top Institutions & Corporates</p>

                <div className="lg:space-y-1.5 space-y-2 lg:mt-3 mt-6">
                  {[
                    { name: "IIM Alumni", color: "#005a9c" },
                    { name: "IIT Graduates", color: "#eb001b" },
                    { name: "Corporate Mentors", color: "#000000" },
                    { name: "Ph.D. Scholars", color: "#008200" },
                    { name: "Research Authors", color: "#db5311" },
                    { name: "Industry Experts", color: "#57068c" }
                  ].map((uni, i) => (
                    <div key={i} className="bg-zinc-50 border border-zinc-200/50 rounded-xl lg:py-2 lg:px-3 py-3 px-4 flex items-center justify-between shadow-xs hover:bg-zinc-100 hover:border-zinc-300 transition duration-150">
                      <span className="text-[10px] font-black text-zinc-700">{uni.name}</span>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: uni.color }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CARD 7: Corporate Alliances (Col 4, Row 3) */}
            <div className="flex-1 bg-white border border-zinc-200/80 rounded-2xl lg:p-4 p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl lg:text-3.5xl font-black text-[#e6a600] tracking-tight leading-none">50+</h3>
                <h4 className="text-xs lg:text-sm font-bold text-zinc-800 lg:mt-2 mt-3">Corporate Alliances</h4>
                <p className="text-zinc-500 text-[11px] mt-0.5">For Internship & Case Studies</p>
              </div>

              {/* Partner logos */}
              <div className="lg:space-y-1.5 space-y-2 lg:mt-3 mt-6">
                {[
                  { name: "HDFC Bank", color: "#004c8f" },
                  { name: "TCS", color: "#1a0dab" },
                  { name: "Wipro", color: "#000000" },
                  { name: "ICICI Bank", color: "#f37021" },
                  { name: "Genpact", color: "#005fbc" }
                ].map((logo, i) => (
                  <div key={i} className="bg-zinc-50 border border-zinc-200/50 rounded-xl lg:py-2 lg:px-3 py-3 px-4 text-left text-[10px] font-black text-zinc-700 select-none flex items-center justify-between shadow-xs hover:bg-zinc-100 hover:border-zinc-300 transition duration-150">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: logo.color }} />
                      <span>{logo.name}</span>
                    </div>
                    <svg className="w-3 h-3 text-zinc-400" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                    </svg>
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
