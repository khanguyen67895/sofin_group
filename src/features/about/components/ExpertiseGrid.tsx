import { motion } from 'framer-motion'

import bgGrid1 from '@/assets/images/ic_bg_grid1.svg'
import bgGrid2 from '@/assets/images/ic_bg_grid2.svg'
import bgGrid3 from '@/assets/images/ic_bg_grid3.svg'
import bgGrid4 from '@/assets/images/ic_bg_grid4.svg'
import bgGrid5 from '@/assets/images/ic_bg_grid5.svg'
import bgGrid6 from '@/assets/images/ic_bg_grid6.svg'

const bgGrids = [bgGrid1, bgGrid2, bgGrid3, bgGrid4, bgGrid5, bgGrid6]

const expertise = [
  {
    title: 'AI & Machine Learning',
    desc: 'Đội ngũ chuyên gia AI hàng đầu, nghiên cứu và ứng dụng các mô hình học máy tiên tiến nhất để giải quyết các bài toán thực tế của doanh nghiệp.',
    tags: ['Deep Learning', 'NLP', 'Computer Vision', 'LLM', 'PyTorch'],
  },
  {
    title: 'Software Engineering',
    desc: 'Kỹ sư phần mềm dày dặn kinh nghiệm, xây dựng các hệ thống quy mô lớn – ổn định, bảo mật và có khả năng mở rộng rộng cao.',
    tags: ['Backend', 'Cloud Native', 'Microservices', 'DevOps', 'Mobile'],
  },
  {
    title: 'Data & Analytics',
    desc: 'Chuyên gia phân tích dữ liệu, biến Big Data thành insight và quyết định kinh doanh thông minh, hỗ trợ chiến lược doanh nghiệp.',
    tags: ['Big Data', 'Data Engineering', 'BI', 'SQL/NoSQL', 'Spark'],
  },
  {
    title: 'Cybersecurity',
    desc: 'Chuyên gia bảo mật hệ thống và dữ liệu khách hàng theo tiêu chuẩn quốc tế cao nhất, đảm bảo tuân thủ các quy định.',
    tags: ['Pentest', 'SOC', 'Cryptography', 'Zero Trust', 'ISO 27001'],
  },
  {
    title: 'Product & Design',
    desc: 'Đội ngũ thiết kế sản phẩm và trải nghiệm người dùng tạo nên những sản phẩm đẹp, dễ dùng và mang lại giá trị thực cho người dùng.',
    tags: ['UX/UI', 'Product Mgmt', 'Design System', 'User Research', 'Figma'],
  },
  {
    title: 'Business & Strategy',
    desc: 'Các chuyên gia kinh doanh và chiến lược kết nối công nghệ với giá trị thực cho khách hàng, định hướng phát triển dài hạn.',
    tags: ['Strategy', 'B2B Sales', 'Consulting', 'Partnership', 'M&A'],
  },
]

const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }
const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }

export default function ExpertiseGrid() {
  return (
    <section className="pt-16 md:pt-24 px-5 sm:px-10 md:px-20 lg:px-30">
      <motion.h2
        variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="text-center text-white text-2xl md:text-4xl font-semibold font-['Unbounded'] mb-2"
      >
        Đa dạng tài năng —{' '}
        <span className="text-primary-500">Một sứ mệnh chung</span>
      </motion.h2>
      <motion.div
        variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5"
      >
        {expertise.map((e, i) => (
          <motion.div
            key={e.title}
            variants={fadeUp} transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="relative @container"
          >
            <img src={bgGrids[i]} alt="" className="w-full h-auto block" />
            <svg
              viewBox="0 0 466 285"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-full pointer-events-none"
            >
              <path
                d="M0 47.5C0 37.5589 8.05887 29.5 18 29.5H121.582C126.773 29.5 131.711 31.7406 135.129 35.6469L145.371 47.3531C148.789 51.2594 153.727 53.5 158.918 53.5H447C456.941 53.5 465 61.5589 465 71.5V266.5C465 276.441 456.941 284.5 447 284.5H18C8.05889 284.5 0 276.441 0 266.5V47.5Z"
                fill="none"
                stroke="#FE4C00"
                strokeOpacity="0.8"
                strokeWidth="2"
                strokeDasharray="200 9999"
                strokeLinecap="round"
              >
                <animate attributeName="stroke-dashoffset" from="0" to="-2000" dur={`${5 + i * 0.6}s`} repeatCount="indefinite" />
              </path>
            </svg>
            {/* <div className="absolute inset-0 flex flex-col px-[6%] pt-[20%] pb-[6%] overflow-hidden">
              <div className="flex flex-col gap-[2%] flex-1 min-h-0">
                <h3 className="text-white font-bold font-['Mona_Sans'] leading-tight shrink-0 text-base">
                  {e.title}
                </h3>
                <p className="text-neutral-100 font-['Mona_Sans'] leading-snug mt-1 overflow-hidden text-sm" style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical' }}>
                  {e.desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-1 mt-2 shrink-0">
                {e.tags.map((t) => (
                  <span
                    key={t}
                    className="px-1.5 py-0.5 rounded-full font-['Mona_Sans'] text-neutral-100 whitespace-nowrap"
                    style={{ fontSize: 'clamp(9px, 1.2vw, 14px)', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div> */}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
