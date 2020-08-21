import React from 'react';
import PropTypes from 'prop-types';

import './Player.scss';

class Player extends React.Component {
  static propTypes = {
    player: PropTypes.object.isRequired,
  }

  render() {
    const { player } = this.props;
    return (<h1>{player.name}</h1>);
  }
}

export default Player;
