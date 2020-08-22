import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import fbConnection from '../helpers/data/connection';

import Navbar from '../components/Navbar/Navbar';
import Team from '../components/Team/Team';

import './App.scss';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
    user: {},
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true, user });
      } else {
        this.setState({ authed: false, user: {} });
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
        return <Team user={this.state.user}/>;
      }
      return '';
    };

    return (
      <div className="App">
        <Navbar authed={authed}/>
      { loadComponent() }
      </div>
    );
  }
}

export default App;
