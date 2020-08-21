import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import './Auth.scss';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider);
  }

  render() {
    return (

        <div className="Auth">
          <span className="auth-item" onClick={this.loginClickEvent}><i className="fas fa-user fa-lg"></i></span>
        </div>
    );
  }
}

export default Auth;
