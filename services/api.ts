import axios from 'axios';

export const api = axios.create({
    timeout: 1000,
    baseURL: 'https://pokeapi.co/api/v2/pokemon/',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // Authorization: 'Bearer ACCESS_TOKEN'
    }
});
