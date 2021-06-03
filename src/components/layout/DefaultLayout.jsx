import React from "react";
import HeaderTop from "./partials/HeaderTop";
import FooterBlog from "./partials/FooterBlog";
import { Layout, Breadcrumb } from "antd";
import "antd/dist/antd.css";
const { Header, Content, Footer, Sider } = Layout;

const DefaultLayout = () => {
  return (
    <Layout>
      <Header>
        <HeaderTop />
      </Header>
      <Layout>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            Main
          </div>
        </Content>
        <Sider></Sider>
      </Layout>

      <Footer>
        <FooterBlog />
      </Footer>
    </Layout>
  );
};

export default DefaultLayout;
