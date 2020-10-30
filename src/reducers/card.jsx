import { CARD_ADD } from "../actions/profileAction";

const initialState = {
  number: "",
  expiry: "",
  name: "",
  cvc: "",
};

export default function (state = initialState, action) {
  // switch (action.type) {
  //   case CARD_ADD: {
  //     return {
  //       number: action.payload.number ? action.payload.number : state.number,
  //       expiry: action.payload.expiry ? action.payload.expiry : state.expiry,
  //       name: action.payload.name ? action.payload.name : state.name,
  //       cvc: action.payload.cvc ? action.payload.cvc : state.cvc,
  //     };
  //   }
  //   default:
  //     return state;
  // }

  if (action.type === CARD_ADD) {
    return {
      number: action.payload.number ? action.payload.number : state.number,
      expiry: action.payload.expiry ? action.payload.expiry : state.expiry,
      name: action.payload.name ? action.payload.name : state.name,
      cvc: action.payload.cvc ? action.payload.cvc : state.cvc,
    };
  }

  return state;
}
