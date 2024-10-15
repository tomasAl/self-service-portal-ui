/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { Typography } from '@mui/material'

import CaretDownBoldIcon from '../../../assets/icons/components/shared/CaretDownBold'
import FontSizeIcon from '../../../assets/icons/components/shared/FontSize'

import HeaderTopNavButton from './HeaderTopNavButton'

function FontSizeAccessibility() {
  return (
    <HeaderTopNavButton>
      <FontSizeIcon color='grey.800' />
      <Typography
        sx={{ flexGrow: 1, letterSpacing: '.005em', lineHeight: '1.125rem', mx: 1 }}
      >
        Šrifto dydis
      </Typography>
      <CaretDownBoldIcon color='grey.500' />
    </HeaderTopNavButton>
  )
}

export default FontSizeAccessibility
