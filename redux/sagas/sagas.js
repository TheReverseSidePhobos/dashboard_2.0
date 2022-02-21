import { takeEvery, put, call } from 'redux-saga/effects';
import * as types from '../actions/types';

function* toggleModal(){
  try {
    yield put({ type: types.TOGGLE_MODAL_SUC })
  } catch (e) {
    console.log(e)
  }
}


export function* rootSaga() {
  yield takeEvery(types.TOGGLE_MODAL, toggleModal);
}