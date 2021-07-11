import { Layout, Menu, Pagination } from "antd";
import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchPostAction } from "../../pages/posts/postAction";
import Posts from "../../pages/posts/Posts";
import Banner from "../banner/Banner";
import Category from "../category/Category";
import Search from "../search/Search";

const { Content, Sider } = Layout;

const DefaultLayout = () => {
  const dispatch = useDispatch();
  const { searchPostsList } = useSelector((state) => state.posts);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [formData, setFormData] = useState({ title: "" });

  // // Get current posts

  const currentPosts = searchPostsList.data;

  const handlePageChange = (e) => {
    setCurrentPage(e);
  };

  useEffect(() => {
    // call api for pagination
    // dispatch(paginateAction(currentPage));
    // call api for searching
    dispatch(searchPostAction(currentPage, formData));
  }, [dispatch, currentPage, formData]);

  const handleFilterChange = (data) => {
    // const formData = { title: data.searchTerm };
    setFormData({ title: data.searchTerm });
    // dispatch(searchPostAction(formData)); // call api
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
          <Search onSubmit={handleFilterChange} />

          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            <Posts posts={currentPosts} />
          </div>
          <Pagination
            style={{ marginBottom: 20 }}
            defaultCurrent={1}
            total={
              searchPostsList &&
              searchPostsList.page &&
              searchPostsList.page._total + 1
            }
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
