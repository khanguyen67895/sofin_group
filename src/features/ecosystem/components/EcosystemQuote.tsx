import { motion } from 'framer-motion'

export default function EcosystemQuote() {
  return (
    <section className="pt-16 md:pt-24 bg-neutral-900">
      <div className="mx-auto px-5 sm:px-10 md:px-20 lg:px-30">
        <motion.blockquote
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p
            className="font-heading text-neutral-100 italic leading-[1.7]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          >
            "Trở thành tập đoàn công nghệ hàng đầu Đông Nam Á, tiên phong ứng dụng
            AI và công nghệ tiên tiến để tạo giá trị bền vững, đồng thời kết nối tri thức,
            công nghệ và con người nhằm thúc đẩy chuyển đổi số và phát triển nguồn
            nhân lực chất lượng cao tại Việt Nam"
          </p>
        </motion.blockquote>
      </div>
    </section>
  )
}
