import React from "react";
import request from "../../api/request";

class personReserve extends React.Component {
  constructor(props) {
    super(props); //调用父类构造函数
    this.state = {
      reserveList: [],
    };
    //直接用state里的值 ： this.state
    //改变state里的值 : this.setState({ })
  }
  componentDidMount = () => {
    const data = request
      .get("/reservation", {
        userNo: this.props.No,
      })
      .then((res) => {
        this.setState({ reserveList: Object.values(res) });
      });
  };
  UNSAFE_componentWillReceiveProps(nextProps) {
    const data = request
      .get("/reservation", {
        userNo: nextProps.No,
      })
      .then((res) => {
        this.setState({ reserveList: Object.values(res) });
      });
  }
  date_o = (s) => {
    s = s.slice(0, 10);
    return s;
  };
  render() {
    return (
      <div className="personReserve">
        <p className="title">reserve information</p>
        <div className="reserveBox">
          <div className="boxHead">
            <p>Reserve No</p>
            <p>Date</p>
            <p>Start</p>
            <p>continue</p>
            <p>location</p>
          </div>
          {this.state.reserveList.map((val) => (
            <div className="boxDetail">
              <p>{val.reservation_id}</p>
              <p>{this.date_o(val.reservation_date)}</p>
              <p>{val.reservation_start}</p>
              <p>{val.reservation_time}</p>
              <p>{val.reservation_classroom_id}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default personReserve;
