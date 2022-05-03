import React, { Component } from "react";
import "./index.css";
import { Carousel, PageHeader } from "antd";
import img1 from "../../asset/1.JPG";
import Form from "../../common/ClassForm";
import { Link } from "react-router-dom";
import Navbar from "../../common/Navbar";

class home extends Component {
  render() {
    const id = "6102";
    return (
      <div>
        <Navbar />
        <div id="home">
          <PageHeader
            className="page_header"
            title={<p className="page_title">Reserve Master</p>}
            subTitle="An a application used to reserve the classroom of HZNU"
          />
          <Carousel autoplay style={{ width: "600rem" }}>
            <div className="carousel_part">
              <img src={img1}></img>
            </div>
            <div className="carousel_part">
              <img src={img1}></img>
            </div>
            <div className="carousel_part">
              <img src={img1}></img>
            </div>
            <div className="carousel_part">
              <img src={img1}></img>
            </div>
          </Carousel>
          <Form sta={[1, 1, 0, 1, 0]} />
          <Link to={"/classroom/" + id}>123</Link>
        </div>
      </div>
    );
  }
}
export default home;
