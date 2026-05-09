import { motion } from 'framer-motion'
import icBannerVct from '@/assets/images/ic_banner_vct.png'

export default function EcosystemHeroSection() {
  return (
    <section className="relative h-60 md:h-80 overflow-hidden">
      <img
        src={icBannerVct}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-neutral-950/40" />
      <div className="relative w-full h-full flex flex-col items-center justify-center text-center px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1
            className="justify-center text-text-neutral-normal text-6xl font-semibold font-['Unbounded'] leading-18"
          >
            Hệ sinh thái SOFIN Group
          </h1>
          <p className="justify-center text-text-neutral-normal text-base font-normal font-['Mona_Sans'] leading-6">
            SOFIN Group chuyên cung cấp giải pháp công nghệ AI, với những cập nhật xu hướng mới nhất
          </p>
        </motion.div>
      </div>
    </section>
  )
}
