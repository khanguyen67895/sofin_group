import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import icLeft from '@/assets/images/ic_left.png'
import icRight from '@/assets/images/ic_right.png'
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
    const card = scrollRef.current.children[0] as HTMLElement
    const scrollAmount = (card?.clientWidth ?? 400) + 16
    scrollRef.current.scrollBy({ left: dir === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' })
  }

  const handleScroll = () => {
    if (!scrollRef.current) return
    const card = scrollRef.current.children[0] as HTMLElement
    const idx = Math.round(scrollRef.current.scrollLeft / ((card?.clientWidth ?? 400) + 16))
    setCurrent(idx)
  }

  return (
    <section
      className="py-10 md:py-10 bg-[#050505]"
      style={{ clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)' }}
    >
      <div className="mx-auto">

        {/* Header */}
        <motion.div
          className="flex items-start justify-between mb-10 px-5 sm:px-10 md:px-20 lg:px-30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="block text-[10px] font-heading text-neutral-500 tracking-[0.15em] uppercase mb-2">
              SANDBOX ĐÀ NẴNG
            </span>
            <h2
              className="font-heading font-bold text-primary-500"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              Hình ảnh hoạt động
            </h2>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => scrollTo('left')}
              className="w-9 h-9 flex items-center justify-center hover:opacity-70 transition-opacity"
            >
              <img src={icLeft} alt="Previous" className="w-9 h-9 object-contain" />
            </button>
            <span className="text-sm text-neutral-500 tabular-nums w-9 text-center">
              {current + 1}/{slides.length}
            </span>
            <button
              onClick={() => scrollTo('right')}
              className="w-9 h-9 flex items-center justify-center hover:opacity-70 transition-opacity"
            >
              <img src={icRight} alt="Next" className="w-9 h-9 object-contain" />
            </button>
          </div>
        </motion.div>

        {/* Scrollable images */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto pb-4 px-5 sm:px-10 md:px-20 lg:px-30"
          style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}
        >
          {slides.map((slide) => (
            <div
              key={slide.label}
              className="relative shrink-0 w-[85vw] sm:w-[70vw] md:w-150 h-60 md:h-80 overflow-hidden cursor-pointer group"
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
        </motion.div>

        {/* Mobile nav — bottom left */}
        <div className="flex md:hidden items-center gap-2 mt-4 px-5 sm:px-10">
          <button
            onClick={() => scrollTo('left')}
            className="w-9 h-9 flex items-center justify-center hover:opacity-70 transition-opacity"
          >
            <img src={icLeft} alt="Previous" className="w-9 h-9 object-contain" />
          </button>
          <span className="text-sm text-neutral-500 tabular-nums w-9 text-center">
            {current + 1}/{slides.length}
          </span>
          <button
            onClick={() => scrollTo('right')}
            className="w-9 h-9 flex items-center justify-center hover:opacity-70 transition-opacity"
          >
            <img src={icRight} alt="Next" className="w-9 h-9 object-contain" />
          </button>
        </div>
      </div>
    </section>
  )
}
