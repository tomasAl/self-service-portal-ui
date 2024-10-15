import React from 'react'
import { Button, ButtonProps, styled } from '@mui/material'
import { RcSesPalette } from '@registrucentras/rc-ses-react-components'

type Props = ButtonProps & {
  to?: string
}
function UnstyledHeaderNavButton(props: Props) {
  return (
    <Button
      {...props}
      sx={{
        fontWeight: 500,
        height: '3rem',
        letterSpacing: '0',
        px: 2,
        ...props?.sx,
      }}
      variant='text'
    />
  )
}

const HeaderNavButton = styled(UnstyledHeaderNavButton)({
  alignItems: 'center',
  borderRadius: 0,
  color: RcSesPalette.grey['800'],
  display: 'flex',

  '&:hover': {
    backgroundColor: RcSesPalette.grey['100'],
  },

  '&:focus': {
    backgroundColor: RcSesPalette.grey['100'],
  },

  '&:active': {
    backgroundColor: RcSesPalette.grey['200'],
  },
})

export default HeaderNavButton
