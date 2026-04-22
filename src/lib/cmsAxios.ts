import axios from 'axios'
import type { AxiosError } from 'axios'

const CMS_URL = import.meta.env.VITE_CMS_URL ?? 'https://sofin-group-cms.onrender.com'

const cmsAxios = axios.create({
  baseURL: `${CMS_URL}/api`,
  // Render free tier cold start can take up to 50s
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Retry once on timeout or network error (covers Render cold start)
cmsAxios.interceptors.response.use(undefined, async (error: AxiosError) => {
  const config = error.config as typeof error.config & { _retried?: boolean }
  if (config && !config._retried && (error.code === 'ECONNABORTED' || !error.response)) {
    config._retried = true
    return cmsAxios(config)
  }
  return Promise.reject(error)
})

// Keep-alive: ping every 14 minutes so Render doesn't spin down
let keepAliveTimer: ReturnType<typeof setInterval> | null = null

export function startCmsKeepAlive() {
  if (keepAliveTimer) return
  keepAliveTimer = setInterval(() => {
    cmsAxios.get('/tin-tucs?pagination[pageSize]=1').catch(() => {/* silent */})
  }, 14 * 60 * 1000)
}

export function stopCmsKeepAlive() {
  if (keepAliveTimer) {
    clearInterval(keepAliveTimer)
    keepAliveTimer = null
  }
}

export const getCmsImageUrl = (url?: string | null): string => {
  if (!url) return ''
  if (url.startsWith('http')) return url
  return `${CMS_URL}${url}`
}

export default cmsAxios
