import { clearUserData, getAccessToken } from "../util.js";

const host = 'http://localhost:3030';

async function request(method, url, data) {
    const options = {
        method,
        headers: {}
    };
	const token = getAccessToken();
    if(token) {
        options.headers['X-Authorization'] = token;
    }

    if(data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

}