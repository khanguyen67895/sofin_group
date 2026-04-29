import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import img01 from '@/assets/images/ic_profile1.png'
import img02 from '@/assets/images/ic_profile2.png'
import img03 from '@/assets/images/ic_profile3.png'
import img04 from '@/assets/images/ic_profile4.png'
import icLeft from '@/assets/images/ic_left.png'
import icRight from '@/assets/images/ic_right.png'

const experts = [
  { name: 'Nguyễn Thị Hằng', title: 'CO-FOUNDER, VPBANK', image: img01 },
  { name: 'Đỗ Văn An',        title: 'CO-FOUNDER, VPBANK', image: img02 },
  { name: 'Phạm Thị Lan',     title: 'CO-FOUNDER, VPBANK', image: img04 },
  { name: 'Trần Văn Minh',    title: 'CO-FOUNDER, VPBANK', image: img03 },
]

export default function EcosystemExperts() {
  const [current, setCurrent] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const isNavigating = useRef(false)

  const goTo = (idx: number) => {
    const next = Math.max(0, Math.min(idx, experts.length - 1))
    setCurrent(next)
    isNavigating.current = true
    const el = scrollRef.current?.children[next] as HTMLElement | undefined
    el?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    setTimeout(() => { isNavigating.current = false }, 500)
  }

  const handleScroll = () => {
    if (isNavigating.current || !scrollRef.current) return
    const card = scrollRef.current.children[0] as HTMLElement
    setCurrent(Math.round(scrollRef.current.scrollLeft / (card.clientWidth + 16)))
  }

  return (
    <section className="pt-16 md:pt-24 bg-neutral-950">
      <div className="mx-auto px-5 sm:px-10 md:px-20 lg:px-30">

        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary-500 text-[13px] font-heading font-semibold tracking-widest uppercase">
            Đội ngũ chuyên gia
          </span>
        </motion.div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto pb-2"
            style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}
          >
            {experts.map((e) => (
              <div
                key={e.name}
                className="shrink-0 w-[75vw] flex flex-col gap-4 border-t border-l border-neutral-700 px-5 py-5"
                style={{ scrollSnapAlign: 'center' }}
              >
                <div className="overflow-hidden">
                  <img
                    src={e.image}
                    alt={e.name}
                    className="w-full h-72 object-cover object-top"
                  />
                </div>
                <div>
                  <p className="text-white font-heading font-bold text-[14px]">{e.name}</p>
                  <p className="text-neutral-500 text-[11px] tracking-widest uppercase mt-0.5">{e.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Nav */}
          <div className="flex items-center gap-3 mt-5">
            <button onClick={() => goTo(current - 1)} className="w-9 h-9 flex items-center justify-center hover:opacity-70 transition-opacity">
              <img src={icLeft} alt="Prev" className="w-9 h-9 object-contain" />
            </button>
            <span className="text-sm text-neutral-500 tabular-nums">
              {current + 1}/{experts.length}
            </span>
            <button onClick={() => goTo(current + 1)} className="w-9 h-9 flex items-center justify-center hover:opacity-70 transition-opacity">
              <img src={icRight} alt="Next" className="w-9 h-9 object-contain" />
            </button>
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:block">
          <div className="relative grid grid-cols-4 gap-x-0 mt-24">
            <div className="absolute -top-10 bottom-0 left-0 w-px bg-neutral-800" />
            <div className="absolute -top-10 bottom-0 left-1/4 w-px bg-neutral-800" />
            <div className="absolute -top-10 bottom-0 left-2/4 w-px bg-neutral-800" />
            <div className="absolute -top-10 bottom-0 left-3/4 w-px bg-neutral-800" />
            <div className="absolute -top-10 bottom-0 right-0 w-px bg-neutral-800" />

            {experts.map((e, i) => (
              <motion.div
                key={e.name}
                className={`flex flex-col gap-4 px-6 py-6 border-t border-neutral-700 ${i % 2 === 1 ? 'mt-16' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              >
                <div className="overflow-hidden">
                  <img
                    src={e.image}
                    alt={e.name}
                    className="w-full h-80 lg:h-96 object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <p className="text-white font-heading font-bold text-[14px]">{e.name}</p>
                  <p className="text-neutral-500 text-[11px] tracking-widest uppercase mt-0.5">{e.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
