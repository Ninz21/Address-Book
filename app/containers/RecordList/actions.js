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

import { GET_RECORD_SUCCESS, GET_RECORD, GET_RECORD_ERROR } from './constants';

export function getRecord(id) {
  return {
    type: GET_RECORD,
    id,
  };
}

export function getRecordError(err) {
  return {
    type: GET_RECORD_ERROR,
    err,
  };
}

export function getRecordSuccess({ data }) {
  return {
    type: GET_RECORD_SUCCESS,
    data,
  };
}
