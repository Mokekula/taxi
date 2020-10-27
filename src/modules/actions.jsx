export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const AUTHENTICATE = "AUTHENTICATE";

export const logIn = () => ({
  type: LOG_IN,
});

export const logOut = () => ({
  type: LOG_OUT,
});

export const authenticate = (username, password) => ({
  type: AUTHENTICATE,
  payload: { username, password },
});

export const CARD_ADD = "CARD_ADD";

export const cardAdd = (number, expiry, name, cvc) => ({
  type: CARD_ADD,
  payload: { number, expiry, name, cvc },
});
