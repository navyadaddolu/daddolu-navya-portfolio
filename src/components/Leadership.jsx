// Leadership.jsx — Leadership & community engagement timeline section
import React from 'react';
import { leadershipList } from '../data/portfolioData';

// Individual timeline item
export const LeadershipItem = ({ item, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between mb-12 last:mb-0 w-full">
      {/* Glowing red dot on the timeline */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-[#ff2a2a] shadow-[0_0_12px_#ff2a2a] border-2 border-[#0a0a0a] z-10 pointer-events-none" />

      {/* Even index: Card on Left (md:text-right) */}
      {isEven ? (
        <>
          <div
            data-aos="fade-right"
            className="w-full pl-12 md:pl-0 md:w-[45%] md:text-right"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#ff2a2a]/30 transition-colors">
              {item.badge && (
                <div className="mb-3">
                  <span className="inline-block px-2.5 py-0.5 text-xs font-semibold uppercase tracking-widest text-[#ff2a2a] bg-[#ff2a2a]/10 border border-[#ff2a2a]/20 rounded-full">
                    {item.badge}
                  </span>
                </div>
              )}
              <h3 className="text-xl md:text-2xl font-black text-white hover:text-[#ff2a2a] transition-colors mb-2">
                {item.title}
              </h3>
              <p className="font-mono uppercase text-red-400 text-xs md:text-sm font-semibold tracking-wider mb-3">
                {item.role}
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
          {/* Spacer on the right */}
          <div className="hidden md:block md:w-[45%]" />
        </>
      ) : (
        /* Odd index: Spacer on Left, Card on Right (md:text-left) */
        <>
          {/* Spacer on the left */}
          <div className="hidden md:block md:w-[45%]" />
          <div
            data-aos="fade-left"
            className="w-full pl-12 md:pl-0 md:w-[45%] md:text-left"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#ff2a2a]/30 transition-colors">
              {item.badge && (
                <div className="mb-3">
                  <span className="inline-block px-2.5 py-0.5 text-xs font-semibold uppercase tracking-widest text-[#ff2a2a] bg-[#ff2a2a]/10 border border-[#ff2a2a]/20 rounded-full">
                    {item.badge}
                  </span>
                </div>
              )}
              <h3 className="text-xl md:text-2xl font-black text-white hover:text-[#ff2a2a] transition-colors mb-2">
                {item.title}
              </h3>
              <p className="font-mono uppercase text-red-400 text-xs md:text-sm font-semibold tracking-wider mb-3">
                {item.role}
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// Main Leadership component
export default function Leadership() {
  return (
    <section
      id="leadership"
      className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Torn-paper SVG divider at top (rotate-180, fill-[#ff2a2a]) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-20 fill-[#ff2a2a] rotate-180 -translate-y-[1px]"
          aria-hidden="true"
        >
          <path d="M0,0 L1200,0 L1200,60 L1180,35 L1150,55 L1120,30 L1090,55 L1060,25 L1030,50 L1000,30 L970,60 L940,35 L910,55 L880,25 L850,50 L820,30 L790,60 L760,35 L730,55 L700,25 L670,50 L640,30 L610,60 L580,35 L550,55 L520,25 L490,50 L460,30 L430,60 L400,35 L370,55 L340,25 L310,50 L280,30 L250,60 L220,35 L190,55 L160,25 L130,50 L100,30 L70,60 L40,35 L0,55 Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header (centred) */}
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold uppercase tracking-widest text-[#ff2a2a] bg-[#ff2a2a]/10 border border-[#ff2a2a]/20 rounded-full">
            Activities
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase font-black text-white tracking-tight mb-4">
            Leadership & Engagement
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            Initiatives, student leadership roles, and collaborative community activities.
          </p>
        </div>

        {/* Timeline wrapper */}
        <div className="relative">
          {/* Vertical gradient timeline line */}
          <div className="absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#ff2a2a] via-red-500/50 to-white/10" />

          {/* Timeline Items */}
          <div className="relative z-10">
            {leadershipList.map((item, index) => (
              <LeadershipItem
                key={item.title ? `${item.title}-${index}` : index}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
