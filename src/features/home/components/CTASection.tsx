import bgFormHopTacMb from '@/assets/images/bg-form-hop-tac-mb.png'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function CTASection() {
  const navigate = useNavigate();
  return (
    <section className="bg-neutral-900 relative overflow-hidden mt-39">
      <motion.div
        className="absolute w-full z-10 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className='text-center justify-center text-stone-100 text-base font-normal font-["Mona_Sans"] leading-6 mb-8'>
          Chia sẻ với chúng tôi về dự án, ý tưởng hoặc cơ hội hợp tác. Đội ngũ chuyên gia <br /> sẽ phản hồi bạn trong vòng 24 giờ
        </p>
        <Button variant="primary" size="lg" onClick={() => navigate('/lien-he')}>
          HỢP TÁC
        </Button>

      </motion.div>

      <div className="">
        <img
          src={bgFormHopTacMb}
          alt=""
          className="w-full h-full self-center object-cover"
        />
      </div>
    </section>
  )
}
