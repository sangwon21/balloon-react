import { combineReducers } from "redux";

import language from "./language";
import page from "./page";
import login from "./login";
import users from "./users";

const rootReducer = combineReducers({ language, page, login, users });

export default rootReducer;
