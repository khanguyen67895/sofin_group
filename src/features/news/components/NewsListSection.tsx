import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Pagination from '@/components/ui/Pagination'
import { NewsCardSkeleton } from '@/components/ui/Skeleton'
import { useCmsNewsList } from '../hooks/useCmsNews'
import { mockNews } from '../data/mockNews'
import NewsCard from './NewsCard'

const PAGE_SIZE = 9

export default function NewsListSection() {
  const [page, setPage] = useState(1)
  const { data, isLoading, isError } = useCmsNewsList(page, PAGE_SIZE)

  const fallback = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE
    return {
      items: mockNews.slice(start, start + PAGE_SIZE),
      totalPages: Math.max(1, Math.ceil(mockNews.length / PAGE_SIZE)),
    }
  }, [page])

  const useFallback = isError || !data?.items?.length
  const allItems = useFallback ? fallback.items : data!.items
  const totalPages = useFallback ? fallback.totalPages : data!.meta.pageCount

  const grouped = useMemo(() => {
    const map = new Map<string, typeof allItems>()
    for (const item of allItems) {
      const cat = item.category || 'Khác'
      if (!map.has(cat)) map.set(cat, [])
      map.get(cat)!.push(item)
    }
    return Array.from(map.entries())
  }, [allItems])

  const handlePageChange = (next: number) => {
    setPage(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="bg-neutral-900 py-10">
      <div className="mx-auto px-5 sm:px-10 md:px-20 lg:px-30 flex flex-col gap-14">
        {isLoading && !data ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {Array.from({ length: PAGE_SIZE }).map((_, i) => (
              <NewsCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <>
            {grouped.map(([category, items], gi) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: gi * 0.05 }}
              >
                <h2 className="text-center text-2xl font-semibold font-['Unbounded'] text-primary-500 mb-6">
                  {category}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                  {items.map((item) => (
                    <NewsCard key={`${page}-${item.id}`} item={item} />
                  ))}
                </div>
              </motion.div>
            ))}

            <div className="mt-4">
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </>
        )}
      </div>
    </section>
  )
}
