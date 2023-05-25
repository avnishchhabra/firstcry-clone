import { applyMiddleware, legacy_createStore, combineReducers } from "redux";
import { Reducer as AppReducer } from "./AppReducer/reducer";
import { Reducer as MyAccount } from "./MyAccount/reducer";
import { Reducer as Authentication } from "./Authentication/reducer";
import { Reducer as Cart } from "./CartReducer/reducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  AppReducer,
  Authentication,
  MyAccount,
  Cart
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
