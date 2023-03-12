import React, { useContext } from "react";
import { store } from "../../data/store.js";
import "./PlayerTable.css";

const PlayerTable = () => {
  const globalState = useContext(store);
  console.log(globalState);

  return (
    <div className="container">
      <div className="mat">
        <div className="opponent"></div>
        <div className="self"></div>
      </div>
    </div>
  );
};

export default PlayerTable;
