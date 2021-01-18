import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { createAction, handleActions } from 'redux-actions';

// const prefix = 'progeser/user';

// Action 타입 만들기
const LOGINSTART = 'login/START';
const LOGINSUCCESS = 'login/SUCCESS';
const LOGINFAIL = 'login/FAIL';

// 액션 생성 함수
export const loginStart = createAction(LOGINSTART, (id, pass) => ({ id, pass }));
const loginSuccess = createAction(LOGINSUCCESS, (id, pass) => ({ id, pass }));
const loginFail = createAction(LOGINFAIL);

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

// Action
function* loginSaga({ payload }) {
  try {
    const loginUser = yield call(axios.get, `/users/${payload.id}`);
    loginUser.data.pass === +payload.pass ? yield put(loginSuccess()) : yield put(loginFail());
  } catch (error) {
    yield put(loginFail());
  }
}

// Action
export function* userSaga() {
  yield takeEvery(LOGINSTART, loginSaga);
}
