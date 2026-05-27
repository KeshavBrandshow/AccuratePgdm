import { useState } from "react";

export default function CorporateHub() {
  const [activeTab, setActiveTab] = useState("careers");

  const menuItems = [
    { id: "careers", label: "Explore Careers" },
    { id: "leadership", label: "Know the Leadership Team" },
    { id: "news", label: "In the News" },
    { id: "student-life", label: "Glimpse of Student Life" },
  ];

  return (
    <section id="ecosystem-section" className="w-full bg-[#f8fafc] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-zinc-200">
      {/* Subtle Light Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[160px] pointer-events-none" />

      <img
        src="/svgs/deco-right.svg"
        alt=""
        className="absolute top-8 right-4 w-36 h-36 md:w-52 md:h-52 opacity-100 pointer-events-none select-none z-10 animate-slow-spin"
      />

      {/* Decorative dot-grid accent - left */}
      {/* <img
        src="/svgs/deco-left.svg"
        alt=""
        className="absolute top-8 left-4 w-36 h-36 md:w-52 md:h-52 opacity-100 pointer-events-none select-none z-10"
      /> */}

      {/* Tailwind CSS Flip Keyframes & Animations inside style tag */}
      <style jsx global>{`

        @keyframes slowSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-slow-spin {
          animation: slowSpin 20s linear infinite;
        }

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


      <div className="max-w-7xl mx-auto relative z-10">

        {/* Main Section Header */}
        <div className="text-left mb-16">
          <span className="text-zinc-400 text-xs font-black uppercase tracking-widest block mb-2">CAMPUS & ECOSYSTEM</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight">
            Learn at One of India's<br />
            <span className="font-serif italic font-extrabold text-[#064ca2]">Biggest Corporate Hubs</span>
          </h2>
        </div>

        {/* Tab content switcher */}
        {activeTab === "student-life" ? (
          /* Tab 4: Glimpse of Student Life (Screenshot 2 layout) */
          <div className="flex flex-col lg:flex-row gap-8 items-stretch animate-fadeIn">

            {/* Left Grid: Student Life Cards */}
            <div className="w-full lg:w-7/12 flex flex-col gap-4">

              {/* Top Subgrid (Student Projects & Clubs) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Card 1: Student Projects */}
                <div className="group relative h-[220px] rounded-2xl overflow-hidden border border-zinc-200 shadow-xl cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600"
                    alt="Student Projects"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />

                  {/* Text Container with Hover Slide-up Description */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col text-left text-white transition-all duration-300 transform group-hover:-translate-y-1">
                    <div className="flex items-center gap-1.5">
                      <span className="font-extrabold text-sm sm:text-base tracking-tight">Student Projects</span>
                      <svg className="w-4 h-4 text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                    <p className="text-[10px] text-zinc-300 leading-normal mt-1.5 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-16 transition-all duration-500 overflow-hidden">
                      Work on live consulting assignments and real-world corporate challenges to gain deep hands-on business expertise.
                    </p>
                  </div>
                </div>

                {/* Card 2: Clubs & More (Matches new screenshot with top-right circle arrow and description) */}
                <div className="group relative h-[220px] rounded-2xl overflow-hidden border border-zinc-200 shadow-xl cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600"
                    alt="Clubs & More"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />

                  {/* Circular Arrow in Top Right */}
                  <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full border border-zinc-700/80 flex items-center justify-center text-zinc-300 bg-black/40 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
                    <svg className="w-3.5 h-3.5 transform group-hover:rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>

                  {/* Text Container with permanent info */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col text-left text-white">
                    <span className="font-extrabold text-sm sm:text-base tracking-tight mb-1">Clubs & more</span>
                    <p className="text-[10px] text-zinc-300 leading-normal">
                      Discover your passion and forge lifelong connections. Know more on how our clubs work and how you can participate.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Wide Card (Dive into Entrepreneurship) */}
              <div className="group relative h-[240px] rounded-2xl overflow-hidden border border-zinc-200 shadow-xl cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000"
                  alt="Dive Into Entrepreneurship"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />

                {/* Text Container with Hover Slide-up Description */}
                <div className="absolute bottom-5 left-5 right-5 z-20 flex flex-col text-left text-white transition-all duration-300 transform group-hover:-translate-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-black text-base sm:text-lg tracking-tight">Dive into Entrepreneurship</span>
                    <svg className="w-4 h-4 text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                  <p className="text-[11px] text-zinc-300 leading-normal mt-1.5 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-16 transition-all duration-500 overflow-hidden">
                    Pitch to real investors, secure incubation resources, and scale your student startup with direct mentorship.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Side: Virtual Campus Tour Mock */}
            <div className="w-full lg:w-5/12 flex flex-col justify-between border border-zinc-200 rounded-2xl p-6 bg-white shadow-2xl relative">
              <div className="space-y-4 mb-6">
                <h3 className="text-xl font-bold text-zinc-900 text-left tracking-tight">Experience a Virtual Campus Tour</h3>

                {/* Matterport Tour Frame Mock - enlarged height */}
                <div className="relative rounded-xl overflow-hidden border border-zinc-200 h-[340px] shadow-lg group">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800"
                    alt="Campus Interior Virtual Tour"
                    className="w-full h-full object-cover"
                  />
                  {/* Tour Interactive Overlay */}
                  <div className="absolute inset-0 bg-black/5 hover:bg-black/0 transition duration-300 flex items-center justify-center">
                    <button className="w-14 h-14 rounded-full bg-[#064ca2] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition duration-300 cursor-pointer">
                      <svg className="w-6 h-6 ml-1 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>

                  {/* Matterport Branding Tag */}
                  <div className="absolute top-3 left-3 bg-white/90 border border-zinc-200 rounded-md px-2 py-1 flex items-center gap-1.5 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                    <span className="text-[9px] text-zinc-700 font-bold tracking-wider">MATTERPORT 3D</span>
                  </div>

                  {/* Mock Matterport Bottom Controls */}
                  <div className="absolute bottom-3 inset-x-3 flex justify-between items-center bg-white/95 border border-zinc-200/80 rounded-lg px-3 py-2 text-[9px] font-bold text-zinc-600 select-none shadow-md">
                    <div className="flex items-center gap-2">
                      <span className="hover:text-zinc-900 cursor-pointer">Help</span>
                      <span>|</span>
                      <span className="hover:text-zinc-900 cursor-pointer">Terms</span>
                    </div>
                    {/* Matterport controls icons mock */}
                    <div className="flex items-center gap-3">
                      <span className="hover:text-zinc-900 cursor-pointer">🧍</span>
                      <span className="hover:text-zinc-900 cursor-pointer">📐</span>
                      <span className="hover:text-zinc-900 cursor-pointer">⛶</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tab Selector Links List inside active views to allow switching back */}
              <div className="border-t border-zinc-100 pt-4 mt-auto">
                <span className="text-zinc-400 text-[10px] font-bold tracking-wider uppercase block text-left mb-3">Campus Menu</span>
                <div className="flex flex-wrap gap-2">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`px-3 py-1.5 rounded-full text-[10px] font-extrabold transition duration-300 cursor-pointer ${activeTab === item.id
                          ? "bg-[#064ca2] text-white"
                          : "bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300"
                        }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>
        ) : (
          /* Tab 1, 2, 3: Explore Careers / Leadership / News (Screenshot 1 layout) */
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between animate-fadeIn">

            {/* Left Side Tab Detail Text */}
            <div className="w-full lg:w-[30%] text-left space-y-6">
              {activeTab === "careers" && (
                <>
                  <div className="space-y-3">
                    <span className="text-[10px] font-black tracking-widest text-[#064ca2] uppercase">ASIA'S LARGEST EDUCATION HUB</span>
                    <h3 className="text-3xl font-extrabold text-zinc-900 tracking-tight leading-tight">
                      Knowledge Park III<br />
                      <span className="font-serif italic text-[#064ca2] font-bold">Greater Noida</span>
                    </h3>
                  </div>
                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                    Situated in the heart of Delhi NCR's premium educational and corporate hub, adjacent to the Noida Expressway corridor with companies like HCL, Wipro, and LG nearby.
                  </p>
                </>
              )}

              {activeTab === "leadership" && (
                <>
                  <div className="space-y-3">
                    <span className="text-[10px] font-black tracking-widest text-emerald-600 uppercase">LED BY INDUSTRY CAPTAINS</span>
                    <h3 className="text-3xl font-extrabold text-zinc-900 tracking-tight leading-tight">
                      Veteran Directors &<br />
                      <span className="font-serif italic text-emerald-600 font-normal">Policy Makers</span>
                    </h3>
                  </div>
                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                    Our board members bring rich experience from government policy, top business houses, and global investment banking to build a curriculum for tomorrow.
                  </p>
                </>
              )}

              {activeTab === "news" && (
                <>
                  <div className="space-y-3">
                    <span className="text-[10px] font-black tracking-widest text-cyan-600 uppercase">MAKING GLOBAL HEADLINES</span>
                    <h3 className="text-3xl font-extrabold text-zinc-900 tracking-tight leading-tight">
                      Recognized in top<br />
                      <span className="font-serif italic text-cyan-600 font-normal">Business Media</span>
                    </h3>
                  </div>
                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                    Accurate PGDM is constantly lauded for its placement track record, tech-focused pedagogy, and corporate integration by leading publications.
                  </p>
                </>
              )}
            </div>

            {/* Center Image Canvas - enlarged sizes */}
            <div className="w-full lg:w-[40%] flex justify-center">
              <div className="w-full max-w-[420px] h-[480px] rounded-2xl overflow-hidden border border-zinc-200 shadow-2xl relative group">
                {activeTab === "careers" && (
                  <img
                    src="/programs/pgdm.webp"
                    alt="Knowledge Park Campus"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                {activeTab === "leadership" && (
                  <img
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800"
                    alt="Leadership Presentation"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                {activeTab === "news" && (
                  <img
                    src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800"
                    alt="News and Media"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm border border-zinc-200/80 rounded-xl p-3 text-left shadow-sm">
                  <span className="text-[8px] font-black text-[#064ca2] uppercase tracking-wider block">ACCURATE ADVANTAGE</span>
                  <span className="text-[11px] font-bold text-zinc-900 block mt-0.5 leading-snug">
                    {activeTab === "careers" && "Knowledge Park Campus Building"}
                    {activeTab === "leadership" && "Corporate Council & Industry Board"}
                    {activeTab === "news" && "Academic Leadership Highlights"}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side Vertical Navigation Menu */}
            <div className="w-full lg:w-[30%] flex flex-col text-left">
              {menuItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className="border-b border-zinc-200 py-6 flex items-center justify-between group cursor-pointer transition-all duration-300"
                  >
                    <span
                      className={`text-sm sm:text-base font-extrabold tracking-tight transition duration-300 ${isActive
                          ? "text-[#064ca2]"
                          : "text-zinc-500 group-hover:text-zinc-900"
                        }`}
                    >
                      {item.label}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${isActive
                          ? "bg-[#064ca2] border-[#064ca2] text-white"
                          : "border-zinc-300 text-zinc-500 group-hover:border-zinc-900 group-hover:text-zinc-900"
                        }`}
                    >
                      <svg
                        className="w-3.5 h-3.5 transform group-hover:rotate-45 transition-transform duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        )}

      </div>

      {/* Embedded CSS Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease forwards;
        }
      `}</style>
    </section>
  );
}
