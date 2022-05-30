import React from "react";
import "./index.css";
class Classroom extends React.Component {
  constructor(props) {
    super(props); //调用父类构造函数
    this.state = {
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

        <div className="Modal" style={{ display: this.state.Modal_show ? "flex" : "none" }}>
          <div className="black" onClick={this.closeModal}></div>
          <div className="box">
            <p className="title">Please Add Classroom Here</p>
            <div>
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
            </div>
            <div className="but" onClick={this.add}>
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
            <div className="but" onClick={this.Login}>
              Update
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Classroom;
