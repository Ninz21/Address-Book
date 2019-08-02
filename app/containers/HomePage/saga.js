/**
 * Gets the repositories of the user from Github
 */
import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  GET_RECORDS,
  ADD_RECORD,
  DELETE_RECORD,
  UPDATE_RECORD_DATA,
  UPDATE_RECORD_DATA_END,
} from './constants';
import {
  getRecordSuccess,
  getRecordError,
  addRecordSuccess,
  addRecordError,
  deleteRecordSuccess,
  deleteRecordError,
  updateRecordSuccess,
  updateRecordError,
} from './actions';

function getRecordsApi() {
  return axios.request({
    method: 'get',
    url: 'http://localhost:4000/',
  });
}

function addRecordsApi(data) {
  return axios.request({
    data: {
      ...data,
    },
    method: 'post',
    url: 'http://localhost:4000/records',
  });
}

function DeleteRecordsApi(id) {
  return axios.request({
    method: 'delete',
    url: `http://localhost:4000/records/${id}`,
  });
}

function UpdateRecordsApi(data, id) {
  return axios.request({
    data: {
      ...data,
    },
    method: 'put',
    url: `http://localhost:4000/records/${id}`,
  });
}
/**
 * Get all records from API
 */
export function* GetRecords() {
  try {
    const records = yield call(getRecordsApi);
    yield put(getRecordSuccess(records));
  } catch (err) {
    yield put(getRecordError(err));
  }
}

/**
 * Add record from API
 */

export function* AddRecord({ data }) {
  try {
    const reg = /^[A-Za-za]+$/;
    const isValid = reg.test(data.name);
    if (!isValid) {
      const err = 'Error';
      yield put(addRecordError(err));
    } else {
      const records = yield call(addRecordsApi, data);
      yield put(addRecordSuccess(records.data));
    }
  } catch (err) {
    yield put(addRecordError(err));
  }
}

/**
 * Delete record from API
 */
export function* DeleteRecord({ id }) {
  try {
    const records = yield call(DeleteRecordsApi, id);
    yield put(deleteRecordSuccess(records.data, id));
  } catch (err) {
    yield put(deleteRecordError(err));
  }
}

/**
 * Update record from API
 */
export function* UpdateRecord({ data, id }) {
  try {
    const records = yield call(UpdateRecordsApi, data, id);
    yield put(updateRecordSuccess(records.data, id));
  } catch (err) {
    yield put(updateRecordError(err));
  } finally {
    yield put({ type: UPDATE_RECORD_DATA_END });
  }
}

export default function*() {
  yield all([
    takeLatest(GET_RECORDS, GetRecords),
    takeLatest(ADD_RECORD, AddRecord),
    takeLatest(DELETE_RECORD, DeleteRecord),
    takeLatest(UPDATE_RECORD_DATA, UpdateRecord),
  ]);
}
