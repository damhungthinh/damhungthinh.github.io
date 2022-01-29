import { memo } from 'react'
import { Card, Col, Divider, Row, Typography } from 'antd'
import { PeIcon } from '@components/atoms/PeIcon'
import { toStyledModuleNames } from '@utils/styledModuleName'
import style from './styles.module.scss'

const styledModule = toStyledModuleNames(style)

export const Skills = memo(() => (
  <div id='skills' className={styledModule`root`}>
    <Divider>
      <span className={styledModule`title`}>I'm good at</span>
    </Divider>
    <Row gutter={[{ sm: 10, xl: 30 }, 30]}>
      <Col xs={{ span: 24 }} md={{ span: 8 }}>
        <Card hoverable bordered style={{ height: '100%' }}>
          <div className={styledModule`wrapper`}>
            <div className={styledModule`icon`}>
              <PeIcon icon='browser' size='lg' />
            </div>
            <Typography.Title level={4}>Frontend Development</Typography.Title>
            <Typography.Paragraph className={styledModule`brief-description`}>
              Working with React Framework to building UI/UIX Website since
              2017.
            </Typography.Paragraph>

            <Typography.Title level={5}>Languages I speak:</Typography.Title>
            <Typography.Paragraph>
              HTML, CSS, Sass, Less, Javascript, Typescript
            </Typography.Paragraph>
            <Typography.Title level={5}>
              Framework I work with:
            </Typography.Title>
            <Typography.Paragraph>
              ReactJS, React Native, VueJS
            </Typography.Paragraph>

            <Typography.Title level={5}>Dev Tools I used:</Typography.Title>
            <Typography.Paragraph>
              Visual Studo Code, Jetbrain Intellij, Terminal
            </Typography.Paragraph>
          </div>
        </Card>
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 8 }}>
        <Card hoverable bordered style={{ height: '100%' }}>
          <div className={styledModule`wrapper`}>
            <div className={styledModule`icon`}>
              <PeIcon icon='server' size='lg' />
            </div>
            <Typography.Title level={4}>Backend Development</Typography.Title>
            <Typography.Paragraph className={styledModule`brief-description`}>
              Started with a microservices for a complex systems.
            </Typography.Paragraph>

            <Typography.Title level={5}>Languages I speak:</Typography.Title>
            <Typography.Paragraph>Java, Kotlin, SQL</Typography.Paragraph>
            <Typography.Title level={5}>
              Framework I work with:
            </Typography.Title>
            <Typography.Paragraph>
              Springboot, Spring MVC, Express, Elastic Search
            </Typography.Paragraph>

            <Typography.Title level={5}>Dev Tools I used:</Typography.Title>
            <Typography.Paragraph>
              Jetbrain Intellij, Eclipse, Postman, Docker, Terminal
            </Typography.Paragraph>
          </div>
        </Card>
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 8 }}>
        <Card hoverable bordered style={{ height: '100%' }}>
          <div className={styledModule`wrapper`}>
            <div className={styledModule`icon`}>
              <PeIcon icon='way' size='lg' />
            </div>
            <Typography.Title level={4}>Trainer & Mentor</Typography.Title>
            <Typography.Paragraph className={styledModule`brief-description`}>
              Since 2019, I'm guiding students in their FE Developer Career
              path.
            </Typography.Paragraph>
            <Typography.Title level={5}>
              Experiences I draw from:
            </Typography.Title>
            <Typography.Paragraph>
              HTML, CSS, JS, ReactJS & Spring Framework
            </Typography.Paragraph>
            <Typography.Title level={5}>Mentor Stats:</Typography.Title>
            <Typography.Paragraph>
              2 years experience
              <br />
              200+ students
              <br /> 1000+ mentor sessions
            </Typography.Paragraph>
          </div>
        </Card>
      </Col>
    </Row>
  </div>
))
