import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import { authMiddleware } from "./middlewares";
import { loadState, saveState } from "../modules/localStorage";

export const createAppStore = () => {
  const initialState = loadState();

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(authMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (noop) => noop
    )
  );

  store.subscribe(() => {
    saveState(store.getState());
  });

  return store;
};

// export const store = createStore(rootReducer, applyMiddleware(authMiddleware));
