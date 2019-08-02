/**
 * Gets the repositories of the user from Github
 */
import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { GET_RECORD } from './constants';
import { getRecordSuccess, getRecordError } from './actions';

function getRecordApi(id) {
  return axios.request({
    method: 'get',
    url: `http://localhost:4000/records/${id}`,
  });
}

/**
 * Get record from API
 */
export function* GetRecord({ id }) {
  try {
    const record = yield call(getRecordApi, id);
    yield put(getRecordSuccess(record));
  } catch (err) {
    yield put(getRecordError(err));
  }
}

export default function*() {
  yield all([takeLatest(GET_RECORD, GetRecord)]);
}
