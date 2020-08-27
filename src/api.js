import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com/search/users?q=c'
});

export default api;