import React from "react";
import Modal from "react-modal";

class HelpModal extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Modal
          className="modal"
          appElement={document.getElementById("app")}
          isOpen={this.props.showModal}
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
            onClick={this.props.onRequestClose}
          >
            Close Modal
          </button>
        </Modal>
      </React.Fragment>
    );
  }
}
export default HelpModal;
