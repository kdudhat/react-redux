import { createStore, combineReducers, applyMiddleware } from "redux";
//this middleware is used for log of state in console
import logger from "redux-logger";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
