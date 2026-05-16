import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import icUpdate from '@/assets/images/ic_update.png'
import icArrowDetail from '@/assets/images/ic_arrow_detail.png'
import { useNewsList } from '@/features/news/hooks/useNews'

export default function NewsSection() {
  const { data, isLoading, isError } = useNewsList(1, 3)
  const newsItems = data?.items ?? []

  return (
    <section className="pt-10 md:pt-10 bg-neutral-900">
      <div className="mx-auto px-5 sm:px-10 md:px-20 lg:px-30">

        <motion.div
          className="mb-8 px-5 sm:px-10 md:px-20 lg:px-30 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={icUpdate}
            alt="Thông tin & Sự kiện"
            className="h-8 object-contain mb-2"
          />
          <h2 className="text-center text-4xl font-medium font-['Unbounded'] leading-12 text-primary-500">
            Thông tin và Sự kiện
          </h2>
        </motion.div>

        {isError && (
          <p className="text-center text-neutral-500 py-10">Không thể tải tin tức.</p>
        )}

        <div
          className="flex md:justify-center gap-5 overflow-x-auto snap-x snap-mandatory px-5 md:px-0 -mx-5 md:mx-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="snap-center shrink-0 w-[80vw] md:w-116 md:shrink rounded-2xl overflow-hidden flex flex-col p-6 animate-pulse"
                  style={{ border: '2px solid #3C3C3C', background: 'rgba(255,255,255,0.05)' }}
                >
                  <div className="h-52 rounded-xl bg-neutral-700" />
                  <div className="flex flex-col gap-3 py-5 flex-1">
                    <div className="h-4 w-40 rounded bg-neutral-700" />
                    <div className="h-0.5 bg-neutral-700" />
                    <div className="h-8 w-full rounded bg-neutral-700" />
                    <div className="h-8 w-3/4 rounded bg-neutral-700" />
                  </div>
                </div>
              ))
            : newsItems.map((news, i) => (
                <motion.article
                  key={news.id}
                  className="cursor-pointer group snap-center shrink-0 w-[80vw] md:w-116 md:shrink rounded-2xl overflow-hidden flex flex-col p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                  style={{
                    border: '2px solid #3C3C3C',
                    background: 'radial-gradient(120% 53.36% at 0% 120%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%), rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(4px)',
                    WebkitBackdropFilter: 'blur(4px)',
                  }}
                >
                  <div className="overflow-hidden h-52">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl"
                    />
                  </div>

                  <div className="flex flex-col gap-3 py-5 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="justify-center text-neutral-100 text-base font-semibold font-['Mona_Sans'] leading-6">{news.category}</span>
                      <span className="justify-center text-neutral-300 text-base font-normal font-['Mona_Sans'] leading-6">{news.date}</span>
                    </div>
                    <div className="self-stretch h-0.5 bg-linear-to-r from-zinc-100/10 to-zinc-100/0" />
                    <h3 className="font-semibold text-neutral-100 text-[18px] font-['Mona_Sans'] leading-8 flex-1">
                      {news.title}
                    </h3>
                    <Link
                      to={`/tin-tuc/${news.id}`}
                      className="flex items-center gap-1.5 text-primary-500 text-sm font-semibold uppercase tracking-wider w-fit group-hover:opacity-80 transition-opacity mt-2"
                    >
                      CHI TIẾT
                      <img src={icArrowDetail} alt="" className="w-3 h-3 object-contain" />
                    </Link>
                  </div>
                </motion.article>
              ))}
        </div>
      </div>
    </section>
  )
}
