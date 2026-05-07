import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import bgVisionSection from '@/assets/images/bg_vision_section.png'
import bgParallax from '@/assets/images/bg_parallax.png'

export default function VisionSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '50%'])

  return (
    <section ref={ref} className="relative overflow-hidden mt-4">
      {/* Background layer — moves with parallax */}
      <motion.img
        src={bgParallax}
        alt=""
        aria-hidden
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-full object-cover scale- pointer-events-none select-none"
      />
      {/* Content layer — static */}
      <img
        src={bgVisionSection}
        alt=""
        className="relative w-full object-cover block"
      />
    </section>
  )
}
