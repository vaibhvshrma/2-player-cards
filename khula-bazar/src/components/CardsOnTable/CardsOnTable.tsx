import React from "react";
import { getCardDetails } from "../../data/cards";
import { CardsOnTable as CardsOnTableInterface } from "../../data/interfaces";
import _ from "lodash";

interface Props {
  cards: Array<CardsOnTableInterface>;
}

const crd: CardsOnTableInterface = {
  top: {uuid: "xyz"},
  bottom: {uuid: "as"}
};

const CardsOnTable = (props: Props) => {
  const { cards } = props;
  console.log(cards);
  console.log(
    cards.map((tableCardSet) => {
      return {
        top: getCardDetails(tableCardSet.top),
        bottom: !_.isEmpty(tableCardSet.bottom) ? getCardDetails(tableCardSet.bottom) : {},
      };
    })
  );
  return <div>CardsOnTable</div>;
};

export default CardsOnTable;
