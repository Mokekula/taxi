export const CARD_ADD = "CARD_ADD";
export const CARD_UPDATE = "CARD_UPDATE";
export const CARD_CLEAR = "CARD_CLEAR";
export const TOKEN = "TOKEN";

export const cardAdd = (payload) => ({
  type: CARD_ADD,
  payload,
});

export const cardUpdate = (payload) => ({
  type: CARD_UPDATE,
  payload,
});

export const setToken = (token) => ({
  type: TOKEN,
  payload: token,
});

export const cardClear = () => ({ type: CARD_CLEAR });
