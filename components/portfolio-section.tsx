"use client";

import Image from "next/image";

export function PortfolioSection() {
  const projects = [
    {
      title: "Sales Deck",
      year: "2025",
      type: "creative",
      image: "/sales-deck.svg",
      link: "https://www.figma.com/proto/rngSlLLLXWcJQOmVZlQ37c/Sales-Deck?page-id=0%3A1&node-id=1-7110&viewport=60%2C118%2C0.03&t=Pz464lETJ9IQRkw8-1&scaling=scale-down-width&content-scaling=fixed",
    },
    {
      title: "Landing",
      year: "2025",
      type: "creative",
      image: "/landing.svg",
      link: "https://www.figma.com/proto/8i8JFhbHqbFtDnE1vchquq/Untitled?page-id=0%3A1&node-id=0-567&viewport=523%2C212%2C0.05&t=3aqTyD167bKWrg80-1&scaling=min-zoom&content-scaling=fixed",
      highlighted: true,
    },
    {
      title: "Visual concept",
      year: "2023",
      type: "creative",
      image: "/visual-concept.svg",
      link: "https://www.figma.com/design/533cRuKBtegfXgQ5Q0dhJN/Portfolio-Valeryia-Melets?node-id=4461-14129&t=o3dYqFlDt0L3Us7F-1",
    },
    {
      title: "No-code website",
      year: "2026",
      type: "creative",
      image: "/no-code-website.svg",
      link: "https://www.figma.com/proto/ZOLtIecp9i1DFNvyKR2vQe/Untitled?page-id=0%3A1&node-id=1-2&viewport=347%2C190%2C0.1&t=mKuLt0piJP72G5bZ-1&scaling=min-zoom&content-scaling=fixed",
    },
    {
      title: "Email",
      year: "2024",
      type: "creative",
      image: "/email.svg",
      link: "https://www.figma.com/design/533cRuKBtegfXgQ5Q0dhJN/Portfolio-Valeryia-Melets?node-id=4461-39425&t=o3dYqFlDt0L3Us7F-1",
    },
    {
      title: "Presentation",
      year: "2023",
      type: "creative",
      image: "/presentation.svg",
      link: "https://www.figma.com/design/533cRuKBtegfXgQ5Q0dhJN/Portfolio-Valeryia-Melets?node-id=4461-13475&t=o3dYqFlDt0L3Us7F-1",
    },
  ];

  const ArrowButton = ({ href, highlighted = false }: { href: string; highlighted?: boolean }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors
        ${highlighted ? "bg-[#ff4a3b] hover:bg-[#ff6b5b]" : "bg-[#333333] hover:bg-[#444444]"}`}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );

  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#0e0e0e]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Column 1 */}
          <div className="space-y-6">
            {[0, 2, 4].map((i) => (
              <div key={projects[i].title}>
                <div className="relative rounded-xl overflow-hidden bg-[#1a1a1a] aspect-[4/5]">
                  <Image src={projects[i].image} alt={projects[i].title} fill className="object-cover" />
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div>
                    <h3 className="text-white font-serif text-lg">{projects[i].title}</h3>
                    <p className="text-[#828282] text-sm">
                      {projects[i].year} – <span className="text-[#ff4a3b]">{projects[i].type}</span>
                    </p>
                  </div>
                  <ArrowButton href={projects[i].link} />
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            {[1, 3, 5].map((i) => (
              <div key={projects[i].title}>
                <div className="relative rounded-xl overflow-hidden bg-[#1a1a1a] aspect-[4/3]">
                  <Image src={projects[i].image} alt={projects[i].title} fill className="object-cover" />
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div>
                    <h3 className="text-white font-serif text-lg">{projects[i].title}</h3>
                    <p className="text-[#828282] text-sm">
                      {projects[i].year} – <span className="text-[#ff4a3b]">{projects[i].type}</span>
                    </p>
                  </div>
                  <ArrowButton
                    href={projects[i].link}
                    highlighted={projects[i].highlighted}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
