import React from "react";
import { Link } from "react-router-dom";
import { img_group } from "../../asset/classroom/img";
import "./index.css";

class ClassroomCard extends React.Component {
  PrefixInteger = (num, length) => {
    return (Array(length).join("0") + num).slice(-length);
  };
  render() {
    return (
      <div className="card">
        <Link to={"/classroom/" + this.props.id + "/" + this.props.location + "/" + this.props.detail}>
          <img className="pic" src={img_group["p" + (this.props.id % 4)]} alt={this.props.id} />
        </Link>
        <Link
          to={"/classroom/" + this.props.id + "/" + this.props.location + "/" + this.props.detail}
          style={{
            width: "64rem",
            height: "22rem",
            marginTop: "20rem",
          }}
        >
          <div className="title">#{this.PrefixInteger(this.props.id, 5)}</div>
        </Link>
        <p className="location">Location: {this.props.location}</p>
        <p className="detail">Detail: {this.props.detail}</p>
        <Link to={"/classroom/" + this.props.id + "/" + this.props.location + "/" + this.props.detail} className="but">
          <button>
            {" "}
            <span>Go</span>{" "}
          </button>
        </Link>
      </div>
    );
  }
}
export default ClassroomCard;
