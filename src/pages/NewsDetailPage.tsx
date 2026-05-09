import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { useCmsNewsDetail } from '@/features/news/hooks/useCmsNews'
import { NewsDetailSkeleton } from '@/components/ui/Skeleton'
import { mockNews } from '@/features/news/data/mockNews'
import NewsDetailSection from '@/features/news/components/NewsDetailSection'
import RelatedNewsSection from '@/features/news/components/RelatedNewsSection'
import type { NewsDetail } from '@/features/news/types'

export default function NewsDetailPage() {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading, isError } = useCmsNewsDetail(id)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [id])

  if (!id) return <Navigate to="/tin-tuc" replace />

  const mock = mockNews.find((n) => n.id === id)
  const fallback: NewsDetail | undefined = mock
    ? { ...mock, paragraphs: [mock.detail] }
    : undefined
  const item = isError || !data ? fallback : data

  if (isLoading && !item) return <NewsDetailSkeleton />

  if (!item) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-neutral-900 text-neutral-400">
        Không tìm thấy bài viết.
      </div>
    )
  }

  return (
    <>
      <NewsDetailSection item={item} />
      <RelatedNewsSection excludeId={item.id} />
    </>
  )
}
