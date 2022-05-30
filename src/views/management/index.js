import React, { Component } from "react";
import Navbar from "../../common/Navbar";
import { Radio, PageHeader } from "antd";
import Class from "./class";
import "./index.css";
import Classroom from "./classroom";

class management extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 1,
    };
  }
  onChange = (e) => {
    this.setState({ type: e.target.value });
  };
  render() {
    return (
      <div>
        <Navbar />
        <div id="man">
          <PageHeader
            className="page_header"
            title={<p className="page_title">Reserve Master</p>}
            subTitle="An a application used to reserve the classroom of HZNU"
          />
          <Radio.Group onChange={this.onChange} value={this.state.type} style={{ margin: "20px" }}>
            <Radio value={1}>Class</Radio>
            <Radio value={2}>Classroom</Radio>
          </Radio.Group>
          <div style={{ width: "1154rem", display: "flex", justifyContent: "center" }}>
            <div style={{ display: this.state.type === 1 ? "block" : "none" }}>
              <div className="title">You can add, delete or Update courses here</div>
              <Class />
            </div>
            <div style={{ display: this.state.type === 2 ? "block" : "none" }}>
              <div className="title">You can add, delete or Update classroom here</div>
              <Classroom />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default management;
