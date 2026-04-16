import { useState } from 'react'
import icSystem1 from '@/assets/images/ic_system1.png'
import icSystem2 from '@/assets/images/ic_system2.png'
import icSystem3 from '@/assets/images/ic_system3.png'
import icSystem4 from '@/assets/images/ic_system4.png'

interface Item { number: string; title: string; description: string; bullets: string[]; icon: string }

const items: Item[] = [
  {
    number: '01', title: 'Khoa học công nghệ', icon: icSystem1,
    description: 'Chúng tôi phát triển và triển khai các giải pháp công nghệ tiên tiến, từ phần mềm doanh nghiệp đến hạ tầng dữ liệu, giúp tổ chức chuyển đổi số toàn diện.',
    bullets: ['Phát triển phần mềm & ứng dụng doanh nghiệp', 'Giải pháp dữ liệu lớn & trí tuệ nhân tạo', 'Hạ tầng đám mây & bảo mật thông tin'],
  },
  {
    number: '02', title: 'Đầu tư chiến lược', icon: icSystem2,
    description: 'SOFIN GROUP đầu tư vào các startup và dự án công nghệ tiềm năng, hỗ trợ toàn diện từ vốn, mentoring đến kết nối hệ sinh thái để cùng phát triển bền vững.',
    bullets: ['Đầu tư mạo hiểm vào startup công nghệ', 'Tư vấn chiến lược và phát triển kinh doanh', 'Kết nối nhà đầu tư và hệ sinh thái đối tác'],
  },
  {
    number: '03', title: 'Truyền thông giá trị', icon: icSystem3,
    description: 'Chúng tôi xây dựng và lan tỏa thương hiệu thông qua nội dung chất lượng, chiến lược truyền thông đa kênh và các chiến dịch marketing sáng tạo dài hạn.',
    bullets: ['Sản xuất nội dung số và video chuyên nghiệp', 'Chiến lược truyền thông thương hiệu đa kênh', 'Marketing kỹ thuật số và quản lý cộng đồng'],
  },
  {
    number: '04', title: 'Giáo dục đào tạo', icon: icSystem4,
    description: 'Chương trình đào tạo nhân lực công nghệ chất lượng cao, kết hợp lý thuyết và thực hành, cung cấp nguồn nhân lực tài năng cho thị trường và hệ sinh thái SOFIN.',
    bullets: ['Đào tạo lập trình và công nghệ thực chiến', 'Chương trình phát triển kỹ năng lãnh đạo', 'Hợp tác doanh nghiệp & cơ hội việc làm thực tế'],
  },
]

export default function EcosystemSection() {
  const [active, setActive] = useState(1)
  const item = items[active]

  return (
    <section className="py-20 md:py-28 bg-neutral-800/30 border-t border-neutral-800">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="block text-[11px] font-heading font-bold text-primary-500 tracking-[0.2em] uppercase mb-3">
            HỆ SINH THÁI
          </span>
          <h2 className="font-heading font-bold text-neutral-0"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
          >
            Hệ sinh thái SOFIN Group
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Left — list */}
          <div className="divide-y divide-neutral-800">
            {items.map((it, idx) => (
              <button
                key={it.number}
                onClick={() => setActive(idx)}
                className="group w-full flex items-center gap-5 py-5 text-left transition-all"
              >
                <span className={`font-heading text-xs font-bold w-7 shrink-0 transition-colors ${active === idx ? 'text-primary-500' : 'text-neutral-700 group-hover:text-neutral-500'}`}>
                  {it.number}
                </span>
                <span className="flex-1 relative">
                  <span className={`font-heading font-bold text-base md:text-lg transition-opacity ${active === idx ? 'text-primary-500' : 'text-neutral-400'} ${active !== idx ? 'group-hover:opacity-0' : ''}`}>
                    {it.title}
                  </span>
                  {active !== idx && (
                    <img
                      src={it.icon}
                      alt={it.title}
                      className="absolute inset-0 w-full h-full object-contain object-left opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  )}
                </span>
                <span className={`text-sm transition-opacity ${active === idx ? 'text-primary-500 opacity-100' : 'opacity-0 group-hover:opacity-40'}`}>
                  →
                </span>
              </button>
            ))}
          </div>

          {/* Right — detail */}
          <div className="bg-neutral-800 border border-neutral-700/50 rounded-2xl p-7 flex flex-col gap-5 lg:sticky lg:top-24">
            <div className="flex items-baseline gap-3">
              <span className="font-heading text-xs font-bold text-primary-500">{item.number}</span>
              <h3 className="font-heading font-bold text-neutral-0 text-lg">{item.title}</h3>
            </div>

            <div className="w-8 h-[2px] bg-primary-500/40 rounded-full" />

            <p className="text-neutral-400 text-[14px] leading-[1.8]">{item.description}</p>

            <ul className="flex flex-col gap-3">
              {item.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                  <span className="text-neutral-300 text-[13px] leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            <button className="mt-1 inline-flex items-center gap-2 text-[13px] text-primary-500 hover:text-primary-400 font-semibold transition-colors w-fit">
              Tìm hiểu thêm
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
