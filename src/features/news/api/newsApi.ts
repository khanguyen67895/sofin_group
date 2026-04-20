import axiosInstance from '@/lib/axios'
import type { ApiResponse } from '@/types'
import type { NewsDetail, NewsItem } from '../types'

export interface NewsListMeta {
  total: number
  page: number
  limit: number
  totalPages: number
}

export interface NewsListResponse extends ApiResponse<NewsItem[]> {
  meta: NewsListMeta
}

export const newsApi = {
  list: (params?: { page?: number; limit?: number }) =>
    axiosInstance.get<NewsListResponse>('/news', { params }),

  detail: (id: string) =>
    axiosInstance.get<ApiResponse<NewsDetail>>(`/news/${id}`),
}
