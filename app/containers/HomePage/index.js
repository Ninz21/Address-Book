/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */
import { Link } from 'react-router-dom';
import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import Form from './Form';
import {
  changeInput,
  changeInputSearch,
  changeInputField,
  getRecords,
  addRecord,
  deleteRecord,
  updateRecord,
  updateRecordData,
  fillInErrorMessage,
} from './actions';
import { makeSelectHome } from './selectors';
import reducer from './reducer';
import saga from './saga';

const key = 'home';

const container = {
  display: 'flex',
  padding: '26px',
};

const errorStyle = {
  color: 'red',
  fontSize: '10px',
};

const errorName = {
  color: 'red',
  fontSize: '10px',
  margin: '-15px 43px',
};

const errorAddress = {
  color: 'red',
  fontSize: '10px',
  margin: '-15px 57px',
};

const errorContact = {
  color: 'red',
  fontSize: '10px',
  margin: '-15px 117px',
};

const btnStyle = {
  background: '#ff0000',
  border: 'none',
  color: 'white',
  padding: '1px 5px',
  textAlign: 'center',
  fontSize: '16px',
  cursor: 'pointer',
  borderRadius: '2px',
  float: 'right',
};
const title = {
  textAlign: 'center',
  fontFamily: 'arial',
};

const recordtable = {
  textAlign: 'center',
  width: '100%',
  fontFamily: 'Helvetica',
};

const btnStyle1 = {
  background: 'black',
  border: 'none',
  color: 'white',
  padding: '1px 5px',
  textAlign: 'center',
  fontSize: '16px',
  cursor: 'pointer',
  borderRadius: '2px',
  float: 'right',
};

const btnStyle2 = {
  background: '#4CAF50',
  border: 'none',
  color: 'white',
  padding: '1px 5px',
  textAlign: 'center',
  fontSize: '16px',
  cursor: 'pointer',
  borderRadius: '2px',
  float: 'right',
};

const headerstyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  width: '100%',
};

const inputStyle = {
  width: '200px',
  height: '40px',
  display: 'inline-block',
  margin: '0px 0px',
};

const inputStyleAddress = {
  width: '200px',
  height: '40px',
  display: 'inline-block',
  margin: '0px 0px',
};

const inputStyleContact = {
  width: '200px',
  height: '40px',
  display: 'inline-block',
  margin: '0px 0px',
};

const submitStyle = {
  width: '70px',
  height: '30px',
  backgroundColor: '#4CAF50',
  color: 'white',
  margin: '19px 0px',
  border: 'none',
  borderRadius: '4px',
  textAlign: 'center',
};

const errorDisplay = {
  margin: '-30px 20px',
};

export function HomePage(props) {
  const {
    home,
    onUpdateRecord,
    onDeleteRecord,
    onSubmitForm,
    onChangeInput,
    onGetRecords,
    onUpdateForm,
    onChangeInputSearch,
  } = props;
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    onGetRecords();
  }, [home.update_status]);

  const { form, records, editRecord, updateId, error, rec, errors } = home;

  const filterRecords = records.filter(
    record =>
      record.name.indexOf(form.search) !== -1 ||
      record.ContactNumber.toString().indexOf(form.search) !== -1 ||
      record.address.indexOf(form.search) !== -1,
  );

  const record = filterRecords.map(function Records(data, i) {
    const { _id, name, ContactNumber, address } = data;
    return (
      <tr key={_id}>
        <td>{i + 1}</td>
        <td>{name}</td>
        <td>{ContactNumber}</td>
        <td>{address}</td>
        <td>
          <div>
            <button
              type="button"
              onClick={onDeleteRecord(_id)}
              style={btnStyle}
            >
              {' '}
              DELETE{' '}
            </button>
            <button
              type="button"
              onClick={onUpdateRecord(i, _id)}
              style={btnStyle1}
            >
              EDIT
            </button>
            <Link to={`/record/${_id}`}>
              <button type="button" style={btnStyle2}>
                VIEW
              </button>
            </Link>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <header style={headerstyle}>
        <h1>Address Book</h1>
      </header>
      <fieldset>
        <legend>
          <h1>Fill up the Form:</h1>
        </legend>

        <Form
          onSubmit={
            editRecord
              ? onUpdateForm(form, updateId)
              : onSubmitForm(form, records)
          }
        >
          <div style={errorDisplay}>
            <p style={errorStyle}>
              {error.submit}
              {errors}
              {error.submit1}
            </p>
          </div>

          <div style={container}>
            <div style={inputStyle}>
              <label htmlFor="name">
                <div style={errorName}>*</div>
                Name&nbsp;:
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder=""
                  value={form.name}
                  onChange={onChangeInput}
                />
              </label>
              <div style={errorStyle}>{error.name}</div>
            </div>
            &nbsp;
            <div style={inputStyleContact}>
              <label htmlFor="ContactNumber">
                <div style={errorContact}>*</div>
                Contact Number&nbsp;:
                <input
                  id="ContactNumber"
                  name="ContactNumber"
                  type="text"
                  placeholder=""
                  value={form.ContactNumber}
                  onChange={onChangeInput}
                />
              </label>
              <div style={errorStyle}>{error.ContactNumber}</div>
            </div>
            <div style={inputStyleAddress}>
              <label htmlFor="address">
                <div style={errorAddress}>*</div>
                Address&nbsp;:
                <input
                  id="address"
                  name="address"
                  type="text"
                  placeholder=""
                  value={form.address}
                  onChange={onChangeInput}
                />
              </label>
              <div style={errorStyle}>{error.address}</div>
            </div>
            <div>
              <input
                style={submitStyle}
                type="submit"
                value={editRecord ? 'Update' : 'Submit'}
                disabled={!!rec}
              />{' '}
            </div>
          </div>
        </Form>
      </fieldset>

      <fieldset>
        <legend>
          <h1 style={title}>List Of Records</h1>
        </legend>
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Search here..."
          value={form.search}
          onChange={onChangeInputSearch}
        />

        <table style={recordtable}>
          <thead>
            <tr>
              <th>NO.</th>
              <th>NAME</th>
              <th>CONTACT NUMBER</th>
              <th>ADDRESS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>{record}</tbody>
        </table>
      </fieldset>
    </article>
  );
}

HomePage.propTypes = {
  onSubmitForm: PropTypes.func,
  home: PropTypes.object,
  onChangeInput: PropTypes.func,
  onGetRecords: PropTypes.func,
  onDeleteRecord: PropTypes.func,
  onUpdateRecord: PropTypes.func,
  onUpdateForm: PropTypes.func,
  onChangeInputSearch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  home: makeSelectHome(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onGetRecords: () => {
      dispatch(getRecords());
    },
    onChangeInput: ({ target }) => {
      dispatch(changeInput(target.name, target.value));
    },
    onChangeInputSearch: ({ target }) => {
      dispatch(changeInputSearch(target.name, target.value));
    },
    onSubmitForm: (form, records) => evt => {
      const name = Object.keys(form)[0];
      const ContactNumber = Object.keys(form)[1];
      const address = Object.keys(form)[2];
      const submit = 'submit';
      const regex = /^[A-Za-z]+$/;
      const reg = /^[0-9]+$/;

      const isValid = regex.test(form.name);
      const isValid1 = reg.test(form.ContactNumber);
      const submit1 = 'submit1';

      if (form.name !== '') {
        if (form.name.length > 30 || !isValid) {
          dispatch(
            fillInErrorMessage(
              name,
              'Name should be 30 characters maximum and should not contain any number or special characters',
            ),
          );
        } else {
          dispatch(fillInErrorMessage(name, ''));
        }
      } else {
        dispatch(fillInErrorMessage(name, 'Name is requred'));
      }
      if (form.address !== '') {
        if (form.address.length > 30) {
          dispatch(
            fillInErrorMessage(
              address,
              'Address hould be 30 characters maximum',
            ),
          );
        } else {
          dispatch(fillInErrorMessage(address, ''));
        }
      } else {
        dispatch(fillInErrorMessage(address, 'Address is requred'));
      }
      if (form.ContactNumber !== '') {
        if (form.ContactNumber.length > 20 || !isValid1) {
          dispatch(
            fillInErrorMessage(
              ContactNumber,
              'Contact Number should be 20 characters max and only numberic',
            ),
          );
        } else {
          dispatch(fillInErrorMessage(ContactNumber, ''));
        }
      } else {
        dispatch(
          fillInErrorMessage(ContactNumber, 'Contact Number is requred'),
        );
      }
      if (
        form.name === '' &&
        form.address === '' &&
        form.ContactNumber === ''
      ) {
        dispatch(fillInErrorMessage(submit, 'Please fill in the form '));
      } else if (records.length >= 15) {
        dispatch(changeInputField(form));
        dispatch(
          fillInErrorMessage(submit1, 'Records should not exceed to 15'),
        );
      } else {
        dispatch(fillInErrorMessage(submit, ''));
        dispatch(addRecord(form));
        dispatch(changeInputField(form));
      }
      evt.preventDefault();
    },
    onUpdateForm: (form, updateId) => evt => {
      evt.preventDefault();
      dispatch(updateRecordData(form, updateId));
      dispatch(changeInputField(form));
    },
    onDeleteRecord: id => evt => {
      evt.preventDefault();
      dispatch(deleteRecord(id));
    },
    onUpdateRecord: (i, id) => evt => {
      evt.preventDefault();
      dispatch(updateRecord(i, id));
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
)(HomePage);
