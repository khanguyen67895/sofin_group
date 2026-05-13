import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import CoreValueSection from '@/features/about/components/CoreValueSection'
import GalleryCarousel from '@/features/about/components/GalleryCarousel'
import Button from '@/components/ui/Button/Button'
import icBgCore from '@/assets/images/ic_bg_core.png'
import icBgCore2x from '@/assets/images/ic_bg_core@2x.png'
import icBannerVct from '@/assets/images/ic_banner_vct.png'

export default function CoreValuesPage() {
  const navigate = useNavigate()

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
      <section className="relative py-20 md:py-28 px-5 text-center overflow-hidden">
        <img
          src={icBgCore}
          srcSet={`${icBgCore2x} 2x`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none select-none"
        />
        <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-white text-base md:text-xl font-['Mona_Sans'] leading-8"
          >
            Năm giá trị — một SOFIN GROUP. Đó là cách chúng tôi định nghĩa thành công và xây dựng tương lai.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          >
            <Button size="lg" onClick={() => navigate('/lien-he')}>
              LIÊN HỆ NGAY CHO CHÚNG TÔI
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
