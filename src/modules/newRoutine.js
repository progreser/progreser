import { createAction, handleActions } from 'redux-actions';
import axios from '../../node_modules/axios/index';
import { push } from 'connected-react-router';
import { call, put, takeEvery, select } from 'redux-saga/effects';

const NEWSTART = 'newRoutine/START';
const NEWSUCCESS = 'newRoutine/SUCCESS';
const NEWFAIL = 'newRoutine/FAIL';

export const newStart = createAction(NEWSTART, routine => routine);
const newSuccess = createAction(NEWSUCCESS, routine => routine);
const newfail = createAction(NEWFAIL);

// 리듀서함수제작
const newRoutine = handleActions(
  {
    [NEWSTART]: state => state,
    [NEWSUCCESS]: (state, { payload }) => [...state, payload],
    [NEWFAIL]: state => state,
  },
  [],
);

export default newRoutine;

function* newRoutineSaga({ payload }) {
  try {
    const { id } = JSON.parse(localStorage.getItem('token'));
    const prevState = yield select(state => state.newRoutine);
    console.log(prevState);
    yield call(axios.patch, `/users/${id}`, { routines: [...prevState, payload] });
    yield put(newSuccess(payload));
    yield put(push('/'));
  } catch (error) {
    yield put(newfail(error));
  }
}

export function* routineSaga() {
  yield takeEvery(NEWSTART, newRoutineSaga);
}
