import React from "react";
const GuessedWords = props => {
  const { guessedWords } = props;
  var content;
  if (guessedWords.length == 0) {
    content = <span data-test="guess-instruction">1)...... 2)... 3)...</span>;
  } else {
    content = (
      <div data-test="guess-Word-section">
        {guessedWords.map((word, key) => {
          return (
            <p data-test="guess-word" key={key}>
              {word.guessWord}
            </p>
          );
        })}
      </div>
    );
  }
  return <div data-test="component-guess">{content}</div>;
};
export default GuessedWords;
