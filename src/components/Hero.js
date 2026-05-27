import { useState, useEffect, useRef } from "react";

// Configuration variables for managing scroll animation speed and smoothness
const SCROLL_TRACK_FACTOR = 0.7; // How much you need to scroll to finish the animation (e.g. 0.7x viewport height. Smaller = faster animation)
const EASING_SPEED_DOWN = 0.08;    // Easing speed when scrolling down (smaller = smoother, floaty feel)
const EASING_SPEED_UP = 0.12;      // Easing speed when scrolling back up (larger = snaps back quickly, more responsive)

export default function Hero() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const containerRef = useRef(null);
  const textPanelRef = useRef(null);
  const scrollTargetRef = useRef(0);
  const currentScrollRef = useRef(0);

  // Optimized animation references
  const bgRef = useRef(null);
  const glow1Ref = useRef(null);
  const glow2Ref = useRef(null);
  const videoCardRef = useRef(null);
  const videoLabelRef = useRef(null);
  const mobileVideoRef = useRef(null);

  // Viewport dimensions cache to prevent Layout Thrashing (Forced Reflow)
  const vhRef = useRef(0);
  const vwRef = useRef(0);

  useEffect(() => {
    // Initial dimensions cache on mount
    vhRef.current = window.innerHeight;
    vwRef.current = window.innerWidth;
    scrollTargetRef.current = window.scrollY;
    currentScrollRef.current = window.scrollY;
    setIsDesktop(vwRef.current >= 1024);

    let animationFrameId = null;
    const updateScrollPhysics = () => {
      // Lerping formula for smooth deceleration easing
      const diff = scrollTargetRef.current - currentScrollRef.current;
      if (Math.abs(diff) > 0.01) {
        const speed = diff < 0 ? EASING_SPEED_UP : EASING_SPEED_DOWN;
        currentScrollRef.current += diff * speed;
        animationFrameId = requestAnimationFrame(updateScrollPhysics);
      } else {
        currentScrollRef.current = scrollTargetRef.current;
        animationFrameId = null; // Mark loop as stopped
      }

      const p = Math.min(Math.max(currentScrollRef.current / (vhRef.current * SCROLL_TRACK_FACTOR), 0), 1);

      // Direct DOM manipulation for maximum smoothness (bypasses layout invalidation)
      if (textPanelRef.current) {
        if (vwRef.current >= 1024) {
          textPanelRef.current.style.opacity = Math.max(0, 1 - p * 1.5);
          textPanelRef.current.style.pointerEvents = p > 0.6 ? "none" : "auto";
        } else {
          textPanelRef.current.style.opacity = "";
          textPanelRef.current.style.pointerEvents = "";
        }
      }

      // Background Opacity & Zoom
      if (bgRef.current) {
        bgRef.current.style.opacity = 0.85 * (1 - p);
        bgRef.current.style.transform = `scale3d(${1 + p * 0.08}, ${1 + p * 0.08}, 1)`;
      }

      // Glow Opacities
      if (glow1Ref.current) {
        glow1Ref.current.style.opacity = 1 - p;
      }
      if (glow2Ref.current) {
        glow2Ref.current.style.opacity = 1 - p;
      }

      // Video transforms depending on viewport size
      if (vwRef.current >= 1024) {
        if (videoCardRef.current) {
          const tx = 416 * (1 - p);
          const ty_base = (-(SCROLL_TRACK_FACTOR + 0.05) * vhRef.current + 136.5) * (1 - p);
          const scrollLag = scrollTargetRef.current - currentScrollRef.current;
          // Compensate for scroll lag during transition, but fade it out as p approaches 1 so it scrolls away naturally
          const ty = ty_base + scrollLag * (1 - p);
          const scale = 0.485 + 0.515 * p;
          videoCardRef.current.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale3d(${scale}, ${scale}, 1)`;
        }
        if (videoLabelRef.current) {
          videoLabelRef.current.style.opacity = Math.max(0, 1 - p * 3);
        }
      } else {
        if (mobileVideoRef.current) {
          mobileVideoRef.current.style.transform = `scale(${1 + p * 0.05})`;
        }
      }
    };

    const handleScroll = () => {
      scrollTargetRef.current = window.scrollY;
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(updateScrollPhysics);
      }
    };

    // Trigger initial render setup
    animationFrameId = requestAnimationFrame(updateScrollPhysics);

    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleResize = () => {
      vhRef.current = window.innerHeight;
      vwRef.current = window.innerWidth;
      setIsDesktop(vwRef.current >= 1024);
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(updateScrollPhysics);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    if (videoOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") setVideoOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [videoOpen]);

  // Desktop Interpolated styles for the morphing video card (using GPU-accelerated transforms)
  const desktopVideoStyle = {
    position: "absolute",
    left: "calc(50% - 461.5px)",
    top: `calc(${(SCROLL_TRACK_FACTOR + 0.55) * 100}vh - 259.5px)`,
    width: "923px",
    height: "519px",
    borderRadius: "24px",
    transition: "none", // Manual control based on scroll position
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: `translate3d(416px, calc(-${(SCROLL_TRACK_FACTOR + 0.05) * 100}vh + 136.5px), 0) scale3d(0.485, 0.485, 1)`, // Initial state for p = 0
    transformOrigin: "center center",
    willChange: "transform",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    isolation: "isolate",
    WebkitMaskImage: "-webkit-radial-gradient(white, black)",
  };

  const desktopVideoInnerStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "24px",
    objectFit: "cover",
    willChange: "transform",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    WebkitMaskImage: "-webkit-radial-gradient(white, black)",
  };

  // Mobile / Tablet fallback styles (simple scale and slide)
  const mobileVideoStyle = {
    position: "relative",
    width: "100%",
    aspectRatio: "4/3",
    borderRadius: "16px",
    transform: "scale(1)", // Initial state
    opacity: 1,
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-white text-zinc-900 overflow-hidden"
      style={{
        minHeight: isDesktop ? `${(SCROLL_TRACK_FACTOR + 1.0) * 100}vh` : "auto",
      }} // Give extra scroll track only for desktop transition
    >

      {/* Scroll Area: Holds both Hero and expanded Video Showcase */}
      <div className="relative w-full flex items-center px-4 sm:px-6 lg:px-8 pt-24 pb-10 min-h-[90vh] lg:min-h-[100vh]">

        {/* Ambient background image on load */}
        <div
          ref={bgRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: "url('/hero.png')",
            opacity: 0.85,
            willChange: "opacity, transform"
          }}
        />

        {/* Dynamic Glow effects */}
        <div
          ref={glow1Ref}
          className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
          style={{ opacity: 1, willChange: "opacity" }}
        />
        <div
          ref={glow2Ref}
          className="absolute bottom-10 left-10 w-96 h-96 bg-[#064ca2]/5 rounded-full blur-3xl pointer-events-none"
          style={{ opacity: 1, willChange: "opacity" }}
        />

        {/* Maximum standard width container */}
        <div className="max-w-7xl w-full mx-auto relative h-full flex items-center z-10">

          {/* Main Hero grid layout for scroll-morphing */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center h-full relative">

            {/* Left Section: Hero Texts (fades out on scroll) */}
            <div
              ref={textPanelRef}
              className="lg:col-span-7 flex flex-col space-y-8 text-left pt-16 pb-6 lg:pt-24 relative"
              style={{ willChange: "opacity" }}
            >
              {/* Soft light shade backdrop behind text for optimal legibility */}
              <div className="absolute -inset-x-12 -inset-y-10 bg-gradient-to-r from-white/90 via-white/60 to-transparent blur-2xl z-[-1] pointer-events-none" />

              <div className="space-y-2 select-none">
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-zinc-900 tracking-tight leading-none">
                  Learn
                </h1>
                <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-zinc-900 tracking-tight leading-none flex flex-wrap items-baseline gap-x-4">
                  <span className="font-sans">to</span>
                  <span className="relative inline-block font-serif italic font-normal text-zinc-900">
                    Lead

                    {/* Wavy Underlines under "Doing" */}
                    <svg
                      className="absolute -bottom-2 left-0 w-full h-5 overflow-visible"
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
                <button
                  onClick={() => setVideoOpen(true)}
                  className="h-14 px-8 bg-zinc-900 hover:bg-zinc-800 text-white font-bold rounded-full flex items-center gap-3 shadow-md hover:shadow-lg transition duration-300 group cursor-pointer"
                >
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
                    AICTE
                  </span>
                  <span className="text-zinc-800 font-extrabold text-[11px] tracking-widest">APPROVED</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
                    <span className="text-rose-600 text-[8px] font-black">NAAC</span>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-extrabold text-zinc-800 leading-none">GRADE B++</span>
                    <span className="text-[7px] text-zinc-500 leading-none tracking-wider">ACCREDITED</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="bg-[#007bbf] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-[2px] leading-none">
                    ESTD 2006
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] font-extrabold text-zinc-800 leading-none">20+ Years Excellence</span>
                    <span className="text-[7px] text-zinc-500 leading-none tracking-wider">Greater Noida, Delhi NCR</span>
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
                <div
                  ref={mobileVideoRef}
                  style={mobileVideoStyle}
                  className="overflow-hidden border border-white/10 shadow-2xl"
                >
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
            ref={videoCardRef}
            style={desktopVideoStyle}
            className="z-20 overflow-hidden border border-white/10 shadow-2xl group bg-black/90"
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
              ref={videoLabelRef}
              className="absolute bottom-5 left-6 flex items-center gap-3"
              style={{ opacity: 1, willChange: "opacity" }}
            >
              <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center border border-white/30">
                <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-white text-xs font-bold uppercase tracking-widest bg-black/60 px-3 py-1.5 rounded-md border border-white/10">
                Explore Our Campus
              </span>
            </div>

            {/* Micro scan animation line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/40 to-transparent -translate-y-full group-hover:animate-pulse" />
          </div>
        )}

      </div>

      {/* Video Modal Popup */}
      {videoOpen && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8 cursor-pointer animate-fadeIn"
          onClick={() => setVideoOpen(false)}
        >
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes scaleIn {
              from { transform: scale(0.95); opacity: 0; }
              to { transform: scale(1); opacity: 1; }
            }
            .animate-fadeIn {
              animation: fadeIn 0.2s ease-out forwards;
            }
            .animate-scaleIn {
              animation: scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
            }
          `}</style>

          {/* Close Button on Top Right */}
          <button
            className="fixed top-6 right-6 w-12 h-12 rounded-full bg-white/15 hover:bg-white/25 text-white border border-white/20 flex items-center justify-center cursor-pointer transition duration-300 hover:scale-105 z-[110]"
            onClick={() => setVideoOpen(false)}
            aria-label="Close video"
          >
            <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Video Container Card */}
          <div
            className="relative w-full max-w-5xl aspect-video rounded-2xl md:rounded-3xl overflow-hidden bg-black border border-white/10 shadow-2xl cursor-default animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              className="w-full h-full object-cover"
              src="/vedio/accurate-video.mp4"
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}

    </div>
  );
}
