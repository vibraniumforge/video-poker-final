import React from "react";
import Modal from "react-modal";

// react fragments are only necessary when you need to wrap adjacent elements
export default ({showModal, onRequestClose}) =>  (
  <Modal
    className="modal"
    appElement={document.getElementById("app")}
    isOpen={showModal}
    ariaHideApp={false}
  >
    <p>
      To play, choose a value between 1 and 5 with the Bet One button.
      Then press "Deal" to deal a hand. You have the opportunity to redraw
      up to fice cards onc time only. Winners are paid according to the
      pay table. If you get less than a pair of Jacks, you lose.
    </p>
    <button
      type="button"
      id="close-modal-button "
      onClick={onRequestClose}
    >
      Close Modal
    </button>
  </Modal>
);
