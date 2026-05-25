const platformIcons = {
  facebook: (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
    </svg>
  ),
  twitter: (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  linkedin: (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  ),
  instagram: (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
};

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-[#064ca2] to-[#04336c] text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-white/10">
      {/* Abstract Design Overlay Graphic */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-12 right-12 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          
          {/* Column 1: Institution Info */}
          <div className="space-y-6 text-left">
            <div>
              <span className="text-xl font-black tracking-wider uppercase block">
                ACCURATE
              </span>
              <span className="text-[10px] font-bold text-cyan-300 tracking-widest uppercase block mt-1">
                Business School
              </span>
            </div>
            <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-xs">
              Pioneering corporate-ready education with direct industry integration, state-of-the-art incubation, and global network connections.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#064ca2] hover:border-white transition-all duration-300 shadow-sm"
                  aria-label={platform}
                >
                  {platformIcons[platform]}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Programmes */}
          <div className="space-y-6 text-left">
            <h4 className="text-xs font-black uppercase tracking-wider text-cyan-300">
              Programmes
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-white/80">
              {["PGDM General", "PGDM Marketing", "PGDM Finance", "PGDM Business Analytics", "Executive Admissions"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white hover:underline transition duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Ecosystem & Life */}
          <div className="space-y-6 text-left">
            <h4 className="text-xs font-black uppercase tracking-wider text-cyan-300">
              Ecosystem
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-white/80">
              {["DLF CyberPark Campus", "Student Clubs", "E-Cell Incubator", "Virtual 3D Tour", "Placement Reports"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white hover:underline transition duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Details */}
          <div className="space-y-6 text-left">
            <h4 className="text-xs font-black uppercase tracking-wider text-cyan-300">
              Contact Us
            </h4>
            <div className="space-y-4 text-xs sm:text-sm text-white/80">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-cyan-300">📍</span>
                <span>
                  Knowledge Park III, Greater Noida, Delhi NCR, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-cyan-300">✉️</span>
                <a href="mailto:admissions@accurate.in" className="hover:text-white hover:underline">
                  admissions@accurate.in
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-cyan-300">📞</span>
                <a href="tel:+919560148700" className="hover:text-white hover:underline font-bold">
                  +91 95601 48700
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-4 text-white/60 text-[11px] sm:text-xs">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Accurate Group of Institutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
