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
  cards: {
    inHand: {
      value: Array<Card>;
    };
    onTable: {
      value: { top: Card; bottom: Card | {} }[];
    };
  };
}

export interface Card {
  uuid: string;
}

export interface Game {}

const state: GameState = {
  stage: "trump_selection", // one of [trump_selection, card_pulling, card_play, result]
  game: {
    turn: "player1",
    cardsToPull: {
      puller: "player1",
      num_cards: 0,
    },
    trumpSuite: "hearts",
    handsInfo: {
      handsPlayed: 0,
      player1ToMake: 0,
      player2ToMake: 0,
      player1HasMade: 0,
      player2ToMade: 0,
    },
  },
  discardPile: {
    player1Card: {},
    player2Card: {},
  },
  player1: {
    handsToMake: 0,
    handsMade: 0,
    cards: {
      inHand: {
        value: [
          {
            uuid: "hash1",
          },
          {
            uuid: "hash2",
          },
        ],
      },
      onTable: {
        value: [
          {
            top: {
              uuid: "hash3",
            },
            bottom: {
              uuid: "hash4",
            },
          },
        ],
      },
    },
  },
  player2: {
    handsToMake: 0,
    handsMade: 0,
    cards: {
      inHand: {
        value: [
          {
            uuid: "hash5",
          },
          {
            uuid: "hash6",
          },
        ],
      },
      onTable: {
        value: [
          {
            top: {
              uuid: "hash7",
            },
            bottom: {
              uuid: "hash8",
            },
          },
          {
            top: {
              uuid: "hash9",
            },
            bottom: {},
          },
        ],
      },
    },
  },
};

export default state;
