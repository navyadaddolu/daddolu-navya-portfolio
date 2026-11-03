// Navbar.jsx — Fixed top navigation with mobile drawer and scroll effects
import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

// All section anchor links shown in the nav
const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

// Pre-built mailto link for the "Hire Me" button
const hireMeMailto = `mailto:${personalInfo.emails.primary}?subject=Hiring Inquiry – Portfolio&body=Hello ${personalInfo.name},%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,`;

export default function Navbar() {
  const [isOpen, setIsOpen]       = useState(false); // mobile menu open/closed
  const [isScrolled, setIsScrolled] = useState(false); // true when page is scrolled > 50px

  // Listen to scroll and update isScrolled; clean up on unmount
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic <nav> classes depending on menu state and scroll position
  const navBg = isOpen
    ? 'bg-[#ff2a2a] py-4'
    : isScrolled
      ? 'bg-transparent py-4'
      : 'bg-transparent py-6';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBg}`}>

      {/* ── Inner wrapper ─────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

        {/* ── Logo ──────────────────────────────────────────────── */}
        <a href="#" className="text-2xl font-black text-white tracking-tight">
          {personalInfo.brandName}
          <span className="text-[#ff2a2a]">.</span>
        </a>

        {/* ── Desktop links (hidden on mobile) ──────────────────── */}
        <ul className="hidden md:flex space-x-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link}>
              {/* `group` lets child span react to hover on the <a> */}
              <a
                href={`#${link.toLowerCase()}`}
                className="group relative text-white/80 hover:text-white font-medium transition-colors duration-200"
              >
                {link}
                {/* Animated underline: grows from 0 → full on hover */}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* ── Desktop "Hire Me" pill (hidden on mobile) ─────────── */}
        <a
          href={hireMeMailto}
          className="hidden md:block px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold backdrop-blur-md transition-all duration-200 hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]"
        >
          Hire Me
        </a>

        {/* ── Hamburger button (visible on mobile only) ─────────── */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? (
            /* X icon when menu is open */
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* Hamburger icon when menu is closed */
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* ── Mobile dropdown panel ──────────────────────────────── */}
      {/* Animates max-height and opacity; overflow-hidden clips the slide */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#ff2a2a] shadow-2xl overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="list-none m-0 p-0 px-6 pb-4">
          {navLinks.map((link) => (
            <li key={link} className="border-b border-white/20">
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)} // close menu on link click
                className="block py-4 text-white font-bold text-lg hover:text-black transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}

          {/* Full-width "Hire Me" button inside the mobile drawer */}
          <li className="pt-4 pb-2">
            <a
              href={hireMeMailto}
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-3 rounded-full bg-white text-[#ff2a2a] font-bold text-lg transition-colors duration-200 hover:bg-white/90"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
