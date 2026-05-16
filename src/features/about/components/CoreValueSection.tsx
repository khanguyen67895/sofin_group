import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import icTick from '@/assets/images/ic_tick.png'
import bgEcosystem from '@/assets/images/bg_ecosystem.png'
import bgEcosystem2x from '@/assets/images/bg_ecosystem@2x.png'
import bgHeSinhThaiL from '@/assets/images/bg-he-sinh-thai-l.png'
import bgHeSinhThaiL2x from '@/assets/images/bg-he-sinh-thai-l@2x.png'

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

const values = [
  {
    num: '01',
    title: 'Đồng đội',
    subtitle: 'Cùng nhau, chúng ta đi xa hơn.',
    description: 'Tại SOFIN GROUP, không có thành công nào là của riêng ai. Chúng tôi tin rằng những thành tựu lớn nhất luôn đến từ tinh thần đồng đội — nơi mỗi cá nhân đóng góp thế mạnh riêng để tạo nên sức mạnh tập thể vượt trội.',
    items: [
      { label: 'Đoàn kết', desc: 'Chung mục tiêu, cùng vượt thử thách.' },
      { label: 'Hợp tác', desc: 'Lắng nghe, tôn trọng và phối hợp hiệu quả.' },
      { label: 'Sẻ chia', desc: 'Hỗ trợ, chia sẻ kiến thức và cùng phát triển.' },
    ],
    icon: icSection1, icon2x: icSection1x2,
  },
  {
    num: '02',
    title: 'Sáng tạo',
    subtitle: 'Dám nghĩ khác, dám làm khác.',
    description: 'Trong kỷ nguyên công nghệ, sáng tạo không còn là lựa chọn — đó là điều bắt buộc. Chúng tôi khuyến khích mỗi thành viên đặt câu hỏi, thử nghiệm ý tưởng mới và không ngại thất bại để tìm ra những giải pháp đột phá.',
    items: [
      { label: 'Đổi mới', desc: 'Không ngừng cải tiến và phát triển.' },
      { label: 'Đột phá', desc: 'Tư duy khác biệt để giải quyết vấn đề mới.' },
      { label: 'Khám phá', desc: 'Sẵn sàng đón nhận công nghệ và xu hướng mới.' },
    ],
    icon: icSection2, icon2x: icSection2x2,
  },
  {
    num: '03',
    title: 'Chính trực',
    subtitle: 'Niềm tin được xây trên sự trung thực.',
    description: 'Chính trực là gốc rễ của mọi mối quan hệ bền vững. Chúng tôi cam kết trung thực với khách hàng, minh bạch với đối tác, công bằng với đồng nghiệp — bởi đó là cách duy nhất để xây dựng niềm tin lâu dài.',
    items: [
      { label: 'Trung thực', desc: 'Nói thật, làm đúng cam kết.' },
      { label: 'Minh bạch', desc: 'Rõ ràng trong mọi hành động.' },
      { label: 'Công bằng', desc: 'Tôn trọng và công tâm.' },
    ],
    icon: icSection3, icon2x: icSection3x2,
  },
  {
    num: '04',
    title: 'Linh hoạt',
    subtitle: 'Thích nghi nhanh, đi trước một bước.',
    description: 'Thị trường công nghệ thay đổi từng ngày. Linh hoạt giúp SOFIN GROUP không chỉ thích nghi với những biến động, mà còn chủ động tạo ra thay đổi — luôn đi trước đối thủ một bước.',
    items: [
      { label: 'Thích nghi', desc: 'Phản ứng nhanh nhạy trước thay đổi.' },
      { label: 'Cởi mở', desc: 'Đón nhận điều mới như cơ hội.' },
      { label: 'Đa năng', desc: 'Sẵn sàng vượt giới hạn.' },
    ],
    icon: icSection4, icon2x: icSection4x2,
  },
  {
    num: '05',
    title: 'Tốc độ',
    subtitle: 'Lợi thế cạnh tranh trong kỷ nguyên số.',
    description: 'Trong thế giới mà ý tưởng tốt nhất chỉ có giá trị khi được thực thi nhanh nhất, tốc độ trở thành vũ khí cạnh tranh hàng đầu. SOFIN GROUP đề cao sự quyết đoán, hành động kịp thời và triển khai hiệu quả.',
    items: [
      { label: 'Quyết đoán', desc: 'Ra quyết định nhanh và chính xác.' },
      { label: 'Hiệu quả', desc: 'Hoàn thành đúng hạn, tối ưu chất lượng.' },
      { label: 'Tiên phong', desc: 'Dẫn đầu công nghệ và xu hướng mới.' },
    ],
    icon: icSection5, icon2x: icSection5x2,
  },
]

export default function CoreValueSection() {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768)

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return (
    <section className="md:pt-16 bg-neutral-900">
      <div className="mx-auto px-5 sm:px-10 md:px-20 lg:px-30 max-w-350">

      <div className="flex flex-col gap-20">
        {values.map((v, idx) => {
          const iconRight = idx % 2 !== 0
          return (
            <motion.div
              key={v.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.4, 0, 0.2, 1] }}
              className={`overflow-hidden rounded-2xl sticky ${idx % 2 === 0 ? "md:pl-20" : "md:pr-20"}`}
              style={{
                top: `${(isMobile ? 30 : 80) + idx * 20}px`,
                zIndex: idx + 1,
                boxShadow: 'inset 0 0 0 1.5px rgba(229,66,30,0.25)',
              }}
            >
              {/* Card background */}
              <img
                src={idx % 2 === 0 ? bgHeSinhThaiL : bgEcosystem}
                srcSet={`${idx % 2 === 0 ? bgHeSinhThaiL2x : bgEcosystem2x} 2x`}
                alt=""
                aria-hidden
                className="absolute inset-0 w-full h-full object-cover object-center"
              />

              <div className={`relative z-10 flex flex-col md:flex-row items-stretch ${iconRight ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content */}
                <div className="flex flex-col justify-between flex-1 px-6 md:px-10 pb-6 pt-6 md:pb-12 md:pt-12">
                  <div className="flex flex-col gap-4">
                    {/* Number + title */}
                    <div className="flex items-center gap-4">
                      <img
                        src={numIcons[idx].src}
                        srcSet={numIcons[idx].srcSet}
                        alt={v.num}
                        className="w-12 h-12 shrink-0 object-contain"
                      />
                      <div>
                        <h3 className="text-primary-500 text-2xl md:text-5xl font-semibold font-['Unbounded'] leading-tight">
                          {v.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-[#F0EDE6] text-lg md:text-xl font-['Mona_Sans'] mt-0.5">
                      {v.subtitle}
                    </p>

                    <p className="text-white text-base font-['Mona_Sans'] leading-7">
                      {v.description}
                    </p>

                    {/* Items */}
                    <ul className="flex flex-col sm:flex-row gap-2.5">
                      {v.items.map((item) => (
                        <li
                          key={item.label}
                          className="flex-1 flex flex-col md:gap-2 rounded-xl p-3"
                          style={{ background: 'rgba(255,255,255,0.05)' }}
                        >
                          <img src={icTick} alt="" className="w-5 h-5 object-contain" />
                          <span className="text-neutral-100 font-semibold text-base md:text-xl font-['Mona_Sans']">
                            {item.label}
                          </span>
                          <span className="text-neutral-100 text-sm md:text-base font-['Mona_Sans'] md:leading-5">
                            {item.desc}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Icon */}
                <div className="order-first md:order-last relative flex items-center justify-start md:justify-center w-full md:w-72 lg:w-100 shrink-0 py-2 md:py-0 overflow-hidden max-h-48 md:max-h-none">
                  <img
                    src={v.icon}
                    srcSet={`${v.icon2x} 2x`}
                    alt={v.title}
                    className="relative z-10 w-1/2 md:w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
      </div>
    </section>
  )
}
