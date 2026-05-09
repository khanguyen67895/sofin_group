import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { useCmsNewsList } from '../hooks/useCmsNews'
import { mockNews } from '../data/mockNews'
import type { NewsItem } from '../types'
import NewsCard from './NewsCard'

export interface RelatedNewsSectionProps {
  excludeId?: string
  limit?: number
}

export default function RelatedNewsSection({
  excludeId,
  limit = 4,
}: RelatedNewsSectionProps) {
  const { data, isError } = useCmsNewsList(1, limit + 1)

  const items: NewsItem[] = useMemo(() => {
    const source = isError || !data?.items?.length ? mockNews : data.items
    return source.filter((n) => n.id !== excludeId).slice(0, limit)
  }, [data, isError, excludeId, limit])

  if (!items.length) return null

  return (
    <section className="pt-12 md:pt-20 bg-neutral-950">
      <div className="mx-auto px-5 sm:px-10 md:px-20 lg:px-30">
        <motion.div
          className="mb-8 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2
            className="self-stretch text-center justify-center text-text-primary-normal text-3xl font-semibold font-['Mona_Sans'] leading-10 text-primary-500"
          >
            Có thể bạn quan tâm
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {items.map((item) => (
            <NewsCard
              key={item.id}
              item={item}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
