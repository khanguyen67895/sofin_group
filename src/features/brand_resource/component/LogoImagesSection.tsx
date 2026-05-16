import brand1 from '@/assets/images/ic_logo_brand1.png'
import brand1_2x from '@/assets/images/ic_logo_brand1@2x.png'
import brand2 from '@/assets/images/ic_logo_brand2.png'
import brand2_2x from '@/assets/images/ic_logo_brand2@2x.png'
import brand3 from '@/assets/images/ic_logo_brand3.png'
import brand3_2x from '@/assets/images/ic_logo_brand3@2x.png'
import brand4 from '@/assets/images/ic_logo_brand4.png'
import brand4_2x from '@/assets/images/ic_logo_brand4@2x.png'
import brand5 from '@/assets/images/ic_logo_brand5.png'
import brand5_2x from '@/assets/images/ic_logo_brand5@2x.png'
import brand6 from '@/assets/images/ic_logo_brand6.png'
import brand6_2x from '@/assets/images/ic_logo_brand6@2x.png'
import { motion } from 'framer-motion'

const rowRight = [
  { src: brand1, srcSet: `${brand1} 1x, ${brand1_2x} 2x`, alt: 'Logo brand 1' },
  { src: brand2, srcSet: `${brand2} 1x, ${brand2_2x} 2x`, alt: 'Logo brand 2' },
  { src: brand3, srcSet: `${brand3} 1x, ${brand3_2x} 2x`, alt: 'Logo brand 3' },
]

const rowLeft = [
  { src: brand4, srcSet: `${brand4} 1x, ${brand4_2x} 2x`, alt: 'Logo brand 4' },
  { src: brand5, srcSet: `${brand5} 1x, ${brand5_2x} 2x`, alt: 'Logo brand 5' },
  { src: brand6, srcSet: `${brand6} 1x, ${brand6_2x} 2x`, alt: 'Logo brand 6' },
]

function MarqueeRow({ items, direction }: { items: typeof rowRight; direction: 'right' | 'left' }) {
  // Duplicate for seamless loop
  const doubled = [...items, ...items, ...items, ...items]
  const animateX = direction === 'right' ? ['0%', '-30%'] : ['-30%', '0%']

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex"
        animate={{ x: animateX }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20,
          ease: 'linear',
        }}
        style={{ width: 'max-content' }}
      >
        {doubled.map((img, i) => (
          <div
            key={i}
            className="shrink-0 w-72 md:w-165.5"
          >
            <img
              src={img.src}
              srcSet={img.srcSet}
              alt={img.alt}
              className="w-full h-auto block"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default function LogoImagesSection() {
  return (
    <section className="bg-[#0C0C0C] py-4 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-10 mb-4 md:mb-12">
        <motion.h2
          className="text-center text-primary-500 font-heading font-bold text-xl md:text-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Hình ảnh logo
        </motion.h2>
      </div>

      <div className="flex flex-col">
        {/* Row 1: ic_logo_brand1–3 scroll right */}
        <MarqueeRow items={rowRight} direction="right" />
        {/* Row 2: ic_logo_brand4–6 scroll left */}
        <MarqueeRow items={rowLeft} direction="left" />
      </div>
    </section>
  )
}
