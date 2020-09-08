import { combineReducers } from "redux";

import language from "./language";
import page from "./page";
import login from "./login";
import users from "./users";
import searchBar from "./searchBar";
import receiver from "./receiver";

const rootReducer = combineReducers({
  language,
  page,
  login,
  users,
  searchBar,
  receiver,
});

export default rootReducer;
