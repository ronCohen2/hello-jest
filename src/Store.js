import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./Reducer/rootReducer";
export const middleware = [ReduxThunk];
const createStoreWithMiddleWare = applyMiddleware(...middleware)(createStore);
export default createStoreWithMiddleWare(rootReducer);
