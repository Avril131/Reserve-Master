import React from "react";
import "./index.css";
import { DatePicker, Select } from "antd";
import request from "../../api/request";
import { message } from "antd";
const { RangePicker } = DatePicker;

const { Option } = Select;
class Res extends React.Component {
  constructor(props) {
    super(props); //调用父类构造函数
    this.state = {
      id: "",
      Modal_show: false,
      list: [],
    };
    //直接用state里的值 ： this.state
    //改变state里的值 : this.setState({ })
  }
  componentDidMount() {
    request.get("/reservation/all").then((res) => {
      this.setState({ list: Object.values(res) });
    });
  }
  closeModal = () => {
    console.log(3);
    this.setState({ Modal_show: false });
  };
  open = (id) => {
    console.log(2);
    this.setState({ id: id, Modal_show: true });
  };
  delete = () => {
      console.log(1);
    request
      .get("/reservation/delete", {
        reservationId: this.state.id,
      })
      .then((res) => {
        if (res === "ok") {
          message.success("Delete Success");
        } else {
          message.error("Something is error");
        }
      });
    request.get("/reservation/all").then((res) => {
      this.setState({ list: Object.values(res) });
    });
    this.closeModal();
  };

  render() {
    const list = this.state.list;
    return (
      <div id="class">
        {list.length !== 0 ? (
          <div className="reserve_all">
            <h2>All Reserve</h2>
            <div className="column">
              <h2>ID</h2>
              <h2>Date</h2>
              <h2>Start</h2>
              <h2>Last</h2>
              <h2>User</h2>
              <div></div>
            </div>
            {list.map((val, index) => (
              <div key={index} className="column">
                <h2>{val.reservation_id}</h2>
                <h2>{val.reservation_date.slice(0, 10)}</h2>
                <h2>{val.reservation_start}</h2>
                <h2>{val.reservation_time}</h2>
                <h2>{val.reservation_user_id}</h2>
                <button onClick={() => this.open(val.reservation_id)}>
                  删除
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div></div>
        )}

        <div className="Modal" style={{ display: this.state.Modal_show ? "flex" : "none" }}>
          <div className="black" onClick={this.closeModal}></div>
          <div className="box">
            <p className="title">Are you sure to delete this reserve?</p>
            <div className="but" onClick={this.delete}>
              YES
            </div>
            <div className="but" onClick={this.closeModal}>
              NO
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Res;
