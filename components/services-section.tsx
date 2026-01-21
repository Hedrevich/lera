import { ArrowUpRight, Sparkles, Palette, Megaphone, Cpu, BookOpen, Search, FolderKanban } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Product Design",
    description: "Design and launch websites and products from scratch with clear UX flows and strong UI",
    skills: ["UX/UI1", "IA", "Prototyping"],
  },
  {
    icon: Megaphone,
    title: "Sales Materials",
    description: "Create pitch decks, commercial proposals, and marketing visuals",
    skills: ["Visual", "Presentation", "IA"],
  },
  {
    icon: Sparkles,
    title: "Marketing Design",
    description: "Design interactive mechanics, social visuals, emails, and ads",
    skills: ["Design systems", "Presentation", "Copy"],
  },
  {
    icon: Cpu,
    title: "AI Driven Design",
    description: "Use AI to speed up production and generate visual concepts",
    skills: ["Midjourney", "ChatGPT", "AI workflows"],
  },
  {
    icon: BookOpen,
    title: "Print Production",
    description: "Full-cycle book production: editing, cover, layout, prepress",
    skills: ["Editorial design", "Typography", "Layout"],
  },
  {
    icon: Search,
    title: "UX Review",
    description: "Review projects, provide structured feedback, mentor designers",
    skills: ["UX audit", "Mentoring", "Communication"],
  },
  {
    icon: FolderKanban,
    title: "Project Ownership",
    description: "Lead projects from idea to final delivery",
    skills: ["Project ownership", "Stakeholder management"],
  },
]

export function ServicesSection() {
  return (
    <section className="px-6 md:px-20 py-16 relative">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#1f1f1f] rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Section Header */}
          <div className="text-center mb-10">
            {/* Flower icon */}
            <div className="flex justify-center mb-4">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="10" r="5" fill="#ff4a3b" />
                <circle cx="10" cy="16" r="5" fill="#ff4a3b" />
                <circle cx="22" cy="16" r="5" fill="#ff4a3b" />
                <circle cx="16" cy="22" r="5" fill="#ff4a3b" />
                <circle cx="16" cy="16" r="4" fill="#f2c94c" />
              </svg>
            </div>
            <p className="text-[#979797] text-xs tracking-[0.3em] uppercase mb-2">MY Experience resume</p>
            <h2 className="font-serif text-3xl md:text-4xl text-white italic">My Services Area</h2>
          </div>

          {/* Services List */}
          <div className="divide-y divide-[#333333]">
            {services.map((service, index) => (
              <div key={index} className="py-5 flex flex-col md:flex-row md:items-center gap-4">
                {/* Icon & Title */}
                <div className="flex items-center gap-3 md:w-48 shrink-0">
                  <service.icon className="w-5 h-5 text-[#ff4a3b]" />
                  <h3 className="font-serif text-lg text-white">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[#828282] text-sm flex-1 md:max-w-64">{service.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-x-4 gap-y-1 md:w-44">
                  {service.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-[#6fcf97] rotate-45" />
                      <span className="text-[#c1c1c1] text-xs">{skill}</span>
                    </div>
                  ))}
                </div>

                {/* Arrow Button */}
                <button
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors bg-[#333333] text-white hover:bg-[#4f4f4f]"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          {/* Decorative Flower - Bottom Right */}
          <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-90">
            <svg viewBox="0 0 100 100" fill="none">
              <ellipse cx="50" cy="30" rx="20" ry="30" fill="#f2c94c" />
              <ellipse cx="30" cy="50" rx="20" ry="30" fill="#6fcf97" transform="rotate(-60 30 50)" />
              <ellipse cx="70" cy="50" rx="20" ry="30" fill="#6fcf97" transform="rotate(60 70 50)" />
              <ellipse cx="40" cy="70" rx="18" ry="25" fill="#f2c94c" transform="rotate(-30 40 70)" />
              <ellipse cx="60" cy="70" rx="18" ry="25" fill="#6fcf97" transform="rotate(30 60 70)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
