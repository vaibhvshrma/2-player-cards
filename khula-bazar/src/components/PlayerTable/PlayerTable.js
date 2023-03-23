import React, { useContext } from "react";
import CardsOnTable from "../CardsOnTable/CardsOnTable.tsx";
import { store } from "../../data/store.js";
import StateManager from "../../StateManager";
import * as Constants from "../../constants";
import "./PlayerTable.css";

const PlayerTable = () => {
  const globalState = useContext(store);
  console.log(globalState);

  const stateManager = new StateManager(globalState);

  return (
    <div className="container">
      <div className="mat">
        <div className="opponent">
        <CardsOnTable
            cards={stateManager.reader.getCardsOnTable(Constants.PLAYER_2_ID)}
          />
        </div>
        <div className="discard-pile"></div>
        <div className="self">
          <CardsOnTable
            cards={stateManager.reader.getCardsOnTable(Constants.PLAYER_1_ID)}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayerTable;
