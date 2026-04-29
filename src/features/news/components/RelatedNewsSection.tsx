import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { useCmsNewsList } from '../hooks/useCmsNews'
import { mockNews } from '../data/mockNews'
import type { NewsItem } from '../types'
import NewsCard from './NewsCard'
import icRec from '@/assets/images/ic_rec.png'

export interface RelatedNewsSectionProps {
  excludeId?: string
  limit?: number
}

export default function RelatedNewsSection({
  excludeId,
  limit = 3,
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
        {/* Divider line */}
        <div className="relative mb-14">
          <div className="h-0.5 bg-neutral-700/50" />
          <img src={icRec} alt="" className="absolute left-0 -top-0.5 -translate-y-1/2 h-1.5" />
        </div>
        <motion.div
          className="mb-8 md:mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="block text-[10px] font-heading text-neutral-500 tracking-[0.15em] uppercase mb-2">
            TIN LIÊN QUAN
          </span>
          <h2
            className="font-heading font-bold text-primary-500"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
          >
            Có thể bạn quan tâm
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {items.map((item) => (
            <NewsCard
              key={item.id}
              item={item}
              heightClass="h-80 md:h-110 lg:h-125"
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
