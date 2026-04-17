const milestones = [
  {
    year: '2025',
    items: ['Hệ sinh thái 15+ quốc gia'],
  },
  {
    year: '2023',
    items: ['Giải thưởng Innovation ASEAN'],
  },
  {
    year: '2022',
    items: ['Quỹ đầu tư Startup công nghệ'],
  },
  {
    year: '2021',
    items: ['Đối tác chiến lược Google & Amazon'],
  },
  {
    year: '2020',
    items: ['Thành lập SOFIN Group'],
  },
]

export default function MilestoneSection() {
  return (
    <section className="py-15 md:py-20 bg-neutral-950">
      <div className="mx-auto px-5 sm:px-10 md:px-20 lg:px-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left — timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[72px] md:left-[88px] top-0 bottom-0 w-px bg-neutral-700/50" />

            <div className="flex flex-col gap-10">
              {milestones.map((m) => (
                <div key={m.year} className="flex items-start gap-6 md:gap-8">
                  <span
                    className="font-heading font-bold text-white shrink-0 w-14 md:w-18 text-right"
                    style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)' }}
                  >
                    {m.year}
                  </span>
                  {/* Dot */}
                  <div className="relative mt-2.5 shrink-0">
                    <div className="w-3 h-3 rounded-full bg-primary-500" />
                  </div>
                  <div className="flex flex-col gap-1 pt-0.5">
                    {m.items.map((item) => (
                      <p key={item} className="text-neutral-300 text-sm">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — heading */}
          <div className="order-first lg:order-last">
            <span className="text-[10px] font-heading text-neutral-500 tracking-[0.15em] uppercase block mb-2">
              OUR STORY
            </span>
            <h2
              className="font-heading font-bold text-white"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              Cột mốc<br />của SOFIN Group
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
