import React, { Component } from "react";
import "./index.css";
import { Carousel, PageHeader } from "antd";
import img1 from "../../asset/1.JPG";
import Form from "../../common/ClassForm";
import { Link } from "react-router-dom";
import Navbar from "../../common/Navbar";
import axios from "axios";
import { Select } from "antd";
const { Option } = Select;

class home extends Component {
  constructor(props) {
    super(props); //调用父类构造函数

    this.state = {
      classroom_list: [],
      day: 0,
      start: 1,
      last: 1,
    };
    //直接用state里的值 ： this.state
    //改变state里的值 : this.setState({ })
  }

  change_List = () => {
    /**请求list再进行修改 */
  };
  onChange = (e) => {
    this.setState({
      day: e,
    });
    this.change_List();
    console.log(`day:${e.target.value}`);
  };
  handleChange_start = (value) => {
    this.setState({
      start: value,
    });
    this.change_List();
    console.log("start:" + value);
  };
  handleChange_last = (value) => {
    this.setState({
      last: value,
    });
    this.change_List();
    console.log("last:" + value);
  };
  componentDidMount = () => {
    axios.get("/api").then((res) => {
      console.log(1);
      console.log(res.data);
    });
  };
  render() {
    return (
      <div>
        <Navbar />
        <div id="home">
          <PageHeader
            className="page_header"
            title={<p className="page_title">Reserve Master</p>}
            subTitle="An a application used to reserve the classroom of HZNU"
          />
          <div id="home_content">
            <Carousel autoplay style={{ width: "600rem" }}>
              <div className="carousel_part">
                <img src={img1}></img>
              </div>
              <div className="carousel_part">
                <img src={img1}></img>
              </div>
              <div className="carousel_part">
                <img src={img1}></img>
              </div>
              <div className="carousel_part">
                <img src={img1}></img>
              </div>
            </Carousel>
            <div id="form_part">
              <div id="form_h">
              <p className="form_head">Choose reservation time here.</p>
              <button> <span>Search </span> </button></div>
              <div id="select">
            <div id="choose_day">
              <p className="choose_p">Day</p>
              <Select defaultValue="1" style={{ width: "120rem" }} onChange={this.handleChange_day}>
                <Option value="1">Monday</Option>
                <Option value="2">Tuesday</Option>
                <Option value="3">Wednesday</Option>
                <Option value="4">Thursday</Option>
                <Option value="5">Friday</Option>
                <Option value="6">Saturday</Option>
                <Option value="7">Sunday</Option>
              </Select>
            </div>
            <div id="choose_start">
              <p className="choose_p">Start</p>
              <Select defaultValue="1" style={{ width: "60rem" }} onChange={this.handleChange_start}>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
                <Option value="5">5</Option>
                <Option value="6">6</Option>
                <Option value="7">7</Option>
                <Option value="8">8</Option>
                <Option value="9">9</Option>
                <Option value="10">10</Option>
                <Option value="11">11</Option>
                <Option value="12">12</Option>
              </Select>
            </div>
            <div id="choose_last">
              <p className="choose_p">continue</p>
              <Select defaultValue="1" style={{ width: "60rem",height: "32rem" }} onChange={this.handleChange_last}>
                <Option value="1">1</Option>
                <Option value="2" disabled={this.state.start > 11 ? true : false}>
                  2
                </Option>
                <Option value="3" disabled={this.state.start > 10 ? true : false}>
                  3
                </Option>
                <Option value="4" disabled={this.state.start > 9 ? true : false}>
                  4
                </Option>
                <Option value="5" disabled={this.state.start > 8 ? true : false}>
                  5
                </Option>
                <Option value="6" disabled={this.state.start > 7 ? true : false}>
                  6
                </Option>
                <Option value="7" disabled={this.state.start > 6 ? true : false}>
                  7
                </Option>
                <Option value="8" disabled={this.state.start > 5 ? true : false}>
                  8
                </Option>
                <Option value="9" disabled={this.state.start > 4 ? true : false}>
                  9
                </Option>
                <Option value="10" disabled={this.state.start > 3 ? true : false}>
                  10
                </Option>
                <Option value="11" disabled={this.state.start > 2 ? true : false}>
                  11
                </Option>
                <Option value="12" disabled={this.state.start > 1 ? true : false}>
                  12
                </Option>
              </Select>
              </div>
              </div>
              <Form
                mon={[
                  "0",
                  "1",
                  "0",
                  "1",
                  "1",
                  "1",
                  "1",
                  "1",
                  "0",
                  "0",
                  "0",
                  "0",
                ]}
                tue={[
                  "0",
                  "0",
                  "1",
                  "0",
                  "1",
                  "1",
                  "1",
                  "0",
                  "0",
                  "0",
                  "0",
                  "0",
                ]}
                wed={[
                  "1",
                  "0",
                  "0",
                  "0",
                  "1",
                  "1",
                  "1",
                  "1",
                  "1",
                  "0",
                  "0",
                  "1",
                ]}
                thu={[
                  "0",
                  "0",
                  "0",
                  "0",
                  "1",
                  "1",
                  "1",
                  "0",
                  "1",
                  "0",
                  "1",
                  "0",
                ]}
                fri={[
                  "1",
                  "1",
                  "1",
                  "0",
                  "1",
                  "1",
                  "1",
                  "1",
                  "0",
                  "1",
                  "0",
                  "1",
                ]}
                sat={[
                  "0",
                  "1",
                  "0",
                  "1",
                  "1",
                  "1",
                  "1",
                  "1",
                  "0",
                  "0",
                  "0",
                  "0",
                ]}
                sun={[
                  "1",
                  "0",
                  "0",
                  "1",
                  "0",
                  "0",
                  "1",
                  "1",
                  "1",
                  "0",
                  "1",
                  "0",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default home;
