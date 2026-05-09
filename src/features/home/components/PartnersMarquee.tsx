import f90 from '@/assets/images/Frame 90.png'
import f91 from '@/assets/images/Frame 91.png'
import f92 from '@/assets/images/Frame 92.png'
// import f93 from '@/assets/images/Frame 93.png'
// import f95 from '@/assets/images/Frame 95.png'
import f96 from '@/assets/images/Frame 96.png'
// import f97 from '@/assets/images/Frame 97.png'
import f98 from '@/assets/images/Frame 98.png'
import f99 from '@/assets/images/Frame 99.png'
import f100 from '@/assets/images/Frame 100.png'
// import f101 from '@/assets/images/Frame 101.png'
// import f102 from '@/assets/images/Frame 102.png'
// import f103 from '@/assets/images/Frame 103.png'

const logos = [f92, f91, f96, f90, f98, f99, f100]

export default function PartnersMarquee() {
  return (
    <div className="relative z-10 w-full py-8 overflow-hidden">
      <p className="text-center text-white text-lg font-bold mb-6 leading-7">
        Đối tác - Khách hàng tin cậy chúng tôi
      </p>
      <div className="flex gap-2 md:gap-12 w-max animate-marquee">
        {[...logos, ...logos].map((src) => (
          <img
            src={src}
            alt={src}
            className="h-12 md:h-18 object-contain grayscale hover:grayscale-0 hover:opacity-100 transition-all"
          />
        ))}
      </div>
    </div>
  )
}
