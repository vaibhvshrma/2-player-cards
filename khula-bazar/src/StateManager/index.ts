import StateReader from "./StateReader";
import { GameState, GlobalState } from "../data/interfaces";

class StateManager {
  globalState: GlobalState;
  reader: StateReader;

  constructor(globalState: GlobalState) {
    this.globalState = globalState;
    this.reader = new StateReader(globalState);
  }
}

export default StateManager;
