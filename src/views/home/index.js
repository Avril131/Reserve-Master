import React, { Component } from "react";
import "./index.css";
import { Carousel, PageHeader } from "antd";
import img1 from "../../asset/1.JPG";
import img2 from "../../asset/2.jpg";
import img3 from "../../asset/3.jpg";
import img4 from "../../asset/4.jpg";
import Form from "../../common/ClassForm";
import { Link } from "react-router-dom";
import Navbar from "../../common/Navbar";
import { Select } from "antd";
import PersonReserve from "../Person/personReserve";
import event from "../../common/event";
import request from "../../api/request";
const { Option } = Select;

class home extends Component {
  constructor(props) {
    super(props); //调用父类构造函数

    this.state = {
      day: "0",
      start: "1",
      last: "1",
      no: localStorage.getItem("no"),
    };
    //直接用state里的值 ： this.state
    //改变state里的值 : this.setState({ })
  }
  componentDidMount() {
    request.get("/status/statusAll").then((res) => {
      console.log(res);
    });
    event.addListener("eventMsg", (val) => {
      this.setState({
        no: val,
      });
      console.log(val);
    });
  }
  componentWillUnmount() {
    event.removeListener("eventMsg", () => console.log("closed"));
  }

  go_Reserve = () => {
    localStorage.day = this.state.day;
    localStorage.start = this.state.start;
    localStorage.last = this.state.last;
  };
  handleChange_day = (value) => {
    this.setState({
      day: value,
    });
    console.log(`day:` + value);
  };
  handleChange_start = (value) => {
    this.setState({
      start: value,
    });
    console.log("start:" + value);
  };
  handleChange_last = (value) => {
    this.setState({
      last: value,
    });
    console.log("last:" + value);
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
            <Carousel autoplay>
              <div className="carousel_part">
                <img src={img1}></img>
              </div>
              <div className="carousel_part">
                <img src={img2}></img>
              </div>
              <div className="carousel_part">
                <img src={img3}></img>
              </div>
              <div className="carousel_part">
                <img src={img4}></img>
              </div>
            </Carousel>
            <div id="form_part">
              <div id="form_h">
                <p className="form_head">Choose reservation time here.</p>
                <Link to={"/reserve"} onClick={this.go_Reserve}>
                  <button>
                    {" "}
                    <span>Search </span>{" "}
                  </button>
                </Link>
              </div>
              <div id="select">
                <div id="choose_day">
                  <p className="choose_p">Day</p>
                  <Select defaultValue={this.state.day} style={{ height: "32px" }} onChange={this.handleChange_day}>
                    <Option value="1">Monday</Option>
                    <Option value="2">Tuesday</Option>
                    <Option value="3">Wednesday</Option>
                    <Option value="4">Thursday</Option>
                    <Option value="5">Friday</Option>
                    <Option value="6">Saturday</Option>
                    <Option value="0">Sunday</Option>
                  </Select>
                </div>
                <div id="choose_start">
                  <p className="choose_p">Start</p>
                  <Select defaultValue="1" style={{ height: "32px" }} onChange={this.handleChange_start}>
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
                  <Select defaultValue="1" style={{ height: "32px" }} onChange={this.handleChange_last}>
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
                mon={["1", "1", "1", "5", "5", "4", "4", "5", "5", "2", "2", "2"]}
                tue={["7", "7", "2", "6", "1", "1", "1", "2", "2", "3", "3", "3"]}
                wed={["6", "6", "6", "1", "1", "2", "2", "1", "1", "4", "4", "4"]}
                thu={["3", "3", "3", "4", "4", "2", "2", "5", "5", "1", "1", "1"]}
                fri={["1", "1", "7", "6", "1", "1", "1", "1", "2", "1", "2", "1"]}
                sat={["5", "1", "7", "1", "1", "1", "1", "1", "2", "2", "2", "2"]}
                sun={["1", "2", "7", "5", "6", "6", "1", "1", "1", "2", "2", "2"]}
              />
            </div>
            <div>
              {this.state.no ? (
                <div>
                  <PersonReserve No={this.state.no} />
                </div>
              ) : (
                <div>
                  <p className="res">Please log in first to view your reservation information</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default home;
