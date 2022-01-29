import { memo } from 'react'

import { toStyledModuleNames, toStylingName } from '@utils/styledModuleName'
import style from './styles.module.scss'

const styledModule = toStyledModuleNames(style)

type LogoProps = {
  size?: 'small' | 'medium' | 'large'
}

export const Logo = memo((props: LogoProps) => {
  const { size = 'small' } = props
  const rootClass = styledModule(`root ${toStylingName({ size })}`)
  return (
    <div className={rootClass}>
      <div className={styledModule`logo`}>Ed.</div>
      <div className={styledModule`slogan`}>Full-stack developer</div>
    </div>
  )
})
