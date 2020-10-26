import { combineReducers } from "redux";

import language from "./language";
import page from "./page";
import login from "./login";
import users from "./users";
import searchBar from "./searchBar";
import receiver from "./receiver";
import toast from "./toast";
import loading from "./loading";

const rootReducer = combineReducers({
  language,
  page,
  login,
  users,
  searchBar,
  receiver,
  toast,
  loading,
});

export default rootReducer;
