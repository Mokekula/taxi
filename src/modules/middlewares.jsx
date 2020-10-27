import { AUTHENTICATE, logIn } from "./actions";
import { serverLogin } from "./api";

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHENTICATE) {
    const { username, password } = action.payload;
    const success = await serverLogin(username, password);
    if (success) {
      store.dispatch(logIn());
    }
  } else {
    next(action);
  }
};
