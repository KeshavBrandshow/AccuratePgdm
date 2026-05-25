import { useState, useEffect } from "react";

const pagesData = [
  {
    id: 1,
    image: "https://picsum.photos/id/20/800/1000",
    bgClass: "bg-zinc-950 text-white",
  },
  {
    id: 2,
    image: "https://picsum.photos/id/180/800/1000",
    bgClass: "bg-white text-zinc-900 border border-zinc-200",
  },
  {
    id: 3,
    image: "https://picsum.photos/id/24/800/1000",
    bgClass: "bg-white text-zinc-900 border border-zinc-200",
  },
  {
    id: 4,
    image: "https://picsum.photos/id/48/800/1000",
    bgClass: "bg-white text-zinc-900 border border-zinc-200",
  },
  {
    id: 5,
    image: "https://picsum.photos/id/319/800/1000",
    bgClass: "bg-white text-zinc-900 border border-zinc-200",
  },
  {
    id: 6,
    image: "https://picsum.photos/id/327/800/1000",
    bgClass: "bg-[#064ca2] text-white",
  }
];

// Double Page Sheets Mapping for Desktop view
const sheetsData = [
  {
    front: pagesData[0], // Page 1: Cover
    back: pagesData[1],  // Page 2: Metrics
  },
  {
    front: pagesData[2], // Page 3: Ventures
    back: pagesData[3],  // Page 4: Journey
  },
  {
    front: pagesData[4], // Page 5: Partners
    back: pagesData[5],  // Page 6: Back Cover
  }
];

export default function EntrepreneurshipReport() {
  const [currentPage, setCurrentPage] = useState(0); // for Mobile (0 to 5)
  const [currentSheet, setCurrentSheet] = useState(0); // for Desktop (0 to 3)
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState("next"); // "next" or "prev"
  const [isMobile, setIsMobile] = useState(false);

  const totalPages = pagesData.length;
  const totalSheets = sheetsData.length;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px for desktop double spread space
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mobile Handlers
  const handleMobileNext = () => {
    if (currentPage < totalPages - 1 && !isFlipping) {
      setFlipDirection("next");
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1);
        setIsFlipping(false);
      }, 500);
    }
  };

  const handleMobilePrev = () => {
    if (currentPage > 0 && !isFlipping) {
      setFlipDirection("prev");
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage((prev) => prev - 1);
        setIsFlipping(false);
      }, 500);
    }
  };

  // Desktop Handlers
  const handleDesktopNext = () => {
    if (currentSheet < totalSheets && !isFlipping) {
      setFlipDirection("next");
      setIsFlipping(true);
      setCurrentSheet((prev) => prev + 1);
      setTimeout(() => {
        setIsFlipping(false);
      }, 800);
    }
  };

  const handleDesktopPrev = () => {
    if (currentSheet > 0 && !isFlipping) {
      setFlipDirection("prev");
      setIsFlipping(true);
      setCurrentSheet((prev) => prev - 1);
      setTimeout(() => {
        setIsFlipping(false);
      }, 800);
    }
  };

  const handleSliderChange = (e) => {
    if (isFlipping) return;
    const targetVal = parseInt(e.target.value);

    if (isMobile) {
      if (targetVal !== currentPage) {
        setFlipDirection(targetVal > currentPage ? "next" : "prev");
        setIsFlipping(true);
        setTimeout(() => {
          setCurrentPage(targetVal);
          setIsFlipping(false);
          // Wait additional brief timeout to prevent double inputs
        }, 500);
      }
    } else {
      if (targetVal !== currentSheet) {
        setFlipDirection(targetVal > currentSheet ? "next" : "prev");
        setIsFlipping(true);
        setCurrentSheet(targetVal);
        setTimeout(() => {
          setIsFlipping(false);
        }, 800);
      }
    }
  };

  return (
    <section
      className="w-full pt-20 pb-24 px-4 sm:px-6 lg:px-8 relative text-center border-t border-zinc-200 overflow-visible"
      style={{
        background: "linear-gradient(to bottom, #ffffff 520px, #064ca2 520px)"
      }}
    >
      {/* Repeating box pattern on white area */}
      <div
        className="absolute top-0 left-0 w-full pointer-events-none z-0"
        style={{
          height: "520px",
          backgroundImage:
            "linear-gradient(to right, rgba(6,76,162,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(6,76,162,0.10) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient lighting glows inside the section */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Top Part Content (Headers) */}
        <div className="space-y-5 pb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight leading-tight max-w-3xl mx-auto">
            Building Real Startups, <span className="font-serif italic font-normal text-zinc-800">Not Just Projects</span>
          </h2>
          <p className="text-zinc-500 text-sm md:text-base font-medium max-w-xl mx-auto">
            A data-backed report on student startups, covering valuation, revenue, funding, and market traction.
          </p>
          <div className="pt-2">
            <button className="h-12 px-6 bg-white hover:bg-zinc-50 border border-zinc-300 hover:border-zinc-500 text-zinc-800 text-xs font-extrabold rounded-full flex items-center gap-2.5 mx-auto transition duration-300 cursor-pointer group shadow-sm">
              <span>Download Entrepreneurship Report</span>
              <svg className="w-4 h-4 text-zinc-500 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          </div>

        </div>

        {/* Flipbook Container Box - reduced max-width and paddings */}
        <div className="w-full max-w-4xl mx-auto bg-[#031d3d]/95 border border-[#064ca2]/30 rounded-[32px] p-4 sm:p-6 md:p-8 shadow-2xl relative z-20 mt-2">

          {/* Flipbook Custom Header */}
          <div className="absolute top-4 left-6 flex items-center gap-2 select-none">
            <div className="w-2.5 h-2.5 rounded-full bg-[#e6a600] animate-pulse" />
            <span className="text-[10px] text-blue-200/60 font-extrabold tracking-widest uppercase">ACCURATE FLIPBOOK V2</span>
          </div>

          <div className="absolute top-4 right-6 text-[10px] text-blue-200/60 font-bold select-none">
            3D INTERACTIVE SPREAD
          </div>

          {/* Book Mockup Canvas Wrapper - reduced height & spacing */}
          <div className="my-6 flex items-center justify-center relative min-h-[400px] lg:min-h-[450px]">

            {/* Navigation Arrows */}
            {/* Left Prev Arrow */}
            <button
              onClick={isMobile ? handleMobilePrev : handleDesktopPrev}
              disabled={isMobile ? (currentPage === 0 || isFlipping) : (currentSheet === 0 || isFlipping)}
              className="absolute left-0 lg:-left-4 z-40 w-12 h-12 rounded-full bg-[#031d3d]/90 border border-[#064ca2]/30 hover:bg-[#042d5e] hover:border-[#064ca2]/60 text-white flex items-center justify-center shadow-lg transition duration-200 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5 text-blue-200 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Next Arrow */}
            <button
              onClick={isMobile ? handleMobileNext : handleDesktopNext}
              disabled={isMobile ? (currentPage === totalPages - 1 || isFlipping) : (currentSheet === totalSheets || isFlipping)}
              className="absolute right-0 lg:-right-4 z-40 w-12 h-12 rounded-full bg-[#031d3d]/90 border border-[#064ca2]/30 hover:bg-[#042d5e] hover:border-[#064ca2]/60 text-white flex items-center justify-center shadow-lg transition duration-200 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5 text-blue-200 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Book Content Spread Render */}
            {isMobile ? (
              /* Mobile View: Single Page Flip */
              <div
                className="relative w-[270px] sm:w-[320px] h-[370px] sm:h-[430px] shadow-2xl rounded-2xl overflow-visible"
                style={{
                  perspective: "1200px",
                  transformStyle: "preserve-3d"
                }}
              >
                {currentPage < totalPages - 1 && (
                  <div
                    className="absolute inset-0 rounded-2xl overflow-hidden shadow-inner bg-white select-none z-10"
                    style={{
                      transform: "rotateY(0deg) scale(0.97)",
                      opacity: 0.95,
                      filter: "brightness(0.95)",
                      transition: "all 0.5s ease"
                    }}
                  >
                    <img
                      src={pagesData[currentPage + 1].image}
                      alt={`Page ${currentPage + 2}`}
                      className="w-full h-full object-cover select-none pointer-events-none"
                    />
                  </div>
                )}

                <div
                  className={`absolute inset-0 rounded-2xl overflow-hidden shadow-2xl z-20 ${pagesData[currentPage].bgClass
                    } ${isFlipping && flipDirection === "next"
                      ? "animate-flip-left"
                      : isFlipping && flipDirection === "prev"
                        ? "animate-flip-right"
                        : ""
                    }`}
                  style={{
                    transformOrigin: "left center",
                    transformStyle: "preserve-3d",
                    transition: isFlipping ? "transform 0.5s ease-in-out, opacity 0.5s ease-in-out" : "none"
                  }}
                >
                  {isFlipping && (
                    <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/5 z-30 pointer-events-none" />
                  )}
                  <img
                    src={pagesData[currentPage].image}
                    alt={`Page ${currentPage + 1}`}
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />
                </div>
              </div>
            ) : (
              /* Desktop View: Double Page 3D Flipbook - scaled down dimensions */
              <div
                className="relative w-[660px] h-[420px] rounded-2xl shadow-2xl bg-[#020e1e]/20 overflow-visible flex items-center justify-between border border-[#064ca2]/30"
                style={{
                  perspective: "2000px",
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Book Spine Overlay Shadow */}
                <div className="absolute left-1/2 -translate-x-1/2 w-6 bg-gradient-to-r from-black/25 via-black/45 to-black/25 h-full z-40 pointer-events-none shadow-[inset_0_0_10px_rgba(0,0,0,0.5)] border-l border-r border-black/30" />

                {/* Left Side Base Layer */}
                <div className="w-1/2 h-full rounded-l-2xl bg-[#020e1e] flex items-center justify-center text-blue-300/40 text-[9px] select-none font-bold">
                  ACCURATE AIC
                </div>

                {/* Right Side Base Layer */}
                <div className="w-1/2 h-full rounded-r-2xl bg-[#020e1e] flex items-center justify-center text-blue-300/40 text-[9px] select-none font-bold">
                  STARTUP REPORT
                </div>

                {/* Double Sheets Rendering */}
                {sheetsData.map((sheet, index) => {
                  const isFlipped = index < currentSheet;

                  // Compute dynamic layered 3D Z-index values
                  let zIndex = 0;
                  if (isFlipped) {
                    zIndex = index;
                  } else {
                    zIndex = 10 - index;
                  }

                  return (
                    <div
                      key={index}
                      className="absolute top-0 right-0 w-1/2 h-full transition-transform duration-[800ms] ease-in-out"
                      style={{
                        transformStyle: "preserve-3d",
                        WebkitTransformStyle: "preserve-3d",
                        transformOrigin: "left center",
                        transform: isFlipped ? "rotateY(-180deg)" : "rotateY(0deg)",
                        zIndex: zIndex
                      }}
                    >
                      {/* Front Side page (shown on the right side) */}
                      <div
                        className={`absolute inset-0 rounded-r-2xl overflow-hidden shadow-l ${sheet.front.bgClass}`}
                        style={{
                          backfaceVisibility: "hidden",
                          WebkitBackfaceVisibility: "hidden",
                          transform: "rotateY(0deg) translateZ(1px)"
                        }}
                      >
                        {/* Page Shadow curl near spine */}
                        <div className="absolute left-0 top-0 w-6 h-full bg-gradient-to-r from-black/15 via-transparent to-transparent pointer-events-none z-30" />
                        <img
                          src={sheet.front.image}
                          alt={`Page ${sheet.front.id}`}
                          className="w-full h-full object-cover select-none pointer-events-none"
                        />
                      </div>

                      {/* Back Side page (shown on the left side when flipped) */}
                      <div
                        className={`absolute inset-0 rounded-l-2xl overflow-hidden shadow-r ${sheet.back.bgClass}`}
                        style={{
                          backfaceVisibility: "hidden",
                          WebkitBackfaceVisibility: "hidden",
                          transform: "rotateY(180deg) translateZ(1px)"
                        }}
                      >
                        {/* Page Shadow curl near spine */}
                        <div className="absolute right-0 top-0 w-6 h-full bg-gradient-to-l from-black/15 via-transparent to-transparent pointer-events-none z-30" />
                        <img
                          src={sheet.back.image}
                          alt={`Page ${sheet.back.id}`}
                          className="w-full h-full object-cover select-none pointer-events-none"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}


          </div>

          {/* Book Bottom Progress Seek-bar */}
          <div className="w-full max-w-md mx-auto pt-6 border-t border-[#064ca2]/20 flex flex-col sm:flex-row items-center gap-4 justify-between select-none">
            {/* Page / Spread Count */}
            <span className="text-blue-200/60 font-extrabold text-xs tracking-wider uppercase">
              {isMobile ? (
                `PAGE ${currentPage + 1} / ${totalPages}`
              ) : (
                currentSheet === 0 ? "COVER PAGE" :
                  currentSheet === totalSheets ? "BACK COVER" :
                    `SPREAD ${currentSheet} / ${totalSheets - 1}`
              )}
            </span>

            {/* Seek Slider Bar */}
            <div className="flex-1 w-full relative group">
              <input
                type="range"
                min="0"
                max={isMobile ? totalPages - 1 : totalSheets}
                value={isMobile ? currentPage : currentSheet}
                onChange={handleSliderChange}
                disabled={isFlipping}
                className="w-full h-1 bg-blue-950 rounded-lg appearance-none cursor-pointer accent-[#e6a600] group-hover:bg-blue-900 transition duration-200"
              />
            </div>

            {/* Return to Cover */}
            <button
              onClick={() => {
                if (!isFlipping) {
                  setFlipDirection("prev");
                  setIsFlipping(true);
                  if (isMobile) {
                    setCurrentPage(0);
                    setTimeout(() => setIsFlipping(false), 500);
                  } else {
                    setCurrentSheet(0);
                    setTimeout(() => setIsFlipping(false), 800);
                  }
                }
              }}
              className="text-blue-300 hover:text-white transition duration-200 cursor-pointer"
              title="Return to Cover"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.334 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
              </svg>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
