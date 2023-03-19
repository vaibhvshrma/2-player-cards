export interface GameState {
  stage: string;
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

export interface PlayerCards {
  inHand: {
    value: Array<Card>;
  };
  onTable: {
    value: { top: Card; bottom: Card | {} }[];
  };
}

export interface Card {
  uuid: string;
}

export interface CardDetails {
  uuid: string;
  suite: string;
  value: number;
}

export interface Game {
  turn: string;
  // TODO: implement cards pulling
  cardsToPull: {};
  trumpSuite: string | undefined;
  handsInfo: {
    handsPlayed: number;
    player1ToMake: number;
    player2ToMake: number;
    player1HasMade: number;
    player2HasMade: number;
  };
}
