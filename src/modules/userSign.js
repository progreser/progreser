import { createAction, handleActions } from 'redux-actions';
import axios from '../../node_modules/axios/index';
import { push } from 'connected-react-router';
import { call, put, takeEvery } from 'redux-saga/effects';

const SIGNUPSTART = 'sign/START';
const SIGNUPSUCCESS = 'sign/SUCCESS';
const SIGNUPFAIL = 'sign/FAIL';

export const signupStart = createAction(SIGNUPSTART, (id, name, pass) => ({ id, name, pass }));
const signupSuccess = createAction(SIGNUPSUCCESS, (id, name, pass) => ({ id, name, pass }));
const signupFail = createAction(SIGNUPFAIL);

const signinfo = handleActions(
  {
    [SIGNUPSTART]: state => ({ ...state }),
    [SIGNUPSUCCESS]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    [SIGNUPFAIL]: (state, { payload }) => ({ ...state, error: payload }),
  },
  {},
);

export default signinfo;

function* signSaga({ payload }) {
  try {
    const loginUser = yield call(axios.get, `/users`);
    console.log(payload);
    if (loginUser.data.id === payload.id) return;
    const signuser = { id: payload.id, name: payload.name, pass: payload.pass, routine: [] };
    yield put(signupSuccess(payload));
    yield call(axios.post, `/users/`, signuser);
    yield put(push('/login'));
  } catch (error) {
    yield put(signupFail(error));
  }
}

export function* signupSaga() {
  yield takeEvery(SIGNUPSTART, signSaga);
}
