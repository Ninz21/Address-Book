/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  CHANGE_INPUT,
  GET_RECORDS_ERROR,
  GET_RECORDS_SUCCESS,
  GET_RECORDS,
  ADD_RECORD,
  ADD_RECORD_ERROR,
  ADD_RECORD_SUCCESS,
  DELETE_RECORD,
  DELETE_RECORD_ERROR,
  DELETE_RECORD_SUCCESS,
  UPDATE_RECORD,
  UPDATE_RECORD_ERROR,
  UPDATE_RECORD_DATA,
  UPDATE_RECORD_DATA_SUCCESS,
  FILL_IN_ERROR_MESSAGE,
  CHANGE_INPUT_FIELD,
  CHANGE_INPUT_SEARCH,
  FILTER_RECORD,
  DISPLAY_ERROR_SUCCESS,
} from './constants';

export function changeInput(key, value) {
  return {
    type: CHANGE_INPUT,
    key,
    value,
  };
}

export function changeInputSearch(key, value) {
  return {
    type: CHANGE_INPUT_SEARCH,
    key,
    value,
  };
}

export function changeInputField(form) {
  return {
    type: CHANGE_INPUT_FIELD,
    form,
  };
}

export function fillInErrorMessage(key, value) {
  return {
    type: FILL_IN_ERROR_MESSAGE,
    key,
    value,
  };
}

export function filterRecord(form) {
  return {
    type: FILTER_RECORD,
    form,
  };
}

export function getRecords() {
  return {
    type: GET_RECORDS,
  };
}

export function getRecordError(err) {
  return {
    type: GET_RECORDS_ERROR,
    err,
  };
}

export function getRecordSuccess({ data }) {
  return {
    type: GET_RECORDS_SUCCESS,
    data,
  };
}

export function addRecord(data) {
  return {
    type: ADD_RECORD,
    data,
  };
}
export function addRecordError(err) {
  return {
    type: ADD_RECORD_ERROR,
    err,
  };
}

export function addRecordSuccess(data) {
  return {
    type: ADD_RECORD_SUCCESS,
    data,
  };
}

export function deleteRecord(id) {
  return {
    type: DELETE_RECORD,
    id,
  };
}

export function deleteRecordError(err) {
  return {
    type: DELETE_RECORD_ERROR,
    err,
  };
}
export function deleteRecordSuccess(data, id) {
  return {
    type: DELETE_RECORD_SUCCESS,
    data,
    id,
  };
}

export function updateRecord(key, id) {
  return {
    type: UPDATE_RECORD,
    key,
    id,
  };
}
export function updateRecordError(err) {
  return {
    type: UPDATE_RECORD_ERROR,
    err,
  };
}

export function updateRecordData(data, id) {
  return {
    type: UPDATE_RECORD_DATA,
    data,
    id,
  };
}

export function updateRecordSuccess(data, id) {
  return {
    type: UPDATE_RECORD_DATA_SUCCESS,
    data,
    id,
  };
}

export function displayError() {
  return {
    type: DISPLAY_ERROR_SUCCESS,
  };
}
