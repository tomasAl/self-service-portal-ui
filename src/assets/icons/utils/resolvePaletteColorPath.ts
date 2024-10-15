import { RcSesPalette } from '@registrucentras/rc-ses-react-components'

import IconProps from '../types/IconProps'

const resolvePaletteColorPath = (path: IconProps['color']) => {
  if (!path) return RcSesPalette.primary.main

  const resolved = path.split('.').reduce((a: any, b: any) => a[b], RcSesPalette)

  return resolved ?? path
}

export default resolvePaletteColorPath
