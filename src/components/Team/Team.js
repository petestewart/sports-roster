import React from 'react';
// import PropTypes from 'prop-types';

// import authData from '../../helpers/data/authData';
import teamData from '../../helpers/data/teamData';

import './Team.scss';

class Team extends React.Component {
  state = {
    team: {},
  }

  componentDidMount() {
    const { user } = this.props;
    teamData.getTeam(user.uid)
      .then((team) => this.setState({ team: team[0] }))
      .catch((err) => console.error(err));
  }

  render() {
    const { team } = this.state;

    return (
      <h1>{team.name}</h1>
    );
  }
}

export default Team;
