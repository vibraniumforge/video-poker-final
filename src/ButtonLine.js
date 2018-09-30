import React from "react";

export default ({toggleModal, betOne, betAmount, initialDeal, discard, bankroll, isDeal}) => (
  <div>
    <div id="buttons" className="flex-container">
      <button id="help-btn" onClick={toggleModal}>
        Help
      </button>
      <button id="bet-one-btn" onClick={betOne}>
        Bet One
      </button>
      <span id="bet-amount">
        Bet {betAmount} Coin
        {betAmount === 1 ? " " : "s"}
      </span>
      <button
        id="draw-btn"
        className={isDeal ? "draw-btn" : "draw-btn-clicked"}
        onClick={
          isDeal ? initialDeal : discard
        }
      >
        {isDeal ? "Deal" : "Go"}
      </button>
      <span id="bankroll">{bankroll} Coins</span>
    </div>
  </div>
);