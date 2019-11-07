import { combineReducers } from "redux";
import success from "./success";
import guessedWord from "./guessedWordReducer";
import secretWord from "./secretWordReducer";

// export default combineReducers({ SuccessReducer });
export default combineReducers({
  success,
  guessedWord,
  secretWord
});
