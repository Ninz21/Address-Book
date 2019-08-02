/*
 * RecordList
 *
 * This is the first thing users see of our App, at the '/' route
 */

import { Link } from 'react-router-dom';
import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import { getRecord } from './actions';

import { makeSelectrecordList } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'recordList';

const title = {
  textAlign: 'center',
  fontFamily: 'arial',
};

const recordtable = {
  textAlign: 'center',
  width: '100%',
  fontFamily: 'Helvetica',
};

const headerstyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  width: '100%',
};

export function RecordList(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const { recordList, onGetRecord, match } = props;

  const { id } = match.params;

  useEffect(() => {
    onGetRecord(id);
  }, [recordList.update_status]);

  const { record } = recordList;
  const { name } = record;
  const { address } = record;
  const { ContactNumber } = record;

  return (
    <article>
      <header style={headerstyle}>
        <h1>Address Book</h1>
      </header>
      <fieldset>
        <legend>
          <h1 style={title}>List Of Record</h1>
        </legend>
        <table style={recordtable}>
          <thead>
            <tr>
              <th>NAME</th>
              <th>CONTACT NUMBER</th>
              <th>ADDRESS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{name}</td>
              <td>{address}</td>
              <td>{ContactNumber}</td>
            </tr>
          </tbody>
        </table>
        <Link to="/">Back to List</Link>
      </fieldset>
    </article>
  );
}

RecordList.propTypes = {
  recordList: PropTypes.object,
  onGetRecord: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

const mapStateToProps = createStructuredSelector({
  recordList: makeSelectrecordList(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onGetRecord: id => {
      dispatch(getRecord(id));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(RecordList);
