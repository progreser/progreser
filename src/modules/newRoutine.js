const NEWSTART = 'newRoutine/START';
const NEWSUCCESS = 'newRoutine/SUCCESS';
const NEWFAIL = 'newRoutine/FAIL';

export const newStart = createAction(NEWSTART, () => ({ id, name, pass }));
const newSuccess = createAction(NEWSUCCESS, (id, name, pass) => ({ id, name, pass }));
const newFail = createAction(NEWFAIL);

const newRoutine = handleActions(
  {
    [NEWSTART]: state => ({ ...state }),
    [NEWSUCCESS]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    [NEWFAIL]: (state, { payload }) => ({ ...state, error: payload }),
  },
  {},
);
export default newRoutine;

function* newRoutineSaga({ payload }) {
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

export function* routineSaga() {
  yield takeEvery(NEWSTART, newRoutineSaga);
}
