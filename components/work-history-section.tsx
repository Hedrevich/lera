import { Calendar } from "lucide-react"

export function WorkHistorySection() {
  return (
    <section className="px-6 md:px-20 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-start gap-4 mb-10">
          <div className="relative">
            {/* Red diamond icon */}
            <svg width="48" height="56" viewBox="0 0 48 56" fill="none" className="text-[#ff4a3b]">
              <path d="M24 0L28 20L48 24L28 28L24 48L20 28L0 24L20 20L24 0Z" fill="currentColor" />
              <path d="M24 32L26 40L34 42L26 44L24 52L22 44L14 42L22 40L24 32Z" fill="currentColor" />
            </svg>
          </div>
          <div>
            <p className="text-[#979797] text-xs tracking-[0.3em] uppercase mb-2">MY Experience resume</p>
            <h2 className="font-serif text-4xl md:text-5xl text-white italic">Work History</h2>
          </div>
        </div>

        {/* Work Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="flex gap-4">
            <div className="w-16 h-20 bg-[#f2c94c] rounded-lg flex items-center justify-center shrink-0">
              <Calendar className="w-8 h-8 text-[#1f1f1f]" />
            </div>
            <div>
              <p className="text-[#979797] text-sm mb-1">2025 - 2026</p>
              <h3 className="font-serif text-lg text-white mb-2">Product / UX UI Designer</h3>
              <p className="text-[#828282] text-sm leading-relaxed">
                Designed and delivered end-to-end digital and print projects, from websites to books, using AI to
                accelerate production.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex gap-4 relative">
            <div className="w-16 h-20 bg-[#ff4a3b] rounded-lg flex items-center justify-center shrink-0">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-[#979797] text-sm mb-1">2021 - 2022</p>
              <h3 className="font-serif text-lg text-white mb-2">UX UI Designer</h3>
              <p className="text-[#828282] text-sm leading-relaxed">
                Redesigned the website, built prototypes, created marketing materials and presentations, and handled
                design + graphics.
              </p>
            </div>
            {/* First Badge */}
            <div className="absolute -top-2 -right-2 bg-[#ff4a3b] text-white text-xs px-3 py-1 rounded-full">First</div>
          </div>
        </div>
      </div>
    </section>
  )
}
