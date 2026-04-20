import icRecStart from '@/assets/images/ic_rec_start.png'

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
    items: ['Thành lập SOFIN GROUP Ra mắt nền tảng\n AI đầu tiên'],
  },
]

export default function MilestoneSection() {
  return (
    <section className="py-15 md:py-20 bg-neutral-950">
      <div className="mx-auto px-5 sm:px-10 md:px-20 lg:px-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">

          {/* Left — timeline */}
          <div className="relative">
            {/* Vertical line through diamond centers */}

            <div className="flex flex-col gap-1">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex flex-col items-start text-left lg:items-end lg:text-right">
                  <div className="flex items-center gap-4 flex-row-reverse lg:flex-row">
                    <span
                      className="font-heading font-bold text-white"
                      style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)' }}
                    >
                      {m.year}
                    </span>
                    <img
                      src={icRecStart}
                      alt=""
                      className="w-5 h-5 left-0.5 relative z-10 bg-neutral-950"
                    />
                  </div>
                  <div className="flex flex-col gap-1 pl-9 lg:pl-0 lg:pr-9">
                    {m.items.map((item) => (
                      <p key={item} className="text-white text-sm">
                        {item}
                      </p>
                    ))}
                  </div>
                  {i === milestones.length - 1 ? <></> : <div className="h-12 lg:h-24 -mt-4 ml-2.75 lg:ml-0 lg:mr-1.75 w-0.5 bg-neutral-700/50" />}
                </div>
              ))}
            </div>
          </div>

          {/* Right — heading */}
          <div className="order-first lg:order-last lg:sticky lg:top-24 lg:self-start">
            <span className="text-[10px] font-heading text-neutral-500 tracking-[0.15em] uppercase block mb-2">
              HOW WE START
            </span>
            <h2
              className="font-heading font-bold text-primary-500"
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
