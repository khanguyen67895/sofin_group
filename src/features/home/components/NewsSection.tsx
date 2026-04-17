import Button from '@/components/ui/Button'
import icInfo1 from '@/assets/images/ic_info1.png'
import icInfo2 from '@/assets/images/ic_info2.png'
import icInfo3 from '@/assets/images/ic_info3.png'

const newsItems = [
  { id: 1, image: icInfo1 },
  { id: 2, image: icInfo2 },
  { id: 3, image: icInfo3 },
]


export default function NewsSection() {
  return (
    <section className="py-20 md:py-28 bg-neutral-950">
      <div className="mx-auto px-20 md:px-30">

        <div className="mb-10">
          <span className="block text-[10px] font-heading text-neutral-100 tracking-[0.15em] uppercase mb-2">
            /CẬP NHẬT MỚI NHẤT
          </span>
          <h2
            className="font-heading font-bold text-primary-500"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
          >
            Thông tin và Sự kiện
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {newsItems.map((news) => (
            <article
              key={news.id}
              className="cursor-pointer group hover:-translate-y-1 transition-transform duration-300"
            >
              <img
                src={news.image}
                alt=""
                className="w-full h-auto object-contain rounded-xl"
              />
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button variant="primary" size="md">
            XEM TẤT CẢ
          </Button>
        </div>
      </div>
    </section>
  )
}
