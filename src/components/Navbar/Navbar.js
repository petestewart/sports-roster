import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

import Auth from '../Auth/Auth';

import './Navbar.scss';

const Navbar = (props) => {
  const { authed, team } = props;

  const logoutClickEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  };

  const authButton = () => {
    if (authed) {
      return <span className="auth-item logout-button" onClick={logoutClickEvent}>
        <i className="fas fa-sign-out-alt fa-lg"></i>
        </span>;
    }
    return <Auth />;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        <img src={team.crestUrl} alt="crest" className="crest"/>
        <h2 style={{ color: `${team.bgcolor1}` }}>{team.name}</h2>
      </a>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          { authButton() }
        </li>
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  authed: PropTypes.bool.isRequired,
};

export default Navbar;
