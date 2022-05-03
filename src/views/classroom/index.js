import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Back from "../../common/Back/index";
import { Carousel } from "antd";
import img1 from "../../asset/1.JPG";
import "./index.css";
import request from "../../api/request";

export default function Classroom() {
  let params = useParams();
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = request("get", "/classroom/all");
      setData(result.data);
      console.log(data);
    };
    fetchData();
    console.log("执行了");
  }, []);
  return (
    <div id="classroom">
      <div className="head">
        <p className="title">This is Classroom: 勤园6-102</p>
        <Back />
      </div>

      <Carousel autoplay style={{ width: "1200px", height: "300px" }}>
        <div className="photo">
          <img src={img1}></img>
        </div>
        <div className="photo">
          <img src={img1}></img>
        </div>
        <div className="photo">
          <img src={img1}></img>
        </div>
        <div className="photo">
          <img src={img1}></img>
        </div>
      </Carousel>
      <div className="down">
        <div>
          <p className="detail_title">Details of the classroom</p>
          <p className="detail_body">
            Each box contains 1 Cryptid. After purchase, animal species or animal traits will be obtained randomly. We
            will randomly select buyers in batches according to the procedures to reveal the complete information. Then
            the artists began to create. After the creation , NFT will bbbbbbbbb这是获取的id:{params.id}
          </p>
        </div>
      </div>
    </div>
  );
}
