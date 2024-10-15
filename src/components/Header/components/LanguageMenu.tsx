/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { Typography, useMediaQuery } from '@mui/material'
import { RcSesTheme } from '@registrucentras/rc-ses-react-components'

import HeaderTopNavButton from './HeaderTopNavButton'
import FlagLt from '../../../assets/icons/components/flags/FlagLt'
import CaretDownBoldIcon from '../../../assets/icons/components/shared/CaretDownBold'

function LanguageMenu() {
  const downSm = useMediaQuery(RcSesTheme.breakpoints.down('sm'))

  return (
    <HeaderTopNavButton>
      <FlagLt />
      <Typography sx={{ flexGrow: 1, letterSpacing: '.005em', mx: 1 }}>
        {downSm ? 'LT' : 'Lietuvių'}
      </Typography>
      <CaretDownBoldIcon color='grey.500' />
    </HeaderTopNavButton>
  )
}

export default LanguageMenu
