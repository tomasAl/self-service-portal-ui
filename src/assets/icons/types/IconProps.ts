import { RcSesPalette } from '@registrucentras/rc-ses-react-components'

type Paths<T> = T extends object
  ? { [K in keyof T]: `${Exclude<K, symbol>}${'' | `.${Paths<T[K]>}`}` }[keyof T]
  : never

type IconProps = {
  color?: Paths<typeof RcSesPalette> | 'white'
  className?: string
}

export default IconProps
