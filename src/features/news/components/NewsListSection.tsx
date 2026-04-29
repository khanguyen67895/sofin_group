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
  const pageItems = useFallback ? fallback.items : data!.items
  const totalPages = useFallback ? fallback.totalPages : data!.meta.pageCount

  const handlePageChange = (next: number) => {
    setPage(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="bg-neutral-950">
      <div className="mx-auto px-5 sm:px-10 md:px-20 lg:px-30">
        {isLoading && !data ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {Array.from({ length: PAGE_SIZE }).map((_, i) => (
              <NewsCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {pageItems.map((item) => (
                <NewsCard key={`${page}-${item.id}`} item={item} />
              ))}
            </motion.div>

            <div className="mt-12 md:mt-16">
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
