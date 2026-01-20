"use client"

export function SkillsSection() {
  const skills = [
    { name: "Figma", percentage: "95%", icon: "figma", color: "bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a]", hasBar: true, barColor: "from-[#ff7262] to-[#ff4a3b]" },
    { name: "Lovable", percentage: "86%", icon: "lovable", color: "bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a]", hasBar: true, barColor: "from-[#9333ea] to-[#7c3aed]" },
    { name: "Framer", percentage: "95%", icon: "framer", color: "bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a]", hasBar: true, barColor: "from-[#00d4ff] to-[#0099ff]" },
  ]

  const tools = [
    { name: "Adobe Illustrator", icon: "ai" },
    { name: "Adobe Photoshop", icon: "ps" },
  ]

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#0e0e0e]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 relative">
          {/* Decorative curved arrow left */}
          <div className="absolute left-1/4 -top-4 hidden md:block">
            <svg width="40" height="60" viewBox="0 0 40 60" fill="none">
              <path d="M30 5 C10 5 5 30 5 55" stroke="#4f4f4f" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              <circle cx="5" cy="55" r="4" stroke="#4f4f4f" strokeWidth="1.5" fill="none"/>
            </svg>
          </div>
          
          <p className="text-[#828282] tracking-[0.3em] text-xs uppercase mb-3">My Skill</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white italic">Professional Skill</h2>
          
          {/* Decorative curved arrow bottom */}
          <div className="absolute left-16 top-20 hidden md:block">
            <svg width="50" height="30" viewBox="0 0 50 30" fill="none">
              <path d="M5 15 Q25 15 45 15" stroke="#4f4f4f" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              <path d="M40 10 L48 15 L40 20" stroke="#4f4f4f" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Skills with percentages */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="relative flex items-center gap-3 bg-[#1a1a1a] border border-[#333333] rounded-full px-5 py-3 min-w-[160px] overflow-hidden"
            >
              {/* Progress bar background */}
              {skill.hasBar && (
                <div 
                  className={`absolute left-0 top-0 bottom-0 bg-gradient-to-r ${skill.barColor} opacity-30 rounded-full`}
                  style={{ width: skill.percentage }}
                />
              )}
              
              <div className="relative z-10 flex items-center gap-3">
                {/* Icon */}
                {skill.icon === "figma" && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2H8.5C6.567 2 5 3.567 5 5.5S6.567 9 8.5 9H12V2Z" fill="#F24E1E"/>
                    <path d="M12 2H15.5C17.433 2 19 3.567 19 5.5S17.433 9 15.5 9H12V2Z" fill="#FF7262"/>
                    <path d="M12 9H8.5C6.567 9 5 10.567 5 12.5S6.567 16 8.5 16H12V9Z" fill="#A259FF"/>
                    <path d="M12 16H8.5C6.567 16 5 17.567 5 19.5S6.567 23 8.5 23C10.433 23 12 21.433 12 19.5V16Z" fill="#0ACF83"/>
                    <circle cx="15.5" cy="12.5" r="3.5" fill="#1ABCFE"/>
                  </svg>
                )}
                {skill.icon === "lovable" && (
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#ff6b6b] to-[#ee5a5a] flex items-center justify-center">
                    <span className="text-white text-xs">♥</span>
                  </div>
                )}
                {skill.icon === "framer" && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M4 2h16v7h-8l8 7H4v-7h8L4 2z" fill="#00D4FF"/>
                    <path d="M4 16h8v6l-8-6z" fill="#00D4FF"/>
                  </svg>
                )}
                <span className="text-white text-sm font-medium">{skill.name}</span>
                <span className="text-[#828282] text-sm">{skill.percentage}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Tools row */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          {/* Behance link */}
          <div className="flex items-center gap-2 text-[#ff4a3b]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-sm">Behance</span>
          </div>

          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-3 bg-[#1a1a1a] border border-[#333333] rounded-full px-5 py-3"
            >
              {tool.icon === "ai" && (
                <div className="w-6 h-6 bg-[#ff9a00] rounded flex items-center justify-center">
                  <span className="text-[#300000] text-xs font-bold">Ai</span>
                </div>
              )}
              {tool.icon === "ps" && (
                <div className="w-6 h-6 bg-[#31a8ff] rounded flex items-center justify-center">
                  <span className="text-[#001e36] text-xs font-bold">Ps</span>
                </div>
              )}
              <span className="text-white text-sm">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
