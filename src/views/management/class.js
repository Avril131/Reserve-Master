import React from "react";
import "./index.css";
import { DatePicker, Select } from "antd";
const { RangePicker } = DatePicker;

const { Option } = Select;
class Class extends React.Component {
  constructor(props) {
    super(props); //调用父类构造函数
    this.state = {
      name: "",
      day: 1,
      start: 1,
      last: 1,
      Modal_show: false,
      Modal_show2: false,
      Modal_show3: false,
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
  closeModal3 = () => {
    this.setState({ Modal_show3: false });
  };
  render() {
    return (
      <div id="class">
        <div className="buttonBox">
          <button onClick={() => this.setState({ Modal_show: true })} className="button--winona" data-text="Add Class">
            <span>Add Course</span>
          </button>
          <button
            onClick={() => this.setState({ Modal_show2: true })}
            className="button--winona"
            data-text="Delete Class"
          >
            <span>Delete Course</span>
          </button>
          <button
            onClick={() => this.setState({ Modal_show3: true })}
            className="button--winona"
            data-text="Update Class"
          >
            <span>Update Course</span>
          </button>
        </div>

        <div className="Modal" style={{ display: this.state.Modal_show ? "flex" : "none" }}>
          <div className="black" onClick={this.closeModal}></div>
          <div className="box">
            <p className="title">Please Add Class Here</p>
            <div>
              <p className="text">Class Name</p>
              <input
                className="input"
                type="text"
                placeholder={"Please enter class name"}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </div>
            <p className="text" style={{ marginTop: "10px" }}>
              Class Week
            </p>
            <RangePicker picker="week" />
            <div style={{ display: "flex", marginTop: "20px", alignItems: "center", height: "32px" }}>
              <p className="text" style={{ marginTop: "10px", marginRight: "10px" }}>
                Class Day
              </p>
              <Select
                onChange={(e) => this.setState({ day: e })}
                defaultValue="星期一"
                key="星期一"
                style={{ width: "160px" }}
              >
                <Option value="1">星期一</Option>
                <Option value="2">星期二</Option>
                <Option value="3">星期三</Option>
                <Option value="4">星期四</Option>
                <Option value="5">星期五</Option>
              </Select>
            </div>
            <div style={{ display: "flex", marginTop: "20px", alignItems: "baseline" }}>
              <p className="text" style={{ marginRight: "10px" }}>
                Class Start
              </p>
              <Select
                onChange={(e) => this.setState({ start: e })}
                defaultValue={this.state.start}
                key={this.state.start}
                style={{ width: "80px" }}
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
              <p className="text" style={{ marginLeft: "10px", marginRight: "10px" }}>
                Class Last
              </p>
              <Select
                onChange={(e) => this.setState({ last: e })}
                defaultValue={this.state.last}
                key={this.state.last}
                style={{ width: "80px" }}
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
                <Option value="12" disabled={this.state.start > "1" ? true : false}>
                  12
                </Option>
              </Select>
            </div>
            <div className="but" onClick={this.Login}>
              Add
            </div>
          </div>
        </div>
        <div className="Modal" style={{ display: this.state.Modal_show2 ? "flex" : "none" }}>
          <div className="black" onClick={this.closeModal2}></div>
          <div className="box">
            <p className="title">Please Delete Class Here</p>
            <div>
              <p className="text">Class Name</p>
              <input
                className="input"
                type="text"
                placeholder={"Please enter class name"}
                onChange={(e) => this.setState({ account: e.target.value })}
              />
            </div>
            <div className="but" onClick={this.Login}>
              Delete
            </div>
          </div>
        </div>
        <div className="Modal" style={{ display: this.state.Modal_show3 ? "flex" : "none" }}>
          <div className="black" onClick={this.closeModal3}></div>
          <div className="box">
            <p className="title">Please Update Class Here</p>
            <div>
              <p className="text">Class Name</p>
              <input
                className="input"
                type="text"
                placeholder={"Please enter class name"}
                onChange={(e) => this.setState({ account: e.target.value })}
              />
            </div>
            <p className="text" style={{ marginTop: "10px" }}>
              Class Week
            </p>
            <RangePicker picker="week" />
            <div style={{ display: "flex", marginTop: "20px", alignItems: "center", height: "32px" }}>
              <p className="text" style={{ marginTop: "10px", marginRight: "10px" }}>
                Class Day
              </p>
              <Select
                onChange={(e) => this.setState({ day: e })}
                defaultValue="星期一"
                key="星期一"
                style={{ width: "160px" }}
              >
                <Option value="1">星期一</Option>
                <Option value="2">星期二</Option>
                <Option value="3">星期三</Option>
                <Option value="4">星期四</Option>
                <Option value="5">星期五</Option>
              </Select>
            </div>
            <div style={{ display: "flex", marginTop: "20px", alignItems: "baseline" }}>
              <p className="text" style={{ marginRight: "10px" }}>
                Class Start
              </p>
              <Select
                onChange={(e) => this.setState({ start: e })}
                defaultValue={this.state.start}
                key={this.state.start}
                style={{ width: "80px" }}
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
              <p className="text" style={{ marginLeft: "10px", marginRight: "10px" }}>
                Class Last
              </p>
              <Select
                onChange={(e) => this.setState({ last: e })}
                defaultValue={this.state.last}
                key={this.state.last}
                style={{ width: "80px" }}
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
                <Option value="12" disabled={this.state.start > "1" ? true : false}>
                  12
                </Option>
              </Select>
            </div>
            <div className="but" onClick={this.Login}>
              Update
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Class;
