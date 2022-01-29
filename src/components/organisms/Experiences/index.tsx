import { Card, Col, Row, Space, Timeline, Typography } from 'antd'
import { memo } from 'react'
import { toStyledModuleNames } from '@utils/styledModuleName'
import style from './styles.module.scss'

const styledModule = toStyledModuleNames(style)

export const Experiences = memo(() => (
  <Card id='journey' className={styledModule`root`}>
    <Row>
      <Col xs={{ span: 24 }} sm={{ span: 8 }}>
        <div className={styledModule`title`}>
          <span className={styledModule`text`}>My Journey</span>
        </div>
      </Col>
      <Col
        xs={{ span: 24 }}
        sm={{ span: 16 }}
        className={styledModule`timeline`}
      >
        <Timeline mode='left'>
          <Timeline.Item>
            <Space direction='vertical'>
              <Typography.Title level={5}>
                Upcoming (April, 2022)
              </Typography.Title>
              <Typography.Text>
                Working as a Technical Leader at FPT Software Danang
              </Typography.Text>
            </Space>
          </Timeline.Item>

          <Timeline.Item>
            <Space direction='vertical'>
              <Typography.Title level={5}>Early 2019 ~ Now</Typography.Title>
              <Typography.Text>
                Working as a Team Leader of FPT Software Danang
              </Typography.Text>
            </Space>
          </Timeline.Item>
          <Timeline.Item>
            <Space direction='vertical'>
              <Typography.Title level={5}>Jan, 2020</Typography.Title>
              <Typography.Text>
                Received Valuable Player award in 2019
              </Typography.Text>
            </Space>
          </Timeline.Item>
          <Timeline.Item>
            <Space direction='vertical'>
              <Typography.Title level={5}>Jan, 2017</Typography.Title>
              <Typography.Text>
                Received Valuable Player award in 2016
              </Typography.Text>
            </Space>
          </Timeline.Item>
          <Timeline.Item>
            <Space direction='vertical'>
              <Typography.Title level={5}>
                November, 2015 ~ November, 2019
              </Typography.Title>
              <Typography.Text>
                Worked as member of FPT Software Danang
              </Typography.Text>
            </Space>
          </Timeline.Item>
          <Timeline.Item>
            <Space direction='vertical'>
              <Typography.Title level={5}>July, 2015</Typography.Title>
              <Typography.Text>
                Graduated as Bachelor of Software Engineering at Duy Tan
                University
              </Typography.Text>
            </Space>
          </Timeline.Item>
        </Timeline>
      </Col>
    </Row>
  </Card>
))
