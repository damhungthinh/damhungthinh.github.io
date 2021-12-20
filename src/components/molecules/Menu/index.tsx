import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu as AntMenu, Space, Typography } from 'antd'
import { PeIcon } from '@components/atoms/PeIcon'
import { toStyledModuleNames } from '@utils/styledModuleName'
import style from './styles.module.scss'

const styledModule = toStyledModuleNames(style)

export const Menu: React.FunctionComponent = (props) => {
  const navigate = useNavigate()
  return (
    <AntMenu className={styledModule`root`}>
      <AntMenu.Item
        className={styledModule`menu-item`}
        key='whoami'
        onClick={() => navigate('#whoami')}
      >
        <div className={styledModule`icon-wrapper`}>
          <PeIcon icon='user' size='md' />
        </div>
        <Typography.Text>Who I am</Typography.Text>
      </AntMenu.Item>
      <AntMenu.Item
        className={styledModule`menu-item`}
        key='skill'
        onClick={() => navigate('#science')}
      >
        <div className={styledModule`icon-wrapper`}>
          <PeIcon icon='science' size='md' />
        </div>

        <Typography.Text>What I can do</Typography.Text>
      </AntMenu.Item>
      <AntMenu.Item
        className={styledModule`menu-item`}
        key='services'
        onClick={() => navigate('#offers')}
      >
        <div className={styledModule`icon-wrapper`}>
          <PeIcon icon='rocket' size='md' />
        </div>
        <Typography.Text>What I offers</Typography.Text>
      </AntMenu.Item>
      <AntMenu.Item
        className={styledModule`menu-item`}
        key='contact'
        onClick={() => navigate('#contact')}
      >
        <div className={styledModule`icon-wrapper`}>
          <PeIcon icon='way' size='md' />
        </div>
        <Typography.Text>How to contact me</Typography.Text>
      </AntMenu.Item>
    </AntMenu>
  )
}
