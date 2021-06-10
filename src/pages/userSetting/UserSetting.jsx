import React from "react";
import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import Category from "../../components/category/Category";
import UserProfile from "../../components/userSetting/UserProfile";
const { Content, Sider } = Layout;

const UserSetting = () => {
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
            <UserProfile />
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

export default UserSetting;
