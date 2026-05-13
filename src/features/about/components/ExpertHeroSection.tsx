import { motion } from 'framer-motion'
import imgCoreAction1 from '@/assets/images/ic_core_action1.png'
import imgCoreAction1x2 from '@/assets/images/ic_core_action1@2x.png'
import icBannerVct from '@/assets/images/ic_banner_vct.png'

const stats = [
  { value: '200+', label: 'CHUYÊN GIA TOÀN THỜI GIAN',    corner: 'top-left',  delay: '0s' },
  { value: '40+',  label: 'CHUYÊN GIA AI & DATA SCIENCE',  corner: 'top-right', delay: '0.8s' },
  { value: '85%',  label: 'CÓ BẰNG TIẾN SĨ/THẠC SĨ',      corner: 'bot-left',  delay: '1.6s' },
  { value: '15+',  label: 'QUỐC TỊCH KHÁC NHAU',           corner: 'bot-right', delay: '2.4s' },
]

const statPos: Record<string, string> = {
  'top-left':  'top-5 left-5 md:top-8 md:left-8',
  'top-right': 'top-5 right-5 md:top-8 md:right-10',
  'bot-left':  'bottom-5 left-5 md:bottom-8 md:left-10',
  'bot-right': 'bottom-5 right-5 md:bottom-8 md:right-8',
}

export default function ExpertHeroSection() {
  return (
    <section className="relative pb-0 overflow-hidden">
      
      <div className="relative z-20 text-center px-5 pb-10 md:pb-14">
        <img
          src={icBannerVct}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
        /> 
        <div className='pt-32'>                        
          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="relative text-white text-3xl md:text-6xl font-semibold font-['Unbounded'] leading-tight"
          >
            Đội ngũ chuyên gia
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
            className="mt-4 relative text-neutral-100 text-sm md:text-base font-['Mona_Sans'] max-w-2xl mx-auto leading-6"
          >
            SOFIN GROUP tự hào sở hữu đội ngũ chuyên gia, kỹ sư và nhà nghiên cứu xuất sắc – những người đam mê công nghệ,
            không ngừng sáng tạo và cùng chung một sứ mệnh: kiến tạo giá trị thực cho doanh nghiệp và xã hội.
          </motion.p>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <img
          src={imgCoreAction1}
          srcSet={`${imgCoreAction1x2} 2x`}
          alt="Đội ngũ SOFIN GROUP"
          className="w-full object-cover rounded-2xl max-h-150"
        />

        {/* 4 corner overlays */}
        <div className="absolute top-0 left-5 md:left-10 w-1/2 h-2/3 pointer-events-none rounded-tl-2xl"
          style={{ background: 'linear-gradient(135deg, #0c0c0c 0%, #0c0c0c 20%, transparent 70%)' }} />
        <div className="absolute top-0 right-5 md:right-10 w-1/2 h-2/3 pointer-events-none rounded-tr-2xl"
          style={{ background: 'linear-gradient(225deg, #0c0c0c 0%, #0c0c0c 20%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-5 md:left-10 w-1/2 h-2/3 pointer-events-none rounded-bl-2xl"
          style={{ background: 'linear-gradient(45deg, #0c0c0c 0%, #0c0c0c 20%, transparent 70%)' }} />
        <div className="absolute bottom-0 right-5 md:right-10 w-1/2 h-2/3 pointer-events-none rounded-br-2xl"
          style={{ background: 'linear-gradient(315deg, #0c0c0c 0%, #0c0c0c 20%, transparent 70%)' }} />

        {/* Top & bottom full-width fade */}
        <div className="absolute top-0 left-5 md:left-10 right-5 md:right-10 h-1/4 pointer-events-none rounded-t-2xl"
          style={{ background: 'linear-gradient(to bottom, #0c0c0c 0%, transparent 100%)' }} />
        <div className="absolute bottom-0 left-5 md:left-10 right-5 md:right-10 h-1/4 pointer-events-none rounded-b-2xl"
          style={{ background: 'linear-gradient(to top, #0c0c0c 0%, transparent 100%)' }} />

        {/* Stats */}
        {stats.map((s, i) => (
          <motion.div
            key={s.value}
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.12, ease: [0.4, 0, 0.2, 1] }}
            className={`absolute ${statPos[s.corner]} stat-float rounded-xl p-px ${i === 2 || i === 3 ? "mx-16" : "-mx-2"}`}
            style={{
              animationDelay: s.delay,
              background: 'linear-gradient(135deg, #272727 40%, #3A3A3A 100%)',
            }}
          >
            <div
              className="flex flex-col items-center justify-center px-4 py-3 md:px-6 md:py-4 rounded-xl"
              style={{ background: '#0C0C0C' }}
            >
              <p className="text-primary-500 text-2xl md:text-5xl font-semibold font-['Unbounded'] leading-none">
                {s.value}
              </p>
              <p className="text-neutral-100 text-[9px] md:text-[11px] font-['Mona_Sans'] mt-1 tracking-widest uppercase text-center">
                {s.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

