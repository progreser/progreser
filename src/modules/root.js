import { combineReducers } from 'redux';
import userinfo from './user';
import { userSaga } from './user';
import { all } from 'redux-saga/effects';

export const rootReducer = combineReducers({ userinfo });

export function* rootSaga() {
  yield all([userSaga()]);
}
