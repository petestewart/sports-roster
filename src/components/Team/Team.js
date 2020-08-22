import React from 'react';
import PropTypes from 'prop-types';

import Roster from '../Roster/Roster';

// import authData from '../../helpers/data/authData';
import teamData from '../../helpers/data/teamData';

import './Team.scss';

class Team extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
  }

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
      <div className="field" style={{ backgroundColor: `${team.bgcolor1}` }}>
        <h1>{team.name}</h1>
        <Roster team={team} />
      </div>
    );
  }
}

export default Team;
