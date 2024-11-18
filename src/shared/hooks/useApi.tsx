import { SnackbarKey } from 'notistack'
import { useCallback, useMemo, useRef } from 'react'

import {
  getResponseErrorHandler,
  getResponseSuccessHandler,
} from '../interceptors/axiosInterceptor'

import useAxiosInstance from './useAxiosInstance'

const useApi = function useApi() {
  const { getAxiosInstance } = useAxiosInstance()

  const networkErrorSnackbar = useRef<SnackbarKey>()
  const onResponse = useMemo(() => getResponseSuccessHandler(networkErrorSnackbar), [])
  const onResponseError = useMemo(() => getResponseErrorHandler(networkErrorSnackbar), [])

  const fetch = useCallback(
    async <T,>(endpoint: string, params?: URLSearchParams) => {
      const axios = await getAxiosInstance({ onResponse, onResponseError })
      const response = await axios.get<T>(endpoint, { params })
      return response.data
    },
    [getAxiosInstance, onResponse, onResponseError],
  )

  const head = useCallback(
    async <T,>(endpoint: string, params?: URLSearchParams) => {
      const axios = await getAxiosInstance({ onResponse, onResponseError })
      const response = await axios.head<T>(endpoint, { params })
      return response.data
    },
    [getAxiosInstance, onResponse, onResponseError],
  )

  const post = useCallback(
    async <T,>(endpoint: string, data: unknown, contentType?: string) => {
      const axios = await getAxiosInstance({ onResponse, onResponseError })
      const response = await axios.post<T>(endpoint, data, {
        headers: { 'Content-Type': contentType || 'application/json' },
      })
      return response.data
    },
    [getAxiosInstance, onResponse, onResponseError],
  )

  const put = useCallback(
    async <T,>(endpoint: string, data: unknown, contentType?: string) => {
      const axios = await getAxiosInstance({ onResponse, onResponseError })
      const response = await axios.put<T>(endpoint, data, {
        headers: { 'Content-Type': contentType || 'application/json' },
      })
      return response.data
    },
    [getAxiosInstance, onResponse, onResponseError],
  )

  // `delete` is a reserved keyword
  const anihilate = useCallback(async <T,>(endpoint: string) => {
    const axios = await getAxiosInstance({ onResponse, onResponseError })
    const response = await axios.delete<T>(endpoint)
    return response.data
  }, [])

  return { fetch, head, post, put, anihilate }
}

export default useApi
