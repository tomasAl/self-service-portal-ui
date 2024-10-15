import React from 'react'

function FlagLt() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none'>
      <g clipPath='url(#a)'>
        <path fill='#006A44' d='M19 1H1v17.921h18V1Z' />
        <path fill='#C1272D' d='M19 13.027H1V19h18v-5.973Z' />
        <path
          fill='#FDB913'
          fillRule='evenodd'
          d='M1 1h18v5.973H1V1Z'
          clipRule='evenodd'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <rect width='18' height='18' x='1' y='1' fill='#fff' rx='9' />
        </clipPath>
      </defs>
    </svg>
  )
}

export default FlagLt
