import { createAction, handleActions } from 'redux-actions';
import axios from '../../node_modules/axios/index';
import { push } from 'connected-react-router';
import { call, put, takeEvery } from 'redux-saga/effects';

const NEWSTART = 'newRoutine/START';
const NEWSUCCESS = 'newRoutine/SUCCESS';
const NEWFAIL = 'newRoutine/FAIL';

export const newStart = createAction(NEWSTART, (id, pass) => ({ id, pass }));
const newSuccess = createAction(NEWSUCCESS, (id, pass) => ({ id, pass }));
const newfail = createAction(NEWFAIL);

// 리듀서함수제작

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

function* newRoutineSaga({ payload }) {
  try {
    const loginUser = yield call(axios.get, `/users/${payload.id}`);
    if (loginUser.data.pass !== payload.pass) {
      throw new Error('비밀번호가 달라요');
    }
    yield put(newSuccess(payload));
    console.log('ddd');
    localStorage.setItem('token', JSON.stringify(loginUser.data.name));
    yield put(push('/'));
  } catch (error) {
    yield put(newfail(error));
  }
}

export function* routineSaga() {
  yield takeEvery(NEWSTART, newRoutineSaga);
}
