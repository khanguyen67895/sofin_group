import bgLogo from '@/assets/video/tạo_video_zoom_in_zoom_202605151110.mp4'
import { motion } from 'framer-motion'

export default function LogoSection() {
  return (
    <section className="bg-neutral-900 relative z-50 md:mt-0 -mt-10">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Section title */}
        <motion.h2
          className="md:text-center text-primary-500 text-left font-heading font-bold text-2xl md:text-3xl md:mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Logo
        </motion.h2>

        {/* Logo display */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <video
            src={bgLogo}
            autoPlay
            loop
            muted
            playsInline
            aria-hidden
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            className="w-177.5 h-50 object-cover"
          />
        </motion.div>

        {/* Description paragraphs */}
        <div className="max-w-7xl mx-auto space-y-5 text-white text-sm md:text-base leading-6">
          {[
            'Logo được hình thành từ sự kết hợp giữa hai chữ cái S và F trong tên gọi SOFIN, kết hợp cùng biểu tượng tia sáng – một hình ảnh quen thuộc trong lĩnh vực AI, đại diện cho sự sáng tạo và những khoảnh khắc bùng nổ ý tưởng.',
            'Tổng thể logo thể hiện SOFIN là một nền tảng được xây dựng và phát triển trên công nghệ AI, luôn đổi mới, thông minh và tiên phong trong việc tạo ra giá trị.',
            'Logo của chúng tôi được cấu thành từ hai phần – biểu tượng SOFIN (Icon) và Wordmark. Biểu tượng và Wordmark luôn phải được sử dụng cùng nhau theo hướng dẫn hiển thị.',
            'Sự cân bằng hoàn hảo giữa yếu tố hình ảnh và nhận diện chữ viết giúp tổ hợp Icon & Wordmark truyền tải tinh thần thương hiệu một cách ngắn gọn, hiện đại và dễ ghi nhớ.',
          ].map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}
