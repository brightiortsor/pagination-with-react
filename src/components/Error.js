import React from "react";
import ErrorImg from "../images/error.png";
import "../App.css";

export default function Error() {
  return (
    <div className="error">
      <img src={ErrorImg} alt="" />
    </div>
  );
}
