import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import icBgCore from '@/assets/images/ic_bg_core.png'
import icBgCore2x from '@/assets/images/ic_bg_core@2x.png'
import Button from '@/components/ui/Button'

export default function ExpertCTASection() {
    const navigate = useNavigate()
  return (
    <section className="relative py-20 md:py-28 px-5 text-center overflow-hidden">
        <div className="hidden md:block absolute top-0 left-0 right-0 h-15 bg-linear-to-b from-[#0C0C0C] to-transparent z-10 pointer-events-none" />
        <img
          src={icBgCore}
          srcSet={`${icBgCore2x} 2x`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none select-none"
        />
        <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-white text-2xl md:text-3xl font-semibold font-['Unbounded'] leading-tight mb-4"
        >
          Trở thành một thành viên của<br />SOFIN GROUP
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
          className="text-neutral-100 text-sm md:text-base font-['Mona_Sans'] max-w-xl mx-auto leading-6 mb-8"
        >
          Nếu bạn đam mê công nghệ, khao khát tạo ra giá trị thực và mong muốn phát triển trong một môi trường đẳng cấp – chúng tôi đang tìm kiếm bạn.
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
  )
}
