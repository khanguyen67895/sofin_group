import { motion } from 'framer-motion'
import icLineTalent from '@/assets/images/ic_line_talent.svg'
import icLineTalentMb from '@/assets/images/ic_line_talent_mb.svg'

export default function NurtureSection() {
  return (
    <section className="pt-16 md:pt-24 px-5 sm:px-10 md:px-20 lg:px-30">
      <motion.h2
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="text-center text-primary-500 text-2xl md:text-[32px] font-semibold font-['Unbounded'] mb-12"
      >
        Môi trường nuôi dưỡng tài năng
      </motion.h2>

      {/* Desktop */}
      <div className="hidden md:block relative w-full select-none">
        <img src={icLineTalent} alt="" className="w-full h-80" />
        <svg viewBox="0 0 1277 350" xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-80 pointer-events-none" style={{ overflow: 'visible' }}>
          <path
            d="M2.5 175V268C2.5 305.003 32.4969 335 69.5 335H253.5C290.503 335 320.5 305.003 320.5 268V82C320.5 44.9969 350.497 15 387.5 15H571.5C608.503 15 638.5 44.9969 638.5 82V268C638.5 305.003 668.497 335 705.5 335H889.5C926.503 335 956.5 305.003 956.5 268V82C956.5 44.9969 986.497 15 1023.5 15H1207.5C1244.5 15 1274.5 44.9969 1274.5 82V175"
            fill="none" stroke="#FE4C00" strokeOpacity="0.7" strokeWidth="5" strokeLinecap="round" strokeDasharray="200 9999"
          >
            <animate attributeName="stroke-dashoffset" from="0" to="-3200" dur="4s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>

      {/* Mobile */}
      <div className="md:hidden relative w-full select-none">
        <img src={icLineTalentMb} alt="" className="w-full h-auto block" />
        <svg viewBox="0 0 350 636" xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
          <path
            d="M175 1.5L305 1.5C321.569 1.5 335 14.9315 335 31.5V129.25C335 145.819 321.569 159.25 305 159.25L45 159.25C28.4315 159.25 15 172.681 15 189.25L15 287C15 303.569 28.4315 317 45 317H305C321.569 317 335 330.431 335 347V444.75C335 461.319 321.569 474.75 305 474.75H45C28.4315 474.75 15 488.181 15 504.75L15 602.5C15 619.069 28.4315 632.5 45 632.5H175"
            fill="none" stroke="#FE4C00" strokeOpacity="0.7" strokeWidth="5" strokeLinecap="round" strokeDasharray="200 9999"
          >
            <animate attributeName="stroke-dashoffset" from="0" to="-2000" dur="4s" repeatCount="indefinite" />
          </path>
        </svg>
      </div>
    </section>
  )
}
