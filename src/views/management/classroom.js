import React from "react";
import "./index.css";
import request from "../../api/request";
import { message } from "antd";
class Classroom extends React.Component {
  constructor(props) {
    super(props); //调用父类构造函数
    this.state = {
      list: [],
      id: 1,
      location: "",
      detail: "",
      Modal_show: false,
      Modal_show2: false,
      Modal_show3: false,
    };
    //直接用state里的值 ： this.state
    //改变state里的值 : this.setState({ })
  }
  componentDidMount() {
    request.get("/classroom/all").then((res) => {
      this.setState({ list: Object.values(res) });
    });
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
  Add = () => {
    request
      .get("/classroom/add", {
        location: this.state.location,
        detail: this.state.detail,
        pic: "",
      })
      .then((res) => {
        if (res === "ok") {
          message.success("Add Success");
        } else {
          message.error("Something is error");
        }
      });
    request.get("/classroom/all").then((res) => {
      this.setState({ list: Object.values(res) });
    });
    this.closeModal();
  };
  delete = () => {
    request
      .get("/classroom/delete", {
        classroomId: this.state.id,
      })
      .then((res) => {
        if (res === "ok") {
          message.success("Delete Success");
        } else {
          message.error("Something is error");
        }
      });
    request.get("/classroom/all").then((res) => {
      this.setState({ list: Object.values(res) });
    });
    this.closeModal2();
  };
  update = () => {
    request
      .get("/classroom/update", {
        location: this.state.location,
        detail: this.state.detail,
        pic: "",
        classroomId: this.state.classroomId,
      })
      .then((res) => {
        if (res === "ok") {
          message.success("Update Success");
        } else {
          message.error("Something is error");
        }
      });
    request.get("/classroom/all").then((res) => {
      this.setState({ list: Object.values(res) });
    });
    this.closeModal3();
  };
  render() {
    const list = this.state.list;
    return (
      <div id="class">
        <div className="buttonBox">
          <button
            onClick={() => this.setState({ Modal_show: true })}
            className="button--winona"
            data-text="Add Classroom"
          >
            <span>Add Classroom</span>
          </button>
          <button
            onClick={() => this.setState({ Modal_show2: true })}
            className="button--winona"
            data-text="Delete Classroom"
          >
            <span>Delete Classroom</span>
          </button>
          <button
            onClick={() => this.setState({ Modal_show3: true })}
            className="button--winona"
            data-text="Update Classroom detail"
          >
            <span>Update Classroom detail</span>
          </button>
        </div>
        {list.length !== 0 ? (
          <div className="classroom_all">
            <h2>All Classroom</h2>
            <div className="column">
              <h2>ID</h2>
              <h2>Detail</h2>
              <h2>Location</h2>
            </div>
            {list.map((val, index) => (
              <div key={index} className="column">
                <h2>{val.classroom_id}</h2>
                <h2>{val.classroom_detail}</h2>
                <h2>{val.classroom_location}</h2>
              </div>
            ))}
          </div>
        ) : (
          <div></div>
        )}

        <div className="Modal" style={{ display: this.state.Modal_show ? "flex" : "none" }}>
          <div className="black" onClick={this.closeModal}></div>
          <div className="box">
            <p className="title">Please Add Classroom Here</p>
            <div>
              <p className="text">Classroom Location</p>
              <input
                className="input"
                type="text"
                placeholder={"Please enter Classroom Location"}
                onChange={(e) => this.setState({ location: e.target.value })}
              />
              <p className="text">Classroom detail</p>
              <input
                className="input"
                type="text"
                placeholder={"Please enter class detail"}
                onChange={(e) => this.setState({ detail: e.target.value })}
              />
            </div>
            <div className="but" onClick={this.Add}>
              Add
            </div>
          </div>
        </div>
        <div className="Modal" style={{ display: this.state.Modal_show2 ? "flex" : "none" }}>
          <div className="black" onClick={this.closeModal2}></div>
          <div className="box">
            <p className="title">Please Delete Classroom Here</p>
            <div>
              <p className="text">Classroom ID</p>
              <input
                className="input"
                type="text"
                placeholder={"Please enter classroom ID"}
                onChange={(e) => this.setState({ id: e.target.value })}
              />
            </div>
            <div className="but" onClick={this.delete}>
              Delete
            </div>
          </div>
        </div>
        <div className="Modal" style={{ display: this.state.Modal_show3 ? "flex" : "none" }}>
          <div className="black" onClick={this.closeModal3}></div>
          <div className="box">
            <p className="title">Please Update Classroom Here</p>
            <p className="text">Classroom ID</p>
            <input
              className="input"
              type="text"
              placeholder={"Please enter Classroom ID"}
              onChange={(e) => this.setState({ id: e.target.value })}
            />
            <p className="text">Classroom Location</p>
            <input
              className="input"
              type="text"
              placeholder={"Please enter Classroom Location"}
              onChange={(e) => this.setState({ location: e.target.value })}
            />
            <p className="text">Classroom detail</p>
            <input
              className="input"
              type="text"
              placeholder={"Please enter class name"}
              onChange={(e) => this.setState({ detail: e.target.value })}
            />
            <div className="but" onClick={this.update}>
              Update
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Classroom;
