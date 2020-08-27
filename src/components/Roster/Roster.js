import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Player from '../Player/Player';

import './Roster.scss';
import playerData from '../../helpers/data/playerData';
import formation from '../../helpers/formation';

const Roster = () => {
  const [players, setPlayers] = useState([]);

  const getPlayers = () => {
    playerData.getPlayers('team1')
      .then((response) => setPlayers(response))
      .catch((err) => console.error(err));
  };

  useEffect(getPlayers, []);

  const deletePlayer = (playerId) => {
    playerData.deletePlayer(playerId)
      .then(() => getPlayers())
      .catch((err) => console.error(err));
  };

  const linedUpCards = () => {
    const lines = formation.createFormation(players);
    const formedLines = {};
    const lineCards = (line) => line.map((player) => <Player key={player.id} player={player} deletePlayer={deletePlayer} getPlayers={getPlayers} />);
    formedLines.top = lineCards(lines.top);
    formedLines.mid = lineCards(lines.mid);
    formedLines.back = lineCards(lines.back);
    formedLines.goal = lineCards(lines.goal);
    return formedLines;
  };

  return (
      <div className="roster">
        <div id="top">
          { linedUpCards().top }
        </div>
        <div id="mid">
          { linedUpCards().mid }
        </div>
        <div id="back">
          { linedUpCards().back }
        </div>
        <div id="goal">
          { linedUpCards().goal }
        </div>
      </div>
  );
};

Roster.propTypes = {
  team: PropTypes.object.isRequired,
};

export default Roster;
