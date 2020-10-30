import { takeEvery, call, put } from "redux-saga/effects";
import { AUTHENTICATE, logIn } from "../actions/authAction";
import { serverLogin } from "../modules/api";

function* authorize(action) {
  const successResult = yield call(serverLogin, action.payload);
  if (successResult) {
    yield put(logIn());
  } else {
    alert("Wrong email or password");
  }
}

export function* handleAuth() {
  yield takeEvery(AUTHENTICATE, authorize);
}
