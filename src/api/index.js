import client from './axios';

import {
    DISCOVER_MOVIES_ENDPOINT,
    SEARCH_MOVIES_ENDPOINT,
} from '../constants';


export const discoverMovies = (popularity = 'popularity.desc') => 
    client.get(`${DISCOVER_MOVIES_ENDPOINT}?sort_by=${popularity}`)
        .then(response => response.data);

export const searchMovies = (query = '') => 
    client.get(`${SEARCH_MOVIES_ENDPOINT}?query=${query}`)
        .then(response => response.data);