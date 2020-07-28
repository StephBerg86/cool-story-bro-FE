import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import homepageReducer from "./homepages/reducer";
import detail from "./detailpage/reducer";

export default combineReducers({
  appState,
  user,
  homepage: homepageReducer,
  detail,
});
