import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const client = axios.create({
    baseURL: BASE_URL,
});

client.interceptors.request.use((config) => ({
    ...config,
    params: {
        api_key: API_KEY,
        ...config.params
    }
}));

export default client;