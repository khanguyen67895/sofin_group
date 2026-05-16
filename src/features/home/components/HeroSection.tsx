import bgHeaderVideo from '@/assets/video/bg-header.webm'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'
import PartnersMarquee from './PartnersMarquee'
import AitechBadge from './badges/AitechBadge'
import AcademyBadge from './badges/AcademyBadge'
import MediaBadge from './badges/MediaBadge'
import EnterpriseBadge from './badges/EnterpriseBadge'

const badges = [
  { component: AitechBadge,    pos: 'left-0 top-20' },
  { component: AcademyBadge,   pos: 'right-0 top-20' },
  { component: MediaBadge,     pos: 'left-0 top-[54%]' },
  { component: EnterpriseBadge, pos: 'right-0 top-[54%]' },
]

export default function HeroSection() {
  return (
    <section>
      {/* Background */}
      <video
        src={bgHeaderVideo}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
        className="absolute inset-0 w-full h-130 md:h-full object-cover"
      />

      {/* Bottom fade to black */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-[#0C0C0C] to-transparent z-10 pointer-events-none" />

      {/* Center content */}
      <div className="relative h-120 md:min-h-screen z-10 flex flex-col items-center justify-center text-center px-5 md:px-10">

        {/* Title */}
        <motion.h1
          className="font-heading font-medium text-white mb-6 text-[2.25rem] leading-tight md:text-6xl md:leading-20 mt-36"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="block">Công nghệ <span className="text-primary-500">thực</span></span>
          <span className="block">Giá trị <span className="text-primary-500">thực</span></span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-[#F5F0E8] text-base leading-6 mb-5 max-w-170 mt-6 md:mt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
        >
          SOFIN GROUP mang đến cho bạn giải pháp công nghệ thực tiễn, dễ ứng dụng và tạo ra hiệu quả rõ ràng trong kinh doanh. Chúng tôi đồng hành - huấn luyện - chuyển giao xuyên suốt hành trình phát triển doanh nghiệp của bạn!
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
        >
          <Button onClick={() => {
            document
              .getElementById('vision-section')
              ?.scrollIntoView({ behavior: 'smooth' })
            }} 
            variant="primary" size="lg">TÌM HIỂU THÊM</Button>
        </motion.div>
      </div>

      {/* Partners marquee */}
      <div className="md:mt-0 md:absolute bottom-0 left-0 right-0 z-10">
        <PartnersMarquee />
      </div>

      {/* Floating category badges — desktop only */}
      {badges.map(({ component: Badge, pos }) => (
        <motion.div
          key={pos}
          className={`absolute hidden lg:block ${pos}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
        >
          <Badge />
        </motion.div>
      ))}
    </section>
  )
}
