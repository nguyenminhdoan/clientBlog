import React from "react";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import WritePost from "../../components/writePost/WritePost";

const { Content } = Layout;
const Write = () => {
  return (
    <Layout>
      <Layout className="site-layout-background" style={{ padding: "24px 0" }}>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <WritePost />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Write;
