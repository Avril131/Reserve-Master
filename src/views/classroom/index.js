import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Back from "../../common/Back/index";
import { Carousel, DatePicker, Select } from "antd";
import Form from "../../common/ClassForm";
import img1 from "../../asset/1.JPG";
import request from "../../api/request";
import { message } from "antd";
import moment from "moment";
import "./index.css";
const { Option } = Select;
const customFormat = (value) => `Reserve Date: ${value.format(dateFormat)}`;
const dateFormat = "YYYY-MM-DD";
function PrefixInteger(num, length) {
  return (Array(length).join("0") + num).slice(-length);
}

export default function Classroom() {
  let params = useParams();
  const [data, setData] = useState({
    0: {
      date: "2022-04-25T16:00:00.000Z",
      status: ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1"],
      reservation_classroom_id: 2,
      week: "二",
    },
    1: {
      date: "2022-04-26T16:00:00.000Z",
      status: ["0", "0", "2", "2", "0", "0", "0", "0", "2", "2", "2", "2"],
      reservation_classroom_id: 2,
      week: "三",
    },
    2: {
      date: "2022-04-27T16:00:00.000Z",
      status: ["0", "2", "2", "2", "0", "0", "0", "0", "0", "0", "0", "0"],
      reservation_classroom_id: 2,
      week: "四",
    },
    3: {
      date: "2022-04-28T16:00:00.000Z",
      status: ["0", "0", "0", "1", "0", "1", "0", "0", "0", "0", "0", "0"],
      reservation_classroom_id: 2,
      week: "五",
    },
    4: {
      date: "2022-04-29T16:00:00.000Z",
      status: ["0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"],
      reservation_classroom_id: 2,
      week: "六",
    },
    5: {
      date: "2022-04-30T16:00:00.000Z",
      status: ["0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1"],
      reservation_classroom_id: 2,
      week: "日",
    },
    6: {
      date: "2022-05-01T16:00:00.000Z",
      status: ["0", "0", "0", "0", "0", "0", "0", "0", "1", "0", "0", "0"],
      reservation_classroom_id: 2,
      week: "一",
    },
  });
  const [day, setDay] = useState("2022-06-01");
  const [start, setStart] = useState("1");
  const [last, setLast] = useState("1");
  const [Modal_show, setModal] = useState(false);

  useEffect(() => {
    request
      .get("/status/byId", {
        classroomId: params.id,
      })
      .then((res) => {
        setData(res);
      });
  }, []);

  const judge = () => {
    //console.log("day:" + day + " start:" + start + " last:" + last);
    /**向后端发送请求 */
    if (!localStorage.getItem("id")) {
      message.error("Please back and Login first");
      return;
    }
    let jug = false;
    request
      .get("/reservation/isAvailable", {
        date: day,
        classroomId: params.id,
        start: start,
        last: last,
      })
      .then((res) => {
        jug = true;
        if (res == "ok") {
          setModal(true);
          message.success("The time period of your choice can be reserved");
          return;
        } else {
          message.error("The time period you selected is occupied");
          return;
        }
      });
  };
  const reserve = () => {
    //console.log("day:" + day + " start:" + start + " last:" + last);
    /**向后端发送请求 */

    const jud = request
      .post(
        "/reservation/direct",
        {
          date: day,
          classroomId: params.id,
          userId: localStorage.getItem("id"),
          start: start,
          last: last,
        },
        "form"
      )
      .then((res) => {
        console.log(res);
        if (res == "预约成功") {
          setModal(false);
          message.success("Reserse success");
          const date = request
            .get("/status/byId", {
              classroomId: params.id,
            })
            .then((res) => {
              setData(res);
            });
        }
      });
  };

  const onChange = (_date, dateString) => {
    const e = dateString.slice(14);
    setDay(e);
  };

  const closeModal = () => {
    setModal(false);
  };
  return (
    <div id="classroom">
      <div className="head">
        <p className="title">This is Classroom: {PrefixInteger(params.id, 5)}</p>
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
        <div style={{ height: "250px" }}>
          <p className="detail_title">Location of the classroom</p>
          <p className="detail_body">{params.location}</p>
          <p className="detail_title">Details of the classroom</p>
          <p className="detail_body">{params.detail}</p>
        </div>
        <Form
          mon={data[6].status}
          tue={data[0].status}
          wed={data[1].status}
          thu={data[2].status}
          fri={data[3].status}
          sat={data[4].status}
          sun={data[5].status}
        />
        <div id="choose_box">
          <div style={{ display: "flex" }}>
            <div id="choose_day">
              <p>Choose Day</p>
              <DatePicker defaultValue={moment("2022-06-01", dateFormat)} format={customFormat} onChange={onChange} />
            </div>
            <div id="choose_start">
              <p>Start</p>
              <Select onChange={setStart} defaultValue={start} key={start} style={{ width: "80px" }}>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
                <Option value="5">5</Option>
                <Option value="6">6</Option>
                <Option value="7">7</Option>
                <Option value="8">8</Option>
                <Option value="9">9</Option>
                <Option value="10">10</Option>
                <Option value="11">11</Option>
                <Option value="12">12</Option>
              </Select>
            </div>
            <div id="choose_last">
              <p>continue</p>
              <Select onChange={setLast} defaultValue={last} key={last} style={{ width: "80px" }}>
                <Option value="1">1</Option>
                <Option value="2" disabled={start > 11 ? true : false}>
                  2
                </Option>
                <Option value="3" disabled={start > 10 ? true : false}>
                  3
                </Option>
                <Option value="4" disabled={start > 9 ? true : false}>
                  4
                </Option>
                <Option value="5" disabled={start > 8 ? true : false}>
                  5
                </Option>
                <Option value="6" disabled={start > 7 ? true : false}>
                  6
                </Option>
                <Option value="7" disabled={start > 6 ? true : false}>
                  7
                </Option>
                <Option value="8" disabled={start > 5 ? true : false}>
                  8
                </Option>
                <Option value="9" disabled={start > 4 ? true : false}>
                  9
                </Option>
                <Option value="10" disabled={start > 3 ? true : false}>
                  10
                </Option>
                <Option value="11" disabled={start > 2 ? true : false}>
                  11
                </Option>
                <Option value="12" disabled={start > "1" ? true : false}>
                  12
                </Option>
              </Select>
            </div>
          </div>

          <button onClick={() => judge()}>
            {" "}
            <span>Reserve </span>{" "}
          </button>
        </div>
      </div>
      <div className="Modal" style={{ display: Modal_show ? "flex" : "none" }}>
        <div className="black" onClick={closeModal}></div>
        <div className="box">
          <p className="title">Are you sure you want to make an appointment</p>
          <div className="but" onClick={() => reserve()}>
            YES
          </div>
          <div className="but" onClick={closeModal}>
            NO
          </div>
        </div>
      </div>
    </div>
  );
}
