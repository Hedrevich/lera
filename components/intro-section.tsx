export function IntroSection() {
  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-20">
      {/* Yellow X decoration - left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4">
        <svg width="120" height="120" viewBox="0 0 100 100" className="text-[#f2c94c]">
          <path
            d="M50,0 C55,35 65,45 100,50 C65,55 55,65 50,100 C45,65 35,55 0,50 C35,45 45,35 50,0"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Spiral decoration - right */}
      <div className="absolute right-8 bottom-1/4 opacity-20">
        <svg width="100" height="100" viewBox="0 0 100 100" className="text-[#828282]">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Yellow flower icon */}
        <div className="flex justify-center mb-6">
          <svg width="40" height="40" viewBox="0 0 40 40" className="text-[#f2c94c]">
            <circle cx="20" cy="20" r="5" fill="currentColor" />
            <circle cx="20" cy="8" r="6" fill="currentColor" />
            <circle cx="20" cy="32" r="6" fill="currentColor" />
            <circle cx="8" cy="20" r="6" fill="currentColor" />
            <circle cx="32" cy="20" r="6" fill="currentColor" />
            <circle cx="11" cy="11" r="5" fill="currentColor" />
            <circle cx="29" cy="11" r="5" fill="currentColor" />
            <circle cx="11" cy="29" r="5" fill="currentColor" />
            <circle cx="29" cy="29" r="5" fill="currentColor" />
          </svg>
        </div>

        {/* Section label */}
        <p className="text-[#828282] text-xs tracking-[0.3em] uppercase mb-6">Introduction of Myself</p>

        {/* Main heading */}
        <h2 className="font-serif text-[#ff4a3b] text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-8 text-balance">
          {"I'm Product / UX-UI Designer working at the intersection of product, marketing, and business goals."}
        </h2>

        {/* Description */}
        <p className="text-[#c1c1c1] text-sm md:text-base leading-relaxed max-w-xl mx-auto">
          I design UX flows, websites, interfaces, and communication materials. I work autonomously, take ownership of
          design decisions, and align solutions with real business needs.
        </p>
      </div>
    </section>
  )
}
