import { motion } from 'framer-motion'
import CoreValueSection from '@/features/about/components/CoreValueSection'
import GalleryCarousel from '@/features/about/components/GalleryCarousel'
import icBannerVct from '@/assets/images/ic_banner_vct.png'
import CTASection from '@/features/home/components/CTASection'

export default function CoreValuesPage() {

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-10 md:pt-40 md:pb-14 px-5 sm:px-10 md:px-20 lg:px-30 text-center">
        <img
          src={icBannerVct}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />                                                      
        <motion.h1
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="relative justify-center text-text-neutral-normal text-2xl md:text-6xl font-semibold font-['Unbounded'] leading-18"
        >
          Giá trị cốt lõi
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          className="relative mt-4 text-text-neutral-normal text-sm md:text-base font-['Mona_Sans'] mx-auto leading-6"
        >
          Giá trị cốt lõi không chỉ là những từ trên giấy.<br /> Đó là cách chúng tôi suy nghĩ, cách chúng tôi hành động, và cách chúng tôi kiến tạo nên SOFIN GROUP của ngày hôm nay và tương lai.
        </motion.p>
      </section>

      {/* Gallery Carousel */}
      <section className="pb-10 md:pb-16">
        <GalleryCarousel />
      </section>

      {/* Core Values */}
      <div className="relative">
        <div
          className="absolute inset-0 top-0 bg-cover bg-center bg-no-repeat opacity-5 pointer-events-none"
        />
        <CoreValueSection />
      </div>

      {/* CTA */}
      <CTASection />
    </>
  )
}
