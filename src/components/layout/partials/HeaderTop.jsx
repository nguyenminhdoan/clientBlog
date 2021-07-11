import React, { useState } from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import { Anchor, Drawer, Button } from "antd";
import "./headerStyle.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../../api/userAPI";
import { logout } from "../../../pages/login/loginSlice";
import { Link as LinkRouter } from "react-router-dom";

const { Link } = Anchor;

const { Header } = Layout;
const HeaderTop = () => {
  const PF = "http://localhost:3003/images/";

  const { isAuth, user } = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const logOut = () => {
    const cf = window.confirm(`Do you want to log out?`);
    if (cf) {
      sessionStorage.removeItem("accessJWT");
      localStorage.removeItem("blogSite");
      userLogout();
      dispatch(logout());

      history.push("/");
    }
  };

  const history = useHistory();
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <Header>
      <div className="container-fluid">
        <div className="header">
          <div className="logo">
            <i className="fas fa-bolt"></i>
            <a href="/">Blog</a>
          </div>
          <div className="category">
            <div className="mobileHidden">
              <Anchor
                targetOffset="65"
                onClick={(e, link) => {
                  history.push(link.href);
                  e.preventDefault();
                }}
              >
                <Link href="/" title="Home" />
                <Link href="/about" title="About" />
                <Link href="/contact" title="Contact" />
                <Link href="/write" title="Write" />
              </Anchor>
            </div>
          </div>

          <div className="category-right">
            <div className="mobileHidden">
              <Anchor
                onClick={(e, link) => {
                  history.push(link.href);
                  e.preventDefault();
                }}
              >
                {isAuth ? (
                  <>
                    <Button type="primary" onClick={logOut}>
                      Log out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link href="/login" title="login" />
                    <Link href="/register" title="register" />
                  </>
                )}
              </Anchor>
            </div>
          </div>

          <div className="profile">
            <LinkRouter to={`/settings/${user._id}`}>
              {isAuth && (
                <img
                  className="avatar"
                  src={
                    user.profilePic
                      ? PF + user.profilePic
                      : "https://images.unsplash.com/photo-1621570168855-e9651220e831?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  }
                  alt="avatar"
                />
              )}
            </LinkRouter>
          </div>

          <div className="mobileVisible">
            <Button type="primary" onClick={showDrawer}>
              <i className="fas fa-bars"></i>
            </Button>
            <Drawer
              placement="right"
              closable={false}
              onClose={onClose}
              visible={visible}
            >
              <Anchor
                targetOffset="65"
                onClick={(e, link) => {
                  history.push(link.href);
                  e.preventDefault();
                }}
              >
                <Link href="/" title="Home" />
                <Link href="/about" title="About" />
                <Link href="/contact" title="Contact" />
                <Link href="/write" title="Write" />
                <Link href="/login" title="login" />
                <Link href="/register" title="register" />
              </Anchor>
            </Drawer>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default HeaderTop;
