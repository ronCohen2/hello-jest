import rootReducer from "../Reducer/rootReducer";
import { createStore, applyMiddleware } from "redux";
import { middleware } from "../Store";

export const findByTestAtrr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
};
export const storeFactory = initialState => {
  const createStoreWithMiddleWare = applyMiddleware(...middleware)(createStore);
  return createStoreWithMiddleWare(rootReducer, initialState);
};
