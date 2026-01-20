export function MarqueeSection() {
  const items = ["PRESENTATION", "UX/UI DESIGN", "NO-CODE", "BRANDING", "MOBILE APP", "WEB DESIGN"]

  return (
    <section className="py-12 mt-16 overflow-hidden border-y border-[#333333]/30">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center mx-4">
            <span className="text-[#ffffff] text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.2em] uppercase">
              {item}
            </span>
            <svg width="32" height="32" viewBox="0 0 24 24" className="mx-6 text-[#828282]">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor" />
            </svg>
          </div>
        ))}
      </div>
    </section>
  )
}
