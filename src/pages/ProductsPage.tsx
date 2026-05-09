import { motion } from 'framer-motion'
import bgProducts from '@/assets/images/bg_products.png'
import bgProductsMb from '@/assets/images/bg_products_mb.png'
import icArrowDetail from '@/assets/images/ic_arrow_detail.png'
import icItemProduct1 from '@/assets/images/ic_item_product1.png'
import icItemProduct2 from '@/assets/images/ic_item_product2.png'
import icItemProduct3 from '@/assets/images/ic_item_product3.png'
import icItemProduct4 from '@/assets/images/ic_item_product4.png'

const products = [
  {
    index: '01',
    name: 'SOAFF',
    subtitle: 'Website and branding for Design Agency',
    image: icItemProduct1,
    href: '#',
    others: ['INTERLINK', 'AVIXO', 'Mining & Exploration Products'],
  },
  {
    index: '02',
    name: 'INTERLINK',
    subtitle: 'Website and branding for Design Agency',
    image: icItemProduct2,
    href: 'https://interlinklabs.ai/',
    others: ['SOAFF', 'AVIXO', 'Mining & Exploration Products'],
  },
  {
    index: '03',
    name: 'AVIXO',
    subtitle: 'Website and branding for Design Agency',
    image: icItemProduct3,
    href: 'https://avixo.trading/',
    others: ['SOAFF', 'INTERLINK', 'Mining & Exploration Products'],
  },
  {
    index: '04',
    name: 'Mining & Exploration Products',
    subtitle: 'Website and branding for Design Agency',
    image: icItemProduct4,
    href: '#',
    others: ['SOAFF', 'INTERLINK', 'AVIXO'],
  },
]

export default function ProductsPage() {
  return (
    <div className="bg-[#0C0C0C] min-h-screen">
      {/* Hero */}
      <section className="relative pt-24 pb-8 md:pt-28 md:pb-16 text-center overflow-hidden">
        <img
          src={bgProducts}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-top md:object-center hidden md:block"
        />
        <img
          src={bgProductsMb}
          alt=""
          className="md:hidden absolute inset-0 w-full h-full object-cover object-top"
        />
        {/* Bottom fade */}
        <div className="hidden md:block absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#0C0C0C] to-transparent pointer-events-none" />
        <motion.div
          className="relative z-10 mx-auto px-5 sm:px-10 md:px-20 lg:px-30"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-white text-3xl md:text-6xl font-semibold font-['Unbounded'] leading-tight md:leading-18">
            Sản phẩm nổi bật
          </h1>
          <p className="mt-4 text-neutral-100 text-sm md:text-base font-['Mona_Sans'] leading-6 max-w-2xl mx-auto">
            Các sản phẩm AI nổi bật của SOFIN Group được xây dựng để mang lại giải pháp thông minh và bền vững cho doanh nghiệp
          </p>
        </motion.div>
      </section>

      {/* Product list */}
      <section className="mx-auto px-5 sm:px-10 md:px-20 lg:px-30 pb-24 flex flex-col gap-0">
        {products.map((product, i) => (
          <motion.div
            key={product.index}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 py-8 md:py-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: 'easeOut' }}
          >
            {/* Image — top on mobile, right on desktop */}
            <div className="order-first md:order-last flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full md:w-207 md:h-[465.75px] object-contain rounded-3xl"
              />
            </div>

            {/* Left: index + product list + name + desc + link */}
            <div className="order-last md:order-first flex flex-col justify-between">
              <div className="hidden md:block">
                <p className="text-neutral-100 opacity-10 text-5xl md:text-6xl font-semibold font-['Unbounded'] leading-none mb-6">
                  {product.index}
                </p>
                <div className="flex flex-col gap-1 mb-8">
                  {products.map((p) => (
                    <span
                      key={p.name}
                      className={`text-xs md:text-sm font-['Mona_Sans'] leading-5 ${p.name === product.name ? 'text-neutral-100 font-semibold' : 'text-neutral-100 opacity-40'}`}
                    >
                      {p.name}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-white text-xl md:text-4xl font-semibold font-['Unbounded'] leading-tight mb-2 md:mb-3">
                  {product.name}
                </h2>
                <p className="text-neutral-100 text-sm font-['Mona_Sans'] leading-6 mb-4 md:mb-5">
                  {product.subtitle}
                </p>
                <a
                  href={product.href}
                  target={product.href !== '#' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-500 text-sm font-semibold font-['Mona_Sans'] uppercase tracking-widest hover:opacity-80 transition-opacity"
                >
                  XEM
                  <img src={icArrowDetail} alt="" className="w-3.5 h-3.5 object-contain" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  )
}
