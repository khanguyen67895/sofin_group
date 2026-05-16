import icBgCore from '@/assets/images/ic_bg_core.png'
import icBgCore2x from '@/assets/images/ic_bg_core@2x.png'
import icReal from '@/assets/images/ic_real.gif'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

interface CTASectionProps {
  description?: string
  buttonText?: string
  onButtonClick?: () => void
}

export default function CTASection({
  description = 'Chia sẻ với chúng tôi về dự án, ý tưởng hoặc cơ hội hợp tác. Đội ngũ chuyên gia sẽ phản hồi bạn trong vòng 24 giờ',
  buttonText = 'HỢP TÁC',
  onButtonClick,
}: CTASectionProps) {
  const navigate = useNavigate()
  const handleClick = onButtonClick ?? (() => navigate('/lien-he'))

  return (
    <section className="relative overflow-hidden mt-12">
      {/* Background */}
      <img
        src={icBgCore}
        srcSet={`${icBgCore2x} 2x`}
        alt=""
        className="absolute inset-0 w-full h-full opacity-20 object-cover object-center"
        aria-hidden="true"
      />

      {/* top fade */}
      <div className="absolute inset-x-0 top-0 h-16 bg-linear-to-b from-[#0C0C0C] to-transparent z-10 pointer-events-none" />
      {/* bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-[#0C0C0C] to-transparent z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-5 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-6 md:mb-8"
        >
          <img
            src={icReal}
            alt="Real Tech Real Value"
            className="w-40 h-40 md:w-56 md:h-56 object-contain"
          />
        </motion.div>

        <motion.p
          className='text-center text-[#F5F0E8] text-xl font-normal font-heading leading-6 mb-8 max-w-3xl'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button variant="primary" size="lg" onClick={handleClick} style={{ width: '288px' }}>
            {buttonText}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
