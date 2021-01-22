import { createAction, handleActions } from 'redux-actions';
import axios from '../../node_modules/axios/index';
import { push } from 'connected-react-router';
import { call, put, takeEvery, select } from 'redux-saga/effects';

const GETSTART = 'getRoutine/START';
const GETSUCCESS = 'getRoutine/SUCCESS';
const GETFAIL = 'getRoutine/FAIL';
const GETREMOVE = 'getRoutine/REMOVE';
const GETADD = 'getRoutine/ADD';
export const getStart = createAction(GETSTART);
const getSuccess = createAction(GETSUCCESS, routine => routine);
const getfail = createAction(GETFAIL);
export const getRemove = createAction(GETREMOVE);
export const getAdd = createAction(GETADD, routine => routine);
// 리듀서함수제작

const getRoutine = handleActions(
  {
    [GETSTART]: state => state,
    [GETADD]: (state, { payload }) => [...state, ...payload],
    [GETSUCCESS]: (state, { payload }) => payload,
    [GETFAIL]: state => state,
    [GETREMOVE]: state => (state = []),
  },
  [],
);

export default getRoutine;

function* getRoutineSaga() {
  try {
    const { id } = JSON.parse(localStorage.getItem('token'));
    const res = yield call(axios.get, `/users/${id}`);
    yield put(getSuccess(res.data.routines));
  } catch (error) {
    console.log(error);
    yield put(getfail(error));
  }
}

export function* watchGetRoutineSaga() {
  yield takeEvery(GETSTART, getRoutineSaga);
}
