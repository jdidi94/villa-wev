import auth from "./reducers/auth";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
const reducer = (history) =>
  combineReducers({
    router: connectRouter(history), // Connects react router to redux
    auth,
  });
export default reducer;
