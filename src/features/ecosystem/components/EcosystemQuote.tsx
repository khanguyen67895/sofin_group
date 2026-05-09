import { motion } from 'framer-motion'

export default function EcosystemQuote() {
  return (
    <section className="w-full mt-20 py-15 md:py-20 bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,#242424_0%,rgba(15,15,15,0)_100%),radial-gradient(ellipse_50%_50%_at_50%_100%,#242424_0%,rgba(15,15,15,0)_100%)] border-t-2 border-b-2 border-stone-950 inline-flex justify-center items-center gap-8">
      <div className="mx-auto px-5 sm:px-10 md:px-20 lg:px-30">
        <motion.blockquote
          className="text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p
            className="text-center justify-center text-text-neutral-normal text-3xl font-normal font-['Mona_Sans'] leading-10"
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
