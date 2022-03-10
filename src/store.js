import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import PlayerReducer from "./reducers/PlayerReducer";
import TeamReducer from "./reducers/TeamReducer";
const middleware = [thunk];

const reducers = {
  PlayerReducer,
  TeamReducer,
};

const rootReducer = combineReducers(reducers);

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
