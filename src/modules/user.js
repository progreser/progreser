import axios from 'axios';
import { createAction, createActions, handleActions } from 'redux-actions';
import { call, delay, put, select, takeEvery } from 'redux-saga/effects';
// const prefix = 'progeser/user';

// type\
const LOGINSTART = 'login/START';
const LOGINSUCCESS = 'login/SUCCESS';
const LOGINFAIL = 'login/FAIL';

// 액션 생성 함수
export const loginStart = createAction(LOGINSTART, (id, pass) => ({ id, pass }));
const loginSuccess = createAction(LOGINSUCCESS, (id, pass) => ({ id, pass }));
const loginFail = createAction(LOGINFAIL);

// 리듀서
const userinfo = handleActions(
  {
    [LOGINSTART]: state => ({ ...state }),
    [LOGINSUCCESS]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    [LOGINFAIL]: state => ({ ...state }),
  },
  {},
);

export default userinfo;

function* loginSaga({ payload }) {
  try {
    const loginUser = yield call(axios.get, `/users/${payload.id}`);
    loginUser.data.pass === +payload.pass
      ? yield put(loginSuccess(payload))
      : yield put(loginFail());
  } catch (error) {
    yield put(loginFail());
  }
}

export function* userSaga() {
  yield takeEvery(LOGINSTART, loginSaga);
}
