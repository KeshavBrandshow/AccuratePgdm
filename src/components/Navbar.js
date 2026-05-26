import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSpecsOpen, setMobileSpecsOpen] = useState(false);
  const [desktopSpecsOpen, setDesktopSpecsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      // On all devices, turn solid blue after scrolling 15% of the first screen fold.
      const threshold = window.innerHeight * 0.15;
      if (window.scrollY > threshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      setMobileSpecsOpen(false);
    } else {
      setMobileMenuOpen(true);
    }
  };

  const specializations = [
    { name: "Marketing Management", id: "marketing", desc: "Digital campaigns & brand strategy" },
    { name: "Financial Management", id: "finance", desc: "Corporate finance & trading labs" },
    { name: "Banking & Financial Services", id: "banking", desc: "Commercial banking & Finacle" },
    { name: "Human Resource Management", id: "hr", desc: "Talent planning & HR analytics" },
    { name: "Business Analytics", id: "analytics", desc: "Data models, SQL & Python scripts" },
    { name: "International Business", id: "ib", desc: "Global trade & logistics networks" },
    { name: "Operations & Supply Chain", id: "ops", desc: "Lean six sigma & ERP systems" },
  ];

  const getSpecIcon = (id) => {
    switch (id) {
      case "marketing":
        return (
          <svg className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
          </svg>
        );
      case "finance":
        return (
          <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case "banking":
        return (
          <svg className="w-4 h-4 text-[#064ca2] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0V9a2 2 0 012-2h2a2 2 0 012 2v12m-6 0h6" />
          </svg>
        );
      case "hr":
        return (
          <svg className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case "analytics":
        return (
          <svg className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
          </svg>
        );
      case "ib":
        return (
          <svg className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        );
      case "ops":
        return (
          <svg className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 002 2h2a2 2 0 002-2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  const isSpecPage = router.pathname.startsWith("/specializations/");
  const applyHref = isSpecPage ? "#inquiry" : "/specializations/marketing#inquiry";

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-[#064ca2]/85 backdrop-blur-md shadow-lg border-b border-white/20 py-1.5"
          : "bg-transparent py-2.5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Left: Brand Logo */}
            <Link
              href="/"
              className={`relative flex items-center cursor-pointer transition-all duration-500 ${scrolled ? "w-[210px] h-[82px]" : "w-[230px] h-[90px]"
                }`}
            >
              {/* Dark Logo (shown normally on light Hero background) */}
              <img
                src="/logo/accurate-logo.webp"
                alt="Accurate PGDM Logo"
                className={`w-full h-full object-contain transition-opacity duration-500 ${scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
              />
              {/* White Logo (shown on scrolled blue background) */}
              <img
                src="/logo/accurate-white-logo.png"
                alt="Accurate PGDM Logo"
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
              />
            </Link>

            {/* Center: Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {/* Why Accurate */}
              <Link
                href="/#why-accurate-section"
                onClick={() => setDesktopSpecsOpen(false)}
                className={`text-xs sm:text-sm font-bold transition duration-200 relative group py-1 ${scrolled ? "text-white/80 hover:text-white" : "text-[#064ca2]/80 hover:text-[#064ca2]"
                  }`}
              >
                Why Accurate
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${scrolled ? "bg-cyan-300" : "bg-[#064ca2]"
                  }`} />
              </Link>

              {/* Specializations Dropdown */}
              <div
                className="relative py-4"
                onMouseEnter={() => setDesktopSpecsOpen(true)}
                onMouseLeave={() => setDesktopSpecsOpen(false)}
              >
                <button
                  onClick={() => setDesktopSpecsOpen(!desktopSpecsOpen)}
                  className={`flex items-center text-xs sm:text-sm font-bold transition duration-200 cursor-pointer focus:outline-none ${scrolled ? "text-white/80 hover:text-white" : "text-[#064ca2]/80 hover:text-[#064ca2]"
                    }`}
                >
                  Specializations
                  <svg
                    className={`w-3.5 h-3.5 ml-1 transition-transform duration-300 ${desktopSpecsOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu Card (2-column premium grid) */}
                <div
                  className={`absolute top-[95%] left-1/2 -translate-x-1/2 w-[700px] bg-white backdrop-blur-md border border-zinc-200/60 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.12)] p-4 z-50 transition-all duration-300 grid grid-cols-12 gap-4 ${desktopSpecsOpen
                    ? "pointer-events-auto opacity-100 translate-y-0"
                    : "pointer-events-none opacity-0 translate-y-2"
                    }`}
                >
                  {/* Left Side: 2-column grid of specializations */}
                  <div className="col-span-8 grid grid-cols-2 gap-2">
                    {specializations.map((spec) => (
                      <Link
                        key={spec.id}
                        href={`/specializations/${spec.id}`}
                        onClick={() => setDesktopSpecsOpen(false)}
                        className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-zinc-50 border border-transparent hover:border-zinc-200/30 transition-all duration-200 text-left group/spec-link"
                      >
                        {getSpecIcon(spec.id)}
                        <div className="flex flex-col">
                          <span className="text-[11px] font-bold text-zinc-800 group-hover/spec-link:text-[#064ca2] transition-colors duration-200 leading-snug">
                            {spec.name}
                          </span>
                          <span className="text-[9px] text-zinc-400 mt-0.5 leading-tight">
                            {spec.desc}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Right Side: Promotion Card */}
                  <div className="col-span-4 bg-gradient-to-br from-[#064ca2]/5 to-[#e6a600]/5 border border-[#064ca2]/10 rounded-xl p-3 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] font-black uppercase text-[#e6a600] tracking-widest block">Admissions Open</span>
                      <span className="text-[11px] font-bold text-[#064ca2] mt-1 block">Accurate PGDM Batch 2026-28</span>
                      <p className="text-[9.5px] text-zinc-500 mt-1 leading-relaxed">
                        All programs are dual-specialization enabled & AI-integrated.
                      </p>
                    </div>
                    <Link
                      href={applyHref}
                      onClick={() => setDesktopSpecsOpen(false)}
                      className="text-[9.5px] font-black text-[#e6a600] hover:text-[#064ca2] mt-3 inline-flex items-center gap-1 transition-colors duration-200 cursor-pointer"
                    >
                      Apply Online Now ↗
                    </Link>
                  </div>
                </div>
              </div>

              {/* Practical Learning */}
              <Link
                href="/#practical-learning-section"
                onClick={() => setDesktopSpecsOpen(false)}
                className={`text-xs sm:text-sm font-bold transition duration-200 relative group py-1 ${scrolled ? "text-white/80 hover:text-white" : "text-[#064ca2]/80 hover:text-[#064ca2]"
                  }`}
              >
                Practical Learning
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${scrolled ? "bg-cyan-300" : "bg-[#064ca2]"
                  }`} />
              </Link>

              {/* Ecosystem */}
              <Link
                href="/#ecosystem-section"
                onClick={() => setDesktopSpecsOpen(false)}
                className={`text-xs sm:text-sm font-bold transition duration-200 relative group py-1 ${scrolled ? "text-white/80 hover:text-white" : "text-[#064ca2]/80 hover:text-[#064ca2]"
                  }`}
              >
                Ecosystem
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${scrolled ? "bg-cyan-300" : "bg-[#064ca2]"
                  }`} />
              </Link>

              {/* Student Life */}
              <Link
                href="/#student-life-section"
                onClick={() => setDesktopSpecsOpen(false)}
                className={`text-xs sm:text-sm font-bold transition duration-200 relative group py-1 ${scrolled ? "text-white/80 hover:text-white" : "text-[#064ca2]/80 hover:text-[#064ca2]"
                  }`}
              >
                Student Life
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${scrolled ? "bg-cyan-300" : "bg-[#064ca2]"
                  }`} />
              </Link>
            </div>

            {/* Right: Apply Now CTA */}
            <div className="hidden md:block">
              <Link
                href={applyHref}
                className={`px-5 py-2 rounded-full border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm ${scrolled
                  ? "border-white/30 text-white bg-white/10 hover:bg-white hover:text-[#064ca2] hover:border-white"
                  : "border-[#064ca2]/30 text-[#064ca2] bg-[#064ca2]/5 hover:bg-[#064ca2] hover:text-white hover:border-[#064ca2]"
                  }`}
              >
                Apply Now ↗
              </Link>
            </div>

            {/* Hamburger Button (Mobile) */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className={`transition focus:outline-none p-1 ${scrolled ? "text-white hover:text-cyan-300" : "text-[#064ca2] hover:text-[#064ca2]/80"
                  }`}
              >
                {mobileMenuOpen ? (
                  /* Close Icon */
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  /* Hamburger Icon */
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#064ca2] border-t border-white/30 animate-fadeIn">
            <div className="px-4 pt-4 pb-6 space-y-3 flex flex-col text-left">
              {/* Why Accurate */}
              <Link
                href="/#why-accurate-section"
                onClick={toggleMobileMenu}
                className="text-sm font-bold text-white/90 hover:text-white py-2 border-b border-white/5"
              >
                Why Accurate
              </Link>

              {/* Specializations Accordion */}
              <div>
                <button
                  onClick={() => setMobileSpecsOpen(!mobileSpecsOpen)}
                  className="w-full flex items-center justify-between text-sm font-bold text-white/90 hover:text-white py-2 border-b border-white/5 focus:outline-none cursor-pointer"
                >
                  <span>Specializations</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${mobileSpecsOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Expanded mobile list */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${mobileSpecsOpen ? "max-h-[400px] mt-2 mb-2 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="pl-4 border-l border-white/20 space-y-1.5 py-1">
                    {specializations.map((spec) => (
                      <Link
                        key={spec.id}
                        href={`/specializations/${spec.id}`}
                        onClick={toggleMobileMenu}
                        className="block py-1.5 text-xs text-white/70 hover:text-white transition duration-200"
                      >
                        {spec.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Practical Learning */}
              <Link
                href="/#practical-learning-section"
                onClick={toggleMobileMenu}
                className="text-sm font-bold text-white/90 hover:text-white py-2 border-b border-white/5"
              >
                Practical Learning
              </Link>

              {/* Ecosystem */}
              <Link
                href="/#ecosystem-section"
                onClick={toggleMobileMenu}
                className="text-sm font-bold text-white/90 hover:text-white py-2 border-b border-white/5"
              >
                Ecosystem
              </Link>

              {/* Student Life */}
              <Link
                href="/#student-life-section"
                onClick={toggleMobileMenu}
                className="text-sm font-bold text-white/90 hover:text-white py-2 border-b border-white/5"
              >
                Student Life
              </Link>

              {/* Apply Now */}
              <div className="pt-2">
                <Link
                  href={applyHref}
                  onClick={toggleMobileMenu}
                  className="w-full block text-center py-2.5 rounded-full border border-white/30 text-xs font-black uppercase tracking-wider text-[#064ca2] bg-white hover:bg-white/90 transition duration-300"
                >
                  Apply Now ↗
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
