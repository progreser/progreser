import axios from 'axios';
import { push } from 'connected-react-router';
import { createAction, handleActions } from 'redux-actions';
import { call, put, takeEvery } from 'redux-saga/effects';

// const prefix = 'progeser/user';

// Action 타입 만들기
const LOGINSTART = 'login/START';
const LOGINSUCCESS = 'login/SUCCESS';
const LOGINFAIL = 'login/FAIL';

export const loginStart = createAction(LOGINSTART, (id, pass) => ({ id, pass }));
const loginSuccess = createAction(LOGINSUCCESS, (id, pass) => ({ id, pass }));
const loginfail = createAction(LOGINFAIL);

// 리듀서함수제작
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
    console.log(loginUser.data);
    loginUser.data.pass === +payload.pass ? yield put(loginSuccess()) : yield put(loginfail());
    yield put(push('/'));
  } catch (error) {
    yield put(loginfail(error));
  }
}

export function* userSaga() {
  yield takeEvery(LOGINSTART, loginSaga);
}
