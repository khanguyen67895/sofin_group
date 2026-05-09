import bgFormHopTacMb from '@/assets/images/bg-form-hop-tac-mb.png'
import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function CTASection() {
  const navigate = useNavigate();
  return (
    <section className="bg-neutral-900 relative overflow-hidden mt-12 md:mt-39">
      {/* Top fade to #0C0C0C */}
      <div className="absolute top-0 left-0 right-0 h-15 bg-linear-to-b from-[#0C0C0C] to-transparent z-10 pointer-events-none" />
      {/* Mobile layout: text/button on top, image below */}
      <div className="md:hidden flex flex-col">
        <motion.div
          className="flex flex-col items-center text-center px-8 pb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className='text-center text-stone-100 text-base font-normal font-["Mona_Sans"] leading-6 mb-8'>
            Chia sẻ với chúng tôi về dự án, ý tưởng hoặc cơ hội hợp tác. Đội ngũ chuyên gia sẽ phản hồi bạn trong vòng 24 giờ
          </p>
          <Button variant="primary" size="lg" onClick={() => navigate('/lien-he')}>
            HỢP TÁC
          </Button>
        </motion.div>
        <img
          src={bgFormHopTacMb}
          alt=""
          className="w-full h-80 -mt-16 -mb-2 object-cover"
        />
      </div>

      {/* Desktop layout: absolute text over image */}
      <div className="hidden md:block relative">
        <motion.div
          className="absolute w-full z-10 flex flex-col items-center text-center pt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className='text-center text-stone-100 text-base font-normal font-["Mona_Sans"] leading-6 mb-8'>
            Chia sẻ với chúng tôi về dự án, ý tưởng hoặc cơ hội hợp tác. Đội ngũ chuyên gia <br /> sẽ phản hồi bạn trong vòng 24 giờ
          </p>
          <Button variant="primary" size="lg" onClick={() => navigate('/lien-he')}>
            HỢP TÁC
          </Button>
        </motion.div>
        <img
          src={bgFormHopTacMb}
          alt=""
          className="w-full h-full self-center object-cover -mb-6"
        />
      </div>
    </section>
  )
}
