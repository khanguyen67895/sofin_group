import Button from '@/components/ui/Button'
import { motion } from 'framer-motion'
import vpbank from '@/assets/images/VPBank.png'
import hipt from '@/assets/images/HiPT.png'
import gianty from '@/assets/images/GIANTY.png'
import seabank from '@/assets/images/SeABank.png'
import fiin from '@/assets/images/Fiin.png'

const partners = [
  { name: 'VPBank', logo: vpbank },
  { name: 'HiPT', logo: hipt },
  { name: 'GIANTY', logo: gianty },
  { name: 'SeABank', logo: seabank },
  { name: 'Fiin', logo: fiin },
]

export default function PartnersSection() {
  return (
    <section className="py-15 md:py-15 bg-neutral-950">
      <div className="mx-auto px-5 sm:px-10 md:px-20 lg:px-30">

        {/* ── Desktop: original grid layout ── */}
        <div className="hidden md:grid grid-cols-4 gap-4">

          {/* Header cell — spans 2 cols */}
          <motion.div
            className="col-span-2 flex flex-col justify-center pr-10 pb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="text-[10px] font-heading text-neutral-500 tracking-[0.15em] uppercase mb-2">
              MẠNG LƯỚI ĐỐI TÁC
            </span>
            <h2
              className="font-heading font-bold text-primary-500 mb-4"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              Đối tác &amp; Khách hàng
            </h2>
            <p className="text-white text-[16px] leading-[1.75] max-w-lm">
              Trở thành tập đoàn công nghệ hàng đầu Đông Nam Á, tiên phong ứng dụng trí tuệ nhân
              tạo và công nghệ tiên tiến để kiến tạo giá trị bền vững cho xã hội và doanh nghiệp.
            </p>
          </motion.div>

          {/* Partner logos — first row (2 items) */}
          {partners.slice(0, 2).map((p, i) => (
            <motion.div
              key={p.name}
              className="border border-neutral-300/30 h-60 flex items-center justify-center cursor-pointer group hover:border-neutral-600 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: 'easeOut' }}
            >
              <img src={p.logo} alt={p.name} className="h-8 object-contain opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
            </motion.div>
          ))}

          {/* Partner logos — second row (3 items) */}
          {partners.slice(2).map((p, i) => (
            <motion.div
              key={p.name}
              className="border border-neutral-300/30 h-60 flex items-center justify-center cursor-pointer group hover:border-neutral-600 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: 'easeOut' }}
            >
              <img src={p.logo} alt={p.name} className="h-8 object-contain opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
            </motion.div>
          ))}

          {/* CTA cell */}
          <div className="border border-neutral-300/30 h-60 flex flex-col items-center justify-center gap-3 px-5">
            <p className="text-center text-[16px] text-white leading-relaxed">
              Cùng trở thành đối tác tiếp theo của<br />chúng tôi
            </p>
            <Button variant="primary" size="sm">
              HỢP TÁC
            </Button>
          </div>
        </div>

        {/* ── Mobile layout ── */}
        <div className="md:hidden">
          {/* Header */}
          <div className="flex flex-col justify-center pb-4">
            <span className="text-[10px] font-heading text-neutral-500 tracking-[0.15em] uppercase mb-2">
              MẠNG LƯỚI ĐỐI TÁC
            </span>
            <h2
              className="font-heading font-bold text-primary-500 mb-4"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              Đối tác &amp; Khách hàng
            </h2>
            <p className="text-white text-[16px] leading-[1.75]">
              Trở thành tập đoàn công nghệ hàng đầu Đông Nam Á, tiên phong ứng dụng trí tuệ nhân
              tạo và công nghệ tiên tiến để kiến tạo giá trị bền vững cho xã hội và doanh nghiệp.
            </p>
          </div>

          {/* Horizontal scroll logos carousel */}
          <div
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory mt-4 pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {partners.map((p) => (
              <div
                key={p.name}
                className="border border-neutral-300/30 h-20 min-w-35 shrink-0 snap-start flex items-center justify-center cursor-pointer group hover:border-neutral-600 transition-colors"
              >
                <img src={p.logo} alt={p.name} className="h-6 object-contain opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center justify-center gap-3 px-5 py-8">
            <p className="text-center text-[16px] text-white leading-relaxed">
              Cùng trở thành đối tác tiếp theo của chúng tôi
            </p>
            <Button variant="primary" size="sm">
              HỢP TÁC
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
