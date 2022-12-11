import React from "react";

export const DisplayIPComponent = (props) => {
  const { type, ip } = props;

  return (
    <>
      <span>
        <b>{`IP format ${type}:  `}</b>
        {ip}
      </span>
    </>
  );
};
