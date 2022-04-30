import React, { Component } from "react";
import "./index.css";

class Form extends Component {
  
    state = {
      sta: this.props.sta,
    };

  render() {
    return (
      <div id="classForm">
        {this.state.sta.map((ele, index) => {
          return (
            <div key={index} className={ele === 0 ? "b_form" : "r_form"}></div>
          );
        })}
      </div>
    );
  }
}

export default Form;
