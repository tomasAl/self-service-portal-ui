import React from 'react'
import IconProps from '../../types/IconProps'
import resolvePaletteColorPath from '../../utils/resolvePaletteColorPath'

function FontSizeIcon({ className, color }: IconProps) {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      fill='none'
    >
      <path
        d='M6.816 4.11a.625.625 0 0 0-1.132 0l-5 10.624a.625.625 0 1 0 1.132.532l1.301-2.765h6.266l1.301 2.765a.627.627 0 0 0 1.028.155.626.626 0 0 0 .104-.687l-5-10.625Zm-3.11 7.14L6.25 5.844l2.545 5.408h-5.09ZM15.181 7.527A.625.625 0 0 1 15 7.085V5h-2.085a.625.625 0 1 1 0-1.25H15V1.668a.625.625 0 1 1 1.25 0V3.75h2.082a.625.625 0 1 1 0 1.25h-2.082v2.085a.625.625 0 0 1-1.067.442ZM12.914 9.375h5.417a.625.625 0 1 1 0 1.25h-5.417a.625.625 0 1 1 0-1.25Z'
        fill={resolvePaletteColorPath(color)}
      />
    </svg>
  )
}

export default FontSizeIcon
