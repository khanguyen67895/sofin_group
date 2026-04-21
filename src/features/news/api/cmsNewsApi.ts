import cmsAxios, { getCmsImageUrl } from '@/lib/cmsAxios'
import type { NewsDetail, NewsItem } from '../types'
import defaultNewsImage from '@/assets/images/ic_info2.png'

interface StrapiPagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

interface StrapiNewsRaw {
  id: number
  documentId: string
  tieu_de: string
  mo_ta_ngan?: string
  noi_dung?: string
  anh_dai_dien?: { url: string } | null
  danh_muc?: string
  slug?: string
  ngay_dang?: string
  tags?: string[]
  nguon?: string
}

function mapToNewsItem(raw: StrapiNewsRaw): NewsItem {
  return {
    id: raw.documentId ?? String(raw.id),
    title: raw.tieu_de,
    detail: raw.mo_ta_ngan ?? '',
    image: raw.anh_dai_dien?.url ? getCmsImageUrl(raw.anh_dai_dien.url) : defaultNewsImage,
    category: raw.danh_muc ?? 'tin-tuc',
    date: raw.ngay_dang ?? '',
    url: raw.slug,
  }
}

function mapToNewsDetail(raw: StrapiNewsRaw): NewsDetail {
  return {
    ...mapToNewsItem(raw),
    content: raw.noi_dung,
    tags: raw.tags,
    source: raw.nguon,
  }
}

export const cmsNewsApi = {
  list: async (params?: { page?: number; pageSize?: number }) => {
    const res = await cmsAxios.get<{
      data: StrapiNewsRaw[]
      meta: { pagination: StrapiPagination }
    }>('/tin-tucs', {
      params: {
        'pagination[page]': params?.page ?? 1,
        'pagination[pageSize]': params?.pageSize ?? 9,
        'populate[anh_dai_dien][fields][0]': 'url',
        sort: 'ngay_dang:desc',
      },
    })
    return {
      items: res.data.data.map(mapToNewsItem),
      meta: res.data.meta.pagination,
    }
  },

  detail: async (documentId: string) => {
    const res = await cmsAxios.get<{ data: StrapiNewsRaw }>(`/tin-tucs/${documentId}`, {
      params: {
        'populate[anh_dai_dien][fields][0]': 'url',
        'populate[anh_bo_sung][fields][0]': 'url',
      },
    })
    return mapToNewsDetail(res.data.data)
  },
}
