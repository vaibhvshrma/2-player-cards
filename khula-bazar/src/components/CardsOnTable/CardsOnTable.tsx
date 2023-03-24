import React from "react";
import { Card, getCardDetails } from "../../data/cards";
import { CardsOnTable as CardsOnTableInterface } from "../../data/interfaces";
import _ from "lodash";
import "./CardsOnTable.css";
import classNames from "classnames";

interface Props {
  cards: Array<CardsOnTableInterface>;
}

const CardStack = (props: any) => {
  const { top, bottom } = props;

  return (
    <div className="card-stack">
      <div
        className={classNames("card table-card top-card", {
          "has-bottom-card": !!bottom,
        })}
      >
        <img className="card-img thumbnail" src={new Card(top).getImagePath()}></img>
      </div>
      {/* {bottom && (
        <div className="card table-card bottom-card">
          <img className="card-img" src={new Card(bottom).getImagePath()}></img>
        </div>
      )} */}
    </div>
  );
};

const CardsOnTable = (props: Props) => {
  const { cards } = props;
  console.log(cards);
  console.log(
    cards.map((tableCardSet) => {
      return {
        top: getCardDetails(tableCardSet.top),
        bottom: !_.isEmpty(tableCardSet.bottom)
          ? getCardDetails(tableCardSet.bottom)
          : {},
      };
    })
  );
  return (
    <>
      <div className="cards-on-table">
        {cards.map((tableCardSet) => (
          <CardStack
            key={tableCardSet.top.uuid}
            top={tableCardSet.top}
            bottom={tableCardSet?.bottom}
          />
        ))}
      </div>
    </>
  );
};

export default CardsOnTable;
