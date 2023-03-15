import { GameState, Player } from "../data/gamestate";
import * as Constants from "../constants";

export interface GlobalState {
  store: GameState;
  dispatch: () => void;
}

class StateReader {
  store: GameState;
  constructor(globalState: GlobalState) {
    this.store = globalState.store;
  }

  getPlayer = (playerId: string) => {
    return playerId === Constants.PLAYER_1_ID
      ? this.store.player1
      : this.store.player2;
  };
  getPlayer1 = () => this.getPlayer(Constants.PLAYER_1_ID);
  getPlayer2 = () => this.getPlayer(Constants.PLAYER_2_ID);

  getCards = (playerId: string, inHand: boolean) => {
    const player: Player = this.getPlayer(playerId);
    return inHand
      ? [...player.cards.inHand.value]
      : [...player.cards.onTable.value];
  };
  getCardsInHand = (playerId: string) =>
    this.getCards(playerId, true);
  getCardsOnTable = (playerId: string) =>
    this.getCards(playerId, false);
}

export default StateReader;
