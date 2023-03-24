export type GameStageType =
  | "trump_selection"
  | "card_pulling"
  | "card_play"
  | "result";

export interface GameState {
  stage: GameStageType;
  game: Game;
  player1: Player;
  player2: Player;
  discardPile: {
    player1Card: Card | {};
    player2Card: Card | {};
  };
}

export interface Player {
  handsToMake: number;
  handsMade: number;
  cards: PlayerCards;
}

export interface CardsOnTable {
  top: Card;
  bottom?: Card;
}

export interface PlayerCards {
  inHand: {
    value: Array<Card>;
  };
  onTable: {
    value: Array<CardsOnTable>;
  };
}

export interface Card {
  uuid: string;
}

export type SuiteType = "HEARTS" | "DIAMONDS" | "CLUBS" | "SPADES";

export interface CardDetails {
  uuid: string;
  suite: SuiteType;
  value: number;
}

export interface Game {
  turn: string;
  // TODO: implement cards pulling
  cardsToPull: {};
  trumpSuite?: SuiteType;
  handsInfo: {
    handsPlayed: number;
    player1ToMake: number;
    player2ToMake: number;
    player1HasMade: number;
    player2HasMade: number;
  };
}

export interface GlobalState {
  state: GameState;
  dispatch: () => void;
}
