import React from "react";
import { getIpData } from "../api";
import { DisplayIPComponent } from "./DisplayIP.component";

export const DisplayIP = (props) => {
  const { type } = props;

  const [ip, setIp] = React.useState("");

  React.useEffect(() => {
    getIpData(type).then((response) => {
      setIp(response);
    });
  }, []);

  return (
    <>
      <DisplayIPComponent type={type} ip={ip} />
    </>
  );
};
