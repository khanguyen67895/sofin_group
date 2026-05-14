import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import icTick from '@/assets/images/ic_tick.png'
import bgVideo from '@/assets/video/48125552034f7f13a84de49e414ff004.mp4'

import icSection1 from '@/assets/images/ic_section1.png'
import icSection1x2 from '@/assets/images/ic_section1@2x.png'
import icSection2 from '@/assets/images/ic_section2.png'
import icSection2x2 from '@/assets/images/ic_section2@2x.png'
import icSection3 from '@/assets/images/ic_section3.png'
import icSection3x2 from '@/assets/images/ic_section3@2x.png'
import icSection4 from '@/assets/images/ic_section4.png'
import icSection4x2 from '@/assets/images/ic_section4@2x.png'
import icSection5 from '@/assets/images/ic_section5.png'
import icSection5x2 from '@/assets/images/ic_section5@2x.png'

import icItem1 from '@/assets/images/ic_item_core_value1.png'
import icItem1x2 from '@/assets/images/ic_item_core_value1@2x.png'
import icItem2 from '@/assets/images/ic_item_core_value2.png'
import icItem2x2 from '@/assets/images/ic_item_core_value2@2x.png'
import icItem3 from '@/assets/images/ic_item_core_value3.png'
import icItem3x2 from '@/assets/images/ic_item_core_value3@2x.png'
import icItem4 from '@/assets/images/ic_item_core_value4.png'
import icItem4x2 from '@/assets/images/ic_item_core_value4@2x.png'
import icItem5 from '@/assets/images/ic_item_core_value5.png'
import icItem5x2 from '@/assets/images/ic_item_core_value5@2x.png'

import icNum1 from '@/assets/images/ic_num1.png'
import icNum1x2 from '@/assets/images/ic_num1@2x.png'
import icNum2 from '@/assets/images/ic_num2.png'
import icNum2x2 from '@/assets/images/ic_num2@2x.png'
import icNum3 from '@/assets/images/ic_num3.png'
import icNum3x2 from '@/assets/images/ic_num3@2x.png'
import icNum4 from '@/assets/images/ic_num4.png'
import icNum4x2 from '@/assets/images/ic_num4@2x.png'
import icNum5 from '@/assets/images/ic_num5.png'
import icNum5x2 from '@/assets/images/ic_num5@2x.png'

const numIcons = [
  { src: icNum1, srcSet: `${icNum1x2} 2x` },
  { src: icNum2, srcSet: `${icNum2x2} 2x` },
  { src: icNum3, srcSet: `${icNum3x2} 2x` },
  { src: icNum4, srcSet: `${icNum4x2} 2x` },
  { src: icNum5, srcSet: `${icNum5x2} 2x` },
]

const CONTAINER_H = 500

const values = [
  {
    num: '01',
    title: 'Đồng đội',
    subtitle: 'Cùng nhau, chúng ta đi xa hơn.',
    description:
      'Tại SOFIN GROUP, không có thành công nào là của riêng ai. Chúng tôi tin rằng những thành tựu lớn nhất luôn đến từ tinh thần đồng đội — nơi mỗi cá nhân đóng góp thế mạnh riêng để tạo nên sức mạnh tập thể vượt trội.',
    items: [
      { label: 'Đoàn kết:', desc: 'Chung mục tiêu, cùng vượt thử thách.' },
      { label: 'Hợp tác:', desc: 'Lắng nghe, tôn trọng và phối hợp hiệu quả.' },
      { label: 'Sẻ chia:', desc: 'Hỗ trợ, chia sẻ kiến thức và cùng phát triển.' },
    ],
    section: { src: icSection1, srcSet: `${icSection1x2} 2x` },
    icon: { src: icItem1, srcSet: `${icItem1x2} 2x` },
  },
  {
    num: '02',
    title: 'Sáng tạo',
    subtitle: 'Dám nghĩ khác, dám làm khác.',
    description:
      'Trong kỷ nguyên công nghệ, sáng tạo không còn là lựa chọn — đó là điều bắt buộc. Chúng tôi khuyến khích mỗi thành viên đặt câu hỏi, thử nghiệm ý tưởng mới và không ngại thất bại để tìm ra những giải pháp đột phá.',
    items: [
      { label: 'Đổi mới:', desc: 'Không ngừng cải tiến và phát triển.' },
      { label: 'Đột phá:', desc: 'Tư duy khác biệt để giải quyết vấn đề mới.' },
      { label: 'Khám phá:', desc: 'Sẵn sàng đón nhận công nghệ và xu hướng mới.' },
    ],
    section: { src: icSection2, srcSet: `${icSection2x2} 2x` },
    icon: { src: icItem2, srcSet: `${icItem2x2} 2x` },
  },
  {
    num: '03',
    title: 'Chính trực',
    subtitle: 'Niềm tin được xây trên sự trung thực.',
    description:
      'Chính trực là gốc rễ của mọi mối quan hệ bền vững. Chúng tôi cam kết trung thực với khách hàng, minh bạch với đối tác, công bằng với đồng nghiệp — bởi đó là cách duy nhất để xây dựng niềm tin lâu dài.',
    items: [
      { label: 'Trung thực:', desc: 'Nói thật, làm đúng cam kết.' },
      { label: 'Minh bạch:', desc: 'Rõ ràng trong mọi hành động.' },
      { label: 'Công bằng:', desc: 'Tôn trọng và công tâm.' },
    ],
    section: { src: icSection3, srcSet: `${icSection3x2} 2x` },
    icon: { src: icItem3, srcSet: `${icItem3x2} 2x` },
  },
  {
    num: '04',
    title: 'Linh hoạt',
    subtitle: 'Thích nghi nhanh, đi trước một bước.',
    description:
      'Thị trường công nghệ thay đổi từng ngày. Linh hoạt giúp SOFIN GROUP không chỉ thích nghi với những biến động, mà còn chủ động tạo ra thay đổi — luôn đi trước đối thủ một bước.',
    items: [
      { label: 'Thích nghi:', desc: 'Phản ứng nhanh nhạy trước thay đổi.' },
      { label: 'Cởi mở:', desc: 'Đón nhận điều mới như cơ hội.' },
      { label: 'Đa năng:', desc: 'Sẵn sàng vượt giới hạn.' },
    ],
    section: { src: icSection4, srcSet: `${icSection4x2} 2x` },
    icon: { src: icItem4, srcSet: `${icItem4x2} 2x` },
  },
  {
    num: '05',
    title: 'Tốc độ',
    subtitle: 'Lợi thế cạnh tranh trong kỷ nguyên số.',
    description:
      'Trong thế giới mà ý tưởng tốt nhất chỉ có giá trị khi được thực thi nhanh nhất, tốc độ trở thành vũ khí cạnh tranh hàng đầu. SOFIN GROUP đề cao sự quyết đoán, hành động kịp thời và triển khai hiệu quả.',
    items: [
      { label: 'Quyết đoán:', desc: 'Ra quyết định nhanh và chính xác.' },
      { label: 'Hiệu quả:', desc: 'Hoàn thành đúng hạn, tối ưu chất lượng.' },
      { label: 'Tiên phong:', desc: 'Dẫn đầu công nghệ và xu hướng mới.' },
    ],
    section: { src: icSection5, srcSet: `${icSection5x2} 2x` },
    icon: { src: icItem5, srcSet: `${icItem5x2} 2x` },
  },
]

export default function CoreValueSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollTop, setScrollTop] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [exitIndex, setExitIndex] = useState<number | null>(null)
  const [animKey, setAnimKey] = useState(0)
  const [scrollDir, setScrollDir] = useState<'down' | 'up'>('down')

  const handleScroll = () => {
    const st = scrollRef.current?.scrollTop ?? 0
    const newIndex = Math.min(Math.floor(st / CONTAINER_H), values.length - 1)
    if (newIndex !== activeIndex) {
      const dir = st > scrollTop ? 'down' : 'up'
      setScrollDir(dir)
      if (dir === 'up') setExitIndex(activeIndex)
      setActiveIndex(newIndex)
      setAnimKey(k => k + 1)
    }
    setScrollTop(st)
  }

  const activeValue = values[activeIndex]

  return (
    <section className=""
            style={{ background: 'radial-gradient(50% 50% at 50% 100%, #242424 0%, rgba(15, 15, 15, 0.00) 100%), radial-gradient(50% 56.97% at 50% 0%, #242424 0%, rgba(15, 15, 15, 0.00) 100%), #0F0F0F' }}
    >
      <div className="mx-auto">

        {/* Fixed-height scroll container */}
        <div className="relative overflow-hidden" style={{ height: `${CONTAINER_H}px` }}>

          {/* Background video */}
          <video
            src={bgVideo}
            autoPlay muted loop playsInline
            className="absolute inset-0 w-[43%] h-full object-cover pointer-events-none"
          />

          {/* Edge fades – blend video into section bg */}
          <div className="absolute inset-y-0 left-0 w-16 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #0F0F0F 0%, transparent 100%)' }} />
          <div className="absolute inset-y-0 right-0 w-full pointer-events-none"
            style={{ background: 'linear-gradient(to left, #0F0F0F 60%, transparent 100%)' }} />
          <div className="absolute inset-x-0 top-0 h-32 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, #0F0F0F 0%, transparent 100%)' }} />
          <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
            style={{ background: 'linear-gradient(to top, #0F0F0F 0%, transparent 100%)' }} />

          {/* Desktop animated icon overlays – hidden on mobile */}
          {exitIndex !== null && scrollDir === 'up' && (
            <div
              key={`exit-${animKey}`}
              className="icon-exit-up-left hidden md:block absolute left-[28%] top-1/2 w-80 h-80 pointer-events-none"
            >
              <img
                src={values[exitIndex].section.src}
                srcSet={values[exitIndex].section.srcSet}
                alt={values[exitIndex].title}
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          )}

          <div
            key={`enter-${animKey}`}
            className={`${scrollDir === 'down' ? 'icon-enter-down' : 'icon-enter-up'} hidden md:block absolute left-[28%] top-1/2 w-100 h-100 pointer-events-none`}
          >
            <img
              src={activeValue.section.src}
              srcSet={activeValue.section.srcSet}
              alt={activeValue.title}
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>

          {/* Scrollable content track */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="absolute inset-0 overflow-y-scroll hide-scrollbar"
            style={{ scrollSnapType: 'y mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}
          >
            {values.map((v, vi) => (
              <div
                key={v.num}
                className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-20 px-8 md:px-16"
                style={{ height: `${CONTAINER_H}px`, scrollSnapAlign: 'start' }}
              >
                {/* Mobile: image on top, static */}
                <img
                  src={v.section.src}
                  srcSet={v.section.srcSet}
                  alt={v.title}
                  className="md:hidden shrink-0 w-32 h-32 object-contain drop-shadow-2xl"
                />
                {/* Desktop: spacer to match overlay icon position */}
                <div className="hidden md:block shrink-0 w-60" aria-hidden="true" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={v.num}
                    initial={{ opacity: 0, y: scrollDir === 'down' ? 30 : -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: scrollDir === 'down' ? -30 : 30 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    className="flex flex-col gap-5 max-w-lg"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={numIcons[vi].src}
                        srcSet={numIcons[vi].srcSet}
                        alt={v.num}
                        className="w-12 h-12 shrink-0 object-contain"
                      />
                      <div>
                        <h3 className="text-primary-500 text-xl md:text-[32px] font-SemiBold font-['Unbounded'] leading-tight">
                          {v.title}
                        </h3>
                        <p className="text-[#F0EDE6] text-xl font-['Mona_Sans'] mt-0.5">
                          {v.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-text-neutral-normal text-sm md:text-xl font-['Mona_Sans'] leading-7">
                      {v.description}
                    </p>

                    <ul className="flex flex-row gap-2.5">
                      {v.items.map((item) => (
                        <li
                          key={item.label}
                          className="flex-1 flex flex-col gap-2 rounded-xl p-3"
                          style={{ background: 'rgba(255,255,255,0.05)' }}
                        >
                          <img src={icTick} alt="" className="w-5 h-5 object-contain" />
                          <span className="text-neutral-100 font-semibold text-xl font-['Mona_Sans'] leading-5">
                            {item.label.replace(':', '')}
                          </span>
                          <span className="text-neutral-100 text-base font-['Mona_Sans'] leading-5">
                            {item.desc}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col gap-2 pointer-events-none">
            {values.map((v, i) => (
              <div
                key={v.num}
                className="w-1.5 rounded-full transition-all duration-300"
                style={{
                  height: i === activeIndex ? '24px' : '6px',
                  background: i === activeIndex ? '#FF754C' : 'rgba(255,255,255,0.25)',
                }}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
