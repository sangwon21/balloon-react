import { combineReducers } from "redux";

import language from "./language";
import page from "./page";
import login from "./login";

const rootReducer = combineReducers({ language, page, login });

export default rootReducer;
