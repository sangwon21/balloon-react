import { combineReducers } from "redux";

import language from "./language";
import page from "./page";

const rootReducer = combineReducers({ language, page });

export default rootReducer;
