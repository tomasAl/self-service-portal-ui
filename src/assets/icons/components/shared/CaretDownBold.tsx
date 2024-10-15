import React from 'react'
import IconProps from '../../types/IconProps'
import resolvePaletteColorPath from '../../utils/resolvePaletteColorPath'

function CaretDownBoldIcon({ className, color }: IconProps) {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      fill='none'
    >
      <path
        d='m13.533 6.53-5 5a.75.75 0 0 1-1.063 0l-5-5a.751.751 0 1 1 1.063-1.063l4.469 4.47 4.47-4.47a.751.751 0 0 1 1.062 1.062h-.001Z'
        fill={resolvePaletteColorPath(color)}
      />
    </svg>
  )
}

export default CaretDownBoldIcon
