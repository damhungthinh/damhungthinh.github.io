import {
  Col,
  Drawer,
  Image,
  Row,
  Descriptions,
  Divider,
  Space,
  Typography,
} from 'antd'

type DrawerProps = {
  visible?: boolean
  onClose?: () => void
}
export const ContactDrawer = (props: DrawerProps) => {
  const { visible, onClose } = props
  return (
    <Drawer title='My Information' onClose={onClose} visible={visible}>
      <Row gutter={[16, 16]} wrap={false}>
        <Col flex='none'>
          <Image
            src='/images/wallpaper.jpeg'
            style={{
              width: 100,
              borderRadius: 4,
            }}
          />
        </Col>
        <Col flex='auto'>
          <Space direction='vertical'>
            <Typography.Text strong>Fullname: </Typography.Text>
            Dam Hung Thinh (Edward)
            <Space split={<Divider type='vertical' />} size='small'>
              <Space>
                <Typography.Text strong>Age: </Typography.Text>
                {new Date().getFullYear() - 1993}
              </Space>
              <Space>
                <Typography.Text strong style={{ whiteSpace: 'nowrap' }}>
                  Year of Birth:
                </Typography.Text>
                1993
              </Space>
            </Space>
            <Space>
              <Typography.Text strong>City:</Typography.Text>
              Danang, Vietnam
            </Space>
            <Space>
              <Typography.Text strong>Country:</Typography.Text>
              Vietnam
            </Space>
          </Space>
        </Col>
      </Row>
      <Divider />
      <Descriptions
        title='Skills'
        column={1}
        labelStyle={{ fontWeight: 'bold' }}
      >
        <Descriptions.Item label='Fontend'>
          HTML, CSS, Javscript, ReactJS
        </Descriptions.Item>
        <Descriptions.Item label='Backend'>
          Java, Kotlin, SQL, SpringBoot
        </Descriptions.Item>
        <Descriptions.Item label='Available'>
          Remote Part-time, Freelancer
        </Descriptions.Item>
      </Descriptions>
      <Divider />
      <Descriptions
        title='Contact'
        column={1}
        labelStyle={{ fontWeight: 'bold' }}
      >
        <Descriptions.Item label='Email'>
          edward.dam@outlook.com
        </Descriptions.Item>
        <Descriptions.Item label='Phone Number'>
          (+84) 0796 553 958
        </Descriptions.Item>
        <Descriptions.Item label='Website'>
          damhungthinh.github.io
        </Descriptions.Item>
        <Descriptions.Item label='Skype'>
          join.skype.com/invite/usPYrObev283
        </Descriptions.Item>
        <Descriptions.Item label='Facebook'>
          www.facebook.com/damhungthinh
        </Descriptions.Item>
      </Descriptions>
    </Drawer>
  )
}
