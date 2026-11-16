import React, { useEffect, useState } from 'react';
import { MotionConfig, motion } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Layers,
  Mail,
  Menu,
  Rocket,
  UserCheck,
  Users,
  X,
} from 'lucide-react';
import {
  HeroAbstractBackdrop,
  ProjectAbstractVisual,
  ScrollExploreNotchBadge,
  SocialIcon,
  TechostleLogoPill,
} from './components/BrandAssets';

// ============================================================================
// EDITABLE SITE CONFIGURATION
// Update headlines, services, stats, projects, links, and email details here.
// ============================================================================

const PROJECTS_DATA = [
  {
    tag: 'Planning',
    title: 'E-commerce Platform Rebuild',
    result: 'Scoped and planned a new online storefront from scratch.',
  },
  {
    tag: 'Team Building',
    title: 'Fintech Engineering Team',
    result: 'Assembled a dedicated engineering team for a payments product.',
  },
  {
    tag: 'Expert Sourcing',
    title: 'Cloud Migration Specialists',
    result: 'Matched experienced DevOps engineers to a cloud migration.',
  },
  {
    tag: 'Implementation',
    title: 'Logistics Dashboard Rollout',
    result: 'Delivered a live tracking dashboard across multiple depots.',
  },
];

const SITE_CONFIG = {
  companyName: 'Techostle Solutions',
  logoSrc: '/assets/aistudio/Techostlereal_nobg_3302ab05.png',
  email: 'Solutions@techostle.com',
  generalEmailSubject: 'Enquiry from Techostle website',
  talentPoolEmailSubject: 'Talent Pool Application',
  talentPoolEmailBody:
    'Hello Techostle team,\n\nI would like to join your talent pool. My resume and cover letter are attached.\n\nName: \nArea of expertise: \nYears of experience: ',
  copyright: '© 2026 Techostle Solutions',

  navLinks: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'projects', label: 'Past Projects' },
    { id: 'talent', label: 'Talent Pool' },
    { id: 'contact', label: 'Contact Us' },
  ],

  hero: {
    headline: 'The Right Plan. The Right People. The Right Tech.',
    subtext:
      'We take technology projects from initial idea through structured planning, team building, and full implementation.',
    primaryCta: 'Get in Touch',
    secondaryCta: 'View Our Work',
  },

  services: [
    {
      title: 'Tech Project Planning',
      description:
        'Clear technical scopes, realistic roadmaps, and architecture blueprints before a single line of code is written.',
      iconKey: 'planning' as const,
    },
    {
      title: 'IT Team Building',
      description:
        'Cohesive, right-sized engineering and product squads structured around your timeline and business priorities.',
      iconKey: 'team' as const,
    },
    {
      title: 'Expert Sourcing',
      description:
        'Direct access to vetted specialists across software, cloud, data, and security matched precisely to your stack.',
      iconKey: 'experts' as const,
    },
    {
      title: 'Implementation Support',
      description:
        'Hands-on delivery oversight from kickoff to launch so projects stay on schedule, on budget, and production-ready.',
      iconKey: 'implementation' as const,
    },
  ],

  about: {
    label: 'About Us',
    heading: 'Bridging business vision and technical execution.',
    whoWeAre:
      'Techostle Solutions is a technology planning and talent partner for organizations that want clarity before building and dependable people while delivering.',
    mission:
      'Our mission is simple: eliminate guesswork from technology initiatives by pairing disciplined project planning with the exact engineering talent required to bring each system live.',
    stats: [
      { value: '40+', label: 'Projects Planned & Delivered' },
      { value: '120+', label: 'Vetted Tech Experts' },
      { value: '14 Days', label: 'Average Team Mobilization' },
      { value: '98%', label: 'On-Scope Delivery Rate' },
    ],
    howWeWorkHeading: 'How we work',
    steps: [
      {
        number: '01',
        title: 'Conception',
        description:
          'We align on business objectives, technical constraints, and measurable outcomes before committing resources.',
      },
      {
        number: '02',
        title: 'Planning',
        description:
          'We translate goals into a concrete architecture, milestone schedule, and clear role requirements.',
      },
      {
        number: '03',
        title: 'Team & Experts',
        description:
          'We build dedicated IT teams or bring in vetted specialists matched directly to your project scope.',
      },
      {
        number: '04',
        title: 'Implementation',
        description:
          'We support execution through build, testing, and rollout until your technology is running smoothly.',
      },
    ],
  },

  projectsSection: {
    label: 'Past Projects',
    heading: 'Selected engagements across planning, teams, and rollout.',
    subheading:
      'Representative examples of how we help organizations structure initiatives and put the right technical people in place.',
    items: PROJECTS_DATA,
  },

  talentPool: {
    label: 'Talent Pool',
    heading: 'Join our network of vetted technology experts.',
    description:
      'We maintain a curated pool of experienced engineers, architects, and technical leaders. Once you apply, we review your profile, add you to our talent pool, and reach out directly whenever an upcoming client project matches your skills.',
    roles: [
      'Software Engineering',
      'Data & AI',
      'Cloud & DevOps',
      'Cybersecurity',
      'Product & Project Management',
      'UI/UX',
    ],
    steps: [
      {
        step: '01',
        text: 'Email us your resume and cover letter',
      },
      {
        step: '02',
        text: 'We review your profile and add you to the pool',
      },
      {
        step: '03',
        text: 'We reach out when a matching project comes up',
      },
    ],
    buttonLabel: 'Join the Talent Pool',
    note: 'Please attach your resume and cover letter to the email.',
  },

  contact: {
    label: 'Contact Us',
    heading: 'Ready to plan your next technology project?',
    subtext:
      'Tell us where your project stands and what expertise you need. Write to us directly and our team will respond promptly.',
    buttonLabel: 'Send Us an Email',
  },

  footer: {
    tagline:
      'Helping businesses plan technology projects, build dedicated IT teams, and source vetted tech specialists.',
  },

  socialLinks: [
    {
      platform: 'linkedin' as const,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/company/techostle-solutions',
    },
    {
      platform: 'facebook' as const,
      label: 'Facebook',
      url: 'https://www.facebook.com/share/19wkEPvht5/',
    },
    {
      platform: 'instagram' as const,
      label: 'Instagram',
      url: 'https://www.instagram.com/techostle.solutions?mdxt=YWh6MGxoZWxvOGxu',
    },
  ],
};

// ============================================================================
// HELPERS & REUSABLE UI
// ============================================================================

function buildMailtoHref(email: string, subject: string, body?: string) {
  const params = new URLSearchParams({ subject });
  if (body) {
    params.set('body', body);
  }
  // URLSearchParams encodes spaces as '+'; replace with '%20' for universal mailto client compatibility
  return `mailto:${email}?${params.toString().replace(/\+/g, '%20')}`;
}

function ServiceIcon({ iconKey }: { iconKey: 'planning' | 'team' | 'experts' | 'implementation' }) {
  switch (iconKey) {
    case 'planning':
      return <Compass className="w-5 h-5 text-[#0080FF]" aria-hidden="true" />;
    case 'team':
      return <Users className="w-5 h-5 text-[#800080]" aria-hidden="true" />;
    case 'experts':
      return <UserCheck className="w-5 h-5 text-[#0080FF]" aria-hidden="true" />;
    case 'implementation':
      return <Rocket className="w-5 h-5 text-[#800080]" aria-hidden="true" />;
  }
}

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const generalMailto = buildMailtoHref(SITE_CONFIG.email, SITE_CONFIG.generalEmailSubject);
  const talentMailto = buildMailtoHref(
    SITE_CONFIG.email,
    SITE_CONFIG.talentPoolEmailSubject,
    SITE_CONFIG.talentPoolEmailBody
  );

  // Track scroll position for sticky navbar surface & active section highlighting
  useEffect(() => {
    const sectionIds = SITE_CONFIG.navLinks.map((link) => link.id);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 36);

      // If near the very bottom of the page, highlight Contact Us
      if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 80) {
        setActiveSection('contact');
        return;
      }

      const offset = 150;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + scrollY - offset;
          if (scrollY >= top) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    const navOffset = 88;
    const targetTop = el.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: 'smooth',
    });
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#F1F6FF] text-[#0D111C] pb-10">
        {/* ================================================================
            STICKY NAVIGATION BAR
            Sits inside the top of the Hero card at rest; transitions to a
            floating dark indigo glass bar when scrolling.
           ================================================================ */}
        <header className="fixed top-3 sm:top-5 inset-x-0 z-50 px-3 sm:px-6 pointer-events-none">
          <div className="max-w-[1312px] mx-auto">
            <nav
              aria-label="Primary Navigation"
              className={`pointer-events-auto flex items-center justify-between gap-4 sm:gap-8 transition-all duration-200 ${
                isScrolled
                  ? 'bg-[#1A0B2E]/92 backdrop-blur-xl border border-white/15 shadow-[0_12px_36px_rgba(26,11,46,0.28)] rounded-full px-3.5 sm:px-5 py-2'
                  : 'bg-transparent border border-transparent rounded-full px-3.5 sm:px-7 py-3.5'
              }`}
            >
              {/* Zone 1: Logo on white rounded pill */}
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
                aria-label={`${SITE_CONFIG.companyName} — Home`}
                className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full"
              >
                <TechostleLogoPill
                  logoSrc={SITE_CONFIG.logoSrc}
                  companyName={SITE_CONFIG.companyName}
                  compact={isScrolled}
                />
              </a>

              {/* Zone 2: Center navigation links (desktop) */}
              <ul className="hidden lg:flex items-center gap-7 text-sm font-medium">
                {SITE_CONFIG.navLinks.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.id);
                        }}
                        aria-current={isActive ? 'page' : undefined}
                        className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm ${
                          isActive
                            ? 'text-white font-semibold'
                            : 'text-white/80 hover:text-white'
                        }`}
                      >
                        {item.label}
                        <span
                          aria-hidden="true"
                          className={`absolute left-0 right-0 -bottom-0.5 h-0.5 rounded-full bg-white transition-transform duration-200 origin-left ${
                            isActive ? 'scale-x-100' : 'scale-x-0'
                          }`}
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* Zone 3: White pill "Email Us" CTA with circular arrow + Mobile hamburger */}
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={generalMailto}
                  className="hidden sm:inline-flex items-center gap-2.5 bg-white text-[#1A0B2E] hover:bg-[#F1F6FF] font-semibold text-sm pl-4 pr-1.5 py-1.5 rounded-full shadow-sm transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0080FF]"
                >
                  <span>Email Us</span>
                  <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0080FF] to-[#800080] text-white flex items-center justify-center">
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </a>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen((prev) => !prev)}
                  aria-expanded={mobileMenuOpen}
                  aria-controls="mobile-nav-drawer"
                  aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                  className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/15 text-white border border-white/25 hover:bg-white/25 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
                >
                  {mobileMenuOpen ? (
                    <X className="w-5 h-5" aria-hidden="true" />
                  ) : (
                    <Menu className="w-5 h-5" aria-hidden="true" />
                  )}
                </button>
              </div>
            </nav>

            {/* Mobile dropdown menu */}
            {mobileMenuOpen && (
              <div
                id="mobile-nav-drawer"
                className="pointer-events-auto lg:hidden mt-2.5 bg-[#1A0B2E]/96 backdrop-blur-xl border border-white/15 rounded-[24px] p-4 shadow-2xl"
              >
                <ul className="flex flex-col gap-1">
                  {SITE_CONFIG.navLinks.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(item.id);
                          }}
                          className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                            isActive
                              ? 'bg-white/15 text-white font-semibold'
                              : 'text-white/85 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          <span>{item.label}</span>
                          <ArrowRight className="w-4 h-4 opacity-70" aria-hidden="true" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-3 pt-3 border-t border-white/15">
                  <a
                    href={generalMailto}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between w-full bg-white text-[#1A0B2E] font-semibold text-sm pl-4 pr-2 py-2 rounded-full"
                  >
                    <span>Email Us</span>
                    <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0080FF] to-[#800080] text-white flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </header>

        {/* ================================================================
            MAIN CONTENT CONTAINER
           ================================================================ */}
        <main className="max-w-[1360px] mx-auto px-3 sm:px-6 pt-3 sm:pt-5 space-y-12 sm:space-y-16">
          {/* --------------------------------------------------------------
              1. HOME SECTION (HERO CARD + 4 SERVICE CARDS)
             -------------------------------------------------------------- */}
          <section id="home" className="scroll-mt-24">
            {/* Large Rounded Hero Card */}
            <div className="relative rounded-[28px] md:rounded-[40px] overflow-hidden shadow-[0_24px_60px_rgba(26,11,46,0.18)]">
              <HeroAbstractBackdrop />

              <div className="relative z-10 px-6 sm:px-10 lg:px-14 pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-24">
                <div className="max-w-3xl">
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-medium mb-6">
                    <Layers className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Project Planning · IT Teams · Tech Experts</span>
                  </span>

                  <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tight text-white leading-[1.08] text-balance">
                    {SITE_CONFIG.hero.headline}
                  </h1>

                  <p className="mt-5 text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl leading-relaxed">
                    {SITE_CONFIG.hero.subtext}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-3.5">
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('contact');
                      }}
                      className="inline-flex items-center gap-2.5 bg-white text-[#1A0B2E] hover:bg-[#F1F6FF] font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-md transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A0B2E]"
                    >
                      <span>{SITE_CONFIG.hero.primaryCta}</span>
                      <ArrowRight className="w-4 h-4 text-[#0080FF]" aria-hidden="true" />
                    </a>

                    <a
                      href="#projects"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('projects');
                      }}
                      className="inline-flex items-center gap-2 bg-white/12 hover:bg-white/22 backdrop-blur-md text-white border border-white/30 font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      <span>{SITE_CONFIG.hero.secondaryCta}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom-edge sculpted notch with circular rotating-text badge */}
              <div className="relative z-20 flex justify-center -mb-px">
                <ScrollExploreNotchBadge onClick={() => scrollToSection('services')} />
              </div>
            </div>

            {/* Row of 4 Service Cards */}
            <div id="services" className="scroll-mt-24 pt-10 sm:pt-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {SITE_CONFIG.services.map((service, idx) => (
                  <motion.article
                    key={service.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 'some' }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                    className="group bg-white rounded-[24px] p-6 sm:p-7 border border-[#0D111C]/7 shadow-[0_6px_24px_rgba(26,11,46,0.04)] hover:shadow-[0_16px_38px_rgba(0,128,255,0.12)] hover:-translate-y-1 transition-all duration-200"
                  >
                    <div className="w-11 h-11 rounded-2xl bg-[#F1F6FF] border border-[#0080FF]/15 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200">
                      <ServiceIcon iconKey={service.iconKey} />
                    </div>
                    <h2 className="font-display text-lg font-bold text-[#0D111C] tracking-tight">
                      {service.title}
                    </h2>
                    <p className="mt-2.5 text-sm sm:text-[15px] text-[#3E4656] leading-relaxed">
                      {service.description}
                    </p>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          {/* --------------------------------------------------------------
              2. ABOUT US SECTION (DARK ROUNDED SECTION #1A0B2E)
             -------------------------------------------------------------- */}
          <motion.section
            id="about"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.45 }}
            className="scroll-mt-24 bg-[#1A0B2E] text-white rounded-[28px] md:rounded-[40px] px-6 sm:px-10 lg:px-14 py-12 sm:py-16 lg:py-20 shadow-[0_20px_50px_rgba(26,11,46,0.14)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left column: Who we are + Mission */}
              <div className="lg:col-span-6">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm font-medium text-[#7CC4FF]">
                  {SITE_CONFIG.about.label}
                </span>

                <h2 className="mt-5 font-display text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance leading-tight">
                  {SITE_CONFIG.about.heading}
                </h2>

                <p className="mt-5 text-base sm:text-lg text-white/85 leading-relaxed">
                  {SITE_CONFIG.about.whoWeAre}
                </p>

                <p className="mt-4 text-base text-white/75 leading-relaxed">
                  {SITE_CONFIG.about.mission}
                </p>
              </div>

              {/* Right column: Stat Tiles */}
              <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-5">
                {SITE_CONFIG.about.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[24px] bg-white/[0.06] border border-white/12 p-5 sm:p-7 hover:bg-white/[0.09] transition-colors duration-200"
                  >
                    <p className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white tabular-nums">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-white/75 leading-snug">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4-step "How we work" */}
            <div className="mt-12 sm:mt-16 pt-10 sm:pt-12 border-t border-white/12">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  {SITE_CONFIG.about.howWeWorkHeading}
                </h3>
                <p className="text-sm text-white/70 max-w-md">
                  A disciplined four-stage path from initial concept to live production delivery.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {SITE_CONFIG.about.steps.map((step) => (
                  <div
                    key={step.number}
                    className="rounded-[24px] bg-white/[0.05] border border-white/10 p-6 hover:border-[#0080FF]/50 transition-colors duration-200"
                  >
                    <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-gradient-to-r from-[#0080FF]/25 to-[#800080]/30 border border-white/15 text-xs font-bold text-[#93CEFF] tabular-nums">
                      {step.number}
                    </span>
                    <h4 className="mt-4 font-display text-xl font-bold text-white">
                      {step.title}
                    </h4>
                    <p className="mt-2 text-sm text-white/75 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* --------------------------------------------------------------
              3. PAST PROJECTS SECTION (LIGHT SECTION ON #F1F6FF)
             -------------------------------------------------------------- */}
          <motion.section
            id="projects"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.45 }}
            className="scroll-mt-24 py-4 sm:py-6"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10 px-1">
              <div>
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 text-xs sm:text-sm font-semibold text-[#0066CC]">
                  {SITE_CONFIG.projectsSection.label}
                </span>
                <h2 className="mt-4 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0D111C] text-balance">
                  {SITE_CONFIG.projectsSection.heading}
                </h2>
              </div>
              <p className="text-sm sm:text-base text-[#3E4656] max-w-md">
                {SITE_CONFIG.projectsSection.subheading}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SITE_CONFIG.projectsSection.items.map((project, index) => (
                <article
                  key={project.title}
                  className="group bg-white rounded-[28px] p-5 sm:p-6 border border-[#0D111C]/7 shadow-[0_6px_24px_rgba(26,11,46,0.04)] hover:shadow-[0_18px_42px_rgba(26,11,46,0.10)] hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="overflow-hidden rounded-[20px]">
                    <div className="group-hover:scale-[1.03] transition-transform duration-300">
                      <ProjectAbstractVisual variant={index} />
                    </div>
                  </div>

                  <div className="mt-5 px-1">
                    <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#F1F6FF] border border-[#0080FF]/20 text-xs font-semibold text-[#0066CC]">
                      {project.tag}
                    </span>

                    <h3 className="mt-3 font-display text-xl sm:text-2xl font-bold text-[#0D111C] tracking-tight">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-sm sm:text-base text-[#3E4656] leading-relaxed">
                      {project.result}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </motion.section>

          {/* --------------------------------------------------------------
              4. TALENT POOL SECTION (DARK ROUNDED SECTION #1A0B2E)
             -------------------------------------------------------------- */}
          <motion.section
            id="talent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.45 }}
            className="scroll-mt-24 relative overflow-hidden bg-[#1A0B2E] text-white rounded-[28px] md:rounded-[40px] px-6 sm:px-10 lg:px-14 py-12 sm:py-16 lg:py-20 shadow-[0_20px_50px_rgba(26,11,46,0.16)]"
          >
            {/* Subtle slanted accent glow inside dark talent pool card */}
            <div
              className="absolute -right-24 -top-24 w-[420px] h-[420px] rounded-full opacity-25 blur-3xl pointer-events-none"
              style={{
                background: 'radial-gradient(circle, #0080FF 0%, #800080 55%, transparent 75%)',
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left column: Intro + Role category pills */}
              <div className="lg:col-span-6">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm font-medium text-[#7CC4FF]">
                  {SITE_CONFIG.talentPool.label}
                </span>

                <h2 className="mt-5 font-display text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance leading-tight">
                  {SITE_CONFIG.talentPool.heading}
                </h2>

                <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed">
                  {SITE_CONFIG.talentPool.description}
                </p>

                <div className="mt-7">
                  <p className="text-sm font-semibold text-white/90 mb-3">
                    Disciplines we actively source:
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {SITE_CONFIG.talentPool.roles.map((role) => (
                      <span
                        key={role}
                        className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm font-medium text-white"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right column: 3-Step flow + Join button */}
              <div className="lg:col-span-6 rounded-[28px] bg-white/[0.06] border border-white/12 p-6 sm:p-8">
                <h3 className="font-display text-xl font-bold text-white">How to apply</h3>

                <ol className="mt-5 space-y-4">
                  {SITE_CONFIG.talentPool.steps.map((item) => (
                    <li key={item.step} className="flex items-start gap-4">
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-[#0080FF] to-[#800080] text-white text-xs font-bold shrink-0 tabular-nums">
                        {item.step}
                      </span>
                      <span className="pt-1.5 text-sm sm:text-base text-white/90 leading-snug">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ol>

                <div className="mt-8 pt-6 border-t border-white/12">
                  <a
                    href={talentMailto}
                    className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-white text-[#1A0B2E] hover:bg-[#F1F6FF] font-semibold text-base pl-6 pr-2.5 py-2.5 rounded-full shadow-lg transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0080FF]"
                  >
                    <span>{SITE_CONFIG.talentPool.buttonLabel}</span>
                    <span className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0080FF] to-[#800080] text-white flex items-center justify-center shrink-0">
                      <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </a>

                  <p className="mt-3 text-xs sm:text-sm text-white/70">
                    {SITE_CONFIG.talentPool.note}
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* --------------------------------------------------------------
              5. CONTACT US SECTION (LIGHT ROUNDED CARD ON #F1F6FF)
             -------------------------------------------------------------- */}
          <motion.section
            id="contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 'some' }}
            transition={{ duration: 0.45 }}
            className="scroll-mt-24 bg-white rounded-[28px] md:rounded-[40px] px-6 sm:px-10 lg:px-14 py-12 sm:py-16 border border-[#0D111C]/7 shadow-[0_12px_38px_rgba(26,11,46,0.05)]"
          >
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#800080]/10 border border-[#800080]/20 text-xs sm:text-sm font-semibold text-[#800080]">
                {SITE_CONFIG.contact.label}
              </span>

              <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-[#0D111C] text-balance leading-tight">
                {SITE_CONFIG.contact.heading}
              </h2>

              <p className="mt-4 text-base sm:text-lg text-[#3E4656] max-w-xl mx-auto leading-relaxed">
                {SITE_CONFIG.contact.subtext}
              </p>

              {/* Direct email address text */}
              <p className="mt-6 font-display text-lg sm:text-xl font-bold text-[#0066CC] select-all">
                {SITE_CONFIG.email}
              </p>

              <div className="mt-6 flex flex-col items-center gap-6">
                <a
                  href={generalMailto}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#0080FF] to-[#800080] hover:brightness-110 text-white font-semibold text-base sm:text-lg pl-7 pr-2.5 py-2.5 rounded-full shadow-[0_12px_28px_rgba(0,128,255,0.28)] transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0080FF] focus-visible:ring-offset-2"
                >
                  <span>{SITE_CONFIG.contact.buttonLabel}</span>
                  <span className="w-10 h-10 rounded-full bg-white text-[#1A0B2E] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" aria-hidden="true" />
                  </span>
                </a>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-3 pt-2">
                  {SITE_CONFIG.socialLinks.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${SITE_CONFIG.companyName} on ${social.label}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#F1F6FF] hover:bg-[#E2ECFF] text-[#1A0B2E] border border-[#0D111C]/8 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0080FF]"
                    >
                      <SocialIcon platform={social.platform} />
                      <span>{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* --------------------------------------------------------------
              FOOTER (DARK ROUNDED SECTION #1A0B2E)
             -------------------------------------------------------------- */}
          <footer className="bg-[#1A0B2E] text-white rounded-[28px] md:rounded-[40px] px-6 sm:px-10 lg:px-14 py-10 sm:py-12">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-white/12">
              <div className="max-w-md">
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('home');
                  }}
                  aria-label={`${SITE_CONFIG.companyName} — Back to top`}
                  className="inline-block rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <TechostleLogoPill
                    logoSrc={SITE_CONFIG.logoSrc}
                    companyName={SITE_CONFIG.companyName}
                  />
                </a>
                <p className="mt-4 text-sm text-white/75 leading-relaxed">
                  {SITE_CONFIG.footer.tagline}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-6 lg:gap-10">
                <nav aria-label="Footer Navigation">
                  <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-white/80">
                    {SITE_CONFIG.navLinks.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(item.id);
                          }}
                          className="hover:text-white transition-colors whitespace-nowrap"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="flex items-center gap-2.5">
                  {SITE_CONFIG.socialLinks.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${SITE_CONFIG.companyName} on ${social.label}`}
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      <SocialIcon platform={social.platform} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm text-white/70">
              <p>{SITE_CONFIG.copyright}</p>
              <a
                href={generalMailto}
                className="text-white/85 hover:text-white underline underline-offset-4 transition-colors"
              >
                {SITE_CONFIG.email}
              </a>
            </div>
          </footer>
        </main>

        {/* ================================================================
            FLOATING BOTTOM-RIGHT EMAIL BUTTON
           ================================================================ */}
        <a
          href={generalMailto}
          aria-label="Email Techostle Solutions"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 inline-flex items-center gap-2.5 bg-[#1A0B2E] hover:bg-[#291347] text-white border border-white/20 shadow-[0_12px_32px_rgba(26,11,46,0.32)] rounded-full pl-4 pr-2 py-2 sm:pl-5 sm:pr-2 sm:py-2 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0080FF] focus-visible:ring-offset-2"
        >
          <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">Email Us</span>
          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0080FF] to-[#800080] text-white flex items-center justify-center shrink-0">
            <Mail className="w-4 h-4" aria-hidden="true" />
          </span>
        </a>
      </div>
    </MotionConfig>
  );
}
