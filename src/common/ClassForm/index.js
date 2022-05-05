import React, { Component } from "react";
import "./index.css";

class Form extends Component {
  
    state = {
      mon: this.props.mon,
      tue: this.props.tue,
      wed: this.props.wed,
      thu: this.props.thu,
      fri: this.props.fri,
      sat: this.props.sat,
      sun: this.props.sun,
    };

  render() {
    return (
      <div id="classForm">
        {this.state.mon.map((ele, index) => {
          return (
            <div key={index} className={ele === '0' ? "b_form" : "r_form"}></div>
          );
        })}
        {this.state.tue.map((ele, index) => {
          return (
            <div key={index} className={ele === '0' ? "b_form" : "r_form"}></div>
          );
        })}
        {this.state.wed.map((ele, index) => {
          return (
            <div key={index} className={ele === '0' ? "b_form" : "r_form"}></div>
          );
        })}
        {this.state.thu.map((ele, index) => {
          return (
            <div key={index} className={ele === '0' ? "b_form" : "r_form"}></div>
          );
        })}
        {this.state.fri.map((ele, index) => {
          return (
            <div key={index} className={ele === '0' ? "b_form" : "r_form"}></div>
          );
        })}
        {this.state.sat.map((ele, index) => {
          return (
            <div key={index} className={ele === '0' ? "b_form" : "r_form"}></div>
          );
        })}
        {this.state.sun.map((ele, index) => {
          return (
            <div key={index} className={ele === '0' ? "b_form" : "r_form"}></div>
          );
        })}
      </div>
    );
  }
}

export default Form;