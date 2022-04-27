import { Layout, Menu } from "antd";
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import React from "react";
import "antd/dist/antd.css";
import "./App.less";
import Classroom from "./views/classroom";
const { Header, Content, Footer, Sider } = Layout;

function App() {
  return <div className="App">
    <Classroom />
  </div>;
}

export default App;
