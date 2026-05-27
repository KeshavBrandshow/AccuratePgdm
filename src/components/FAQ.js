import { useState } from "react";

const faqs = [
  {
    question: "What is the eligibility criteria for the PGDM program at Accurate?",
    answer: "Candidates must hold a Bachelor's degree (minimum 3 years duration) with at least 50% marks (45% for reserved categories) from a recognized university. Additionally, candidates must possess a valid scorecard in national entrance exams such as CAT, MAT, CMAT, XAT, or ATMA.",
  },
  {
    question: "Does the institute offer scholarships to PGDM students?",
    answer: "Yes, Accurate offers up to 100% scholarships to meritorious students. Academic scholarships are granted based on graduation percentages and entrance exam scores. Specialized scholarships are also available for defense personnel, sports achievers, and need-based applicants.",
  },
  {
    question: "Is the PGDM program approved by the Government?",
    answer: "Absolutely. The Postgraduate Diploma in Management (PGDM) at Accurate Institute is fully approved by the All India Council for Technical Education (AICTE), Ministry of Education, Government of India.",
  },
  {
    question: "What is the average and highest placement package for PGDM?",
    answer: "Accurate PGDM maintains a strong placements record. The average package of the PGDM cohort is 7.0 LPA, with the top 10% average package reaching 15.0 LPA. Our prominent recruiters include TCS, Capgemini, Wipro, Genpact, ICICI Bank, and HDFC Bank.",
  },
  {
    question: "How is corporate exposure and practical learning integrated?",
    answer: "Our curriculum emphasizes experiential pedagogy. This includes a mandatory 2-Month Summer Internship (SIP), live corporate projects, industrial study tours of logistics & manufacturing hubs, and mentoring support under the Accurate Business Incubator (ABI) with access to seed support pools.",
  },
  {
    question: "Are hostel facilities available on campus?",
    answer: "Yes, separate, secure, and modern hostels are available for both boys and girls. The hostels feature high-speed Wi-Fi, laundry service, study rooms, gym access, 24/7 security, and a mess serving hygienic, nutritious meals.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="w-full bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative border-t border-zinc-200 overflow-hidden">

      {/* CSS Styles for Hardware Accelerated Transition */}
      <style>{`
        .faq-accordion-content {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 250ms cubic-bezier(0.4, 0, 0.2, 1), opacity 200ms ease;
          opacity: 0;
        }
        .faq-accordion-content.open {
          grid-template-rows: 1fr;
          opacity: 1;
        }
      `}</style>

      {/* Circuit Board Tracks Background (Fixed Height wrapper & SVG to prevent dynamic scaling lag during expand/collapse) */}
      <div className="absolute top-0 left-0 right-0 h-[850px] pointer-events-none select-none z-0 overflow-hidden opacity-[0.25]">
        <svg className="w-full h-[850px]" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          {/* Track Set 1 (Top area, blue lines with gold nodes) */}
          <path d="M-100,100 L400,100 L500,200 L800,200 L850,150 L1100,150 L1200,250 L1500,250" stroke="#064ca2" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="400" cy="100" r="3.5" fill="#e6a600" />
          <circle cx="800" cy="200" r="3.5" fill="#e6a600" />
          <circle cx="1100" cy="150" r="3.5" fill="#e6a600" />

          <path d="M-100,120 L380,120 L480,220 L780,220 L830,170 L1080,170 L1180,270 L1500,270" stroke="#064ca2" strokeWidth="1" opacity="0.5" strokeLinecap="round" />

          {/* Track Set 2 (Bottom area, gold lines with blue nodes) */}
          <path d="M-100,450 L300,450 L400,350 L600,350 L650,400 L900,400 L1000,500 L1500,500" stroke="#e6a600" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="300" cy="450" r="3.5" fill="#064ca2" />
          <circle cx="600" cy="350" r="3.5" fill="#064ca2" />
          <circle cx="900" cy="400" r="3.5" fill="#064ca2" />

          <path d="M-100,470 L280,470 L380,370 L580,370 L630,420 L880,420 L980,520 L1500,520" stroke="#e6a600" strokeWidth="1" opacity="0.5" strokeLinecap="round" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="max-w-[850px] mx-auto relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight">
            Accurate PGDM <span className="font-serif italic font-bold text-primary">Q&A Corner</span>
          </h2>
          <p className="text-zinc-500 mt-4 text-sm md:text-base font-medium">
            Find answers to frequently asked questions about admissions, placements, and campus life.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-zinc-50 border border-zinc-200/80 rounded-2xl overflow-hidden hover:border-zinc-300 transition duration-150"
              >
                {/* Header/Question Trigger */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left py-5 px-6 flex items-center justify-between gap-4 font-bold text-zinc-800 text-sm sm:text-base group"
                >
                  <span className="group-hover:text-primary transition duration-150 leading-snug">
                    {faq.question}
                  </span>

                  {/* Icon */}
                  <span
                    className={`w-6 h-6 rounded-full flex items-shrink-0 items-center justify-center border transition duration-300 ${isOpen
                        ? "bg-primary border-primary text-white"
                        : "border-zinc-300 text-zinc-400 group-hover:border-primary group-hover:text-primary"
                      }`}
                  >
                    <svg
                      className={`w-3.5 h-3.5 stroke-[3] transition duration-300 ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {/* Content Box */}
                <div
                  className={`faq-accordion-content ${isOpen ? "open border-t border-zinc-200/60" : "pointer-events-none"
                    }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 text-zinc-600 text-xs sm:text-sm leading-relaxed bg-white">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
