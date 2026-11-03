// About.jsx — Red section with a flip-card ID badge and bio
import { useState } from 'react';
import { motion } from 'framer-motion';
import QRCode from 'react-qr-code';
import stackImage from '../assets/about/profile.png';
import { aboutContent, personalInfo, socialLinks } from '../data/portfolioData';

// ── Decorative 4-point star ───────────────────────────────────
function Star({ className, style }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="black"
      className={`w-10 h-10 opacity-30 animate-pulse absolute pointer-events-none ${className}`}
      style={style}
      aria-hidden="true"
    >
      <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
    </svg>
  );
}

// ── Tiny inline SVG icons for the visiting card ───────────────
function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-red-400 shrink-0">
      <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-red-400 shrink-0">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  );
}
function LocationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-red-400 shrink-0">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-red-400 shrink-0">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-red-400 shrink-0">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

// QR target: prefer LinkedIn, fall back to mailto
const qrValue =
  socialLinks.linkedin ||
  `mailto:${personalInfo.emails.primary}`;

export default function About() {
  // Controls which side of the card is shown
  const [flipped, setFlipped] = useState(false);

  return (
    <section
      id="about"
      className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 relative overflow-hidden"
    >
      {/* ── Decorative stars ─────────────────────────────────── */}
      <Star className="top-8 right-8" />
      <Star className="bottom-24 left-8" style={{ animationDelay: '1s' }} />

      {/* ── Content row ──────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">

        {/* ── LEFT: lanyard + flip card ────────────────────────── */}
        <div className="md:w-[350px] shrink-0 flex justify-center">
          {/*
            Outer motion.div: drops in from above ONCE and stays.
            viewport once:true ensures it never re-animates on scroll-back.
          */}
          <motion.div
            className="relative flex flex-col items-center"
            initial={{ y: -300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ type: 'spring', stiffness: 110, damping: 9, mass: 1.1 }}
          >
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-3 h-40 bg-black rounded-b-sm z-10" />

            {/* Metal clip */}
            <div className="w-10 h-4 bg-gray-400 rounded-sm shadow-inner z-20" />

            {/*
              Flip wrapper — a <button> so it works on tap AND keyboard.
              [perspective:1200px] on the button gives the 3-D depth.
              The tilt (-rotate-3 / hover:rotate-0) is on this wrapper.
            */}
            <button
              type="button"
              aria-label="Flip ID card"
              onClick={() => setFlipped((f) => !f)}
              className="relative w-full max-w-[280px] -rotate-3 hover:rotate-0 transition-transform duration-500 [perspective:1200px] focus:outline-none z-20"
            >
              {/*
                Inner div: rotates around the Y axis.
                [transform-style:preserve-3d] keeps both faces in 3-D space.
              */}
              <div
                className="relative w-full aspect-[3/4] transition-transform duration-700 [transform-style:preserve-3d]"
                style={{
                  transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >

                {/* ── FRONT FACE ─────────────────────────────────── */}
                {/*
                  [backface-visibility:hidden] hides the front when it faces away.
                  All content fills the face naturally (no extra aspect-ratio needed).
                */}
                <div className="absolute inset-0 [backface-visibility:hidden] bg-gray-900 rounded-2xl p-3 shadow-2xl">
                  {/* Cutout slot */}
                  <div className="flex justify-center mb-3">
                    <div className="w-16 h-2 bg-gray-700 rounded-full" />
                  </div>
                  {/* Portrait */}
                  <div className="rounded-xl overflow-hidden h-[calc(100%-2rem)]">
                    <img
                      src={stackImage}
                      alt={`Illustrated portrait of ${personalInfo.name}`}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* ── BACK FACE (visiting card) ───────────────────── */}
                {/*
                  Pre-rotated 180 ° so it faces backward initially.
                  [backface-visibility:hidden] hides it while the front is visible.
                  Clicks on links stop propagation so they don't re-flip the card.
                */}
                <div
                  className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#141414] to-[#1f1f1f] flex flex-col"
                  // Stop link clicks reaching the button and flipping back
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Red bar at top */}
                  <div className="h-1.5 bg-[#ff2a2a] shrink-0" />

                  {/* Card body */}
                  <div className="flex flex-col justify-between flex-1 p-5 text-left gap-3">

                    {/* Name + title */}
                    <div>
                      <p className="text-xl font-black text-white leading-tight">
                        {personalInfo.brandName}
                        <span className="text-[#ff2a2a]">.</span>
                      </p>
                      <p className="text-xs uppercase tracking-widest text-red-400 mt-0.5">
                        {personalInfo.title}
                      </p>
                    </div>

                    {/* Divider */}
                    <hr className="border-white/10" />

                    {/* Contact rows — row is omitted when value is empty */}
                    <div className="flex flex-col gap-2">

                      {personalInfo.emails.primary && (
                        <a
                          href={`mailto:${personalInfo.emails.primary}`}
                          className="flex items-center gap-2 text-xs text-white/85 hover:text-white transition-colors duration-150 truncate"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <EmailIcon />
                          <span className="truncate">{personalInfo.emails.primary}</span>
                        </a>
                      )}

                      {personalInfo.phone && (
                        <a
                          href={`tel:${personalInfo.phone}`}
                          className="flex items-center gap-2 text-xs text-white/85 hover:text-white transition-colors duration-150"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <PhoneIcon />
                          <span>{personalInfo.phone}</span>
                        </a>
                      )}

                      {personalInfo.location && (
                        <span className="flex items-center gap-2 text-xs text-white/85">
                          <LocationIcon />
                          <span>{personalInfo.location}</span>
                        </span>
                      )}

                      {socialLinks.linkedin && (
                        <a
                          href={socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-xs text-white/85 hover:text-white transition-colors duration-150"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <LinkedInIcon />
                          <span>LinkedIn</span>
                        </a>
                      )}

                      {socialLinks.github && (
                        <a
                          href={socialLinks.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-xs text-white/85 hover:text-white transition-colors duration-150"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <GitHubIcon />
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>

                    {/* QR code + caption */}
                    <div className="flex items-center gap-3 bg-white rounded-lg p-2 mt-auto">
                      <QRCode value={qrValue} size={76} />
                      <p className="text-[10px] text-black/60 leading-tight">
                        Scan to<br />connect
                      </p>
                    </div>
                  </div>
                </div>

              </div>{/* end inner flip div */}
            </button>{/* end button */}

            {/* Flip hint below the card */}
            <p className="text-xs font-bold text-black/60 mt-4 select-none">
              Tap the card to flip ↻
            </p>
          </motion.div>
        </div>

        {/* ── RIGHT: heading + bio ─────────────────────────────── */}
        <div className="flex-1" data-aos="fade-left">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            {aboutContent.heading}
          </h2>

          {/* bio contains safe, trusted HTML (spans for name highlight) */}
          <p
            className="text-lg font-bold leading-relaxed text-red-50"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Tech stack badges */}
          {aboutContent.techStack?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-8">
              {aboutContent.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-black/20 text-white text-sm font-semibold backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── White torn-paper bottom divider ─────────────────────── */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16 md:h-24"
          aria-hidden="true"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
