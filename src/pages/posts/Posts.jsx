import React from "react";
import { Row, Col } from "antd";
import Post from "../../components/Post/Post";

const Posts = () => {
  return (
    
    <Row gutter={[16, 16]}>
      <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }}>
        <Post />
      </Col>
      <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }}>
        <Post />
      </Col>
      <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }}>
        <Post />
      </Col>
      <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }}>
        <Post />
      </Col>
    </Row>
  );
};

export default Posts;
