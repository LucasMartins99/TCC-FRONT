import axios from 'axios';

const api = axios.create({
  baseURL: 'http://tianenamg-com.umbler.net',
});
export default api;
