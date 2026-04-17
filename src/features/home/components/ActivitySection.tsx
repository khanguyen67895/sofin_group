import { useRef, useState } from 'react'
import img1 from '@/assets/images/image_action1.jpg'
import img2 from '@/assets/images/image_action2.png'
import img3 from '@/assets/images/image_action3.png'
import img4 from '@/assets/images/image_action4.jpg'

const slides = [
  { src: img1, label: 'Hội nghị công nghệ 2024' },
  { src: img2, label: 'Ra mắt nền tảng SofinOS' },
  { src: img3, label: 'Chương trình đào tạo 2024' },
  { src: img4, label: 'Ký kết đối tác chiến lược' },
]

export default function ActivitySection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)

  const scrollTo = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    const target = dir === 'left' ? 0 : scrollRef.current.scrollWidth
    scrollRef.current.scrollTo({ left: target, behavior: 'smooth' })
  }

  const handleScroll = () => {
    if (!scrollRef.current) return
    const card = scrollRef.current.children[0] as HTMLElement
    const idx = Math.round(scrollRef.current.scrollLeft / ((card?.clientWidth ?? 400) + 16))
    setCurrent(idx)
  }

  return (
    <section className="py-20 md:py-28 bg-neutral-950">
      <div className="mx-auto">

        {/* Header */}
        <div className="flex items-start justify-between mb-10 px-20 md:px-30">
          <div>
            <span className="block text-[10px] font-heading text-neutral-100 tracking-[0.15em] uppercase mb-2">
              /SANDBOX ĐÀ NẴNG
            </span>
            <h2
              className="font-heading font-bold text-primary-500"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              Hình ảnh hoạt động
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo('left')}
              className="w-10 h-10 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:border-primary-500 hover:text-primary-500 transition-colors"
            >
              ←
            </button>
            <span className="text-sm text-neutral-500 tabular-nums">
              {current + 1}/{slides.length}
            </span>
            <button
              onClick={() => scrollTo('right')}
              className="w-10 h-10 border border-neutral-700 flex items-center justify-center text-neutral-400 hover:border-primary-500 hover:text-primary-500 transition-colors"
            >
              →
            </button>
          </div>
        </div>

        {/* Scrollable images */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto pb-4"
          style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', paddingInline: '5rem' }}
        >
          {slides.map((slide) => (
            <div
              key={slide.label}
              className="relative shrink-0 w-150 h-80 overflow-hidden cursor-pointer group"
              style={{ scrollSnapAlign: 'center' }}
            >
              <img
                src={slide.src}
                alt={slide.label}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-neutral-900/70 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
