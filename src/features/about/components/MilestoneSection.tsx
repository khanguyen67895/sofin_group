import { motion } from 'framer-motion'
import icRecStart from '@/assets/images/ic_rec_start.png'
import icSectionPlatform from "@/assets/images/ic_section_platform.png";
import icSectionPlatform2x from "@/assets/images/ic_section_platform@2x.png";

const milestones = [
  { year: '2025', items: ['Hệ sinh thái 15+ quốc gia'] },
  { year: '2023', items: ['Giải thưởng Innovation ASEAN'] },
  { year: '2022', items: ['Quỹ đầu tư Startup công nghệ'] },
  { year: '2021', items: ['Đối tác chiến lược Google & Amazon'] },
  { year: '2020', items: ['Thành lập SOFIN GROUP Ra mắt nền tảng\n AI đầu tiên'] },
]

export default function MilestoneSection() {
  return (
    <section className="py-15 md:py-20 bg-neutral-900">
      <div className="mx-auto px-5 sm:px-10 md:px-20 lg:px-30">

        <motion.div
          className="mb-10 flex flex-col items-start md:items-center text-left md:text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img src={icSectionPlatform} srcSet={`${icSectionPlatform2x} 2x`} alt="Nền tảng tổ chức" className="mb-3 h-8 object-contain" />
          <h2 className="text-left md:text-center text-4xl font-medium font-['Unbounded'] leading-12 text-primary-500">
            Cột mốc của SOFIN Group
          </h2>
        </motion.div>

        {/* Mobile: diamond left, content right */}
        <div className="md:hidden relative">
          <div className="absolute left-2.5 top-0 bottom-0 w-px bg-neutral-700/50" />
          <div className="flex flex-col gap-8 pl-10">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                className="relative flex flex-col"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="absolute -left-10 top-1 z-10 bg-neutral-900 py-0.5">
                  <img src={icRecStart} alt="" className="w-5 h-5" />
                </div>
                <span className="text-white text-2xl font-semibold font-['Unbounded'] leading-8">{m.year}</span>
                {m.items.map((item) => (
                  <p key={item} className="text-white/70 text-sm font-normal font-['Mona_Sans'] leading-6 whitespace-pre-line">{item}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop: alternating left/right */}
        <div className="hidden md:block relative max-w-2xl mx-auto">
          <div className="flex flex-col">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div key={m.year} className="flex flex-col items-center">
                  <div className="grid grid-cols-[1fr_auto_1fr] w-full items-center gap-x-10">
                    <motion.div
                      className={`flex flex-col ${isLeft ? 'items-end text-right' : ''}`}
                      initial={{ opacity: 0, x: isLeft ? -20 : 0 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      {isLeft && (<>
                        <span className="text-white text-2xl font-semibold font-['Unbounded'] leading-8">{m.year}</span>
                        {m.items.map((item) => <p key={item} className="text-base font-semibold font-['Mona_Sans'] leading-6">{item}</p>)}
                      </>)}
                    </motion.div>
                    <div className="relative z-10 bg-neutral-900 py-1">
                      <img src={icRecStart} alt="" className="w-5 h-5" />
                    </div>
                    <motion.div
                      className={`flex flex-col ${!isLeft ? 'items-start text-left' : ''}`}
                      initial={{ opacity: 0, x: !isLeft ? 20 : 0 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      {!isLeft && (<>
                        <span className="text-white text-2xl font-semibold font-['Unbounded'] leading-8">{m.year}</span>
                        {m.items.map((item) => <p key={item} className="text-base font-semibold font-['Mona_Sans'] leading-6">{item}</p>)}
                      </>)}
                    </motion.div>
                  </div>
                  {i !== milestones.length - 1 && <div className="w-px h-16 bg-neutral-800/50" />}
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
