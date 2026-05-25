export default function WhyAccurate() {
  return (
    <section id="why-accurate-section" className="w-full bg-zinc-50 py-24 px-4 sm:px-6 lg:px-8 relative border-t border-zinc-200">

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

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight">
            Why Accurate <span className="font-serif italic font-normal text-[#064ca2]">PGDM</span>
          </h2>
          <p className="text-zinc-500 mt-4 text-sm md:text-base font-medium">
            A data-backed approach to experiential education.
          </p>
        </div>

        {/* Flat 4-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">

          {/* CARD 1: Grants Given (Col 1, Row 1) */}
          <div className="bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-primary">1.5Cr+</h3>
              <h4 className="text-sm font-bold text-zinc-800 mt-2">Grants Given</h4>
              <p className="text-zinc-500 text-xs mt-1">to Students by Accurate PGDM</p>
            </div>

            {/* Logo grid */}
            <div className="grid grid-cols-2 gap-2 mt-6">
              {["PlaySuper", "Monarque", "Lexi's", "FNOR"].map((logo, i) => (
                <div key={i} className="bg-zinc-50 border border-zinc-100 rounded-xl py-2 px-1 text-center text-[10px] font-black text-zinc-700 select-none">
                  {logo}
                </div>
              ))}
            </div>
          </div>

          {/* CARD 2: Funding Secured (Col 2, Row 1) */}
          <div className="bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-primary">60Cr+</h3>
              <h4 className="text-sm font-bold text-zinc-800 mt-2">Funding Secured</h4>
              <p className="text-zinc-500 text-xs mt-1">by Student Ventures</p>
            </div>

            {/* Venture logos */}
            <div className="grid grid-cols-2 gap-2 mt-6">
              {["Chimera", "100X VC", "Accurate", "Shark Tank"].map((logo, i) => (
                <div key={i} className="bg-zinc-50 border border-zinc-100 rounded-xl py-2 px-1 text-center text-[10px] font-black text-zinc-700 select-none">
                  {logo}
                </div>
              ))}
            </div>
          </div>

          {/* CARD 3: PGP International (Col 3, Row 1) */}
          <div className="bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-primary">35+</h3>
              <h4 className="text-sm font-bold text-zinc-800 mt-2">International Offers</h4>
              <p className="text-zinc-500 text-xs mt-1">Placement Offers</p>
            </div>

            {/* Global Brand logos */}
            <div className="grid grid-cols-2 gap-2 mt-6">
              {["Careem", "Meta", "L&T", "Puffy"].map((logo, i) => (
                <div key={i} className="bg-zinc-50 border border-zinc-100 rounded-xl py-2 px-1 text-center text-[10px] font-black text-zinc-700 select-none">
                  {logo}
                </div>
              ))}
            </div>
          </div>

          {/* CARD 4: World-renowned Professors (Col 4, Row 1 & 2 - Tall Card) */}
          <div className="lg:row-span-2 bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-secondary">50+</h3>
              <h4 className="text-sm font-bold text-zinc-800 mt-2">Global Faculty</h4>
              <p className="text-zinc-500 text-xs mt-1">from World-renowned Institutions</p>

              <div className="space-y-2 mt-6">
                {["Harvard University", "NYU Stern", "Stanford University", "MIT Sloan", "Columbia University", "Cornell University"].map((uni, i) => (
                  <div key={i} className="bg-zinc-50 border border-zinc-100 rounded-xl py-2.5 px-3 flex items-center justify-between">
                    <span className="text-[10px] font-black text-zinc-700">{uni}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CARD 5: Average CTC (Col 1, Row 2) */}
          <div className="bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-secondary">33.39LPA</h3>
              <h4 className="text-sm font-bold text-zinc-800 mt-2">Average CTC</h4>
              <p className="text-zinc-500 text-xs mt-1">in PGDM Cohort</p>
            </div>

            <div className="mt-4 pt-4 border-t border-zinc-100 flex items-center justify-between">
              <span className="text-[10px] text-zinc-400 font-extrabold uppercase tracking-wider">Top 10% Average</span>
              <span className="text-xs font-black text-zinc-800">45.2 LPA</span>
            </div>
          </div>

          {/* CARD 6: CXOs on Campus (Col 2 & 3, Row 2 - Spans 2 Columns) */}
          <div className="lg:col-span-2 bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-secondary">250+</h3>
              <h4 className="text-sm font-bold text-zinc-800 mt-2">CXOs on Campus</h4>
              <p className="text-zinc-500 text-xs mt-1">from Diverse Industries</p>
            </div>

            {/* Brands grid */}
            <div className="grid grid-cols-4 gap-2 mt-6">
              {["Mastercard", "Amex", "McKinsey", "Microsoft", "Apple", "Reliance", "Tata", "BMW"].map((logo, i) => (
                <div key={i} className="bg-zinc-50 border border-zinc-100 rounded-xl py-2 px-1 text-center text-[10px] font-black text-zinc-600 truncate">
                  {logo}
                </div>
              ))}
            </div>
          </div>

          {/* CARD 7: Domestic & International Immersions (Col 1, 2, 3, Row 3 - Spans 3 Columns) */}
          <div className="lg:col-span-3 bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-secondary">50+</h3>
              <h4 className="text-sm font-bold text-zinc-800 mt-2">Domestic & International Immersions</h4>
            </div>

            {/* Immersion Logos */}
            <div className="flex flex-wrap gap-2 mt-6">
              {["Chai Point", "Snitch", "Nivia", "Govt. of India", "Farmley", "Porsche", "Heineken", "Philips", "Mercedes-Benz"].map((logo, i) => (
                <span key={i} className="bg-zinc-50 border border-zinc-100 text-zinc-700 text-[10px] font-black px-3.5 py-2 rounded-xl select-none">
                  {logo}
                </span>
              ))}
            </div>
          </div>

          {/* CARD 8: Corporate Partners (Col 4, Row 3) */}
          <div className="bg-white border border-zinc-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-primary">30+</h3>
              <h4 className="text-sm font-bold text-zinc-800 mt-2">Corporate Partners</h4>
              <p className="text-zinc-500 text-xs mt-1">Co-creating the Curriculum</p>
            </div>

            {/* Partner logos */}
            <div className="space-y-2 mt-6">
              {["Ola Krutrim", "PwC India", "KPMG", "NISM", "Upstox"].map((logo, i) => (
                <div key={i} className="bg-zinc-50 border border-zinc-100 rounded-xl py-2 px-3 text-left text-[10px] font-black text-zinc-700 select-none flex items-center justify-between">
                  <span>{logo}</span>
                  <svg className="w-3 h-3 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
