import icLogoTrademark1 from '@/assets/images/ic_logo_trademark1.png'
import icLogoTrademark1_2x from '@/assets/images/ic_logo_trademark1@2x.png'
import icLogoTrademark2 from '@/assets/images/ic_logo_trademark2.png'
import icLogoTrademark2_2x from '@/assets/images/ic_logo_trademark2@2x.png'
import { motion } from 'framer-motion'

const cards = [
  {
    img: icLogoTrademark1,
    srcSet: `${icLogoTrademark1} 1x, ${icLogoTrademark1_2x} 2x`,
    alt: 'SOFIN favicon icon',
    desc: 'Favicon là một biểu tượng nhỏ xuất hiện ở phía trên tab trình duyệt. Nó đóng vai trò nhận diện thương hiệu cho website và giúp người dùng dễ dàng tìm thấy trang của bạn khi mở nhiều tab cùng lúc.',
  },
  {
    img: icLogoTrademark2,
    srcSet: `${icLogoTrademark2} 1x, ${icLogoTrademark2_2x} 2x`,
    alt: 'SOFIN GROUP co-branding lockup',
    desc: 'Khi triển khai các hoạt động đồng thương hiệu (co-branding) hoặc hợp tác thương hiệu, việc xây dựng các bố cục kết hợp (lockup) là rất quan trọng nhằm thể hiện hài hòa bản sắc của cả hai bên, đồng thời truyền tải sự hợp tác một cách trực quan và nhất quán.\nCác co-branding lockup thường được tạo nên bằng cách kết hợp logo hoặc wordmark của cả hai thương hiệu trong cùng một hệ thống hiển thị.',
  },
]

export default function BrandSymbolSection() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-5 md:px-10 mt-4 md:mt-0">
        <motion.h2
          className="text-left md:text-center text-primary-500 font-heading font-semibold text-2xl md:text-[32px] mb-4 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Biểu tượng và logo hợp tác thương hiệu
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              {/* Image area */}
              <div className="flex items-center justify-center">
                <img
                  src={card.img}
                  srcSet={card.srcSet}
                  alt={card.alt}
                  className="max-h-58.25 w-141.5 object-contain"
                />
              </div>

              {/* Text */}
              <div className="p-1 md:p-6">
                {card.desc.split('\n').map((line, j) => (
                  <p key={j} className="text-neutral-0 text-base leading-6 mb-2 last:mb-0">
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
