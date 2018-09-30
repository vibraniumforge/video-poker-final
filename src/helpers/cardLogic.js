// i'm not going to do the entire file, but think of more creative ways to test these than checking card by card

const areEqual = (a, b) => {
  if (a.length != b.length) return false
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false
  }
  return true
}

const sameSuit = hand => {
  const suits = hand.map(card => card.suit)
  const set = new Set(suits)
  return set.length === 1
}

const royalFlush = hand => {
  const values = hand.map(card => card.values)
  return sameSuit && areEqual(values, [10,11,12,13,14])
}

const mostOfAKind = cardObj => {
  const values = Object.values(cardObj)
  return values.sort((a, b) => a - b)[values.length-1]
}

const twoPairs = cardObj => {
  const values = Object.values(cardObj)
  const countObj = values.reduce((countObj, value) => {
    if (countObj[value]) {
      countObj[value]++
    } else {
      countObj[value] = 1
    }
    return countObj
  }, {})
  return countObj[2] === 2
}

const twoJacks = cardObj => {
  for (let key in cardObj) {
    if (key >= 11 && cardObj[key] === 2) return true
  }
  return false
}

const cardObj = hand => {
  return hand.reduce((cardObj, card) => {
    if (cardObj[card.value]) {
      cardObj[card.value]++
    } else {
      cardObj[card.value] = 1
    }
    return cardObj
  }, {})
}

export default (hand) => {
  const cards = cardObj(hand)
  
  if (royalFlush(hand)) {
    return "You have a Royal Flush!";
  } else if (
    ((hand[0].value + 1 === hand[1].value &&
      hand[1].value + 1 === hand[2].value &&
      hand[2].value + 1 === hand[3].value &&
      hand[3].value + 1 === hand[4].value) ||
      (hand[0].value === 2 &&
        hand[4].value === 14 &&
        hand[1].value + 1 === hand[2].value &&
        hand[2].value + 1 === hand[3].value)) &&
    (hand[0].suit === hand[1].suit &&
      hand[1].suit === hand[2].suit &&
      hand[2].suit === hand[3].suit &&
      hand[3].suit === hand[4].suit)
  ) {
    return "You have a Straight Flush";
  } else if (mostOfAKind(cardObj) === 4) {
    return "You have a Four of a Kind";
  } else if (
    (hand[0].value === hand[1].value &&
      hand[1].value === hand[2].value &&
      hand[3].value === hand[4].value) ||
    (hand[0].value === hand[1].value &&
      hand[2].value === hand[3].value &&
      hand[3].value === hand[4].value)
  ) {
    return "You have a Full House";
  } else if (
    hand[0].suit === hand[1].suit &&
    hand[1].suit === hand[2].suit &&
    hand[2].suit === hand[3].suit &&
    hand[3].suit === hand[4].suit
  ) {
    return "You have a Flush";
  } else if (
    (hand[0].value + 1 === hand[1].value &&
      hand[1].value + 1 === hand[2].value &&
      hand[2].value + 1 === hand[3].value &&
      hand[3].value + 1 === hand[4].value) ||
    (hand[0].value === 2 &&
      hand[4].value === 14 &&
      hand[1].value + 1 === hand[2].value &&
      hand[2].value + 1 === hand[3].value)
  ) {
    return "You have a Straight";
  } else if (mostOfAKind(cardObj) === 3) {
    return "You have a Three of a Kind";
  } else if (twoPairs(cardObj)) {
    return "You have Two Pairs";
  } else if (twoJacks(cardObj)) {
    return "You have a Pair of Jacks or Better";
  } else {
    return "You have Nothing";
  }
}

export {areEqual, sameSuit, royalFlush, mostOfAKind, twoPairs, twoJacks, cardObj}



