import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import userInfo, { userSaga } from './user';
import { connectRouter } from 'connected-react-router';
import signinfo, { signupSaga } from './userSign';
import newRoutine, { routineSaga } from './newRoutine';

export const rootReducer = history =>
  combineReducers({
    userInfo,
    signinfo,
    newRoutine,
    router: connectRouter(history),
  });

export function* rootSaga() {
  yield all([userSaga(), signupSaga(), routineSaga()]);
}
