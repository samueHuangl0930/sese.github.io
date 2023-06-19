import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import "./GloballLayout.less";
import HeaderComponent from "./Header";
import Footer from "./Footer";

const { Content } = Layout;

const LayoutWithRoute = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Layout id="global">
      <HeaderComponent windowSize={windowSize} />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
};

export default LayoutWithRoute;
