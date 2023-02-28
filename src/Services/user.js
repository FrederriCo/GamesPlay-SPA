import * as api from '../api/api.js';
import { clearUserData, setUserData } from '../util.js';

const endPoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users//logout'

};

export async function login(email, password) {
    const result = await api.post(endPoints.login, { email, password });
    setUserData(result);

    return result;
}

export async function register(email, password) {
    const result = await api.post(endPoints.register, { email, password });
    setUserData(result);

    return result;
}

export async function logout(){
    api.get(endPoints.logout);
    clearUserData();
}