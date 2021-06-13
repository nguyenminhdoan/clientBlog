import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import React from "react";
import Posts from "../../pages/posts/Posts";
import Banner from "../banner/Banner";
import Category from "../category/Category";

const { Content, Sider } = Layout;

const DefaultLayout = () => {
  return (
    <Layout>
      <Banner />

      <Layout className="site-layout-background" style={{ padding: "24px 0" }}>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <Posts />
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

export default DefaultLayout;
