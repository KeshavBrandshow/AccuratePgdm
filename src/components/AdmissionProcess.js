import { useState } from "react";

const steps = [
  {
    num: "01",
    title: "Application & Registration",
    description: "Fill out the online application form on the Accurate official portal and pay the registration fee.",
    details: "Requires basic personal details, academic scores, and contact information.",
  },
  {
    num: "02",
    title: "Entrance Score Submission",
    description: "Submit a valid scorecard of management entrance exams: CAT, MAT, CMAT, XAT, or ATMA.",
    details: "Minimum graduation score of 50% is required to qualify for screening.",
  },
  {
    num: "03",
    title: "GD & Personal Interview",
    description: "Participate in the Group Discussion and Personal Interview rounds conducted by the selection board.",
    details: "Evaluates communication, business awareness, leadership potential, and attitude.",
  },
  {
    num: "04",
    title: "Offer & Enrollment",
    description: "Successful candidates receive an admission offer letter and secure their seat by paying the fee installment.",
    details: "Course registrations and orientation details will follow post-enrollment.",
  },
];

export default function AdmissionProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="admission-process" className="w-full bg-zinc-50 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative border-t border-zinc-200 overflow-hidden">
      
      {/* Fading Dot Matrix Background */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden opacity-[100]">
        <svg className="w-full h-full min-h-[600px]" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-matrix" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#064ca2" />
            </pattern>
            {/* Radial gradient mask to fade dots towards the edges */}
            <radialGradient id="fade-mask" cx="50%" cy="50%" r="50%">
              <stop offset="20%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="grid-mask">
              <rect width="100%" height="100%" fill="url(#fade-mask)" />
            </mask>
          </defs>

          {/* Masked Dot Pattern */}
          <rect width="100%" height="100%" fill="url(#dot-matrix)" mask="url(#grid-mask)" />

          {/* Floating Accent Tech Rings */}
          <circle cx="150" cy="120" r="16" stroke="#e6a600" strokeWidth="2" strokeDasharray="3 3" />
          <circle cx="150" cy="120" r="8" fill="#e6a600" opacity="0.1" />

          <circle cx="1280" cy="480" r="24" stroke="#064ca2" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="1280" cy="480" r="12" stroke="#064ca2" strokeWidth="1" />
          <circle cx="1280" cy="480" r="4" fill="#064ca2" />

          <circle cx="1100" cy="150" r="10" stroke="#e6a600" strokeWidth="1.5" />
          <circle cx="350" cy="450" r="8" stroke="#064ca2" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="max-w-[1350px] mx-auto relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tight">
            Accurate PGDM <span className="font-serif italic font-bold text-primary">Admission Journey</span>
          </h2>
          <p className="text-zinc-500 mt-4 text-sm md:text-base font-medium">
            Your step-by-step roadmap to joining one of Delhi-NCR's premier business schools.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 items-stretch w-full">
          
          {/* Horizontal connection line for desktop */}
          <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-zinc-200 z-0">
            <div 
              className="h-full bg-primary transition-all duration-500 ease-out" 
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />
          </div>

          {steps.map((step, idx) => {
            const isActive = idx <= activeStep;
            const isCurrent = idx === activeStep;

            return (
              <div 
                key={step.num}
                className="relative flex flex-col justify-between bg-white border border-zinc-200/80 rounded-2xl p-6 shadow-xs hover:shadow-md transition duration-300 group z-10 cursor-pointer"
                onClick={() => setActiveStep(idx)}
              >
                <div>
                  {/* Step bubble */}
                  <div className="flex items-center justify-between mb-6">
                    <div 
                      className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-base shadow-xs transition duration-300 ${
                        isCurrent 
                          ? "bg-primary text-white scale-110 ring-4 ring-primary/10" 
                          : isActive 
                            ? "bg-primary/10 text-primary" 
                            : "bg-zinc-100 text-zinc-400"
                      }`}
                    >
                      {step.num}
                    </div>
                    <span 
                      className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full transition duration-300 ${
                        isCurrent 
                          ? "bg-secondary text-zinc-900 font-extrabold" 
                          : "text-zinc-400 bg-zinc-100"
                      }`}
                    >
                      {isCurrent ? "Active" : `Stage ${idx + 1}`}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-lg font-bold text-zinc-900 group-hover:text-primary transition duration-200">
                    {step.title}
                  </h3>
                  <p className="text-zinc-500 text-xs mt-3 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Sub-details block */}
                <div className="mt-6 pt-4 border-t border-zinc-100">
                  <p className="text-[11px] text-zinc-400 italic">
                    {step.details}
                  </p>
                </div>

                {/* Top color highlight bar */}
                <div 
                  className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl transition duration-300 ${
                    isCurrent 
                      ? "bg-secondary" 
                      : isActive 
                        ? "bg-primary/60" 
                        : "bg-transparent"
                  }`} 
                />
              </div>
            );
          })}
        </div>

        {/* Quick Action Button */}
        <div className="mt-12 text-center">
          <a
            href="#apply"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary/95 text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition duration-200"
          >
            <span>Apply Now for PGDM 2026</span>
            <svg className="w-4 h-4 text-secondary stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
