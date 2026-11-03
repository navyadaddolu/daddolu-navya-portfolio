// Services.jsx — How I Work / Process section with animated scroll-drawn dashed line
import { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';
import { skillsContent } from '../data/portfolioData';

// Hanging tag card component
export const TagCard = ({
  number,
  title,
  text,
  className = '',
  aosDelay = 0,
  aosType = 'fade-up',
  pathLength,
  containerRef,
}) => {
  const [isActive, setIsActive] = useState(false);
  const cardRef = useRef(null);

  useMotionValueEvent(pathLength, 'change', (latest) => {
    if (!cardRef.current || !containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const cardRect = cardRef.current.getBoundingClientRect();
    const cardTopRelativeToContainer = cardRect.top - containerRect.top;
    const containerHeight = containerRect.height;
    const lineTipY = latest * containerHeight;

    if (lineTipY >= cardTopRelativeToContainer + 50) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  });

  return (
    <div
      ref={cardRef}
      data-aos={aosType}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 transition-all duration-700 ${
        isActive
          ? 'bg-[#ff2a2a] shadow-[0_15px_35px_rgba(255,42,42,0.4)]'
          : 'bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100'
      } ${className}`}
    >
      {/* Punched hole at top */}
      <div
        className={`w-5 h-5 rounded-full mx-auto mt-2 transition-colors duration-700 ${
          isActive
            ? 'bg-red-950/30 border border-white/20'
            : 'bg-gray-200 border border-gray-300'
        }`}
      />

      {/* Inner panel */}
      <div
        className={`mt-8 p-8 min-h-[220px] rounded-[1.5rem] transition-colors duration-700 flex flex-col justify-between ${
          isActive
            ? 'bg-red-700/50 text-white'
            : 'bg-[#f4f4f4] text-gray-600'
        }`}
      >
        <div>
          <span
            className={`font-serif italic text-4xl font-black block mb-2 select-none ${
              isActive ? 'text-white/80' : 'text-gray-400'
            }`}
          >
            {number}
          </span>
          <h3
            className={`text-2xl font-black mb-3 tracking-tight ${
              isActive ? 'text-white' : 'text-gray-900'
            }`}
          >
            {title}
          </h3>
        </div>
        <p className="text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

// Main Process/Services section
export default function Services() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  // Desktop positioning configs for the 4 process cards
  const cardLayouts = [
    {
      className:
        'md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6',
      aosType: 'fade-left',
      aosDelay: 100,
    },
    {
      className:
        'md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6',
      aosType: 'fade-right',
      aosDelay: 200,
    },
    {
      className:
        'md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3',
      aosType: 'fade-left',
      aosDelay: 300,
    },
    {
      className:
        'md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3',
      aosType: 'fade-right',
      aosDelay: 400,
    },
  ];

  const desktopDPath =
    'M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200';

  return (
    <section
      id="process"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 relative overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">
        {/* Header block */}
        <div
          data-aos="fade-up"
          className="mb-12 md:mb-0 md:absolute top-10 left-0 md:w-[450px] z-20"
        >
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold uppercase tracking-widest text-[#ff2a2a] bg-red-50 border border-red-200 rounded-full">
            {skillsContent.badge}
          </span>
          <div className="relative mb-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-gray-900 tracking-tight">
              {skillsContent.heading}
              {/* Hand-drawn arrow SVG */}
              <svg
                className="inline-block w-8 h-8 ml-3 text-red-500 fill-none stroke-current stroke-2 align-middle"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </h2>
          </div>
          <p className="text-gray-600 text-base md:text-lg">
            {skillsContent.description}
          </p>
        </div>

        {/* Desktop 3-Layer SVG */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <mask id="path-mask">
              <motion.path
                d={desktopDPath}
                fill="none"
                stroke="white"
                strokeWidth={20}
                style={{ pathLength }}
              />
            </mask>
          </defs>
          {/* Layer 1: Faint guide path */}
          <path
            d={desktopDPath}
            fill="none"
            stroke="#cbd5e1"
            strokeWidth={2}
            strokeDasharray="8 10"
          />
          {/* Layer 3: Real dashed path with mask */}
          <path
            d={desktopDPath}
            fill="none"
            stroke="black"
            strokeWidth={2}
            strokeDasharray="8 10"
            mask="url(#path-mask)"
          />
        </svg>

        {/* Mobile 3-Layer SVG */}
        <svg
          className="md:hidden absolute top-0 left-[50%] -translate-x-1/2 w-4 h-[100%] pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <mask id="path-mask-mobile">
              <motion.path
                d="M 2,0 L 2,100"
                fill="none"
                stroke="white"
                strokeWidth={20}
                style={{ pathLength }}
                vectorEffect="non-scaling-stroke"
              />
            </mask>
          </defs>
          {/* Layer 1: Mobile faint guide path */}
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth={2}
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />
          {/* Layer 3: Mobile real dashed path with mask */}
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="black"
            strokeWidth={2}
            strokeDasharray="4 6"
            mask="url(#path-mask-mobile)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Cards Container */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10 pt-16 md:pt-0">
          {skillsContent.cards.map((card, idx) => {
            const layout = cardLayouts[idx] || {};
            return (
              <TagCard
                key={card.number}
                number={card.number}
                title={card.title}
                text={card.text}
                className={`md:absolute ${layout.className || ''}`}
                aosType={layout.aosType}
                aosDelay={layout.aosDelay}
                pathLength={pathLength}
                containerRef={containerRef}
              />
            );
          })}

          {/* Hand-written end note */}
          <div className="hidden md:block absolute top-[1250px] left-[60%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6 pointer-events-none select-none">
            {skillsContent.endText}
          </div>
        </div>
      </div>
    </section>
  );
}
