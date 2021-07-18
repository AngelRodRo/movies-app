import client from './axios';

import {
    DISCOVER_MOVIES_ENDPOINT,
    MOVIES_DETAILS,
    SEARCH_MOVIES_ENDPOINT,
} from '../constants';

/**
 * Search result
 * @typedef {{poster_path: string, adult: boolean, overview: string, release_date: string, id: number}} SearchResult
 */


/**
 * Search metadata
 * @typedef {Object} SearchMetadata
 * @property {number} page - page
 * @property {SearchResult[]} results - search results
 */

/**
 *
 * @param {string} sortBy - Sort param
 * @returns {SearchMetadata} - Search Metadata
 */

export const discoverMovies = (sortBy = 'popularity.desc') =>
    client.get(`${DISCOVER_MOVIES_ENDPOINT}?sort_by=${sortBy}`)
        .then(response => response.data);

/**
 *
 * @param {string} query - Query param
 * @returns {Result} - Result
 */

export const searchMovies = (query = '') =>
    client.get(`${SEARCH_MOVIES_ENDPOINT}?query=${query}`)
        .then(response => response.data);

/**
 *
 * @param {string} id - Query param
 * @returns {SearchResult} - Result
 */
export const getMovieDetails = id =>
    client.get(`${MOVIES_DETAILS}/${id}`)
        .then(response => response.data);