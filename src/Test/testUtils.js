import rootReducer from "../Reducer/rootReducer";
import { createStore } from "redux";

export const findByTestAtrr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
};
export let storeFactory = initialState => {
  return createStore(rootReducer, initialState);
};
