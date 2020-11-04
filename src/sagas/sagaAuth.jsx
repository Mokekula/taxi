import { takeEvery, call, put } from "redux-saga/effects";
import { AUTHENTICATE, logIn } from "../actions/authAction";
import { serverLogin } from "../apies/apiAuth";

function* authorize(action) {
  const successResult = yield call(serverLogin, action.payload);

  console.log(successResult);
  console.log(333);

  if (successResult) {
    yield put(logIn(successResult.token));
  } else {
    alert("Wrong email or password");
  }
}

export function* handleAuth() {
  yield takeEvery(AUTHENTICATE, authorize);
}
