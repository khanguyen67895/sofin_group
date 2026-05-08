import { motion } from 'framer-motion'
import icBannerVct from '@/assets/images/ic_banner_vct.png'

export default function AboutHeroSection() {
  return (
    <section className="relative h-60 md:h-80 overflow-hidden">
      <img
        src={icBannerVct}
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
            className="justify-center text-text-neutral-normal text-6xl font-semibold font-['Unbounded'] leading-18"
          >
            Về Chúng Tôi
          </h1>
          <p className="justify-center text-text-neutral-normal text-base font-normal font-['Mona_Sans'] leading-6 mt-1">
            SOFIN Group chuy&ecirc;n cung c&#7845;p gi&#7843;i ph&aacute;p c&ocirc;ng ngh&#7879; AI, v&#7899;i nh&#7919;ng c&#7853;p nh&#7853;t xu h&#432;&#7899;ng m&#7899;i nh&#7845;t
          </p>
        </motion.div>
      </div>
    </section>
  )
}
