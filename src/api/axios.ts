import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.momentpic.store',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
  withCredentials: true,
});

export default instance;
