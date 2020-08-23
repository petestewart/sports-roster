import React from 'react';
import PropTypes from 'prop-types';

import Player from '../Player/Player';

import './Roster.scss';
import playerData from '../../helpers/data/playerData';
import formation from '../../helpers/formation';

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

    const lines = formation.createFormation(players);

    const playerCards = (line) => line.map((player) => <Player key={player.id} player={player} deletePlayer={this.deletePlayer} />);

    return (
      <div className="roster">

        <div id="top">
          { playerCards(lines.top) }
        </div>
        <div id="mid">
          { playerCards(lines.mid) }
        </div>
        <div id="back">
          { playerCards(lines.back) }
        </div>
        <div id="goal">
          { playerCards(lines.goal) }
        </div>
      </div>
    );
  }
}

export default Roster;
