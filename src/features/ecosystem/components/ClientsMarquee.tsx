import { motion } from 'framer-motion'
import vpbank from '@/assets/images/VPBank.png'
import hipt from '@/assets/images/HiPT.png'
import gianty from '@/assets/images/GIANTY.png'
import seabank from '@/assets/images/SeABank.png'
import fiin from '@/assets/images/Fiin.png'

const logos = [
  { name: 'VPBank', src: vpbank },
  { name: 'GIANTY', src: gianty },
  { name: 'SeABank', src: seabank },
  { name: 'Fiin', src: fiin },
  { name: 'HiPT', src: hipt },
  { name: 'VPBank', src: vpbank },
  { name: 'GIANTY', src: gianty },
  { name: 'SeABank', src: seabank },
  { name: 'Fiin', src: fiin },
  { name: 'HiPT', src: hipt },
]

export default function ClientsMarquee() {
  return (
    <section className="py-14 md:py-20 bg-neutral-900 overflow-hidden">
      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-primary-500 text-[28px] font-semibold tracking-widest uppercase">
          Khách hàng nổi bật
        </span>
      </motion.div>

      {/* Marquee track */}
      <div className="relative">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 md:w-40 z-10"
          style={{ background: 'linear-gradient(to right, #030303 0%, transparent 100%)' }} />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 md:w-40 z-10"
          style={{ background: 'linear-gradient(to left, #030303 0%, transparent 100%)' }} />

        <div className="flex gap-10 md:gap-16 overflow-hidden">
          <motion.div
            className="flex gap-10 md:gap-16 shrink-0"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
          >
            {logos.map((logo, i) => (
              <div key={i} className="flex items-center justify-center w-28 md:w-36 shrink-0">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-6 md:h-7 object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
                />
              </div>
            ))}
          </motion.div>
          {/* Duplicate for seamless loop */}
          <motion.div
            className="flex gap-10 md:gap-16 shrink-0"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
          >
            {logos.map((logo, i) => (
              <div key={i} className="flex items-center justify-center w-28 md:w-36 shrink-0">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-6 md:h-7 object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
