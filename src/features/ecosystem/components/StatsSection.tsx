import { motion } from 'framer-motion'

const stats = [
  { value: '50+', label: 'DỰ ÁN TRIỂN KHAI' },
  { value: '97%', label: 'KHÁCH HÀNG HÀI LÒNG' },
  { value: '4', label: 'THÁNG / 1 PROJECT' },
  { value: '150M', label: 'CHO DỰ ÁN HOÀN CHỈNH' },
]

export default function StatsSection() {
  return (
    <section className="relative z-20 bg-neutral-900 border-y border-neutral-800/60 -mt-50 md:-mt-60">
      <div className="mx-auto px-5 sm:px-10 md:px-20 lg:px-30">
        <div className="grid grid-cols-1 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="flex flex-col items-center text-center md:items-start md:text-left justify-center py-4 md:px-16 border-neutral-800/60"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            >
              <p
                className="self-stretch justify-center text-primary-500 text-text-primary-normal text-6xl font-semibold font-['Unbounded'] leading-18"
              >
                {s.value}
              </p>
              <p className="text-neutral-100 self-stretch justify-center text-text-neutral-normal text-[10px] font-normal font-['Mona_Sans'] uppercase leading-3 tracking-[4px]">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
