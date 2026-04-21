import { useQuery } from '@tanstack/react-query'
import { ecosystemApi } from '../api/ecosystemApi'

export function useEcosystemList() {
  return useQuery({
    queryKey: ['ecosystem', 'list'],
    queryFn: () => ecosystemApi.list(),
    staleTime: 10 * 60 * 1000,
  })
}
