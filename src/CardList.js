import React from "react";
import CardListItem from "./CardListItem";

const CardList = ({ cards }) => (
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
    {cards.map((card) => (
      <CardListItem title={card.name} subtitle={card.name} />
    ))}
  </div>
);

export default CardList;
