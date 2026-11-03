// TechnicalSkills.jsx — Displays technical skill categories
import React from "react";
import { technicalSkills } from "../data/portfolioData";

const SkillBadge = ({ name }) => (
  <span className="inline-flex rounded-full px-4 py-2 bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-red-600/20">
    {name}
  </span>
);

const SkillCard = ({ category, index }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={index * 100}
    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:scale-[1.02] hover:border-red-500/30 transition-transform shadow-[0_0_10px_rgba(255,42,42,0.5)]"
  >
    <h3 className="uppercase font-black text-white mb-4 pb-2 border-b border-white/20">
      {category.title}
    </h3>
    <div className="flex flex-wrap gap-3">
      {category.skills.map((skill) => (
        <SkillBadge key={skill.name} name={skill.name} />
      ))}
    </div>
  </div>
);

const TechnicalSkills = () => {
  return (
    <section
      id="skills"
      className="bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background blurred red circles */}
      <div className="absolute w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none left-1/4 -top-40" />
      <div className="absolute w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none right-1/4 -bottom-40" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="inline-block px-3 py-1 mb-2 text-xs font-semibold uppercase tracking-widest text-red-400 bg-red-400/10 rounded-full">
            {technicalSkills.badge}
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-4">
            {technicalSkills.heading}
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            {technicalSkills.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {technicalSkills.categories.map((cat, idx) => (
            <SkillCard key={cat.title} category={cat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
