import React from 'react'
import { useAuth } from 'react-oidc-context'
import env from '../env'
import CookieStorage from '../shared/storage/CookieStorage'

function AuthorizationCookieProvider() {
  const { user } = useAuth()

  React.useEffect(() => {
    const storage = new CookieStorage()

    if (user?.access_token) {
      storage.setItem(env.ENV_AUTH_TOKEN_COOKIE_NAME, user.access_token)
    } else {
      storage.removeItem(env.ENV_AUTH_TOKEN_COOKIE_NAME)
    }
  }, [user?.access_token])

  return null
}

export default AuthorizationCookieProvider
