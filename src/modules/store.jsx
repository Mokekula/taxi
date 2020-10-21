import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import { authMiddleware } from "./middlewares";

export const store = createStore(rootReducer, applyMiddleware(authMiddleware));
