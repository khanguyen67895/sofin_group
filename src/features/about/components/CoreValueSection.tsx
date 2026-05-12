import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import icCoreValue from '@/assets/images/ic_core_value.png'
import icCoreValue2x from '@/assets/images/ic_core_value@2x.png'
import imgAction1 from '@/assets/images/image_action1.jpg'
import imgAction2 from '@/assets/images/image_action2.png'
import imgAction3 from '@/assets/images/image_action3.png'
import imgAction4 from '@/assets/images/image_action4.jpg'
import bgCoreValue from '@/assets/images/bg_core_value.png'

const slideImages = [imgAction1, imgAction2, imgAction3, imgAction4, bgCoreValue]
import icLeft from '@/assets/images/ic_left.png'
import icLeft2x from '@/assets/images/ic_left@2x.png'
import icRight from '@/assets/images/ic_right.png'
import icRight2x from '@/assets/images/ic_right@2x.png'
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

const itemIcons = [
  { src: icItem1, srcSet: `${icItem1x2} 2x` },
  { src: icItem2, srcSet: `${icItem2x2} 2x` },
  { src: icItem3, srcSet: `${icItem3x2} 2x` },
  { src: icItem4, srcSet: `${icItem4x2} 2x` },
  { src: icItem5, srcSet: `${icItem5x2} 2x` },
]

const values = [
  {
    title: 'ĐỒNG ĐỘI',
    subtitle: 'Cùng nhau, chúng ta đi xa hơn.',
    description: 'Tại SOFIN GROUP, không có thành công nào là của riêng ai. Chúng tôi tin rằng những thành tựu lớn nhất luôn đến từ tinh thần đồng đội — nơi mỗi cá nhân đóng góp thế mạnh riêng để tạo nên sức mạnh tập thể vượt trội.',
    items: [
      { label: 'Đoàn kết:', desc: 'Chung mục tiêu, cùng vượt thử thách.' },
      { label: 'Hợp tác:', desc: 'Lắng nghe, tôn trọng và phối hợp hiệu quả.' },
      { label: 'Sẻ chia:', desc: 'Hỗ trợ, chia sẻ kiến thức và cùng phát triển.' },
    ],
    span: 1,
  },
  {
    title: 'SÁNG TẠO',
    subtitle: 'Dám nghĩ khác, dám làm khác.',
    description: 'Trong kỷ nguyên công nghệ, sáng tạo không còn là lựa chọn — đó là điều bắt buộc. Chúng tôi khuyến khích mỗi thành viên đặt câu hỏi, thử nghiệm ý tưởng mới và không ngại thất bại để tìm ra những giải pháp đột phá.',
    items: [
      { label: 'Đổi mới:', desc: 'Không ngừng cải tiến và phát triển.' },
      { label: 'Đột phá:', desc: 'Tư duy khác biệt để giải quyết vấn đề mới.' },
      { label: 'Khám phá:', desc: 'Sẵn sàng đón nhận công nghệ và xu hướng mới.' },
    ],
    span: 1,
  },
  {
    title: 'CHÍNH TRỰC',
    subtitle: 'Niềm tin được xây trên sự trung thực.',
    description: 'Chính trực là gốc rễ của mọi mối quan hệ bền vững. Chúng tôi cam kết trung thực với khách hàng, minh bạch với đối tác, công bằng với đồng nghiệp — bởi đó là cách duy nhất để xây dựng niềm tin lâu dài.',
    items: [
      { label: 'Trung thực:', desc: 'Nói thật, làm đúng cam kết.' },
      { label: 'Hợp tác:', desc: 'Rõ ràng trong mọi hành động.' },
      { label: 'Công bằng:', desc: 'Tôn trọng và công tâm.' },
    ],
    span: 1,
  },
  {
    title: 'LINH HOẠT',
    subtitle: 'Thích nghi nhanh, đi trước một bước.',
    description: 'Thị trường công nghệ thay đổi từng ngày. Linh hoạt giúp SOFIN GROUP không chỉ thích nghi với những biến động, mà còn chủ động tạo ra thay đổi — luôn đi trước đối thủ một bước.',
    items: [
      { label: 'Thích nghi:', desc: 'Phản ứng nhanh nhạy trước thay đổi.' },
      { label: 'Cởi mở:', desc: 'Đón nhận điều mới như cơ hội.' },
      { label: 'Đa năng:', desc: 'Sẵn sàng vượt giới hạn.' },
    ],
    span: 1,
  },
  {
    title: 'TỐC ĐỘ',
    subtitle: 'Lợi thế cạnh tranh trong kỷ nguyên số.',
    description: 'Trong thế giới mà ý tưởng tốt nhất chỉ có giá trị khi được thực thi nhanh nhất, tốc độ trở thành vũ khí cạnh tranh hàng đầu. SOFIN GROUP đề cao sự quyết đoán, hành động kịp thời và triển khai hiệu quả.',
    items: [
      { label: 'Quyết đoán:', desc: 'Ra quyết định nhanh và chính xác.' },
      { label: 'Hiệu quả:', desc: 'Hoàn thành đúng hạn, tối ưu chất lượng.' },
      { label: 'Tiên phong:', desc: 'Dẫn đầu công nghệ và xu hướng mới.' },
    ],
    span: 1,
  },
]

export default function CoreValueSection() {
  const [isSlider, setIsSlider] = useState(false)

  return (
    <section className="py-15 md:py-20">
      <div className="mx-auto px-5 sm:px-10 md:px-20 lg:px-30">

        {/* Header */}
        <motion.div
          className="mb-10 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <img
            src={icCoreValue}
            srcSet={`${icCoreValue2x} 2x`}
            alt="Giá trị cốt lõi"
            className="mb-3 h-8 object-contain"
          />
          <h2 className="text-3xl md:text-4xl font-medium font-['Unbounded'] leading-tight text-primary-500">
            Năm trụ cột định hình SOFIN GROUP
          </h2>
          <p className="mt-4 max-w-2xl text-text-neutral-normal text-base font-normal font-['Mona_Sans'] leading-6">
            Giá trị cốt lõi không chỉ là những từ trên giấy. Đó là cách chúng tôi suy nghĩ, cách chúng tôi hành động, và cách chúng tôi kiến tạo nên SOFIN GROUP của ngày hôm nay và tương lai.
          </p>

          {/* Toggle button */}
          <div className="absolute top-8 flex items-center gap-2 rounded-full border border-neutral-700 p-1">
            <button
              onClick={() => setIsSlider(false)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium font-['Mona_Sans'] transition-all ${
                !isSlider ? 'bg-primary-500 text-white' : 'text-text-neutral-normal hover:text-white'
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setIsSlider(true)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium font-['Mona_Sans'] transition-all ${
                isSlider ? 'bg-primary-500 text-white' : 'text-text-neutral-normal hover:text-white'
              }`}
            >
              Slider
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {isSlider ? (
            <motion.div key="slider" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}>
              <CoreValueSlider />
            </motion.div>
          ) : (
            <motion.div key="grid" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}>
              {/* Top row: 2 cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                {values.slice(0, 2).map((v, i) => (
                  <ValueCard key={v.title} value={v} index={i} />
                ))}
              </div>
              {/* Bottom row: 3 cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {values.slice(2).map((v, i) => (
                  <ValueCard key={v.title} value={v} index={i + 2} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}

type Value = (typeof values)[number]

function CoreValueSlider() {
  const [current, setCurrent] = useState(0)
  const value = values[current]
  const index = current

  return (
    <div className="flex flex-col md:flex-row gap-24 items-center">
      {/* Left: image — stays fixed, not animated */}
      <div className="shrink-0 w-full md:w-170">
        <img
          src={slideImages[current]}
          alt={value.title}
          className="w-full md:w-170 h-93.5 object-cover rounded-xl"
        />
      </div>

      {/* Right: content */}
      <div className="flex-1 flex w-auto max-w-2xl flex-col gap-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3">
              <img src={itemIcons[index].src} srcSet={itemIcons[index].srcSet} alt="" className="w-9.5 h-9.5 object-contain" />
              <h3 className="text-white text-base font-semibold font-['Mona_Sans'] leading-6 tracking-wide">
                {value.title}
              </h3>
            </div>

            <p className="text-white text-lg font-semibold font-['Mona_Sans'] leading-7">
              {value.subtitle}
            </p>

            <p className="text-text-neutral-normal text-sm font-normal font-['Mona_Sans'] leading-6">
              {value.description}
            </p>

            <ul className="flex flex-col gap-2">
              {value.items.map((item) => (
                <li key={item.label} className="flex items-start gap-2">
                  <img src={itemIcons[index].src} srcSet={itemIcons[index].srcSet} alt="" className="mt-1 w-4 h-4 shrink-0 object-contain" />
                  <span className="text-text-neutral-normal text-sm font-['Mona_Sans'] leading-6">
                    <span className="font-semibold text-white">{item.label}</span>{' '}
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>

        {/* Navigation — outside AnimatePresence to stay fixed */}
        <div className="mt-4 flex items-center gap-2">
          <button
            onClick={() => setCurrent(current === 0 ? values.length - 1 : current - 1)}
            className="w-12 h-12 flex items-center justify-center hover:opacity-70 transition-opacity"
          >
            <img src={icLeft} srcSet={`${icLeft2x} 2x`} alt="Previous" className="w-12 h-12 object-contain" />
          </button>
          <span className="text-sm text-[#F0EDE6] tabular-nums w-12 text-center font-['Mona_Sans']">
            {current + 1}/{values.length}
          </span>
          <button
            onClick={() => setCurrent(current === values.length - 1 ? 0 : current + 1)}
            className="w-12 h-12 flex items-center justify-center hover:opacity-70 transition-opacity"
          >
            <img src={icRight} srcSet={`${icRight2x} 2x`} alt="Next" className="w-12 h-12 object-contain" />
          </button>
        </div>
      </div>
    </div>
  )
}

function ValueCard({ value, index }: { value: Value; index: number }) {
  return (
    <motion.div
      className="rounded-2xl border border-neutral-700 p-6 flex flex-col gap-4"
      style={{
        background: `
          radial-gradient(ellipse 60% 45% at 90% 0%, rgba(255,117,76,0.25) 0%, transparent 90%),
          linear-gradient(to bottom, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 100%)
        `,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className="flex items-center gap-3">
       <img
          src={itemIcons[index].src}
          srcSet={itemIcons[index].srcSet}
          alt=""
          className="w-9.5 h-9.5 object-contain"
        />
        <h3 className="text-white text-base font-semibold font-['Mona_Sans'] leading-6 tracking-wide">
          {value.title}
        </h3>
      </div>

      <p className="text-text-neutral-normal text-sm font-normal font-['Mona_Sans'] leading-6">
        {value.description}
      </p>

      <ul className="flex flex-col gap-2">
        {value.items.map((item) => (
          <li key={item.label} className="flex items-start gap-2">
            <img
              src={itemIcons[index].src}
              srcSet={itemIcons[index].srcSet}
              alt=""
              className="mt-1 w-4 h-4 shrink-0 object-contain"
            />
            <span className="text-text-neutral-normal text-sm font-['Mona_Sans'] leading-6">
              <span className="font-semibold text-white">{item.label}</span>{' '}
              {item.desc}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
