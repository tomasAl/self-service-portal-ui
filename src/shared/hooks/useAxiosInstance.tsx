import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios'
import { useCallback } from 'react'
import { AuthContextProps } from 'react-oidc-context'

import env from '../../env'

function useAxiosInstance() {
  const getAxiosInstance = useCallback(
    async (props: {
      auth?: AuthContextProps
      onResponse?: (response: AxiosResponse) => AxiosResponse
      onResponseError?: (error: AxiosError) => Promise<AxiosError>
    }): Promise<AxiosInstance> => {
      const { auth, onResponse, onResponseError } = props

      const instance = axios.create({
        baseURL: env.ENV_FRONTEND_API_URL,
        headers: {
          ...(auth?.user?.access_token
            ? { Authorization: `Bearer ${auth.user?.access_token}` }
            : {}),
          'Accept-Language': 'lt',
        },
      })

      instance.interceptors.response.use(onResponse, onResponseError)

      return instance
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  return { getAxiosInstance }
}

export default useAxiosInstance
