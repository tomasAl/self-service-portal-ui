/* eslint-disable no-console */
import { Status } from '@reflet/http'
import { AxiosError, AxiosResponse } from 'axios'
import { SnackbarKey, closeSnackbar, enqueueSnackbar } from 'notistack'
import { MutableRefObject } from 'react'
import { AuthContextProps } from 'react-oidc-context'

const genericErrorMessage = 'Atsiprašome įvyko klaida. Bandykite dar kartą kiek vėliau.'

const getResponseSuccessHandler =
  (snackbarRef: MutableRefObject<SnackbarKey | undefined>) =>
  (response: AxiosResponse): AxiosResponse => {
    if (snackbarRef.current) {
      closeSnackbar(snackbarRef.current)
      snackbarRef.current = undefined
    }

    return response
  }

const getResponseErrorHandler =
  (snackbarRef: MutableRefObject<SnackbarKey | undefined>, auth?: AuthContextProps) =>
  (error: AxiosError): Promise<AxiosError> => {
    if (
      (error.response?.status &&
        Object.values(Status.ServerError).includes(
          error.response.status as Status.ServerError,
        )) ||
      (error.code &&
        ['ERR_BAD_RESPONSE', 'ERR_NETWORK'].includes(error.code) &&
        !snackbarRef.current)
    ) {
      snackbarRef.current = enqueueSnackbar<'error'>({
        key: 'genericError',
        message: genericErrorMessage,
        preventDuplicate: true,
        variant: 'error',
        onExited: () => {
          snackbarRef.current = undefined
        },
      })
    }

    if (auth && error.response?.status === Status.ClientError.Unauthorized) {
      auth.signinRedirect()
    }

    return Promise.reject(error)
  }

export { getResponseErrorHandler, getResponseSuccessHandler }
