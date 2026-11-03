// Projects.jsx — Featured projects section
import React from 'react';
import { projects, projectsContent, socialLinks } from '../data/portfolioData';

// Inline SVG GitHub Icon
const GitHubIcon = ({ className = 'w-4 h-4' }) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.38.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.44 11.44 0 013-.4c1.02.01 2.05.14 3 .4 2.28-1.55 3.28-1.23 3.28-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.47 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12.01 12.01 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

// Inline SVG External Link Icon
const ExternalLinkIcon = ({ className = 'w-4 h-4' }) => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 3h6v6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 14L21 3" />
  </svg>
);

// Individual project card
const ProjectCard = ({ project, aosDelay }) => {
  const borderGradientClass = project.isFlagship
    ? 'bg-gradient-to-r from-red-500/50 via-white/10 to-red-500/30 hover:from-red-500/70 hover:to-red-500/50'
    : 'bg-white/10';

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className={`p-[1px] rounded-2xl transition-all duration-300 ${borderGradientClass}`}
    >
      <div className="rounded-2xl p-6 md:p-8 backdrop-blur-md bg-[#0f0f0f]/90 flex flex-col justify-between h-full">
        <div>
          {/* Optional badge */}
          {project.badge && (
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#ff2a2a] bg-[#ff2a2a]/10 border border-[#ff2a2a]/20 rounded-full">
                {project.badge}
              </span>
            </div>
          )}

          {/* Title and number */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              {project.title}
            </h3>
            <span className="font-serif italic text-5xl font-black text-white/10 select-none shrink-0 leading-none">
              {project.number}
            </span>
          </div>

          {/* Description */}
          <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-bold bg-white/5 border border-white/10 text-white/80 hover:text-white hover:border-[#ff2a2a]/50 hover:bg-[#ff2a2a]/20 transition-all duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/5">
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs md:text-sm font-semibold transition-colors duration-200"
            >
              <GitHubIcon className="w-4 h-4" />
              <span>{projectsContent?.githubLabel || 'GitHub'}</span>
            </a>
          )}

          {project.links?.demo ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#ff2a2a] hover:bg-[#e02424] text-white text-xs md:text-sm font-semibold transition-colors duration-200"
            >
              <span>{projectsContent?.liveDemoLabel || 'Live Demo'}</span>
              <ExternalLinkIcon className="w-4 h-4" />
            </a>
          ) : (
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              aria-disabled="true"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-white/40 text-xs md:text-sm font-semibold cursor-not-allowed select-none"
            >
              <span>{projectsContent?.demoComingSoonLabel || 'Demo Coming Soon'}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// Main Projects component
export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold uppercase tracking-widest text-[#ff2a2a] bg-[#ff2a2a]/10 border border-[#ff2a2a]/20 rounded-full">
            {projectsContent?.badge || 'Featured Projects'}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase mb-4">
            {projectsContent?.heading || 'Work that speaks for itself'}
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto">
            {projectsContent?.description}
          </p>
        </div>

        {/* Projects Cards List */}
        <div className="flex flex-col gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              aosDelay={(index + 1) * 100}
            />
          ))}
        </div>

        {/* Explore all repos CTA button */}
        {socialLinks?.github && (
          <div className="mt-16 text-center" data-aos="fade-up">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white text-sm font-bold tracking-wide transition-all duration-300 hover:border-[#ff2a2a]/50 hover:shadow-[0_0_20px_rgba(255,42,42,0.25)] group"
            >
              <GitHubIcon className="w-5 h-5 text-white group-hover:text-[#ff2a2a] transition-colors" />
              <span>{projectsContent?.repositoriesLabel || 'Explore All My Repositories'}</span>
              <span className="text-[#ff2a2a] group-hover:translate-x-1 transition-transform duration-200">
                →
              </span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
