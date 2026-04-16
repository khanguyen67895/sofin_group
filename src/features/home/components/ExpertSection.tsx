import { useState } from 'react'
import img01 from '@/assets/images/chuyen-gia-01.png'
import img02 from '@/assets/images/chuyen-gia-02.png'
import img03 from '@/assets/images/chuyen-gia-03.png'
import img04 from '@/assets/images/chuyen-gia-04.png'

interface Expert {
  name: string
  title: string
  quote: string
  description: string
  image: string
}

const experts: Expert[] = [
  {
    name: 'Nguyễn Quang Việt', title: 'CEO / Founder',
    quote: '"Công nghệ không chỉ là công cụ, nó là ngôn ngữ của tương lai. Tại SOFIN, chúng tôi đầu tư và kiến tạo những giải pháp định hình thế giới số, mang lại giá trị bền vững cho xã hội."',
    description: 'Với hơn 15 năm kinh nghiệm trong lĩnh vực công nghệ và đầu tư, ông Nguyễn Quang Việt đã dẫn dắt SOFIN GROUP từ những bước đầu khởi nghiệp đến vị thế tập đoàn công nghệ hàng đầu Việt Nam.',
    image: img01,
  },
  {
    name: 'Trần Minh Khoa', title: 'CTO / Co-Founder',
    quote: '"Đổi mới sáng tạo bền vững đến từ việc đặt con người vào trung tâm của mọi giải pháp công nghệ."',
    description: 'Ông Trần Minh Khoa là kiến trúc sư công nghệ của SOFIN, người định hình nền tảng kỹ thuật vững chắc cho toàn bộ hệ sinh thái sản phẩm và dịch vụ của tập đoàn.',
    image: img02,
  },
  {
    name: 'Lê Thanh Hương', title: 'COO / Director',
    quote: '"Hiệu quả vận hành là nền tảng để mọi chiến lược lớn có thể được thực thi và tạo ra giá trị thực."',
    description: 'Bà Lê Thanh Hương phụ trách điều hành toàn bộ hoạt động của tập đoàn, đảm bảo các quy trình hoạt động trơn tru và mục tiêu chiến lược được thực hiện đúng tiến độ.',
    image: img03,
  },
  {
    name: 'Phạm Đức Anh', title: 'CFO / Head of Investment',
    quote: '"Đầu tư thông minh không chỉ về lợi nhuận — mà về việc tạo ra những tác động tích cực và lâu dài."',
    description: 'Ông Phạm Đức Anh quản lý chiến lược tài chính và danh mục đầu tư của SOFIN GROUP, với chuyên môn sâu trong phân tích thị trường và định giá startup công nghệ.',
    image: img04,
  },
]

export default function ExpertSection() {
  const [cur, setCur] = useState(0)
  const e = experts[cur]

  return (
    <section className="py-20 md:py-28 bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">

        {/* Header row */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <span className="block text-[11px] font-heading font-bold text-primary-500 tracking-[0.2em] uppercase mb-2">
              NHÂN SỰ CỐT LÕI
            </span>
            <h2 className="font-heading font-bold text-neutral-0"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              Đội ngũ chuyên gia
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setCur((p) => (p === 0 ? experts.length - 1 : p - 1))}
              className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:border-primary-500 hover:text-primary-500 transition-colors"
            >
              ←
            </button>
            <span className="text-sm text-neutral-500 tabular-nums min-w-[40px] text-center">
              {cur + 1}/{experts.length}
            </span>
            <button
              onClick={() => setCur((p) => (p === experts.length - 1 ? 0 : p + 1))}
              className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:border-primary-500 hover:text-primary-500 transition-colors"
            >
              →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Portrait */}
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-800 border border-neutral-700/40">
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(180deg, rgba(254,76,0,0.15) 0%, transparent 50%)' }}
            />
            <img
              key={e.image}
              src={e.image}
              alt={e.name}
              className="absolute inset-0 w-full h-full object-contain object-bottom"
              draggable={false}
            />
            {/* Bottom gradient */}
            <div
              className="absolute inset-x-0 bottom-0 h-1/4"
              style={{ background: 'linear-gradient(to top, var(--color-neutral-800) 0%, transparent 100%)' }}
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-5">
              <blockquote className="text-lg md:text-xl text-neutral-200 leading-[1.75] italic font-light">
                {e.quote}
              </blockquote>

              <div className="w-8 h-[2px] bg-primary-500/40 rounded-full" />

              <div>
                <p className="font-heading font-bold text-lg text-primary-500">{e.name}</p>
                <p className="text-neutral-500 text-sm mt-1">{e.title}</p>
              </div>

              <p className="text-neutral-400 text-[14px] leading-relaxed">{e.description}</p>
            </div>

            {/* Thumbnails */}
            <div className="flex items-end gap-3 flex-wrap">
              {experts.map((ex, idx) => (
                <button
                  key={ex.name}
                  onClick={() => setCur(idx)}
                  className={`relative rounded-xl overflow-hidden border-2 transition-all duration-200 bg-neutral-800 ${
                    idx === cur
                      ? 'w-16 h-20 border-primary-500 opacity-100'
                      : 'w-14 h-16 border-neutral-700 opacity-40 hover:opacity-70'
                  }`}
                >
                  <img src={ex.image} alt={ex.name} className="w-full h-full object-contain object-bottom" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
