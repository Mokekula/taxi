export const CARD_ADD = "CARD_ADD";

export const cardAdd = (number, expiry, name, cvc) => ({
  type: CARD_ADD,
  payload: { number, expiry, name, cvc },
});
