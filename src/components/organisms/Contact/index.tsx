import { memo } from 'react'
import { Button, Typography } from 'antd'
import { toStyledModuleNames } from '@utils/styledModuleName'
import style from './styles.module.scss'

const styledModule = toStyledModuleNames(style)

type ContactProps = {
  onOpenDrawer: () => void
}

export const Contact = memo(({ onOpenDrawer }: ContactProps) => (
  <div id='contact' className={styledModule`root`}>
    <div className={styledModule`title`}>
      Interested in collaborating or working together?
    </div>
    <Typography.Paragraph className={styledModule`description`}>
      I’m always open to discussing product design work or partnership
      opportunities.
      <br />
      We should queue up a chat. I’ll buy the coffee.
    </Typography.Paragraph>
    <Button
      className={styledModule`action`}
      size='large'
      shape='round'
      type='primary'
      ghost
      onClick={onOpenDrawer}
    >
      Shall we start?
    </Button>
  </div>
))
