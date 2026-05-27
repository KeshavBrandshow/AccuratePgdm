import { useState, useEffect } from "react";

const guestsData = [
  {
    id: 1,
    name: "Prof. R.S. Nirjar",
    title: "Ex-Chairman, AICTE",
    convocation: "Convocation Chief Guest",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600",
    quote: "Empowering management institutions to achieve high academic excellence.",
    tagColor: "from-cyan-500 to-blue-500"
  },
  {
    id: 2,
    name: "Sanjay Khaturia",
    title: "Channel Leader, IBM India",
    convocation: "Guest of Honor",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600",
    quote: "Digital transformation and industry-aligned skills are key for future leaders.",
    tagColor: "from-emerald-500 to-teal-500"
  },
  {
    id: 3,
    name: "Dr. Sandeep Marwah",
    title: "Founder, Noida Film City",
    convocation: "Distinguished Speaker",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600",
    quote: "Creativity and innovation should be integrated into modern business pedagogy.",
    tagColor: "from-[#e6a600] to-amber-600"
  },
  {
    id: 4,
    name: "Alok Kumar",
    title: "President, AkzoNobel India",
    convocation: "Industry Mentor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600",
    quote: "Practical exposure and corporate mentorship bridge the gap for young managers.",
    tagColor: "from-purple-500 to-indigo-500"
  },
  {
    id: 5,
    name: "Anshu Gupta",
    title: "Founder, Goonj (Magsaysay Awardee)",
    convocation: "Keynote Speaker",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600",
    quote: "Business must solve real social problems to create lasting national impact.",
    tagColor: "from-rose-500 to-orange-500"
  }
];

export default function DiverseCohort() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full bg-[#030a16] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Graphic Lines / Watermark */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="-10%" y1="10%" x2="110%" y2="90%" stroke="white" strokeWidth="120" strokeDasharray="20 20" />
          <line x1="-20%" y1="30%" x2="100%" y2="110%" stroke="white" strokeWidth="80" strokeDasharray="40 10" />
        </svg>
      </div>

      {/* Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">

        {/* Left Side Content */}
        <div className="w-full lg:w-5/12 text-left space-y-7">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Graduate with a<br />
              <span className="font-serif italic text-cyan-300 font-normal">Diverse</span>{" "}
              <span className="text-[#e6a600]">Cohort</span>
            </h2>
            <p className="text-blue-200/50 text-sm md:text-base font-medium max-w-md">
              Learn alongside top business minds and interact with legendary captains of industry who guide our cohort's vision.
            </p>
          </div>

          <button className="h-12 px-6 bg-white hover:bg-zinc-100 text-zinc-950 text-xs font-extrabold rounded-full flex items-center gap-3 transition duration-300 shadow-xl cursor-pointer group">
            <span>Watch PGDM Convocation Video</span>
            <svg className="w-4 h-4 text-zinc-900 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        {/* Right Side Accordion / Grid */}
        <div className="w-full lg:w-7/12">
          {isMobile ? (
            /* Mobile View: Horizontal Scrollable Cards */
            <div className="flex gap-4 overflow-x-auto pb-4 pt-2 snap-x snap-mandatory scrollbar-none">
              {guestsData.map((guest) => (
                <div
                  key={guest.id}
                  className="w-[260px] h-[380px] flex-shrink-0 relative rounded-2xl overflow-hidden shadow-2xl snap-center border border-blue-900/30"
                >
                  <img
                    src={guest.image}
                    alt={guest.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-2.5 py-1 text-[8px] font-black tracking-widest text-white uppercase rounded-md bg-zinc-900/90 border border-zinc-800">
                      {guest.convocation}
                    </span>
                  </div>

                  <div className="absolute bottom-0 inset-x-0 p-5 z-20 text-left space-y-1">
                    <h4 className="text-base font-extrabold text-white leading-tight">{guest.name}</h4>
                    <span className="text-[10px] font-bold text-[#e6a600] uppercase block leading-none">{guest.title}</span>
                    <p className="text-[10px] text-zinc-400 leading-snug italic pt-2 border-t border-zinc-800 mt-2">
                      "{guest.quote}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Desktop View: Interactive Flex Accordion Panels */
            <div className="flex gap-3 h-[420px] items-stretch">
              {guestsData.map((guest, index) => {
                const isHovered = hoveredIndex === index;
                const isAnyHovered = hoveredIndex !== null;

                return (
                  <div
                    key={guest.id}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-500 ease-in-out border border-blue-900/20 ${isHovered
                      ? "flex-[2.5] border-[#064ca2]/40"
                      : isAnyHovered
                        ? "flex-[0.7] opacity-60"
                        : "flex-1"
                      }`}
                  >
                    <img
                      src={guest.image}
                      alt={guest.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
                      style={{
                        transform: isHovered ? "scale(1.05)" : "scale(1)"
                      }}
                    />

                    {/* Shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent z-10" />

                    {/* Convocation Tag */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-2.5 py-1 text-[8px] font-black tracking-widest text-white uppercase rounded-md bg-zinc-900/90 border border-zinc-800 shadow-md">
                        {guest.convocation}
                      </span>
                    </div>

                    {/* Bottom Information */}
                    <div className="absolute bottom-0 inset-x-0 p-5 z-20 text-left">
                      <div className="transition-all duration-300">
                        <h4 className="text-lg font-black text-white leading-tight">{guest.name}</h4>
                        <span className="text-[10px] font-bold text-[#e6a600] uppercase block mt-0.5 tracking-wide">
                          {guest.title}
                        </span>
                      </div>

                      {/* Expandable Quote/Details */}
                      <div
                        className={`transition-all duration-500 overflow-hidden text-left ${isHovered ? "max-h-24 opacity-100 mt-3 pt-3 border-t border-zinc-800" : "max-h-0 opacity-0"
                          }`}
                      >
                        <p className="text-[10.5px] text-zinc-300 leading-relaxed italic">
                          "{guest.quote}"
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
