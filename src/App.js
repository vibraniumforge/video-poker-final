import React from "react";
import CasinoName from "./CasinoName.js";
import PayTable from "./PayTable.js";
import HelpModal from "./HelpModal.js";
import * as cardHelpers from "./helpers/cardHelpers.js";
import * as cardLogic from "./helpers/cardLogic.js";
import Card from "./card.js";
import ButtonLine from "./ButtonLine.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deck: [],
      hand: [],
      betAmount: 1,
      bankroll: 100,
      showModal: false,
      isDeal: true
    };

    this.betOne = this.betOne.bind(this);
    this.dealFirstFiveCards = this.dealFirstFiveCards.bind(this);
    this.discardToggle = this.discardToggle.bind(this);
    this.discard = this.discard.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  betOne() {
    this.state.betAmount < 5
      ? this.setState({ betAmount: this.state.betAmount + 1 })
      : this.setState({ betAmount: 1 });
  }

  dealFirstFiveCards() {
    let deck = cardHelpers.generateDeck();
    cardHelpers.shuffleDeck(deck);
    this.setState({ deck: deck, isDeal: true });
    let hand = deck.slice(0, 5);
    cardHelpers.handSorter(hand);
    this.setState({
      deck,
      hand,
      isDeal: false
    });
  }

  discardToggle(cardIndex) {
    const hand = this.state.hand.map((card, index) => {
      if (cardIndex === index) {
        return { ...card, isChecked: !card.isChecked };
      } else {
        return card;
      }
    });
    this.setState({ hand, pokerResult: "", winAmount: "" });
  }

  discard() {
    let deck = this.state.deck;
    let newHand = this.state.hand.filter(card => {
      return card.isChecked === false;
    });
    let cardsNeeded = 5 - newHand.length;
    for (let i = 0; i < cardsNeeded; i++) {
      if (cardsNeeded) {
        newHand = newHand.concat(deck.slice(5 + i, 5 + i + 1));
      }
    }
    cardHelpers.handSorter(newHand);
    this.setState({
      isDeal: true,
      hand: newHand,
      pokerResult: cardLogic.cardLogic(this.state.hand)
    });
  }

  toggleModal(prevState) {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    return (
      <React.Fragment>
        <CasinoName />
        <hr className="horizontal-line" />
        <div id="top" className="flex-container">
          <div id="pay-table">
            <PayTable betAmount={this.state.betAmount} />
          </div>
          <div id="hand-result">
            {!!this.state.hand.length && cardLogic.cardLogic(this.state.hand)}
          </div>

          <hr className="horizontal-line" />
          <HelpModal
            showModal={this.state.showModal}
            isOpen={this.toggleModal}
            onRequestClose={this.toggleModal}
          />
          <div id="the-hand" className="flex-contianer">
            {this.state.hand.map((card, cardIndex) => (
              <Card
                key={cardIndex}
                card={card}
                discardToggle={() => this.discardToggle(cardIndex)}
              />
            ))}
          </div>
        </div>
        <hr className="horizontal-line" />

        <ButtonLine
          toggleModal={this.toggleModal}
          betOne={this.betOne}
          dealFirstFiveCards={this.dealFirstFiveCards}
          discard={this.discard}
          betAmount={this.state.betAmount}
          bankroll={this.state.bankroll}
          isDeal={this.state.isDeal}
        />
      </React.Fragment>
    );
  }
}

export default App;
