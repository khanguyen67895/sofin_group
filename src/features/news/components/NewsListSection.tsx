import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Pagination from '@/components/ui/Pagination'
import { NewsCardSkeleton } from '@/components/ui/Skeleton'
import { useCmsNewsList } from '../hooks/useCmsNews'
import { mockNews } from '../data/mockNews'
import NewsCard from './NewsCard'

const FETCH_SIZE = 100
const pageSize = 4

const CAT_LABELS: Record<string, string> = {
  'tin-tuc': 'TIN TỨC',
  'su-kien': 'SỰ KIỆN',
  'thong-bao': 'THÔNG BÁO',
}

export default function NewsListSection() {
  const { data, isLoading, isError } = useCmsNewsList(1, FETCH_SIZE)
  const [catPages, setCatPages] = useState<Record<string, number>>({})

  const allItems = useMemo(() => {
    if (isError || !data?.items?.length) return mockNews
    return data.items
  }, [data, isError])

  const grouped = useMemo(() => {
    const map = new Map<string, typeof allItems>()
    for (const item of allItems) {
      const cat = item.category || 'Khác'
      if (!map.has(cat)) map.set(cat, [])
      map.get(cat)!.push(item)
    }
    return Array.from(map.entries())
  }, [allItems])

  const getPage = (cat: string) => catPages[cat] ?? 1

  const handlePageChange = (cat: string, next: number) => {
    setCatPages(prev => ({ ...prev, [cat]: next }))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="bg-neutral-900">
      <div className="mx-auto px-5 sm:px-10 md:px-20 lg:px-30 flex flex-col gap-14">
        {isLoading && !data ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <NewsCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          grouped.map(([category, items], gi) => {
            const page = getPage(category)
            const totalPages = Math.max(1, Math.ceil(items.length / pageSize))
            const pageItems = items.slice((page - 1) * pageSize, page * pageSize)

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: gi * 0.05 }}
                className="flex flex-col gap-6"
              >
                <h2 className="text-center text-2xl font-semibold font-['Unbounded'] text-primary-500">
                  {CAT_LABELS[category] ?? category.toUpperCase()}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                  {pageItems.map((item) => (
                    <NewsCard key={`${category}-${page}-${item.id}`} item={item} />
                  ))}
                </div>
                <Pagination
                  currentPage={page}
                  totalPages={totalPages}
                  onPageChange={(next) => handlePageChange(category, next)}
                />
              </motion.div>
            )
          })
        )}
      </div>
    </section>
  )
}
