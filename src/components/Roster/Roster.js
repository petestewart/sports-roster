import React from 'react';
import PropTypes from 'prop-types';

import Player from '../Player/Player';

import './Roster.scss';
import playerData from '../../helpers/data/playerData';

class Roster extends React.Component {
  state = {
    players: [],
  }

  static propTypes = {
    team: PropTypes.object.isRequired,
  }

  deletePlayer = (playerId) => {
    playerData.deletePlayer(playerId)
      .then(() => this.getPlayers())
      .catch((err) => console.error(err));
  };

  getPlayers = () => {
    playerData.getPlayers('team1')
      .then((players) => this.setState({ players }))
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getPlayers();
  }

  render() {
    const { players } = this.state;

    const playerCards = players.map((player) => <Player key={player.id} player={player} deletePlayer={this.deletePlayer} />);

    return (
      <div className="roster">
        { playerCards }
      </div>
    );
  }
}

export default Roster;
