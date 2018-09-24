import React from "react";

const payTable = {
  royalFlush: 800,
  straightFlush: 50,
  fourOfAKind: 25,
  fullHouse: 9,
  flush: 6,
  straight: 4,
  threeOfAKind: 3,
  twoPair: 2,
  onePair: 1
};

const coinAmounts = {
  column1: 1,
  column2: 2,
  column3: 3,
  column4: 4,
  column5: 5
};

class PayTable extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="pay-table" className="flex-container">
          <table id="table-one">
            <tbody>
              <tr>
                <td>Hand</td>
              </tr>
              <tr>
                <td>Royal Flush</td>
              </tr>
              <tr>
                <td>Straight Flush</td>
              </tr>
              <tr>
                <td>4 of a Kind</td>
              </tr>
              <tr>
                <td>Full House</td>
              </tr>
              <tr>
                <td>Flush</td>
              </tr>
              <tr>
                <td>Straight</td>
              </tr>
              <tr>
                <td>Three of a Kind</td>
              </tr>
              <tr>
                <td>Two Pair</td>
              </tr>
              <tr>
                <td>One Pair - Jacks or Better</td>
              </tr>
            </tbody>
          </table>
          <table
            id="table-two"
            className={
              this.props.betAmount === coinAmounts.column1
                ? "selected"
                : "not-selected"
            }
          >
            <tbody>
              <tr>
                <td>1 Coin</td>
              </tr>
              <tr>
                <td>{payTable.royalFlush * coinAmounts.column1}</td>
              </tr>
              <tr>
                <td>{payTable.straightFlush * coinAmounts.column1}</td>
              </tr>
              <tr>
                <td>{payTable.fourOfAKind * coinAmounts.column1}</td>
              </tr>
              <tr>
                <td>{payTable.fullHouse * coinAmounts.column1}</td>
              </tr>
              <tr>
                <td>{payTable.flush * coinAmounts.column1}</td>
              </tr>
              <tr>
                <td>{payTable.straight * coinAmounts.column1}</td>
              </tr>
              <tr>
                <td>{payTable.threeOfAKind * coinAmounts.column1}</td>
              </tr>
              <tr>
                <td>{payTable.twoPair * coinAmounts.column1}</td>
              </tr>
              <tr>
                <td>{payTable.onePair * coinAmounts.column1}</td>
              </tr>
            </tbody>
          </table>
          <table
            id="table-three"
            className={this.props.betAmount === 2 ? "selected" : "not-selected"}
          >
            <tbody>
              <tr>
                <td>2 Coins</td>
              </tr>
              <tr>
                <td>{payTable.royalFlush * coinAmounts.column2}</td>
              </tr>
              <tr>
                <td>{payTable.straightFlush * coinAmounts.column2}</td>
              </tr>
              <tr>
                <td>{payTable.fourOfAKind * coinAmounts.column2}</td>
              </tr>
              <tr>
                <td>{payTable.fullHouse * coinAmounts.column2}</td>
              </tr>
              <tr>
                <td>{payTable.flush * coinAmounts.column2}</td>
              </tr>
              <tr>
                <td>{payTable.straight * coinAmounts.column2}</td>
              </tr>
              <tr>
                <td>{payTable.threeOfAKind * coinAmounts.column2}</td>
              </tr>
              <tr>
                <td>{payTable.twoPair * coinAmounts.column2}</td>
              </tr>
              <tr>
                <td>{payTable.onePair * 2}</td>
              </tr>
            </tbody>
          </table>
          <table
            id="table-four"
            className={this.props.betAmount === 3 ? "selected" : "not-selected"}
          >
            <tbody>
              <tr>
                <td>3 Coins</td>
              </tr>
              <tr>
                <td>{payTable.royalFlush * coinAmounts.column3}</td>
              </tr>
              <tr>
                <td>{payTable.straightFlush * coinAmounts.column3}</td>
              </tr>
              <tr>
                <td>{payTable.fourOfAKind * coinAmounts.column3}</td>
              </tr>
              <tr>
                <td>{payTable.fullHouse * coinAmounts.column3}</td>
              </tr>
              <tr>
                <td>{payTable.flush * coinAmounts.column3}</td>
              </tr>
              <tr>
                <td>{payTable.straight * coinAmounts.column3}</td>
              </tr>
              <tr>
                <td>{payTable.threeOfAKind * coinAmounts.column3}</td>
              </tr>
              <tr>
                <td>{payTable.twoPair * coinAmounts.column3}</td>
              </tr>
              <tr>
                <td>{payTable.onePair * coinAmounts.column3}</td>
              </tr>
            </tbody>
          </table>
          <table
            id="table-five"
            className={this.props.betAmount === 4 ? "selected" : "not-selected"}
          >
            <tbody>
              <tr>
                <td>4 Coins</td>
              </tr>
              <tr>
                <td>{payTable.royalFlush * coinAmounts.column4}</td>
              </tr>
              <tr>
                <td>{payTable.straightFlush * coinAmounts.column4}</td>
              </tr>
              <tr>
                <td>{payTable.fourOfAKind * coinAmounts.column4}</td>
              </tr>
              <tr>
                <td>{payTable.fullHouse * coinAmounts.column4}</td>
              </tr>
              <tr>
                <td>{payTable.flush * coinAmounts.column4}</td>
              </tr>
              <tr>
                <td>{payTable.straight * coinAmounts.column4}</td>
              </tr>
              <tr>
                <td>{payTable.threeOfAKind * coinAmounts.column4}</td>
              </tr>
              <tr>
                <td>{payTable.twoPair * coinAmounts.column4}</td>
              </tr>
              <tr>
                <td>{payTable.onePair * coinAmounts.column4}</td>
              </tr>
            </tbody>
          </table>
          <table
            id="table-six"
            className={this.props.betAmount === 5 ? "selected" : "not-selected"}
          >
            <tbody>
              <tr>
                <td>5 Coins</td>
              </tr>
              <tr>
                <td>{payTable.royalFlush * coinAmounts.column5}</td>
              </tr>
              <tr>
                <td>{payTable.straightFlush * coinAmounts.column5}</td>
              </tr>
              <tr>
                <td>{payTable.fourOfAKind * coinAmounts.column5}</td>
              </tr>
              <tr>
                <td>{payTable.fullHouse * coinAmounts.column5}</td>
              </tr>
              <tr>
                <td>{payTable.flush * coinAmounts.column5}</td>
              </tr>
              <tr>
                <td>{payTable.straight * coinAmounts.column5}</td>
              </tr>
              <tr>
                <td>{payTable.threeOfAKind * coinAmounts.column5}</td>
              </tr>
              <tr>
                <td>{payTable.twoPair * coinAmounts.column5}</td>
              </tr>
              <tr>
                <td>{payTable.onePair * coinAmounts.column5}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default PayTable;
