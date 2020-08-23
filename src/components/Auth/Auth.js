import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import './Auth.scss';

const Auth = () => {
  const loginClickEvent = (e) => {
    e.preventDefault();
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider);
  };

  return (
        <div className="Auth">
          <span className="auth-item" onClick={loginClickEvent}><i className="fas fa-user fa-lg"></i></span>
        </div>
  );
};

export default Auth;
