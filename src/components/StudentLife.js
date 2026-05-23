import { useState } from "react";

export default function StudentLife() {
  const [isTourOpen, setIsTourOpen] = useState(false);

  return (
    <section id="student-life-section" className="w-full bg-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-zinc-200">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Content Layout Grid */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch animate-fadeIn">
          
          {/* Left Grid: Student Life Cards */}
          <div className="w-full lg:w-7/12 flex flex-col gap-4">
            
            {/* Top Subgrid (Student Projects & Clubs) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 1: Student Projects */}
              <div className="group relative h-[220px] rounded-2xl overflow-hidden border border-zinc-200 shadow-xl cursor-pointer">
                <img
                  src="/campuslife/campuslife.webp"
                  alt="Student Projects"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                
                {/* Text Container with Hover Slide-up Description */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col text-left text-white transition-all duration-355 ease-out transform group-hover:-translate-y-1">
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

              {/* Card 2: Clubs & More */}
              <div className="group relative h-[220px] rounded-2xl overflow-hidden border border-zinc-200 shadow-xl cursor-pointer">
                <img
                  src="/campuslife/campuslife2.webp"
                  alt="Clubs & More"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                
                {/* Text Container with Hover Slide-up Description */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col text-left text-white transition-all duration-355 ease-out transform group-hover:-translate-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-sm sm:text-base tracking-tight">Clubs & more</span>
                    <svg className="w-4 h-4 text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                  <p className="text-[10px] text-zinc-300 leading-normal mt-1.5 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-16 transition-all duration-500 overflow-hidden">
                    Discover your passion, run student associations, and organize national events to build lifelong networks.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Wide Card (Dive into Entrepreneurship) */}
            <div className="group relative h-[240px] rounded-2xl overflow-hidden border border-zinc-200 shadow-xl cursor-pointer">
              <img
                src="/campuslife/campuslife3.webp"
                alt="Dive Into Entrepreneurship"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              
              {/* Text Container with Hover Slide-up Description */}
              <div className="absolute bottom-5 left-5 right-5 z-20 flex flex-col text-left text-white transition-all duration-355 ease-out transform group-hover:-translate-y-1">
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
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-zinc-900 text-left tracking-tight">Experience a Virtual Campus Tour</h3>
              
              {/* Matterport Tour Frame Mock (Click triggers fullscreen modal) */}
              <div 
                onClick={() => setIsTourOpen(true)}
                className="relative rounded-xl overflow-hidden border border-zinc-200 h-[340px] shadow-lg group cursor-pointer"
              >
                <video
                  src="/vedio/accurate-video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                <div className="absolute bottom-3 inset-x-3 flex justify-between items-center bg-white/95 border border-zinc-200 rounded-lg px-3 py-2 text-[9px] font-bold text-zinc-500 select-none shadow-md">
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
            
            <div className="text-left mt-6">
              <p className="text-xs text-zinc-600 leading-normal">
                Take a fully immersive 3D digital walk through our state-of-the-art academic workspaces, lecture theatres, and incubator labs.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Fullscreen Matterport Virtual Tour Modal */}
      {isTourOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/95 flex flex-col justify-center items-center p-4 md:p-8 animate-fadeIn">
          {/* Close Button */}
          <button 
            onClick={() => setIsTourOpen(false)}
            className="absolute top-4 right-4 z-[10000] text-white hover:text-[#e6a600] transition duration-300 w-12 h-12 flex items-center justify-center bg-black/60 rounded-full border border-zinc-700/80 cursor-pointer shadow-2xl"
            title="Close Tour"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Fullscreen Video Player Container */}
          <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl relative bg-black">
            <video
              src="/vedio/accurate-video.mp4"
              className="w-full h-full"
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}

      {/* Embedded CSS Animations */}
      <style jsx global>{`
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
