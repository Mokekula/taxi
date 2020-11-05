import { takeEvery, call, put } from "redux-saga/effects";
import { REGISTRATION } from "../actions/registrAction";
import { serverRegister } from "../apies/apiRegister";
import { logIn } from "../actions/authAction";

function* registration(action) {
  const successResult = yield call(serverRegister, action.payload);

  if (successResult) {
    yield put(logIn(successResult.token));
  } else {
    alert("User has already been created");
  }
}

export function* handleRegistr() {
  yield takeEvery(REGISTRATION, registration);
}
