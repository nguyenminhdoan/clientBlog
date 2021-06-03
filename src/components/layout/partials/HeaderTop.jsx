import React, { useState } from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";
import { Anchor, Drawer, Button } from "antd";
import "./headerStyle.css";
const { Link } = Anchor;

const { Header } = Layout;
const HeaderTop = () => {
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
          <div className="mobileHidden">
            <Anchor targetOffset="65">
              <Link href="#hero" title="Home" />
              <Link href="#about" title="About" />
              <Link href="#contact" title="Contact" />
              <Link href="#write" title="Write" />
            </Anchor>
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
              <Anchor targetOffset="65">
                <Link href="#hero" title="Home" />
                <Link href="#about" title="About" />
                <Link href="#contact" title="Contact" />
                <Link href="#write" title="Write" />
              </Anchor>
            </Drawer>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default HeaderTop;
