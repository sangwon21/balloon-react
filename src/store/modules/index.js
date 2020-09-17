import { combineReducers } from "redux";

import language from "./language";
import page from "./page";
import login from "./login";
import users from "./users";
import searchBar from "./searchBar";
import receiver from "./receiver";
import toast from "./toast";

const rootReducer = combineReducers({
  language,
  page,
  login,
  users,
  searchBar,
  receiver,
  toast,
});

export default rootReducer;
