import React from 'react'
import { toStyledModuleNames } from '@utils/styledModuleName'
import style from './styles.module.scss'

const styledModule = toStyledModuleNames(style)

export const Logo = () => (
  <div className={styledModule`root`}>
    <div className={styledModule`logo`}>Ed.</div>
    <div className={styledModule`slogan`}>Full-stack developer</div>
  </div>
)
