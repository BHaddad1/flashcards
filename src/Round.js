const Turn = require("../src/Turns");
const Card = require("./Card");
const Card1 = require("../src/Card");
const Deck = require("../src/Deck.js");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = this.deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
    this.correctGuesses = [];
  }
  takeTurn(guess) {
    const turn = new Turn(guess, this.currentCard);
    this.turns += 1;
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    } else if (turn.evaluateGuess()) {
      this.correctGuesses.push(this.currentCard.id);
    }
    this.currentCard = this.deck.cards[this.turns];
    return turn.provideFeedback();
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  calculatePercentCorrect() {
    return (this.correctGuesses.length / this.deck.cards.length) * 100;
  }
  endRound() {
    const amountCorrect = this.calculatePercentCorrect();
    return `** Round over! ** You answered ${amountCorrect}% of the questions correctly!`;
  }
}
module.exports = Round;
