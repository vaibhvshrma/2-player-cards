import { GameState, Player } from "../data/interfaces";
import * as Constants from "../constants";
import { GlobalState } from ".";

class StateReader {
  state: GameState;
  constructor(globalState: GlobalState) {
    this.state = globalState.state;
  }

  getPlayer = (playerId: string) => {
    return playerId === Constants.PLAYER_1_ID
      ? this.state.player1
      : this.state.player2;
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
