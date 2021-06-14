import React, { useState } from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import { Anchor, Drawer, Button } from "antd";
import "./headerStyle.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../../api/userAPI";
import { logout } from "../../../pages/login/loginSlice";

const { Link } = Anchor;

const { Header } = Layout;
const HeaderTop = () => {
  const { isAuth } = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const logOut = () => {
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("blogSite");
    userLogout();
    dispatch(logout());

    history.push("/");
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
            <a href="http://google.com">Blog</a>
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
            <img
              className="avatar"
              src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.6435-1/p320x320/95311911_1196339757364555_4657815680878379008_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=7206a8&_nc_ohc=Kz3paLSyu6AAX8E0P3T&_nc_ht=scontent-sin6-1.xx&tp=6&oh=56cce99347b38e7599d321e31ffc3d24&oe=60DEEE9B"
              alt="avatar"
            />
            <i className="search-icon fas fa-search"></i>
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
