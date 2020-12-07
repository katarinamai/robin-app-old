import axios from 'axios';

const api = axios.create({
    baseURL: 'https://openbankinghacka.herokuapp.com/auth'
});

export default api;