import React from 'react'
import { ButtonProps } from '@mui/material'
import { RcSesPalette } from '@registrucentras/rc-ses-react-components'

import HeaderNavButton from './HeaderNavButton'

type Props = Pick<ButtonProps, 'children' | 'className' | 'sx'>

function HeaderTopNavButton({ children, className, sx }: Props) {
  return (
    <HeaderNavButton
      className={className}
      sx={{
        height: '2.5rem',
        px: 1.5,
        py: 1,
        '&:hover': {
          backgroundColor: RcSesPalette.grey['200'],
        },
        '&:focus': {
          backgroundColor: RcSesPalette.grey['200'],
        },
        ...sx,
      }}
    >
      {children}
    </HeaderNavButton>
  )
}

export default HeaderTopNavButton
