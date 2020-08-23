import React from 'react';
import PropTypes from 'prop-types';

import './Player.scss';

const Player = (props) => {
  console.warn('Player component called');

  const deletePlayerEvent = (e) => {
    e.preventDefault();
    const { deletePlayer, player } = props;
    deletePlayer(player.id);
  };

  const { player } = props;

  return (
    <div className="player-card my-2">
      <img className="player-img" src={player.imageUrl} alt={player.name} />
      <div className="player-info">
        <h5 className="">{player.name}</h5>
        <div className="controls">
          <i className="fas fa-edit edit-player-btn ml-1"></i>
          <span>{player.position.substring(0, 2)}</span>
          <i className="fas fa-ban delete-player-btn mr-1" onClick={deletePlayerEvent}></i>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.object.isRequired,
};

export default Player;
