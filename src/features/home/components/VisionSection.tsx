import { useState } from 'react'
import imgLogo from '@/assets/images/img-logo.png'
import icRec from '@/assets/images/ic_rec.png'
import './VisionSection.css'

const cards = [
  {
    value: '10+',
    label: 'NĂM KINH NGHIỆM',
    text: 'Trở thành tập đoàn công nghệ hàng đầu Đông Nam Á, tiên phong ứng dụng AI và công nghệ tiên tiến để tạo giá trị bền vững, đồng thời kết nối tri thức, công nghệ và con người nhằm thúc đẩy chuyển đổi số và phát triển nguồn nhân lực chất lượng cao tại Việt Nam. Với hơn 10 năm kinh nghiệm hoạt động trong lĩnh vực công nghệ, SOFIN Group đã xây dựng được nền tảng vững chắc và mạng lưới đối tác rộng khắp khu vực. Mọi quyết định được định hướng bởi tinh thần tiên phong, liêm chính, trách nhiệm và hợp tác, hướng tới mục tiêu trở thành đơn vị dẫn dắt làn sóng chuyển đổi số toàn diện.',
  },
  {
    value: '30+',
    label: 'DỰ ÁN TRIỂN KHAI',
    text: 'Kiến tạo hệ sinh thái số bền vững — kết nối công nghệ, vốn, truyền thông và nhân lực để tạo ra giá trị thực cho doanh nghiệp và cộng đồng tại Việt Nam và khu vực.',
  },
  {
    value: '50+',
    label: 'CHUYÊN GIA & TIẾN SĨ',
    text: 'Đội ngũ chuyên gia hàng đầu với hơn 50 tiến sĩ và chuyên gia trong các lĩnh vực công nghệ, tài chính, truyền thông, sẵn sàng đồng hành cùng doanh nghiệp trên hành trình chuyển đổi số.',
  },
]

export default function VisionSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-20 md:py-28 bg-neutral-900">
      <div className="mx-auto px-20 md:px-30">

        {/* Divider line */}
        <div className="relative mb-14">
          <div className="h-0.5 bg-neutral-700/50" />
          <img src={icRec} alt="" className="absolute left-0 -top-1 -translate-y-1/2 h-3" />
        </div>

        {/* Section header */}
        <div className="mb-14">
          <span className="text-[10px] font-heading text-neutral-100 tracking-[0.15em] uppercase">
            /NỀN TẢNG TỔ CHỨC
          </span>
          <h2
            className="font-heading font-bold text-primary-500 mt-3"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
          >
            Tầm nhìn &amp; Sứ mệnh
          </h2>
        </div>

        {/* Cards — active card expands width, others shrink */}
        <div className="flex gap-4">
          {cards.map((card, idx) => {
            const isActive = activeIndex === idx
            return (
              <div
                key={card.value}
                onClick={() => setActiveIndex(idx)}
                className={`
                  vision-card group relative cursor-pointer transition-all duration-500 overflow-hidden flex flex-col justify-end
                  ${isActive
                    ? 'flex-2 bg-neutral-800'
                    : 'flex-1 bg-neutral-800/40'
                  }
                `}
              >
                {/* Detail text — top */}
                {isActive && (
                  <div className="p-7 pb-20">
                    <p className="text-neutral-100 text-[13px] leading-[1.8]">
                      {card.text}
                    </p>
                  </div>
                )}

                {/* Logo — inactive cards */}
                {!isActive && (
                  <div className="flex justify-start -mb-10">
                    <img
                      src={imgLogo}
                      alt=""
                      className="w-60 h-60 object-contain"
                    />
                  </div>
                )}

                {/* Stat — always visible */}
                <div className="p-7 pt-4 relative z-10">
                  <p
                    className="font-heading font-bold leading-none transition-colors duration-300 text-neutral-0 group-hover:text-primary-500"
                    style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
                  >
                    {card.value}
                  </p>
                  <p className="text-neutral-100 text-[11px] tracking-widest mt-2 uppercase">
                    {card.label}
                  </p>
                </div>
                <div className="vision-border-left" />
                <div className="vision-glow" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
