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
            className="justify-center text-text-neutral-normal text-6xl font-semibold font-['Unbounded'] leading-18 text-neutral-100"
          >
            Tin tức
          </h1>
          <p className="text-neutral-100 justify-center text-text-neutral-normal text-base font-normal font-['Mona_Sans'] leading-6">
            Cập nhật xu hướng công nghệ, phân tích chuyên sâu và case study từ SOFIN GROUP
          </p>
        </motion.div>
      </div>
    </section>
  )
}
