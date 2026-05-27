import Head from "next/head";
import { useState, useEffect } from "react";

export default function StudentLifePage() {
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const slotLibraries = {
    slot1: [
      { src: "/campuslife/campuslife.webp", title: "Classroom Seminars & Group Work", tag: "Academic Workspaces" },
      { src: "/programs/pgdm.webp", title: "Interactive Case Discussion Rounds", tag: "Management Track" }
    ],
    slot2: [
      { src: "/programs/one.webp", title: "Guest Corporate Lectures", tag: "Industry Tour" },
      { src: "/programs/five.webp", title: "CEO Interaction Sessions", tag: "Leadership Connect" }
    ],
    slot3: [
      { src: "/campuslife/campuslife2.webp", title: "Peer Discussion Labs", tag: "Collaboration" },
      { src: "/programs/six.webp", title: "GD & Prep Chambers", tag: "Communication" }
    ],
    slot4: [
      { src: "/programs/two.webp", title: "Incubation Pitches", tag: "Incubation Hub" },
      { src: "/programs/four.webp", title: "ED-Cell Bootcamps", tag: "Entrepreneurship" }
    ],
    slot5: [
      { src: "/campuslife/campuslife3.webp", title: "Smart Lecture Halls & Labs", tag: "Campus Life" },
      { src: "/programs/mba.webp", title: "Auditorium Presentations", tag: "Events Venue" }
    ],
    slot6: [
      { src: "/programs/three.webp", title: "Digital Library Hub", tag: "Research & Media" },
      { src: "/programs/one.webp", title: "Quiet Study Cubicles", tag: "Self Study" }
    ],
    slot7: [
      { src: "/programs/four.webp", title: "Hostel & Sports Arena", tag: "Residency & Sports" },
      { src: "/programs/two.webp", title: "Gym & Recreation Halls", tag: "Fitness Hub" }
    ]
  };

  const [collageImages, setCollageImages] = useState({
    slot1: 0,
    slot2: 0,
    slot3: 0,
    slot4: 0,
    slot5: 0,
    slot6: 0,
    slot7: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const slots = ["slot1", "slot2", "slot3", "slot4", "slot5", "slot6", "slot7"];
      const randomSlot = slots[Math.floor(Math.random() * slots.length)];
      setCollageImages(prev => {
        const nextIndex = (prev[randomSlot] + 1) % slotLibraries[randomSlot].length;
        return {
          ...prev,
          [randomSlot]: nextIndex
        };
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const clubs = [
    {
      name: "Marketing Club (MarQ)",
      desc: "Organizes brand simulation games, advertising campaigns, and national level case study challenges to keep student marketers ahead of industry trends.",
      color: "#064ca2",
      badge: "Marketing & Strategy",
      colSpan: "md:col-span-2",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      )
    },
    {
      name: "Finance Club (Finacle)",
      desc: "Runs live mock trading sessions, valuation workshops, and financial modeling contests to prepare students for investment banking roles.",
      color: "#e6a600",
      badge: "Wealth & Valuation",
      colSpan: "md:col-span-1",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      name: "HR Club (Conexus)",
      desc: "Focuses on strategic management, peer leadership activities, mock negotiation rounds, and personality assessment workshops.",
      color: "#10b981",
      badge: "People & Leadership",
      colSpan: "md:col-span-1",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      name: "Cultural Club (Tarang)",
      desc: "The hub of creative expression. Manages annual college fests, theatrical productions, photography walks, music jams, and digital design contests.",
      color: "#8b5cf6",
      badge: "Arts & expression",
      colSpan: "md:col-span-2",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      )
    }
  ];

  return (
    <>
      <Head>
        <title>Vibrant Student Life & Campus Infrastructure | Accurate PGDM Greater Noida</title>
        <meta 
          name="description" 
          content="Explore campus life at Accurate Institute of Management and Technology. Take a virtual 3D tour, join student clubs, explore student housing, and discover our campus." 
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
                Accurate Student Experience
              </span>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-zinc-900 tracking-tight leading-tight">
                Where Ambition Meets <span className="font-serif italic font-bold text-[#064ca2]">Vibrant Culture</span>
              </h1>
              <p className="text-zinc-500 text-sm sm:text-base md:text-lg leading-relaxed font-medium max-w-xl">
                Accurate is more than a classroom. Explore student-led clubs, drive corporate panel meets, run fests, and build real-world leadership qualities in a highly social campus setting.
              </p>
              
              <div className="pt-4 flex flex-wrap gap-4">
                <a 
                  href="#tour-hub" 
                  className="px-6 py-3 rounded-full bg-[#064ca2] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#04336c] hover:shadow-[0_6px_20px_rgba(6,76,162,0.25)] transition-all duration-300 shadow-md"
                >
                  Virtual Campus Tour
                </a>
                <a 
                  href="#clubs-activities" 
                  className="px-6 py-3 rounded-full border border-zinc-300 text-zinc-700 bg-white font-bold text-xs uppercase tracking-wider hover:bg-zinc-50 transition duration-200"
                >
                  Student Clubs
                </a>
              </div>
            </div>

            {/* Right Asymmetrical Cards Pile */}
            <div className="lg:col-span-5 relative w-full h-[320px] md:h-[400px] flex items-center justify-center">
              {/* Box 1 (Blue Accent with Image Background) */}
              <div className="absolute top-6 left-6 w-[70%] h-[75%] rounded-2xl shadow-xl overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform duration-500 z-10">
                <img 
                  src="/campuslife/campuslife.webp" 
                  alt="Live Campus" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#064ca2]/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                  <span className="text-[10px] font-black uppercase tracking-wider text-cyan-300">Live Campus</span>
                  <div>
                    <h3 className="text-xl font-bold font-serif italic text-cyan-200">8+ active clubs</h3>
                    <p className="text-xs text-white/90 mt-2 font-medium">Empowering peer mentorship, strategy challenges, and leadership opportunities.</p>
                  </div>
                </div>
              </div>
              
              {/* Box 2 (Gold Accent with Image Background) */}
              <div className="absolute bottom-6 right-6 w-[70%] h-[70%] rounded-2xl shadow-2xl overflow-hidden transform rotate-6 hover:rotate-0 transition-transform duration-500 z-20">
                <img 
                  src="/campuslife/campuslife2.webp" 
                  alt="Experience Hub" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#e6a600]/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/10" />
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#e6a600]">Experience Hub</span>
                  <div>
                    <h3 className="text-xl font-bold font-serif italic text-[#e6a600]">100% smart campus</h3>
                    <p className="text-xs text-white/90 mt-2 font-medium">Equipped with central high-speed fiber lines, smart labs, and AV rooms.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: CAMPUS SNAPSHOTS (Vibrant Asymmetric Photo Collage) */}
        <section id="tour-hub" className="w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#064ca2] via-[#04336c] to-[#03234d] text-white border-b border-white/10 relative overflow-hidden">
          {/* Subtle grid mesh background */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute top-[-30%] left-[-20%] w-[600px] h-[600px] bg-[#e6a600]/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-[1350px] mx-auto w-full relative z-10">
            {/* Header */}
            <div className="max-w-3xl text-left space-y-4 mb-16">
              <span className="text-[10px] font-black uppercase text-[#e6a600] tracking-widest bg-[#e6a600]/10 border border-[#e6a600]/25 px-4 py-1.5 rounded-full">
                Campus Gallery
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                Vibrant Campus Life <span className="font-serif italic font-bold text-[#e6a600]">snapshots</span>
              </h2>
              <p className="text-zinc-200 text-sm sm:text-base font-medium max-w-xl">
                A glimpse into our daily student experience, corporate immersion tours, incubation pitch challenges, and hostel life.
              </p>
            </div>

            {/* Collage Grid Container */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto items-stretch">
              
              {/* Item 1: Wide & Tall (2 cols, 2 rows) */}
              <div 
                onClick={() => setSelectedImage(slotLibraries.slot1[collageImages.slot1])}
                className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden border border-white/10 group cursor-pointer h-[280px] sm:h-[360px] md:h-[420px]"
              >
                <img 
                  key={collageImages.slot1}
                  src={slotLibraries.slot1[collageImages.slot1].src} 
                  alt={slotLibraries.slot1[collageImages.slot1].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 animate-fadeImg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="text-[9px] font-black uppercase text-[#e6a600] tracking-widest bg-[#e6a600]/25 border border-[#e6a600]/40 px-2.5 py-1 rounded-full">
                    {slotLibraries.slot1[collageImages.slot1].tag}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white mt-2">
                    {slotLibraries.slot1[collageImages.slot1].title}
                  </h4>
                </div>
              </div>

              {/* Item 2: Tall (1 col, 2 rows) */}
              <div 
                onClick={() => setSelectedImage(slotLibraries.slot2[collageImages.slot2])}
                className="col-span-1 row-span-2 relative rounded-2xl overflow-hidden border border-white/10 group cursor-pointer h-[280px] sm:h-[360px] md:h-[420px]"
              >
                <img 
                  key={collageImages.slot2}
                  src={slotLibraries.slot2[collageImages.slot2].src} 
                  alt={slotLibraries.slot2[collageImages.slot2].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 animate-fadeImg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="text-[9px] font-black uppercase text-cyan-300 tracking-widest bg-cyan-300/25 border border-cyan-300/40 px-2.5 py-1 rounded-full">
                    {slotLibraries.slot2[collageImages.slot2].tag}
                  </span>
                  <h4 className="text-sm font-bold text-white mt-2">
                    {slotLibraries.slot2[collageImages.slot2].title}
                  </h4>
                </div>
              </div>

              {/* Item 3: Square (1 col, 1 row) */}
              <div 
                onClick={() => setSelectedImage(slotLibraries.slot3[collageImages.slot3])}
                className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden border border-white/10 group cursor-pointer h-[130px] sm:h-[170px] md:h-[200px]"
              >
                <img 
                  key={collageImages.slot3}
                  src={slotLibraries.slot3[collageImages.slot3].src} 
                  alt={slotLibraries.slot3[collageImages.slot3].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 animate-fadeImg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <h4 className="text-xs font-bold text-white">
                    {slotLibraries.slot3[collageImages.slot3].title}
                  </h4>
                </div>
              </div>

              {/* Item 4: Square (1 col, 1 row) */}
              <div 
                onClick={() => setSelectedImage(slotLibraries.slot4[collageImages.slot4])}
                className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden border border-white/10 group cursor-pointer h-[130px] sm:h-[170px] md:h-[200px]"
              >
                <img 
                  key={collageImages.slot4}
                  src={slotLibraries.slot4[collageImages.slot4].src} 
                  alt={slotLibraries.slot4[collageImages.slot4].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 animate-fadeImg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <h4 className="text-xs font-bold text-white">
                    {slotLibraries.slot4[collageImages.slot4].title}
                  </h4>
                </div>
              </div>

              {/* Item 5: Wide (2 cols, 1 row) */}
              <div 
                onClick={() => setSelectedImage(slotLibraries.slot5[collageImages.slot5])}
                className="col-span-2 row-span-1 relative rounded-2xl overflow-hidden border border-white/10 group cursor-pointer h-[130px] sm:h-[170px] md:h-[200px]"
              >
                <img 
                  key={collageImages.slot5}
                  src={slotLibraries.slot5[collageImages.slot5].src} 
                  alt={slotLibraries.slot5[collageImages.slot5].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 animate-fadeImg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[9px] font-black uppercase text-[#e6a600] tracking-widest bg-[#e6a600]/25 border border-[#e6a600]/40 px-2.5 py-1 rounded-full">
                    {slotLibraries.slot5[collageImages.slot5].tag}
                  </span>
                  <h4 className="text-sm font-bold text-white mt-1">
                    {slotLibraries.slot5[collageImages.slot5].title}
                  </h4>
                </div>
              </div>

              {/* Item 6: Square (1 col, 1 row) */}
              <div 
                onClick={() => setSelectedImage(slotLibraries.slot6[collageImages.slot6])}
                className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden border border-white/10 group cursor-pointer h-[130px] sm:h-[170px] md:h-[200px]"
              >
                <img 
                  key={collageImages.slot6}
                  src={slotLibraries.slot6[collageImages.slot6].src} 
                  alt={slotLibraries.slot6[collageImages.slot6].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 animate-fadeImg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <h4 className="text-xs font-bold text-white">
                    {slotLibraries.slot6[collageImages.slot6].title}
                  </h4>
                </div>
              </div>

              {/* Item 7: Square (1 col, 1 row) */}
              <div 
                onClick={() => setSelectedImage(slotLibraries.slot7[collageImages.slot7])}
                className="col-span-1 row-span-1 relative rounded-2xl overflow-hidden border border-white/10 group cursor-pointer h-[130px] sm:h-[170px] md:h-[200px]"
              >
                <img 
                  key={collageImages.slot7}
                  src={slotLibraries.slot7[collageImages.slot7].src} 
                  alt={slotLibraries.slot7[collageImages.slot7].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 animate-fadeImg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <h4 className="text-xs font-bold text-white">
                    {slotLibraries.slot7[collageImages.slot7].title}
                  </h4>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 3: CLUBS & CULTURE (Asymmetric Bento Grid) */}
        <section id="clubs-activities" className="w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-zinc-200 bg-white relative">
          <div className="max-w-[1350px] mx-auto w-full">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] font-black uppercase text-[#e6a600] tracking-wider bg-[#e6a600]/10 px-4 py-1.5 rounded-full border border-[#e6a600]/20">
                Clubs & Societies
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mt-5 tracking-tight">
                Student Leaders <span className="font-serif italic font-bold text-[#064ca2]">In Action</span>
              </h2>
              <p className="text-zinc-500 mt-3 text-sm md:text-base font-medium">
                Our clubs are entirely managed by student committees under academic mentoring, driving real-world management campaigns.
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {clubs.map((club, idx) => (
                <div 
                  key={idx}
                  className={`bg-zinc-50 border border-zinc-200/80 rounded-2xl p-8 hover:border-[#064ca2]/30 hover:bg-white hover:shadow-md transition duration-300 flex flex-col justify-between ${club.colSpan}`}
                >
                  <div>
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6"
                      style={{ backgroundColor: club.color }}
                    >
                      {club.icon}
                    </div>
                    <span 
                      className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md border"
                      style={{ color: club.color, borderColor: `${club.color}30`, backgroundColor: `${club.color}08` }}
                    >
                      {club.badge}
                    </span>
                    <h3 className="text-xl font-bold text-zinc-900 mt-5">{club.name}</h3>
                    <p className="text-zinc-500 text-xs mt-3 leading-relaxed">
                      {club.desc}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-zinc-200/60 flex justify-between items-center text-[10px] font-black uppercase text-zinc-400 tracking-wider">
                    <span>Accurate PGDM</span>
                    <span className="hover:text-zinc-800 transition duration-150 cursor-pointer">Register Profile &rarr;</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 4: CAMPUS INFRASTRUCTURE (Minimalist Horizontal Split Layout) */}
        <section className="w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b border-zinc-200 bg-zinc-50 relative">
          <div className="max-w-[1350px] mx-auto w-full">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Sticky Info Column */}
              <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-5">
                <span className="text-[10px] font-black uppercase text-[#064ca2] tracking-wider bg-[#064ca2]/10 px-4 py-1.5 rounded-full border border-[#064ca2]/20">
                  Infrastructure
                </span>
                <h2 className="text-3xl font-extrabold text-zinc-900 tracking-tight leading-tight">
                  Tailored For Academic <span className="font-serif italic font-bold text-[#e6a600] block">Excellence</span>
                </h2>
                <p className="text-zinc-500 text-xs sm:text-sm font-medium leading-relaxed">
                  Our facilities are planned to keep students focused, fit, and socially integrated throughout their residency on campus.
                </p>
                
                {/* Bullet stats */}
                <div className="pt-4 space-y-3">
                  <div className="flex items-center gap-3 text-xs font-semibold text-zinc-700">
                    <span className="w-2 h-2 rounded-full bg-[#064ca2]" />
                    AC Smart Lecture Theatres
                  </div>
                  <div className="flex items-center gap-3 text-xs font-semibold text-zinc-700">
                    <span className="w-2 h-2 rounded-full bg-[#e6a600]" />
                    Separate Boys & Girls Hostels
                  </div>
                  <div className="flex items-center gap-3 text-xs font-semibold text-zinc-700">
                    <span className="w-2 h-2 rounded-full bg-[#064ca2]" />
                    15,000+ volumes library catalog
                  </div>
                </div>
              </div>

              {/* Grid Column */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Facility 1 */}
                <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-xs hover:shadow-md transition duration-300 space-y-4">
                  <span className="text-[9px] font-black uppercase tracking-wider text-zinc-400 bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-full">
                    Acoustics & Visual
                  </span>
                  <h4 className="text-lg font-bold text-zinc-900">Smart Classrooms</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">
                    AC classrooms fitted with integrated display monitors, interactive whiteboards, and audio recorders for hybrid streaming capability.
                  </p>
                </div>

                {/* Facility 2 */}
                <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-xs hover:shadow-md transition duration-300 space-y-4">
                  <span className="text-[9px] font-black uppercase tracking-wider text-zinc-400 bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-full">
                    Resource Catalogue
                  </span>
                  <h4 className="text-lg font-bold text-zinc-900">Central Digital Library</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">
                    Includes printed books, academic magazines, and subscription terminals for major national research networks like Delnet & EBSCO.
                  </p>
                </div>

                {/* Facility 3 */}
                <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-xs hover:shadow-md transition duration-300 space-y-4">
                  <span className="text-[9px] font-black uppercase tracking-wider text-zinc-400 bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-full">
                    Residencies
                  </span>
                  <h4 className="text-lg font-bold text-zinc-900">Hostel Residencies</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">
                    Secure rooms with high-speed internet, regular laundry service, dining corridors serving healthy meals, and 24/7 security care.
                  </p>
                </div>

                {/* Facility 4 */}
                <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-xs hover:shadow-md transition duration-300 space-y-4">
                  <span className="text-[9px] font-black uppercase tracking-wider text-zinc-400 bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-full">
                    Sports & Gym
                  </span>
                  <h4 className="text-lg font-bold text-zinc-900">Recreation Center</h4>
                  <p className="text-zinc-500 text-xs leading-relaxed">
                    Equipped with indoor table tennis, pool tables, gymnasium halls, and outdoor courts for basketball, volleyball, and badminton.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* SECTION 5: SPLIT GLASSMOPRHISM CTA (Warm Light Accent Box) */}
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
                  Experience The Campus Firsthand. <br className="hidden sm:block" />
                  <span className="font-serif italic font-bold text-[#e6a600]">Reserve Your Visit.</span>
                </h2>
                <p className="text-zinc-500 text-xs sm:text-sm font-medium leading-relaxed max-w-xl">
                  Arrange a tour of the campus or coordinate a query slot with our student advisors to understand what makes learning at Accurate distinct.
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

      {/* Fullscreen Video Modal */}
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

          {/* Fullscreen Player Container */}
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

      {/* Fullscreen Image Lightbox Modal */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[9999] bg-black/95 flex flex-col justify-center items-center p-4 md:p-8 animate-fadeIn cursor-zoom-out"
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-[10000] text-white hover:text-[#e6a600] transition duration-300 w-12 h-12 flex items-center justify-center bg-black/60 rounded-full border border-zinc-700/80 cursor-pointer shadow-2xl"
            title="Close Gallery"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image Card Container */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="w-full max-w-4xl max-h-[85vh] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative bg-zinc-900 flex flex-col items-center justify-center cursor-default"
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[70vh] object-contain rounded-t-3xl"
            />
            {/* Title / Description Bar */}
            <div className="w-full bg-zinc-950 p-6 border-t border-white/10 text-left space-y-2">
              {selectedImage.tag && (
                <span className="text-[10px] font-black uppercase text-[#e6a600] tracking-widest bg-[#e6a600]/15 border border-[#e6a600]/25 px-3 py-1 rounded-full">
                  {selectedImage.tag}
                </span>
              )}
              <h3 className="text-xl font-bold text-white tracking-tight mt-2">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}

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
        @keyframes fadeImg {
          from {
            opacity: 0.4;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeImg {
          animation: fadeImg 0.8s ease-in-out forwards;
        }
      `}</style>
    </>
  );
}
