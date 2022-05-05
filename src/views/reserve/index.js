import React, { Component } from "react";
import Navbar from "../../common/Navbar";
import "antd/dist/antd.css";
import "./index.css";
import { PageHeader } from "antd";
import { Radio, Select } from "antd";
const { Option } = Select;

class reserve extends Component {
  constructor(props) {
    super(props); //调用父类构造函数
    this.state = {
      classroom_list: [],
      day: "0",
      start: "1",
      last: "1",
    };
    //直接用state里的值 ： this.state
    //改变state里的值 : this.setState({ })
  }

  componentDidMount = () => {
    if (localStorage.day) {
      this.setState({
        day: localStorage.day,
        start: localStorage.start,
        last: localStorage.last,
      });
      localStorage.removeItem("day");
      localStorage.removeItem("start");
      localStorage.removeItem("last");
    }
  };

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

  render() {
    console.log(this.state.day);
    return (
      <div>
        <Navbar />
        <div id="reserve">
          <PageHeader
            className="page_header"
            title={<p className="page_title">Please select the time !</p>}
            subTitle="Time is based on the number of sessions of the course"
          />
          <div id="choose_box">
            <div id="choose_day">
              <p>Choose Day</p>
              <Radio.Group onChange={this.onChange} defaultValue={this.state.day} key={this.state.day}>
                <Radio.Button value="1">Monday</Radio.Button>
                <Radio.Button value="2">Tuesday</Radio.Button>
                <Radio.Button value="3">Wednesday</Radio.Button>
                <Radio.Button value="4">Thursday</Radio.Button>
                <Radio.Button value="5">Friday</Radio.Button>
                <Radio.Button value="6">Saturday</Radio.Button>
                <Radio.Button value="0">Sunday</Radio.Button>
              </Radio.Group>
            </div>
            <div id="choose_start">
              <p>Start</p>
              <Select
                defaultValue={this.state.start}
                key={this.state.start}
                style={{ width: "60rem" }}
                onChange={this.handleChange_start}
              >
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
              <p>continue</p>
              <Select
                defaultValue={this.state.last}
                key={this.state.last}
                style={{ width: "60rem", height: "32rem" }}
                onChange={this.handleChange_last}
              >
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
        </div>
      </div>
    );
  }
}
export default reserve;
