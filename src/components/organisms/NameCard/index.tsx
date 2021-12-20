import React from 'react'

import { Card, Col, Image, Row, Typography } from 'antd'

import { toStyledModuleNames } from '@utils/styledModuleName'
import style from './styles.module.scss'

const styledModule = toStyledModuleNames(style)

export const NameCard = () => {
  return (
    <div className={styledModule`root`}>
      <Row>
        <Col span={12}>
          <Image
            className={styledModule`cover`}
            src='/images/wallpaper.jpeg'
            preview={false}
          />
        </Col>
        <Col span={12}>
          <div className={styledModule`information`}>
            <div className={styledModule`greeting`}>Hello, I'm</div>
            <div className={styledModule`fullname`}>DAM HUNG THINH</div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
