import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import fbConnection from '../helpers/data/connection';

import Navbar from '../components/Navbar/Navbar';
import Team from '../components/Team/Team';

import teamData from '../helpers/data/teamData';

import './App.scss';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
    team: {},
    user: {},
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        teamData.getTeam(user.uid)
          .then((team) => this.setState({ authed: true, team: team[0], user }))
          .catch((err) => console.error(err));
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
        return <Team team={this.state.team} user={this.state.user}/>;
      }
      return '';
    };

    return (
      <div className="App">
        <Navbar authed={authed} team={this.state.team}/>
      { loadComponent() }
      </div>
    );
  }
}

export default App;
