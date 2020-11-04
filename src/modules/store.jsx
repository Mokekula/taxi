import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import { loadState, saveState } from "../modules/localStorage";
import createSagaMiddleware from "redux-saga";
import { handleAuth } from "../sagas/sagaAuth";
import { handleRegistr } from "../sagas/sagaRegister";
import { handleCard } from "../sagas/sagaCard";

export const createAppStore = () => {
  const initialState = loadState();
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (noop) => noop
    )
  );

  sagaMiddleware.run(handleRegistr);
  sagaMiddleware.run(handleAuth);
  sagaMiddleware.run(handleCard);

  store.subscribe(() => {
    saveState(store.getState());
  });

  return store;
};

// export const store = createStore(rootReducer, applyMiddleware(authMiddleware));
