import heroBanner from '@/assets/images/heroBanner.png'
import heroBannerMb from '@/assets/images/heroBanner-mb.png'
import icStars from '@/assets/images/ic_stars.png'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative w-full h-90 md:h-screen bg-neutral-900 overflow-hidden">

      {/* ═══ Background: heroBanner ═══ */}
      <img
        src={heroBanner}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        style={{ objectPosition: '130% center' }}
        draggable={false}
      />
      {/* ═══ Background: heroBanner mobile ═══ */}
      <img
        src={heroBannerMb}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-100 object-contain object-center md:hidden"
        draggable={false}
      />

      {/* ═══ Content ═══ */}
      <div className="relative z-10 h-full flex flex-col mx-auto w-full px-5 sm:px-10 md:px-20 lg:px-30">

        {/* Main content — vertically centered */}
        <div className="flex-1 flex flex-col justify-center max-w-200">

          {/* H1 */}
          <motion.h1
            className="font-heading font-bold leading-[1.1] mb-6 text-[2rem] md:text-[3rem] lg:text-[3.75rem]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="block text-neutral-0 md:hidden">Công Nghệ</span>
            <span className="block text-neutral-0 md:hidden">Thực</span>
            <span className="hidden md:block text-neutral-0">Công Nghệ Thực</span>
            <span className="block text-neutral-0">Giá Trị Thực</span>
          </motion.h1>

          {/* Description — hidden on mobile */}
          <motion.p
            className="hidden md:block text-neutral-100 text-[16px] md:text-[16px] leading-[1.85] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
          >
            Chúng tôi không chỉ theo kịp tương lai, chúng tôi chủ động định hình và kiến tạo
            nó. Bằng việc tiên<br />phong ứng dụng công nghệ AI, kết nối tri thức và con người,
            nhằm tạo ra những giá trị bền vững cho<br />doanh nghiệp và xã hội.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
          >
            <Button variant="primary" size="sm" className="w-auto md:h-16! md:px-9.5! py-4.5 md:text-[18px]!" rightIcon={<img src={icStars} alt="" className="size-5" />}>
              TÌM HIỂU THÊM
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
