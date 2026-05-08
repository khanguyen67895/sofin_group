import { motion } from 'framer-motion'
import icInfo1 from '@/assets/images/ic_info1.png'
import icInfo2 from '@/assets/images/ic_info2.png'
import icInfo3 from '@/assets/images/ic_info3.png'
import icUpdate from '@/assets/images/ic_update.png'
import icArrowDetail from '@/assets/images/ic_arrow_detail.png'

const newsItems = [
  {
    id: 1,
    image: icInfo1,
    category: 'Đầu tư',
    date: '25 Tháng 4, 2026',
    title: 'SOFIN rót $15M vào 3 Startup HealthTech',
    detail: 'Danh mục y tế công nghệ mở rộng với các khoản đầu tư chiến lược vào AI chẩn đoán hình ảnh.',
  },
  {
    id: 2,
    image: icInfo2,
    category: 'Công nghệ',
    date: '25 Tháng 3, 2026',
    title: 'Ra Mắt SOFIN AI Platform 3.0',
    detail: 'Hội tụ hơn 2,000 lãnh đạo doanh nghiệp, chuyên gia công nghệ và nhà đầu tư hàng đầu từ 30 quốc gia trong sự kiện thường niên mang tầm vóc quốc tế.',
  },
  {
    id: 3,
    image: icInfo3,
    category: 'Sự kiện',
    date: '25 Tháng 3, 2026',
    title: 'SOFIN Summit 2025',
    detail: 'Nền tảng Al thế hệ mới với khả năng xử lý ngôn ngữ tự nhiên tiếng Việt đạt độ chính xác 98%.',
  },
]

export default function NewsSection() {
  return (
    <section className="pt-10 md:pt-10 bg-neutral-900">
      <div className="mx-auto px-5 sm:px-10 md:px-20 lg:px-30">

        <motion.div
          className="mb-8 px-5 sm:px-10 md:px-20 lg:px-30 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={icUpdate}
            alt="Sandbox Đà Nẵng"
            className="h-8 object-contain mb-2"
          />
          <h2
            className="text-center text-4xl font-medium font-['Unbounded'] leading-12 text-primary-500"
          >
            Thông tin và Sự kiện
          </h2>
        </motion.div>

        <div
          className="flex justify-center gap-5"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {newsItems.map((news, i) => (
            <motion.article
              key={news.id}
              className="cursor-pointer group shrink-0 w-[80vw] md:w-116 md:shrink rounded-2xl overflow-hidden flex flex-col p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              style={{
                border: '2px solid #3C3C3C',
                background: 'radial-gradient(120% 53.36% at 0% 120%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
              }}
            >
              {/* Image */}
              <div className="overflow-hidden h-52">
                <img
                  src={news.image}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 py-5 flex-1">
                <div className="flex items-center gap-2">
                  <span className="justify-center text-neutral-100 text-base font-semibold font-['Mona_Sans'] leading-6">{news.category}</span>
                  <span className="justify-center text-neutral-300 text-base font-normal font-['Mona_Sans'] leading-6">{news.date}</span>
                </div>
                <div className="self-stretch h-0.5 bg-linear-to-r from-zinc-100/10 to-zinc-100/0" />
                <h3 className="font-heading font-semibold text-neutral-100 text-3xl leading-10 flex-1">
                  {news.title}
                </h3>
                <button className="flex items-center gap-1.5 text-primary-500 text-sm font-semibold uppercase tracking-wider w-fit group-hover:opacity-80 transition-opacity mt-2">
                  CHI TIẾT
                  <img src={icArrowDetail} alt="" className="w-3 h-3 object-contain" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
