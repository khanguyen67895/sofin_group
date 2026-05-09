import { motion } from 'framer-motion'
import { coreValues } from '../data/jobs'
import icSmile from '@/assets/images/ic_smile.png'

export default function CoreValuesSection() {
  return (
    <section className="py-12 md:py-20 bg-neutral-900">
      <div className="mx-auto px-5 sm:px-10 md:px-20 lg:px-30">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="text-neutral-100 justify-center text-text-neutral-normal text-[10px] font-normal font-['Mona_Sans'] uppercase leading-3 tracking-[4px]">
              TUYỂN DỤNG
            </span>
            <h2
              className="justify-center text-text-primary-normal text-2xl md:text-4xl font-semibold font-['Unbounded'] md:leading-12 text-primary-500"
            >
              Giá trị cốt lõi<br />của SOFIN
            </h2>
          </motion.div>

          {/* Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 md:gap-y-12">
            {coreValues.map((v, index) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex flex-col gap-3"
              >
                <img
                  src={icSmile}
                  alt=""
                  className="w-6 h-6 object-cover object-center"
                />
                <h3 className="self-stretch justify-center text-white text-xl font-semibold font-['Unbounded'] leading-7">
                  {v.title}
                </h3>
                <p className="self-stretch justify-center text-white text-base font-normal font-['Mona_Sans'] leading-6">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
