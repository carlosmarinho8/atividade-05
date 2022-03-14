import { combineReducers } from "redux";
import clients from "./clients";
import auth from "./auth";
export default combineReducers({
  clients,
  auth
});