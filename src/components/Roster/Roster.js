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

  componentDidMount() {
    playerData.getPlayers('team1')
      .then((players) => this.setState({ players }))
      .catch((err) => console.error(err));
  }

  render() {
    const { players } = this.state;
    // const { team } = this.props;
    // if (players.length > 0) { console.warn(players[0]); }

    const playerCards = players.map((player) => <Player key={player.id} player={player} />);

    return (
      <div className="roster">
        { playerCards }
      </div>
    );
  }
}

export default Roster;
