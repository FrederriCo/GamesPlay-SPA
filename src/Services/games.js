import * as api from '../api/api.js';

const endPoints = {
    recent: '/data/games?sortBy=_createdOn%20desc&distinct=category',
	games: '/data/games?sortBy=_createdOn%20desc'	

};

export async function getRecent() {
    return api.get(endPoints.recent);
};