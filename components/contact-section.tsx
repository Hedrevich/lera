"use client"

export function ContactSection() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#0e0e0e] relative">
      <div className="max-w-5xl mx-auto">
        {/* Yellow X Decoration */}
        <div className="absolute left-4 md:left-12 lg:left-20 top-16">
          <svg width="100" height="120" viewBox="0 0 100 120" fill="none">
            <ellipse cx="30" cy="60" rx="28" ry="55" fill="#f2c94c" />
            <ellipse cx="70" cy="60" rx="28" ry="55" fill="#f2c94c" transform="rotate(90 70 60)" />
            <ellipse cx="30" cy="60" rx="28" ry="55" fill="#ff4a3b" transform="translate(10, 10)" />
          </svg>
        </div>

        {/* Contact Card */}
        <div className="bg-[#1a1a1a] rounded-3xl p-8 md:p-12 ml-auto max-w-2xl relative overflow-hidden">
          {/* Spiral Decoration */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-20">
            <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
              <circle cx="75" cy="75" r="70" stroke="#4f4f4f" strokeWidth="1" fill="none"/>
              <circle cx="75" cy="75" r="55" stroke="#4f4f4f" strokeWidth="1" fill="none"/>
              <circle cx="75" cy="75" r="40" stroke="#4f4f4f" strokeWidth="1" fill="none"/>
              <circle cx="75" cy="75" r="25" stroke="#4f4f4f" strokeWidth="1" fill="none"/>
              <circle cx="75" cy="75" r="10" stroke="#4f4f4f" strokeWidth="1" fill="none"/>
            </svg>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl text-white italic mb-10 relative z-10">Contact Info</h2>

          <div className="space-y-6 relative z-10">
            {/* Telegram */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#252525] flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#828282" strokeWidth="1.5">
                  <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-[#ff4a3b] text-sm">Say Hello</p>
                <p className="text-white font-serif text-lg">@Lera_Melets</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#252525] flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#828282" strokeWidth="1.5">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 6L12 13L2 6" />
                </svg>
              </div>
              <div>
                <p className="text-[#ff4a3b] text-sm">Send Email</p>
                <p className="text-white font-serif text-lg">valeryiamelets@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
