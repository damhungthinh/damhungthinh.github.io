import React, { HTMLAttributes } from 'react'
import { toStyledModuleNames } from '@utils/styledModuleName'
import style from './styles.module.scss'

const styledModule = toStyledModuleNames(style)

const Icons: Array<string> = ['user', 'rocket', 'science', 'way']
const Sizes: Array<string> = ['sm', 'md', 'lg']

type PeIconProps = HTMLAttributes<HTMLSpanElement> & {
  icon: typeof Icons[number]
  size: typeof Sizes[number]
}

export const PeIcon: React.FunctionComponent<PeIconProps> = ({
  icon,
  size,
  ...props
}) => <span className={styledModule(`root ${icon} ${size}`)} {...props} />
