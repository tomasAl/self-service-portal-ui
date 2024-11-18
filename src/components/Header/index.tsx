import React from 'react';
import { AppBar, Container, styled } from '@mui/material'
import { RcSesPalette, RcSesTheme } from '@registrucentras/rc-ses-react-components'

import Logo from '../../assets/icons/components/Logo'
import HeaderTopNav from './components/HeaderTopNav'
import HeaderMidNav from './components/HeaderMidNav'

const StyledLogo = styled(Logo)({
  [RcSesTheme.breakpoints.down('sm')]: {
    height: '28px',
    width: 'auto',
  },
})

function Header() {
  return (
    <>
      <AppBar
        color='transparent'
        position='static'
        sx={{
          backgroundColor: RcSesPalette.grey[100],
          boxShadow: 'unset',
          position: 'relative',
          zIndex: 1101,
        }}
      >
        <HeaderTopNav />
      </AppBar>

      <AppBar
        color='transparent'
        position='sticky'
        sx={{
          backgroundColor: 'white',
          boxShadow:
            '0px -6px 36px 0px #082D4429, 0px -4px 32px 0px #152D3C33, 0px 0px 8px 0px #10161F1A',
        }}
      >
        <Container sx={{ py: 2, display: 'flex', alignItems: 'center' }}>
          <StyledLogo />
          <HeaderMidNav />
        </Container>
      </AppBar>
    </>
  )
}

export default Header
