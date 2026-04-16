export const APP_NAME = 'Sofin Group'

export { colors } from './colors'
export type { Colors } from './colors'

export { colorTokens, token } from './colorTokens'
export type { ColorTokens } from './colorTokens'

export { refDm, dm } from './refDm'
export type { RefDmKey, RefDmValue } from './refDm'

export { fontFamily, fontWeight, textStyles, getTextStyle } from './typography'
export type { FontFamily, FontWeight, TextStyleKey } from './typography'

export const ROUTES = {
  HOME: '/',
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
  },
  USER: {
    LIST: '/users',
    DETAIL: (id: string) => `/users/${id}`,
  },
  PRODUCT: {
    LIST: '/products',
    DETAIL: (id: string) => `/products/${id}`,
  },
} as const

export const QUERY_KEYS = {
  AUTH: {
    ME: ['auth', 'me'],
  },
  USER: {
    LIST: ['users'],
    DETAIL: (id: string) => ['users', id],
  },
  PRODUCT: {
    LIST: ['products'],
    DETAIL: (id: string) => ['products', id],
  },
} as const

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
} as const
