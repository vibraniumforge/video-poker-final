import React from "react";
import CasinoName from "./CasinoName.js";
import PayTable from "./PayTable.js";
import HelpModal from "./HelpModal.js";
import CardContainer from "./CardContainer.js";
import ButtonLine from "./ButtonLine.js";
import {generateDeck, shuffleDeck, sortHand} from "./helpers/cardHelpers.js";
import cardLogic from './helpers/cardLogic'


// you have several states which you don't exist in your inital state. 
// all states should be set up initially with a default state.

class App extends React.Component {
  state = {
    deck: [],
    hand: [],
    betAmount: 1,
    bankroll: 100,
    showModal: false,
    isDeal: true,
    winAmount: null
  }
  
  betOne = () => {
    this.setState(prevState => {
      const betAmount = prevState.betAmount < 5 ? prevState.betAmount + 1 : 1
      return {betAmount}
    })
  }

  initialDeal = () => {
    // don't set state multiple times in the same function, it is asynchronous
    // were you removing used cards from the deck? i didn't see you updating that state
    const newDeck = shuffleDeck(generateDeck())
    this.dealCards(5, [], newDeck)
  }

  discardToggle = (discardCard) => {
    const hand = this.state.hand.map(card => {
      if (card === discardCard) {
        return { ...card, discard: !card.discard };
      } else {
        return card;
      }
    });
    this.setState({ hand });
  }

  dealCards = (count, prevHand, prevDeck) => {
    const newCards = prevDeck.slice(0, count)
    const deck = prevDeck.slice(count, prevDeck.length)
    const hand = sortHand([...newCards, ...prevHand])
    this.setState(prevState => ({
      deck,
      hand, 
      isDeal: !prevState.isDeal
    }))
  }

  discard = () => {
    // it looks like you were calling poker logic on the previous hand, not the next state
    const {deck, hand} = this.state
    let newHand = hand.filter(card => !card.discard)
    let cardsNeeded = 5 - newHand.length;
    
    this.dealCards(cardsNeeded, newHand, deck)
  }

  toggleModal(prevState) {
    this.setState(prevState => ({ showModal: !prevState.showModal }))
  }

  render() {
    const {betAmount, hand, showModal, bankroll, isDeal} = this.state
    const showResult = !!hand.length
    console.log(this.state);
    
    return (
      <React.Fragment>
        <CasinoName />
        <hr className="horizontal-line" />
        <div id="top" className="flex-container">
          <PayTable betAmount={betAmount} />
          {showResult && 
            <div id="hand-result">
              {cardLogic(hand)}
            </div>
          }
          <hr className="horizontal-line" />
          <HelpModal
            showModal={showModal}
            isOpen={this.toggleModal}
            onRequestClose={this.toggleModal}
          />
          <CardContainer hand={hand} discardToggle={this.discardToggle} />
        </div>
        <hr className="horizontal-line" />

        <ButtonLine
          toggleModal={this.toggleModal}
          betOne={this.betOne}
          initialDeal={this.initialDeal}
          discard={this.discard}
          betAmount={betAmount}
          bankroll={bankroll}
          isDeal={isDeal}
        />
      </React.Fragment>
    );
  }
}

export default App;
