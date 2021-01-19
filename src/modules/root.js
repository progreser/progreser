import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import userInfo, { userSaga } from './user';
import { connectRouter } from 'connected-react-router';
import signinfo, { signupSaga } from './userSign';

export const rootReducer = history =>
  combineReducers({
    userInfo,
    signinfo,
    router: connectRouter(history),
  });

export function* rootSaga() {
  yield all([userSaga(), signupSaga()]);
}
