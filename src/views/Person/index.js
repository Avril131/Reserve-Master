import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import request from "../../api/request";
import Information from "./information";
import PersonReserve from "./personReserve";

export default function Person() {
  let params = useParams();
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = request("get", "/reservation", { userNo: 2020212205271 });
      setData(result.data);
    };
    fetchData();
    console.log(data);
  }, []);
  return (
    <div id="person">
      <Information No={params.no} />
      <PersonReserve No={params.no} />
    </div>
  );
}
