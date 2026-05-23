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
                >
                  <span className="text-xs font-bold uppercase tracking-tighter">
                    {platform[0]}
                  </span>
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
