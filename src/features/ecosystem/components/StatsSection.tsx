import { motion } from 'framer-motion'

const stats = [
  { value: '50+', label: 'DỰ ÁN TRIỂN KHAI' },
  { value: '97%', label: 'KHÁCH HÀNG HÀI LÒNG' },
  { value: '4', label: 'THÁNG / 1 PROJECT' },
  { value: '150M', label: 'CHO DỰ ÁN HOÀN CHỈNH' },
]

export default function StatsSection() {
  return (
    <section className="bg-neutral-900 border-y border-neutral-800/60 my-20">
      <div className="mx-auto px-5 sm:px-10 md:px-20 lg:px-30">
        <div className="grid grid-cols-1 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="flex flex-col items-center md:items-start justify-center py-4 px-12 md:px-16 border-neutral-800/60"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            >
              <p
                className="font-body font-bold text-primary-500 leading-none"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
              >
                {s.value}
              </p>
              <p className="text-neutral-400 text-[10px] tracking-widest mt-2 uppercase">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
