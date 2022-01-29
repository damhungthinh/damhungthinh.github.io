import { BackTop } from 'antd'
import { useState } from 'react'
import { Contact } from '@components/organisms/Contact'
import { Experiences } from '@components/organisms/Experiences'
import { NameCard } from '@components/organisms/NameCard'
import { Skills } from '@components/organisms/Skills'
import { ContactDrawer } from '@components/organisms/ContactDrawer'

import { toStyledModuleNames } from '@utils/styledModuleName'

import style from './styles.module.scss'

const styledModule = toStyledModuleNames(style)

export const Landing = () => {
  const [visible, setVisible] = useState(false)

  return (
    <div className={styledModule`root`}>
      <NameCard />
      <Experiences />
      <Skills />
      <Contact onOpenDrawer={() => setVisible(true)} />
      <ContactDrawer visible={visible} onClose={() => setVisible(false)} />
      <BackTop />
    </div>
  )
}
