import React from "react";
import "./Banner.css";

export const Banner = (props) => {
  return (
    <div className="Banner">
      <h1>{props.bannerText}</h1>
    </div>
  );
};
