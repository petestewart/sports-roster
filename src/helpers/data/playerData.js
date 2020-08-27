import axios from 'axios';
import apiKeys from '../apiKeys.json';

import utils from '../utils';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getPlayers = (teamId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/players/${teamId}.json`)
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

const updatePlayer = (playerId, updatedPlayer) => axios.put(`${baseUrl}/players/team1/${playerId}.json`, updatedPlayer);

const deletePlayer = (playerId) => axios.delete(`${baseUrl}/players/team1/${playerId}.json`);

export default { getPlayers, deletePlayer, updatePlayer };
