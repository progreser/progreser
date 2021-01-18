import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import userinfo, { userSaga } from './user';

export const rootReducer = combineReducers({ userinfo });

export function* rootSaga() {
  yield all([userSaga()]);
}
