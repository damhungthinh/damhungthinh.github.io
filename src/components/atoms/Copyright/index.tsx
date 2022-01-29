import { Divider, Space, Typography } from 'antd'
import { AntDesignOutlined, HeartFilled } from '@ant-design/icons'

import { toStyledModuleNames } from '@utils/styledModuleName'
import style from './styles.module.scss'
import { PeIcon } from '../PeIcon'

const styledModule = toStyledModuleNames(style)

export const Copyright = () => {
  return (
    <div className={styledModule`root`}>
      <Space>
        Copyright ©2021 All rights reserved
        <Divider type='vertical' className={styledModule`spacer`} />
        Handicraft with
        <Typography.Text type='danger'>
          <HeartFilled />
        </Typography.Text>
        by
        <Typography.Title level={5} style={{ margin: 0 }}>
          me
        </Typography.Title>
      </Space>
      <Space>
        Made by
        <Typography.Text strong>
          <Space>
            <AntDesignOutlined /> Ant Design
          </Space>
        </Typography.Text>
        and
        <Typography.Text strong>
          <Space>
            <span className={styledModule`react`}>
              <PeIcon icon='science' size='md' />
            </span>
            ReactJS
          </Space>
        </Typography.Text>
      </Space>
    </div>
  )
}
