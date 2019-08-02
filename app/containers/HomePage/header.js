import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerstyle}>
      <h1>Address Book</h1>
      <Link to="/" style={headerstyle}>
        Home
      </Link>{' '}
      |{' '}
      <Link to="/listofrecord" style={headerstyle}>
        List of record
      </Link>
    </header>
  );
}

const headerstyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
};

export default Header;
