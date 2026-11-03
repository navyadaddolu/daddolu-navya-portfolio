// Contact.jsx — Parallax giant title, red card contact form with EmailJS and mailto fallback
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData';

export default function Contact() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  // Parallax on giant background title
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%']);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');

    const form = formRef.current;
    if (!form) return;

    const firstName = form.querySelector('#firstName')?.value.trim() || '';
    const lastName = form.querySelector('#lastName')?.value.trim() || '';
    const email = form.querySelector('#email')?.value.trim() || '';
    const message = form.querySelector('#message')?.value.trim() || '';

    // Validate required fields
    if (!firstName || !email || !message) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    const { serviceId, templateId, publicKey } = emailjsConfig;
    const isConfigured =
      Boolean(serviceId && templateId && publicKey) &&
      serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY';

    if (!isConfigured) {
      // Fallback: direct mailto
      const subject = `Portfolio Contact from ${firstName} ${lastName}`;
      const body = `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`;
      window.open(
        `mailto:${personalInfo.emails.primary}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`,
        '_blank'
      );

      setStatus('success');
      form.reset();
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    try {
      const emailjs = await import('@emailjs/browser');
      await emailjs.sendForm(serviceId, templateId, form, publicKey);
      setStatus('success');
      form.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    } finally {
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Behind: Parallax giant Contact word */}
      <motion.div
        style={{ y }}
        className="absolute top-10 left-0 w-full pointer-events-none z-0 overflow-hidden flex justify-center select-none"
      >
        <div
          style={{ fontFamily: "'Impact','Arial Black',sans-serif" }}
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/5"
          aria-hidden="true"
        >
          Contact
        </div>
      </motion.div>

      {/* In front: Red contact card aligned to the right */}
      <div
        data-aos="fade-up"
        className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 ml-auto relative z-10 rounded-tl-3xl shadow-2xl"
      >
        {/* Header row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-white/80">
            Reach Me
          </span>
          {socialLinks?.instagram && (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#ff2a2a] text-xs font-bold tracking-wider uppercase transition-all duration-300"
            >
              DM on Instagram
            </a>
          )}
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left column: Name & Email inputs */}
            <div className="flex flex-col gap-8">
              <div>
                <input
                  id="firstName"
                  name="first_name"
                  type="text"
                  required
                  placeholder="First Name *"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:border-white focus:outline-none text-white transition-colors"
                />
              </div>
              <div>
                <input
                  id="lastName"
                  name="last_name"
                  type="text"
                  placeholder="Last Name"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:border-white focus:outline-none text-white transition-colors"
                />
              </div>
              <div>
                <input
                  id="email"
                  name="user_email"
                  type="email"
                  required
                  placeholder="Email Address *"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:border-white focus:outline-none text-white transition-colors"
                />
              </div>
            </div>

            {/* Right column: Message textarea */}
            <div className="flex flex-col">
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Your Message *"
                className="w-full h-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 focus:border-white focus:outline-none text-white resize-none min-h-[120px] transition-colors"
              />
            </div>
          </div>

          {/* Bottom controls and notes */}
          <div className="flex flex-col gap-6 pt-4 border-t border-white/20">
            {/* Consent checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                required
                className="w-4 h-4 mt-0.5 accent-black rounded cursor-pointer"
              />
              <label
                htmlFor="consent"
                className="text-xs text-white/90 select-none cursor-pointer"
              >
                I agree that my submitted details will be used to contact me regarding this inquiry.
              </label>
            </div>

            {/* Note & Urgent contact */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs md:text-sm text-white/80">
              <p>
                Your message will be sent directly to my inbox. I typically respond within 24-48 hours.
              </p>
              {personalInfo?.emails?.primary && (
                <p className="shrink-0">
                  Urgent?{' '}
                  <a
                    href={`mailto:${personalInfo.emails.primary}?subject=Urgent Inquiry`}
                    className="underline font-bold hover:text-black transition-colors"
                  >
                    Email directly
                  </a>
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full border border-white font-bold text-sm tracking-wider uppercase transition-all duration-300 group ${
                  status === 'sending'
                    ? 'bg-white/20 border-white/40 text-white cursor-wait'
                    : status === 'success'
                    ? 'bg-green-600 border-green-600 text-white'
                    : status === 'error'
                    ? 'bg-red-950 border-red-950 text-white'
                    : 'bg-transparent text-white hover:bg-white hover:text-[#ff2a2a]'
                }`}
              >
                {status === 'sending' && (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Sending...</span>
                  </>
                )}

                {status === 'success' && <span>Sent Successfully ✓</span>}

                {status === 'error' && <span>Failed — Try Again</span>}

                {status === 'idle' && (
                  <>
                    <span>Send Message</span>
                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
