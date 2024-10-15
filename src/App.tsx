import type {} from '@emotion/styled'
import type {} from '@mui/system'
import type {} from '@mui/x-date-pickers/themeAugmentation'

import React from 'react';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import Header from './components/Header';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import CartProvider from './contexts/CartContext';
import UserProvider from './contexts/UserContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='*' element={<Header />} />
    </>
  ),
);

export default function App() {
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <UserProvider>
          <CartProvider>
            <RouterProvider router={router} />
          </CartProvider>
        </UserProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}
