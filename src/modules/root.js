
import { all } from 'redux-saga/effects';
import { combineReducers } from 'redux';
import userInfo, { userSaga } from './user';

export const rootReducer = combineReducers({
  userInfo,
});


export function* rootSaga() {
  yield all([userSaga()]);
}
