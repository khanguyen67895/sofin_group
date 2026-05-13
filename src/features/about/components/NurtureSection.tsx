import { motion } from 'framer-motion'

const nurture = [
  { title: 'Học tập liên tục', desc: 'Chương trình đào tạo nội bộ, ngân sách phát triển cá nhân và truy cập các khóa học hàng đầu thế giới.' },
  { title: 'Bài toán thực tế lớn', desc: 'Làm việc với những bài toán công nghệ phức tạp, phục vụ hàng triệu người dùng thực tế.' },
  { title: 'Môi trường đa văn hóa', desc: 'Đội ngũ đa dạng từ 15+ quốc tịch, mang tới góc nhìn toàn cầu và tinh thần cởi mở.' },
  { title: 'Phúc lợi vượt trội', desc: 'Mức lương cạnh tranh, cổ phần ESOP, bảo hiểm cao cấp và môi trường làm việc linh hoạt.' },
]

const talents = ['AI Engineers', 'PhD Researchers', 'Strategists', 'Designer']
const angles = [-60, 30, 120, -150]

export default function NurtureSection() {
  return (
    <section className="py-16 md:py-24 px-5 sm:px-10 md:px-20 lg:px-30">
      <motion.h2
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="text-center text-primary-500 text-2xl md:text-4xl font-semibold font-['Unbounded'] mb-12"
      >
        Môi trường nuôi dưỡng tài năng
      </motion.h2>
      <div className="flex flex-col md:flex-row gap-12 md:gap-100 items-center">
        {/* Left: slides in from left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-col gap-6 flex-1 max-w-xl"
        >
          <p className="text-neutral-100 text-sm md:text-base font-['Mona_Sans'] leading-7">
            Tại SOFIN GROUP, chúng tôi tin rằng mọi tài năng đều xứng đáng được phát triển trong một môi trường tốt nhất – nơi sáng tạo được khuyến khích, tri thức được chia sẻ và mỗi cá nhân đều có cơ hội tỏa sáng.
          </p>
          <ul className="flex flex-col gap-5">
            {nurture.map((n, i) => (
              <motion.li
                key={n.title}
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                className="flex gap-4 items-start"
              >
                <div className="mt-1 shrink-0 w-0.5 h-16 bg-neutral-600" />
                <div className="flex flex-col gap-1">
                  <span className="text-primary-500 font-semibold text-sm md:text-base font-['Mona_Sans']">{n.title}</span>
                  <span className="text-neutral-100 text-sm font-['Mona_Sans'] leading-6">{n.desc}</span>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right: scales in */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="shrink-0 relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center"
        >
          {/* 3 concentric rings: inner darkest orange → outer fades */}
          <div className="absolute inset-0 rounded-full" style={{ border: '1px solid rgba(254,76,0,0.12)', animation: 'ringPulse 3s ease-in-out infinite 0.6s' }} />
          <div className="absolute inset-8 rounded-full" style={{ border: '1px solid rgba(254,76,0,0.25)', animation: 'ringPulse 3s ease-in-out infinite 0.3s' }} />
          <div className="absolute inset-16 rounded-full" style={{ border: '2px solid rgba(254,76,0,0.55)', boxShadow: '0 0 18px 2px rgba(254,76,0,0.25)', animation: 'ringPulse 3s ease-in-out infinite 0s' }} />
          <div className="relative z-10 text-center">
            <p className="text-primary-500 text-4xl md:text-5xl font-bold font-['Unbounded']">200+</p>
            <p className="text-white/60 text-xs font-['Mona_Sans'] tracking-widest mt-1">TÀI NĂNG</p>
          </div>
          {talents.map((t, i) => {
            const rad = (angles[i] * Math.PI) / 180
            const x = Math.round(Math.cos(rad) * 130)
            const y = Math.round(Math.sin(rad) * 130)
            return (
              <motion.span
                key={t}
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="absolute text-primary-500 text-xs font-semibold font-['Mona_Sans'] whitespace-nowrap rounded-lg p-px"
                style={{
                  background: 'linear-gradient(135deg, #272727 40%, #3A3A3A 100%)',
                  transform: `translate(${x}px, ${y}px)`,
                  top: '50%', left: '50%', marginTop: '-10px', marginLeft: '-50px',
                  animation: `${i % 2 === 0 ? 'tagFloatUp' : 'tagFloatDown'} ${2.5 + i * 0.3}s ease-in-out infinite`,
                }}
              >
                <span className="block px-4 py-1 rounded-lg bg-[#0C0C0C]">{t}</span>
              </motion.span>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
