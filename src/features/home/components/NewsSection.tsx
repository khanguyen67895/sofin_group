import Button from '@/components/ui/Button'

const newsItems = [
  {
    id: 1, date: '15 Tháng 3, 2025', category: 'Công nghệ',
    title: 'SOFIN GROUP ra mắt nền tảng AI tích hợp cho doanh nghiệp vừa và nhỏ',
    description: 'Nền tảng SofinAI giúp các doanh nghiệp SME tại Việt Nam ứng dụng trí tuệ nhân tạo vào hoạt động kinh doanh hiệu quả và tiết kiệm chi phí.',
  },
  {
    id: 2, date: '28 Tháng 2, 2025', category: 'Đầu tư',
    title: 'SOFIN GROUP dẫn đầu vòng gọi vốn Series A trị giá 5 triệu USD cho EdTech startup',
    description: 'Thương vụ đầu tư chiến lược này đánh dấu bước tiến mới trong hành trình xây dựng hệ sinh thái giáo dục công nghệ toàn diện của tập đoàn.',
  },
  {
    id: 3, date: '10 Tháng 2, 2025', category: 'Sự kiện',
    title: 'Hội nghị Công nghệ SOFIN 2025: Kết nối hơn 500 chuyên gia và nhà đầu tư',
    description: 'Sự kiện thường niên lớn nhất quy tụ hơn 500 chuyên gia công nghệ, nhà đầu tư và lãnh đạo doanh nghiệp từ khắp Việt Nam và khu vực.',
  },
]

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function NewsSection() {
  return (
    <section className="py-20 md:py-28 bg-neutral-800/30 border-t border-neutral-800">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">

        <div className="flex items-center justify-between mb-10">
          <h2 className="font-heading font-bold text-neutral-0"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
          >
            Thông tin &amp; Sự kiện
          </h2>
          <Button variant="ghost" size="sm" rightIcon={<ArrowRight />}>
            Xem tất cả
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {newsItems.map((news) => (
            <article
              key={news.id}
              className="bg-neutral-800 border border-neutral-700/50 rounded-2xl overflow-hidden cursor-pointer group hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video relative bg-neutral-700">
                <div className="absolute bottom-3 left-4">
                  <span className="bg-primary-500 text-neutral-0 text-[11px] font-semibold px-3 py-1 rounded-md">
                    {news.date}
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-3">
                <span className="text-[11px] font-bold text-primary-500 tracking-widest uppercase">
                  {news.category}
                </span>
                <h3 className="font-heading font-bold text-neutral-0 text-[13px] leading-snug line-clamp-2 group-hover:text-primary-400 transition-colors">
                  {news.title}
                </h3>
                <p className="text-neutral-500 text-[13px] leading-[1.7] line-clamp-2">
                  {news.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-[13px] text-primary-500 group-hover:text-primary-400 transition-colors font-medium mt-1">
                  Đọc thêm →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
