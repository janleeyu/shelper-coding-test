import { combineReducers } from "redux";

import auth from "./auth";
import { connectRouter } from "connected-react-router";

const createRootReducer = (history) =>
  combineReducers({
    auth,
    router: connectRouter(history),
  });

export default createRootReducer;
