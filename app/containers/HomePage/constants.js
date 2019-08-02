/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_INPUT = 'boilerplate/Home/CHANGE_INPUT';
export const CHANGE_INPUT_SEARCH =
  'boilerplate/Home/CHANGE_INPUT/CHANGE_INPUT_SEARCH';
export const CHANGE_INPUT_FIELD =
  'boilerplate/Home/CHANGE_INPUT/CHANGE_INPUT_FIELD';
export const GET_RECORDS = 'boilerplate/Home/GET_RECORDS';
export const GET_RECORDS_ERROR = 'boilerplate/Home/ GET_RECORDS_ERROR';
export const GET_RECORDS_SUCCESS = 'boilerplate/Home/GET_RECORDS_SUCCESS';

export const ADD_RECORD = 'boilerplate/Home/ADD_RECORD';
export const ADD_RECORD_SUCCESS = 'boilerplate/Home/ADD_RECORD_SUCCESS';
export const ADD_RECORD_ERROR = 'boilerplate/Home/ADD_RECORD_ERROR';

export const DELETE_RECORD = 'boilerplate/Home/DELETE_RECORD';
export const DELETE_RECORD_ERROR = 'boilerplate/Home/DELETE_RECORD_ERROR';
export const DELETE_RECORD_SUCCESS = 'boilerplate/Home/DELETE_RECORD_SUCCESS';

export const UPDATE_RECORD = 'boilerplate/Home/UPDATE_RECORD';
export const UPDATE_RECORD_ERROR = 'boilerplate/Home/UPDATE_RECORD_ERROR';
export const UPDATE_RECORD_DATA = 'boilerplate/Home/UPDATE_RECORD_DATA';
export const UPDATE_RECORD_DATA_SUCCESS =
  'boilerplate/Home/UPDATE_RECORD_DATA_SUCCESS';
export const UPDATE_RECORD_DATA_END = 'boilerplate/Home/UPDATE_RECORD_DATA_END';

export const FILL_IN_ERROR_MESSAGE = 'boilerplate/Home/FILL_IN_ERROR_MESSAGE';
export const FILTER_RECORD = 'boilerplate/Home/FILTER_RECORD';
export const DISPLAY_ERROR_SUCCESS = 'boilerplate/Home/DISPLAY_ERROR_SUCCESS';
