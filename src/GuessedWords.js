import React from "react";
const GuessedWords = props => {
  const { guessedWords } = props;
  return (
    <div data-test="component-guess">
      {guessedWords.length == 0 ? (
        <span data-test="guess-instruction">1)...... 2)... 3)...</span>
      ) : (
        <div data-test="guess-Word-section">
          {guessedWords.map((word, key) => {
            return (
              <p data-test="guess-word" key={key}>
                {word.guessedWord}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default GuessedWords;
