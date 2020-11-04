import { LOG_IN, LOG_OUT } from "../actions/authAction";

const initialState = {
  token: "",
  isLoggedIn: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOG_IN: {
      return {
        token: action.payload,
        isLoggedIn: true,
      };
    }
    case LOG_OUT: {
      return { token: "", isLoggedIn: false };
    }
    default:
      return state;
  }
}
