import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import userInfo, { userSaga } from './user';
import { connectRouter } from 'connected-react-router';
import signinfo, { signupSaga } from './userSign';
import newRoutine, { routineSaga } from './newRoutine';
import { reducer as formReducer } from 'redux-form';
export const rootReducer = history =>
  combineReducers({
    userInfo,
    signinfo,
    newRoutine,
    router: connectRouter(history),
    form: formReducer,
  });

export function* rootSaga() {
  yield all([userSaga(), signupSaga(), routineSaga()]);
}
