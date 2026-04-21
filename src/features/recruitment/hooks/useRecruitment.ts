import { useQuery } from '@tanstack/react-query'
import { recruitmentApi } from '../api/recruitmentApi'

const KEYS = {
  LIST: ['recruitment', 'list'],
  DETAIL: (id: string) => ['recruitment', 'detail', id],
}

export function useJobList() {
  return useQuery({
    queryKey: KEYS.LIST,
    queryFn: () => recruitmentApi.list(),
    staleTime: 5 * 60 * 1000,
  })
}

export function useJobDetail(slugOrId: string | undefined) {
  return useQuery({
    queryKey: slugOrId ? KEYS.DETAIL(slugOrId) : KEYS.LIST,
    queryFn: () => recruitmentApi.detail(slugOrId!),
    enabled: !!slugOrId,
    staleTime: 5 * 60 * 1000,
  })
}
