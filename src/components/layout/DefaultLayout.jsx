import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import React, { useEffect } from "react";
import Posts from "../../pages/posts/Posts";
import Banner from "../banner/Banner";
import Category from "../category/Category";
import { Pagination } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import Search from "../search/Search";

const { Content, Sider } = Layout;

const DefaultLayout = () => {
  const { searchPostsList } = useSelector((state) => state.posts);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  // // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = searchPostsList.slice(indexOfFirstPost, indexOfLastPost);
  const totalPosts = searchPostsList.length;

  const handlePageChange = (e) => {
    setCurrentPage(e);
    // console.log(indexOfFirstPost);
    // console.log(indexOfLastPost);
  };

  return (
    <Layout>
      <Banner />

      <Layout
        className="site-layout-background"
        style={({ padding: "24px 0" }, { marginTop: 50 })}
      >
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <Search />

          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <Posts posts={currentPosts} />
          </div>
          <Pagination
            style={{ marginBottom: 20 }}
            defaultCurrent={1}
            total={totalPosts}
            pageSize={postsPerPage}
            onChange={handlePageChange}
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
