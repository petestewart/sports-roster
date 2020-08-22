import axios from 'axios';
import apiKeys from '../apiKeys.json';

import utils from '../utils';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getPlayers = (teamId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/players/${teamId}.json`)
    // .then(({ data }) => console.warn('in getPlayers', data))
    .then(({ data }) => resolve(utils.convertFirebaseCollection(data)))
    .catch((err) => reject(err));
});

const deletePlayer = (playerId) => axios.delete(`${baseUrl}/players/team1/${playerId}.json`);
// const deletePlayer = (playerId) => console.warn(playerId);

export default { getPlayers, deletePlayer };
