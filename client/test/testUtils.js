import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "@modules";

export const makeTestStore = () => {
  const middleware = applyMiddleware(thunk);
  const store = createStore(rootReducer, middleware);

  return store;
};

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};
