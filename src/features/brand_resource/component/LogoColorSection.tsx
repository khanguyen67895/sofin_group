import icLogoColor from '@/assets/images/ic_logo_color.png'
import icLogoColor2x from '@/assets/images/ic_logo_color@2x.png'
import icLogoColor3x from '@/assets/images/ic_logo_color@3x.png'
import { motion } from 'framer-motion'

export default function LogoColorSection() {
  return (
    <section className="bg-[#0C0C0C] py-8 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row gap-2 md:gap-16">
          {/* Left: description */}
          <motion.div
            className="flex-1 space-y-1 md:space-y-5 leading-7"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-primary-500 font-heading font-semibold text-2xl md:text-[32px] md:mb-6">
              Màu sắc của logo
            </h2>
            <p className="text-white font-['Mona_Sans'] md:text-base md:mb-6">
              Logo SofinGroup được thiết kế từ ba phiên bốn màu chính, đó là sự kết hợp giữa các gam màu bổ trợ của thương hiệu nhằm tạo nên một hệ thống nhận diện mạnh mẽ, cuốn hút, đồng thời củng cố định vị của SOFIN thông qua bảng màu cốt lõi của thương hiệu.
            </p>
            <p className="text-white font-['Mona_Sans'] md:text-base md:mb-6">
              Flame là màu sắc biểu tượng, đóng vai trò là màu chủ đạo của SOFIN, đại diện cho năng lượng, sự đổi mới và tinh thần AI làm trọng tâm của thương hiệu.
            </p>
            <p className="text-white font-['Mona_Sans'] md:text-base md:mb-6">
              Carbon Black là màu bổ trợ, mang đến chiều sâu và độ tương phản, luôn được kết hợp cùng Flame để tạo nên một hệ thống thị giác hiện đại, mạnh mẽ và cân bằng.
            </p>
          </motion.div>

          {/* Right: color image */}
          <motion.div
            className="flex-1 flex items-center justify-center"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <img
              src={icLogoColor}
              srcSet={`${icLogoColor} 1x, ${icLogoColor2x} 2x, ${icLogoColor3x} 3x`}
              alt="Logo color variations"
              className="w-full max-w-lg object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
