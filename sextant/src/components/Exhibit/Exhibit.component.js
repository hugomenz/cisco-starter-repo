import React from "react";
import { DisplayIP } from "../DisplayIP/DisplayIP.container";
import "./Exhibit.css";

export const Exhibit = (props) => {
  const ipv4 = "IPv4";
  const ipv6 = "IPv6";

  const { name } = props;

  return (
    <div className="Exhibit">
      <h2>{name}</h2>
      <div className="ip-text-container">
        <DisplayIP type={ipv4} />
        <DisplayIP type={ipv6} />
      </div>
    </div>
  );
};
