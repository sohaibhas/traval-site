import React from "react";
import "./Selectimg.css";



const Selectimg = (props) => {
  return (
    <div className="select-location">
      <img src={props.bgImg} alt="/" />
      <div className="overlay">
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Selectimg;
