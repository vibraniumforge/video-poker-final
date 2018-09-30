import React from "react";

const Amount = ({betAmount, baseAmount, amount}) => <td className={betAmount === amount ? "selected" : "not-selected"}>{baseAmount * amount}</td>

const Row = ({hand, baseAmount, betAmount}) => (
  <tr>
    <td>{hand}</td>
    <Amount amount={1} betAmount={betAmount} baseAmount={baseAmount}  />
    <Amount amount={2} betAmount={betAmount} baseAmount={baseAmount}  />
    <Amount amount={3} betAmount={betAmount} baseAmount={baseAmount}  />
    <Amount amount={4} betAmount={betAmount} baseAmount={baseAmount}  />
    <Amount amount={5} betAmount={betAmount} baseAmount={baseAmount}  />
  </tr>
)

// if you wrap it in in a div, no need to also use a Fragment
// this should all be one table
export default ({betAmount}) => (
  <div id="pay-table" className="flex-container">
    <table>
      <thead>
        <tr>
          <th>Hand</th>
          <th>1 Coin</th>
          <th>2 Coins</th>
          <th>3 Coins</th>
          <th>4 Coins</th>
          <th>5 Coins</th>
        </tr>
      </thead>
      <tbody>
        <Row hand={'Royal Flush'} baseAmount={800} betAmount={betAmount} />      
        <Row hand={'Straight Flush'} baseAmount={50} betAmount={betAmount} />      
        <Row hand={'Four of a Kind'} baseAmount={25} betAmount={betAmount} />      
        <Row hand={'Full House'} baseAmount={9} betAmount={betAmount} />      
        <Row hand={'Flush'} baseAmount={6} betAmount={betAmount} />      
        <Row hand={'Straight'} baseAmount={4} betAmount={betAmount} />      
        <Row hand={'Three of a Kind'} baseAmount={2} betAmount={betAmount} />      
        <Row hand={'Two Pair'} baseAmount={2} betAmount={betAmount} />      
        <Row hand={'One Pair - Jacks or Better'} baseAmount={1} betAmount={betAmount} />        
      </tbody>
    </table>
  </div>
);
