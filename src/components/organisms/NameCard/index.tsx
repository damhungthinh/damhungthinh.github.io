import { memo } from 'react'
import { Space, Typography } from 'antd'

import { toStyledModuleNames } from '@utils/styledModuleName'
import style from './styles.module.scss'

const styledModule = toStyledModuleNames(style)

export const NameCard = memo(() => (
  <div id='about' className={styledModule`root`}>
    <Space align='baseline'>
      <span className={styledModule`greeting`}>Hello, I'm</span>
      <span className={styledModule`fullname`}>Edward Dam</span>
    </Space>
    <Typography.Paragraph className={styledModule`description`}>
      Welcome to my portfolio, I'm so glad to see you here, I hope we will have
      a chance to work togeter.
      <br />
      I'm a Full-Stack developer since 2017. Currently, I'm living in Danang and
      working at FPT Software Danang.
      <br />I love to develop and design creative applications.
    </Typography.Paragraph>
  </div>
))
