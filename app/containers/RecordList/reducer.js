/*
 *  recordListReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { GET_RECORD, GET_RECORD_ERROR, GET_RECORD_SUCCESS } from './constants';

// The initial state of the App
export const recordListinitialState = {
  loading: false,
  record: [],
};

/* eslint-disable default-case, no-param-reassign */
const recordListReducer = (stateRecord = recordListinitialState, action) =>
  produce(stateRecord, draft => {
    switch (action.type) {
      case GET_RECORD:
        draft.loading = true;
        break;

      case GET_RECORD_SUCCESS:
        draft.record = action.data;
        break;

      case GET_RECORD_ERROR:
        break;
    }
  });

export default recordListReducer;
