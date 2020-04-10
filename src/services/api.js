import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tianenamg.com',
});
export default api;
