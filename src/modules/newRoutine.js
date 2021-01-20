import { createAction, handleActions } from 'redux-actions';
import axios from '../../node_modules/axios/index';
import { push } from 'connected-react-router';
import { call, put, takeEvery } from 'redux-saga/effects';

const NEWSTART = 'newRoutine/START';
const NEWSUCCESS = 'newRoutine/SUCCESS';
const NEWFAIL = 'newRoutine/FAIL';

export const newStart = createAction(NEWSTART, routine => routine);
<<<<<<< HEAD
const newSuccess = createAction(NEWSUCCESS, routine => ({ routine }));
=======
const newSuccess = createAction(NEWSUCCESS, routine => routine);
>>>>>>> 6d367f135a772dd5e717ee9d056d7dbbf6870305
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
    const { id } = JSON.parse(localStorage.getItem('token'));
<<<<<<< HEAD
    console.log(yield call(axios.get, `/users/${id}?=routine`));
    // const loginUser = yield call(axios.post, `/users/${id}/routine`);

    yield put(newSuccess(payload));
    console.log('ddd');
    // yield put(push('/'));
=======
    const res = yield call(axios.get, `/users/${id}`);
    console.log(res);
    yield put(newSuccess(payload));
    yield put(push('/'));
>>>>>>> 6d367f135a772dd5e717ee9d056d7dbbf6870305
  } catch (error) {
    yield put(newfail(error));
  }
}

export function* routineSaga() {
  yield takeEvery(NEWSTART, newRoutineSaga);
}
