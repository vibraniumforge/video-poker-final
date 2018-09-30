import React from 'react'
import Card from "./card.js";

// you were passing different arguments into discardToggle at different times

// better to check equality using the card instead of the index

export default ({hand, discardToggle}) => (
  <div id="the-hand" className="flex-container">
  {hand.map((card, cardIndex) => (
    <Card
    key={cardIndex}
    discardToggle={() => discardToggle(card)}
    {...card}
    />
  ))}
  </div>
)
