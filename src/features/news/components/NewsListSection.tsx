import { useMemo, useState } from 'react'
import Pagination from '@/components/ui/Pagination'
import { useNewsList } from '../hooks/useNews'
import { mockNews } from '../data/mockNews'
import NewsCard from './NewsCard'

const PAGE_SIZE = 9

export default function NewsListSection() {
  const [page, setPage] = useState(1)
  const { data, isLoading, isError } = useNewsList(page, PAGE_SIZE)

  const fallback = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE
    return {
      items: mockNews.slice(start, start + PAGE_SIZE),
      totalPages: Math.max(1, Math.ceil(mockNews.length / PAGE_SIZE)),
    }
  }, [page])

  const useFallback = isError || !data?.items?.length
  const pageItems = useFallback ? fallback.items : data!.items
  const totalPages = useFallback ? fallback.totalPages : data!.meta.totalPages

  const handlePageChange = (next: number) => {
    setPage(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="bg-neutral-950">
      <div className="mx-auto px-5 sm:px-10 md:px-20 lg:px-30">
        {isLoading && !data && (
          <div className="py-20 text-center text-neutral-400">Đang tải tin tức...</div>
        )}

        {(!isLoading || data) && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {pageItems.map((item) => (
                <NewsCard key={`${page}-${item.id}`} item={item} />
              ))}
            </div>

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
