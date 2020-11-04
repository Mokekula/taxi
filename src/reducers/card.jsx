import { CARD_ADD, CARD_CLEAR } from "../actions/cardAction";

const initialState = {
  number: "",
  expiry: "",
  name: "",
  cvc: "",
  isCardUpdate: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CARD_ADD: {
      return {
        number: action.payload.cardNumber,
        expiry: action.payload.expiryDate,
        name: action.payload.cardName,
        cvc: action.payload.cvc,
        isCardUpdate: true,
      };
    }
    case CARD_CLEAR: {
      return {
        number: "",
        expiry: "",
        name: "",
        cvc: "",
        isCardUpdate: false,
      };
    }
    default:
      return state;
  }
}
