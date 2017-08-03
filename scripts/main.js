/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/



function handValue (hand) {
  let handTotal = 0;
  // handtotal starts and ends as 0, just a platform to keep running totals
  let ace = false;
  // starts off false unless an ace is present in hand

  for (i =0; i < hand.length; i++) {
    let card = hand[i];
    // any index number in hand is converted to as a "Card"
    let value = 0;
    // nothing has been calculated yet, making the variable available for later use 
    


    if(card === "J" || card === "Q" || card === "K") {
      value = 10;
      // if any face cards are present their value = 10
    }
    else if (card === "A") {
      value = 1
       ace = true
       // if an ace is present = true, value is only 1
    }
      else {
        value = parseInt(card)
        // changes the string to a number
        
      }
      handTotal += value;
      //value is whatever the hand totals to plus handTotal which was zero
  }
    if(handTotal < 12 && ace === true) {
      handTotal += 10
      //increases the handtotal by +10
    }
    return handTotal;

}








/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
