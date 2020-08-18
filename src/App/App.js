import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import fbConnection from '../helpers/data/connection';

import Auth from '../Auth/Auth';

import './App.scss';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    const loadComponent = () => {
      if (authed) {
        // return <Roster />;
      }
      return <Auth />;
    };

    return (
      <div className="App">
        {/* <Navbar authed={authed}/> */}
      { loadComponent }
      </div>
    );
  }
}

export default App;
