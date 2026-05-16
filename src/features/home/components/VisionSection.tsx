import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import bgVisionSection from '@/assets/images/bg_vision_section.png'
import bgParallax from '@/assets/images/bg_parallax.png'
import bgQuote from '@/assets/images/bg_quote.png'
import bgPillars from '@/assets/images/bg_pillars.png'
import icVisionMb from '@/assets/images/ic_vision_mb.png'

const pillars = [
  {
    id: 1,
    title: 'Công nghệ tiên phong',
    desc: 'Ứng dụng AI, dữ liệu lớn và tự động hoá để tạo lợi thế cạnh tranh vượt trội.',
  },
  {
    id: 2,
    title: 'Hệ sinh thái cộng hưởng',
    desc: 'Liên kết bốn lĩnh vực chiến lược – công nghệ, đào tạo, giải trí, đầu tư.',
  },
  {
    id: 3,
    title: 'Tăng trưởng bền vững',
    desc: 'Cân bằng giữa lợi nhuận, con người và trách nhiệm với cộng đồng.',
  },
]

export default function VisionSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-20%', '50%'])

  return (
    <section id='vision-section' ref={ref} className="relative md:mt-16">

      {/* ── Mobile layout ── */}
      <div className="md:hidden flex flex-col px-5 pb-10 gap-6">
        {/* Quote block */}
        <div
          className="rounded-2xl px-6 py-8 flex flex-col gap-4 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgQuote})` }}
        >
          <h2 className="text-white text-center font-medium font-['Unbounded'] text-xl leading-snug">
            "Trở thành tập đoàn công nghệ hàng đầu Đông Nam Á. Tiên phong ứng dụng AI, kết nối tri thức và con người"
          </h2>
          <p className="text-white/70 text-center font-normal font-['Mona_Sans'] text-sm leading-relaxed">
            SOFIN GROUP không chỉ là một doanh nghiệp công nghệ, mà là kiến trúc sư của những giá trị thực. Chúng tôi xây dựng hệ sinh thái số toàn diện – nơi công nghệ phục vụ con người, nơi tri thức tạo nên đột phá, và nơi mỗi giải pháp đều mang lại tác động bền vững cho xã hội.
          </p>
        </div>

        {/* Badges row */}
        <img
          src={icVisionMb}
          alt=""
          className="w-full object-contain"
        />

        {/* Pillars list */}
        <div
          className="rounded-2xl px-6 py-6 flex flex-col gap-6 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgPillars})` }}
        >
          {pillars.map(({ id, title, desc }) => (
            <div key={id} className="flex items-start gap-4">
              <span className="shrink-0 w-9 h-9 text-white font-medium font-['Unbounded'] bg-white/5 rounded-xl shadow-[inset_0px_-8px_20px_0px_rgba(255,255,255,0.10)] outline -outline-offset-1 outline-white/30 inline-flex justify-center items-center text-sm">
                {id}
              </span>
              <div>
                <p className="text-white font-medium font-['Unbounded'] text-sm leading-snug">{title}</p>
                <p className="text-white/60 font-normal font-['Mona_Sans'] text-xs leading-relaxed mt-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Desktop layout ── */}
      <div className="hidden md:block relative">
      {/* Background parallax layer */}
      <motion.img
        src={bgParallax}
        alt=""
        aria-hidden
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-full object-cover scale-100 pointer-events-none select-none"
      />

      {/* Static bg image */}
      <img
        src={bgVisionSection}
        alt=""
        className="relative w-full object-cover block"
      />

      {/* Frame 1 — Quote block (top-right) */}
      <div
        className="absolute top-0 h-[47%] left-[28%] right-[2%] flex flex-col justify-center text-center bg-cover bg-center bg-no-repeat rounded-2xl md:rounded-3xl px-[8%] md:px-[12%] pointer-events-none"
        style={{ backgroundImage: `url(${bgQuote})` }}
      >
        <h2 className="text-white font-medium font-['Unbounded'] leading-snug text-[clamp(0.5rem,2vw,1.875rem)]">
          "Trở thành tập đoàn công nghệ hàng đầu Đông Nam Á. Tiên phong ứng dụng AI, kết nối tri thức và con người"
        </h2>
        <p className="mt-[2%] text-white font-normal font-['Mona_Sans'] leading-snug text-[clamp(0.35rem,1.2vw,1rem)]">
          SOFIN GROUP không chỉ là một doanh nghiệp công nghệ, mà là kiến trúc sư của những giá trị thực. Chúng tôi xây
          dựng hệ sinh thái số toàn diện – nơi công nghệ phục vụ con người, nơi tri thức tạo nên đột phá, và nơi mỗi giải pháp
          đều mang lại tác động bền vững cho xã hội.
        </p>
      </div>

      {/* Frame 2 — Pillars block (bottom-right) */}
      <div
        className="absolute bottom-0 h-[47%] left-[50%] right-[2%] flex flex-col justify-center bg-cover bg-center bg-no-repeat rounded-2xl md:rounded-3xl px-[3%] pointer-events-none"
        style={{ backgroundImage: `url(${bgPillars})` }}
      >
        <ul className="flex flex-col justify-center gap-[15%] h-full">
          {pillars.map(({ id, title, desc }) => (
            <li key={id} className="flex items-start gap-[3%]">
              <span className="shrink-0 aspect-square w-[10%] max-w-12 text-white font-medium font-['Unbounded'] bg-white/0 rounded-xl shadow-[inset_0px_-8px_20px_0px_rgba(255,255,255,0.10)] outline -outline-offset-1 outline-white/30 inline-flex justify-center items-center text-[clamp(0.35rem,1.5vw,1.25rem)]">
                {id}
              </span>
              <div>
                <p className="text-white font-medium font-['Unbounded'] leading-snug text-[clamp(0.4rem,1.3vw,1.25rem)]">{title}</p>
                <p className="opacity-60 text-white font-normal font-['Mona_Sans'] leading-snug text-[clamp(0.35rem,1vw,1rem)] mt-[0.3em]">{desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      </div>{/* end desktop layout */}
    </section>
  )
}
