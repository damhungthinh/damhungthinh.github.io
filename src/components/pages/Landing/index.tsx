import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { ProfileOutlined } from '@ant-design/icons'
import { Copyright } from '@components/atoms/Copyright'
import { Logo } from '@components/atoms/Logo'
import { toStyledModuleNames } from '@utils/styledModuleName'
import style from './styles.module.scss'

const styledModule = toStyledModuleNames(style)

export const Landing = () => {
  return (
    <Layout className={styledModule`root`}>
      <Layout.Sider className={styledModule`sider`} width={300}>
        <Link className={styledModule`logo`} to='/'>
          <Logo />
        </Link>

        <Menu>
          <Menu.Item icon={<ProfileOutlined />}>
            <Link to='#whoami'>Who am I</Link>
          </Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout className={styledModule`site-layout`}>
        <Layout.Content></Layout.Content>
        <Layout.Footer className={styledModule`footer`}>
          <Copyright />
        </Layout.Footer>
      </Layout>
    </Layout>
  )
}
