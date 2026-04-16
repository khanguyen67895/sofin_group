import heroBanner from '@/assets/images/heroBanner.png'
import icStars from '@/assets/images/ic_stars.png'
import Button from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-neutral-900 overflow-hidden">

      {/* ═══ Background: heroBanner full-bleed ═══ */}
      <img
        src={heroBanner}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: '130% center' }}
        draggable={false}
      />

      {/* ═══ Content ═══ */}
      <div className="relative z-10 h-full flex flex-col mx-auto w-full px-20 md:px-30">

        {/* Main content — vertically centered */}
        <div className="flex-1 flex flex-col justify-center max-w-200">

          {/* H1 */}
          <h1 className="font-heading font-bold leading-[1.1] mb-6"
            style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)' }}
          >
            <span className="block text-neutral-0">{`Tập đoàn`}</span>
            <span className="block text-neutral-0">{`Công nghệ kiến tạo`}</span>
          </h1>

          {/* Description */}
          <p className="text-neutral-0 text-[14px] md:text-[15px] leading-[1.85] mb-8">
            Chúng tôi không chỉ theo kịp tương lai, chúng tôi chủ động định hình và kiến tạo
            nó. Bằng việc tiên<br />phong ứng dụng công nghệ AI, kết nối tri thức và con người,
            nhằm tạo ra những giá trị bền vững cho<br />doanh nghiệp và xã hội.
          </p>

          {/* CTA */}
          <div>
            <Button variant="primary" size="md" rightIcon={<img src={icStars} alt="" className="size-4" />}>
              TÌM HIỂU THÊM
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
