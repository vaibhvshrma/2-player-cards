import React, { useContext } from "react";
import CardsOnTable from "../CardsOnTable/CardsOnTable.js";
import { store } from "../../data/store.js";
import StateManager from "../../StateManager";
import "./PlayerTable.css";

const PlayerTable = () => {
  const globalState = useContext(store);
  console.log(globalState);

  const stateManager = new StateManager(globalState);

  return (
    <div className="container">
      <div className="mat">
        <div className="opponent"></div>
        <div className="discard-pile"></div>
        <div className="self"><CardsOnTable cards={stateManager.reader.getCardsOnTable("player1")}/></div>
      </div>
    </div>
  );
};

export default PlayerTable;
