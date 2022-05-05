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
    const a = [[]]
    const result = request("get", "/classroom/all");
    this.setState({
      reserveList: result.data,
    });
    console.log(result.data);
  };
  render() {
    return (
      <div id="personReserve">
        <p className="title">reserve information</p>
        <div id="reserveBox">
          <div id="boxHead">
            <p>Reserve No</p>
            <p>Date</p>
            <p>Start</p>
            <p>continue</p>
            <p>location</p>
          </div>
          <div className="boxDetail">
            <p>1</p>
            <p>2022.5.4</p>
            <p>第4节</p>
            <p>3节</p>
            <p>勤6-201</p>
          </div>
          <div className="boxDetail">
            <p>1</p>
            <p>2022.5.4</p>
            <p>第4节</p>
            <p>3节</p>
            <p>勤6-201</p>
          </div>
          <div className="boxDetail">
            <p>1</p>
            <p>2022.5.4</p>
            <p>第4节</p>
            <p>3节</p>
            <p>勤6-201</p>
          </div>
        </div>
      </div>
    );
  }
}
export default personReserve;
