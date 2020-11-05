import { takeEvery, call, put } from "redux-saga/effects";
import { TOKEN, CARD_UPDATE, cardAdd, cardClear } from "../actions/cardAction";
import { serverCard, serverGetCard } from "../apies/apiCard";

function* addCard(action) {
  const successResult = yield call(serverCard, action.payload);
  if (successResult) {
    yield put(cardAdd(action.payload));
  } else {
    alert(successResult.success);
  }
}

function* getCard(action) {
  const successResult = yield call(serverGetCard, action.payload);

  if (!successResult.error) {
    yield put(cardAdd(successResult));
  } else {
    yield put(cardClear());
  }
}

export function* handleCard() {
  yield takeEvery(CARD_UPDATE, addCard);
  yield takeEvery(TOKEN, getCard);
}
