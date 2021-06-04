import React from "react";
import Category from "../../components/category/Category";
import HeaderTop from "../../components/layout/partials/HeaderTop";
import FooterBlog from "../../components/layout/partials/FooterBlog";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import SinglePostComp from "../../components/singlePost/SinglePostComp";

const { Header, Content, Footer, Sider } = Layout;

const SinglePost = () => {
  return (
    <Layout>
      <Header>
        <HeaderTop />
      </Header>
      <img
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
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

        <Sider
          theme="light  "
          className="site-layout-background"
          width={300}
          marginLeft={20}
        >
          <Menu style={({ height: "100%" }, { width: "100%" })}>
            <Category />
          </Menu>
        </Sider>
      </Layout>

      <Footer>
        <FooterBlog />
      </Footer>
    </Layout>
  );
};

export default SinglePost;
