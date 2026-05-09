import { motion } from 'framer-motion'
import icAboutAI from '@/assets/images/ic_about_ai.png'

export default function AboutContentSection() {
  return (
    <section className="bg-neutral-900">
      <div className="mx-auto px-5 sm:px-10 md:px-20 lg:px-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start">

          {/* Left — text content */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={icAboutAI}
              alt="SOFIN Group"
              className="w-full h-auto md:w-162.75 md:h-142.5 object-contain md:object-cover"
            />
          </motion.div>

          {/* Right — image */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div>
              <p className="self-stretch justify-start text-text-neutral-normal text-base font-normal font-['Mona_Sans'] leading-6">
                Thương hiệu bắt nguồn từ một ý tưởng táo bạo. Năm 2021, với mong muốn mang đến nhiều
                sản phẩm công nghệ thông minh và đáng tin cậy, chúng tôi đã ra mắt SOFIN Group - Tập đoàn
                công nghệ tiên phong trong việc ứng dụng AI tại Việt Nam. Sự phát triển của SOFIN Group
                được hỗ trợ bởi đội ngũ chuyên gia hàng đầu trong lĩnh vực công nghệ.
              </p>
            </div>

            <div>
              <h3 className="justify-start text-text-neutral-normal text-base font-semibold font-['Mona_Sans'] leading-6">Sứ mệnh</h3>
              <p className="justify-start text-text-neutral-normal text-base font-normal font-['Mona_Sans'] leading-6">
                Kết nối tri thức — công nghệ — con người, thúc đẩy chuyển đổi số toàn diện, phát triển nguồn
                nhân lực chất lượng cao và xây dựng hệ sinh thái đổi mới sáng tạo tại Việt Nam.
              </p>
            </div>

            <div>
              <ul className="flex flex-col gap-2 justify-start text-text-neutral-normal text-base font-semibold font-['Mona_Sans'] leading-6">
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  Tiên phong
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  Liêm chính
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  Trách nhiệm xã hội
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  Hợp tác
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-white mt-1">•</span>
                  Đổi mới sáng tạo
                </li>
              </ul>
            </div>

            <p className="self-stretch justify-start text-text-neutral-normal text-base font-normal font-['Mona_Sans'] leading-6">
              Trở thành tập đoàn công nghệ hàng đầu Đông Nam Á, tiên phong ứng dụng trí tuệ nhân tạo và
              công nghệ tiên tiến để kiến tạo giá trị bền vững cho xã hội và doanh nghiệp, kiến tạo giá trị bền
              vững thông qua đổi mới sáng tạo và ứng dụng trí tuệ nhân tạo.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
