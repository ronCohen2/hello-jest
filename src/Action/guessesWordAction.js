import { getLetterMatchCount } from "../helper/method";
import Axios from "axios";

export const geussWord = guessWord => {
  return function(dispatch, getState) {
    const secretWord = getState().secretWord;
    const numberOfMatch = getLetterMatchCount(guessWord, secretWord);
    dispatch({
      type: "GUESSED_WORD",
      payload: { guessedWord: guessWord, letterMatchCount: numberOfMatch }
    });
    if (guessWord === secretWord) {
      dispatch({ type: "CORRECT_GUESS" });
    }
  };
};
export const getSecretWord = () => {
  return dispatch => {
    Axios.get("http://localhost:3030").then(res => {
      console.log(res.data);
      dispatch({ type: "SET_SECRET_WORD", payload: res.data });
    });
  };
};
