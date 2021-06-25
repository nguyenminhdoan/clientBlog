import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import React from "react";
import Posts from "../../pages/posts/Posts";
import Banner from "../banner/Banner";
import Category from "../category/Category";
import { Pagination } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";

const { Content, Sider } = Layout;

const DefaultLayout = () => {
  // const { posts } = useSelector((state) => state.posts);

  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(10);

  // // Get current posts
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  // const maxLengthPage = Math.ceil(posts.length / postsPerPage);
  // // Change page
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // const totalPosts = posts.length;

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
          <Pagination
            style={{ textAlign: "center" }}
            defaultCurrent={1}
            total={1}
          />
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
