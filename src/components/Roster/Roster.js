import React from 'react';
import PropTypes from 'prop-types';

import './Roster.scss';
import playerData from '../../helpers/data/playerData';

class Roster extends React.Component {
  state = {
    players: [],
  }

  static propTypes = {
    team: PropTypes.object.isRequired,
  }

  componentDidMount() {
    playerData.getPlayers('team1')
      .then((players) => this.setState({ players }))
      .catch((err) => console.error(err));
  }

  render() {
    const { players } = this.state;
    const { team } = this.props;
    if (players.length > 0) { console.warn(players[0]); }

    return (
    <h1>{team.name}</h1>);
  }
}

export default Roster;
