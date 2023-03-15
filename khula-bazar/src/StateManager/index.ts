import StateReader from "./StateReader";
import { GameState } from "../data/gamestate";

export interface GlobalState {
  state: GameState;
  dispatch: () => void;
}

class StateManager {
  globalState: GlobalState;
  reader: StateReader;

  constructor(globalState: GlobalState) {
    this.globalState = globalState;
    this.reader = new StateReader(globalState);
  }
}

export default StateManager;
