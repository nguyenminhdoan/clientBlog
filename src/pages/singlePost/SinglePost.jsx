import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { useSelector } from "react-redux";
import Category from "../../components/category/Category";
import SinglePostComp from "../../components/singlePost/SinglePostComp";
import styled from "styled-components";

const { Content, Sider } = Layout;

const SinglePost = () => {
  const { posts } = useSelector((state) => state.posts);
  const PF = "http://localhost:3003/images/";

  return (
    <Layout>
      <StyleImagePost
        src={`${
          posts.photo
            ? PF + posts.photo
            : "https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }`}
        alt="single post"
      />
      <Layout className="site-layout-background" style={{ padding: "24px 0" }}>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <SinglePostComp />
          </div>
        </Content>

        <Sider theme="light  " className="site-layout-background" width={300}>
          <Menu style={({ height: "100%" }, { width: "100%" })}>
            <Category />
          </Menu>
        </Sider>
      </Layout>
    </Layout>
  );
};

const StyleImagePost = styled.img`
  width: 100%;
  height: 500px;
  border-radius: 5px;
  object-fit: cover;
`;
export default SinglePost;
