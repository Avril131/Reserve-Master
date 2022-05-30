import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
import Information from "./information";
import PersonReserve from "./personReserve";

export default function Person() {
  let params = useParams();
  return (
    <div id="person">
      <Information No={params.no} />
      <PersonReserve No={params.no} />
    </div>
  );
}
