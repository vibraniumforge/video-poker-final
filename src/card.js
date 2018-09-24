import React from "react";

function Card(props) {
  return (
    <div className="card">
      <h1>
        <span className={props.card.suit}>{props.card.icon}</span>
      </h1>
      <h1>
        <span className={props.card.suit}>{props.card.image}</span>
      </h1>
      <br />
      <button
        type="button"
        className="discard-btn"
        onClick={() => props.discardToggle(props.card.isChecked)}
      >
        Discard
      </button>
    </div>
  );
}

export default Card;
