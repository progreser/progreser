import { push } from 'connected-react-router';
import { createAction, handleActions } from 'redux-actions';
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from '../../node_modules/axios/index';

const NEWSTART = 'newRoutine/START';
const NEWSUCCESS = 'newRoutine/SUCCESS';
const NEWFAIL = 'newRoutine/FAIL';

export const newStart = createAction(NEWSTART, (id, pass) => ({ id, pass }));
const newSuccess = createAction(NEWSUCCESS, (id, pass) => ({ id, pass }));
const newFail = createAction(NEWSUCCESS);

const newRoutine = handleActions(
  {
    [NEWSTART]: state => ({ ...state }),
    [NEWSUCCESS]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    [NEWFAIL]: state => ({ ...state }),
  },
  {},
);

export default newRoutine;

function* NewRoutineSaga({ payload }) {
  try {
    const loginUser = yield call(axios.get, `/users/${payload.id}`);
    if (loginUser.data.pass !== payload.pass) {
      throw new Error('비밀번호가 달라요');
    }
    yield put(newSuccess(payload));
    localStorage.setItem('token', JSON.stringify(loginUser.data.name));
    yield put(push('/'));
  } catch (error) {
    yield put(newFail(error));
  }
}

export function* RoutineSaga() {
  yield takeEvery(NEWSTART, NewRoutineSaga);
}
