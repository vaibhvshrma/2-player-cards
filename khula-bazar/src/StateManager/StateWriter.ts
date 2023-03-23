import { GlobalState } from "../data/interfaces";


class StateWriter {
  dispatch;
  constructor(globalState: GlobalState) {
    this.dispatch = globalState.dispatch;
  }

}

export default StateWriter;
