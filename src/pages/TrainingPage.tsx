import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/ui/Button'
import bgProducts from '@/assets/images/bg_products.png'
import trainingGif from '@/assets/images/daa9216c6c27d87735025b49f654a1d6cb83fa7c.gif'

export default function TrainingPage() {
  const navigate = useNavigate()

  return (
    <div className="relative mb-10 bg-[#0C0C0C] overflow-hidden flex flex-col items-center">

      {/* Background image top */}
      <div className="absolute inset-x-0 top-0 pointer-events-none" style={{ height: '30%' }}>
        <img
          src={bgProducts}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        {/* bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-b from-transparent to-[#0C0C0C]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 mt-20 md:pt-32 w-full max-w-4xl mx-auto">

        <motion.h1
          className="text-white text-3xl md:text-[56px] font-semibold font-['Unbounded'] leading-tight md:leading-18"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Đào tạo
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img
            src={trainingGif}
            alt="Training animation"
            className="w-48 h-48 md:w-64 md:h-64 object-contain"
          />
        </motion.div>

        <motion.p
          className="text-neutral-100 text-base md:text-xl font-['Mona_Sans'] leading-7 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          Hệ thống Đào tạo đang được làm mới để phục vụ bạn tốt hơn. Hệ thống này đang được bảo trì,
          bạn có thể quay lại sau hoặc tiếp tục khám phá các chuyên mục khác của SofinGroup.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <Button variant="primary" size="lg" onClick={() => navigate('/')}>
            Khám phá SOFIN Group
          </Button>
        </motion.button>

      </div>
    </div>
  )
}
