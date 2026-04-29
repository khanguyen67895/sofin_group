import { motion } from 'framer-motion'
import imgAction from '@/assets/images/ic_company.png'


const features = [
  {
    title: '$10M+ giá trị dữ liệu doanh nghiệp',
    desc: 'Khai thác dữ liệu chuyên sâu, hỗ trợ phân tích và ra quyết định chiến lược.',
  },
  {
    title: '1000+ báo cáo & insight mỗi năm',
    desc: 'Cập nhật liên tục xu hướng thị trường, ngành và đối thủ cạnh tranh.',
  },
  {
    title: '500+ doanh nghiệp đang sử dụng',
    desc: 'Đồng hành tối ưu vận hành, quản trị rủi ro và tăng trưởng bền vững',
  },
]

export function SolutionHeading() {
  return (
    <section className="pb-0 bg-neutral-950">
      <div className="mx-auto px-5 sm:px-10 md:px-20 lg:px-30">
        <motion.div
          className="flex flex-col text-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="text-primary-500 text-[13px] font-heading font-semibold tracking-widest uppercase">
            Giải pháp doanh nghiệp
          </span>
          <h2
            className="font-body font-bold text-white mt-3 leading-[1.15]"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
          >
            Hệ thống vận hành riêng cho bạn<br />
            Không phần mềm đóng gói
          </h2>
        </motion.div>
      </div>
    </section>
  )
}

export default function SolutionSection() {
  return (
    <section className="bg-neutral-950">
      <div className="mx-auto px-5 sm:px-10 md:px-20 lg:px-30">

        {/* Content: text left + image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="text-neutral-100 text-[15px] leading-[1.85] mb-10">
              Giải pháp doanh nghiệp của SOFIN Group cung cấp hệ sinh thái công cụ và
              dữ liệu toàn diện, giúp tối ưu vận hành, phân tích thị trường, quản trị rủi ro và ra
              quyết định chiến lược. Đồng thời hỗ trợ tự động hóa quy trình, nâng cao hiệu
              quả kinh doanh và khả năng phát triển bền vững.
            </p>

            <div className="flex flex-col gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  className="flex gap-4 items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
                >
                  <div className="mt-1 shrink-0 w-0.5 h-10 bg-neutral-600" />
                  <div>
                    <p className="text-primary-500 font-semibold text-[14px]">{f.title}</p>
                    <p className="text-neutral-100 text-[13px] leading-relaxed mt-0.5">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — image */}
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          >
            <img
              src={imgAction}
              alt=""
              className="w-full h-72 md:h-120 object-cover object-center"
              style={{ clipPath: 'polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
