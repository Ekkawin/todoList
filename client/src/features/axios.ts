import axios from 'axios';

const todoAxios = axios.create({
  baseURL: 'http://localhost:5000/api',
});
export { todoAxios };
