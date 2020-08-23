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
      <div className="player-card my-2">
        <img className="player-img" src={player.imageUrl} alt={player.name} />
        <div className="player-info">
          <h5 className="">{player.name}</h5>
          <div className="controls">
            <i className="fas fa-edit edit-player-btn ml-1"></i>
            <span>{player.position}</span>
            <i className="fas fa-ban delete-player-btn mr-1" onClick={this.deletePlayerEvent}></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
