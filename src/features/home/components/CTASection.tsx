import bgFormHopTac from '@/assets/images/bg-form-hop-tac.png'
import Button from '@/components/ui/Button'
import icStars from '@/assets/images/ic_stars.png'

export default function CTASection() {
  return (
    <section className="py-20 md:py-30 bg-neutral-900 relative overflow-hidden">
        <img
          src={bgFormHopTac}
          alt=""
          className="absolute right-0 top-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-neutral-900 via-neutral-900/70 to-transparent" />

      <div className="relative mx-auto px-20 md:px-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* Left — form */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-[10px] font-heading text-neutral-100 tracking-[0.15em] uppercase block mb-2">
                /KẾT NỐI VỚI CHÚNG TÔI
              </span>
              <h2
                className="font-heading font-bold text-primary-500"
                style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
              >
                Bắt đầu hợp tác
              </h2>
            </div>

            <p className="text-neutral-300 text-[14px] leading-[1.85] max-w-md">
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
          </div>

        </div>
      </div>
    </section>
  )
}
