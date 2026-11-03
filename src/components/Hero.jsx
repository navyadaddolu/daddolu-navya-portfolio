// Hero.jsx — Full-screen hero section with video reel, AOS animations and social links
import { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Profile image used as the video poster (and as the visual when no video exists)
import heroPoster from '../assets/about/profile.png';

// heroVideo: resolved at build time via import.meta.glob so the build does
// not crash when hero.mp4 is not yet present (returns undefined → falsy).
const heroVideos = import.meta.glob('../assets/hero/*.mp4', { eager: true, query: '?url', import: 'default' });
const heroVideo  = heroVideos['../assets/hero/hero.mp4'] ?? '';

import { heroContent, socialLinks } from '../data/portfolioData';

// ── Inline SVG icons ──────────────────────────────────────────
function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

// ── Play / Pause icons ────────────────────────────────────────
function PlayIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8 ml-1">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-8 md:h-8">
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
  );
}

// ── Download icon for the resume button ───────────────────────
function DownloadIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 16l-5-5h3V4h4v7h3l-5 5zm-7 2h14v2H5v-2z" />
    </svg>
  );
}

// ── Social link list (used in both the fixed sidebar and inline) ──
const socialItems = [
  { href: socialLinks.github,    label: 'GitHub profile',    Icon: GitHubIcon },
  { href: socialLinks.linkedin,  label: 'LinkedIn profile',  Icon: LinkedInIcon },
  ...(socialLinks.instagram
    ? [{ href: socialLinks.instagram, label: 'Instagram profile', Icon: InstagramIcon }]
    : []),
];

export default function Hero() {
  const videoRef   = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Initialise AOS once; refresh after all resources load so shifted
  // layouts don't misplace scroll-triggered animations.
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' });

    const handleLoad = () => AOS.refresh();
    window.addEventListener('load', handleLoad);
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  // Play / pause toggle — stops event from bubbling up to the section
  function toggleVideo(e) {
    e.stopPropagation();
    const vid = videoRef.current;
    if (!vid) return;
    if (isPlaying) {
      vid.pause();
      setIsPlaying(false);
    } else {
      vid.play();
      setIsPlaying(true);
    }
  }

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden bg-[#ff2a2a]"
    >
      {/* ── Background video (object-contain so nothing is cropped) ── */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-contain object-top md:object-right z-0"
        playsInline
        poster={heroPoster}
        onEnded={() => setIsPlaying(false)}
      >
        {/* Only add <source> when the video file actually exists */}
        {heroVideo && <source src={heroVideo} type="video/mp4" />}
      </video>

      {/* ── Readability gradient overlay ─────────────────────────── */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-black/45 via-black/10 to-transparent" />

      {/* ── Fixed left social sidebar (large screens only) ───────── */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-5 mix-blend-difference">
        {socialItems.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-white/60 hover:text-white hover:scale-125 transition-all duration-200"
          >
            <Icon />
          </a>
        ))}
      </div>

      {/* ── Main content container ───────────────────────────────── */}
      <div className="absolute inset-0 z-20 max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-[8%] flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end">

        {/* ── LEFT BLOCK ─────────────────────────────────────────── */}
        <div className="max-w-2xl" data-aos="fade-up" data-aos-delay="100">

          {/* Inline social icons — shown only on small/medium (hidden on lg+) */}
          <div className="flex gap-4 mb-4 lg:hidden">
            {socialItems.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white/60 hover:text-white hover:scale-125 transition-all duration-200"
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* Heading */}
          <h1
            className="text-white text-3xl md:text-5xl font-bold leading-tight mb-4"
            data-aos="fade-up"
          >
            {heroContent.greeting},
            <br />
            <span className="text-black">{heroContent.titleHighlight}</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-white text-sm md:text-lg font-semibold max-w-md mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {heroContent.subtitle}
          </p>

          {/* CTA pill buttons */}
          <div
            className="flex flex-wrap gap-3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {/* Primary — view work */}
            <a
              href={heroContent.ctaPrimary.href}
              className="px-6 py-2.5 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform duration-200"
            >
              {heroContent.ctaPrimary.text}
            </a>

            {/* Secondary — contact */}
            <a
              href={heroContent.ctaSecondary.href}
              className="px-6 py-2.5 rounded-full bg-black/40 border border-white text-white font-semibold backdrop-blur-md hover:bg-black/60 transition-all duration-200"
            >
              {heroContent.ctaSecondary.text}
            </a>

            {/* Resume download — only rendered when ctaResume has a value */}
            {heroContent.ctaResume?.href && (
              <a
                href={heroContent.ctaResume.href}
                download
                className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-transparent border border-white/50 text-white font-semibold hover:bg-white/10 transition-all duration-200"
              >
                <DownloadIcon />
                {heroContent.ctaResume.text}
              </a>
            )}
          </div>
        </div>

        {/* ── RIGHT BLOCK — Play Reel control ──────────────────────── */}
        <div
          className="flex flex-col items-center gap-2 mt-8 md:mt-0"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <button
            onClick={toggleVideo}
            aria-label={isPlaying ? 'Pause reel' : 'Play reel'}
            className={`
              w-12 h-12 md:w-20 md:h-20 rounded-full
              border border-white/30 bg-black/20 backdrop-blur-md
              flex items-center justify-center text-white
              hover:scale-110 hover:bg-[#ff2a2a]
              hover:shadow-[0_0_30px_rgba(255,42,42,0.6)]
              transition-all duration-300
            `}
          >
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </button>

          {/* Label below the button */}
          <span className="text-white text-[10px] uppercase tracking-widest font-semibold">
            {isPlaying ? 'Pause' : 'Play Reel'}
          </span>
        </div>
      </div>

      {/* ── Bottom scroll indicator (desktop only) ───────────────── */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          className="w-6 h-6 text-white"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
