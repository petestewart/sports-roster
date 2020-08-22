import React from 'react';
import PropTypes from 'prop-types';

import './Player.scss';

class Player extends React.Component {
  static propTypes = {
    player: PropTypes.object.isRequired,
  }

  render() {
    const { player } = this.props;

    return (
      <div className="card player-card">
        <img className="card-img-top" src={player.imageUrl} alt={player.name} />
        <div className="card-body">
          <h5 className="card-title">{player.name}</h5>
          <p className="card-text">{player.position}</p>
        </div>
      </div>
    );
  }
}

export default Player;
