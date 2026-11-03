// Internships.jsx — Work experience and internships section
import React from 'react';
import { internshipsList } from '../data/portfolioData';

// Decorative 4-pointed star
function Star({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="black"
      className={`w-12 h-12 opacity-20 animate-pulse absolute pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
    </svg>
  );
}

// Individual internship card
export const InternshipCard = ({ intern, index }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Top row: duration & Internship mini badge */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="font-mono text-xs md:text-sm text-white/40 uppercase tracking-wider">
            {intern.duration}
          </span>
          <span className="px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider bg-white/10 text-white border border-white/15">
            Internship
          </span>
        </div>

        {/* Role */}
        <h3 className="text-2xl font-black text-white tracking-tight mb-1">
          {intern.role}
        </h3>

        {/* Organization */}
        <p className="uppercase text-red-200 text-sm font-bold tracking-wider mb-6">
          {intern.organization}
        </p>

        {/* Skills Gained list */}
        {intern.skills && intern.skills.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/80 mb-3">
              Skills Gained:
            </h4>
            <ul className="space-y-1.5 list-disc list-inside text-sm text-white/90">
              {intern.skills.map((skill, sIdx) => (
                <li key={sIdx}>{skill}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Technologies row of mono pills */}
      {intern.tech && intern.tech.length > 0 && (
        <div className="border-t border-white/10 pt-5 mt-auto">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white/80 mb-3">
            Technologies:
          </h4>
          <div className="flex flex-wrap gap-2">
            {intern.tech.map((t, tIdx) => (
              <span
                key={tIdx}
                className="font-mono text-xs px-2.5 py-1 rounded-md bg-black/30 border border-white/10 text-white/90"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main Internships section component
export default function Internships() {
  return (
    <section
      id="experience"
      className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Torn-paper SVG divider at top edge */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20 fill-[#0a0a0a] rotate-180 -translate-y-[1px]"
          aria-hidden="true"
        >
          <path d="M0,0 L1200,0 L1200,60 L1180,35 L1150,55 L1120,30 L1090,55 L1060,25 L1030,50 L1000,30 L970,60 L940,35 L910,55 L880,25 L850,50 L820,30 L790,60 L760,35 L730,55 L700,25 L670,50 L640,30 L610,60 L580,35 L550,55 L520,25 L490,50 L460,30 L430,60 L400,35 L370,55 L340,25 L310,50 L280,30 L250,60 L220,35 L190,55 L160,25 L130,50 L100,30 L70,60 L40,35 L0,55 Z" />
        </svg>
      </div>

      {/* Decorative pulsing black star bottom-left at 20% opacity */}
      <Star className="bottom-8 left-8 md:bottom-12 md:left-12" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header (centred) */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase font-black text-black tracking-tight mb-4">
            Work Experience
          </h2>
          <p className="text-red-100 text-base md:text-lg max-w-2xl mx-auto">
            Practical industry experience, projects executed, and professional skills honed in real-world environments.
          </p>
        </div>

        {/* Grid of Internship Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {internshipsList.map((intern, index) => (
            <InternshipCard
              key={intern.organization ? `${intern.organization}-${index}` : index}
              intern={intern}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
