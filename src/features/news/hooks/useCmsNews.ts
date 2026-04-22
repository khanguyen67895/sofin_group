import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { cmsNewsApi } from '../api/cmsNewsApi'

export function useCmsNewsList(page = 1, pageSize = 9) {
  return useQuery({
    queryKey: ['cms-news', 'list', { page, pageSize }],
    queryFn: () => cmsNewsApi.list({ page, pageSize }),
    staleTime: 5 * 60 * 1000,
    placeholderData: keepPreviousData,
    retry: 2,
    retryDelay: 3000,
  })
}

export function useCmsNewsDetail(documentId: string | undefined) {
  return useQuery({
    queryKey: ['cms-news', 'detail', documentId],
    queryFn: () => cmsNewsApi.detail(documentId!),
    enabled: !!documentId,
    staleTime: 5 * 60 * 1000,
    retry: 2,
    retryDelay: 3000,
  })
}

