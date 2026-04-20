import Button from '@/components/ui/Button'
import icInfo1 from '@/assets/images/ic_info1.png'
import icInfo2 from '@/assets/images/ic_info2.png'
import icInfo3 from '@/assets/images/ic_info3.png'
import icRec from '@/assets/images/ic_rec.png'
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
    title: 'SOFIN Summit 2025: Hội nghị AI & Đổi mới sáng tạo quy mô lớn nhất Đông Nam Á',
    detail: 'Nền tảng Al thế hệ mới với khả năng xử lý ngôn ngữ tự nhiên tiếng Việt đạt độ chính xác 98%.',
  },
]

export default function NewsSection() {
  return (
    <section className="py-10 md:py-10 bg-neutral-950">
      <div className="mx-auto px-5 sm:px-10 md:px-20 lg:px-30">

      {/* Divider line */}
        <div className="relative mb-14">
          <div className="h-0.5 bg-neutral-700/50" />
          <img src={icRec} alt="" className="absolute left-0 -top-0.5 -translate-y-1/2 h-1.5" />
        </div>
        <div className="mb-10">
          <span className="block text-[10px] font-heading text-neutral-500 tracking-[0.15em] uppercase mb-2">
            CẬP NHẬT MỚI NHẤT
          </span>
          <h2
            className="font-heading font-bold text-primary-500"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
          >
            Thông tin và Sự kiện
          </h2>
        </div>

        <div
          className="flex gap-5 overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 md:mr-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {newsItems.map((news) => (
            <article
              key={news.id}
              className="relative cursor-pointer group overflow-hidden shrink-0 w-[80vw] md:w-auto md:shrink"
              style={{ clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)' }}
            >
              {/* Image */}
              <img
                src={news.image}
                alt=""
                className="w-full h-150 object-cover transition-all duration-500 group-hover:blur-[2px] group-hover:brightness-75 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-white text-[16px] font-bold">{news.category}</span>
                    <span className="text-white text-[16px]">{news.date}</span>
                  </div>
                  <div className="w-16 h-0.5 bg-white my-4" />
                  <h3 className="font-heading font-bold text-white text-2xl leading-snug mb-4">
                    {news.title}
                  </h3>
                </div>
                <div>
                  <span className="inline-flex items-center gap-2 text-primary-500 text-[22px] font-bold uppercase transition-transform duration-400 translate-y-12 group-hover:-translate-y-2">
                    CHI TIẾT
                    <img src={icArrowDetail} alt="" className="w-3.5 h-3.5" />
                  </span>
                  {/* Detail — slides up on hover */}
                  <p className="text-white text-[16px] leading-relaxed mt-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                    {news.detail}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button variant="primary" size="md">
            XEM TẤT CẢ
          </Button>
        </div>

        <div className="relative mt-14">
          <div className="h-0.5 bg-neutral-700/50" />
          <img src={icRec} alt="" className="absolute left-0 -top-0.5 -translate-y-1/2 h-1.5" />
        </div>
      </div>
    </section>
  )
}
