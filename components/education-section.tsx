import { Calendar } from "lucide-react"

export function EducationSection() {
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
            <h2 className="font-serif text-4xl md:text-5xl text-white italic">Education</h2>
          </div>
        </div>

        {/* Education Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Yandex Practicum */}
          <div className="flex gap-4">
            <div className="w-16 h-20 bg-[#ff4a3b] rounded-lg flex items-center justify-center shrink-0">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-[#979797] text-sm mb-1">2020 - 2021</p>
              <h3 className="font-serif text-lg text-white">Yandex Practicum</h3>
              <p className="text-[#828282] text-sm">Remote</p>
            </div>
          </div>

          {/* BSEU */}
          <div className="flex gap-4">
            <div className="w-16 h-20 bg-[#ff4a3b] rounded-lg flex items-center justify-center shrink-0">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-[#979797] text-sm mb-1">2014 - 2018</p>
              <h3 className="font-serif text-lg text-white">BSLU</h3>
              <p className="text-[#828282] text-sm">Minsk, Belarus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
