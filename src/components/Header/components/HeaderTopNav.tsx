import React from 'react'
import { Box, Container, Divider as MuiDivider, Stack } from '@mui/material'
import { RcSesPalette } from '@registrucentras/rc-ses-react-components'

import FontSizeAccessibility from './FontSizeAccessibility'
import LanguageMenu from './LanguageMenu'

function Divider() {
  return (
    <MuiDivider
      flexItem
      orientation='vertical'
      variant='fullWidth'
      sx={{ display: { xs: 'none', sm: 'flex' }, m: 0 }}
    />
  )
}

function HeaderTopNav() {
  return (
    <Box sx={{ backgroundColor: RcSesPalette.grey['100'] }}>
      <Container
        component={Stack}
        direction='row'
        sx={(theme) => ({
          display: 'flex',
          justifyContent: { xs: 'space-between', sm: 'flex-end' },

          [theme.breakpoints.down('sm')]: {
            px: 0,
          },
        })}
      >
        <Divider />
        <FontSizeAccessibility />
        <Divider />
        <LanguageMenu />
        <Divider />
      </Container>
    </Box>
  )
}

export default HeaderTopNav
