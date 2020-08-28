import React, { useState, useEffect } from 'react';

import authData from '../../helpers/data/authData';

import './PlayerForm.scss';

const PlayerForm = (props) => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect((() => {
    setName(props.player.name);
    setPosition(props.player.position);
    setImageUrl(props.player.imageUrl);
  }), [props.player.imageUrl, props.player.name, props.player.position]);

  const changeNameEvent = (e) => {
    setName(e.target.value);
  };

  const changePositionEvent = (e) => {
    let newPosition = e.target.value.toUpperCase().substring(0, 3);
    const firstLetter = ['A', 'C', 'D', 'G', 'L', 'M', 'R'];
    const secondLetter = ['F', 'M', 'B', 'K'];
    const thirdLetter = ['L', 'R'];
    if (!firstLetter.includes(newPosition.charAt(0))) { newPosition = ''; }
    if (newPosition.charAt(0) === 'G' && newPosition !== 'GK') { newPosition = newPosition.charAt(0); }
    if (!secondLetter.includes(newPosition.charAt(1))) { newPosition = newPosition.charAt(0); }
    if (!thirdLetter.includes(newPosition.charAt(2))) { newPosition = newPosition.substring(0, 2); }
    if (!['B', 'M', 'F'].includes(newPosition.charAt(1))) { newPosition = newPosition.substring(0, 2); }
    setPosition(newPosition);
  };

  const changeImageUrlEvent = (e) => {
    setImageUrl(e.target.value);
  };

  const updatePlayerEvent = (e) => {
    e.preventDefault();
    const { updatePlayer } = props;
    const updatedPlayer = {
      name,
      position,
      imageUrl,
      uid: authData.getUid(),
    };
    updatePlayer(props.player.id, updatedPlayer);
  };

  return (
    <form>
      <div className="form-group player-edit-form">
        <label htmlFor="playerName">Name</label>
        <input
          type="text"
          className="form-control"
          id="playerName"
          value={name}
          onChange={changeNameEvent}
          />
        <label htmlFor="playerPosition">Position</label>
        <input type="text"
        className="form-control"
        id="playerPosition"
        value={position}
        onChange={changePositionEvent}
        />
        <label htmlFor="playerUrl">Image Url</label>
        <input type="text"
        className="form-control"
        id="playerUrl"
        value={imageUrl}
        onChange={changeImageUrlEvent}
        />
        <i className="fas fa-check-square mx-4 text-success control" onClick={updatePlayerEvent}></i>
        <i className="fas fa-window-close mx-4 text-danger control" onClick={props.cancelEdit}></i>

      </div>
    </form>
  );
};

export default PlayerForm;
