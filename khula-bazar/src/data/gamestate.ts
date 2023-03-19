import { CardDetails, GameState } from "./interfaces";
import { distributeCards } from "./cards";

const [player1Cards, player2Cards] = distributeCards();

const layoutCardsForPlayer = (cards: CardDetails[]) => {
  // Distribute 15 cards in between table faceUp, faceDown and inHand
  const faceUp = [], faceDown = [], inHand = [];

  cards.forEach((details, idx) => {

  })

  return {}
}

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
      player2HasMade: 0,
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
