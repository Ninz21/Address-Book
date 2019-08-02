/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { recordListinitialState } from './reducer';

const selectrecordList = stateRecord =>
  stateRecord.recordList || recordListinitialState;

const makeSelectrecordList = () =>
  createSelector(
    selectrecordList,
    recordListState => recordListState || {},
  );

export { selectrecordList, makeSelectrecordList };
