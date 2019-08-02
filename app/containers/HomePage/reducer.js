/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  CHANGE_INPUT,
  GET_RECORDS,
  GET_RECORDS_SUCCESS,
  GET_RECORDS_ERROR,
  ADD_RECORD,
  ADD_RECORD_SUCCESS,
  DELETE_RECORD,
  DELETE_RECORD_SUCCESS,
  UPDATE_RECORD,
  UPDATE_RECORD_DATA_SUCCESS,
  UPDATE_RECORD_DATA,
  UPDATE_RECORD_DATA_END,
  CHANGE_INPUT_FIELD,
  FILL_IN_ERROR_MESSAGE,
  CHANGE_INPUT_SEARCH,
  FILTER_RECORD,
  DISPLAY_ERROR_SUCCESS,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  errors: '',
  error: {
    name: '',
    ContactNumber: '',
    address: '',
    submit: '',
    submit1: '',
  },
  form: {
    name: '',
    ContactNumber: '',
    address: '',
    search: '',
  },
  rec: false,
  records: [],
  editRecord: false,
  updateId: '',
  update_status: false,
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_INPUT: {
        draft.form[action.key] = action.value;
        break;
      }

      case CHANGE_INPUT_SEARCH: {
        draft.form[action.key] = action.value;
        break;
      }
      case CHANGE_INPUT_FIELD: {
        draft.form.name = '';
        draft.form.ContactNumber = '';
        draft.form.address = '';

        break;
      }

      case FILL_IN_ERROR_MESSAGE: {
        draft.error[action.key] = action.value;
        break;
      }

      case FILTER_RECORD: {
        draft.form.search = action.form.search;

        break;
      }

      case GET_RECORDS: {
        draft.loading = true;
        break;
      }
      case GET_RECORDS_SUCCESS: {
        draft.error.submit1 = '';
        draft.records = action.data;

        break;
      }

      case GET_RECORDS_ERROR: {
        break;
      }
      case ADD_RECORD: {
        draft.loading = true;
        break;
      }
      case ADD_RECORD_SUCCESS: {
        if (action.data.message === 'Name already exists.') {
          draft.errors = action.data.message;
        } else {
          draft.errors = '';
          const recordsCopy = draft.records;
          recordsCopy.push(action.data);
          draft.records = recordsCopy;
        }

        draft.loading = false;
        break;
      }
      case DELETE_RECORD: {
        draft.loading = true;
        break;
      }
      case DELETE_RECORD_SUCCESS: {
        draft.error.submit1 = '';
        const recordVal = state.records;
        const { id } = action;

        /* eslint no-underscore-dangle: 0 */
        const filteredRecord = recordVal.filter(record => record._id !== id);

        draft.records = filteredRecord;
        draft.loading = false;
        break;
      }
      case UPDATE_RECORD: {
        draft.error.submit1 = '';

        const recordData = state.records[action.key];
        draft.updateId = action.id;
        draft.editRecord = true;
        draft.form.name = recordData.name;
        draft.form.address = recordData.address;
        draft.form.ContactNumber = recordData.ContactNumber;
        draft.loading = true;
        break;
      }
      case UPDATE_RECORD_DATA: {
        draft.loading = true;
        break;
      }
      case UPDATE_RECORD_DATA_SUCCESS: {
        draft.update_status = true;
        draft.loading = true;
        draft.editRecord = false;
        break;
      }
      case UPDATE_RECORD_DATA_END: {
        draft.update_status = false;
        draft.loading = false;

        break;
      }
      case DISPLAY_ERROR_SUCCESS: {
        draft.error.submit1 = '';
        break;
      }
    }
  });

export default homeReducer;
