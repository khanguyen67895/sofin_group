import cmsAxios from '@/lib/cmsAxios'
import type { Job } from '../types'

interface StrapiJobRaw {
  id: number
  documentId: string
  vi_tri: string
  dia_diem: string
  muc_luong?: string
  mo_ta_cong_viec?: string
  yeu_cau?: string
  quyen_loi?: string
  han_nop_ho_so?: string
  trang_thai?: string
  slug?: string
  so_luong_can_tuyen?: number
  kinh_nghiem?: string
  hinh_thuc_lam_viec?: string
  updatedAt: string
}

function formatDate(iso: string): string {
  if (!iso) return ''
  const d = new Date(iso)
  return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`
}

function mapToJob(raw: StrapiJobRaw): Job {
  return {
    id: raw.documentId ?? String(raw.id),
    documentId: raw.documentId,
    title: raw.vi_tri,
    location: raw.dia_diem,
    salary: raw.muc_luong ?? 'Thương lượng',
    updatedAt: formatDate(raw.updatedAt),
    descriptionText: raw.mo_ta_cong_viec,
    requirementsText: raw.yeu_cau,
    benefitsText: raw.quyen_loi,
  }
}

export const recruitmentApi = {
  list: async () => {
    const res = await cmsAxios.get<{ data: StrapiJobRaw[] }>('/tuyen-dungs', {
      params: {
        'filters[trang_thai][$eq]': 'dang-tuyen',
        'pagination[pageSize]': 100,
        sort: 'createdAt:desc',
      },
    })
    return res.data.data.map(mapToJob)
  },

  detail: async (documentId: string) => {
    const res = await cmsAxios.get<{ data: StrapiJobRaw }>(`/tuyen-dungs/${documentId}`)
    return mapToJob(res.data.data)
  },
}
