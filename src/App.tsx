import { CssBaseline, ThemeProvider } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import Header from './components/Header'
import ServiceHeader from './components/ServiceHeader'
import theme from './theme'
import env from './env'
import OwnedPropertiesHeader from './components/OwnedPropertiesHeader'

const queryClient = new QueryClient()

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path={env.ENV_SERVICE_PROVIDER_MFE_BASENAME}>
      <Route
        path={`${env.ENV_SERVICE_PROVIDER_SERVICE_PATH}/:serviceId?/*`}
        element={
          <>
            <Header />
            <ServiceHeader />
          </>
        }
      />
      <Route
        path={`${env.ENV_SERVICE_PROVIDER_OWNED_PROPERTIES_PATH}/:serviceId?/*`}
        element={
          <>
            <Header />
            <OwnedPropertiesHeader />
          </>
        }
      />
    </Route>

    <Route path='*'
        element={<Header />} />,
    </>,
  ),
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  },
)

export default function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </React.StrictMode>
  )
}
