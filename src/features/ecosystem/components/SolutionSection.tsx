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

export default function SolutionSection() {
  return (
    <section className="bg-neutral-900">
      <div className="mx-auto px-5 md:py-20 sm:px-10 md:px-20 lg:px-30">

        {/* Content: text left + image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-80 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="text-neutral-100 self-stretch justify-start text-text-neutral-normal text-base font-normal font-['Mona_Sans'] leading-6 mb-12">
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
                  <div className="mt-1 shrink-0 w-0.5 h-12 bg-neutral-600" />
                  <div>
                    <p className="text-primary-500 self-stretch justify-start text-text-primary-normal text-base font-semibold font-['Mona_Sans'] leading-6">{f.title}</p>
                    <p className="text-neutral-100 text-[16px] leading-relaxed mt-0.5">{f.desc}</p>
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

            <div
              className="p-3 bg-[radial-gradient(ellipse_53.36%_100.00%_at_0.00%_0.00%,rgba(255,255,255,0.20)_0%,rgba(255,255,255,0)_100%)] rounded-2xl outline -outline-offset-2 outline-neutral-700 backdrop-blur-sm inline-flex justify-start items-start gap-2"
            >
              <img
                src={imgAction}
                alt={""}
                className="w-115.25 h-125 object-cover object-center rounded-xl"
              />
              <div className="absolute inset-0 bg-linear-to-t from-neutral-900/70 via-transparent to-transparent" />
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
