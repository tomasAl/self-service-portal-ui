import type {} from '@emotion/styled'
import type {} from '@mui/system'
import type {} from '@mui/x-date-pickers/themeAugmentation'

import React from 'react';

import Header from './components/Header';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import ServiceHeader from './components/ServiceHeader';
import { AuthProvider, AuthProviderProps } from 'react-oidc-context';
import { WebStorageStateStore } from 'oidc-client-ts';
import env from './env';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AuthorizationCookieProvider from './components/AuthorizationCookieProvider';

const oidcConfig: AuthProviderProps = {
  authority: `${env.ENV_KEYCLOAK_SERVER_URL}/realms/${env.ENV_KEYCLOAK_REALM}`,
  client_id: env.ENV_KEYCLOAK_CLIENT_ID,
  monitorSession: true,
  onSigninCallback: () => window.history.replaceState({}, document.title, window.location.pathname),
  post_logout_redirect_uri: env.ENV_PUBLIC_PORTAL_URL,
  redirect_uri:
    window.location.pathname === '/'
      ? `${window.location.origin}/savitarna`
      : window.location.href,
  revokeTokensOnSignout: true,
  userStore: new WebStorageStateStore({ prefix: 'rc-ses.', store: window.localStorage }),
}

const queryClient = new QueryClient()

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/paslaugos/uzsakymas/:serviceId?' element={<>
      <Header />
      <ServiceHeader />
    </>} />
  ),
)

export default function App() {
  return (
    <React.StrictMode>
      <AuthProvider {...oidcConfig}>
        <ThemeProvider theme={theme}>
          <AuthorizationCookieProvider />
          <CssBaseline />
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </ThemeProvider>
      </AuthProvider>
    </React.StrictMode>
  );
}
