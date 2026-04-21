import axios from 'axios'

const CMS_URL = import.meta.env.VITE_CMS_URL ?? 'https://sofin-group-cms.onrender.com'

const cmsAxios = axios.create({
  baseURL: `${CMS_URL}/api`,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getCmsImageUrl = (url?: string | null): string => {
  if (!url) return ''
  if (url.startsWith('http')) return url
  return `${CMS_URL}${url}`
}

export default cmsAxios
