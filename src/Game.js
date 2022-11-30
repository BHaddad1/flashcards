const Card = require("./Card");
const Deck = require("./Deck");
const data = require("./data");
const Round = require("./Round");
const prototypeQuestions = data.prototypeData;
const util = require("./util");

class Game {
  constructor() {
    this.currentRound = new Round(this.createDeck());
  }
  start() {
    this.createCards();
    this.createDeck();
    this.createRound();
    this.printMessage(this.createDeck(), this.createRound());
    this.printQuestion(this.createRound());
  }
  createCards() {
    let questions = prototypeQuestions.map((question) => {
      return {
        id: question.id,
        question: question.question,
        answers: question.answers,
        correctAnswer: question.correctAnswer,
      };
    });
    return questions;
  }
  createDeck() {
    let deck = new Deck(this.createCards());
    return deck;
  }
  createRound() {
    let round = new Round(this.createDeck());
    return round;
  }
  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;
