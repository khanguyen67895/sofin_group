import axiosInstance from '@/lib/axios'
import type { ApiResponse } from '@/types'
import type { AuthTokens, AuthUser, LoginPayload, RegisterPayload } from '../types'

export const authApi = {
  login: (payload: LoginPayload) =>
    axiosInstance.post<ApiResponse<AuthTokens>>('/auth/login', payload),

  register: (payload: RegisterPayload) =>
    axiosInstance.post<ApiResponse<AuthTokens>>('/auth/register', payload),

  getMe: () =>
    axiosInstance.get<ApiResponse<AuthUser>>('/auth/me'),

  logout: () =>
    axiosInstance.post('/auth/logout'),
}
