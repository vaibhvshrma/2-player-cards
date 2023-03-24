import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
import { Card as CardInterface, CardDetails, SuiteType } from "./interfaces";
import { Suites, SuitesWithValue7Card, Values } from "../constants";
import { GameError } from "../exceptions";

export class Card {
  uuid: string;
  details: CardDetails;
  constructor(card: CardInterface) {
    this.uuid = card.uuid;
    this.details = getCardDetails(card);
  }

  getImagePath = () => {
    return `/img/cards/${this.details?.suite}_${this.details?.value}.png`;
  };
}

const createCards = () => {
  const cardsMap: Map<string, CardDetails> = new Map<string, CardDetails>();
  const uuids: Array<string> = [];
  const cardsMap2: { [char: string]: CardDetails } = {};

  _.values(Suites).forEach((suite: SuiteType) => {
    for (let cardValue of _.values(Values)) {
      if (!SuitesWithValue7Card.includes(suite) && cardValue === Values.V7) {
        continue;
      }
      const uuid = uuidv4();
      cardsMap2[uuid] = {
        uuid,
        suite,
        value: cardValue,
      };
      uuids.push(uuid);
    }
  });

  console.log(cardsMap);
  // const cards = new Proxy(cardsMap, {
  //   get: (target, key): CardDetails => {
  //     key = key.toString();
  //     return target.has(key)
  //       ? target.get(key)
  //       : ({
  //           // This should never get returned since we throw an error if uuid is not found
  //           uuid: "",
  //           suite: Suites.HEARTS,
  //           value: 0,
  //         } as CardDetails);
  //   },
  //   has: (target, key) => target.has(key.toString()),
  // });

  return { uuids, cardsMap2 };
};

const { uuids: cardUuids, cardsMap2: cardsDetails } = createCards();

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

const getCardDetails = (card: CardInterface) => {
  if (!_.has(cardsDetails, card.uuid)) {
    throw new GameError(`Card with uuid ${card.uuid} was not found`);
  }
  return _.get(cardsDetails, card.uuid, {
    // This should never get returned since we throw an error if uuid is not found
    uuid: "",
    suite: Suites.HEARTS,
    value: 0,
  } as CardDetails);
};

export {
  createCards,
  distributeCards,
  getCardDetails,
  cardsDetails,
  cardUuids,
};

export default cardsDetails;
