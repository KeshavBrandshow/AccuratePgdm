import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [vh, setVh] = useState(800); // Default fallback height
  const [isDesktop, setIsDesktop] = useState(false);
  const containerRef = useRef(null);
  const scrollTargetRef = useRef(0);
  const currentScrollRef = useRef(0);

  useEffect(() => {
    // Set initial scroll coordinates on mount
    scrollTargetRef.current = window.scrollY;
    currentScrollRef.current = window.scrollY;
    setScrollY(window.scrollY);
    setVh(window.innerHeight);
    setIsDesktop(window.innerWidth >= 1024);

    const handleScroll = () => {
      scrollTargetRef.current = window.scrollY;
    };

    let animationFrameId;
    const updateScrollPhysics = () => {
      // Lerping formula for smooth deceleration easing
      const diff = scrollTargetRef.current - currentScrollRef.current;
      if (Math.abs(diff) > 0.05) {
        currentScrollRef.current += diff * 0.08;
        setScrollY(currentScrollRef.current);
      } else if (currentScrollRef.current !== scrollTargetRef.current) {
        currentScrollRef.current = scrollTargetRef.current;
        setScrollY(scrollTargetRef.current);
      }
      animationFrameId = requestAnimationFrame(updateScrollPhysics);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    animationFrameId = requestAnimationFrame(updateScrollPhysics);

    const handleResize = () => {
      setVh(window.innerHeight);
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Calculate transition progress (0 to 1) based on scrolling through 1.2x viewport height
  const transitionRange = vh * 1.2;
  const p = Math.min(Math.max(scrollY / transitionRange, 0), 1);

  // Desktop Interpolated styles for the morphing video card (with padding on fully expanded state)
  const desktopVideoStyle = {
    position: "absolute",
    left: `calc((50% + 192px) * (1 - ${p}) + (50% - 461.5px) * ${p})`,
    top: `calc((50vh + 10px) * (1 - ${p}) + (170vh - 259.5px) * ${p})`, // slides down to center on scroll
    width: `calc(448px * (1 - ${p}) + 923px * ${p})`,
    height: `calc(253px * (1 - ${p}) + 519px * ${p})`,
    borderRadius: "24px",
    transition: "none", // Manual control based on scroll position
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const desktopVideoInnerStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "24px",
    objectFit: "cover",
  };

  // Mobile / Tablet fallback styles (simple scale and slide)
  const mobileVideoStyle = {
    position: "relative",
    width: "100%",
    aspectRatio: "4/3",
    borderRadius: "16px",
    transform: `scale(${1 + p * 0.05})`,
    opacity: 1,
  };

  // Styles for the Hero text panel (scrolls up and fades out gently)
  const textPanelStyle = {
    opacity: 1 - p * 1.5,
    pointerEvents: p > 0.6 ? "none" : "auto",
  };



  return (
    <div
      ref={containerRef}
      className="relative w-full bg-white text-zinc-900 overflow-hidden"
      style={{ minHeight: isDesktop ? "240vh" : "auto" }} // Give extra scroll track only for desktop transition
    >

      {/* Scroll Area: Holds both Hero and expanded Video Showcase */}
      <div className="relative w-full flex items-center px-4 sm:px-6 lg:px-8 pt-24 pb-10 min-h-[90vh] lg:min-h-[100vh]">

        {/* Ambient background image on load */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.85] pointer-events-none transition-opacity duration-700"
          style={{
            backgroundImage: `url('/hero.webp')`,
            opacity: 0.85 * (1 - p) // Fade out background image as video becomes background
          }}
        />

        {/* Dynamic Glow effects */}
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
          style={{ opacity: 1 - p }}
        />
        <div
          className="absolute bottom-10 left-10 w-96 h-96 bg-[#064ca2]/5 rounded-full blur-3xl pointer-events-none"
          style={{ opacity: 1 - p }}
        />

        {/* Maximum standard width container */}
        <div className="max-w-7xl w-full mx-auto relative h-full flex items-center z-10">

          {/* Main Hero grid layout for scroll-morphing */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center h-full relative">

            {/* Left Section: Hero Texts (fades out on scroll) */}
            <div
              className="lg:col-span-7 flex flex-col space-y-8 text-left pt-16 pb-6 lg:pt-24 relative"
              style={isDesktop ? textPanelStyle : {}}
            >
              {/* Soft light shade backdrop behind text for optimal legibility */}
              <div className="absolute -inset-x-12 -inset-y-10 bg-gradient-to-r from-white/90 via-white/60 to-transparent blur-2xl z-[-1] pointer-events-none" />

              <div className="space-y-2 select-none">
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-zinc-900 tracking-tight leading-none">
                  Learn
                </h1>
                <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-zinc-900 tracking-tight leading-none flex flex-wrap items-baseline gap-x-4">
                  <span className="font-sans">by</span>
                  <span className="relative inline-block font-serif italic font-normal text-zinc-900">
                    Doing

                    {/* Wavy Underlines under "Doing" */}
                    <svg
                      className="absolute -bottom-4 left-0 w-full h-5 overflow-visible"
                      viewBox="0 0 100 12"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 4 C 15 1, 20 8, 35 5 C 50 2, 55 9, 70 6 C 85 3, 90 9, 100 6"
                        stroke="#064ca2"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M0 7 C 15 4, 20 11, 35 8 C 50 5, 55 12, 70 9 C 85 6, 90 12, 100 9"
                        stroke="#10b981"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M0 10 C 15 7, 20 14, 35 11 C 50 8, 55 15, 70 12 C 85 9, 90 15, 100 12"
                        stroke="#e6a600"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </h2>
              </div>

              {/* Action Buttons Section */}
              <div className="flex flex-wrap items-center gap-4 pt-6">
                <button className="h-14 px-8 bg-zinc-900 hover:bg-zinc-800 text-white font-bold rounded-full flex items-center gap-3 shadow-md hover:shadow-lg transition duration-300 group cursor-pointer">
                  <span>Watch Intro Video</span>
                  <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <svg className="w-2.5 h-2.5 text-white fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </button>

                <button className="h-14 px-8 border border-zinc-300 hover:border-zinc-500 text-zinc-800 font-bold rounded-full flex items-center gap-3 hover:bg-zinc-50 transition duration-300 cursor-pointer">
                  <span>Download Yearbook</span>
                  <svg className="w-4 h-4 text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
              </div>

              {/* Accreditation Badges */}
              <div className="flex flex-wrap items-center gap-8 pt-10 border-t border-zinc-200 mt-6 max-w-lg">
                <div className="flex items-center gap-2">
                  <span className="bg-red-600 px-1.5 py-0.5 rounded-[3px] text-[10px] tracking-wider text-white font-black uppercase">
                    OBSIS
                  </span>
                  <span className="text-zinc-800 font-extrabold text-[11px] tracking-widest">IMPACT</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
                    <span className="text-rose-600 text-[8px] font-black">E</span>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-extrabold text-zinc-800 leading-none">EFMD</span>
                    <span className="text-[7px] text-zinc-500 leading-none tracking-wider">GLOBAL</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="bg-[#007bbf] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-[2px] leading-none">
                    AACSB
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] font-extrabold text-zinc-800 leading-none">Business Education</span>
                    <span className="text-[7px] text-zinc-500 leading-none tracking-wider">Alliance Member</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Section / Morphing Target Container */}
            {isDesktop ? (
              // Empty space reserving container in grid on load
              <div className="lg:col-span-5 h-[360px] pointer-events-none" />
            ) : (
              // Mobile view embeds the video directly inline
              <div className="w-full flex justify-center py-6">
                <div style={mobileVideoStyle} className="overflow-hidden border border-white/10 shadow-2xl">
                  <video
                    className="w-full h-full object-cover"
                    src="/vedio/accurate-video.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest bg-black/30 backdrop-blur-xs px-2.5 py-1 rounded border border-white/15">
                      Explore Our Campus
                    </span>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Absolute Floating Video Card (Strictly Desktop Morphing overlay) */}
        {isDesktop && (
          <div
            style={desktopVideoStyle}
            className="z-20 overflow-hidden border border-white/10 shadow-2xl group bg-black/40 backdrop-blur-md"
          >
            <div style={desktopVideoInnerStyle} className="relative overflow-hidden scale-105">
              {/* Campus Tour Looping Video */}
              <video
                className="w-full h-full object-cover"
                src="/vedio/accurate-video.mp4"
                autoPlay
                muted
                loop
                playsInline
              />

              {/* Video overlay mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
            </div>

            {/* Bottom labels (fades out as video expands completely) */}
            <div
              className="absolute bottom-5 left-6 flex items-center gap-3 transition-opacity duration-300"
              style={{ opacity: 1 - p * 3 }}
            >
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-white text-xs font-bold uppercase tracking-widest bg-black/10 backdrop-blur-xs px-3 py-1.5 rounded-md border border-white/10">
                Explore Our Campus
              </span>
            </div>

            {/* Micro scan animation line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/40 to-transparent -translate-y-full group-hover:animate-pulse" />
          </div>
        )}

      </div>
    </div>
  );
}
