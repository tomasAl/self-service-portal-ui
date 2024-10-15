import React from 'react'
import { Stack, useMediaQuery } from '@mui/material'
import { redirectToSelfServiceDashboard } from '@rc-ses/self-service-portal-ui-root'
import { RcSesButton, RcSesTheme } from '@registrucentras/rc-ses-react-components'
import CaretLeftIcon from '../../../assets/icons/components/shared/CaretLeftIcon'

function HeaderMidNav() {
  const upLg = useMediaQuery(RcSesTheme.breakpoints.up('lg'))

  return (
    <Stack direction='row' columnGap={{ xs: 0, md: 1 }} sx={{ ml: 'auto' }}>
      <RcSesButton
        onClick={() => redirectToSelfServiceDashboard()}
        size='large'
        startIcon={<CaretLeftIcon />}
        variant='link'
      >
        {!upLg && <>Atgal</>}
        {upLg && <>Grįžti atgal</>}
      </RcSesButton>
    </Stack>
  )
}

export default HeaderMidNav
