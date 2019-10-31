import React from "react";
const GuessedWords = props => {
  const { GuessedWord } = props;
  return (
    <div data-test="component-guess">
      {GuessedWord ? <span data-test="guess-instruction">blblbl</span> : null}
    </div>
  );
};
export default GuessedWords;
