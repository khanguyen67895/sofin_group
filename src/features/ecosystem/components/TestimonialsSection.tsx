import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import icLeft from '@/assets/images/ic_left.png'
import icRight from '@/assets/images/ic_right.png'
import img01 from '@/assets/images/chuyen-gia-01.png'
import img02 from '@/assets/images/chuyen-gia-02.png'
import img03 from '@/assets/images/chuyen-gia-03.png'
import img04 from '@/assets/images/chuyen-gia-04.png'

const testimonials = [
  {
    text: 'Giải pháp của SOFIN Group giúp đội ngũ chúng tôi nhìn rõ dữ liệu và xu hướng thị trường, thay vì ra quyết định theo cảm tính. Các báo cáo chi tiết, dễ hiểu và cập nhật nhanh chóng, hỗ trợ ban lãnh đạo phản ứng kịp thời và tự tin hơn trong chiến lược dài hạn, từ đó nâng cao hiệu quả công việc.',
    name: 'Nguyễn Thị Hằng',
    title: 'CO-FOUNDER, VPBANK',
    image: img01,
  },
  {
    text: 'Giải pháp của chúng tôi giúp đội ngũ nắm bắt dữ liệu và xu hướng thị trường một cách rõ ràng, thay vì chỉ dựa vào cảm tính để đưa ra quyết định. Các báo cáo chi tiết, dễ hiểu và được cập nhật nhanh nhất nhanh chóng, giúp ban lãnh đạo phản ứng kịp thời và tự tin hơn trong chiến lược dài hạn.',
    name: 'Trần Văn Minh',
    title: 'CO-FOUNDER, VPBANK',
    image: img02,
  },
  {
    text: 'Với một cái website mới hoặc thị không khó, nhưng cái web của tôi là cái web nó phải qua khoảng 3-4 tay dev khác nhau, code sắp xếp lộn xộn, mấy đội dev thêm tính năng các kiểu, rồi API tùa lưa dữ liệu từ ngoài vào. Recommend cho anh em tôi tưu pagespeed cho web mình tại team SOFIN nha.',
    name: 'Phạm Thị Lan',
    title: 'CO-FOUNDER, VPBANK',
    image: img03,
  },
  {
    text: 'Sau một thời gian dài vất vả tìm nhiều đối tác hỗ trợ chúng tôi về công nghệ Website, tư vấn về công nghệ để quản lý doanh nghiệp và tôi đều không hài lòng; cho đến khi gặp SOFIN thì tôi dừng ở đội ngũ này và tôi chỉ tập trung để phát triển doanh nghiệp chứ không phải lo lắng nhiều về công nghệ nữa.',
    name: 'Đỗ Văn An',
    title: 'CO-FOUNDER, VPBANK',
    image: img04,
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const isNavigating = useRef(false)

  const goTo = (idx: number) => {
    const next = Math.max(0, Math.min(idx, testimonials.length - 1))
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
    <section className="bg-neutral-950">
      <div className="mx-auto px-5 sm:px-10 md:px-20 lg:px-30">

        <motion.div
          className="mb-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary-500 text-[13px] font-heading font-semibold tracking-widest uppercase">
            Phản hồi của khách hàng
          </span>
        </motion.div>

        {/* Mobile carousel */}
        <div className="lg:hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto pb-2"
            style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="shrink-0 w-[85vw] flex flex-col justify-between gap-8 border-t border-l border-neutral-700 px-6 py-6"
                style={{ scrollSnapAlign: 'center' }}
              >
                <p className="text-white text-[16px] leading-[1.85]">{t.text}</p>
                <div className="flex items-center gap-3">
                  <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover object-top shrink-0" />
                  <div>
                    <p className="text-white font-semibold text-[13px]">{t.name}</p>
                    <p className="text-neutral-500 text-[10px] tracking-widest uppercase mt-0.5">{t.title}</p>
                  </div>
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
              {current + 1}/{testimonials.length}
            </span>
            <button onClick={() => goTo(current + 1)} className="w-9 h-9 flex items-center justify-center hover:opacity-70 transition-opacity">
              <img src={icRight} alt="Next" className="w-9 h-9 object-contain" />
            </button>
          </div>
        </div>

        {/* Desktop grid */}
        <div className="hidden lg:block">
          <div className="relative grid grid-cols-4 gap-x-0">
            <div className="absolute -top-10 bottom-0 left-0 w-px bg-neutral-800" />
            <div className="absolute -top-10 bottom-0 left-1/4 w-px bg-neutral-800" />
            <div className="absolute -top-10 bottom-0 left-2/4 w-px bg-neutral-800" />
            <div className="absolute -top-10 bottom-0 left-3/4 w-px bg-neutral-800" />
            <div className="absolute -top-10 bottom-0 right-0 w-px bg-neutral-800" />

            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className={`flex flex-col justify-between gap-8 px-6 py-6 border-t border-neutral-700 ${i % 2 === 1 ? 'mt-16' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              >
                <p className="text-white text-[16px] leading-[1.85] flex-1">{t.text}</p>
                <div className="flex items-center gap-3">
                  <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover object-top shrink-0" />
                  <div>
                    <p className="text-white font-semibold text-[13px]">{t.name}</p>
                    <p className="text-neutral-500 text-[10px] tracking-widest uppercase mt-0.5">{t.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
