import React from 'react';
import PropTypes from 'prop-types';

import './Player.scss';

class Player extends React.Component {
  static propTypes = {
    player: PropTypes.object.isRequired,
  }

  deletePlayerEvent = (e) => {
    e.preventDefault();
    const { deletePlayer, player } = this.props;
    deletePlayer(player.id);
  }

  render() {
    const { player } = this.props;

    return (
      <div className="card player-card">
        <img className="card-img-top" src={player.imageUrl} alt={player.name} />
        <div className="card-body">
          <h5 className="card-title">{player.name}</h5>
          <p className="card-text">{player.position}</p>
          <i className="fas fa-ban delete-player-btn" onClick={this.deletePlayerEvent}></i>
        </div>
      </div>
    );
  }
}

export default Player;
