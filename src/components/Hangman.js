import React, { Component } from "react";
import Bar from "./Bar";
import AnswerDisplayer from "./AnswerDisplayer";
import Keyboard from "./Keyboard";
import Popup from "./Popup";
import Backdrop from "./Backdrop";
import axios from "../axios-quiz";
import HintDisplayer from "./HintDisplayer";
import classes from "./Hangman.module.css";

class Hangman extends Component {
  state = {
    answer: "",
    hint: {},
    guessedLetters: [],
    missedLetters: [],
    animalsData: {},
    moviesData: {},
    movies: false,
    animals: false,
    won: false,
    gameStarted: false
  };

  componentDidMount() {
    console.log("componentDidMount");
    document.addEventListener("keydown", e => this.keyboardHandler(e));
    const animalsDataHandler = () => {
      axios
        .get("/Animals.json")
        .then(response => {
          this.setState({
            animalsData: response.data
          });
        })
        .catch(error => console.log(error));
    };
    animalsDataHandler();
    const moviesDataHandler = () => {
      axios
        .get("/Movies.json")
        .then(response => {
          this.setState({
            moviesData: response.data
          });
        })
        .catch(error => console.log(error));
    };
    moviesDataHandler();
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
      } else {
        const missedLetters = this.state.missedLetters.concat(letter);
        this.setState({ missedLetters: missedLetters });
      }
    }
  };

  setAnswer = categoryChoosen => {
    if (categoryChoosen === "Animals") {
      const animalsNames = Object.getOwnPropertyNames(
        this.state.animalsData["-M1lH5PO7Mv_29581dC1"]
      );
      let animalRandom = animalsNames[Math.floor(Math.random() * 40)];
      let animalToAnswer = animalRandom.toLowerCase();
      this.setState({ answer: animalToAnswer });
      const hint = this.state.animalsData["-M1lH5PO7Mv_29581dC1"][
        animalRandom.toString()
      ];
      this.setState({ hint: hint });
      this.setState({ animals: true });
    } else {
      const moviesNames = Object.getOwnPropertyNames(this.state.moviesData);
      let moviesRandom = moviesNames[Math.floor(Math.random() * 46)];
      let moviesToAnswer = moviesRandom.toLowerCase();
      this.setState({ answer: moviesToAnswer });
      const hint = this.state.moviesData[moviesRandom.toString()];
      this.setState({ hint: hint });
      this.setState({ movies: true });
    }
  };

  startHandler = categoryChoosen => {
    this.setState({ guessedLetters: [] });
    this.setState({ missedLetters: [] });
    this.setState({ won: false });
    this.setState({ gameStarted: true });
    this.setState({ movies: false });
    this.setState({ animals: false });
    this.setAnswer(categoryChoosen);
  };

  playAgainHandler = () => {
    this.setState({ answer: "" });
    this.setState({ hint: {} });
    this.setState({ guessedLetters: [] });
    this.setState({ missedLetters: [] });
    this.setState({ movies: false });
    this.setState({ animals: false });
    this.setState({ won: false });
    this.setState({ gameStarted: false });
  };

  render() {
    return (
      <div className={classes.Hangman}>
        {this.state.gameStarted ? (
          <Bar
            class={true}
            barTxt={
              this.state.animals
                ? "Animal name:"
                : this.state.movies
                ? "Movie title:"
                : null
            }
          />
        ) : null}
        {this.state.answer ? (
          <>
            <AnswerDisplayer
              answer={this.state.answer}
              guesses={this.state.guessedLetters}
            />
            <div className={classes.Hint}>
              {this.state.missedLetters.length > 4 && this.state.animals ? (
                <HintDisplayer
                  hintTxt={"Place of living: "}
                  hintData={this.state.hint["Place"]}
                />
              ) : null}
              {this.state.missedLetters.length > 4 && this.state.movies ? (
                <HintDisplayer
                  hintTxt={"Stars: "}
                  hintData={this.state.hint["Stars"]}
                />
              ) : null}
            </div>
            <Keyboard
              onClick={this.letterCompareHandler}
              guessedLetters={this.state.guessedLetters}
              missedLetters={this.state.missedLetters}
            />
          </>
        ) : null}
        {this.state.won ? (
          <Popup
            msg={"You won!"}
            clicked1={() => this.startHandler("Animals")}
            btnTxt1={"Animals"}
            clicked2={() => this.startHandler("Movies")}
            btnTxt2={"Movies"}
          />
        ) : null}
        {!this.state.gameStarted ? (
          <Popup
            msg={"Choose category:"}
            clicked1={() => this.startHandler("Animals")}
            btnTxt1={"Animals"}
            clicked2={() => this.startHandler("Movies")}
            btnTxt2={"Movies"}
          />
        ) : null}
        {this.state.won || !this.state.gameStarted ? (
          <Backdrop hide={this.backdropHideHandler} />
        ) : null}
        {this.state.gameStarted ? (
          <Bar
            btn={true}
            clicked={this.playAgainHandler}
            btnTxt={"Play Again"}
          />
        ) : null}
      </div>
    );
  }
}

export default Hangman;
