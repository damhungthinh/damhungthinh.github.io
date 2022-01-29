import { useEffect } from 'react'
import { useLocation, Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Layout } from 'antd'

import { Logo } from '@components/atoms/Logo'
import { Copyright } from '@components/atoms/Copyright'
import { NavBar } from '@components/molecules/NavBar'

import { toStyledModuleNames } from '@utils/styledModuleName'
import style from './styles.module.scss'

const styledModule = toStyledModuleNames(style)

const { Content, Header, Footer } = Layout

export const TopbarLayout = () => {
  const location = useLocation()

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <Layout className={styledModule`root`}>
      <Header className={styledModule`header`}>
        <Link to='/'>
          <Logo />
        </Link>
        <NavBar />
      </Header>
      <Content className={styledModule`container`}>
        <Outlet />
      </Content>
      <Footer className={styledModule`footer`}>
        <Copyright />
      </Footer>
    </Layout>
  )
}
