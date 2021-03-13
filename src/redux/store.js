import { createStore, combineReducers, applyMiddleware } from "redux";
//this middleware is used for log of state in console
import logger from "redux-logger";
//this enable google extension(redux devTools) in browser
import { composeWithDevTools } from "redux-devtools-extension";

//this middleware is used for pass dispatch in async way need to create function
import thunk from "redux-thunk";

import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import userReducer from "./user/userReducer";
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
