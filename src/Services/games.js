import * as api from '../api/api.js';

const endPoints = {
    recent: '/data/games?sortBy=_createdOn%20desc&distinct=category'   

};

export async function getRecent() {
    return api.get(endPoints.recent);
};