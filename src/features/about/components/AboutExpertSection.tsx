import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import img01 from '@/assets/images/chuyen-gia-01.png'
import img01_2x from '@/assets/images/chuyen-gia-01@2x.png'
import img02 from '@/assets/images/chuyen-gia-02.png'
import img02_2x from '@/assets/images/chuyen-gia-02@2x.png'
import img03 from '@/assets/images/chuyen-gia-03.png'
import img03_2x from '@/assets/images/chuyen-gia-03@2x.png'
import img04 from '@/assets/images/chuyen-gia-04.png'
import img04_2x from '@/assets/images/chuyen-gia-04@2x.png'
import icLeft from '@/assets/images/ic_left.png'
import icLeft2x from '@/assets/images/ic_left@2x.png'
import icRight from '@/assets/images/ic_right.png'
import icRight2x from '@/assets/images/ic_right@2x.png'
import icCouncil from '@/assets/images/ic_council.png'
import icCouncil2x from '@/assets/images/ic_council@2x.png'

const experts = [
  {
    name: 'Nguyễn Quang Việt',
    title: 'CEO / Founder',
    description: 'Nhà sáng lập và lãnh đạo chiến lược tập đoàn, định hướng tầm nhìn phát triển công nghệ bền vững tại Đông Nam Á.',
    image: img01,
    image2x: img01_2x,
  },
  {
    name: 'Trần Minh Khoa',
    title: 'CTO / Co-Founder',
    description: 'Kiến trúc sư công nghệ của SOFIN, người định hình nền tảng kỹ thuật vững chắc cho toàn bộ hệ sinh thái sản phẩm và dịch vụ của tập đoàn.',
    image: img02,
    image2x: img02_2x,
  },
  {
    name: 'Lê Thanh Hương',
    title: 'COO / Director',
    description: 'Phụ trách điều hành toàn bộ hoạt động của tập đoàn, đảm bảo các quy trình hoạt động trơn tru và mục tiêu chiến lược được thực hiện đúng tiến độ.',
    image: img03,
    image2x: img03_2x,
  },
  {
    name: 'Phạm Đức Anh',
    title: 'CFO / Head of Investment',
    description: 'Quản lý chiến lược tài chính và danh mục đầu tư của SOFIN GROUP, với chuyên môn sâu trong phân tích thị trường và định giá startup công nghệ.',
    image: img04,
    image2x: img04_2x,
  },
]

export default function AboutExpertSection() {
  const [cur, setCur] = useState(0)

  const goTo = useCallback((idx: number) => {
    setCur((idx + experts.length) % experts.length)
  }, [])

  // On desktop show all 4, on mobile show 1 at a time
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
            src={icCouncil}
            srcSet={`${icCouncil2x} 2x`}
            alt="Đội ngũ chuyên gia"
            className="h-8 object-contain mb-2"
          />
          <h2 className="text-4xl font-medium font-['Unbounded'] leading-tight text-primary-500">
            Đội ngũ chuyên gia
          </h2>
        </motion.div>

        {/* Cards + nav */}
        <div className="relative flex items-center gap-4">

          {/* Left nav */}
          <button
            onClick={() => goTo(cur - 1)}
            className="absolute -left-6 opacity-30 z-100 shrink-0 w-12 h-12 flex items-center justify-center hover:opacity-70 transition-opacity"
          >
            <img src={icLeft} srcSet={`${icLeft2x} 2x`} alt="Previous" className="w-12 h-12 object-contain" />
          </button>

          {/* Desktop: all 4 cards */}
          <div className="hidden md:grid grid-cols-4 gap-4 flex-1">
            {experts.map((ex, idx) => (
              <ExpertCard key={ex.name} expert={ex} index={idx} />
            ))}
          </div>

          {/* Mobile: single card */}
          <div className="flex md:hidden flex-1">
            <ExpertCard expert={experts[cur]} index={cur} />
          </div>

          {/* Right nav */}
          <button
            onClick={() => goTo(cur + 1)}
            className="absolute -right-2 opacity-30 shrink-0 w-12 h-12 flex items-center justify-center hover:opacity-70 transition-opacity"
          >
            <img src={icRight} srcSet={`${icRight2x} 2x`} alt="Next" className="w-12 h-12 object-contain" />
          </button>
        </div>

        {/* Mobile counter */}
        <div className="flex md:hidden justify-center mt-4">
          <span className="text-sm text-[#F0EDE6] tabular-nums font-['Mona_Sans']">
            {cur + 1}/{experts.length}
          </span>
        </div>

      </div>
    </section>
  )
}

type Expert = (typeof experts)[number]

function ExpertCard({ expert, index }: { expert: Expert; index: number }) {
  return (
    <motion.div
      className="flex flex-col gap-4"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      {/* Portrait */}
      <div className="relative overflow-hidden rounded-2xl aspect-3/4">
        <img
          src={expert.image}
          srcSet={`${expert.image2x} 2x`}
          alt={expert.name}
          className="w-97.75 h-130.25 object-cover object-top"
          draggable={false}
        />
      </div>

      {/* Text below image */}
      <div className="flex flex-col gap-1">
        <p className="text-white/60 text-[10px] uppercase tracking-[3px] font-['Mona_Sans']">
          {expert.title}
        </p>
        <p className="text-white text-lg font-semibold font-['Unbounded'] leading-6">
          {expert.name}
        </p>
        <p className="text-white/70 text-xs font-['Mona_Sans'] leading-5 mt-1">
          {expert.description}
        </p>
      </div>
    </motion.div>
  )
}
