import { combineReducers } from "redux";
import success from "./success";
import guessedWordReducer from "./guessedWordReducer";

// export default combineReducers({ SuccessReducer });
export default combineReducers({ success, guessedWordReducer });
