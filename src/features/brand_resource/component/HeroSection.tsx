import bgHeaderVideo from '@/assets/video/bansao.mp4'
import icLogoBrand from '@/assets/images/ic_logo_brand.png'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section>
      {/* Background */}
      <video
        src={bgHeaderVideo}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
        className="absolute inset-0 opacity-5 w-full h-200 object-cover"
      />

      {/* Bottom fade to black */}
      <div className="hidden md:block absolute bottom-30 left-0 right-0 h-64 bg-linear-to-t from-[#0C0C0C] via-[#0C0C0C]/80 to-transparent z-10 pointer-events-none" />

        {/* Title */}
       <div className="relative z-10 w-full mx-auto px-5 md:pl-10 sm:pl-10 lg:pl-10 xl:pl-85 py-32 md:py-40 flex flex-col md:flex-row items-center gap-10 md:gap-0">
        {/* Left: text */}
        <div className="flex-1 text-center md:text-left flex flex-col">
          <motion.p
            className="text-white text-xl md:text-[32px] font-['Unbounded'] font-semibold mb-4 md:leading-10 -mt-10 md:mt-0 order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Sofin Group
          </motion.p>

          <motion.h1
            className="font-heading font-semibold text-primary-500 text-[32px] sm:leading-10 md:text-4xl lg:text-4xl xl:text-[64px] md:leading-10 xl:leading-18 lg:leading-10 mb-6 order-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Brand Resource<br />Guidelines
          </motion.h1>

          {/* Logo: visible only on mobile, between title and description */}
          <motion.div
            className="flex md:hidden items-center justify-center mb-6 order-3"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          >
            <img
              src={icLogoBrand}
              srcSet={`${icLogoBrand} 1x`}
              alt="SOFIN GROUP logo"
              className="w-48 object-contain"
            />
          </motion.div>

          <motion.p
            className="text-white text-base md:text-xl leading-8 order-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Thương hiệu bắt nguồn từ một ý tưởng táo bạo. Năm 2021, với mong muốn mang đến những sản phẩm công nghệ thông minh và đáng tin cậy, chúng tôi đã ra mắt SOFIN Group – Tập đoàn công nghệ tiên phong trong việc ứng dụng AI tại Việt Nam. Sự phát triển của SOFIN Group được hỗ trợ bởi đội ngũ chuyên gia hàng đầu trong lĩnh vực công nghệ.
          </motion.p>
        </div>

        {/* Right: logo — desktop only */}
        <motion.div
          className="hidden md:flex flex-1 items-center justify-center"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
        >
          <img
            src={icLogoBrand}
            srcSet={`${icLogoBrand} 1x`}
            alt="SOFIN GROUP logo"
            className="w-64 md:w-80 lg:w-96 object-contain"
          />
        </motion.div>
      </div>
    </section>
  )
}
