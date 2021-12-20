import React from 'react'
import { Link } from 'react-router-dom'
import { Layout } from 'antd'
import { Copyright } from '@components/atoms/Copyright'
import { Logo } from '@components/atoms/Logo'
import { Menu } from '@components/molecules/Menu'
import { NameCard } from '@components/organisms/NameCard'

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

        <div className={styledModule`menu-wrapper`}>
          <Menu />
        </div>
      </Layout.Sider>
      <Layout className={styledModule`site-layout`}>
        <Layout.Content className={styledModule`container`}>
          <NameCard />
        </Layout.Content>
        <Layout.Footer className={styledModule`footer`}>
          <Copyright />
        </Layout.Footer>
      </Layout>
    </Layout>
  )
}
