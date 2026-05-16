import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import bgProducts from '@/assets/images/bg_products.png'

export default function EcosystemHeroSection() {
  const [loaded, setLoaded] = useState(false)

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: 'clamp(650px, 80vw, 130vh)', background: '#0C0C0C' }}
    >

      <div className="absolute inset-x-0 top-0 pointer-events-none" style={{ height: '20%', zIndex: 11 }}>
        <img
          src={bgProducts}
          alt=""
          className="absolute opacity-90 inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute z-10 inset-x-0 bottom-0 h-full bg-linear-to-b from-transparent to-[#0C0C0C]" />
      </div>

      <div className="absolute inset-x-0 top-0 flex flex-col items-center text-center px-5 pt-20 md:pt-30 lg:pt-40" style={{ zIndex: 20 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1 className="justify-center text-text-neutral-normal px-4 md:p-0 text-2xl sm:text-2xl md:text-2xl lg:text-6xl  xl:text-6xl font-semibold font-['Unbounded'] md:leading-6 lg:leading-18">
            Hệ sinh thái SOFIN Group
          </h1>
          <p className="justify-center mt-3 md:mt-5 px-4 md:p-0 text-text-neutral-normal text-sm md:text-base font-normal font-['Mona_Sans'] leading-6">
            SOFIN Group chuyên cung cấp giải pháp công nghệ AI, với những cập nhật xu hướng mới nhất
          </p>
        </motion.div>
      </div>

      <iframe
        src="/ecosystem-animation.html"
        title="SOFIN Ecosystem"
        className="absolute w-full h-full md:-bottom-30"
        style={{ zIndex: 0, bottom: 0 }}
        onLoad={() => setLoaded(true)}
      />

      {/* Overlay che iframe cho đến khi load xong */}
      <AnimatePresence>
        {!loaded && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ background: '#0C0C0C', zIndex: 5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />
        )}
      </AnimatePresence>

      {/* bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none bg-linear-to-t from-[#0C0C0C] to-transparent"
        style={{ height: '25%', zIndex: 10 }}
      />
    </section>
  )
}
