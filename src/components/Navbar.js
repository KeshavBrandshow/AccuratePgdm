import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const navLinks = [
    { name: "Why Accurate", href: "#why-accurate-section" },
    { name: "Programmes", href: "#programmes-section" },
    { name: "Practical Learning", href: "#practical-learning-section" },
    { name: "Ecosystem", href: "#ecosystem-section" },
    { name: "Student Life", href: "#student-life-section" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled
            ? "bg-[#064ca2]/95 backdrop-blur-md shadow-lg border-b border-white/30 py-3.5"
            : "bg-transparent py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            {/* Left: Brand Logo */}
            <div className="relative flex items-center cursor-pointer">
              {/* Dark Logo (shown normally on light Hero background) */}
              <img
                src="/logo/accurate-logo.webp"
                alt="Accurate PGDM Logo"
                className={`h-10 sm:h-12 w-auto object-contain transition-opacity duration-500 ${
                  scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              />
              {/* White Logo (shown on scrolled blue background) */}
              <img
                src="/logo/accurate-white-logo.png"
                alt="Accurate PGDM Logo"
                className={`absolute inset-0 h-full w-auto object-contain transition-opacity duration-500 ${
                  scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              />
            </div>

            {/* Center: Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs sm:text-sm font-bold transition duration-200 relative group py-1 ${scrolled ? "text-white/80 hover:text-white" : "text-[#064ca2]/80 hover:text-[#064ca2]"
                    }`}
                >
                  {link.name}
                  {/* Subtle hover underline */}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${scrolled ? "bg-cyan-300" : "bg-[#064ca2]"
                    }`} />
                </a>
              ))}
            </div>

            {/* Right: Apply Now CTA */}
            <div className="hidden md:block">
              <a
                href="#apply"
                className={`px-5 py-2 rounded-full border text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-sm ${scrolled
                    ? "border-white/30 text-white bg-white/10 hover:bg-white hover:text-[#064ca2] hover:border-white"
                    : "border-[#064ca2]/30 text-[#064ca2] bg-[#064ca2]/5 hover:bg-[#064ca2] hover:text-white hover:border-[#064ca2]"
                  }`}
              >
                Apply Now ↗
              </a>
            </div>

            {/* Hamburger Button (Mobile) */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-bold text-white/90 hover:text-white py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#apply"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full block text-center py-2.5 rounded-full border border-white/30 text-xs font-black uppercase tracking-wider text-[#064ca2] bg-white hover:bg-white/90 transition duration-300"
                >
                  Apply Now ↗
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* Spacer to prevent content overlap - only active on standard pages, but since our Hero is absolute fullscreen background, no spacer keeps it overlaying transparently */}
    </>
  );
}
