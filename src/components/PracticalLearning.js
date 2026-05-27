import { useState } from "react";

const cardsData = [
  {
    id: 1,
    badge: "Live Venture Challenge",
    title: "Start Your Journey by Building a Live Venture",
    highlightText: "Live Venture",
    highlightColor: "text-[#e6a600]",
    strokeColor: "#e6a600",
    description: "Form teams, Pitch startup ideas to EDIC, get incubation resources, master branding, digital campaigns, and run actual mock business units right here on campus.",
    targetText: "Seed Support",
    targetVal: "₹10 Lakhs",
    targetSub: "Incubation Pool",
    stat1Label: "Incubated Startups",
    stat1Val: "25+ Ventures",
    stat2Label: "Participating Teams",
    stat2Val: "80+ Teams",
    buttonText: "Download ED-Cell Report",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800",
    badgeColor: "bg-[#e6a600]/90",
    targetLabel: "Live Venture Challenge",
    type: "startup",
  },
  {
    id: 2,
    badge: "Corporate Projects",
    title: "Solve Real Business Problems for Recruiting Partners",
    highlightText: "Recruiting Partners",
    highlightColor: "text-[#064ca2]",
    strokeColor: "#064ca2",
    description: "Work directly with industry mentors on live consultative assignments. Present strategic recommendations directly to executives of prominent recruiting partners.",
    targetText: "Mentors",
    targetVal: "50+",
    targetSub: "Corporate Experts",
    stat1Label: "Live Projects Done",
    stat1Val: "120+ Projects",
    stat2Label: "Recruiting Brands",
    stat2Val: "150+ Brands",
    buttonText: "Download Corporate Project Handbook",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800",
    badgeColor: "bg-[#064ca2]/90",
    targetLabel: "Live Brand Consulting",
    type: "corporate",
  },
  {
    id: 3,
    badge: "Industrial Immersion",
    title: "Gain Practical Industry Exposure and Global Mindset",
    highlightText: "Global Mindset",
    highlightColor: "text-emerald-600",
    strokeColor: "#059669",
    description: "Visit prominent manufacturing and technology hubs, attend corporate workshops, and study operations of supply chain networks on-site.",
    targetText: "Visits",
    targetVal: "5+ Hubs",
    targetSub: "Corporate Hubs",
    stat1Label: "Corporate Partners",
    stat1Val: "50+ Partners",
    stat2Label: "Alumni Network",
    stat2Val: "20,000+ Global",
    buttonText: "Download Industrial Visit Brochure",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800",
    badgeColor: "bg-emerald-600/90",
    targetLabel: "Corporate Study Tour",
    type: "global",
  }
];

export default function PracticalLearning() {
  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150",
  ];

  return (
    <section id="practical-learning-section" className="w-full bg-zinc-50 py-24 px-4 sm:px-6 lg:px-8 relative border-t border-zinc-200">

      {/* Dynamic Background Glows */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Background Flow SVG */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <svg className="w-full h-full min-h-[900px]" viewBox="0 0 1440 1000" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M1500,80 C1100,100 800,450 400,600 C150,650 -50,850 -100,950" stroke="url(#prac-flow-grad-1)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="6 8" opacity="0.75" className="flow-dash" />
          <path d="M1500,100 C1100,120 800,470 400,620 C150,670 -50,870 -100,970" stroke="url(#prac-flow-grad-2)" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
          <circle cx="810" cy="420" r="4" fill="#e6a600" opacity="0.9" className="pulse-node" />
          <circle cx="810" cy="420" r="8" stroke="#e6a600" strokeWidth="1" fill="none" opacity="0.55" className="pulse-ring" />
          <circle cx="390" cy="610" r="4" fill="#064ca2" opacity="0.9" className="pulse-node" />
          <circle cx="390" cy="610" r="8" stroke="#064ca2" strokeWidth="1" fill="none" opacity="0.55" className="pulse-ring" />
          <defs>
            <linearGradient id="prac-flow-grad-1" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e6a600" />
              <stop offset="50%" stopColor="#064ca2" />
              <stop offset="100%" stopColor="#e6a600" />
            </linearGradient>
            <linearGradient id="prac-flow-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
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

        {/* Section Title */}
        <div className="mb-20 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight max-w-2xl">
            Learn <span className="font-serif italic font-bold text-[#e6a600]">
              'Practically'
            </span> Through Corporate Immersions
          </h2>
          <p className="text-zinc-500 mt-3 text-sm md:text-base font-medium">
            An industry-aligned pedagogy and continuous live projects to make you corporate-ready from day one.
          </p>
        </div>

        {/* Stack of Cards Container */}
        <div className="relative space-y-12 pb-20">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-zinc-200 rounded-[28px] sm:rounded-[32px] p-4 sm:p-6 md:p-8 lg:p-12 shadow-md hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-12 items-center lg:sticky lg:top-28 relative"
              style={{ zIndex: card.id * 10 }}
            >

              {/* Left Column: Visual Video Banner */}
              <div className="lg:col-span-6 relative aspect-video w-full rounded-2xl overflow-hidden bg-zinc-100 group shadow-sm">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Dark tint gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 flex flex-col justify-between p-6" />

                {/* Top Right Target Badge */}
                <div className={`absolute top-4 right-4 ${card.badgeColor} text-white text-[10px] font-black tracking-wider uppercase px-3 py-1 rounded-md`}>
                  {card.targetLabel}
                </div>

                {/* Center Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-lg group-hover:scale-110 group-hover:bg-white/40 transition duration-300 cursor-pointer">
                    <svg className="w-5 h-5 text-white fill-current translate-x-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Bottom Title Stats */}
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="text-[10px] text-zinc-300 font-extrabold uppercase tracking-widest leading-none block">{card.targetText}</span>
                  <span className="text-3xl sm:text-4xl font-black tracking-tight mt-1 block">
                    {card.targetVal} <span className="text-sm font-bold text-zinc-300">{card.targetSub}</span>
                  </span>
                </div>

              </div>

              {/* Right Column: Context & Stats */}
              <div className="lg:col-span-6 space-y-5 lg:space-y-8 text-left">

                {/* Pill Badge */}
                <div className="inline-block">
                  <span className="bg-zinc-100 text-zinc-800 text-[10px] font-black tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-zinc-200">
                    {card.badge}
                  </span>
                </div>

                {/* Title */}
                <div className="space-y-2 lg:space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight leading-snug">
                    {(() => {
                      const title = card.title;
                      const highlight = card.highlightText;
                      if (!highlight || !title.includes(highlight)) return title;
                      const parts = title.split(highlight);
                      return (
                        <>
                          {parts[0]}
                          <span className={`font-serif italic font-bold ${card.highlightColor}`}>
                            {highlight}
                          </span>
                          {parts[1]}
                        </>
                      );
                    })()}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Mini Stats Boxes */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">

                  {/* Stat 1 */}
                  <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-3.5 sm:p-5 flex flex-col justify-between h-28 lg:h-36">
                    <div>
                      <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">{card.stat1Label}</span>
                      <span className="text-xl sm:text-2xl font-black text-zinc-900 mt-1 block">{card.stat1Val}</span>
                    </div>

                    {/* SVG rising trend graph */}
                    <div className="w-full h-8 mt-2 overflow-visible">
                      <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                        <path
                          d="M0,28 Q20,24 40,16 T80,8 T100,2"
                          fill="none"
                          stroke={card.strokeColor}
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M0,28 Q20,24 40,16 T80,8 T100,2 L100,30 L0,30 Z"
                          fill={`url(#grad-accent-${card.id})`}
                          opacity="0.12"
                        />
                        <defs>
                          <linearGradient id={`grad-accent-${card.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor={card.strokeColor} />
                            <stop offset="100%" stopColor={card.strokeColor} stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  {/* Stat 2 */}
                  <div className="bg-zinc-50 border border-zinc-200/80 rounded-2xl p-3.5 sm:p-5 flex flex-col justify-between h-28 lg:h-36">
                    <div>
                      <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">{card.stat2Label}</span>
                      <span className="text-xl sm:text-2xl font-black text-zinc-900 mt-1 block">{card.stat2Val}</span>
                    </div>

                    {/* Visual stack indicator */}
                    <div className="flex items-center gap-1 sm:gap-1.5 mt-2">
                      <div className="flex -space-x-1.5 sm:-space-x-2 overflow-hidden shrink-0">
                        {avatars.map((img, i) => (
                          <img
                            key={i}
                            className={`inline-block h-5 w-5 sm:h-7 sm:w-7 rounded-full ring-1.5 ring-zinc-50 object-cover ${
                              i === 3 ? "hidden sm:inline-block" : ""
                            }`}
                            src={img}
                            alt="Student avatar"
                          />
                        ))}
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-extrabold text-zinc-500 whitespace-nowrap">Active Scholars</span>
                    </div>
                  </div>

                </div>

                {/* Action Download Report Button */}
                <div className="pt-2">
                  <button className="h-12 px-6 border border-zinc-300 hover:border-zinc-500 text-zinc-800 text-xs font-extrabold rounded-full flex items-center gap-2.5 hover:bg-zinc-50 transition duration-300 cursor-pointer group">
                    <span>{card.buttonText}</span>
                    <svg className="w-4 h-4 text-zinc-500 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
