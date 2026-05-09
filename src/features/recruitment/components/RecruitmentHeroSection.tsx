import { motion } from 'framer-motion'
import icRecruitment from '@/assets/images/bg_recruitment.png'

export default function RecruitmentHeroSection() {
  return (
    <section className="relative h-60 md:h-80 overflow-hidden">
      <img
        src={icRecruitment}
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
            className="justify-center text-text-neutral-normal text-2xl md:text-6xl font-semibold font-['Unbounded'] leading-18 text-white"
          >
            Tuyển dụng
          </h1>
          <p className="text-neutral-100 justify-center text-text-neutral-normal text-base font-normal font-['Mona_Sans'] leading-6 mt-1">
            Ứng tuyển để trở thành viên của SOFIN GROUP
          </p>
        </motion.div>
      </div>
    </section>
  )
}
