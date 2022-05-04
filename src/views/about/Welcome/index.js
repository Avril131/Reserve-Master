import React from "react";
import "./index.css";
import p1 from "../../../asset/Homepage/1.jpg";
import p2 from "../../../asset/Homepage/2.jpg";
import p3 from "../../../asset/Homepage/3.jpg";
import p4 from "../../../asset/Homepage/4.jpg";
import p5 from "../../../asset/Homepage/5.jpg";
import p6 from "../../../asset/Homepage/6.jpg";
import p7 from "../../../asset/Homepage/7.jpg";
import p8 from "../../../asset/Homepage/8.jpg";
import p9 from "../../../asset/Homepage/9.jpg";
import Navbar from "../../../common/Navbar";
import { PageHeader } from "antd";

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
            <p>
              We'are a team full of imagination.
              <br />
              Ranking is not in any order————
              <br />
              <br /> Avril-- Reserve-Master-frontend <br />
              Carry-- Reserve-Master-frontend
              <br />
              Dwq7-- Reserve-Master-node_Service
            </p>
          </div>
          <div className="welcome_imggroup">
            <img src={p1}></img>
            <img src={p2}></img>
            <img src={p3}></img>
            <img src={p4}></img>
            <img src={p5}></img>
            <img src={p6}></img>
            <img src={p7}></img>
            <img src={p8}></img>
            <img src={p9}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
