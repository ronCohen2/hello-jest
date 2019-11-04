import { createStore } from "redux";
import rootReducer from "../Reducer/rootReducer";
export const findByTestAtrr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
};
export const storeFactory = initialState => {
  return createStore(rootReducer, initialState);
};
