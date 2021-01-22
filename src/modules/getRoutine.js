import { createAction, handleActions } from 'redux-actions';
import axios from '../../node_modules/axios/index';
import { push } from 'connected-react-router';
import { call, put, takeEvery, select } from 'redux-saga/effects';

const GETSTART = 'getRoutine/START';
const GETSUCCESS = 'getRoutine/SUCCESS';
const GETFAIL = 'getRoutine/FAIL';
const GETREMOVE = 'getRoutine/REMOVE';
const GETEDIT = 'getRoutine/EDIT';
const GETADD = 'getRoutine/ADD';

export const getStart = createAction(GETSTART);
const getSuccess = createAction(GETSUCCESS, routine => routine);
const getfail = createAction(GETFAIL);
export const getRemove = createAction(GETREMOVE, routineId => routineId);
export const getEdit = createAction(GETEDIT, (routineId, routineTest) => ({
  routineId,
  routineTest,
}));
export const getAdd = createAction(GETADD, routine => routine);
// 리듀서함수제작
const getRoutine = handleActions(
  {
    [GETSTART]: state => state,
    [GETADD]: (state, { payload }) => [...state, ...payload],
    [GETSUCCESS]: (state, { payload }) => payload,
    [GETFAIL]: state => state,
    [GETREMOVE]: state => state,
    [GETEDIT]: state => state,
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

// 지우기
function* removeRoutineSaga({ payload: routineId }) {
  try {
    const { id } = JSON.parse(localStorage.getItem('token'));
    const prevState = yield select(state => state.getRoutine);
    const newState = prevState.filter(routine => routineId.id !== routine.id);

    console.log(prevState);
    yield call(axios.patch, `/users/${id}`, { routines: newState });
    yield put(getSuccess(newState));
    console.log(prevState);
    yield put(push('/'));
  } catch (error) {
    console.log(error);
    yield put(getfail(error));
  }
}

export function* watchRemoveRoutineSaga() {
  yield takeEvery(GETREMOVE, removeRoutineSaga);
}

// 수정하기
function* editRoutineSaga({ payload: { routineId, routineTest } }) {
  try {
    const { id } = JSON.parse(localStorage.getItem('token'));
    const prevState = yield select(state => state.getRoutine);
    const newState = prevState.map(routine => {
      return routineId.id === routine.id ? { ...routine, routine: routineTest } : routine;
    });

    yield call(axios.patch, `/users/${id}`, { routines: newState });
    yield put(getSuccess(newState));
    console.log(prevState);
    yield put(push('/'));
  } catch (error) {
    console.log(error);
    yield put(getfail(error));
  }
}

export function* watcheditRoutineSaga() {
  yield takeEvery(GETEDIT, editRoutineSaga);
}
