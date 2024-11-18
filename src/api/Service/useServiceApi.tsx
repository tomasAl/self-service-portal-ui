import { UseQueryOptions, skipToken } from '@tanstack/react-query'

import Service from './models/Service'
import useApi from '../../shared/hooks/useApi'

const SERVICE_API_BASE = '/services'

function useServiceApi() {
  const { fetch } = useApi()

  const fetchService = (id?: string): UseQueryOptions<Service> => ({
    queryKey: ['service', id],
    queryFn: id ? () => fetch<Service>(`${SERVICE_API_BASE}/${id}`) : skipToken,
    refetchOnWindowFocus: false,
    retry: false,
  })

  return { fetchService }
}

export default useServiceApi
