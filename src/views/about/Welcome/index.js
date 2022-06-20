import React from "react";
import "./index.css";
import p1 from "../../../asset/Homepage/1.png";
import p2 from "../../../asset/Homepage/2.png";
import p6 from "../../../asset/Homepage/3.png";
import p4 from "../../../asset/Homepage/4.png";
import p5 from "../../../asset/Homepage/5.png";
import p3 from "../../../asset/Homepage/6.png";
import p7 from "../../../asset/Homepage/7.png";
import p8 from "../../../asset/Homepage/8.png";
import p9 from "../../../asset/Homepage/9.png";
import p1_back from "../../../asset/Homepage/1_back.jpg";
import p2_back from "../../../asset/Homepage/2_back.jpg";
import p6_back from "../../../asset/Homepage/3_back.jpg";
import p4_back from "../../../asset/Homepage/4_back.jpg";
import p5_back from "../../../asset/Homepage/5_back.jpg";
import p3_back from "../../../asset/Homepage/6_back.jpg";
import p7_back from "../../../asset/Homepage/7_back.jpg";
import p8_back from "../../../asset/Homepage/8_back.jpg";
import p9_back from "../../../asset/Homepage/9_back.jpg";
import Navbar from "../../../common/Navbar";
import { PageHeader } from "antd";
import Body from "./body";

function Welcome() {
  return (
    <div>
      <Navbar />
      <div className="welcome">
        <PageHeader
          className="page_header"
          title={<p className="page_title">Reserve Master</p>}
          subTitle="An a application used to reserve the classroom of HZNU"
        />
        <div className="up">
          <div className="up_left">
            <h1>Welcome to Reserve Master</h1>
            <Body />
          </div>
          <div className="welcome_imgGroup">
            <div className="img_card">
              <div>
                <img className="front" src={p1}></img>
                <img className="back" src={p1_back}></img>
              </div>
            </div>
            <div className="img_card">
              <div>
                <img className="front" src={p2}></img>
                <img className="back" src={p2_back}></img>
              </div>
            </div>
            <div className="img_card">
              <div>
                <img className="front" src={p3}></img>
                <img className="back" src={p3_back}></img>
              </div>
            </div>
            <div className="img_card">
              <div>
                <img className="front" src={p4}></img>
                <img className="back" src={p4_back}></img>
              </div>
            </div>
            <div className="img_card">
              <div>
                <img className="front" src={p5}></img>
                <img className="back" src={p5_back}></img>
              </div>
            </div>
            <div className="img_card">
              <div>
                <img className="front" src={p6}></img>
                <img className="back" src={p6_back}></img>
              </div>
            </div>
            <div className="img_card">
              <div>
                <img className="front" src={p7}></img>
                <img className="back" src={p7_back}></img>
              </div>
            </div>
            <div className="img_card">
              <div>
                <img className="front" src={p8}></img>
                <img className="back" src={p8_back}></img>
              </div>
            </div>
            <div className="img_card">
              <div>
                <img className="front" src={p9}></img>
                <img className="back" src={p9_back}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
