import { motion } from 'framer-motion'
import icBgNews from '@/assets/images/bg_news.png'

export default function NewsHeroSection() {
  return (
    <section className="relative h-60 md:h-80 overflow-hidden">
      <img
        src={icBgNews}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="relative w-full h-full flex flex-col items-center justify-center text-center px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1
            className="font-heading font-bold text-white italic"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            Tin tức
          </h1>
          <p className="text-neutral-300 text-sm md:text-base mt-1 max-w-2xl">
            Cập nhật xu hướng công nghệ, phân tích chuyên sâu và case study từ SOFIN GROUP
          </p>
        </motion.div>
      </div>
    </section>
  )
}
