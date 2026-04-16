import bgFormHopTac from '@/assets/images/bg-form-hop-tac.png'
import Button from '@/components/ui/Button'

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-neutral-900 border-t border-neutral-800 relative overflow-hidden">

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 30% 50%, rgba(254,76,0,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-screen-xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left */}
          <div className="flex flex-col gap-6">
            <span className="text-[11px] font-heading font-bold text-primary-500 tracking-[0.2em] uppercase">
              BẮT ĐẦU HỢP TÁC
            </span>

            <h2 className="font-heading font-bold text-neutral-0 leading-[1.2]"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              Chúng tôi luôn sẵn sàng lắng nghe và đồng hành cùng bạn
            </h2>

            <p className="text-neutral-400 text-[14px] leading-[1.85] max-w-md">
              Hãy cùng SOFIN GROUP kiến tạo tương lai số trên hành trình chuyển đổi và phát
              triển bền vững cho doanh nghiệp của bạn.
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <Button variant="primary" size="md" rightIcon={<ArrowRight />}>
                Bắt đầu ngay
              </Button>
              <Button variant="ghost" size="md">
                Tìm hiểu thêm
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4 border-t border-neutral-800">
              {['10+ Năm kinh nghiệm', '30+ Đối tác tin cậy', '100% Cam kết'].map((b) => (
                <span key={b} className="flex items-center gap-2 text-[13px] text-neutral-500">
                  <span className="text-primary-500 text-sm">✓</span>
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Right — image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[460px] aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-700/50">
              <img
                src={bgFormHopTac}
                alt="Bắt đầu hợp tác"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
