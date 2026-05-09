import logo01 from '@/assets/images/logo-01.png'
import logo02 from '@/assets/images/logo-02.png'
import logo03 from '@/assets/images/logo-03.png'
import logo04 from '@/assets/images/logo-04.png'
import logo05 from '@/assets/images/logo-05.png'
import logo06 from '@/assets/images/logo-06.png'
import logo07 from '@/assets/images/logo-07.png'
import logo08 from '@/assets/images/logo-08.png'
import logo09 from '@/assets/images/logo-09.png'
import logo10 from '@/assets/images/logo-10.png'
import logo11 from '@/assets/images/logo-11.png'
import logo12 from '@/assets/images/logo-12.png'
import logo13 from '@/assets/images/logo-13.png'
import logo14 from '@/assets/images/logo-14.png'
import logo15 from '@/assets/images/logo-15.png'
import logo16 from '@/assets/images/logo-16.png'
import logo17 from '@/assets/images/logo-17.png'
import logo18 from '@/assets/images/logo-18.png'
import logo19 from '@/assets/images/logo-19.png'
import logo20 from '@/assets/images/logo-20.png'

const logos = [
  logo01, logo02, logo03, logo04, logo05,
  logo06, logo07, logo08, logo09, logo10,
  logo11, logo12, logo13, logo14, logo15,
  logo16, logo17, logo18, logo19, logo20,
]

export default function PartnersMarquee() {
  return (
    <div className="relative z-10 w-full py-8 overflow-hidden">
      <p className="text-center text-white text-lg font-bold mb-6 leading-7">
        Đối tác - Khách hàng tin cậy chúng tôi
      </p>
      <div className="flex w-max animate-marquee">
        {[...logos, ...logos].map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="h-16 object-cover grayscale hover:grayscale-0 hover:opacity-100 transition-all"
          />
        ))}
      </div>
    </div>
  )
}
