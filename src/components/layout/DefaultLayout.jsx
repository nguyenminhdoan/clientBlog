import { Layout, Menu } from "antd";
import "antd/dist/antd.css";
import React from "react";
import Posts from "../../pages/posts/Posts";
import Banner from "../banner/Banner";
import Category from "../category/Category";
import { Pagination } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Search from "../search/Search";
import { useEffect } from "react";
import { paginateAction } from "../../pages/posts/postAction";

const { Content, Sider } = Layout;

const DefaultLayout = () => {
  const dispatch = useDispatch();
  const { searchPostsList, pagination } = useSelector((state) => state.posts);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  // // Get current posts

  const currentPosts = pagination.data;

  const handlePageChange = (e) => {
    setCurrentPage(e);
    // console.log(indexOfFirstPost);
    // console.log(indexOfLastPost);
  };

  useEffect(() => {
    // goi api phan trang
    dispatch(paginateAction(currentPage));
  }, [dispatch, currentPage]);

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
            total={pagination && pagination.page && pagination.page._total + 1  }
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
