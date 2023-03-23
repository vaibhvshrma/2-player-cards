import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
import { Card, CardDetails } from "./interfaces";
import { Suites, SuitesWithValue7Card, Values } from "../constants";
import {GameError} from "../exceptions";

class Cards {
  constructor() {}
}
const createCards = () => {
  const cards: Map<string, CardDetails> = new Map<string, CardDetails>();
  const uuids: Array<string> = [];

  _.values(Suites).forEach((suite: string) => {
    for (let cardValue of _.values(Values)) {
      if (!SuitesWithValue7Card.includes(suite) && cardValue === Values.V7) {
        continue;
      }
      const uuid = uuidv4();
      cards.set(uuid, {
        uuid,
        suite,
        value: cardValue,
      });
      uuids.push(uuid);
    }
  });

  return { uuids, cards };
};

const { uuids: cardUuids, cards: cardsDetails } = createCards();

const shuffle = (array: Array<any>) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const distributeCards = () => {
  shuffle(cardUuids);
  const player1Cards = cardUuids.slice(0, 15);
  const player2Cards = cardUuids.slice(15);

  return [player1Cards, player2Cards];
};

const getCardDetails = (card: Card) => {
  if (!cardsDetails.has(card.uuid)) {
    throw new GameError(`Card with uuid ${card.uuid} was not found`);
  }
  return cardsDetails.get(card.uuid);
};

export { createCards, distributeCards, getCardDetails, cardsDetails, cardUuids };

export default cardsDetails;
