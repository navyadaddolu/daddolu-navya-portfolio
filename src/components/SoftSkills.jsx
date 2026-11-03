// SoftSkills.jsx — Displays professional soft skills and core competencies
import React from 'react';
import { softSkillsList } from '../data/portfolioData';

// Individual soft skill card
export const SoftSkillCard = ({ skill, index }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="group bg-[#f8f8f8] border border-gray-200 rounded-3xl p-6 min-h-[220px] text-center flex flex-col items-center justify-center hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(255,42,42,0.12)] hover:border-red-200 transition-all duration-300"
    >
      {/* Emoji icon in a rounded square that tints red and scales on group-hover */}
      <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-2xl mb-4 group-hover:bg-red-50 group-hover:border-red-200 group-hover:scale-110 transition-all duration-300 select-none">
        <span>{skill.icon}</span>
      </div>

      {/* Uppercase name */}
      <h3 className="uppercase font-bold text-gray-900 text-base mb-2 tracking-wide group-hover:text-[#ff2a2a] transition-colors">
        {skill.name}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
        {skill.desc}
      </p>
    </div>
  );
};

// Main SoftSkills section component
export default function SoftSkills() {
  return (
    <section
      id="competencies"
      className="bg-white bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:60px_60px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Torn-paper SVG divider at top (rotate-180, fill-[#0a0a0a]) */}
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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header (centred) */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold uppercase tracking-widest text-[#ff2a2a] bg-red-50 border border-red-200 rounded-full">
            Core Competencies
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase font-black text-gray-900 tracking-tight mb-4">
            Professional Soft Skills
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Essential interpersonal strengths, analytical mindsets, and work habits that drive impact.
          </p>
        </div>

        {/* Grid of SoftSkillCards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkillsList.map((skill, index) => (
            <SoftSkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
