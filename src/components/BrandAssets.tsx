import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';

interface LogoPillProps {
  logoSrc?: string;
  companyName: string;
  compact?: boolean;
}

/**
 * Renders the Techostle Solutions logo inside a white rounded pill container
 * so it retains crisp contrast on dark or gradient surfaces.
 * If `logoSrc` is configured, renders the image with automatic SVG fallback.
 */
export function TechostleLogoPill({ logoSrc, companyName, compact = false }: LogoPillProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <span
      className={`inline-flex items-center justify-center overflow-hidden bg-white rounded-full shadow-sm border border-[#0D111C]/6 transition-transform duration-200 hover:scale-[1.02] ${
        compact ? 'px-3.5 py-1' : 'px-4 py-1.5'
      }`}
    >
      {logoSrc && !imgError ? (
        <img
          src={logoSrc}
          alt={companyName}
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className={
            compact
              ? 'h-9 sm:h-10 w-auto object-contain scale-[1.18]'
              : 'h-11 sm:h-12 w-auto object-contain scale-[1.18]'
          }
        />
      ) : (
        <>
          <svg
            viewBox="0 0 36 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={compact ? 'h-5 w-6 shrink-0' : 'h-6 w-7 shrink-0'}
            aria-hidden="true"
          >
            {/* Slanted geometric azure & purple planes echoing brand mark */}
            <polygon points="8,2 22,2 14,26 0,26" fill="#0080FF" />
            <polygon points="20,2 34,2 26,26 12,26" fill="#800080" fillOpacity="0.88" />
            <polygon points="16,10 25,10 20,26 11,26" fill="url(#techostle-overlap)" />
            <defs>
              <linearGradient
                id="techostle-overlap"
                x1="11"
                y1="10"
                x2="25"
                y2="26"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0080FF" />
                <stop offset="1" stopColor="#800080" />
              </linearGradient>
            </defs>
          </svg>
          <span className="font-display font-extrabold tracking-tight text-[#0D111C] text-base sm:text-[17px] leading-none whitespace-nowrap">
            Techostle
            <span className="font-semibold text-[#0080FF] ml-1">Solutions</span>
          </span>
        </>
      )}
    </span>
  );
}

/**
 * Abstract azure-to-purple hero backdrop with large slanted geometric shapes
 * echoing the slanted shapes of the Techostle brand mark.
 */
export function HeroAbstractBackdrop() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* Rich azure-to-purple-to-indigo base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(125deg, #00469E 0%, #0080FF 32%, #4B1D8C 68%, #1A0B2E 100%)',
        }}
      />

      {/* Soft radial glow accents */}
      <div
        className="absolute -top-28 -left-20 w-[520px] h-[520px] rounded-full opacity-55 blur-3xl"
        style={{ background: 'radial-gradient(circle, #38A3FF 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-32 right-0 w-[600px] h-[600px] rounded-full opacity-60 blur-3xl"
        style={{ background: 'radial-gradient(circle, #9E1B9E 0%, transparent 70%)' }}
      />

      {/* Large slanted geometric planes echoing the slanted logo */}
      <svg
        viewBox="0 0 1440 760"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="slant-azure-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4BB2FF" stopOpacity="0.34" />
            <stop offset="100%" stopColor="#0080FF" stopOpacity="0.06" />
          </linearGradient>
          <linearGradient id="slant-purple-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C048C0" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#800080" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="slant-ribbon" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0080FF" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#7C2AE8" stopOpacity="0.38" />
            <stop offset="100%" stopColor="#C44EC4" stopOpacity="0.12" />
          </linearGradient>
          <linearGradient id="slant-dark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1A0B2E" stopOpacity="0.42" />
            <stop offset="100%" stopColor="#1A0B2E" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Wide background slanted parallelogram */}
        <polygon points="780,-80 1120,-80 860,820 520,820" fill="url(#slant-azure-1)" />
        {/* Overlapping middle slanted ribbon */}
        <polygon points="940,-80 1240,-80 980,820 680,820" fill="url(#slant-ribbon)" />
        {/* Accent purple slanted plane on right */}
        <polygon points="1130,-80 1480,-80 1220,820 870,820" fill="url(#slant-purple-1)" />
        {/* Crisp angled dark indigo depth wedge */}
        <polygon points="620,-80 790,-80 530,820 360,820" fill="url(#slant-dark)" />

        {/* Thin crisp edge highlights */}
        <line
          x1="780"
          y1="-80"
          x2="520"
          y2="820"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="1.5"
        />
        <line
          x1="940"
          y1="-80"
          x2="680"
          y2="820"
          stroke="rgba(255,255,255,0.26)"
          strokeWidth="1.5"
        />
        <line
          x1="1240"
          y1="-80"
          x2="980"
          y2="820"
          stroke="rgba(255,255,255,0.16)"
          strokeWidth="1"
        />
      </svg>

      {/* Subtle top-to-bottom legibility scrim on left content area */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(16,8,34,0.52) 0%, rgba(16,8,34,0.28) 55%, rgba(16,8,34,0.12) 100%)',
        }}
      />
    </div>
  );
}

/**
 * Circular rotating-text badge positioned inside the sculpted bottom notch of the hero card.
 */
export function ScrollExploreNotchBadge({ onClick }: { onClick: () => void }) {
  return (
    <div className="relative flex items-center justify-center">
      {/* Sculpted curved notch bridge matching the #F1F6FF page background */}
      <svg
        width="208"
        height="58"
        viewBox="0 0 208 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none block"
        aria-hidden="true"
      >
        <path
          d="M0 58C26 58 38 42 48 25C59 8 78 0 104 0C130 0 149 8 160 25C170 42 182 58 208 58H0Z"
          fill="#F1F6FF"
        />
      </svg>

      {/* Circular rotating badge seated cleanly inside the notch */}
      <button
        type="button"
        onClick={onClick}
        aria-label="Scroll to explore services"
        className="group absolute -top-2 flex items-center justify-center w-[92px] h-[92px] rounded-full bg-white shadow-[0_8px_28px_rgba(26,11,46,0.16)] border border-[#0080FF]/15 text-[#1A0B2E] hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0080FF] focus-visible:ring-offset-2 transition-transform duration-200 cursor-pointer"
      >
        <svg
          viewBox="0 0 100 100"
          className="w-[82px] h-[82px] animate-spin-slow"
          aria-hidden="true"
        >
          <defs>
            <path
              id="scroll-badge-circle"
              d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
            />
          </defs>
          <text
            fill="#1A0B2E"
            fontSize="8.6"
            fontWeight="700"
            letterSpacing="2.25"
            className="font-display uppercase"
          >
            <textPath href="#scroll-badge-circle" startOffset="0%">
              SCROLL TO EXPLORE • SCROLL TO EXPLORE •
            </textPath>
          </text>
        </svg>

        <span className="absolute inset-0 flex items-center justify-center">
          <span className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0080FF] to-[#800080] text-white flex items-center justify-center shadow-sm group-hover:translate-y-0.5 transition-transform duration-200">
            <ArrowDown className="w-4 h-4" aria-hidden="true" />
          </span>
        </span>
      </button>
    </div>
  );
}

/**
 * Distinct slanted abstract azure/purple visual header for each Past Project card.
 */
export function ProjectAbstractVisual({ variant }: { variant: number }) {
  const palettes = [
    {
      bg: 'linear-gradient(135deg, #0057C2 0%, #0080FF 48%, #5F1096 100%)',
      shape1: '#7CC4FF',
      shape2: '#A855F7',
    },
    {
      bg: 'linear-gradient(135deg, #1A0B2E 0%, #5B0080 52%, #0080FF 100%)',
      shape1: '#C060D8',
      shape2: '#38A3FF',
    },
    {
      bg: 'linear-gradient(135deg, #0070E0 0%, #3E36B5 50%, #800080 100%)',
      shape1: '#60B5FF',
      shape2: '#D175D1',
    },
    {
      bg: 'linear-gradient(135deg, #320F5E 0%, #800080 48%, #0080FF 100%)',
      shape1: '#9333EA',
      shape2: '#55AEFF',
    },
  ];
  const palette = palettes[variant % palettes.length];

  return (
    <div
      className="relative h-48 sm:h-52 w-full overflow-hidden rounded-[20px]"
      style={{ background: palette.bg }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 480 240"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {variant % 2 === 0 ? (
          <>
            <polygon
              points="180,-20 310,-20 220,260 90,260"
              fill={palette.shape1}
              fillOpacity="0.28"
            />
            <polygon
              points="280,-20 430,-20 340,260 190,260"
              fill={palette.shape2}
              fillOpacity="0.32"
            />
            <line
              x1="180"
              y1="-20"
              x2="90"
              y2="260"
              stroke="rgba(255,255,255,0.32)"
              strokeWidth="1.5"
            />
          </>
        ) : (
          <>
            <polygon
              points="70,-20 220,-20 140,260 -10,260"
              fill={palette.shape1}
              fillOpacity="0.26"
            />
            <polygon
              points="230,-20 390,-20 310,260 150,260"
              fill={palette.shape2}
              fillOpacity="0.3"
            />
            <line
              x1="230"
              y1="-20"
              x2="150"
              y2="260"
              stroke="rgba(255,255,255,0.28)"
              strokeWidth="1.5"
            />
          </>
        )}
      </svg>
    </div>
  );
}

/**
 * Accessible vector icons for LinkedIn, Facebook, and Instagram.
 */
export function SocialIcon({ platform }: { platform: 'linkedin' | 'facebook' | 'instagram' }) {
  if (platform === 'linkedin') {
    return (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    );
  }
  if (platform === 'facebook') {
    return (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
      </svg>
    );
  }
  return (
    <svg
      className="w-4 h-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
