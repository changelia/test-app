import React from 'react'
import { Layout, Row, Col, Typography } from 'antd'
import Posts from 'pages/posts'
import { Route } from 'react-router-dom'
import Comments from 'pages/comments'

const App = () => {
  const { Header, Content } = Layout
  const { Title } = Typography

  return (
    <>
      <Layout className="layout">
        <Header />
      </Layout>
      <Row>
        <Col span={14}>
          <Content style={{ padding: '20px 50px', height: 'calc(100vh - 64px)' }}>
            <Title level={4}>Posts</Title>
            <Posts />
          </Content>
        </Col>
        <Col span={8}>
          <Content style={{ padding: '20px 50px', height: 'calc(100vh - 64px)' }}>
            <Title level={4}>Comments</Title>
            <Route path="/posts/:id/comments" component={Comments} />
          </Content>
        </Col>
      </Row>
    </>
  );
}

export default App;
