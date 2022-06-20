import { Menu, message } from "antd";
import React from "react";
import "antd/dist/antd.css";
import { NavLink, Link } from "react-router-dom";
import { HomeOutlined, CalendarOutlined, GlobalOutlined, ToolOutlined } from "@ant-design/icons";
import img from "../../asset/img.jpg";
import logo from "../../asset/logo.jpg";
import event from "../event";
import request from "../../api/request";
import "./index.css";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(
    <NavLink to="/home" className="link">
      Home
    </NavLink>,
    "link1",
    <HomeOutlined className="icon" style={{ fontSize: "20px", color: "#404040" }} />
  ),
  getItem(
    <NavLink to="/reserve" className="link">
      Reserve
    </NavLink>,
    "link2",
    <CalendarOutlined className="icon" style={{ fontSize: "20px", color: "#404040" }} />
  ),
  getItem(
    <NavLink to="/about" className="link">
      About
    </NavLink>,
    "link3",
    <GlobalOutlined className="icon" style={{ fontSize: "20px", color: "#404040" }} />
  ),
];

class Navbar extends React.Component {
  constructor(props) {
    super(props); //调用父类构造函数
    this.state = {
      account: "",
      password: "",
      password_same: "",
      reg_name: "",
      Modal_show: false,
      Modal_show2: false,
    };
    //直接用state里的值 ： this.state
    //改变state里的值 : this.setState({ })
  }
  closeModal = () => {
    this.setState({ Modal_show: false });
  };
  closeModal2 = () => {
    this.setState({ Modal_show2: false });
  };
  Login = async () => {
    if (this.state.account === "") {
      message.error("Input account please");
      return;
    }
    if (this.state.password === "") {
      message.error("Input password please");
      return;
    }
    let log = true;
    if (this.state.account || this.state.password) {
      log = false;
      /**登录 */
      request
        .post(
          "/login",
          {
            userNo: this.state.account,
            password: this.state.password,
          },
          "form"
        )
        .then((res) => {
          console.log(res);
          if (res.userId) {
            localStorage.setItem("name", res.message);
            localStorage.setItem("id", res.userId);
            this.setState({ account: "" });
            message.success("Login success");
            event.emit("eventMsg", this.state.account);
            this.setState({ Modal_show: false });
            localStorage.setItem("no", this.state.account);
            return;
          } else {
            message.error(res.message);
            this.setState({ Modal_show: false });
            this.setState({ account: "", password: "" });
            message.error("Something Wrong happened");
            log = false;
          }
        });
    }
  };
  Register = async () => {
    if (this.state.account === "") {
      message.error("Input account please");
      return;
    }
    if (this.state.password === "") {
      message.error("Input password please");
      return;
    }
    if (this.state.password_same === "") {
      message.error("Input password again please");
      return;
    }
    if (this.state.password_same !== this.state.password) {
      message.error("The two passwords are inconsistent");
      return;
    }
    let reg = true;
    if (this.state.account || this.state.password) {
      reg = false;
      /**登录 */
      reg = request
        .post(
          "/register",
          {
            userName: this.state.reg_name,
            userNo: this.state.account,
            password: this.state.password,
          },
          "form"
        )
        .then((res) => {
          if (res.code === -1) {
            message.error("Something Wrong happened, try it later please");
            reg = false;
            return;
          }
          if (res.code === 1) {
            message.error("Your ID already exists");
            reg = false;
            return;
          }
          if (res.code === 200) {
            message.success("Register success, Please Login");
            this.setState({ Modal_show2: false, Modal_show: true });
            reg = true;
            return;
          }
        });
    }
  };
  render() {
    const no = localStorage.getItem("no");
    const name = localStorage.getItem("name");
    return (
      <div id="navbar">
        <img
          src={logo}
          style={{
            height: !no ? "100rem" : "40rem",
            position: no ? "absolute" : "relative",
            left: no ? "110rem" : "80rem",
          }}
        />
        <button
          onClick={() => this.setState({ Modal_show: true })}
          style={{ display: !no ? "block" : "none" }}
          className="button--winona"
          data-text="login"
        >
          <span>login</span>
        </button>
        <button
          onClick={() => this.setState({ Modal_show2: true })}
          style={{ display: !no ? "block" : "none" }}
          className="button--winona"
          data-text="Register"
        >
          <span>Register</span>
        </button>
        <Link to={"/person/" + no} style={{ display: no ? "block" : "none" }}>
          <img src={img} className="pic"></img>
          <p id="usr_Name">{name}</p>
        </Link>
        <button
          onClick={() => {
            localStorage.removeItem("no");
            localStorage.removeItem("name");
            localStorage.removeItem("id");
            message.success("Exit success");
            event.emit("eventMsg", "");
            this.setState({ account: "", password: "" });
          }}
          style={{ display: no ? "block" : "none" }}
          className="button--winona"
          data-text="Exit"
        >
          <span>Exit</span>
        </button>
        <Menu
          style={{
            width: "256rem",
            position: "absolute",
            overflow: "hidden",
          }}
          theme="light"
          mode="inline"
          items={items}
        />
        <NavLink
          to="/management"
          className="link"
          style={{
            position: "absolute",
            bottom: "70px",
            left: "5%",
            display: localStorage.getItem("no") === "admin" ? "" : "none",
          }}
        >
          <ToolOutlined className="icon" style={{ fontSize: "20px", color: "#404040" }} />
          management
        </NavLink>
        <div className="Modal" style={{ display: this.state.Modal_show ? "flex" : "none" }}>
          <div className="black" onClick={this.closeModal}></div>
          <div className="box">
            <p className="title">Please Login Here</p>
            <div>
              <p className="text">Account</p>
              <input
                className="input"
                type="text"
                value={this.state.account}
                placeholder={"Please enter your account"}
                onChange={(e) => this.setState({ account: e.target.value })}
              />
            </div>
            <div style={{ margin: "10px 0 0 0" }}>
              <p className="text">Password</p>
              <input
                className="input"
                type="password"
                value={this.state.password}
                placeholder={"Please enter your password"}
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </div>
            <div className="but" onClick={this.Login}>
              Login
            </div>
          </div>
        </div>
        <div className="Modal" style={{ display: this.state.Modal_show2 ? "flex" : "none" }}>
          <div className="black" onClick={this.closeModal2}></div>
          <div className="box">
            <p className="title">Please Register Here</p>
            <div>
              <p className="text">userName</p>
              <input
                className="input"
                type="text"
                placeholder={"Please enter your userName"}
                onChange={(e) => this.setState({ reg_name: e.target.value })}
              />
            </div>
            <div style={{ margin: "10px 0 0 0" }}>
              <p className="text">Account</p>
              <input
                className="input"
                type="text"
                placeholder={"Please enter your account"}
                onChange={(e) => this.setState({ account: e.target.value })}
              />
            </div>
            <div style={{ margin: "10px 0 0 0" }}>
              <p className="text">Password</p>
              <input
                className="input"
                type="password"
                placeholder={"Please enter your password"}
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </div>
            <div style={{ margin: "10px 0 0 0" }}>
              <p className="text">Please enter your password again</p>
              <input
                className="input"
                type="password"
                placeholder={"Please enter your password again"}
                onChange={(e) => this.setState({ password_same: e.target.value })}
              />
            </div>
            <div className="but" onClick={this.Register}>
              Register
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
