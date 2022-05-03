import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import back_img from "../../asset/back.png";

function Back(props) {
  const navigate = new useNavigate();

  const back = () => {
    navigate(-1);
  };

  return (
    <div className="page-Back">
      <a type="button" onClick={back} className="all">
        <img src={back_img} />
        <p>Back</p>
      </a>
    </div>
  );
}

export default Back;
