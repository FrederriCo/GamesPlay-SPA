import * as api from '../api/api.js';

const endPoints = {
    recent: '/data/games?sortBy=_createdOn%20desc&distinct=category',
	games: '/data/games?sortBy=_createdOn%20desc',
	create: '/data/games',
	byId: '/data/games/',
	deleteById: '/data/games/',

};

export async function getRecent() {
    return api.get(endPoints.recent);
};

export async function getAllGames() {
    return api.get(endPoints.games);
};

export async function create(data) {
    return api.post(endPoints.create, data);
}

export async function getById(id) {
    return api.get(endPoints.byId + id);
}

export async function deleteById(id) {
    return api.del(endPoints.deleteById + id);
}