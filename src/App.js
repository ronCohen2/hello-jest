import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";

function App() {
  return (
    <div className="App">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords
        guessedWords={[
          { guessWord: "train", numberOfMatch: 3 },
          { guessWord: "agilt", numberOfMatch: 1 },
          { guessWord: "party", numberOfMatch: 5 }
        ]}
      />
    </div>
  );
}

export default App;
