import React from "react";
import "./PlayerTable.css";

export default () => {
  return (
    <div className="container">
      <div className="mat">
        <div className="opponent"></div>
        <div className="self"></div>
      </div>
    </div>
  );
};
