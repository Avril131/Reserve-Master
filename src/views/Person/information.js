import React, { Component, ComponentType } from "react";
import Back from "../../common/Back/index";
import name_modify from "../../asset/name_Modify.png";

class information extends React.Component {
  constructor(props) {
    super(props); //调用父类构造函数
    this.state = {
      img: "",
      name: "balala",
    };
    //直接用state里的值 ： this.state
    //改变state里的值 : this.setState({ })
  }
  componentDidMount = () => {
    this.setState({
        name:"Avril",
        img:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.doubanio.com%2Fview%2Fgroup_topic%2Fl%2Fpublic%2Fp445502596.jpg&refer=http%3A%2F%2Fimg9.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654241557&t=50fa6219ef63f7d3142a360b6c47f216"
    })
  };
  render() {
    return (
      <div>
        <div className="head">
          <Back />
        </div>
        <div id="detail">
          <img src={this.state.img} className="user_photo"></img>
          <div className="nameBox">
            <p>{this.state.name}</p>
            <a>
              <img src={name_modify} alt="change your name" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default information;
