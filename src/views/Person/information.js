import React from "react";
import Back from "../../common/Back/index";
import name_modify from "../../asset/name_Modify.png";
import request from "../../api/request";
import { message } from "antd";

class information extends React.Component {
  constructor(props) {
    super(props); //调用父类构造函数
    this.state = {
      img: "",
      name: "balala",
      new_name: "132",
      Modal_show: false,
    };
    //直接用state里的值 ： this.state
    //改变state里的值 : this.setState({ })
  }
  componentDidMount = () => {
    this.setState({
      name: localStorage.getItem("name"),
      img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.doubanio.com%2Fview%2Fgroup_topic%2Fl%2Fpublic%2Fp445502596.jpg&refer=http%3A%2F%2Fimg9.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654241557&t=50fa6219ef63f7d3142a360b6c47f216",
    });
  };
  closeModal = () => {
    this.setState({ Modal_show: false });
  };
  updateProfile = async () => {
    const name = this.state.new_name;
    if (name === "") {
      message.error("Input name please");
      return;
    }
    let resName = true;
    if (name !== this.state.name) {
      resName = false;
      /**请求修改名字 */
      resName = request
        .post(
          "/user",
          {
            userId: localStorage.getItem("id"),
            newName: name,
          },
          "form"
        )
        .then((res) => {
          localStorage.setItem("name", name);
        });
      if (!resName) return;
      resName = true;
    }
    if (resName) {
      message.success("Update profile success");
      this.setState({ Modal_show: false, name: this.state.new_name });
      return;
    }
    message.error("Something Wrong happened, try it later please");
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
            <a onClick={() => this.setState({ Modal_show: true })}>
              <img src={name_modify} alt="change your name" />
            </a>
          </div>
        </div>
        <div className="Modal" style={{ display: this.state.Modal_show ? "flex" : "none" }}>
          <div className="black" onClick={this.closeModal}></div>
          <div className="box">
            <p className="title">change your name</p>
            <input
              className="input"
              type="text"
              placeholder={this.state.name}
              onChange={(e) => this.setState({ new_name: e.target.value })}
            />
            <div className="but" onClick={this.updateProfile}>
              Update name
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default information;
