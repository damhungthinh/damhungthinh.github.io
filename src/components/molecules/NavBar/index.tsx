import { memo, useState } from 'react'
import { Affix, Anchor, Dropdown } from 'antd'
import { AnnimatedHambugerIcon } from '@components/atoms/AnnimatedHambugerIcon'

import { toStyledModuleNames } from '@utils/styledModuleName'
import styles from './styles.module.scss'

const styledModule = toStyledModuleNames(styles)

export const NavBar = memo(() => {
  const [visible, setVisible] = useState<boolean>(false)
  return (
    <div className={styledModule`root`}>
      {!visible && (
        <Anchor
          className={styledModule`anchor`}
          affix={false}
          showInkInFixed={false}
        >
          <Anchor.Link
            className={styledModule`link`}
            title='About'
            href='#about'
          />
          <Anchor.Link
            className={styledModule`link`}
            title='My Journey'
            href='#journey'
          />
          <Anchor.Link
            className={styledModule`link`}
            title='My skills'
            href='#skills'
          />
          <Anchor.Link
            className={styledModule`link`}
            title='Contact'
            href='#contact'
          />
        </Anchor>
      )}
      <Dropdown
        destroyPopupOnHide
        trigger={['click']}
        overlay={
          <Affix offsetTop={64}>
            <Anchor
              className={styledModule`anchor`}
              affix={false}
              showInkInFixed={false}
            >
              <Anchor.Link
                className={styledModule`link`}
                title='About'
                href='#about'
              />
              <Anchor.Link
                className={styledModule`link`}
                title='My Journey'
                href='#journey'
              />
              <Anchor.Link
                className={styledModule`link`}
                title='My skills'
                href='#skills'
              />
              <Anchor.Link
                className={styledModule`link`}
                title='Contact'
                href='#contact'
              />
            </Anchor>
          </Affix>
        }
        visible={visible}
        overlayClassName={styledModule`dropdown-menu`}
      >
        <AnnimatedHambugerIcon
          animated={visible}
          onClick={() => setVisible(!visible)}
        />
      </Dropdown>
    </div>
  )
})
