import bgFormHopTac from '@/assets/images/bg-form-hop-tac.png'
import bgFormHopTacMb from '@/assets/images/bg-form-hop-tac-mb.png'
import Button from '@/components/ui/Button'
import icStars from '@/assets/images/ic_stars.png'
import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="bg-black relative overflow-hidden">
        {/* Desktop background */}
        <img
          src={bgFormHopTac}
          alt=""
          className="hidden md:block absolute right-0 top-0 h-full w-full object-cover object-center"
        />
        <div className="hidden md:block absolute bottom-0 left-0 right-0 h-2/3 bg-linear-to-t from-neutral-900 to-transparent" />
        <div className="hidden md:block absolute top-0 -left-220 bottom-0 w-4/5 bg-linear-to-r from-[#0C0C0C] via-[#0C0C0C]/80 to-transparent" />

      <div className="relative mx-auto px-5 sm:px-10 md:px-20 lg:px-30 mt-8 md:mb-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left — form */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div>
              <span className="text-[10px] font-heading text-neutral-500 tracking-[0.15em] uppercase block mb-2">
                KẾT NỐI VỚI CHÚNG TÔI
              </span>
              <h2
                className="font-heading font-bold text-primary-500"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
              >
                Bắt đầu hợp tác
              </h2>
            </div>

            <p className="text-neutral-100 text-[28px] max-w-md">
              Chúng tôi luôn sẵn sàng lắng nghe và đồng hành cùng doanh nghiệp của bạn
            </p>

            {/* Form */}
            <div className="flex flex-col gap-4 max-w-md">
              <input
                type="text"
                placeholder="Họ và Tên"
                className="bg-transparent border-b border-neutral-700 py-3 text-[13px] text-neutral-100 placeholder-neutral-600 outline-none focus:border-primary-500 transition-colors"
              />
              <input
                type="tel"
                placeholder="Số điện thoại"
                className="bg-transparent border-b border-neutral-700 py-3 text-[13px] text-neutral-100 placeholder-neutral-600 outline-none focus:border-primary-500 transition-colors"
              />
              <textarea
                placeholder="Lời nhắn yêu cầu hợp tác"
                rows={3}
                className="bg-transparent border-b border-neutral-700 py-3 text-[13px] text-neutral-100 placeholder-neutral-600 outline-none focus:border-primary-500 transition-colors resize-none"
              />
            </div>

            <div>
              <Button variant="primary" size="md" rightIcon={<img src={icStars} alt="" className="size-4" />}>
                GỬI YÊU CẦU
              </Button>
            </div>
          </motion.div>

        </div>

        {/* Mobile background image — below form */}
          <img
            src={bgFormHopTacMb}
            alt=""
            className="md:hidden w-full object-cover"
          />
      </div>
    </section>
  )
}
