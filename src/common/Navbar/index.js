import { Menu } from "antd";
import React from "react";
import "antd/dist/antd.css";
import { NavLink } from "react-router-dom";
import { HomeOutlined, CalendarOutlined,GlobalOutlined } from "@ant-design/icons";
import img from '../../asset/img.jpg'
import './index.css'

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(<NavLink to="/home" className='link'>Home</NavLink>, "link1", <HomeOutlined className='icon' style={{ fontSize: '20px', color: '#404040' }}/>),
  getItem(<NavLink to="/reserve" className='link'>Reserve</NavLink>, "link2", <CalendarOutlined className='icon' style={{ fontSize: '20px', color: '#404040' }}/>),
  getItem(<NavLink to="/about" className='link'>About</NavLink>, "link3", <GlobalOutlined className='icon' style={{ fontSize: '20px', color: '#404040' }}/>),
];

export default function Navbar() {
  return (
    <div id='navbar'>
      <a>
      <img src={img} className='pic'></img>
      <p id='usr_Name'>Avril</p>
      </a>
    <Menu
      style={{
        width: 256,
        height: 300,
        position: "absolute",
        overflow: "hidden",
      }}
      theme="light"
      mode="inline"
      items={items}
    /></div>
  );
}
