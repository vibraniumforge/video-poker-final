function cardLogic(hand) {
  let pokerHand = "";
  if (
    hand[0].value === 10 &&
    hand[1].value === 11 &&
    hand[2].value === 12 &&
    hand[3].value === 13 &&
    hand[4].value === 14 &&
    (hand[0].suit === hand[1].suit &&
      hand[1].suit === hand[2].suit &&
      hand[2].suit === hand[3].suit &&
      hand[3].suit === hand[4].suit)
  ) {
    pokerHand = "You have a Royal Flush!";
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
    pokerHand = "You have a Straight Flush";
  } else if (
    hand[1].value === hand[2].value &&
    hand[2].value === hand[3].value &&
    (hand[0].value === hand[1].value || hand[3].value === hand[4].value)
  ) {
    pokerHand = "You have a Four of a Kind";
  } else if (
    (hand[0].value === hand[1].value &&
      hand[1].value === hand[2].value &&
      hand[3].value === hand[4].value) ||
    (hand[0].value === hand[1].value &&
      hand[2].value === hand[3].value &&
      hand[3].value === hand[4].value)
  ) {
    pokerHand = "You have a Full House";
  } else if (
    hand[0].suit === hand[1].suit &&
    hand[1].suit === hand[2].suit &&
    hand[2].suit === hand[3].suit &&
    hand[3].suit === hand[4].suit
  ) {
    pokerHand = "You have a Flush";
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
    pokerHand = "You have a Straight";
  } else if (
    (hand[0].value === hand[1].value && hand[1].value === hand[2].value) ||
    (hand[1].value === hand[2].value && hand[2].value === hand[3].value) ||
    (hand[2].value === hand[3].value && hand[3].value === hand[4].value)
  ) {
    pokerHand = "You have a Three of a Kind";
  } else if (
    (hand[0].value === hand[1].value &&
      (hand[2].value === hand[3].value ||
        hand[3].value === hand[4].value ||
        hand[3].value === hand[4].value)) ||
    (hand[1].value === hand[2].value && hand[3] === hand[4])
  ) {
    pokerHand = "You have Two Pairs";
  } else if (
    (hand[0].value === hand[1].value && hand[0].value >= 11) ||
    (hand[1].value === hand[2].value && hand[1].value >= 11) ||
    (hand[2].value === hand[3].value && hand[2].value >= 11) ||
    (hand[3].value === hand[4].value && hand[3].value >= 11)
  ) {
    pokerHand = "You have a Pair of Jacks or Better";
  } else {
    pokerHand = "You have Nothing";
  }
  return pokerHand;
}

export { cardLogic };
