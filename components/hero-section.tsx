"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Valeryia_Melets_CV.pdf";
    link.download = "Valeryia_Melets_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-[80vh] px-6 md:px-12 lg:px-20 pt-8 overflow-hidden">
      {/* Background decorative arcs (Figma-like spiral/waves) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[1200px] h-[700px] opacity-30"
          viewBox="0 0 1200 700"
          fill="none"
        >
          <g stroke="#4f4f4f" strokeWidth="2" opacity="0.65">
            {/* Big sweeping arcs */}
            <path d="M-200 350 A 980 980 0 0 1 1400 350" />
            <path d="M-170 350 A 900 900 0 0 1 1370 350" opacity="0.9" />
            <path d="M-140 350 A 820 820 0 0 1 1340 350" opacity="0.85" />
            <path d="M-110 350 A 740 740 0 0 1 1310 350" opacity="0.8" />
            <path d="M-80 350 A 660 660 0 0 1 1280 350" opacity="0.75" />
            <path d="M-50 350 A 580 580 0 0 1 1250 350" opacity="0.7" />
            <path d="M-20 350 A 500 500 0 0 1 1220 350" opacity="0.65" />
            <path d="M10 350 A 420 420 0 0 1 1190 350" opacity="0.6" />
            <path d="M40 350 A 340 340 0 0 1 1160 350" opacity="0.55" />
            <path d="M70 350 A 260 260 0 0 1 1130 350" opacity="0.5" />
          </g>
        </svg>
      </div>

      {/* Header */}
      <header className="flex justify-between items-center relative z-10">
        <div className="text-[#ffffff] font-bold text-xl tracking-wider">
          <span className="font-serif">V</span>M
        </div>
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/valeryia-melets-60ab47223/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ffffff] text-sm underline underline-offset-4 hover:text-[#f2c94c] transition-colors"
            aria-label="Let's Talk on LinkedIn"
          >
            {"Let's Talk"}
          </a>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#ff4a3b">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
          </svg>
        </div>
      </header>

      {/* Main Hero Content */}
      <div className="relative mt-8 md:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column */}
          <div className="relative z-10">
            <h1 className="font-serif text-[#ffffff] text-6xl md:text-7xl lg:text-8xl italic">
              Hello, I&apos;m <br /> Valeryia.
            </h1>

            <p className="text-[#ffffff] text-sm md:text-base mt-6 max-w-xs leading-relaxed">
              I design user-centered digital products and websites from idea to
              final delivery.
            </p>
            <p className="text-[#ff4a3b] text-sm md:text-base font-medium mt-1">
              Living in Bulgaria
            </p>

            {/* Decorative line under text */}
            <div className="w-48 h-[2px] bg-gradient-to-r from-[#ff4a3b] to-transparent mt-2" />

            <button
              onClick={handleDownloadCV}
              className="mt-8 px-6 py-3 border border-[#ffffff]/30 rounded-full text-[#ffffff] text-sm hover:bg-[#ffffff]/10 transition-colors flex items-center gap-2 group"
            >
              Download CV
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Center - Profile Image */}
          <div className="relative flex justify-center lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-0">
            {/* Red accent shapes */}
            <div className="absolute -right-4 top-1/4 w-16 h-32 z-0">
              <svg viewBox="0 0 60 120" className="w-full h-full">
                <ellipse cx="30" cy="60" rx="25" ry="50" fill="#ff4a3b" />
              </svg>
            </div>
            <div className="absolute -right-8 top-1/3 w-12 h-24 z-0">
              <svg viewBox="0 0 50 100" className="w-full h-full">
                <ellipse cx="25" cy="50" rx="20" ry="40" fill="#ff4a3b" />
              </svg>
            </div>

            {/* Profile circle */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#1f1f1f] z-10">
              <Image
                src="/main.svg"
                alt="Valeryia Melets"
                fill
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 320px"
                priority
                className="object-cover"
              />
              {/* Paper curl effect */}
              <div className="absolute bottom-4 left-4 w-12 h-12">
                <svg viewBox="0 0 50 50" className="w-full h-full">
                  <path
                    d="M0,50 Q25,50 25,25 Q25,0 50,0 L50,50 Z"
                    fill="#f2f1ef"
                  />
                </svg>
              </div>
            </div>

            {/* Experience badge */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 z-20">
              <div className="w-28 h-28 rounded-full bg-[#4f4f4f] border-2 border-dashed border-[#828282] flex flex-col items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  className="mb-1"
                >
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                </svg>
                <span className="text-[#ffffff] text-lg font-bold">
                  4+<span className="text-[#50b0a1] text-xs">Years</span>
                </span>
                <span className="text-[#ffffff] text-xs">Experience</span>
              </div>
            </div>
          </div>

          {/* Right Column - Name */}
          <div className="relative z-10 lg:text-right lg:self-start lg:pt-8">
            <h2 className="font-serif text-[#ffffff] text-4xl md:text-5xl lg:text-6xl">
              Valeryia Melets
            </h2>
            <div className="flex items-center gap-2 lg:justify-end mt-2">
              {/* Yellow curved arrow */}
              <svg
                width="40"
                height="30"
                viewBox="0 0 40 30"
                className="text-[#f2c94c]"
              >
                <path
                  d="M5,5 Q20,25 35,15"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M30,10 L35,15 L28,18"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
              <p className="text-[#ffffff] text-xl md:text-2xl">
                UX/ UI Designer
              </p>
            </div>

            {/* Social links */}
            <div className="flex gap-4 mt-8 lg:justify-end text-[#828282] text-xs">
              <a
                href="https://t.me/Lera_Melets"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ffffff] transition-colors"
              >
                tg
              </a>

              <a
                href="https://www.linkedin.com/in/valeryia-melets-60ab47223/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ffffff] transition-colors"
              >
                ln
              </a>

              <a
                href="https://www.behance.net/valeriamelets1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ffffff] transition-colors"
              >
                be
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
