import React, { useEffect } from "react";
import { Row, Col } from "antd";
import Post from "../../components/Post/Post";
import { fetchAllPosts } from "./postAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Spin, Alert } from "antd";
import { useLocation } from "react-router-dom";

const Posts = (props) => {
  const { posts } = props;
  // console.log(posts);
  const location = useLocation();
  const { path } = location;
  const { isLoading } = useSelector((state) => state.posts);
  // console.log(searchPostsList);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch, path]);

  return (
    <Row gutter={[16, 16]}>
      {isLoading ? (
        <Spin tip="Loading..." size="large">
          <Alert type="info" />
        </Spin>
      ) : (
        Array.isArray(posts) &&
        posts.length > 0 &&
        posts.map((post) => (
          <Col
            key={post._id}
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 12 }}
          >
            <Post post={post} />
          </Col>
        ))
      )}
    </Row>
  );
};

export default Posts;
