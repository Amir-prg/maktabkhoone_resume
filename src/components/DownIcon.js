import React, { Component } from "react";

const DownIcon = (props) => {
  return (
    <div>
      <img
        src={props.icon}
        style={{
          minWidth: "30px",
          display: "flex",
          flexDirection: "row",
          transform: "translateY(220px)",
          alignContent: "center",
          alignItems: "center",
          margin: "auto", 
        }}
      />
    </div>
  );
};
export default DownIcon;
