import { motion } from 'framer-motion'
import type { NewsDetail } from '../types'
import icBgNews from '@/assets/images/bg_news.png'

export interface NewsDetailSectionProps {
  item: NewsDetail
}

export default function NewsDetailSection({ item }: NewsDetailSectionProps) {
  const paragraphs =
    item.paragraphs && item.paragraphs.length > 0
      ? item.paragraphs
      : item.detail
        ? [item.detail]
        : []

  const extraImages = (item.images || []).filter((u) => u && u !== item.image)

  return (
    <section className="relative bg-neutral-900 pt-24 md:pt-28">
      <div className="absolute inset-0 z-0 h-60 md:h-80 overflow-hidden">
        <img
          src={icBgNews}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>
      <div className="relative z-20 mx-auto px-5 max-w-5xl">
        <motion.h1
          className="text-white self-stretch justify-center text-text-neutral-normal text-4xl font-semibold font-['Unbounded'] leading-12"
          style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {item.title}
        </motion.h1>

        <div className="mt-4 mb-8 text-neutral-400 self-stretch justify-center text-text-neutral-normal text-base font-normal font-['Mona_Sans'] leading-6">
          <span>{item.date}</span>
          {item.date && (
            <span>{item.date}</span>
          )}
        </div>

        {item.detail && (
          <p className="text-neutral-100 self-stretch justify-center text-text-neutral-normal text-base font-normal font-['Mona_Sans'] leading-6">
            {item.detail}
          </p>
        )}

        {item.image && (
          <figure className="mb-8">
            <img
              src={item.image}
              alt=""
              className="w-full h-auto object-cover rounded-sm"
            />
          </figure>
        )}

        {/* Richtext từ CMS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {item.content ? (
            <div
              className="cms-content"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          ) : (
            <div className="flex flex-col gap-5">
              {paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="text-neutral-300 text-sm md:text-base leading-relaxed"
                >
                  {p}
                </p>
              ))}

              {extraImages.map((src, idx) => (
                <figure key={src} className="my-4">
                  <img
                    src={src}
                    alt=""
                    className="w-full h-auto object-cover rounded-sm"
                  />
                  {paragraphs[idx + Math.ceil(paragraphs.length / 2)] && (
                    <p className="text-neutral-300 text-sm md:text-base leading-relaxed mt-5">
                      {paragraphs[idx + Math.ceil(paragraphs.length / 2)]}
                    </p>
                  )}
                </figure>
              ))}
            </div>
          )}
        </motion.div>

        {item.tags && item.tags.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] text-neutral-300 bg-neutral-800 border border-neutral-700 px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {item.source && (
          <p className="mt-8 text-neutral-500 text-xs">
            Nguồn: {item.source}
          </p>
        )}
      </div>
    </section>
  )
}
