import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const enhancer = applyMiddleware(thunk);

const store = createStore(
  rootReducer,
  enhancer
);

export default store;
