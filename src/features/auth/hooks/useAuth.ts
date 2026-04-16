import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { QUERY_KEYS, ROUTES } from '@/constants'
import { authApi } from '../api/authApi'
import type { LoginPayload, RegisterPayload } from '../types'

export function useMe() {
  return useQuery({
    queryKey: QUERY_KEYS.AUTH.ME,
    queryFn: () => authApi.getMe().then((res) => res.data.data),
    enabled: !!localStorage.getItem('access_token'),
  })
}

export function useLogin() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (payload: LoginPayload) =>
      authApi.login(payload).then((res) => res.data.data),
    onSuccess: (tokens) => {
      localStorage.setItem('access_token', tokens.access_token)
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.AUTH.ME })
      navigate(ROUTES.HOME)
    },
  })
}

export function useRegister() {
  const navigate = useNavigate()

  return useMutation({
    mutationFn: (payload: RegisterPayload) =>
      authApi.register(payload).then((res) => res.data.data),
    onSuccess: () => {
      navigate(ROUTES.AUTH.LOGIN)
    },
  })
}

export function useLogout() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => authApi.logout(),
    onSettled: () => {
      localStorage.removeItem('access_token')
      queryClient.clear()
      navigate(ROUTES.AUTH.LOGIN)
    },
  })
}
