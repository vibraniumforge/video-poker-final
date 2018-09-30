import React from "react";

// how to use emojis or unicode in react 
// https://medium.com/@seanmcp/%EF%B8%8F-how-to-use-emojis-in-react-d23bbf608bf7

const {spade, heart, club, diamond} = {
  spade: '\u2660',
  heart: '\u2665',
  club: '\u2663',
  diamond: '\u2666' 
}
const Icon = ({type, color}) => <span className={`icon ${color}`}> {type} </span>

// if it doesn't hold state, it doesn't need to be a class component


export default () => (
  <div id="casino-name">
    <h1>
      <Icon type={spade} color="black" />
      <Icon type={heart} color="red" />
      <Icon type={club} color="black" />
      <Icon type={diamond} color="red" />
      <span className="yellow">Casino sweetgreen </span>
      <Icon type={spade} color="black" />
      <Icon type={heart} color="red" />
      <Icon type={club} color="black" />
      <Icon type={diamond} color="red" />
    </h1>
  </div>
)
