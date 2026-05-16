import { useState, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import icSanbox from '@/assets/images/ic_sanbox.png'
import icSanbox2x from '@/assets/images/ic_sanbox@2x.png'
// import icLeft from '@/assets/images/ic_left.png'
// import icRight from '@/assets/images/ic_right.png'
import img1 from '@/assets/images/image_action1.jpg'
import img2 from '@/assets/images/image_action2.png'
import img3 from '@/assets/images/image_action3.png'
import img4 from '@/assets/images/image_action4.jpg'

const tabs = [
  'Hợp tác & Phát triển',
  'Đào tạo & Huấn luyện',
  'Ươm mầm tài năng',
  'Kết nối & Chia sẻ',
]

const slides = [
  { src: img1, label: 'Hội nghị công nghệ 2024', tab: 0 },
  { src: img2, label: 'Ra mắt nền tảng SofinOS', tab: 0 },
  { src: img3, label: 'Chương trình đào tạo 2024', tab: 0 },
  { src: img4, label: 'Ký kết đối tác chiến lược', tab: 0 },
]

export default function ActivitySection() {
  const [activeTab, setActiveTab] = useState(0)
  // const [current, setCurrent] = useState(0)

  const filteredSlides = slides.filter(s => s.tab === activeTab)
  const displaySlides = filteredSlides.length > 0 ? filteredSlides : slides

  const autoplay = Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    dragFree: false,
    loop: true,
    containScroll: false,
  }, [autoplay])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    // setCurrent(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    return () => { emblaApi.off('select', onSelect) }
  }, [emblaApi, onSelect])

  // const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  // const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const handleTabChange = (idx: number) => {
    setActiveTab(idx)
    // setCurrent(0)
    emblaApi?.scrollTo(0, false)
  }

  return (
    <section
      className="relative py-10 md:py-16"
      style={{ background: 'radial-gradient(50% 50% at 50% 100%, #242424 0%, rgba(15, 15, 15, 0.00) 100%), radial-gradient(50% 56.97% at 50% 0%, #242424 0%, rgba(15, 15, 15, 0.00) 100%), #0F0F0F' }}
    >
      <div className="mx-auto">

        {/* Header */}
        <motion.div
          className="mb-8 px-5 sm:px-10 md:px-20 lg:px-30 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={icSanbox}
            srcSet={`${icSanbox2x} 2x`}
            alt="Sandbox Đà Nẵng"
            className="h-8 object-contain mb-2"
          />
          <h2
            className="text-center text-4xl font-medium font-['Unbounded'] leading-12 text-primary-500"
          >
            Hình ảnh hoạt động
          </h2>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          className="flex justify-start md:justify-center gap-2 mb-4 px-5 sm:px-10 md:px-20 lg:px-30 overflow-x-auto md:overflow-visible flex-nowrap md:flex-wrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {tabs.map((tab, idx) => (
            activeTab === idx ? (
              <button
                key={tab}
                onClick={() => handleTabChange(idx)}
                className="px-4 py-1 rounded-full bg-primary-500 text-white text-sm font-semibold leading-5 shrink-0 whitespace-nowrap"
              >
                {tab}
              </button>
            ) : (
              <div
                key={tab}
                className="rounded-full p-px shrink-0"
                style={{ background: 'linear-gradient(180deg, #666666 0%, #242424 100%)' }}
              >
                <button
                  onClick={() => handleTabChange(idx)}
                  className="px-4 py-1 rounded-full bg-[#0F0F0F] text-neutral-400 hover:text-neutral-200 text-sm font-semibold transition-colors duration-200 whitespace-nowrap"
                >
                  {tab}
                </button>
              </div>
            )
          ))}
        </motion.div>

        {/* Embla carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div
            ref={emblaRef}
            className="overflow-hidden px-5 sm:px-10 md:px-20 lg:px-30"
          >
            <div className="flex pb-4 -ml-4">
              {displaySlides.map((slide) => (
                <div
                  key={slide.label}
                  className="shrink-0 w-[85vw] sm:w-[70vw] md:w-150 pl-4"
                >
                  <div
                    className="relative h-60 md:h-91 overflow-hidden cursor-pointer p-2 rounded-2xl border-2 border-[#3C3C3C]"
                    style={{ background: 'radial-gradient(100% 53.36% at 0% 0%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), rgba(255, 255, 255, 0.05)' }}
                  >
                    <img
                      src={slide.src}
                      alt={slide.label}
                      className="w-full h-full rounded-[10px] object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-neutral-900/70 via-transparent to-transparent" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Carousel nav — centered bottom */}
        {/* <div className="flex items-center justify-center gap-6 mt-6">
          <button
            onClick={scrollPrev}
            className="w-14 h-14 flex items-center justify-center hover:opacity-70 transition-opacity"
          >
            <img src={icLeft} alt="Previous" className="w-14 h-14 object-contain" />
          </button>
          <span className="text-sm text-neutral-400 tabular-nums w-10 text-center">
            {current + 1}/{displaySlides.length}
          </span>
          <button
            onClick={scrollNext}
            className="w-14 h-14 flex items-center justify-center hover:opacity-70 transition-opacity"
          >
            <img src={icRight} alt="Next" className="w-14 h-14 object-contain" />
          </button>
        </div> */}

      </div>
    </section>
  )
}
