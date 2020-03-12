import React, { Component } from "react";
import AnswerDisplayer from "./AnswerDisplayer";
import Keyboard from "./Keyboard";
import Popup from "./Popup";
import Backdrop from "./Backdrop";
import {animalsAxios, moviesAxios} from "../axios-quiz";
import classes from "./Hangman.module.css";

class Hangman extends Component {
  state = {
    answer: "",
    guessedLetters: [],
    missedLetters: [],
    animalsData: {},
    won: false,
    showBackdrop: true,
    gameStarted: false
  };

  componentDidMount() {
    console.log('componentDidMount')
    document.addEventListener("keydown", e => this.keyboardHandler(e));
    const firebaseDataHandler = () => {
      animalsAxios
        .get("/Animals.json")
        .then(response => {
          this.setState({
            animalsData: response.data
          });
          
        })
        .catch(error => console.log(error));
    };
    firebaseDataHandler();
    
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", e => this.keyboardHandler(e));
  }



  keyboardHandler = e => {
    const letters = "abcdefghijklmnopqrstuvwxyz".split("");
    if (letters.includes(e.key)) {
      this.letterCompareHandler(e.key);
    } else {
      return null;
    }
  };

  wonHandler = () => {
    const test1 = this.state.answer
      .replace(/(.)(?=.*\1)/g, "")
      .split(" ")
      .join("")
      .split("");
    if (test1.length === this.state.guessedLetters.length) {
      this.setState({ won: true });
      this.setState({ showBackdrop: true });
    }
  };

  letterCompareHandler = letter => {
    const answer = this.state.answer.split("");
    const guessedOrNotIndex = answer.findIndex(el => el === letter);

    if (this.state.guessedLetters.includes(letter)) {
      return null;
    } else {
      if (guessedOrNotIndex > -1) {
        const guessedLetters = this.state.guessedLetters.concat(letter);
        this.setState({ guessedLetters: guessedLetters }, this.wonHandler);
        console.log(this.state.guessedLetters);
      } else {
        const missedLetters = this.state.missedLetters.concat(letter);
        this.setState({ missedLetters: missedLetters });
      }
    }
  };

  againHandler = () => {
    this.setState({ guessedLetters: [] });
    this.setState({ missedLetters: [] });
    this.setState({ won: false });
    this.setState({ showBackdrop: false });
    this.setAnswer();
  };

  setAnswer = () => {
    const animalsNames = Object.getOwnPropertyNames(this.state.animalsData["-M1lH5PO7Mv_29581dC1"])
    let animalToAnswer = animalsNames[Math.floor(Math.random() * 40)].toLowerCase();
    this.setState({answer : animalToAnswer});
  }

  backdropHideHandler = () => {
    this.setState({ showBackdrop: false });
  };

  startHandler = () => {
    this.setState({showBackdrop: false});
    this.setState({gameStarted: true});
    this.setAnswer();
  };


  render() {
    return (
      <div className={classes.Hangman}>
        <AnswerDisplayer
          answer={this.state.answer}
          guesses={this.state.guessedLetters}
        />
        <Keyboard
          onClick={this.letterCompareHandler}
          guessedLetters={this.state.guessedLetters}
          missedLetters={this.state.missedLetters}
        />
        {this.state.won ? <Popup clicked={this.againHandler} msg={"You won!"} btnTxt={"Play again"} /> : null}
        {!this.state.gameStarted ? <Popup clicked={this.startHandler} msg={"Are you ?"} btnTxt={"Start"} /> : null}
        {this.state.showBackdrop ? (
          <Backdrop hide={this.backdropHideHandler} />
        ) : null}
      </div>
    );
  }
}

export default Hangman;
