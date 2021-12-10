import React from 'react'
import { Space, Typography } from 'antd'
import { HeartFilled } from '@ant-design/icons'

export const Copyright = () => {
  return (
    <Space>
      Copyright ©2021 All rights reserved | This Portfilo is made with
      <Typography.Text type='danger'>
        <HeartFilled />
      </Typography.Text>
      by
      <Typography.Title level={5} style={{ margin: 0 }}>
        Ed.
      </Typography.Title>
    </Space>
  )
}
