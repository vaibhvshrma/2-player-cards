import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
import { CardDetails } from "./interfaces";
import { Suites, Values } from "../constants";

const createCards = () => {
  const cards: CardDetails[] = [];
  const uuids: Array<string> = [];

  _.values(Suites).forEach((suite: string) => {
    _.values(Values).forEach((cardValue: number) => {
      const uuid = uuidv4();
      cards.push({
        uuid,
        suite,
        value: cardValue,
      });
      uuids.push(uuid);
    });
  });

  return {uuids, cards};
};

const {uuids: cardUuids, cards: cardDetails} = createCards();

const shuffle = (array: Array<any>) => {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const distributeCards = () => {
  shuffle(cardUuids);
  const player1Cards = cardUuids.slice(0, 15);
  const player2Cards = cardUuids.slice(15);

  return [player1Cards, player2Cards];
}

export { createCards, distributeCards, cardDetails, cardUuids };

export default cardDetails;
