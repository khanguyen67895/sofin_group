import cmsAxios, { getCmsImageUrl } from '@/lib/cmsAxios'

export interface EcosystemItem {
  id: string
  number: string
  title: string
  description: string
  tags: string[]
  logoUrl: string
  bannerUrl: string
  website?: string
}

interface StrapiEcosystemRaw {
  id: number
  documentId: string
  ten: string
  mo_ta?: string
  logo?: { url: string } | null
  anh_banner?: { url: string } | null
  tags?: string[]
  website?: string
  thu_tu_hien_thi?: number
}

function mapToEcosystemItem(raw: StrapiEcosystemRaw, index: number): EcosystemItem {
  return {
    id: raw.documentId ?? String(raw.id),
    number: String(index + 1).padStart(2, '0'),
    title: raw.ten,
    description: raw.mo_ta ?? '',
    tags: raw.tags ?? [],
    logoUrl: getCmsImageUrl(raw.logo?.url),
    bannerUrl: getCmsImageUrl(raw.anh_banner?.url),
    website: raw.website,
  }
}

export const ecosystemApi = {
  list: async () => {
    const res = await cmsAxios.get<{ data: StrapiEcosystemRaw[] }>('/he-sinh-thais', {
      params: {
        'pagination[pageSize]': 100,
        sort: 'thu_tu_hien_thi:asc',
        'populate[logo][fields][0]': 'url',
        'populate[anh_banner][fields][0]': 'url',
        publicationState: 'live',
      },
    })
    return res.data.data.map(mapToEcosystemItem)
  },
}
