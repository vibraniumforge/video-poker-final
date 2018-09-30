import React from "react";

// make your button reflect the toggle you built. it should change text

export default ({suit, icon, image, discard, discardToggle}) => (
  <div className="card">
    <h1>
      <span className={suit}>{icon}</span>
    </h1>
    <h1>
      <span className={suit}>{image}</span>
    </h1>
    <br />
    <button
      type="button"
      className="discard-btn"
      onClick={discardToggle}
    >
      {discard ? 'Keep' : 'Discard'}
    </button>
  </div>
);
