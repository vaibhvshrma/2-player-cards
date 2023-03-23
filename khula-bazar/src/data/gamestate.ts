import { GameState, PlayerCards } from "./interfaces";
import { distributeCards } from "./cards";

const [player1Cards, player2Cards] = distributeCards();

const layoutCardsForPlayer = (cardUuids: string[]) => {
  // Distribute 15 cards in between table faceUp, faceDown and inHand
  if (cardUuids.length !== 15) {
    throw new InitializationError(
      `Required number of cards not present to begin game. Expected 15 found ${cardUuids.length}`
    );
  }
  const playerCards: PlayerCards = {
    inHand: {
      value: [],
    },
    onTable: {
      value: [],
    },
  };

  playerCards.inHand.value = cardUuids.slice(0, 5).map((uuid) => {
    return { uuid };
  });

  for (var idx = 5; idx < 10; idx++) {
    playerCards.onTable.value.push({
      top: { uuid: cardUuids[idx] },
      bottom: { uuid: cardUuids[idx + 5] },
    });
  }

  return playerCards;
};

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
    cards: layoutCardsForPlayer(player1Cards),
  },
  player2: {
    handsToMake: 0,
    handsMade: 0,
    cards: layoutCardsForPlayer(player2Cards),
  },
};

export default state;
