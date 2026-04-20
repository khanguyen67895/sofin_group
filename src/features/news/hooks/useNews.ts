import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { QUERY_KEYS } from '@/constants'
import { newsApi } from '../api/newsApi'

export function useNewsList(page = 1, limit = 9) {
  return useQuery({
    queryKey: [...QUERY_KEYS.NEWS.LIST, { page, limit }],
    queryFn: () =>
      newsApi.list({ page, limit }).then((res) => ({
        items: res.data.data,
        meta: res.data.meta,
      })),
    staleTime: 5 * 60 * 1000,
    placeholderData: keepPreviousData,
  })
}

export function useNewsDetail(id: string | undefined) {
  return useQuery({
    queryKey: id ? QUERY_KEYS.NEWS.DETAIL(id) : QUERY_KEYS.NEWS.LIST,
    queryFn: () => newsApi.detail(id!).then((res) => res.data.data),
    enabled: !!id,
  })
}
