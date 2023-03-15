import React, { useContext } from "react";
import CardsOnTable from "../CardsOnTable/CardsOnTable.js";
import { store } from "../../data/store.js";
import "./PlayerTable.css";

const PlayerTable = () => {
  const globalState = useContext(store);
  console.log(globalState);

  return (
    <div className="container">
      <div className="mat">
        <div className="opponent"></div>
        <div className="discard-pile"></div>
        <div className="self"><CardsOnTable cards={globalState.player1.cards.onTable}/></div>
      </div>
    </div>
  );
};

export default PlayerTable;
